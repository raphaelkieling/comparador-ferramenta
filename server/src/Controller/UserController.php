<?php

namespace App\Controller;

use App\Entity\User;
use App\Mappers\UserMapper;
use App\Services\UserService;
use Doctrine\ORM\EntityManager;
use Doctrine\ORM\EntityManagerInterface;
use FOS\UserBundle\Model\UserManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use FOS\RestBundle\Controller\Annotations as Rest;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

/**
 * Class UserController
 * @package App\Controller
 * @Route("/api")
 */
class UserController extends AbstractController
{
    private $userService;

    public function __construct(UserService $userService)
    {
        $this->userService = $userService;
    }

    /**
     * @Rest\Get("/user", name="user")
     */
    public function index():JsonResponse
    {
        return new JsonResponse(["params"=>$this->userService->findAll()]);
    }

    /**
     * @Rest\Post("/user", name="user_register")
     */
    public function register(Request $request) : ?JsonResponse
    {
        try{
            $user = $this->userService->create(UserMapper::fromRegister($request));
            return new JsonResponse(["params"=>$user],Response::HTTP_OK);
        }catch (\Exception $exception){
            return new JsonResponse(["params"=>$exception->getMessage()]);
        }
    }
}
