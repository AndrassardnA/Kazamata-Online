import { NavLink, useLocation } from "react-router-dom";
import '../assets/styles/components/navbar.css'
function Navbar() {
    const location = useLocation();
    if (location.pathname === "/login" || location.pathname === "/register") {
        return (
            <nav>
                <NavLink to="/">Home</NavLink>
                <NavLink to="about">About us</NavLink>
            </nav>
        );
    }
    return (
        <nav>
            <NavLink to="/">Home</NavLink>
            <NavLink to="about">About us</NavLink>
            <NavLink to="login">Log in</NavLink>
            <NavLink to="register">Register</NavLink>
        </nav>
    );
}
export default Navbar;