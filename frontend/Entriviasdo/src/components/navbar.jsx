import "./navbar.css";

export default function Navbar() {
  return (
    <header className="header-navbar">
      <nav className="nav-navbar">
        <ul className="ul-navbar">
          <li className="li-navbar">
            <a href="#" onClick={() => alert("No ta funcionando, el tira codigo ta vago")} className="a-navbar">
              Inicio
            </a>
          </li>
          <li className="li-navbar">
            <a href="#" onClick={() => alert("No ta funcionando, el tira codigo ta vago")} className="a-navbar">
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
