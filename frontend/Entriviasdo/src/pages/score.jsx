import { useNavigate } from 'react-router-dom';
import './score.css';

export default function Score({ score, total, onRestart }) {
    const navigate = useNavigate();
    const percentage = Math.round((score / total) * 100);
    document.title = `Tu puntaje: ${percentage}% - Entriviasdo`;

    const getMessage = () => {
        if (percentage === 100) return { text: '¡Perfecto!', emoji: '🏆', color: '#FFD700' };
        if (percentage >= 80) return { text: '¡Excelente!', emoji: '🎉', color: '#4CAF50' };
        if (percentage >= 60) return { text: '¡Muy Bien!', emoji: '👏', color: '#2196F3' };
        if (percentage >= 40) return { text: '¡Buen Intento!', emoji: '💪', color: '#FF9800' };
        return { text: 'Sigue Practicando', emoji: '📚', color: '#F44336' };
    };

    const message = getMessage();

    const handleRestart = () => {
        if (onRestart) {
            onRestart();
        }
    };

    const handleHome = () => {
        navigate('/');
    };

    return (
        <div className="score-container">
            <div className="score-card">
                <div className="score-header">
                    <h1 className="score-title">Resultados Finales</h1>
                </div>

                <div className="score-circle-container">
                    <svg className="score-circle" viewBox="0 0 200 200">
                        <circle
                            className="score-circle-bg"
                            cx="100"
                            cy="100"
                            r="85"
                        />
                        <circle
                            className="score-circle-progress"
                            cx="100"
                            cy="100"
                            r="85"
                            style={{
                                stroke: message.color,
                                strokeDasharray: `${(percentage / 100) * 534} 534`,
                            }}
                        />
                    </svg>
                    <div className="score-percentage">
                        <span className="percentage-number">{percentage}</span>
                        <span className="percentage-symbol">%</span>
                    </div>
                </div>

                <div className="score-message" style={{ color: message.color }}>
                    <span className="message-emoji">{message.emoji}</span>
                    <h2 className="message-text">{message.text}</h2>
                </div>

                <div className="score-details">
                    <div className="score-stat">
                        <span className="stat-label">Correctas</span>
                        <span className="stat-value correct">{score}</span>
                    </div>
                    <div className="score-divider"></div>
                    <div className="score-stat">
                        <span className="stat-label">Incorrectas</span>
                        <span className="stat-value incorrect">{total - score}</span>
                    </div>
                    <div className="score-divider"></div>
                    <div className="score-stat">
                        <span className="stat-label">Total</span>
                        <span className="stat-value total">{total}</span>
                    </div>
                </div>

                <div className="score-actions">
                    <button className="btn btn-primary" onClick={handleRestart}>
                        <span className="btn-icon">🔄</span>
                        Jugar de Nuevo
                    </button>
                    <button className="btn btn-secondary" onClick={handleHome}>
                        <span className="btn-icon">🏠</span>
                        Volver al Inicio
                    </button>
                </div>
            </div>
        </div>
    );
}