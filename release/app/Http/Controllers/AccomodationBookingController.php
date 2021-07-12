<?php

namespace App\Http\Controllers;

use App\Models\Accomodation;
use App\Models\Booking;
use Illuminate\Http\Request;

class AccomodationBookingController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return Booking[]|\Illuminate\Database\Eloquent\Collection|\Illuminate\Http\Response
     */
    public function index(Accomodation $accomodation)
    {
        return $accomodation->bookings;
    }
}
