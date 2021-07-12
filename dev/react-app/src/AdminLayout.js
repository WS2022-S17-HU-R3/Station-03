import {useContext} from "react";
import {AuthContext} from "./AuthContext";
import {Link, useHistory} from "react-router-dom";

export function AdminLayout({children}) {
    const context = useContext(AuthContext);
    const history = useHistory();

    function logout() {
        context.setAuthenticated(false)
        history.push('/login')
    }

    return <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light px-2 d-flex justify-content-between">
            <div className="d-flex">
                <a className="navbar-brand">Admin</a>
                <ul className="nav mr-auto">
                    <li className="nav-item">
                        <Link className="nav-link" to="/admin/bookings">Bookings</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/admin/accomodations">Accomodations</Link>
                    </li>
                </ul>
            </div>
            <span className="navbar-text">
                <button className="btn btn-secondary btn-sm" onClick={logout}><i
                    className="fa fa-logout"/> Log out</button>
            </span>
        </nav>

        {children}
    </div>
}