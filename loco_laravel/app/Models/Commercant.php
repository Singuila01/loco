<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Commercant extends Model
{
    /** @use HasFactory<\Database\Factories\CommercantFactory> */
    use HasFactory;

    public function ville()
    {
        return $this->belongsTo(Villes::class);
    }

    public function notation()
    {
        return $this->hasMany(Notation::class);
    }
    public function signalement()
    {
        return $this->hasMany(related: Signalement::class);
    }
    public function fidelite()
    {
        return $this->hasMany(PointsFidelisation::class);
    }

}
