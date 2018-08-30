<?php
/**
 * @author Nathan JANCZEWSKI <nathan@janczewski.fr>
 */

namespace App\Serialization;


use App\Entity\Game;
use Symfony\Component\Serializer\Normalizer\DenormalizerInterface;
use Symfony\Component\Serializer\Normalizer\NormalizerAwareInterface;
use Symfony\Component\Serializer\Normalizer\NormalizerAwareTrait;
use Symfony\Component\Serializer\Normalizer\NormalizerInterface;

class GameNormalizer implements NormalizerInterface, DenormalizerInterface, NormalizerAwareInterface
{
    use NormalizerAwareTrait;

    private function normalizeGame(Game $game, string $format, array $context)
    {
        return [
            'id' => $game->getId(),
            'firstPlayer' => $this->normalizer->normalize($game->getFirstPlayer(), $format, $context),
            'secondPlayer' => $this->normalizer->normalize($game->getSecondPlayer(), $format, $context),
            'isFirstPlayerTurn' => $game->isFirstPlayerTurn()
        ];
    }

    public function normalize($object, $format = null, array $context = array())
    {
        $hasGroups = array_key_exists('groups', $context);

        $game = $this->normalizeGame($object, $format, $context);

        if ($hasGroups && in_array('Game', $context[ 'groups' ])) {
            $game['answers'] = $this->normalizer->normalize($object->getAnswers(), $format, $context);
        }

        return $game;
    }

    public function supportsNormalization($data, $format = null)
    {
//        return false;
        return is_object($data) && $data instanceof Game;
    }

    /**
     * No deserialization [yet]
     */

    public function denormalize($data, $class, $format = null, array $context = array())
    {
    }

    public function supportsDenormalization($data, $type, $format = null)
    {
        return false;
    }
}