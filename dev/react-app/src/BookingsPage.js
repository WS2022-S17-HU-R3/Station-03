import {useEffect, useState} from "react";
import {AdminLayout} from "./AdminLayout";

export function BookingsPage() {
    const [bookings, setBookings] = useState([]);
    const [filter, setFilter] = useState("");

    useEffect(() => {
        fetch('http://localhost/api/bookings' + (filter !== "" ? "?comment=" + filter : '')).then(response => response.json()).then(data => setBookings(data));
    }, [filter]);

    function deleteBooking(id) {
        try {
            fetch('http://localhost/api/bookings/' + id, {method: 'DELETE', headers: {Accept: 'application/json'}})
                .then((res) => res.status === 200 ? setBookings(val => val.filter(b => b.id !== id)) : res.json().then(r => alert(r.message)));
        } catch (e) {
            alert(e);
        }
    }

    return <AdminLayout>
        <div className="container">
            <input className="form-control mt-2" type="text" placeholder="search"
                   onChange={e => setFilter(e.target.value)} value={filter}/>
            <div className="row row-cols-1">
                {
                    bookings.map(booking => (
                            <div className="col p-2">
                                <div className="card p-4">
                                    <h6>{booking.checkIn} - {booking.checkOut}</h6>
                                    <h6>Booking date: {booking.bookingDate}</h6>
                                    <p className="text-muted">{booking.comment}</p>
                                    <button className="btn btn-danger w-25" onClick={() => deleteBooking(booking.id)}>delete
                                        booking
                                    </button>
                                </div>
                            </div>
                        )
                    )
                }
            </div>

            <CreateBookingForm />
        </div>
    </AdminLayout>
}

function CreateBookingForm(){
    const [accomondationId, setAccomondationId] = useState(1);
    const [checkIn, setCheckIn] = useState("");
    const [checkOut, setCheckOut] = useState("");
    const [comment, setComment] = useState("");

    function handleSubmit(e) {
        e.preventDefault();
        e.stopPropagation();
        fetch("http://localhost/api/bookings", {method: 'POST', body: JSON.stringify({accomondationId, comment, checkIn, checkOut, bookingDate: new Date().toJSON()})}).then(resp => resp.status === 200 || resp.status === 201 ? alert("Booking saved, please reload") : resp.json().then(err => alert(err.message)));
    }

    return <form onSubmit={handleSubmit}>
        <input type="number" placeholder="accomondationId" value={accomondationId} onChange={e => setAccomondationId(e.target.value)}/>
        <input type="date" placeholder="checkIn" value={checkIn} onChange={e => setCheckIn(e.target.value)}/>
        <input type="date" placeholder="checkOut" value={checkOut} onChange={e => setCheckOut(e.target.value)}/>
        <textarea value={comment} onChange={e => setComment(e.target.value)} />
        <button type="submit">Create booking</button>
    </form>;
}