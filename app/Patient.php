<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Patient extends Model
{
    protected $guarded=[];

    public function files()
    {
        return $this->hasMany(file::class);
    }
    public function user()
    {
        return $this->belongsTo(User::class);
    }
}
