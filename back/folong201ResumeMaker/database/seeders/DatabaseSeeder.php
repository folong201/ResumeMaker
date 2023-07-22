<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;

use App\Models\Education;
use App\Models\Experience;
use App\Models\Hobie;
use App\Models\Resume;
use App\Models\skill;
use App\Models\Technique;
use App\Models\User;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        User::factory(10)->create();
        Resume::factory(200)->create();
        skill::factory(300)->create();
        Technique::factory(300)->create();
        Experience::factory(300)->create();
        Hobie::factory(300)->create();
        Education::factory(300)->create();

        // \App\Models\User::factory()->create([
        //     'name' => 'Test User',
        //     'email' => 'test@example.com',
        // ]);
    }
}
