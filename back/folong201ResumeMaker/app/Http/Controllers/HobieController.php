<?php

namespace App\Http\Controllers;

use App\Models\Hobie;
use Illuminate\Http\Request;

class HobieController extends Controller
{
    public function index(Request $request){
        try {
            $resume_id = $request->resume_id;
            $hobies = Hobie::where("resume_id",$resume_id)->get();
            return response()->json(["message"=>"hobies found with success","data"=>$hobies]);
        } catch (\Throwable $th) {
            return response()->json(['error'=>$th->getMessage()]);
        }
    }

    public function save(Request $request){
        try {
            
            $validhobie = $request->validate([
                'name'=>"required",
                "resume_id"=>'required|numeric'
            ]);
            
            $hobi = Hobie::create($validhobie);
            // $allhobie = Hobie::where("resume_id",$resume_id);
            return response()->json(['message'=>"hobie created with success","data"=>$hobi]);
        } catch (\Throwable $th) {
            return response()->json(['error'=>$th->getMessage()]);
        }
    }

    public function update(Request $request)
    {
        try {
            $hobie_id = $request->id;
            $validhobie = $request->validate([
                'name' => "required",
                'id'=>"required"
            ]);
            $hobi = Hobie::findOrFail($hobie_id);
            $hobi->update($validhobie);
            // $allhobie = Hobie::where("resume_id", $hobie_id);
            return response()->json(['message' => "hobie updated with success", "data" => $hobi]);
        } catch (\Throwable $th) {
            return response()->json(['error' => $th->getMessage()]);
        }
    }

    public function delete(Request $request)
    {
        try {
            $hobie_id = $request->id;
            $hobi = Hobie::findOrFail($hobie_id);
            $hobi->delete();
            return response()->json(['message' => "hobie deleted with success"]);
        } catch (\Throwable $th) {
            return response()->json(['error' => $th->getMessage()]);
        }
    }
}
