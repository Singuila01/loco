<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Notation>
 */
class NotationFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'note' => fake()->numberBetween(1, 5),
            'commentaire' => fake()->sentence(),
            'id_utilisateur' => fake()->numberBetween(1, 100),
            'id_commercant' => fake()->numberBetween(1, 100),
        ];
    }
}
