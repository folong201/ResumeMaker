<?php

namespace Database\Factories;

use App\Models\User;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Resume>
 */
class ResumeFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'name' => fake()->name(),
            'email' => fake()->safeEmail(),
            'user_id'=>rand(1,User::count()),
            'profession'=> fake()->title(),
            'phone'=>fake()->phoneNumber(),
            'about'=>fake()->paragraph(),
            'photo'=> "https://th.bing.com/th/id/OIP.3ErzKhPhpmC6sdy7Axrz4AHaLE?pid=ImgDet&rs=1"
        ];
    }
}
