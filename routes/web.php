<?php

use Illuminate\Support\Facades\Route;

// Auth routes
Auth::routes();

// All other routes should lead to your React application
Route::get('/{any}', function () {
    return view('layout.app'); // Assuming 'app' is the name of your app.blade.php file
})->where('any', '.*');

