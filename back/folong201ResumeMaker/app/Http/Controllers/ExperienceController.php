<?php

namespace App\Http\Controllers;

use App\Models\Experience;
use Illuminate\Http\Request;

class ExperienceController extends Controller
{
    public function index(Request $request){
        try {
            $id = $request->resume_id;
            $experiences = Experience::where("resume_id",$id)->get();
            return response()->json(['message'=>"expericences found with success","data"=>$experiences]);
        } catch (\Throwable $th) {
            return response()->json(['error'=>$th->getMessage()]);
        }
    }
    public function save(Request $request)
    {
        try {
            $id = $request->resume_id;
            $validated = $request->validate([
                'resume_id'=>"required",
                "name"=>"required",
                'post'=>'required',
                'begin'=>'required',
                'description'=>'required',
                "end"=>"required"
            ]);
            $experience = Experience::create($validated);
            return response()->json(['message' => "expericences found with success", "data" => $experience]);
        } catch (\Throwable $th) {
            return response()->json(['error' => $th->getMessage()]);
        }
    }
    public function update(Request $request)
    {
        try {
            $id = $request->id;
            $validated = $request->validate([
                'resume_id' => "required",
                "name" => "required",
                'post' => 'required',
                'begin' => 'required',
                'description' => 'required',
                "end" => "required"
            ]);
            $experience = Experience::findOrFail($id);
            $experience->update($validated);
            return response()->json(['message' => "expericences updated with success", "data" => $experience]);
        } catch (\Throwable $th) {
            return response()->json(['error' => $th->getMessage()]);
        }
    }

    public function delete(Request $request)
    {
        try {
            $id = $request->id;

            $experience = Experience::findOrFail($id);
            $experience->delete();
            return response()->json(['message' => "expericences deleted with success", "data" => $experience]);
        } catch (\Throwable $th) {
            return response()->json(['error' => $th->getMessage()]);
        }
    }
}
