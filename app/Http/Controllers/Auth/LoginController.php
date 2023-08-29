<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Models\User;

class LoginController extends Controller
{
    public function login(Request $request)
    {
        $credentials = $request->only('email', 'password');

        if (Auth::attempt($credentials)) {
            $email = $request->input('email');
            $user = User::where('email', $email)->first(); // Using 'where' and 'first' to find the user
            return response()->json(['status' => 'success', 'user' => $this->getUserResponse($user)], 200);
        }

        return response()->json(['status' => 'error'], 401);
    }

    private function getUserResponse($user)
    {
        return [
            'id' => $user->id,
            'name' => $user->name,
            'email' => $user->email,

        ];
    }
}
