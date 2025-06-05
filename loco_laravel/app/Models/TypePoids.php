<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class TypePoids extends Model
{
    /** @use HasFactory<\Database\Factories\TypePoidsFactory> */
    use HasFactory;

    protected $fillable = [
        'nom_type_poids', // ou tout autre champ dans ta table
    ];

    public function produits()
    {
        return $this->hasMany(Produits::class, 'id_type_poids');
    }
}
