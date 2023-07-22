<?php

namespace App\Http\Controllers;

use App\Models\Resume;
use Illuminate\Foundation\Auth\Access\AuthorizesRequests;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Routing\Controller as BaseController;
use Illuminate\Support\Facades\Auth;

/*
 * @OA\Info(title="My First API", version="0.1")
 */


/**
 * @OA\Info(
 *      title="Your Application",
 *      version="1.0.0",
 *      description="A short description of your application",    
 *      @OA\Contact(
 *          email="you@your-app.com"
 *      ),
 *      @OA\License(
 *          name="Apache 2.0",
 *          url="http://www.apache.org/licenses/LICENSE-2.0.html"
 *      )
 * )
 */


class Controller extends BaseController
{
    use AuthorizesRequests, ValidatesRequests;
    /**
     * @param resume_id
     * @return bool
     */
    public function notaccestoresume($resume_id){
        $user = Auth::user();
        $resume = Resume::findOrFail($resume_id);
        if ($resume->user_id==$user->id) {
           return true;
        }
        return false;
    }
}
