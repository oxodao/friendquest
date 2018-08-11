<?php
namespace App\Entity;
use Doctrine\ORM\Mapping as ORM;
use Ramsey\Uuid\Uuid;

/**
 * Represents an answer to a question in a game
 * @author Nathan JANCZEWSKI <nathan@janczewski.fr>
 *
 * @ORM\Entity
 * @ORM\Table(name="answer")
 */
class Answer
{

    /**
     * @ORM\Id
     * @ORM\Column(type="uuid")
     * @ORM\GeneratedValue(strategy="NONE")
     */
    private $id;

    /**
     * @ORM\ManyToOne(targetEntity="App\Entity\Game")
     */
    private $game;

    public function __construct(Game $game)
    {
        $this->id = Uuid::uuid4();
        $this->game = $game;
    }

}