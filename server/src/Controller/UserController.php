<?php

namespace App\Controller;

use App\Mappers\UserMapper;
use App\Services\UserService;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use App\Utils\ApiResponse;
use FOS\RestBundle\Controller\Annotations as Rest;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Contracts\Translation\TranslatorInterface;


/**
 * Class UserController
 * @package App\Controller
 * @Route("/api")
 */
class UserController extends AbstractController
{
    private $userService;
    private $translator;

    public function __construct(UserService $userService, TranslatorInterface $translator)
    {
        $this->userService = $userService;
        $this->translator = $translator;
    }

    /**
     * @Rest\Get("/user", name="user")
     */
    public function index():JsonResponse
    {
        return ApiResponse::ok($this->userService->findAll(),"Sucesso ao pegar os usuários");
    }

    /**
     * @Rest\Post("/user", name="user_create")
     */
    public function create(Request $request) : ?JsonResponse
    {
        try{
            $user = $this->userService->create(UserMapper::fromRegister($request));
            return ApiResponse::create($user->toArray(),"Usuário criado com sucesso");
        }catch (\Exception $exception){
            return ApiResponse::bad($exception->getMessage());
        }
    }

    /**
     * @Rest\Put("/user",name="user_edit")
     */
    public function edit(Request $request): ?JsonResponse{
        return ApiResponse::ok('','Changed');
    }
}
