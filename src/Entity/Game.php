<?php
namespace App\Entity;
use Doctrine\ORM\Mapping as ORM;
use Ramsey\Uuid\Uuid;

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
     */
    private $id;

    /**
     * @ORM\ManyToOne(targetEntity="App\Entity\User", inversedBy="initializedGames")
     */
    private $firstPlayer;

    /**
     * @ORM\ManyToOne(targetEntity="App\Entity\User", inversedBy="joinedGames")
     */
    private $secondPlayer;

    /**
     * @ORM\Column(type="boolean")
     */
    private $isFirstPlayerTurn;

    /**
     * @ORM\OneToMany(targetEntity="App\Entity\Answer", mappedBy="game")
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
        return $this->answers;
    }

    public function getLastAnswers(): array
    {
        $cnt = count($this->answers);
        if ($cnt > 6) {
            return array_splice($this->answers, $cnt - 6, 6);
        }

        return $this->answers;
    }

}