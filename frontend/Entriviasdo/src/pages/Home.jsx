import "./Home.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Loading from "../components/Loading";
import PreguntaData from "../const/constantes";
import UploadModal from "../components/UploadModal";

export default function Home() {
  const [isLoading, setIsLoading] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();

  const handlePlayButton = () => {
    setIsLoading(true);
    localStorage.setItem("currentQuestion", JSON.stringify(PreguntaData));
    setTimeout(() => {
      setIsLoading(false);
      navigate("/trivia");
    }, 2000);
  };

  const handleFileUpload = async (file) => {
    console.log("Archivo CSV cargado:", file);

    // 1. Leer contenido en el frontend (opcional)
    const reader = new FileReader();
    reader.onload = (e) => {
      const csvContent = e.target.result;
      console.log("Contenido del CSV:", csvContent);
      // Aquí podrías validar o procesar el CSV antes de enviarlo
    };
    reader.readAsText(file);

    // 2. Enviar al backend
    const formData = new FormData();
    formData.append("file", file);

    try {
      const response = await fetch(
        "http://localhost:3000/api/upload-questions",
        {
          method: "POST",
          body: formData,
        },
      );
      const data = await response.json();
      localStorage.setItem("data", JSON.stringify(data));
      navigate("/trivia");
    } catch (error) {
      console.error("Error al subir el archivo:", error);
      alert("Error al subir el archivo");
    }
  };

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className="home-container">
      <section className="hero-section">
        <h1 className="hero-title">¡Bienvenido a Entriviasdo!</h1>
        <p className="hero-subtitle">La plataforma de trivia más entretenida</p>
        <button className="cta-button" onClick={() => alert("No ta funcionando, el tira codigo ta vago")}>
          Comenzar a jugar
        </button>
        <button className="cta-button" onClick={() => setIsModalOpen(true)}>
          Cargar tu Trivia Personalizada
        </button>
        <UploadModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          onFileUpload={handleFileUpload}
        />
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
