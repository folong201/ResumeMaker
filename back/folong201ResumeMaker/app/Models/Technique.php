<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Technique extends Model
{
    use HasFactory;
    protected $fillable = ['title','resume_id'];
    public function resume(){
        return $this->belongsTo(Resume::class);
    }
}
