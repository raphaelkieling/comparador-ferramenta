<?php

namespace App\Utils;


use Doctrine\Common\Collections\ArrayCollection;

class RecursiveArrayCollection extends ArrayCollection
{
    public function toArray()
    {
        $response = [];
        foreach (parent::toArray() as $object) {
            $response[] = $object->toArray();
        }

        return $response;
    }
}