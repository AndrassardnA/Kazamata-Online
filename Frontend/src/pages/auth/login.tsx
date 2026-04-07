import { Link } from "react-router-dom";
import { useState } from "react";
type LoginData = {
    email: string;
    password: string;
    error: string;
}

function Login() {
    const [data, setData] = useState<LoginData>({
        email: "",
        password: "",
        error: "",
    });
    const onSubmit = () => {
        /*majd kód*/
    };
    return (
        <main>
            <div className="title"><div style={{ fontWeight: "bold" }}>Login</div> to write Adventures</div>
            <form action={onSubmit}>
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
                <div className="error">{data.error}</div>
                <button type="submit" id='submit'>Login</button>
            </form>
            <div className="change-auth">
                dont have a profile? <Link to='/register'>Create one</Link>
            </div>

        </main>
    );
}
export default Login;