<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Aircrafts extends Model {

    protected $fillable = [
        'aircraft_size', 'aircraft_type'
    ];

    protected $hidden = [];

}
