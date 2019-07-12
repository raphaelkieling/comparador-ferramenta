<?php

namespace App\Controller;

use App\Mappers\BrandMapper;
use App\Services\BrandService;
use App\Utils\ApiResponse;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;
use FOS\RestBundle\Controller\Annotations as Rest;

/**
 * Class BrandController
 * @package App\Controller
 * @Route("/api")
 */
class BrandController extends AbstractController
{
    private $brandService;
    public function __construct(BrandService $brandService)
    {
        $this->brandService = $brandService;
    }

    /**
     * @Rest\Get("/brand", name="brand")
     */
    public function findAll()
    {
        return ApiResponse::ok($this->brandService->findAll(),"Marca encontrada com sucesso");
    }

    /**
     * @Rest\Post("/brand", name="brand_create")
     */
    public function create(Request $request)
    {
        try{
            $brand = BrandMapper::fromRegister($request);
            $brandCreated = $this->brandService->create($brand);
            return ApiResponse::create($brandCreated->toArray(),"Marca criada com sucesso");
        }catch (\Exception $exception){
            return ApiResponse::internalError($exception->getMessage());
        }
    }
}
