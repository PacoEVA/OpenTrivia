import "./navbar.css";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();

  const handleNavigation = (path) => {
    navigate(path);
  };
  return (
    <header className="header-navbar">
      <nav className="nav-navbar">
        <ul className="ul-navbar">
          <li className="li-navbar">
            <a href="#" onClick={() => handleNavigation("/")} className="a-navbar">
              Inicio
            </a>
          </li>
          <li className="li-navbar">
            <a href="#" onClick={() => handleNavigation("/explain")} className="a-navbar">
              Explicación
            </a>
          </li>
          <li className="li-navbar">
            <a href="https://github.com/PacoEVA/OpenTrivia" className="a-navbar">
              Codigo fuente
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
