<?php
/**
 * @author Nathan JANCZEWSKI <nathan@janczewski.fr>
 */

namespace App\Controller;

use App\Entity\User;
use App\Response\ErrorResponse;
use App\Serialization\SerializedRequest;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class FriendController extends SerializerAwareController
{

    /**
     * @Route("/api/me", methods={"GET"})
     */
    public function me(): Response
    {
        return new SerializedRequest($this->serializer, $this->getUser(), [ 'Me', 'Friend.js' ], true);
    }

    /**
     * @Route("/api/friends/{friend}", methods={"POST"})
     */
    public function addFriend(EntityManagerInterface $emi, $friend): Response
    {
        /** @var User $user */
        $user = $this->getUser();

        /** @var User $friendToAdd */
        $friendToAdd = $emi->getRepository(User::class)->findOneBy(["username" => $friend]);

        if (null !== $friendToAdd && $user->getId() !== $friendToAdd->getId()) {
            $friendship = $user->addFriend($friendToAdd);

            $emi->persist($user);
            $emi->flush();

            return new SerializedRequest($this->serializer, $friendship, ["AddFriend"]);
        } else if ($friendToAdd->getId() === $user->getId()) {
            return new JsonResponse(["code" => "409", "message" => "You are trying to add yourself as friend"]);
        }

        return new ErrorResponse(404, "The friend cannot be found");
    }

    /**
     * @Route("/api/friends/{friend}", methods={"DELETE"})
     */
    public function removeFriend(EntityManagerInterface $emi, $friend)
    {
        /** @var User $user */
        $user = $this->getUser();

        /** @var User $friendToDelete */
        $friendToDelete = $emi->getRepository(User::class)->findOneBy(["username" => $friend]);

        if (null !== $friendToDelete) {
            $removed = $user->removeFriend($friendToDelete);
            $emi->persist($user);

            $friendToDelete->removeFriend($user);
            $emi->persist($friendToDelete);
            $emi->flush();

            if (!$removed) {
                return new JsonResponse(["code" => 404, "message" => "User $friend was not in the friendlist !"]);
            }

            return new JsonResponse(["code" => 410, "message" => "Friend.js $friend removed!"]);
        }

        return new ErrorResponse(404, "The friend cannot be found");
    }

}