<?php


namespace App\Mappers;


use App\Entity\Brand;
use Symfony\Component\HttpFoundation\Request;

class BrandMapper
{
    public static function fromRegister(Request $request): Brand {
        $brand = new Brand();
        $brand->setDescription($request->get('description'));
        return $brand;
    }
}