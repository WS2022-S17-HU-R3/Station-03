<?php

namespace Database\Seeders;

use App\Models\Booking;
use Illuminate\Database\Seeder;

class BookingSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $data = [
            [
                "id" => 1,
                "accomodationId" => 1,
                "checkIn" => "2021-07-01",
                "checkOut" => "2021-07-04",
                "bookingDate" => "2021-07-01",
                "comment" => "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
            ],
            [
                "id" => 2,
                "accomodationId" => 1,
                "checkIn" => "2021-07-06",
                "checkOut" => "2021-07-11",
                "bookingDate" => "2021-07-03",
                "comment" => "Vestibulum scelerisque nulla non cursus consequat"
            ],
            [
                "id" => 3,
                "accomodationId" => 1,
                "checkIn" => "2021-07-15",
                "checkOut" => "2021-07-22",
                "bookingDate" => "2021-07-05",
                "comment" => "Phasellus id lobortis risus"
            ],
            [
                "id" => 4,
                "accomodationId" => 1,
                "checkIn" => "2021-07-28",
                "checkOut" => "2021-07-30",
                "bookingDate" => "2021-07-07",
                "comment" => "Fusce eleifend felis in nulla fringilla efficitur"
            ],
            [
                "id" => 5,
                "accomodationId" => 1,
                "checkIn" => "2021-08-07",
                "checkOut" => "2021-08-11",
                "bookingDate" => "2021-07-09",
                "comment" => "Ut euismod lorem sed libero cursus viverra"
            ],
            [
                "id" => 6,
                "accomodationId" => 1,
                "checkIn" => "2021-08-21",
                "checkOut" => "2021-08-29",
                "bookingDate" => "2021-07-11",
                "comment" => "Duis placerat mi sodales odio accumsan, sed dignissim nisi tincidunt"
            ],
            [
                "id" => 7,
                "accomodationId" => 2,
                "checkIn" => "2021-07-01",
                "checkOut" => "2021-07-03",
                "bookingDate" => "2021-07-01",
                "comment" => "Phasellus varius fermentum malesuada"
            ],
            [
                "id" => 8,
                "accomodationId" => 2,
                "checkIn" => "2021-07-05",
                "checkOut" => "2021-07-12",
                "bookingDate" => "2021-07-03",
                "comment" => "Etiam elementum eros ac lacus rhoncus, sed aliquet ligula aliquam"
            ],
            [
                "id" => 9,
                "accomodationId" => 2,
                "checkIn" => "2021-07-16",
                "checkOut" => "2021-07-20",
                "bookingDate" => "2021-07-05",
                "comment" => "Nam sed ex condimentum, venenatis dolor eget, hendrerit sem"
            ],
            [
                "id" => 10,
                "accomodationId" => 2,
                "checkIn" => "2021-07-26",
                "checkOut" => "2021-08-04",
                "bookingDate" => "2021-07-07",
                "comment" => "Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus"
            ],
            [
                "id" => 11,
                "accomodationId" => 2,
                "checkIn" => "2021-08-12",
                "checkOut" => "2021-08-17",
                "bookingDate" => "2021-07-09",
                "comment" => "Mauris eu feugiat magna, quis vestibulum nisi"
            ],
            [
                "id" => 12,
                "accomodationId" => 2,
                "checkIn" => "2021-08-27",
                "checkOut" => "2021-08-29",
                "bookingDate" => "2021-07-11",
                "comment" => "Aliquam lobortis suscipit libero, vitae consectetur est bibendum dictum"
            ],
            [
                "id" => 13,
                "accomodationId" => 2,
                "checkIn" => "2021-09-10",
                "checkOut" => "2021-09-17",
                "bookingDate" => "2021-07-13",
                "comment" => "Mauris sagittis erat nec tellus sollicitudin sodales"
            ],
            [
                "id" => 14,
                "accomodationId" => 3,
                "checkIn" => "2021-07-01",
                "checkOut" => "2021-07-02",
                "bookingDate" => "2021-07-01",
                "comment" => "Fusce id pharetra est, a porttitor dui"
            ],
            [
                "id" => 15,
                "accomodationId" => 3,
                "checkIn" => "2021-07-04",
                "checkOut" => "2021-07-10",
                "bookingDate" => "2021-07-03",
                "comment" => "Morbi vitae ex vitae velit convallis pulvinar vitae eget justo"
            ],
            [
                "id" => 16,
                "accomodationId" => 3,
                "checkIn" => "2021-07-14",
                "checkOut" => "2021-07-18",
                "bookingDate" => "2021-07-05",
                "comment" => "Sed iaculis ultricies purus dictum semper"
            ],
            [
                "id" => 17,
                "accomodationId" => 3,
                "checkIn" => "2021-07-24",
                "checkOut" => "2021-08-01",
                "bookingDate" => "2021-07-07",
                "comment" => "Suspendisse potenti"
            ],
            [
                "id" => 18,
                "accomodationId" => 3,
                "checkIn" => "2021-08-09",
                "checkOut" => "2021-08-11",
                "bookingDate" => "2021-07-09",
                "comment" => "Quisque sit amet congue est"
            ],
            [
                "id" => 19,
                "accomodationId" => 3,
                "checkIn" => "2021-08-21",
                "checkOut" => "2021-08-26",
                "bookingDate" => "2021-07-11",
                "comment" => "Donec ligula nibh, vulputate non magna a, rhoncus aliquam purus"
            ],
            [
                "id" => 20,
                "accomodationId" => 3,
                "checkIn" => "2021-09-07",
                "checkOut" => "2021-09-10",
                "bookingDate" => "2021-07-13",
                "comment" => "Mauris ac nisl ac ex aliquet convallis"
            ],
            [
                "id" => 21,
                "accomodationId" => 3,
                "checkIn" => "2021-09-24",
                "checkOut" => "2021-09-28",
                "bookingDate" => "2021-07-15",
                "comment" => "Integer at pretium urna, eu dapibus dui"
            ],
            [
                "id" => 22,
                "accomodationId" => 4,
                "checkIn" => "2021-07-01",
                "checkOut" => "2021-07-05",
                "bookingDate" => "2021-07-01",
                "comment" => "Aenean convallis tincidunt eros eu tristique"
            ],
            [
                "id" => 23,
                "accomodationId" => 4,
                "checkIn" => "2021-07-07",
                "checkOut" => "2021-07-10",
                "bookingDate" => "2021-07-03",
                "comment" => "Aenean venenatis nunc orci, a fringilla mi consectetur vel"
            ],
            [
                "id" => 24,
                "accomodationId" => 4,
                "checkIn" => "2021-07-14",
                "checkOut" => "2021-07-20",
                "bookingDate" => "2021-07-05",
                "comment" => "Praesent nisl tellus, tempor a neque sit amet, maximus malesuada orci"
            ],
            [
                "id" => 25,
                "accomodationId" => 4,
                "checkIn" => "2021-07-26",
                "checkOut" => "2021-07-30",
                "bookingDate" => "2021-07-07",
                "comment" => "Nunc auctor nunc sed magna suscipit, quis condimentum mauris tincidunt"
            ],
            [
                "id" => 26,
                "accomodationId" => 4,
                "checkIn" => "2021-08-07",
                "checkOut" => "2021-08-12",
                "bookingDate" => "2021-07-09",
                "comment" => "Proin ex ligula, venenatis in lorem id, dictum bibendum nibh"
            ],
            [
                "id" => 27,
                "accomodationId" => 4,
                "checkIn" => "2021-08-22",
                "checkOut" => "2021-08-24",
                "bookingDate" => "2021-07-11",
                "comment" => "Integer quis scelerisque augue, vitae pretium est"
            ],
            [
                "id" => 28,
                "accomodationId" => 4,
                "checkIn" => "2021-09-05",
                "checkOut" => "2021-09-13",
                "bookingDate" => "2021-07-13",
                "comment" => "Maecenas consectetur commodo dui, id vestibulum ex vestibulum non"
            ]
        ];

        foreach ($data as $row) {
            Booking::forceCreate($row);
        }
    }
}
