<?php
namespace App\Controller;

use App\Response\ErrorResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

/**
 * This controller is used to log a user in or registering one.
 *
 * @author Nathan JANCZEWSKI <nathan@janczewski.fr>
 */
class LoginController
{

    /**
     * @Route("/api/test")
     */
    public function test(Request $rq)
    {
        $ui = $rq->getUserInfo();
        $u = $rq->getUser();
        return new ErrorResponse(200, "logged as $ui, $u");
    }
}