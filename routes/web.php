<?php

use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

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

// Route::get('/', function () {
//     return Inertia::render('Welcome', [
//         'canLogin' => Route::has('login'),
//         'canRegister' => Route::has('register'),
//         'laravelVersion' => Application::VERSION,
//         'phpVersion' => PHP_VERSION,
//     ]);
// });

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::get('/hr', function () {
    return Inertia::render('HR/Contacts');
})->middleware(['auth', 'verified'])->name('hr');

Route::get('/iso9000', function () {
    return Inertia::render('ISO9000/index');
})->middleware(['auth', 'verified'])->name('iso9000');

Route::get('/iso14000', function () {
    return Inertia::render('ISO14000/index');
})->middleware(['auth', 'verified'])->name('iso14000');

Route::get('/iso22000', function () {
    return Inertia::render('ISO22000/index');
})->middleware(['auth', 'verified'])->name('iso22000');

Route::get('/iso27000', function () {
    return Inertia::render('ISO27000/index');
})->middleware(['auth', 'verified'])->name('iso27000');

Route::get('/iso45000', function () {
    return Inertia::render('ISO45000/index');
})->middleware(['auth', 'verified'])->name('iso45000');

Route::get('/iso50000', function () {
    return Inertia::render('ISO50000/index');
})->middleware(['auth', 'verified'])->name('iso50000');


Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__.'/auth.php';
