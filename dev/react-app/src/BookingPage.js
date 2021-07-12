import {useState} from "react";

export function BookingPage({checkIn, checkOut, adults, accomodations, selectedAccomodation}) {
    const [comment, setComment] = useState("");
    const [error, setError] = useState("");
    const [bookingId, setBookingId] = useState(null);

    function sendBooking() {
        fetch("http://localhost:8000/api/bookings", {
            method: 'POST',
            body: JSON.stringify({
                checkIn: new Date(checkIn).toJSON(),
                checkOut: new Date(checkOut).toJSON(),
                accomodationId: selectedAccomodation,
                comment,
                bookingDate: new Date().toJSON()
            })
        }).then(res => {
            if (res.status !== 200) {
                res.text().then(setError)
                return;
            }
            res.json().then(({id}) => setBookingId(id));
        })
    }

    if (bookingId) {
        return <div>
            <h1>Booking saved!</h1>
            <p>Your booking id is: {bookingId}.</p>
            <button onClick={() => window.location = "/"} className="btn btn-secondary">Back to home</button>
        </div>
    }

    if (error) {
        return <div>
            <div className="alert alert-danger">An error happened during your booking! :(</div>
            <pre>{error}</pre>
            <button onClick={() => window.location = "/"} className="btn btn-secondary">Back to home</button>
        </div>
    }

    return <>
        <h1>Send booking for {accomodations.find(a => a.id == selectedAccomodation).name}</h1>

        <div>
            <b>{checkIn} - {checkOut}</b>
        </div>

        <div>
            <b>{adults}</b> adults
        </div>

        <div className="form-group mb-4">
            <label htmlFor="comment">Leave a comment (optional)</label>
            <textarea id="comment" className="form-control" value={comment} onChange={e => setComment(e.target.value)}/>
        </div>

        <button className="btn btn-primary" onClick={sendBooking}>Send booking</button>
    </>
}