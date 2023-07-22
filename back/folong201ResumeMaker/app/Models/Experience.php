<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Experience extends Model
{
    use HasFactory;
    protected $fillable = ['resume_id','name','post','begin','end','description'];
    public function resume(){
        return $this->belongsTo(Resume::class);
    }
}
