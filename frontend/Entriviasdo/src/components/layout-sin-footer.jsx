import Footer from "./footer";
import NavBar from "./navbar";
import { Outlet } from "react-router-dom";
import './layout.css';

export default function LayoutSinFooter() {
    return (
        <div className="layout-container">
            <NavBar />
            <main className="main-content">
                <div className="content-wrapper">
                    <Outlet />
                </div>
            </main>
        </div>
    );
}