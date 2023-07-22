<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request as HttpRequest;

class HomeController extends Controller{
    public function register(HttpRequest $request)
    {
        try {
            $validatedateddata = $request->validate([
                "name" => "required",
                "email" => "required",
                "password" => "required|email|unique:user,email"
            ]);
            $user = User::create([$validatedateddata]);
            $token = $user->createToken("API TOKEN")->plainTextToken;
            return response()->json(["token" => $token]);
        } catch (\Throwable $err) {
            return response()->json(["message" => $err->getMessage()]);
        }
    }

    public function login(HttpRequest $request)
    {
    }
}