<?php

namespace App\Http\Controllers;

use App\Models\Technique;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class TechniqueController extends Controller
{
    public function index(Request $request){
        try {
            $resume_id = $request->resume_id;
            $technique =Technique::where("resume_id",$resume_id)->get();
            return response()->json(['message'=>"technique found with success","data" => $technique]);
        } catch (\Throwable $th) {
            return response()->json(['error'=>$th->getMessage()]);
        }
    }
    public function save(Request $request)
    {
        try {
            $validdata = $request->validate([
                'resume_id'=>"required",
                "title"=>"required"
            ]);
            $technique = Technique::create($validdata);
            return response()->json(['message'=>"technique saved whit secess","data"=> $technique]);
        } catch (\Throwable $th) {
            return response()->json(['error' => $th->getMessage()]);
        }
    }


    public function update(Request $request)
    {
        try {
            $validData = $request->validate([
                'id'=>'required',
                'title'=>'required'
            ]);
            $id = $request->id;
            $technique = Technique::findOrFail( $id);
            $technique->update($validData);
            return response()->json(['message'=>"technique updated with success","data" => $technique]);
        } catch (\Throwable $th) {
            return response()->json(['error' => $th->getMessage()]);
        }
    }


    public function delete(Request $request)
    {
        try {
            $id = $request->id;
            $technique = Technique::findOrFail($id);
             $technique->delete();
            return response()->json(['message'=>"technique updated whit success"]);
        } catch (\Throwable $th) {
            return response()->json(['error' => $th->getMessage()]);
        }
    }
}
