<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Villes>
 */
class VillesFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'nom_ville' => fake()->city(),
            'code_postal' => fake()->postcode(),
            'pays' => fake()->country(),
        ];
    }
}
