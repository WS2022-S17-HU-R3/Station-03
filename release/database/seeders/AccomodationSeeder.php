<?php

namespace Database\Seeders;

use App\Models\Accomodation;
use Illuminate\Database\Seeder;

class AccomodationSeeder extends Seeder
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
                "name" => "Hotel President",
                "price" => 59.5,
                "description" => "Located right in the business, governmental and historical area of Budapest, Hotel President is a perfect choice for world explorers and business travellers as well.",
                "img" => "1.webp"
            ],
            [
                "id" => 2,
                "name" => "Gold Hotel",
                "price" => 35,
                "description" => "30 comfortably furnished rooms are offered by Gold Hotel **** Zakopane to guests looking for accommodation in Zakopane. The hotel ensures a pleasant stay for you and your family by offering chield-friendly services. You are also welcome at the hotel for a fine local meal in the restaurant.",
                "img" => "2.jpg"
            ],
            [
                "id" => 3,
                "name" => "Alta Moda Fashion Hotel",
                "price" => 50,
                "description" => "The Alta Moda Fashion Hotel is a fully renovated four-star hotel, that represents fashionable elegance in the heart of the city to meet our guests’ needs.",
                "img" => "3.webp"
            ],
            [
                "id" => 4,
                "name" => "Vila Malinska",
                "price" => 75,
                "description" => "This property is 3 minutes walk from the beach. Located in the centre of Malinska, less than 100 m from the sea, Guesthouse Villa Adria offers a shared terrace and free Wi-Fi in public areas. An on-site à la carte restaurant and a breakfast buffet cater to the guests culinary needs",
                "img" => "4.jpg"
            ],
            [
                "id" => 5,
                "name" => "Danubius Health Spa",
                "price" => 100,
                "description" => "Voted the best hotel in Romania in 2004, the first four-star hotel in Sovata standing just 200m from the unique salty Bear Lake.",
                "img" => "5.webp"
            ],
            [
                "id" => 6,
                "name" => "Ferienhaus Regina Werfenweng",
                "price" => 60,
                "description" => "This peaceful and friendly holiday house in Salzburg is surrounded by mountains and forests and is the best choice for those who want to have a good rest. Our house is situated in a calm place with a view of the Hochkönig-mountain mass, right at the valley station of the cableway IKARUS. In winter you can spend here many of days skiing and in summer you can use it for long walking trips and glider flights.",
                "img" => "6.jpg"
            ]
        ];

        foreach ($data as $row) {
            Accomodation::forceCreate($row);
        }
    }
}
