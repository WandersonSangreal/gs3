<?php

namespace Database\Factories;

use App\Models\User;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Favorite>
 */
class FavoriteFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'name' => fake()->randomElement(['Cartão virtual', 'Cartão adicional', 'Seguros', 'Pacotes']),
            'icon' => fake()->randomElement(['card-outline', 'add-circle-outline', 'shield-half-outline', 'mail-outline']),
            'resource' => fake()->randomElement(['virtual/card', 'card/add', 'insurance', 'packages']),
            'user_id' => User::factory()
        ];
    }
}
