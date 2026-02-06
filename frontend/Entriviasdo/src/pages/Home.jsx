import './Home.css';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Loading from '../components/Loading';
import PreguntaData from '../const/constantes';

export default function Home() {
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();

    const handlePlayButton = () => {
        setIsLoading(true);
        localStorage.setItem('currentQuestion', JSON.stringify(PreguntaData));
        setTimeout(() => {
            setIsLoading(false);
            navigate('/trivia');
        }, 2000);
    };

    if (isLoading) {
        return <Loading />;
    }

    return (
        <div className="home-container">
            <section className="hero-section">
                <h1 className="hero-title">¡Bienvenido a Entriviasdo!</h1>
                <p className="hero-subtitle">La plataforma de trivia más entretenida</p>
                <button className="cta-button" onClick={handlePlayButton}>Comenzar a jugar</button>
            </section>

            <section className="features-section">
                <div className="feature-card">
                    <div className="feature-icon">🎯</div>
                    <h3>Desafíos Diarios</h3>
                    <p>Nuevas preguntas cada día para poner a prueba tus conocimientos</p>
                </div>
                <div className="feature-card">
                    <div className="feature-icon">🏆</div>
                    <h3>Competencias</h3>
                    <p>Compite con otros jugadores y escala en el ranking</p>
                </div>
                <div className="feature-card">
                    <div className="feature-icon">🎓</div>
                    <h3>Aprende Jugando</h3>
                    <p>Diversas categorías para expandir tu conocimiento</p>
                </div>
            </section>
        </div>
    );
}
