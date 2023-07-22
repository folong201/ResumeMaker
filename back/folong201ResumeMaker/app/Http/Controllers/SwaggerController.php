<?php

namespace App\Http\Controllers;
 

use Illuminate\Http\Request;

/**
 * @OA\Get(
 *     path="/api/bonjour",
 *     summary="Get a list of users",
 *     @OA\Response(response="200", description="get a smal message to say hello")
 * )
 */

class SwaggerController extends Controller
{

    public function bonjour(Request $request){
        return "bonjour de la part du swagger laravel daraonli5";
    }
}
