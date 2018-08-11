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
        return $this->render('index.html.twig');
    }

}