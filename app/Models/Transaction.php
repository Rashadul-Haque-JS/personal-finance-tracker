<?php

// app\Models\Transaction.php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Transaction extends Model
{
    // ... other attributes and methods ...
    
    // Define the transaction's user relationship
    public function user()
    {
        return $this->belongsTo(User::class);
    }
    
    // Define the transaction's category relationship
    public function category()
    {
        return $this->belongsTo(Category::class);
    }
}
