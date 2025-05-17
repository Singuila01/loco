<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Produits extends Model
{
    /** @use HasFactory<\Database\Factories\ProduitsFactory> */
    use HasFactory;

    public function commandes()
    {
        return $this->belongsToMany(Commandes::class, 'commande_produit', 'id_produit', 'id');
    }
}
