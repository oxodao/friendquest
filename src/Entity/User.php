<?php

namespace App\Entity;

use Doctrine\ORM\Mapping as ORM;
use Ramsey\Uuid\Uuid;
use Symfony\Component\Security\Core\User\UserInterface;

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
     */
    protected $id;

    /**
     * @ORM\Column(type="string", length=25, unique=true)
     */
    private $username;

    /**
     * @ORM\Column(type="string", length=64)
     */
    private $password;

    /**
     * @ORM\Column(type="string", length=254, unique=true, nullable=true)
     */
    private $email;


    /**
     * @ORM\OneToMany(targetEntity="App\Entity\Game", mappedBy="firstPlayer")
     */
    private $initializedGames;

    /**
     * @ORM\OneToMany(targetEntity="App\Entity\Game", mappedBy="secondPlayer")
     */
    private $joinedGames;

    /**
     * @ORM\ManyToMany(targetEntity="User", inversedBy="friendsWithMe")
     * @ORM\JoinTable(name="friends",
     *          joinColumns={@ORM\JoinColumn(name="user_id", referencedColumnName="id")},
     *          inverseJoinColumns={@ORM\JoinColumn(name="friend_user_id", referencedColumnName="id")}
     *      )
     */
    private $friends;

    /**
     * @ORM\ManyToMany(targetEntity="User", mappedBy="friends")
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

    public function getFriends()
    {
        return $this->friends;
    }

    public function getFriendRequests()
    {
        return array_udiff($this->friendsWithMe->toArray(), $this->friends->toArray(), function($a, $b) {
            return $a->getId() === $b->getId() ? 0 : -1;
        });
    }

    /**
     * Add a friend to his lists
     * Will also warn the other user that he has added him
     */
    public function addFriend(User $user): User
    {
        $this->friends->add($user);
        return $this;
    }

    public function removeFriend(User $user): bool
    {
        if ($this->friends->contains($user)) {
            $this->friends->removeElement($user);
            return true;
        }
        return false;
    }

    /**
     * Gives an array containing all games that the user is playing
     */
    public function getGames(): array
    {
        return array_merge($this->initializedGames->toArray(), $this->joinedGames->toArray());
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