import {useState} from "react";
import {Redirect, Route, Switch} from "react-router-dom";
import {AuthContext} from "./AuthContext";
import {AccomodationsPage} from "./AccomodationsPage";
import {BookingsPage} from "./BookingsPage";
import {LoginPage} from "./LoginPage";
import {NotFoundPage} from "./NotFoundPage";

function App() {
    const [authenticated, setAuthenticated] = useState(false);
    return (
        <AuthContext.Provider value={{authenticated, setAuthenticated}}>
            <Switch>

                <Route path="/login" component={LoginPage}/>
                {
                    !authenticated && <Redirect to="/login"/>
                }
                <Route path="/admin/bookings" component={BookingsPage}/>
                <Route path="/admin/accomodations" component={AccomodationsPage}/>
                <Route component={NotFoundPage}/>
            </Switch>
        </AuthContext.Provider>
    );
}

export default App;
