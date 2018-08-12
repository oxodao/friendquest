<?php
/**
 * @author Nathan JANCZEWSKI <nathan@janczewski.fr>
 */

namespace App\Serialization;


use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\Serializer\SerializerInterface;

class SerializedRequest extends JsonResponse
{
    public function __construct(SerializerInterface $serializer, $object, array $groups)
    {
        parent::__construct($serializer->serialize($object, 'json', [ 'groups' => $groups]), 200, [], true);
    }

}