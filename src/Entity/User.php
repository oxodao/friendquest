<?php

namespace App\Entity;

use Doctrine\ORM\Mapping as ORM;
use Ramsey\Uuid\Uuid;
use Symfony\Component\Security\Core\User\UserInterface;
use Symfony\Component\Serializer\Annotation\Groups;
use Symfony\Component\Serializer\Exception\BadMethodCallException;
use Symfony\Component\Serializer\Exception\CircularReferenceException;
use Symfony\Component\Serializer\Exception\ExtraAttributesException;
use Symfony\Component\Serializer\Exception\InvalidArgumentException;
use Symfony\Component\Serializer\Exception\LogicException;
use Symfony\Component\Serializer\Exception\RuntimeException;
use Symfony\Component\Serializer\Exception\UnexpectedValueException;
use Symfony\Component\Serializer\Normalizer\DenormalizerInterface;
use Symfony\Component\Serializer\Normalizer\NormalizerInterface;

/**
 * Standard user class
 * @author Nathan JANCZEWSKI <nathan@janczewski.fr>
 *
 * @ORM\Entity
 * @ORM\Table(name="fos_user")
 */
class User implements UserInterface, \Serializable
{
    /**
     * @ORM\Id
     * @ORM\Column(type="uuid")
     * @ORM\GeneratedValue(strategy="NONE")
     * @Groups({"PlayerUUID", "Me", "Friend", "AddFriend" })
     */
    protected $id;

    /**
     * @ORM\Column(type="string", length=25, unique=true)
     * @Groups({"Me", "Friend", "AddFriend" })
     */
    private $username;

    /**
     * @ORM\Column(type="string", length=64)
     */
    private $password;

    /**
     * @ORM\Column(type="string", length=254, unique=true, nullable=true)
     * @Groups({"Me"})
     */
    private $email;

    /**
     * @ORM\Column(type="string", length=1024)
     * @Groups({"Me", "Friend"})
     */
    private $image;

    /**
     * @ORM\OneToMany(targetEntity="App\Entity\Game", mappedBy="firstPlayer")
     */
    private $initializedGames;

    /**
     * @ORM\OneToMany(targetEntity="App\Entity\Game", mappedBy="secondPlayer")
     */
    private $joinedGames;

    /**
     * @ORM\OneToMany(targetEntity="App\Entity\Friendship", mappedBy="emitter", cascade={"persist"})
     * @ORM\JoinColumn(name="emitter", referencedColumnName="id", onDelete="CASCADE")
     * @Groups({"Me"})
     */
    private $friends;

    /**
     * @ORM\OneToMany(targetEntity="App\Entity\Friendship", mappedBy="receiver", cascade={"persist"})
     * @ORM\JoinColumn(name="emitter", referencedColumnName="id", onDelete="CASCADE")
     * @Groups({"Me"})
     */
    private $friendsWithMe;

    /**
     * @ORM\Column(type="simple_array")
     */
    protected $roles;

    public function __construct()
    {
        $this->id = Uuid::uuid4();
        $this->friends = new \Doctrine\Common\Collections\ArrayCollection();
        $this->friendsWithMe = new \Doctrine\Common\Collections\ArrayCollection();
    }

    public function getId(): string
    {
        return $this->id;
    }

    public function getUsername(): ?string
    {
        return $this->username;
    }

    public function setUsername(string $username): User
    {
        $this->username = $username;
        return $this;
    }

    public function getPassword(): ?string
    {
        return $this->password;
    }

    public function setPassword(string $encodedPassword): User
    {
        $this->password = $encodedPassword;
        return $this;
    }

    public function getEmail(): ?string
    {
        return $this->email;
    }

    public function setEmail(string $email): User
    {
        $this->email = $email;
        return $this;
    }

    public function getRoles(): ?array
    {
        return $this->roles;
    }

    public function setRoles(array $roles): User
    {
        $this->roles = $roles;
        return $this;
    }

    public function getFriendRequests()
    {
        return $this->friendsWithMe->filter(function (Friendship $frd) {
            return $frd->getState() === Friendship::$STATE_PENDING;
        })->toArray();
    }

    public function getFriendsPending() {
        return $this->friends->filter(function (Friendship $frd) {
            return $frd->getState() === Friendship::$STATE_PENDING;
        })->toArray();
    }

    public function getFriends()
    {
        $filterFunc = function (Friendship $frd) {
            return $frd->getState() === Friendship::$STATE_ACCEPTED;
        };

        $myFriends = $this->friends->filter($filterFunc);
        $friendsWithMe = $this->friendsWithMe->filter($filterFunc);

        return array_merge($myFriends->toArray(), $friendsWithMe->toArray());
    }

    /**
     * Add a friend to his lists
     * Will also warn the other user that he has added him
     */
    public function addFriend(User $user): ?Friendship
    {
        // If we try to add ourself
        if ($user === $this) {
            return null;
        }

        // If the user is already in my friendlist
        // i.e; Already asked him (Either accepted or pending)
        foreach ($this->friends->toArray() as $friendship) {
            if ($friendship->getReceiver()->getId() === $user->getId()) {
                return $friendship;
            }
        }

        // If the user asked me, accept him
        foreach ($this->friendsWithMe->toArray() as $friendship) {
            if ($friendship->getEmitter()->getId() === $user->getId()) {
                return $friendship->setState(Friendship::$STATE_ACCEPTED);
            }
        }

        // Else, this is a new relationship
        $friendship = (new Friendship($this, $user))->setState(Friendship::$STATE_PENDING);
        $this->friends->add($friendship);
        return $friendship;
    }

    public function getImage(): string
    {
        return $this->image;
    }

    public function setImage(string $image): User
    {
       $this->image = $image;
       return $this;
    }

    /**
     * Gives an array containing all games that the user is playing
     */
    public function getGames(): array
    {
        return array_merge($this->initializedGames->toArray(), $this->joinedGames->toArray());
    }

    /**
     * Tries to find the game by id
     */
    public function getGame(string $id): ?Game
    {
        foreach ($this->initializedGames->toArray() as $game) {
            if ($id === $game->getId()) {
                return $game;
            }
        }

        foreach ($this->joinedGames->toArray() as $game) {
            if ($id === $game->getId()) {
                return $game;
            }
        }

        return null;
    }

    public function getSalt(): ?string
    {
        // We are using bcrypt, so no need for salt
        return null;
    }

    public function eraseCredentials()
    {
    }

    public function serialize(): string
    {
        return serialize([
            $this->id,
            $this->username,
            $this->password
        ]);
    }

    public function unserialize($serialized): void
    {
        list(
            $this->id,
            $this->username,
            $this->password
            ) = $this->unserialize($serialized, array('allowed_classes' => false));
    }
}