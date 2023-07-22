<?php

namespace Database\Factories;

use App\Models\Resume;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Experience>
 */
class ExperienceFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'resume_id'=>rand(1,Resume::count()),
            'name'=>fake()->name(),
            'post'=>fake()->title(),
            'begin'=>fake()->date(),
            'end'=>fake()->date(),
            'description'=>fake()->paragraph()
        ];
    }
}
