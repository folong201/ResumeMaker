<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Hobie extends Model
{
    use HasFactory;
    protected $fillable = ['resume_id','name'];
    public function resume(){
        return $this->belongsTo(Resume::class);
    }
}
