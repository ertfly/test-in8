<?php

namespace App\Http\Middleware;

use Closure;
use Exception;
use Illuminate\Http\Request;

class ApiAdminToken
{
    public function handle(Request $request, Closure $next)
    {
        exit('entro');
        try {
            if ($request->header('appKey') != 'CHAVEADMIN') {
                throw new Exception('Chave de integração inválida!');
            }

            if ($request->header('token') != 'token-admin') {
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
