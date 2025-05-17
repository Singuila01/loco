<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Commandes extends Model
{
    /** @use HasFactory<\Database\Factories\CommandesFactory> */
    use HasFactory;

    /**
     * The attributes that are mass assignable.
     *
     * @var list<string>
     */
    protected $fillable = [
        'nom_commande',
        'description_commande',
        'prix_total',
        'id_utilisateur',
        'id_commercant'
    ];

    public function produits()
    {
        return $this->belongsToMany(Produits::class, 'commandes', 'id', 'id_produit');
    }

    public function utilisateurs()
    {
        return $this->belongsToMany(User::class, 'users', 'id', 'id_utilisateur');
    }

}
