<?php

use App\Http\Controllers\API\AuthController;
use App\Http\Controllers\EducationController;
use App\Http\Controllers\ExperienceController;
use App\Http\Controllers\HobieController;
use App\Http\Controllers\ResumeController;
use App\Http\Controllers\SkillController;
use App\Http\Controllers\SwaggerController;
use App\Http\Controllers\TechniqueController;
use Database\Factories\HobieFactory;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;


Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});
Route::get("isloged",[AuthController::class,'isloged'])->middleware('auth:sanctum');

Route::prefix("auth")->group(function(){
    Route::post("register",[AuthController::class,'register'])->name("register");
    Route::post('login', [AuthController::class, 'login'])->name("login");
});

Route::middleware("auth:sanctum")->group(function(){

    Route::prefix("resume")->group(function(){
        Route::get('/', [ResumeController::class, 'index']);
        Route::get('{id}', [ResumeController::class, 'details']);
        Route::post('create',[ResumeController::class,'save']);
        Route::post('update', [ResumeController::class, 'update']);
        Route::get('delete', [ResumeController::class, 'delete']);
    });

    Route::prefix("skill")->group(function(){
        Route::get("/{resume_id}", [SkillController::class, 'index']);
        Route::post("save",[SkillController::class,'save']);
        Route::post("update", [SkillController::class, 'update']);
        Route::post("delete", [SkillController::class, 'delete']);
    });
    
    Route::prefix("hobie")->group(function () {
        Route::get("/{resume_id}", [HobieController::class, 'index']);
        Route::post("save", [HobieController::class, 'save']);
        Route::post("update", [HobieController::class, 'update']);
        Route::post("delete", [HobieController::class, 'delete']);
    });
    
    Route::prefix("technique")->group(function () {
        Route::get("/{resume_id}", [TechniqueController::class, 'index']);
        Route::post("save", [TechniqueController::class, 'save']);
        Route::post("update", [TechniqueController::class, 'update']);
        Route::post("delete", [TechniqueController::class, 'delete']);
    });
    Route::prefix("experience")->group(function () {
        Route::get("/{resume_id}", [ExperienceController::class, 'index']);
        Route::post("save", [ExperienceController::class, 'save']);
        Route::post("update", [ExperienceController::class, 'update']);
        Route::post("delete", [ExperienceController::class, 'delete']);
    });
    Route::prefix("education")->group(function () {
        Route::get("/{resume_id}", [EducationController::class, 'index']);
        Route::post("save", [EducationController::class, 'save']);
        Route::post("update", [EducationController::class, 'update']);
        Route::post("delete", [EducationController::class, 'delete']);
    });
});

Route::get('/bonjour',[SwaggerController::class,'bonjour']);
