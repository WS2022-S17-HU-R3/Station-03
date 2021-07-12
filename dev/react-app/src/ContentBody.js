import {BookingPage} from "./BookingPage";
import {Calendar} from "./Calendar";
import {useEffect, useState} from "react";

export function ContentBody({checkIn, checkOut, adults, accomodations, selectedAccomodation, booking}) {
    if (booking) {
        return <BookingPage checkIn={checkIn} checkOut={checkOut} adults={adults} accomodations={accomodations}
                     selectedAccomodation={selectedAccomodation}/>
    }
    if (checkIn && checkOut) {
        return <Calendar accomodation={selectedAccomodation} checkIn={new Date(checkIn)}
                         checkOut={new Date(checkOut)} adults={adults}/>
    }

    return <AccomodationList accomodations={accomodations} />
}

function AccomodationList({accomodations}){
    const [favourites, setFavourites] = useState(JSON.parse(localStorage.getItem('favs')) || []);
    const [favouritesOnly, setFavouritesOnly] = useState(false);
    useEffect(() => {
        localStorage.setItem('favs', JSON.stringify(favourites));
    }, [favourites]);

    function addFavourite(accomodation){
        setFavourites(val => [...val, accomodation.id]);
    }

    function removeFavourite(accomodation){
        setFavourites(val => val.filter(v => v !== accomodation.id));
    }

    return <>
        <div className="custom-control custom-checkbox">
            <input type="checkbox" className="custom-control-input" id="favsToggle" onChange={e => setFavouritesOnly(e.target.checked)} value={favouritesOnly}/>
                <label className="custom-control-label" htmlFor="favsToggle">{favouritesOnly ? "Show all" : "Show favourites"}</label>
        </div>
        <div className="row">
        {
            accomodations.filter(acc => favouritesOnly ? favourites.includes(acc.id) : true).map(accomodation => <div className="col-4 col-md-3 p-2">
                <div className="card h-100">
                    <img src={"/img/" + accomodation.img} className="card-img-top" alt="image"/>
                    {
                        favourites.includes(accomodation.id) ? <button className="btn btn-sm btn-secondary" onClick={() => removeFavourite(accomodation)}>Remove from favourites</button> : <button className="btn btn-sm btn-secondary" onClick={() => addFavourite(accomodation)}>Add to favourites</button>
                    }
                    <div className="card-body">
                        <h5 className="card-title">{accomodation.name}</h5>
                        <p className="card-text">{accomodation.description}</p>
                    </div>
                </div>
            </div>)
        }
    </div>
        </>;
}