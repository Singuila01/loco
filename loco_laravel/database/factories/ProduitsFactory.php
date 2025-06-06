<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Produits>
 */
class ProduitsFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'nom_produit' => fake()->name(),
            'description_produit' => fake()->sentence(),
            'prix_produit' => fake()->randomFloat(2, 1, 100),
            'nouveaute' => fake()->numberBetween(0, 1),
            'nombre_produit' => fake()->numberBetween(0, 1),
            'bio' => fake()->numberBetween(0, 1),
            'quantite_disponible' => fake()->name(),
            'vendu_par' => fake()->name(),
            'id_type_poids' => fake()->numberBetween(1, 10),
            'id_commercant' => fake()->numberBetween(1, 10),
            'id_categorie' => fake()->numberBetween(1, 10),
        ];
    }
}
