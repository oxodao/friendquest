<?php

namespace App\Entity;

use Doctrine\ORM\Mapping as ORM;
use Ramsey\Uuid\Uuid;
use Serializable;
use Symfony\Component\Serializer\Annotation\Groups;
use Symfony\Component\Serializer\Annotation\MaxDepth;
use Symfony\Component\Serializer\Exception\BadMethodCallException;
use Symfony\Component\Serializer\Exception\CircularReferenceException;
use Symfony\Component\Serializer\Exception\ExtraAttributesException;
use Symfony\Component\Serializer\Exception\InvalidArgumentException;
use Symfony\Component\Serializer\Exception\LogicException;
use Symfony\Component\Serializer\Exception\RuntimeException;
use Symfony\Component\Serializer\Exception\UnexpectedValueException;
use Symfony\Component\Serializer\Normalizer\DenormalizerInterface;
use Symfony\Component\Serializer\Normalizer\NormalizerInterface;
use Symfony\Component\Serializer\SerializerInterface;

/**
 * Friendship between two user
 * @author Nathan JANCZEWSKI <nathan@janczewski.fr>
 *
 * @ORM\Entity(repositoryClass="FriendshipRepository")
 * @ORM\Table(name="friendship")
 */
class Friendship
{
    public static $STATE_PENDING = 0;
    public static $STATE_ACCEPTED = 1;

    /**
     * @ORM\Id
     * @ORM\Column(type="uuid")
     * @ORM\GeneratedValue(strategy="NONE")
     */
    protected $id;

    /**
     * @ORM\ManyToOne(targetEntity="App\Entity\User", inversedBy="friends")
     */
    private $emitter;

    /**
     * @ORM\ManyToOne(targetEntity="App\Entity\User", inversedBy="friendsWithMe")
     */
    private $receiver;

    /**
     * @ORM\Column(type="integer")
     */
    private $state;

    public function __construct(User $emitter, User $receiver)
    {
        $this->id = Uuid::uuid4();
        $this->emitter = $emitter;
        $this->receiver = $receiver;
    }

    public function getId(){return$this->id;}

    public function getEmitter(): User
    {
        return $this->emitter;
    }

    public function getReceiver(): User
    {
        return $this->receiver;
    }

    public function getState(): int
    {
        return $this->state;
    }

    public function setState(int $state): Friendship
    {
        $this->state = $state;
        return $this;
    }
}