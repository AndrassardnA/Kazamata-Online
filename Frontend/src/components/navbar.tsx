import { NavLink, useLocation } from "react-router-dom";
import '../assets/styles/components/navbar.css'
function Navbar() {
    const location = useLocation();
    if (location.pathname === "/login" || location.pathname === "/register") {
        return (
            <nav>
                <div className='arr-left'>
                    <NavLink to="/">Home</NavLink>
                    <NavLink to="about">About us</NavLink>
                </div>

            </nav>
        );
    }
    return (
        <nav>
            <div className='arr-left'>
                <NavLink to="/">Home</NavLink>
                <NavLink to="about">About us</NavLink>
            </div>
            <div className='arr-right'>
                <NavLink to="login">Log in</NavLink>
                <NavLink to="register">Register</NavLink>
            </div>
        </nav>
    );
}
export default Navbar;