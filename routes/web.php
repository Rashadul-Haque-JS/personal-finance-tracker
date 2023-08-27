<?php

use Illuminate\Support\Facades\Route;

// Auth routes
Auth::routes();

// Route group for all routes that render 'layout.app'
Route::get('/{route}', function () {
    return view('layout.app'); 
})->where('route', '^(create-user|create-transaction|create-category|)$'); 

// Catch-all route for unmatched routes
Route::get('/{any}', function () {
    abort(404);
})->where('any', '.*');
