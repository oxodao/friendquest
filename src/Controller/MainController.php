<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

/**
 * This controller matches website routes (Index, app, ...)
 *
 * @author Nathan JANCZEWSKI <nathan@janczewski.fr>
 */
class MainController extends Controller
{

    /**
     * @Route("/")
     */
    public function home(): Response
    {
        //return $this->render('index.html.twig');
        return $this->redirectToRoute('app');
    }

    /**
     * @Route("/app", name="app")
     */
    public function app(): Response
    {
        return $this->render('app.html.twig');
    }

}