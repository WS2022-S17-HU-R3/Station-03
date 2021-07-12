import {useEffect, useState} from "react";
import {AdminLayout} from "./AdminLayout";

export function AccomodationsPage() {
    const [accomodations, setAccomodations] = useState([]);
    useEffect(() => {
        fetch('http://localhost/api/accomodations').then(response => response.json()).then(data => setAccomodations(data));
    }, []);
    return <AdminLayout>
        <div className="container">
            <div className="row row-cols-3">
                {
                    accomodations.map(accomodation => (<div className="col-3 p-2">
                        <div className="card p-4">
                            <h4>{accomodation.name}</h4>
                            <h6>Price: {accomodation.price} EUR</h6>
                            <p className="text-muted">{accomodation.description}</p>
                        </div>
                    </div>))
                }
            </div>
        </div>
    </AdminLayout>
}