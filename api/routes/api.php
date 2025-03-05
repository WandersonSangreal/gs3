<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\CardController;
use App\Http\Controllers\FavoriteController;
use App\Http\Controllers\TransactionController;
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

    Route::get('{card}/transactions', [TransactionController::class, 'index']);

    Route::apiResource('card', CardController::class)->only(['index']);
    Route::apiResource('favorite', FavoriteController::class)->only(['index']);

});
