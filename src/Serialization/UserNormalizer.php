<?php

namespace App\Serialization;

use App\Entity\Friendship;
use App\Entity\User;
use Symfony\Component\Serializer\Exception\CircularReferenceException;
use Symfony\Component\Serializer\Exception\InvalidArgumentException;
use Symfony\Component\Serializer\Exception\LogicException;
use Symfony\Component\Serializer\Normalizer\DenormalizerInterface;
use Symfony\Component\Serializer\Normalizer\NormalizerInterface;

/**
 * @author Nathan JANCZEWSKI <nathan@janczewski.fr>
 */
class UserNormalizer implements NormalizerInterface, DenormalizerInterface
{

    private function mapFriend(User $currUser, Friendship $friendship)
    {
        /** @var User $friend */
        $friend = $friendship->getReceiver();
        if ($currUser->getId() === $friend->getId()) {
            $friend = $friendship->getEmitter();
        }

        return $this->normalizeFriend($friend, $friendship->getState());
    }

    private function normalizeFriend(User $u, int $state)
    {
        return [
            "id" => $u->getId(),
            "username" => $u->getUsername(),
            "image" => $u->getImage(),
            "state" => $state
        ];
    }

    public function denormalize($data, $class, $format = null, array $context = array())
    {
    }

    // We don't need to denormalize for now at least
    public function supportsDenormalization($data, $type, $format = null)
    {
        return false;
    }

    /**
     * Normalizes an object into a set of arrays/scalars.
     *
     * @param User $object Object to normalize
     * @param string $format Format the normalization result will be encoded as
     * @param array $context Context options for the normalizer
     *
     * @return array|string|int|float|bool
     *
     * @throws InvalidArgumentException   Occurs when the object given is not an attempted type for the normalizer
     * @throws CircularReferenceException Occurs when the normalizer detects a circular reference when no circular
     *                                    reference handler can fix it
     * @throws LogicException             Occurs when the normalizer is not called in an expected context
     */
    public function normalize($object, $format = null, array $context = array())
    {
        $user = ["id" => $object->getId(), "username" => $object->getUsername(), "image" => $object->getImage()];

        $hasGroups = array_key_exists('groups', $context);

        if (!$hasGroups || ($hasGroups && !in_array('AddFriend', $context['groups']))) {
            $user['friends'] = [];
            foreach ($object->getFriends() as $friend) {
                $user['friends'][] = $this->mapFriend($object, $friend);
            }

            $user['pendings'] = [];
            foreach ($object->getFriendsPending() as $pending) {
                $user['pendings'][] = $this->normalizeFriend($pending->getReceiver(), $pending->getState());
            }

            $user['requests'] = [];
            foreach ($object->getFriendRequests() as $request) {
                $user['requests'][] = $this->normalizeFriend($request->getEmitter(), $request->getState());
            }
        }

        return $user;
    }

    /**
     * This normalizer works for user only
     */
    public function supportsNormalization($data, $format = null)
    {
        return is_object($data) && $data instanceof User;
    }
}