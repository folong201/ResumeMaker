<?php

namespace App\Http\Controllers;

use App\Models\Education;
use Illuminate\Http\Request;

class EducationController extends Controller
{
    public function index(Request $request){
        try {
            $id = $request->resume_id;
            $educations = Education::where("resume_id",$id)->get();

            return response()->json(["message"=>"this is the list of education",'data'=>$educations], 200);
        } catch (\Throwable $th) {
            return response()->json(["message"=>$th->getMessage()]);
        }
    }
    public function save(Request $request)
    {
        try {
            $validated = $request->validate([
                'resume_id'=>'required',
                'name'=>'required',
                'school'=>"required",
                'begin'=>"required",
                "end"=>"required"
            ]);
            $education = Education::create($validated);
            return response()->json(["message" => "New education saved", 'data' => $education], 201);
        } catch (\Throwable $th) {
            return response()->json(["message" => $th->getMessage()]);
        }
    }
    public function update(Request $request)
    {
        try {
            $id = $request->id;
            $validated = $request->validate([
                'name' => 'required',
                'school' => "required",
                'begin' => "required",
                "end" => "required"
            ]);
            $education = Education::findOrFail($id);
            $education->update($validated);
            return response()->json(["message" => "education Updated", 'data' => $education], 200);
        } catch (\Throwable $th) {
            return response()->json(["message" => $th->getMessage()]);
        }
    }
    public function delete(Request $request)
    {
        try {
            $id = $request->id;
            $education = Education::findOrFail($id);
            $education->delete();
            return response()->json(["message" => "Education deleted", 'data' => $education], 200);
        } catch (\Throwable $th) {
            return response()->json(["message" => $th->getMessage()]);
        }
    }
}
