<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Commandes>
 */
class CommandesFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'nom_commande' => fake()->name(),
            'description_commande' => fake()->sentence(),
            'prix_total' => fake()->randomFloat(2, 1, 1000),
            'etat_commande' => fake()->boolean(),
            'id_utilisateur' => fake()->numberBetween(1, 100),
        ];
    }
}
