<?php

// app\Models\User.php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Foundation\Auth\User as Authenticatable;

class User extends Authenticatable
{
    // ... other attributes and methods ...
    
    // Define the user's transactions relationship
    public function transactions()
    {
        return $this->hasMany(Transaction::class);
    }
    
    // Define the user's categories relationship
    public function categories()
    {
        return $this->hasMany(Category::class);
    }
}

