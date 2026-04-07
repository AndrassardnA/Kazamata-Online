import { Outlet } from "react-router-dom";
import Header from "../components/header";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import '../assets/styles/layouts/auth-layout.css'

function AuthLayout(){
    return(
        <>
        <Header/>
        <Navbar/>
        <Outlet/>
        <Footer/>
        </>
    );
}
export default AuthLayout;