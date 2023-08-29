<?php

use Illuminate\Support\Facades\Route;

// Auth routes
Auth::routes();

// Route group for all routes that render 'layout.app'
Route::get('/{route}', function () {
    return view('layout.app'); 
})->where('route', '^(transaction|category|create-transaction|create-category|dashboard|)$'); 

// Catch-all route for unmatched routes
Route::get('/{any}', function () {
    abort(404);
})->where('any', '.*');
