import { Outlet } from "react-router-dom";
import NavigationBar from "../Components/NavBar/NavigationBar.jsx";
import Footer from "../Components/Footer/Footer.jsx";
import ScrollToTop from "./ScrollToTop.jsx";

export const Layout = () => {
    return (
        <main>
            <ScrollToTop/>
            <NavigationBar />
            <Outlet />
            <Footer />
        </main>
    )
}