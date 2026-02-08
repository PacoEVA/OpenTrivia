import './footer.css';

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-section">
                    <h3>Entriviasdo</h3>
                    <p>Tu plataforma de trivia y entretenimiento</p>
                </div>

                <div className="footer-section">
                    <h4>Enlaces rápidos</h4>
                    <ul>
                        <li><a href="/" onClick={() => alert("No ta funcionando, el tira codigo ta vago")}>Inicio</a></li>
                        <li><a href="/about" onClick={() => alert("No ta funcionando, el tira codigo ta vago")}>Acerca de</a></li>
                        <li><a href="/contact" onClick={() => alert("No ta funcionando, el tira codigo ta vago")}>Contacto</a></li>
                    </ul>
                </div>

                <div className="footer-section">
                    <h4>Redes sociales</h4>
                    <ul>
                        <li><a href="https://github.com/PacoEVA">GitHub</a></li>
                        <li><a href="https://www.instagram.com/4lex.jsx">Instagram</a></li>
                    </ul>
                </div>
            </div>

            <div className="footer-bottom">
                <p>&copy; {currentYear} PacoEva🎭. Todos los derechos reservados.</p>
            </div>
        </footer>
    );
};
