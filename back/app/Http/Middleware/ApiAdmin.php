<?php

namespace App\Http\Middleware;

use Closure;
use Exception;
use Illuminate\Http\Request;

class ApiAdmin
{
    public function handle(Request $request, Closure $next)
    {
        try {
            if ($request->header('appKey') != 'CHAVEADMIN') {
                throw new Exception('Chave de integração inválida!');
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
