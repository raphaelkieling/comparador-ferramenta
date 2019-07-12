<?php


namespace App\Mappers;


use App\Entity\User;
use Symfony\Component\HttpFoundation\Request;

class UserMapper
{
    public static function fromRegister(Request $request): User {
        $user = new User();
        $user->setEmail($request->get('email'));
        $user->setUsername($request->get('username'));
        $user->setPlainPassword($request->get('password'));
        $user->setEnabled(true);
        return $user;
    }
}