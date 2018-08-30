<?php

namespace App\Entity;

use Doctrine\ORM\Mapping as ORM;
use Ramsey\Uuid\Uuid;

/**
 * Represents a question
 * @author Nathan JANCZEWSKI <nathan@janczewski.fr>
 *
 * @ORM\Entity
 * @ORM\Table(name="question")
 */
class Question
{

    /**
     * @ORM\Id()
     * @ORM\Column(type="uuid")
     * @ORM\GeneratedValue(strategy="NONE")
     * @var Uuid
     */
    private $id;

    /**
     * @ORM\Column(type="string", length=255)
     * @var string
     */
    private $question;

    /**
     * @ORM\Column(type="boolean")
     * @var bool
     */
    private $isAdult;

    /**
     * @ORM\Column(type="simple_array")
     * @var array
     */
    private $answers;


    public function __construct()
    {
        $this->id = Uuid::uuid4();
        $this->answers = [];
    }

    public function getId(): Uuid
    {
        return $this->id;
    }

    public function getQuestion(): string
    {
        return $this->question;
    }

    public function setQuestion(string $question): Question
    {
        $this->question = $question;
        return $this;
    }

    public function isAdult(): bool
    {
        return $this->isAdult;
    }

    public function setAdult(bool $adult): Question
    {
        $this->isAdult = $adult;
        return $this;
    }

    public function addAnswer(string $answer): int
    {
        return array_push($this->answers, $answer);
    }

    public function getAnswer(int $val): string
    {
        return $this->answers[$val];
    }

    public function getAnswers(): array
    {
        return $this->answers;
    }

}