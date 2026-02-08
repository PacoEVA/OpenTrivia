// URL base del API backend
export const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3000';

const PreguntaData = {
    pregunta: "Cuantos lados tiene un Triangulo?",
    puntaje: 5,
    nivel: 1,
    respuestas: [
        { texto: "1", IsCorrect: false },
        { texto: "3 ", IsCorrect: true },
        { texto: "6", IsCorrect: false },
        { texto: "4", IsCorrect: false },
    ],
};

export default PreguntaData;    