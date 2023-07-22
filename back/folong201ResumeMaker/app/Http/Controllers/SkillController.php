<?php

namespace App\Http\Controllers;

use App\Models\skill;
use Illuminate\Http\Request;

class SkillController extends Controller
{
    public function index(Request $request){
        try {
            $resume_id = $request->resume_id;
            $skills = skill::where("resume_id",$resume_id)->get();
            return response()->json(['message'=>"request ok","data"=>$skills]);
        } catch (\Throwable $th) {
            return response()->json(['error'=>$th->getMessage()]);
        }
    }

    public function save(Request $request)
    {
        try {
            $validskill = $request->validate([
                'description' => 'required',
                'title' => 'required',
                'resume_id' => 'required|numeric'
            ]);
            $skill = skill::create($validskill);
            return response()->json(['message'=>"skill created whit success",'data'=>$skill]);
        } catch (\Throwable $th) {
            return response()->json(['message' => $th->getMessage()]);
        }
    }

    public function update(Request $request)
    {
        try {
            $validskill = $request->validate([
                'description' => 'required',
                'title' => 'required',
                'resume_id' => 'required|numeric'
            ]);
            $skill = skill::findOrFail($request->skill_id);
            $skill->update($validskill);
            return response()->json(['message' => "skill updated whit success", 'data' => $skill]);
        } catch (\Throwable $th) {
            return response()->json(['message' => $th->getMessage()]);
        }
    }
    public function delete(Request $request)
    {
        try {
            $skill = skill::findOrFail($request->skill_id);
            $skill->delete();
            return response()->json(['message' => "skill deleted whit success", 'data' => $skill]);
        } catch (\Throwable $th) {
            return response()->json(['message' => $th->getMessage()]);
        }
    }

}
