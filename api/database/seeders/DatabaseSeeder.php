<?php

namespace Database\Seeders;

use App\Models\Card;
use App\Models\Favorite;
use App\Models\User;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // User::factory(10)->create();

        $users = [
            ['name' => 'Test User 01', 'email' => 'test01@example.com', 'cpf' => '12345678978'],
            ['name' => 'Test User 02', 'email' => 'test02@example.com', 'cpf' => '12345678945'],
            ['name' => 'Test User 03', 'email' => 'test03@example.com', 'cpf' => '12345678912'],
            ['name' => 'Test User 04', 'email' => 'test04@example.com', 'cpf' => '12345678932', 'active' => false],
        ];

        User::factory()->count(sizeof($users))->sequence(...$users)->has(Card::factory(2)->hasTransactions(5))->create();

        $favorites = [
            ['name' => 'Cartão virtual', 'icon' => 'card-outline', 'resource' => 'virtual/card', 'user_id' => 1],
            ['name' => 'Cartão adicional', 'icon' => 'add-circle-outline', 'resource' => 'card/add', 'user_id' => 1],

            ['name' => 'Seguros', 'icon' => 'shield-half-outline', 'resource' => 'insurance', 'user_id' => 2],
            ['name' => 'Pacotes', 'icon' => 'mail-outline', 'resource' => 'packages', 'user_id' => 2],

            ['name' => 'Cartão virtual', 'icon' => 'card-outline', 'resource' => 'virtual/card', 'user_id' => 3],
            ['name' => 'Cartão adicional', 'icon' => 'add-circle-outline', 'resource' => 'card/add', 'user_id' => 3],
            ['name' => 'Seguros', 'icon' => 'shield-half-outline', 'resource' => 'insurance', 'user_id' => 3],
            ['name' => 'Pacotes', 'icon' => 'mail-outline', 'resource' => 'packages', 'user_id' => 3],
        ];

        Favorite::factory()->count(sizeof($favorites))->sequence(...$favorites)->create();

    }
}
