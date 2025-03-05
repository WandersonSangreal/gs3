<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class AuthController extends Controller
{

    public function login(Request $request)
    {
        $credentials = $request->validate([
            'email' => 'required|email|max:255',
            'password' => 'required|string|min:8',
        ]);

        if (!Auth::attempt($credentials)) {

            return response(['message' => 'invalid credentials'], 401);

        }

        Auth::user()->tokens()->delete();

        $token = Auth::user()->createToken('api:token')->plainTextToken;

        return response([
            'type' => 'Bearer',
            'token' => $token,
        ]);

    }

    public function register(Request $request)
    {
        //
    }

}
