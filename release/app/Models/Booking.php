<?php

namespace App\Models;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Booking extends Model
{
    use HasFactory;
    public $timestamps = false;

    protected $guarded = [];

    public function getDeletableAttribute(){
        $createdDay = Carbon::parse($this->bookingDate);
        return $createdDay->diffInWeekdays(Carbon::today()) <= 3;
    }
}
