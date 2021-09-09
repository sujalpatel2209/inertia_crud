<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return inertia('Auth/Signin');
});

Route::get('dashboard', function () {
    $data = [
        [
            'name' => 'Users',
            'stat' => \App\Models\User::count(),
            'path' => 'users'
        ],
        [
            'name' => 'User TimeLog',
            'stat' => \App\Models\UserTimeLog::count(),
            'path' => 'timelogs'
        ]
    ];
    return inertia('Dashboard/index', [
        'stats' => $data
    ]);
});

Route::resource('users', \App\Http\Controllers\UserController::class);
Route::resource('timelogs', \App\Http\Controllers\UserLogtimeController::class);
