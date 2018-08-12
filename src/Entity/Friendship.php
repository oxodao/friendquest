<?php

namespace App\Entity;

use Doctrine\ORM\Mapping as ORM;
use Ramsey\Uuid\Uuid;
use Symfony\Component\Serializer\Annotation\Groups;

/**
 * Friendship between two user
 * @author Nathan JANCZEWSKI <nathan@janczewski.fr>
 *
 * @ORM\Entity
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
     * @Groups({"Me"})
     */
    protected $id;

    /**
     * @ORM\ManyToOne(targetEntity="App\Entity\User", inversedBy="friends")
     * @Groups({"AddFriend"})
     */
    private $emitter;

    /**
     * @ORM\ManyToOne(targetEntity="App\Entity\User", inversedBy="friendsWithMe")
     * @Groups({"AddFriend"})
     */
    private $receiver;

    /**
     * @ORM\Column(type="integer")
     * @Groups({"Me", "AddFriend"})
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