<?php

namespace App\Http\ApiStore;

class TokenController
{
    public function create(){
        return [
            'token' => 'token-store'
        ];
    }
}
