import {useContext, useState} from "react";
import {useHistory} from "react-router-dom";
import {AuthContext} from "./AuthContext";

export function LoginPage() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(false);
    const history = useHistory();
    const context = useContext(AuthContext);

    function handleSubmit(e) {
        e.preventDefault();
        e.stopPropagation();

        if (username === "admin" && password === "123") {
            setError(false);
            context.setAuthenticated(true);
            history.push('/admin/accomodations');
        } else {
            setError(true);
        }
    }

    return <div className="d-flex justify-content-center align-items-center vw-100 vh-100">
        <form className="shadow-lg rounded-3 mx-auto mb-5 w-25 p-3 bg-white" onSubmit={handleSubmit}>
            <h1><b>Login</b></h1>
            {
                error && <div className="alert alert-danger" role="alert">
                    Wrong username or password!
                </div>
            }
            <div className="form-group">
                <label htmlFor="usernameInput">Username</label>
                <input type="text" className="form-control" placeholder="Username" id="usernameInput" value={username}
                       onChange={e => setUsername(e.target.value)}/>
            </div>
            <div className="form-group mt-2">
                <label htmlFor="passwordInput">Password</label>
                <input type="password" className="form-control" placeholder="Password" id="passwordInput"
                       value={password} onChange={e => setPassword(e.target.value)}/>
            </div>
            <div className="d-flex justify-content-end mt-4">
                <button type="submit" className="btn btn-primary text-white rounded-3 py-2"
                        disabled={username === "" || password === ""}>Log in
                </button>
            </div>
        </form>
    </div>
}