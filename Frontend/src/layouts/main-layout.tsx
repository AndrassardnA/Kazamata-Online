import Header from "../components/header";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import { Outlet } from "react-router-dom";
import '../assets/styles/layouts/main-layout.css'


function MainLayout() {
    return (
        <div id='main-layout-container'>
            <Header />
            <Navbar />
            <Outlet />
            <Footer />
        </div>
    );
}
export default MainLayout;