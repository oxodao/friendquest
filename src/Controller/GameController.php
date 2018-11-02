<?php
/**
 * @author Nathan JANCZEWSKI <nathan@janczewski.fr>
 */

namespace App\Controller;

use App\Response\ErrorResponse;
use App\Serialization\SerializedRequest;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class GameController extends SerializerAwareController
{

    /**
     * @Route("/api/games", methods={"GET"})
     * Returns only game infos
     */
    public function getGameList(): Response
    {
        $user = $this->getUser();
        return new SerializedRequest($this->serializer, $user->getGames(), [ 'Games', 'PlayerUUID' ]);
    }

    /**
     * @Route("/api/games/{id}", methods={"GET"})
     * Return a full-blown game
     */
    public function getOneGame(string $id): Response
    {
        $user = $this->getUser();
        $game = $user->getGame($id);

        if ($game !== null) {
            return new SerializedRequest($this->serializer, $game, ['Game', 'PlayerUUID']);
        }

        return new ErrorResponse(404, "You don't have a game with this ID");
    }

}