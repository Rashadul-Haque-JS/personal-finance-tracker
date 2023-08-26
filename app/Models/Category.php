<?php

// app\Models\Category.php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Category extends Model
{
    // ... other attributes and methods ...
    
    // Define the category's user relationship
    public function user()
    {
        return $this->belongsTo(User::class);
    }
    
    // Define the category's transactions relationship
    public function transactions()
    {
        return $this->hasMany(Transaction::class);
    }
}
