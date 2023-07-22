<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class skill extends Model
{
    use HasFactory;
    protected $fillable = ['description','resume_id','title'];
    public function resume(){
        return $this->belongsTo(Resume::class);
    }
}
