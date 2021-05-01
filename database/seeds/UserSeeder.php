<?php

use App\User;
use Illuminate\Database\Seeder;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        User::create([
            'name' => 'Admin Admin',
            'email' => 'docadmin@example.com',
            'password' => bcrypt('iamadmin'),
            'is_admin' =>1
        ]);
    }
}
