<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Category;

class CategoryController extends Controller
{
    public function categories()
    {
        $categories = Category::all();
        return response()->json(['categories' => $categories]);
    }

    public function create()
    {
        return view('categories.create');
    }

    public function store(Request $request)
    {
        // Validate the input
        $validatedData = $request->validate([
            'name' => 'required|string',
            // Other validation rules
        ]);

        // Create a new category
        Category::create([
            'name' => $validatedData['name'],
            // Other attributes
        ]);

        return redirect('/categories')->with('success', 'Category created successfully.');
    }

    // Implement update and delete methods
}

