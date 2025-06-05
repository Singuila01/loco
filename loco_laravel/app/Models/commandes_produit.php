<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class commandes_produit extends Model
{
    /** @use HasFactory<\Database\Factories\CommandesProduitFactory> */
    use HasFactory;

    protected $fillable = [
        'quantite',
        'prix_unitaire',
    ];
}
