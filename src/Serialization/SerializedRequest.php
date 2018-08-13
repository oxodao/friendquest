<?php
/**
 * @author Nathan JANCZEWSKI <nathan@janczewski.fr>
 */

namespace App\Serialization;


use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\Serializer\Serializer;
use Symfony\Component\Serializer\SerializerInterface;

class SerializedRequest extends JsonResponse
{
    public function __construct(SerializerInterface $serializer, $object, array $groups, bool $enableMaxDepth = false)
    {
        parent::__construct($serializer->serialize($object, 'json', [ 'groups' => $groups, 'enable_max_depth' => $enableMaxDepth]), 200, [], true);
    }

}