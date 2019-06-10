<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class file extends Model
{
    protected $guarded =[];

    public function Patient()
    {
        return $this->belongsTo(Patient::class);
    }
}
