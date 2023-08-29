<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User; 

class UserController extends Controller
{
    public function users()
    {
        // Retrieve and return a list of users
        $users = User::all();
        return response()->json($users);
    }

   
    public function store(Request $request)
    {
        // Store the new user based on the request data
        $userData = $request->all();
        $user = User::create($userData);
        return response()->json($user);
    }

    public function show(string $id)
    {
        // Retrieve and return a specific user by ID
        $user = User::find($id);
        return response()->json($user);
    }

  
    public function update(Request $request, string $id)
    {
        // Update a specific user based on the request data
        $user = User::find($id);
        $userData = $request->all();
        $user->update($userData);
        return response()->json($user);
    }

    public function destroy(string $id)
    {
        // Delete a specific user
        $user = User::find($id);
        $user->delete();
        return response()->json(['message' => 'User deleted successfully']);
    }
}
