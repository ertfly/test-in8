<?php

namespace App\Http\Middleware;

use Closure;
use Exception;
use Illuminate\Http\Request;

class ApiStoreToken
{
    public function handle(Request $request, Closure $next)
    {
        try {
            if ($request->header('appKey') != 'CHAVEADMIN') {
                throw new Exception('Chave de integração inválida!');
            }

            if ($request->header('token') != 'token-store') {
                throw new Exception('Token inválido!');
            }

            return $next($request);
        } catch (Exception $e) {
            return [
                'response' => [
                    'code' => 1,
                    'msg' => $e->getMessage(),
                ]
            ];
        }
    }
}
