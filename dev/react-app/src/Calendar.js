import {useEffect, useState} from "react";
import {addDays, getDateRangeAsArray, isSelected, subDays} from "./dateUtils";



export function Calendar({accomodation, adults, checkIn, checkOut}) {
    const [bookedDates, setBookedDates] = useState([]);
    const [dates, setDates] = useState([]);

    useEffect(() => {
        fetch("http://localhost:8000/api/accomodations/" + accomodation + "/bookings").then(response => response.json()).then(bookings => setBookedDates(bookings.map(booking => getDateRangeAsArray(+new Date(booking.checkIn), +new Date(booking.checkOut))).flat()));
    }, [accomodation]);

    useEffect(() => {
        const start = subDays(checkIn, 10);
        const end = addDays(checkOut, 10);

        setDates(getDateRangeAsArray(start, end));
    }, [checkOut, checkIn]);

    return <div className="calendar">
        {
            dates.map(date => <div
                className={`calendar-day calendar-day-of-week-${date.getDay()} ${bookedDates.find(d => +d === +date) ? 'booked' : ''} ${isSelected(checkIn, checkOut, date) ? "selected" : ""} ${+checkIn === +date ? 'check-in' : ''} ${+checkOut === +date ? 'check-out' : ''}`}>
                {date.getUTCDate()}
            </div>)
        }
    </div>
}