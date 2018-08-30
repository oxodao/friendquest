<?php
/**
 * @author Nathan JANCZEWSKI <nathan@janczewski.fr>
 */

namespace App\Serialization;


use App\Entity\Question;
use Symfony\Component\Serializer\Normalizer\DenormalizerInterface;
use Symfony\Component\Serializer\Normalizer\NormalizerAwareInterface;
use Symfony\Component\Serializer\Normalizer\NormalizerAwareTrait;
use Symfony\Component\Serializer\Normalizer\NormalizerInterface;

class QuestionNormalizer implements NormalizerInterface, NormalizerAwareInterface, DenormalizerInterface
{
    use NormalizerAwareTrait;

    public function normalize($object, $format = null, array $context = array())
    {
        $q = [
            'text' => $object->getQuestion(),
            'adult' => $object->isAdult(),
            'answers' => [],
        ];

        foreach ($object->getAnswers() as $ans) {
            $q['answers'][] = $ans;
        }

        return $q;
    }

    public function supportsNormalization($data, $format = null)
    {
        return is_object($data) && $data instanceof Question;
    }

    public function denormalize($data, $class, $format = null, array $context = array())
    {
    }

    public function supportsDenormalization($data, $type, $format = null)
    {
        return false;
    }

}