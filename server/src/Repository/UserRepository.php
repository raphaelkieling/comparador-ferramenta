<?php

namespace App\Repository;

use App\Entity\User;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\ORM\NonUniqueResultException;
use Doctrine\ORM\Query;
use Symfony\Bridge\Doctrine\RegistryInterface;

class UserRepository extends ServiceEntityRepository
{
    public function __construct(RegistryInterface $registry)
    {
        parent::__construct($registry, User::class);
    }

    public function findAll() : array
    {
        return $this->createQueryBuilder('u')->getQuery()->getArrayResult();
    }

    public function getByEmail(string $email){
        try {
            return $this->createQueryBuilder('u')
                ->where('u.email = :email')
                ->select('u.username','u.email','u.enabled','u.lastLogin')
                ->setParameter('email', $email)
                ->getQuery()
                ->getOneOrNullResult(Query::HYDRATE_ARRAY);
        } catch (NonUniqueResultException $e) {
            return null;
        }
    }
}
