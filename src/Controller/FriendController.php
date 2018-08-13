<?php
/**
 * @author Nathan JANCZEWSKI <nathan@janczewski.fr>
 */

namespace App\Controller;

use App\Entity\Friendship;
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
        return new SerializedRequest($this->serializer, $this->getUser(), ['Me', 'Friend.js'], true);
    }

    /**
     * @Route("/api/friends/{friend}", methods={"POST"})
     */
    public function addFriend(EntityManagerInterface $emi, $friend): Response
    {
        /** @var User $user */
        $user = $this->getUser();

        if ($friend === $user->getUsername()) {
            return new ErrorResponse(406, "You can't add yourself as friend");
        }

        /** @var User $friendToAdd */
        $friendToAdd = $emi->getRepository(User::class)->findOneBy(["username" => $friend]);

        if (null === $friendToAdd) {
            return new ErrorResponse(404, "This user does not exists");
        }

        $friendship = $user->addFriend($friendToAdd);

        $emi->persist($user);
        $emi->flush();

        // I get the state since adding a friends works both for requesting someone, or accepting someone
        return new SerializedRequest($this->serializer, ['friend' => $friendToAdd, 'state' => $friendship->getState()], ['AddFriend']);
    }

    /**
     * @Route("/api/friends/{friend}", methods={"DELETE"})
     */
    public function removeFriend(EntityManagerInterface $emi, $friend)
    {
        /** @var User $user */
        $user = $this->getUser();

        if ($friend === $user->getId()) {
            return new ErrorResponse(406, "You can't remove yourself");
        }

        /** @var Friendship $pending */
        $friendshipId = null;
        foreach ($user->getFriendsPending() as $pending) {
            if ($friendshipId !== null) break;

            if ($pending->getReceiver()->getId() === $friend) {
                $friendshipId = $pending->getId();
            }
        }

        /** @var Friendship $friend */
        foreach ($user->getFriends() as $currFriend) {
            if ($friendshipId !== null) break;

            if ($currFriend->getReceiver()->getId() === $friend || $currFriend->getEmitter()->getId() === $friend) {
                $friendshipId = $currFriend->getId();
            }
        }

        /** @var Friendship $request */
        foreach ($user->getFriendRequests() as $request) {
            if ($friendshipId !== null) break;

            if ($request->getEmitter()->getId() === $friend) {
                $friendshipId = $request->getId();
            }
        }

        if ($friendshipId === null) {
            return new ErrorResponse(404, "You are not friends");
        }

        $fs = $emi->getRepository(Friendship::class)->findOneBy(["id" => $friendshipId]);
        $emi->remove($fs);
        $emi->flush();

        return new SerializedRequest($this->serializer, ['id' => $friend], []);

    }

}