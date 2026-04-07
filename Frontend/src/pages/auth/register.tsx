import { Link } from "react-router-dom";
import { useState } from "react";
type RegisterData = {
    username: string;
    email: string;
    password: string;
    passwordAgain: string;
    error: string;
}

function Register() {
    const [data, setData] = useState<RegisterData>({
        username: "",
        email: "",
        password: "",
        passwordAgain: "",
        error: "",
    });
    const onSubmit = () => {
        /*majd kód*/
    };
    return (
        <main>
            <div className="title"><div style={{ fontWeight: "bold" }}>Register</div> to write Adventures</div>
            <form action={onSubmit}>
                <label htmlFor="username">User name</label>
                <input
                    type="text" id="username"
                    value={data.username}
                    onChange={(e) => setData(prev => ({ ...prev, username: e.target.value }))}
                />
                <label htmlFor="email">Email</label>
                <input
                    type="email" id="email"
                    value={data.email}
                    onChange={(e) => setData(prev => ({ ...prev, email: e.target.value }))}
                />
                <label htmlFor="password">Password</label>
                <input
                    type="password" id="password"
                    value={data.password}
                    onChange={(e) => setData(prev => ({ ...prev, password: e.target.value }))}
                />
                <label htmlFor="passwordAgain">Password Again</label>
                <input
                    type="password" id="passwordAgain"
                    value={data.passwordAgain}
                    onChange={(e) => setData(prev => ({ ...prev, passwordAgain: e.target.value }))}
                />
                <div className="error">{data.error}</div>
                <button type="submit" id="submit">Register</button>
            </form>
            <div className="change-auth">
                Already have a profile? <Link to='/login'>Login</Link>
            </div>
        </main>
    );
}
export default Register;