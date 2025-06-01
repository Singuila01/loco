<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class PointsFidelisation extends Model
{
    /** @use HasFactory<\Database\Factories\PointsFidelisationFactory> */
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
