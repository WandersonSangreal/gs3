<?php

namespace App\Models;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Casts\Attribute;

class Transaction extends Model
{
    /** @use HasFactory<\Database\Factories\TransactionFactory> */
    use HasFactory;

    protected $appends = ['d'];

    protected function casts(): array
    {
        return [
            'date' => 'timestamp',
        ];
    }

    public function getDateAttribute($value)
    {
        return Carbon::createFromTimestampMs($value);
    }

    protected function d(): Attribute
    {
        return Attribute::make(
            get: fn(mixed $value, array $attributes) => date('Y-m-d', strtotime(Carbon::createFromTimestampMs($attributes['date']))),
        );
    }

}
