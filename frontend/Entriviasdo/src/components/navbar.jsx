import "./navbar.css";

export default function Navbar() {
  return (
    <header className="header-navbar">
      <nav className="nav-navbar">
        <ul className="ul-navbar">
          <li className="li-navbar">
            <a href="#" className="a-navbar">
              Inicio
            </a>
          </li>
          <li className="li-navbar">
            <a href="#" className="a-navbar">
              Explicación
            </a>
          </li>
          <li className="li-navbar">
            <a href="#" className="a-navbar">
              Codigo fuente
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
