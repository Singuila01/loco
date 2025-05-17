<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Signalement>
 */
class SignalementFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'description_signalement' => fake()->sentence(),
            'id_utilisateur' => fake()->numberBetween(1, 100),
            'id_commercant' => fake()->numberBetween(1, 100),
        ];
    }
}
