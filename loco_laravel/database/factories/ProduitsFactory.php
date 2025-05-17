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
            'id_stock' => fake()->numberBetween(1, 10),
            'id_commercant' => fake()->numberBetween(1, 10),
            'id_categorie' => fake()->numberBetween(1, 10),
        ];
    }
}
