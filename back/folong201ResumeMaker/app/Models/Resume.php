<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Resume extends Model
{
    use HasFactory;
    protected $fillable = ['name','profession','email','phone','about','photo', 'user_id'];
    
    public function user(){
        return $this->belongsTo(User::class);
    }
    public function skills(){
        return $this->hasMany(skill::class);
    }

    public function techniques(){
        return $this->hasMany(Technique::class);
    }

    public function experiences(){
        return $this->hasMany(Experience::class);
    }

    public function hobies(){
        return $this->hasMany(Hobie::class);
    }

    public function educations(){
        return $this->hasMany(Education::class);
    }
}
