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
            
        ]);

       Transaction::create([
            'amount' => $validatedData['amount'],
            'description' => $request->input('description'),
            'user_id' => $request->input('user_id'),
            'category_id' =>$request->input('category_id'),
            // Other attributes
        ]);

        return redirect('/transactions')->with('success', 'Transaction created successfully.');
    }

  
}
