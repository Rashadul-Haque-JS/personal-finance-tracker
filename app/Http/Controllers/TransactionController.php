<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Transaction;

class TransactionController extends Controller
{
    public function store(Request $request)
    {
        // Validate the input
        $validatedData = $request->validate([
            'amount' => 'required|numeric',
            'transaction_type' => 'required|in:income,expense',
            // Add other validation rules
        ]);

        Transaction::create([
            'amount' => $validatedData['amount'],
            'description' => $request->input('description'),
            'user_id' => $request->input('user_id'),
            'category_id' => $request->input('category_id'),
            'transaction_type' => $request->input('transaction_type'), 
        ]);
        

        return redirect('/transactions')->with('success', 'Transaction created successfully.');
    }

    public function show(Request $request, $id){
        $transactions = Transaction::where('user_id', $id)->get();
        return response()->json(['transactions' => $transactions]);
    }
}

