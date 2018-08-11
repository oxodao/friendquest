<?php
/**
 * @author Nathan JANCZEWSKI <nathan@janczewski.fr>
 */

namespace App\Controller;

use App\Entity\User;
use App\Response\ErrorResponse;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class FriendController extends Controller
{

    private function implodeFriends(array $friends, string $delim, User $user = null): string
    {
        $newArr = [];
        /** @var User $friend */
        foreach ($friends as $friend) {
            $fName = $friend->getUsername();
            if ($user != null && !$friend->getFriends()->contains($user)) {
                $fName .= " (*)";
            }
            $newArr[] = $fName;
        }

        return implode($delim, $newArr);
    }

    /**
     * @Route("/api/friends", methods={"GET"})
     */
    public function friends(): Response
    {
        /**
         * @TODO: This is solely for debug purposes. Need to rewrite this asap to the final specs using Symfony's serializer
         */
        /** @var User $user */
        $user = $this->getUser();

        return new JsonResponse(["Mes amis" => $this->implodeFriends($user->getFriends()->toArray(), ', ', $user), "Ils m'ont ajoutés" => $this->implodeFriends($user->getFriendRequests(), ', ')]);
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

        if (null !== $friendToAdd && $user->getId() !== $friendToAdd->getId() && !$user->getFriends()->contains($friendToAdd)) {
            $user->addFriend($friendToAdd);

            $emi->persist($user);
            $emi->flush();

            return new JsonResponse(["code" => 201, "message" => "Friend request sent to $friend !"]);
        } else if ($friendToAdd->getId() === $user->getId()) {
            return new JsonResponse(["code" => "409", "message" => "You are trying to add yourself as friend"]);
        } else if ($user->getFriends()->contains($friendToAdd)) {
            return new JsonResponse(["code" => "409", "message" => "This user is already in your friendlist !"]);
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

            return new JsonResponse(["code" => 410, "message" => "Friend $friend removed!"]);
        }

        return new ErrorResponse(404, "The friend cannot be found");
    }

}