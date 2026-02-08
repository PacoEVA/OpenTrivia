export function mapRowToQuestion(row) {
  // Ajusta los nombres de columnas esperados según tu plantilla
  const pregunta = (row.question || row.pregunta || row.Question || row.Pregunta || '').trim();
  const opciones = [
    row.optionA || row.opcionA || row.A || row.a || '',
    row.optionB || row.opcionB || row.B || row.b || '',
    row.optionC || row.opcionC || row.C || row.c || '',
    row.optionD || row.opcionD || row.D || row.d || ''
  ].map(s => (s||'').trim()).filter(s => s !== '');

  const respuesta = (row.answer || row.respuesta || row.Answer || '').trim();

  if (!pregunta || opciones.length === 0 || !respuesta) return null;
  return { pregunta, opciones, respuesta, categoria: row.category || row.categoria || '' };
}