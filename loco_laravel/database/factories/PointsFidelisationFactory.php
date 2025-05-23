<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\PointsFidelisation>
 */
class PointsFidelisationFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'nombre_fidelite' => fake()->numberBetween(1, 100),
            'id_utilisateur' => fake()->numberBetween(1, 10),
            'id_commercant' => fake()->numberBetween(1, 10),
        ];
    }
}
