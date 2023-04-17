<?php

use App\Http\ApiStore\AuthController;
use App\Http\ApiStore\TokenController;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('api-store')->post('/token', [TokenController::class,'create']);
Route::middleware('api-store-token')->get('/auth', [AuthController::class, 'detail']);