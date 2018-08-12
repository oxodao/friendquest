<?php
/**
 * @author Nathan JANCZEWSKI <nathan@janczewski.fr>
 */

namespace App\Controller;


use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\Serializer\SerializerInterface;

class SerializerAwareController extends Controller
{

    protected $serializer;

    public function __construct(SerializerInterface $ser)
    {
        $this->serializer = $ser;
    }

}