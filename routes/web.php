<?php

use Illuminate\Support\Facades\Route;

// Auth routes
Auth::routes();

// All other routes should lead to your React application
Route::get('/{any}', function () {
    return view('react'); // Assuming 'react' is the name of your react.blade.php file
})->where('any', '.*');


