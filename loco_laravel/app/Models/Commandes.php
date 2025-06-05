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
        'id_utilisateur'
    ];
    
    public function produits()
    {
        return $this->hasMany(Produits::class, 'id_commande');
    }

}
