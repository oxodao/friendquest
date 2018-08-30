<?php
/**
 * @author Nathan JANCZEWSKI <nathan@janczewski.fr>
 */

namespace App\Serialization;
use App\Entity\Answer;
use Symfony\Component\Serializer\Normalizer\DenormalizerInterface;
use Symfony\Component\Serializer\Normalizer\NormalizerAwareInterface;
use Symfony\Component\Serializer\Normalizer\NormalizerAwareTrait;
use Symfony\Component\Serializer\Normalizer\NormalizerInterface;

class AnswerNormalizer implements NormalizerInterface, DenormalizerInterface, NormalizerAwareInterface
{
    use NormalizerAwareTrait;

    public function normalize($object, $format = null, array $context = array())
    {
        return [
            'question' => $this->normalizer->normalize($object->getQuestion(), $format, $context),
            'correctAnswer' => $object->getCorrectAnswer(),
            'playerAnswer' => $object->getPlayerAnswer()
        ];
    }

    public function supportsNormalization($data, $format = null)
    {
        return is_object($data) && $data instanceof Answer;
    }

    public function denormalize($data, $class, $format = null, array $context = array())
    {
    }

    public function supportsDenormalization($data, $type, $format = null)
    {
        return false;
    }
}
