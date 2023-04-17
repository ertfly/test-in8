<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Sessions extends Model
{
    protected $fillable = [
        'name',
        'email',
        'total',
        'tid'
    ];
}
