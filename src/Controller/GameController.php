<?php
/**
 * @author Nathan JANCZEWSKI <nathan@janczewski.fr>
 */

namespace App\Controller;

use App\Entity\Game;
use App\Entity\User;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class GameController extends Controller
{

    /**
     * @Route("/api/games", methods={"GET"})
     */
    public function getGameList(): Response
    {
        /** @var User $user */
        $user = $this->getUser();

        $games = [];
        /** @var Game $game */
        foreach($user->getGames() as $game) {
            $games[] = $game->getFirstPlayer()->getUsername() . "(*) vs " . $game->getSecondPlayer()->getUsername();
        }

        return new JsonResponse($games);
    }

}