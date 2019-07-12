<?php

namespace App\Utils;

use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Response;

class ApiResponse {

    public static function createResponse($data, string $message){
        return [
            "params"=>$data,
            "message"=>$message
        ];
    }

    public static function ok($data, string $message){
        return new JsonResponse(ApiResponse::createResponse($data, $message), Response::HTTP_OK);
    }

    public static function create($data, string $message){
        return new JsonResponse(ApiResponse::createResponse($data, $message), Response::HTTP_CREATED);
    }

    public static function internalError($data, string $message){
        return new JsonResponse(ApiResponse::createResponse($data, $message), Response::HTTP_INTERNAL_SERVER_ERROR);
    }

    public static function bad(string $message){
        return new JsonResponse(ApiResponse::createResponse(null, $message), Response::HTTP_BAD_REQUEST);
    }
}
