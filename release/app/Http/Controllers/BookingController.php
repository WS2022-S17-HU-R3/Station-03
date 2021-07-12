<?php

namespace App\Http\Controllers;

use App\Models\Accomodation;
use App\Models\Booking;
use Carbon\Carbon;
use Carbon\CarbonInterval;
use Carbon\CarbonPeriod;
use Illuminate\Http\Request;
use Illuminate\Support\Collection;

class BookingController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return Booking[]|\Illuminate\Database\Eloquent\Collection|\Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        $request->validate(['comment' => 'nullable|string']);
        if ($request->has('comment')) {
            return Booking::where('comment', 'LIKE', "%{$request->comment}%")->get();
        }
        return Booking::all();
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param \Illuminate\Http\Request $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $request->validate([
            'accomodationId' => 'required|integer|exists:accomodations,id',
            'checkIn' => 'required|date',
            'checkOut' => 'required|date',
            'bookingDate' => 'required|date',
            'comment' => 'required|string',
        ]);

        $checkIn = Carbon::parse($request->checkIn)->format('Y-m-d');
        $checkOut = Carbon::parse($request->checkOut)->format('Y-m-d');
        $bookingDate = Carbon::parse($request->bookingDate)->format('Y-m-d');

        $accomodation = Accomodation::find($request->accomodationId);

        $bookedDates = new Collection();
        foreach ($accomodation->bookings as $booking) {
            $interval = new Collection(CarbonPeriod::between($booking->checkIn, $booking->checkOut)->toArray());
            $bookedDates->add($interval->map(function ($date) {
                return $date->format('Y-m-d');
            }));
        }

        if ($bookedDates->flatten()->some(function ($date) use ($checkIn, $checkOut) {
            return $date === $checkIn || $date === $checkOut;
        })) {
            return response("Invalid booking! The selected date is not available.", 404);
        }

        return Booking::create([
            'accomodationId' => $request->accomodationId,
            'checkIn' => $checkIn,
            'checkOut' => $checkOut,
            'bookingDate' => $bookingDate,
            'comment' => $request->comment
        ]);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param \App\Models\Booking $booking
     * @return string
     */
    public function destroy(Booking $booking)
    {
        abort_unless($booking->deletable, '403', 'You cannot delete this booking');

        $booking->delete();

        return "{}";
    }
}
