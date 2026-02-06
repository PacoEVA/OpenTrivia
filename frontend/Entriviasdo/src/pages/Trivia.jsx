import { useState, useEffect } from "react";
import "./Trivia.css";

export default function Trivia() {
  const [questionData, setQuestionData] = useState(null);

  useEffect(() => {
    const storedData = localStorage.getItem("currentQuestion");
    if (storedData) {
      const questionData = JSON.parse(storedData);
      setQuestionData(questionData);
      console.log("Datos de la pregunta:", questionData);
    } else {
      console.log("No se encontraron datos de la pregunta en localStorage");
    }
  }, []);

  const answerLetters = ["A", "B", "C", "D"];

  return (
    <div className="trivia-container">
      <div className="trivia-card">
        <div className="trivia-header">
          <h1 className="trivia-title">🎯 Trivia Challenge</h1>
          <p className="trivia-subtitle">Pon a prueba tus conocimientos</p>
        </div>

        {questionData ? (
          <div className="question-section">
            <div className="question-text">{questionData.pregunta}</div>

            <div className="answers-grid">
              {questionData.respuestas.map((res, index) => (
                <button key={index} className="answer-button">
                  <div className="button-content">
                    <span className="answer-letter">
                      {answerLetters[index]}
                    </span>
                    <span>{res.texto}</span>
                  </div>
                </button>
              ))}
            </div>
              <button className="submit-button">Confirmar Respuesta</button>
          </div>
        ) : (
          <div className="no-question">
            <div className="no-question-icon">📝</div>
            <p className="no-question-text">No hay preguntas disponibles</p>
          </div>
        )}
      </div>
    </div>
  );
}
