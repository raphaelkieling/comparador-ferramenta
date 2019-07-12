<?php


namespace App\Services;

use App\Entity\Brand;
use App\Utils\RecursiveArrayCollection;
use App\Repository\BrandRepository;
use Doctrine\ORM\EntityManagerInterface;

class BrandService
{
    private $brandRepository;
    private $em;

    public function __construct(EntityManagerInterface $em, BrandRepository $brandRepository)
    {
        $this->em = $em;
        $this->brandRepository = $brandRepository;
    }

    public function findAll(){
        return $this->brandRepository->findAll();
    }

    public function create(Brand $brand){
        return $this->brandRepository->create($brand);
    }
}