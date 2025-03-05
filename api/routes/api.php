<?php

use App\Http\Controllers\AuthController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::prefix('auth')->group(function () {

    Route::post('login', [AuthController::class, 'login']);

});

Route::middleware(['auth:sanctum'])->group(function () {

    Route::prefix('auth')->group(function () {

        Route::get('/user', function (Request $request) {
            return $request->user();
        });

    });

});
