<?php

namespace App\Repository;

use App\Entity\Brand;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bridge\Doctrine\RegistryInterface;

class BrandRepository extends ServiceEntityRepository
{
    private $em;
    public function __construct(RegistryInterface $registry, EntityManagerInterface $em)
    {
        $this->em = $em;
        parent::__construct($registry, Brand::class);
    }

    public function findAll() : array
    {
        return $this
            ->createQueryBuilder('u')
            ->getQuery()
            ->getArrayResult();
    }

    public function create(Brand $brand) : Brand{
        $this->em->persist($brand);
        $this->em->flush();
        return $brand;
    }
}
