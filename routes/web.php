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


Route::get('/', function () {
    return Inertia::render('Index');
})->name('/');

Route::get('/registerprofile', function () {
    return Inertia::render('Register');
})->name('registerprofile');


Route::get('/forgotpassword', function () {
    return Inertia::render('ForgotPassword');
})->name('forgotpassword');

// Route::get('/main', function () {
//     return Inertia::render('Main');
// })->name('main');

Route::get('/iotdashboard', function () {
    return Inertia::render('IOTDashboard');
})->name('iotdashboard');

Route::get('/demographic', function () {
    return Inertia::render('Demographic');
})->name('demographic');

Route::get('/projectboard', function () {
    return Inertia::render('ProjectBoard');
})->name('projectboard');

Route::get('/cryptodashboard', function () {
    return Inertia::render('CryptoDashboard');
})->name('cryptodashboard');

Route::get('/ecommerce', function () {
    return Inertia::render('ECommerce');
})->name('ecommerce');

Route::get('/h-menu', function () {
    return Inertia::render('HMenu');
})->name('h-menu');

Route::get('/chat', function () {
    return Inertia::render('Chat');
})->name('chat');

Route::get('/calendar', function () {
    return Inertia::render('Calendar');
})->name('calendar');

Route::get('/contact', function () {
    return Inertia::render('Contact');
})->name('contact');

Route::get('/contact-grid', function () {
    return Inertia::render('ContactGrid');
})->name('contact-grid');

Route::get('/taskboard', function () {
    return Inertia::render('Taskboard');
})->name('taskboard');

Route::get('/blogdashboard', function () {
    return Inertia::render('BlogDashboard');
})->name('blogdashboard');

Route::get('/blogpost', function () {
    return Inertia::render('BlogPost');
})->name('blogpost');

Route::get('/bloglist', function () {
    return Inertia::render('BlogList');
})->name('bloglist');

Route::get('/blogdetail', function () {
    return Inertia::render('BlogDetails');
})->name('blogdetail');

Route::get('/filedashboard', function () {
    return Inertia::render('FileManager');
})->name('filedashboard');

Route::get('/documents', function () {
    return Inertia::render('Documents');
})->name('documents');

Route::get('/media', function () {
    return Inertia::render('Media');
})->name('media');

Route::get('/inbox', function () {
    return Inertia::render('Inbox');
})->name('inbox');

Route::get('/profile', function () {
    return Inertia::render('Profile');
})->name('profile');

Route::get('/faq', function () {
    return Inertia::render('FAQ');
})->name('faq');

Route::get('/testimonials', function () {
    return Inertia::render('Testimonials');
})->name('testimonials');

Route::get('/projectlist', function () {
    return Inertia::render('ProjectList');
})->name('projectlist');

Route::get('/pricing', function () {
    return Inertia::render('Pricing');
})->name('pricing');

Route::get('/invoice', function () {
    return Inertia::render('Invoice');
})->name('invoice');

Route::get('/timeline', function () {
    return Inertia::render('Timeline');
})->name('timeline');

Route::get('/main', function () {
    return Inertia::render('Main');
})->middleware(['auth', 'verified'])->name('main');

// Route::get('/dashboard', function () {
//     return Inertia::render('Dashboard/Dashboard/ProjectBoard');
// })->middleware(['auth', 'verified'])->name('dashboard');

// Route::middleware('auth')->group(function () {
//     Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
//     Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
//     Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
// });

require __DIR__.'/auth.php';
