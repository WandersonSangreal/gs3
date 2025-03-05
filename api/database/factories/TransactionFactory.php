<?php

namespace Database\Factories;

use App\Models\Card;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Transaction>
 */
class TransactionFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'name' => fake()->company(),
            'value' => fake()->randomFloat(2, 10, 1000),
            'date' => fake()->date(),
            'by' => rand(0, 24),
            'attention' => fake()->boolean(),
            'icon' => fake()->randomElement([
                'phone-portrait-outline',
                'car-outline',
                'cart-outline',
                'medkit-outline',
                'game-controller-outline',
                'build-outline',
                'diamond-outline',
                'home-outline',
                'construct-outline',
            ]),
            'card_id' => Card::factory(),
        ];
    }
}
