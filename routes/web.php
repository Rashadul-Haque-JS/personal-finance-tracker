<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\TransactionController;
use App\Http\Controllers\CategoryController;
use App\Http\Controllers\HomeController;

// Home Page

//Route::get('/', [HomeController::class, 'index']);
Route::get('/', function () {
    return view('layouts/app');
});
Route::get('/home', function () {
    return view('home');
});



// Transactions
Route::get('/transactions', [TransactionController::class, 'index']);
Route::get('/transactions/create', [TransactionController::class, 'create']);
Route::post('/transactions', [TransactionController::class, 'store']);

// Categories
Route::get('/categories', [CategoryController::class, 'index']);
Route::get('/categories/create', [CategoryController::class, 'create']);
Route::post('/categories', [CategoryController::class, 'store']);

// Auth routes
Auth::routes();

// Protected routes requiring authentication
Route::middleware(['auth'])->group(function () {
    // Define your protected routes here
    Route::get('/dashboard', [HomeController::class, 'dashboard'])->name('dashboard');
    // Add other protected routes as needed
});

