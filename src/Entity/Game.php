<?php
namespace App\Entity;
use Doctrine\ORM\Mapping as ORM;
use Ramsey\Uuid\Uuid;
use Symfony\Component\Serializer\Annotation\Groups;
use Symfony\Component\Serializer\Annotation\MaxDepth;

/**
 * Represents a game
 * @author Nathan JANCZEWSKI <nathan@janczewski.fr>
 *
 * @ORM\Entity
 * @ORM\Table(name="game")
 */
class Game {

    /**
     * @ORM\Id
     * @ORM\Column(type="uuid")
     * @ORM\GeneratedValue(strategy="NONE")
     * @Groups({"Game", "Games"})
     */
    private $id;

    /**
     * @ORM\ManyToOne(targetEntity="App\Entity\User", inversedBy="initializedGames")
     * @Groups({"PlayerUUID"})
     */
    private $firstPlayer;

    /**
     * @ORM\ManyToOne(targetEntity="App\Entity\User", inversedBy="joinedGames")
     * @Groups({"PlayerUUID"})
     */
    private $secondPlayer;

    /**
     * @ORM\Column(type="boolean")
     * @Groups({"Game", "Games"})
     */
    private $isFirstPlayerTurn;

    /**
     * @ORM\OneToMany(targetEntity="App\Entity\Answer", mappedBy="game", cascade={"persist", "remove"})
     * @Groups({"Game"})
     */
    private $answers;

    public function __construct(User $firstPlayer)
    {
        $this->id = Uuid::uuid4();
        $this->firstPlayer = $firstPlayer;
        $this->isFirstPlayerTurn = true;
    }

    public function getId(): string
    {
        return $this->id;
    }

    public function getFirstPlayer(): User
    {
        return $this->firstPlayer;
    }

    public function setFirstPlayer(User $firstPlayer): Game
    {
        $this->firstPlayer = $firstPlayer;
        return $this;
    }

    public function getSecondPlayer(): User
    {
        return $this->secondPlayer;
    }

    public function setSecondPlayer(User $secondPlayer): Game
    {
        $this->secondPlayer = $secondPlayer;
        return $this;
    }

    public function isFirstPlayerTurn(): bool
    {
        return $this->isFirstPlayerTurn;
    }

    public function nextTurn(): Game
    {
        $this->isFirstPlayerTurn = !$this->isFirstPlayerTurn;
        return $this;
    }

    public function getAnswers(): array
    {
        return $this->answers->toArray();
    }

    public function addAnswer(Answer $answer): Game{
        $this->answers[] = $answer;
        return $this;
    }

    public function getLastAnswers(): array
    {
        $cnt = count($this->answers);
        if ($cnt > 6) {
            return array_splice($this->answers->toArray(), $cnt - 6, 6);
        }

        return $this->answers->toArray();
    }

    public function getOtherPlayer(User $currUser): User
    {
        if ($this->firstPlayer->getId() === $currUser->getId()) {
            return $this->secondPlayer;
        }
        return $this->firstPlayer;
    }

}