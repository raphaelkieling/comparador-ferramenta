<?php


namespace App\Services;

use App\Entity\User;
use App\Repository\UserRepository;
use Doctrine\DBAL\ConnectionException;
use Doctrine\ORM\EntityManagerInterface;
use FOS\UserBundle\Model\UserManagerInterface;

class UserService
{
    private $userRepository;
    private $em;
    private $userManager;

    public function __construct(EntityManagerInterface $em, UserRepository $userRepository, UserManagerInterface $userManager)
    {
        $this->em = $em;
        $this->userRepository = $userRepository;
        $this->userManager = $userManager;
    }

    /**
     * @param User $user
     * @return User|null
     * @throws ConnectionException
     */
    public  function create(User $user): ?User{
        $this->em->getConnection()->beginTransaction();
        try{
            $this->userManager->updateUser($user);
            $this->em->flush();
            $this->em->getConnection()->commit();
            return $user;
        }catch (\Exception $exception){
            $this->em->getConnection()->rollBack();
            return $exception;
        }
    }

    public function findAll(){
        return $this->userRepository->findAll();
    }
}