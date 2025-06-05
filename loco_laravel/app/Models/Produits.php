<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Produits extends Model
{
    /** @use HasFactory<\Database\Factories\ProduitsFactory> */
    use HasFactory;

    protected $fillable = [
        'nom_produit',
        'description_produit',
        'prix_produit',
        'nouveaute',
        'nombre_produit',
        'bio',
        'quantite_disponible',
        'vendu_par',
        'id_type_poids',
        'id_commande',
        'id_categorie',
    ];

    public function typePoids()
    {
        return $this->belongsTo(TypePoids::class, 'id_type_poids');
    }

    public function commandes()
    {
        return $this->belongsTo(Commandes::class, 'id_commande');
        // return $this->belongsToMany(Commandes::class, 'commande_produit', 'id_produit', 'id');
    }


    public function categorie()
    {
        return $this->belongsTo(Categorie::class, 'id_categorie');
        // return $this->belongsTo(Categorie::class);
    }

}
