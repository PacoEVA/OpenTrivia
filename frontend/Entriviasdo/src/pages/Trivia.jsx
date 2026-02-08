import { useEffect, useState } from "react";
import "./Trivia.css";

export default function Trivia() {
  const [questions, setQuestions] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("data")) || [];
    console.log("Preguntas cargadas:", stored);
    setQuestions(stored);
  }, []);

  if (questions.length === 0) {
    return <p>No hay preguntas</p>;
  }

  if (currentIndex >= questions.preguntas.length) {
    return <h2>🎉 Trivia finalizada</h2>;
  }

  const questionData = questions.preguntas[currentIndex];
  const answerLetters = ["A", "B", "C", "D"];

  const handleAnswerSubmit = () => {
    if (!selectedAnswer) {
      alert("Selecciona una respuesta");
      return;
    }

    const index = answerLetters.indexOf(selectedAnswer);
    const isCorrect = questionData.opciones[index] === questionData.respuesta;

    alert(
      isCorrect
        ? "¡Respuesta Correcta! 🎉"
        : `Incorrecta. Correcta: ${questionData.respuesta} 😞`,
    );

    setSelectedAnswer(null);
    setCurrentIndex((prev) => prev + 1); // 👈 CAMBIO REAL DE PREGUNTA
  };

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
              {questionData.opciones.map((res, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedAnswer(answerLetters[index])}
                  className={`answer-button ${
                    selectedAnswer === answerLetters[index] ? "selected" : ""
                  }`}
                >
                  <div className="button-content">
                    <span className="answer-letter">
                      {answerLetters[index]}
                    </span>
                    <span>{res}</span>
                  </div>
                </button>
              ))}
            </div>

            <button
              className="submit-button"
              onClick={() => {
                handleAnswerSubmit();
              }}
            >
              Confirmar Respuesta
            </button>
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
