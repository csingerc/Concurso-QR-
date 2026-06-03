// ============================================================
// CONFIGURACIÓN CENTRAL
// ============================================================

const CONFIG = {
  supabase: {
    url: 'https://ocdrbbnecotziesnclvf.supabase.co',
    anonKey: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9jZHJiYm5lY290emllc25jbHZmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzkyMDc5MjEsImV4cCI6MjA5NDc4MzkyMX0.KDeiI7sHhzb20Tm4ICXBNumiOVsI9gDEBlW5G3MNMSU',
  },

  // ── RUTs de Calidad ──────────────────────────────────────
  // Reemplazar con lista real cuando llegue el CSV
  // Formato: sin puntos, con guión, lowercase
  rutsCalidad: [
    // '16784918-0',  // Singer Camilo — descomentar cuando se confirme
  ],

  // ── Puntos base por correctas en un QR ──────────────────
  puntos: {
    1: 10,
    2: 25,
    3: 45,
  },

  // ── Multiplicador por velocidad de respuesta (por pregunta) ──
  // Se aplica al puntaje base del QR completo
  tiempoMultiplicador: [
    { hasta: 30,  factor: 1.0  },  // < 30s  → 100%
    { hasta: 60,  factor: 0.85 },  // 30–60s → 85%
    { hasta: 120, factor: 0.65 },  // 1–2min → 65%
    { hasta: Infinity, factor: 0.4 }, // > 2min → 40%
  ],

  // Tiempo máximo por pregunta en segundos (solo visual, no bloquea)
  tiempoMaxSegundos: 120,

  bonusCompletarTodo: 20,
  totalQrs: 5,
  rankingRefreshMs: 15000,
};

// ── Helpers ───────────────────────────────────────────────

function esCalidad(rut) {
  return CONFIG.rutsCalidad.includes(rut);
}

function calcularMultiplicador(segundos) {
  for (const tramo of CONFIG.tiempoMultiplicador) {
    if (segundos <= tramo.hasta) return tramo.factor;
  }
  return 0.4;
}

// Aplica multiplicador promedio de todas las preguntas al puntaje base
function calcularPuntajeFinal(puntajeBase, tiemposPorPregunta) {
  if (!tiemposPorPregunta || tiemposPorPregunta.length === 0) return puntajeBase;
  const factorPromedio = tiemposPorPregunta.reduce((sum, t) => sum + calcularMultiplicador(t), 0) / tiemposPorPregunta.length;
  return Math.round(puntajeBase * factorPromedio);
}
