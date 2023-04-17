<?php

namespace App\Http;

use App\Http\Middleware\ApiAdmin;
use App\Http\Middleware\ApiAdminToken;
use App\Http\Middleware\ApiStore;
use App\Http\Middleware\ApiStoreToken;
use Illuminate\Foundation\Http\Kernel as HttpKernel;

class Kernel extends HttpKernel
{
    /**
     * The application's global HTTP middleware stack.
     *
     * These middleware are run during every request to your application.
     *
     * @var array<int, class-string|string>
     */
    protected $middleware = [
        \Illuminate\Http\Middleware\HandleCors::class,
        \Illuminate\Foundation\Http\Middleware\ValidatePostSize::class,
        \Illuminate\Foundation\Http\Middleware\ConvertEmptyStringsToNull::class,
    ];

    /**
     * The application's route middleware groups.
     *
     * @var array<string, array<int, class-string|string>>
     */
    protected $middlewareGroups = [
        'api-admin' => [
            ApiAdmin::class
        ],
        'api-admin-token' => [
            ApiAdminToken::class
        ],
        'api-store' => [
            ApiStore::class
        ],
        'api-store-token' => [
            ApiStoreToken::class
        ],
    ];
}
