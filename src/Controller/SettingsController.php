<?php

namespace App\Controller;

use App\Entity\User;
use App\Form\ProfilePictureModel;
use App\Form\ProfilePictureType;
use App\Response\ErrorResponse;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\HttpFoundation\File\UploadedFile;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class SettingsController extends Controller
{

    private $userImagePath;
    private $smallPictureMaxWidth;
    private $smallPictureMaxHeight;
    private $largePictureMaxWidth;
    private $largePictureMaxHeight;

    public function __construct(string $userImagePath, int $smallPictureMaxWidth, int $smallPictureMaxHeight, int $largePictureMaxWidth, int $largePictureMaxHeight)
    {
        $this->userImagePath         = $userImagePath;
        $this->smallPictureMaxWidth  = $smallPictureMaxWidth;
        $this->smallPictureMaxHeight = $smallPictureMaxHeight;
        $this->largePictureMaxWidth  = $largePictureMaxWidth;
        $this->largePictureMaxHeight = $largePictureMaxHeight;
    }

    public static function boundImageSize (int $imgSizeW, int $imgSizeH, int $imgMaxW, int $imgMaxH) {
        $width = $imgSizeW;
        $height = $imgSizeH;
        $ratio = $width/$height;

        if ($imgSizeW > $imgMaxW || $imgSizeH > $imgMaxH) {
            $width = $imgMaxW;
            $height = $width / $ratio;

            if ($height > $imgMaxH) {
                $height = $imgMaxH;
                $width = $height * $ratio;
            }
        }

        return [$width, $height];
    }


    /**
     * @Route("/api/settings/picture", methods={"POST"})
     * @param Request $rq
     * @return Response
     */
    public function getUserPicture(Request $rq)
    {
        /** @var User $user */
        $user = $this->getUser();

        $form = $this->createForm(ProfilePictureType::class, new ProfilePictureModel());
        $form->submit($rq->files->all());
        if ($form->isValid()) {
            /** @var UploadedFile $file */
            $pictureLarge = $form->getData()->getPictureLarge();
            /** @var UploadedFile $file */
            $pictureSmall = $form->getData()->getPictureSmall();

            list($widthSmall, $heightSmall, $typesmall, $attrSmall) = getimagesize($pictureSmall->getRealPath());
            list($widthLarge, $heightLarge, $typeLarge, $attrLarge) = getimagesize($pictureLarge->getRealPath());

            // First we check if the small picture is at 1:1 ratio
            if ($widthSmall != $heightSmall) {
                return new ErrorResponse(400, "Small image do not have a 1:1 aspect ratio");
            }

            // Then we check if the small picture is not too large, and we store it
            $loadedPictSmall = imagecreatefromstring(file_get_contents($pictureSmall->getRealPath()));
            list ($w, $h) = SettingsController::boundImageSize($widthSmall, $heightSmall, $this->smallPictureMaxWidth, $this->smallPictureMaxHeight);
            $loadedPictSmall = imagescale($loadedPictSmall, $w, $h);
            imagepng($loadedPictSmall, $this->userImagePath . $user->getUsername() . "_small.png");

            // Finally we do the same for the large one
            $loadedPictLarge = imagecreatefromstring(file_get_contents($pictureLarge->getRealPath()));
            list ($w, $h) = SettingsController::boundImageSize($widthLarge, $heightLarge, $this->largePictureMaxWidth, $this->largePictureMaxHeight);
            $loadedPictLarge = imagescale($loadedPictLarge, $w, $h);
            imagepng($loadedPictLarge, $this->userImagePath . $user->getUsername() . ".png");

            return new ErrorResponse(200, "Ok");
        }

        $errs = "";
        foreach ($form->getErrors() as $err) {
            $errs .= $err->getMessage() . ", ";
        }

        return new Response($errs, 400);
    }

}