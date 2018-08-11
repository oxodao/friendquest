<?php

namespace App\Response;

use Symfony\Component\HttpFoundation\JsonResponse;

/**
 * @author Nathan JANCZEWSKI <nathan@janczewski.fr>
 */
class ErrorResponse extends JsonResponse
{
   public function __construct(int $errorCode, string $message, array $headers = [])
   {
       parent::__construct(["code" => $errorCode, "message" => $message], 400, $headers, false);
   }
}