<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::get('accomodations', [\App\Http\Controllers\AccomodationController::class, 'index']);
Route::get('bookings', [\App\Http\Controllers\BookingController::class, 'index']);
Route::post('bookings', [\App\Http\Controllers\BookingController::class, 'store']);
Route::delete('bookings/{booking}', [\App\Http\Controllers\BookingController::class, 'destroy']);
Route::get('accomodations/{accomodation}/bookings', [\App\Http\Controllers\AccomodationBookingController::class, 'index']);
