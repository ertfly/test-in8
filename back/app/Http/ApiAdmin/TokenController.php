<?php

namespace App\Http\ApiAdmin;

class TokenController
{
    public function create(){
        return [
            'token' => 'token-admin'
        ];
    }
}
