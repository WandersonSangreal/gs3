<?php

namespace Database\Factories;

use App\Models\User;
use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Str;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Card>
 */
class CardFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'name' => Str::upper(fake()->companySuffix()),
            'number' => fake()->creditCardNumber(),
            'limit' => fake()->randomFloat(2, 500, 8000),
            'pay' => fake()->dayOfMonth(),
            'color' => fake()->randomElement(['green', 'secondary', 'warning', 'danger', 'success', 'dark', 'light']),
            'user_id' => User::factory(),
        ];
    }
}
