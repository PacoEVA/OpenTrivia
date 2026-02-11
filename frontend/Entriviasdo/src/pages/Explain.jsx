import './Explain.css';

export default function Explain() {
  return (
    <div className="explain-container">
      <section className="explain-section">
        <h1 className="explain-title">
          ¿Cómo funciona <strong id="entriviado">Entriviasdo</strong>?
        </h1>
        <p className="explain-text">
          Entriviasdo es una plataforma de trivia diseñada para poner a prueba
          tus conocimientos en una variedad de temas. Juegas con tus propias
          preguntas predefinidas mediante un archivo CSV con preguntas
          personalizadas. Cada pregunta tiene cuatro opciones de respuesta, y
          solo una es correcta. Al finalizar el juego, recibirás un puntaje
          basado en tu desempeño, acompañado de un mensaje motivador.
          ¡Diviértete y desafía a tus amigos!
        </p>
      </section>

      <section className="explain-data-section">
        <h2 className="explain-data-title">Formato del archivo CSV</h2>
        <p className="explain-data-text">
          El archivo CSV debe contener las siguientes columnas:
        </p>
        <code className="csv-format">
          question,optionA,optionB,optionC,optionD,answer,category
          ¿Capital de Francia?,París,Madrid,Lisboa,Berlín,París,Geografía
          ¿Cuántos planetas hay en el sistema solar?,7,8,9,10,8,Ciencia
        </code>
        <span className="explain-note">
          Nota: Asegúrate de que el archivo CSV esté correctamente formateado,
          aqui tienes un archivo de ejemplo para descargar:{" "}
          <a
            target="_blank"
            href="https://drive.google.com/file/d/1omaiaxNUmaq0bEQdvk3cNZ1oJtqyyhY8/view?usp=sharing"
          >
            questions.csv
          </a>
        </span>
      </section>
    </div>
  );
}
