<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Commercant>
 */
class CommercantFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'nom_entreprise' => fake()->company(),
            'email' => fake()->companyEmail(),
            'adresse' => fake()->address(),
            'password' => fake()->password(),
            'phone' => fake()->phoneNumber(),
            'SIRET' => fake()->numberBetween(10000000000000, 99999999999999),
            'SIREN' => fake()->numberBetween(10000000000000, 999999999),
            'id_ville' => fake()->numberBetween(1, 100),
        ];
    }
}
