import './App.css';
import {useEffect, useState} from "react";
import {ContentBody} from "./ContentBody";
import {diffInDays} from "./dateUtils";
import hu from './hu.json';
import en from './en.json';

function App() {
    const [lang, setLang] = useState(localStorage.getItem('lang') || 'hu');

    useEffect(() => {
        localStorage.setItem('lang', lang);
    }, [lang]);

    let texts;
    if(lang === 'hu'){
        texts = hu;
    }else{
        texts = en;
    }

    const [accomodations, setAccomodations] = useState([]);
    const [selectedAccomodation, setSelectedAccomodation] = useState(1);
    const [checkIn, setCheckIn] = useState("");
    const [checkOut, setCheckOut] = useState("");
    const [adults, setAdults] = useState(1);
    const [booking, setBooking] = useState(false);

    useEffect(() => {
        fetch('http://localhost:8000/api/accomodations').then(result => result.json()).then(data => setAccomodations(data));
    }, []);

    const price = accomodations.length === 0 ? 0 : adults * accomodations.find(accomodation => selectedAccomodation == accomodation.id).price * diffInDays(new Date(checkIn), new Date(checkOut));

    function startBooking(){
        setBooking(true);
    }

    return (
        <div>
            <div className="vw-100 vh-100 p-5 bg-light container-fluid">
                <div className="btn-group btn-group-sm" style={{position: 'fixed', top: '8px', right: '82px'}}>
                    <button className="btn btn-primary" onClick={() => setLang('hu')}>Magyar</button>
                    <button className="btn btn-primary" onClick={() => setLang('en')}>English</button>
                </div>
                <div className="card rounded-3 p-5 mx-5 mb-5 form-row">
                    <div className="form-inline d-flex align-items-end">
                        <div className="form-group">
                            <label htmlFor="checkIn">{texts["select-accomodation"]}</label>
                            <select value={selectedAccomodation} onChange={e => setSelectedAccomodation(e.target.value)}
                                    className="form-select">
                                {
                                    accomodations.map(accomodation => <option key={accomodation.id}
                                                                              value={accomodation.id}>{accomodation.name}</option>)
                                }
                            </select>
                        </div>
                        <div className="form-group px-3">
                            <label htmlFor="checkIn">{texts['check-in']}</label>
                            <input value={checkIn} onChange={e => setCheckIn(e.target.value)} type="date" id="checkIn"
                                   className="form-control"/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="checkOut">{texts['check-out']}</label>
                            <input value={checkOut} onChange={e => setCheckOut(e.target.value)} type="date"
                                   id="checkOut" className="form-control"/>
                        </div>
                        <div className="form-group px-3">
                            <label htmlFor="adults">{texts['adults']}</label>
                            <input value={adults} onChange={e => setAdults(e.target.value)} type="number" min={1}
                                   max={8} id="adults" className="form-control"/>
                        </div>
                        {
                            selectedAccomodation && checkIn && checkOut && <>
                                <div>
                                    <h6>{price} EUR</h6>
                                </div>
                                <div className="px-3">
                                    <button type="button" onClick={startBooking} className="btn btn-primary">Book</button>
                                </div>
                            </>
                        }
                    </div>
                </div>

                <div className="card p-5 mt-5 mx-5">
                <ContentBody checkIn={checkIn} checkOut={checkOut} selectedAccomodation={selectedAccomodation} adults={adults} booking={booking}
                             accomodations={accomodations} />
                </div>
            </div>
        </div>
    );
}

export default App;
