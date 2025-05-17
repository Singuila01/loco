<?php

namespace Database\Seeders;

use App\Models\Categorie;
use App\Models\Commandes;
use App\Models\Commercant;
use App\Models\Notation;
use App\Models\PointsFidelisation;
use App\Models\Produits;
use App\Models\Signalement;
use App\Models\Stocks;
use App\Models\TypesUtilisateur;
use App\Models\User;
// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use App\Models\Villes;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        User::factory(10)->create();
        Produits::factory(10)->create();
        Commandes::factory(10)->create();
        Categorie::factory(10)->create();
        Commercant::factory(10)->create();
        Notation::factory(10)->create();
        PointsFidelisation::factory(10)->create();
        Signalement::factory(10)->create();
        Stocks::factory(10)->create();
        TypesUtilisateur::factory(10)->create();
        User::factory(10)->create();
        Villes::factory(10)->create();

        // User::factory()->create([
        //     'name' => 'Test User',
        //     'email' => 'test@example.com',
        // ]);
    }
}
