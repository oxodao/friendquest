<?php

namespace App\Entity;

use Doctrine\ORM\Mapping as ORM;
use Ramsey\Uuid\Uuid;
use Symfony\Component\Serializer\Annotation\Groups;

/**
 * Represents an answer to a question in a game
 * @author Nathan JANCZEWSKI <nathan@janczewski.fr>
 *
 * @ORM\Entity
 * @ORM\Table(name="answer")
 */
class Answer
{

    public static $STATE_WATCH = 0;
    public static $STATE_GUESS = 1;
    public static $STATE_ANSWR = 2;
    public static $STATE_TRASH = 3;

    /**
     * @ORM\Id
     * @ORM\Column(type="uuid")
     * @ORM\GeneratedValue(strategy="NONE")
     * @Groups({"Game"})
     */
    private $id;

    /**
     * @ORM\Column(type="integer")
     * @Groups({"Game"})
     */
    private $count;

    /**
     * @ORM\ManyToOne(targetEntity="App\Entity\Game", inversedBy="answers")
     */
    private $game;

    /**
     * @ORM\ManyToOne(targetEntity="App\Entity\Question")
     * @Groups({"Game"})
     */
    private $question;

    /**
     * @ORM\Column(type="integer")
     * @Groups({"Game"})
     */
    private $state;

    /**
     * @ORM\Column(type="integer", nullable=true)
     * @Groups({"Game"})
     */
    private $correctAnswer;

    /**
     * @ORM\Column(type="integer", nullable=true)
     */
    private $playerAnswer;

    public function __construct(Game $game, Question $question, int $count)
    {
        $this->id = Uuid::uuid4();
        $this->game = $game;
        $this->question = $question;
        $this->count = $count;
        $this->state = Answer::$STATE_ANSWR;
    }

    public function getQuestion(): Question
    {
        return $this->question;
    }

    public function setCorrectAnswer(int $answer): Answer
    {
        $this->correctAnswer = $answer;
        return $this;
    }

    public function getCorrectAnswer(): int
    {
        return $this->correctAnswer;
    }

    public function setPlayerAnswer(int $answer): Answer
    {
        $this->playerAnswer = $answer;
        return $this;
    }

    public function getPlayerAnswer(): int
    {
        return $this->playerAnswer;
    }

    public function getState(): string
    {
        return $this->state;
    }

    public function setState(string $state): Answer
    {
        $this->state = $state;
        return $this;
    }

    public function getCount(): int
    {
        return $this->count;
    }

}
