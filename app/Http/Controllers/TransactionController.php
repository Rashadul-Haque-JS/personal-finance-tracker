<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Transaction;

class TransactionController extends Controller
{
    public function index()
    {
        $transactions = Transaction::all();
        return view('transactions.index', ['transactions' => $transactions]);
    }

    public function create()
    {
        return view('transactions.create');
    }

    public function store(Request $request)
    {
        // Validate the input
        $validatedData = $request->validate([
            'amount' => 'required|numeric',
            // Other validation rules
        ]);

        // Create a new transaction
        Transaction::create([
            'amount' => $validatedData['amount'],
            // Other attributes
        ]);

        return redirect('/transactions')->with('success', 'Transaction created successfully.');
    }

    // Implement update and delete methods
}
