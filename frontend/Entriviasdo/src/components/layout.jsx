import Footer from "./footer";
import NavBar from "./navbar";
import { Outlet } from "react-router-dom";
import './layout.css';

export default function Layout() {
    return (
        <div className="layout-container">
            <NavBar />
            <main className="main-content">
                <div className="content-wrapper">
                    <Outlet />
                </div>
            </main>
            <Footer />
        </div>
    );
}