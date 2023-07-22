<?php

namespace App\Http\Controllers;

use App\Models\Resume;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

/**
 * @OA\SecurityScheme(
 *     securityScheme="bearerAuth",
 *     type="http",
 *     scheme="bearer",
 *     bearerFormat="JWT"
 * )
 */

class ResumeController extends Controller
{
    /**
     * @OA\Get(
     *     path="/api/resumes",
     *     summary="get a list of user resume",
     *     description="Obtenir la liste des CV de l'utilisateur authentifié",
     *     tags={"Resume"},
     *     security={{"bearerAuth":{}}},
     *     @OA\Response(
     *         response=200,
     *         description="Opération réussie",
     *         @OA\JsonContent(
     *             @OA\Property(property="message", type="string", example="Liste de vos données"),
     *             @OA\Property(property="data", type="string", example="['id'=>1]"),
     *         )
     *     ),
     *     @OA\Response(
     *         response=401,
     *         description="Non autorisé",
     *         @OA\JsonContent(
     *             @OA\Property(property="error", type="string", example="Token d'authentification manquant ou invalide")
     *         )
     *     ),
     * )
     */

    
     public function index()
    {
        try {
            $user = Auth::user();
            $resume = Resume::where("user_id",$user->id)->get();
            // $resume = $user->resumes()->get();
            return response()->json(["message"=>"resume retrive whit succees","data"=>$resume]);
        } catch (\Throwable $th) {
            return response()
            ->json(["message"=>"une erreur s'est produitte lors de la lecture des resume",'error'=>$th->getMessage()]);
        }
    }

    public function save(Request $request)
    {
        try {
            $validresume = $request->validate([
                'name'=>'required',
                'profession'=>'required',
                'email'=>'required',
                'phone'=>'required|min:6',
                'about'=>'required',
                'photo'=>'required'
            ]);
            $user = Auth::user();
            $validresume['user_id'] = $user->id;
            $resume = Resume::create($validresume);
            
            return response()
                            ->json([
                                'message'=>"resume created whit success",
                                'data'=> $resume
                            ]);

        } catch (\Throwable $th) {
            return response()
            ->json(["message erreur"=>"Une erreur s'est produite","erreur"=>$th->getMessage()]) ;
        }
    }

    public function update(Request $request){
        try {
            $data = $request->json()->all();
            $resume = Resume::findOrFail($data['id']);
            $resume->update($data);
            return response()->json(["message"=>"resume updated whit succees","data" => $resume]);
        } catch (\Throwable $th) {
            return response()->json(["message"=>"and error poccured when trying to udpate",'error'=>$th->getMessage()]);
        }
    }

    public function delete(Request $request){
        try {
            $id = $request->id;
            $resume = Resume::findOrFail($id);
            $resume->delete();
            return response()->json(['message'=>"resume delete whit success"]);
        } catch (\Throwable $th) {
            return response()
            ->json(['message'=>"and error occured when trying to delete",'error'=>$th->getMessage()]);
        }
    }

    public function details(Request $request){
        try {

            $id = $request->id;
            $resume = Resume::findOrFail($id);
            if (!$this->notaccestoresume($id)) {
                return response()->json(["message"=>"you don't have ability to acces this resume"]);    
            }
            return response()->json(['message'=>"request ok","data"=>['resume'=> $resume,"skills"=>$resume->skills()->get()]]);
        } catch (\Throwable $th) {
            return response()->json(['message'=>"and error occured","error"=>$th->getMessage()]);
        }
    }
    
}
