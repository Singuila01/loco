<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Notation extends Model
{
    /** @use HasFactory<\Database\Factories\NotationFactory> */
    use HasFactory;

    public function user()
    {
        return $this->belongsTo(User::class);
    }


    public function commercant()
    {
        return $this->belongsTo(Commercant::class);
    }

}
