<?php
/**
 * @author Nathan JANCZEWSKI <nathan@janczewski.fr>
 */

namespace App\Form;

use Symfony\Component\HttpFoundation\File\UploadedFile;
use Symfony\Component\Validator\Constraints as Assert;

class ProfilePictureModel
{

    /**
     * @var UploadedFile
     * @Assert\File(mimeTypes={"image/jpeg", "image/png"})
     * @Assert\NotNull()
     */
    public $pictureSmall;

    /**
     * @var UploadedFile
     * @Assert\File(mimeTypes={"image/jpeg", "image/png"})
     * @Assert\NotNull()
     */
    public $pictureLarge;

    /**
     * @return null|UploadedFile
     */
    public function getPictureLarge(): ?UploadedFile
    {
        return $this->pictureLarge;
    }

    /**
     * @param null|UploadedFile $file
     */
    public function setPictureLarge(?UploadedFile $file){
        $this->pictureLarge = $file;
    }

    /**
     * @return null|UploadedFile
     */
    public function getPictureSmall(): ?UploadedFile
    {
        return $this->pictureSmall;
    }

    /**
     * @param null|UploadedFile $file
     */
    public function setPictureSmall(?UploadedFile $file){
        $this->pictureSmall = $file;
    }

}