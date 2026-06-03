// ============================================================
// BANCO DE PREGUNTAS
// Nivel GENERAL: 5 QR × 3 preguntas (producción, administración)
// Nivel CALIDAD: 5 QR × 3 preguntas (técnico, normativo)
// ============================================================

const PREGUNTAS = {

  // ── NIVEL GENERAL ────────────────────────────────────────

  general: {

    1: [
      {
        tema: "Higiene Personal",
        pregunta: "¿Cuántos segundos mínimo debes lavarte las manos para eliminar bacterias?",
        opciones: [
          { texto: "5 segundos, si uso bastante jabón", correcta: false },
          { texto: "20 segundos, frotando bien todas las partes", correcta: true },
          { texto: "60 segundos siempre", correcta: false },
        ],
        feedbackCorrecto: "✅ ¡Correcto! 20 segundos frotando palmas, dorso, entre dedos y muñecas. Recomendación OMS.",
        feedbackIncorrecto: "❌ Son al menos 20 segundos. Menos tiempo no elimina eficazmente los microorganismos.",
      },
      {
        tema: "Higiene Personal",
        pregunta: "¿Cuándo es obligatorio lavarse las manos en la planta?",
        opciones: [
          { texto: "Solo al entrar a la planta", correcta: false },
          { texto: "Solo después de ir al baño", correcta: false },
          { texto: "Al entrar, después del baño y al cambiar de tarea", correcta: true },
        ],
        feedbackCorrecto: "✅ ¡Exacto! Cada cambio de actividad es una oportunidad de contaminación cruzada.",
        feedbackIncorrecto: "❌ Las manos se lavan en múltiples momentos: al entrar, después del baño y al cambiar de tarea.",
      },
      {
        tema: "Higiene Personal",
        pregunta: "Un guante roto, ¿qué riesgo representa para el producto?",
        opciones: [
          { texto: "Ninguno, igual cubre la mano", correcta: false },
          { texto: "Puede contaminar el producto igual que una mano descubierta", correcta: true },
          { texto: "Solo es problema si hay una herida visible", correcta: false },
        ],
        feedbackCorrecto: "✅ ¡Correcto! Un guante roto pierde su función de barrera. Debe cambiarse inmediatamente.",
        feedbackIncorrecto: "❌ Un guante roto deja pasar microorganismos directamente al producto.",
      },
    ],

    2: [
      {
        tema: "Temperatura y Cadena de Frío",
        pregunta: "¿Por encima de qué temperatura empieza a multiplicarse la Listeria de forma peligrosa?",
        opciones: [
          { texto: "Sobre 10°C", correcta: false },
          { texto: "Sobre 4°C", correcta: true },
          { texto: "Solo sobre 20°C", correcta: false },
        ],
        feedbackCorrecto: "✅ ¡Correcto! Por eso el salmón RTE debe mantenerse bajo 4°C.",
        feedbackIncorrecto: "❌ La Listeria se multiplica sobre 4°C. A temperatura ambiente, el riesgo es alto.",
      },
      {
        tema: "Temperatura y Cadena de Frío",
        pregunta: "¿La Listeria monocytogenes puede sobrevivir en el refrigerador?",
        opciones: [
          { texto: "No, el frío la mata", correcta: false },
          { texto: "Sí, crece lento pero puede crecer bajo 4°C", correcta: true },
          { texto: "Solo si el refrigerador está sucio", correcta: false },
        ],
        feedbackCorrecto: "✅ ¡Correcto! La Listeria es psicrotrófica: sobrevive y crece en frío.",
        feedbackIncorrecto: "❌ La Listeria puede crecer en el refrigerador. Por eso el control de temperatura no es suficiente solo.",
      },
      {
        tema: "Temperatura y Cadena de Frío",
        pregunta: "Si un producto sale de la cadena de frío más de 2 horas a temperatura ambiente, ¿qué haces?",
        opciones: [
          { texto: "Lo vuelvo a enfriar rápido y listo", correcta: false },
          { texto: "Lo consumo antes de que empeore", correcta: false },
          { texto: "Aviso a mi supervisor para evaluar el producto", correcta: true },
        ],
        feedbackCorrecto: "✅ ¡Correcto! El daño microbiológico ya ocurrió. Volver a enfriar no elimina las bacterias.",
        feedbackIncorrecto: "❌ Nunca tomes esa decisión solo. Calidad debe evaluar el producto.",
      },
    ],

    3: [
      {
        tema: "Contaminación Cruzada",
        pregunta: "¿Qué es la contaminación cruzada?",
        opciones: [
          { texto: "Usar el mismo cuchillo para distintos productos", correcta: false },
          { texto: "Transferir bacterias de una superficie o alimento a otro", correcta: true },
          { texto: "Mezclar productos de distintos clientes en el mismo palé", correcta: false },
        ],
        feedbackCorrecto: "✅ ¡Correcto! La contaminación cruzada ocurre cuando bacterias viajan de una fuente contaminada a un alimento seguro.",
        feedbackIncorrecto: "❌ La contaminación cruzada es la transferencia de microorganismos entre superficies, utensilios o alimentos.",
      },
      {
        tema: "Contaminación Cruzada",
        pregunta: "Una bandeja negra que estuvo en el piso, ¿puede usarse para apoyar producto terminado?",
        opciones: [
          { texto: "Sí, si la limpio con un paño", correcta: false },
          { texto: "No, puede transferir suciedad y bacterias al producto", correcta: true },
          { texto: "Solo si el producto está en bolsa cerrada", correcta: false },
        ],
        feedbackCorrecto: "✅ ¡Correcto! Las bandejas que tocaron el piso van a lavado, nunca a producción.",
        feedbackIncorrecto: "❌ El piso concentra bacterias. Una bandeja que lo tocó debe higienizarse completamente.",
      },
      {
        tema: "Contaminación Cruzada",
        pregunta: "Un operario toca su mascarilla con la mano enguantada y sigue trabajando el producto. ¿Qué ocurrió?",
        opciones: [
          { texto: "Nada, la mascarilla es parte del uniforme limpio", correcta: false },
          { texto: "Posible contaminación cruzada: debía cambiar guantes y lavarse", correcta: true },
          { texto: "Solo es riesgo si está resfriado", correcta: false },
        ],
        feedbackCorrecto: "✅ ¡Correcto! La mascarilla acumula microorganismos. Tocarla contamina los guantes.",
        feedbackIncorrecto: "❌ El protocolo es: retira el guante, lava manos, vuelve a enguantar.",
      },
    ],

    4: [
      {
        tema: "Inocuidad en Casa",
        pregunta: "¿Cómo guardas el salmón ahumado listo para comer en el refrigerador?",
        opciones: [
          { texto: "En cualquier repisa, igual está sellado", correcta: false },
          { texto: "Bien tapado, separado de carnes y pescados crudos", correcta: true },
          { texto: "En la parte más baja junto a la carne cruda", correcta: false },
        ],
        feedbackCorrecto: "✅ ¡Correcto! El salmón RTE no se cocina antes de comer, debe protegerse de crudos.",
        feedbackIncorrecto: "❌ El salmón ahumado debe alejarse de carnes crudas que pueden contener bacterias.",
      },
      {
        tema: "Inocuidad en Casa",
        pregunta: "¿Puedes descongelar salmón dejándolo en el mesón toda la noche?",
        opciones: [
          { texto: "Sí, si la cocina está fresca", correcta: false },
          { texto: "No, debe descongelarse en el refrigerador o bajo agua fría corriente", correcta: true },
          { texto: "Solo es problema en verano", correcta: false },
        ],
        feedbackCorrecto: "✅ ¡Correcto! A temperatura ambiente las bacterias se multiplican en la superficie mientras el centro sigue congelado.",
        feedbackIncorrecto: "❌ Siempre descongelar en frío. El mesón a temperatura ambiente es zona de peligro.",
      },
      {
        tema: "Inocuidad en Casa",
        pregunta: "Llegas del trabajo y vas a preparar comida. ¿Qué es lo primero que debes hacer?",
        opciones: [
          { texto: "Ver si el aceite está a temperatura correcta", correcta: false },
          { texto: "Lavarse bien las manos con agua y jabón", correcta: true },
          { texto: "Revisar el celular por si hay mensajes urgentes", correcta: false },
        ],
        feedbackCorrecto: "✅ ¡Correcto! Lo que aprendiste aquí protege también a tu familia en casa.",
        feedbackIncorrecto: "❌ Las manos recogen bacterias durante el día. Lavarse es siempre el primer paso.",
      },
    ],

    5: [
      {
        tema: "Cultura de Inocuidad",
        pregunta: "Ves algo que podría contaminar el producto, pero no es tu área. ¿Qué haces?",
        opciones: [
          { texto: "No me meto, no es mi zona ni mi responsabilidad", correcta: false },
          { texto: "Lo ignoro si nadie más lo vio", correcta: false },
          { texto: "Aviso de todas formas, la inocuidad es de todos", correcta: true },
        ],
        feedbackCorrecto: "✅ ¡Correcto! Reportar a tiempo puede evitar un problema grave.",
        feedbackIncorrecto: "❌ Un problema no reportado puede convertirse en un retiro de mercado.",
      },
      {
        tema: "Cultura de Inocuidad",
        pregunta: "¿Por qué es importante reportar un error antes de que llegue al cliente?",
        opciones: [
          { texto: "Para no meterse en problemas legales", correcta: false },
          { texto: "Para corregirlo a tiempo y proteger al consumidor", correcta: true },
          { texto: "No es necesario si el error fue pequeño", correcta: false },
        ],
        feedbackCorrecto: "✅ ¡Correcto! Reportar temprano es la diferencia entre una corrección interna y un retiro de mercado.",
        feedbackIncorrecto: "❌ El objetivo del reporte es proteger al consumidor final. Siempre vale la pena avisar.",
      },
      {
        tema: "Cultura de Inocuidad",
        pregunta: "La inocuidad alimentaria, ¿de quién es responsabilidad?",
        opciones: [
          { texto: "Solo del área de Calidad", correcta: false },
          { texto: "Del supervisor de turno", correcta: false },
          { texto: "De todos en la planta, sin excepción", correcta: true },
        ],
        feedbackCorrecto: "✅ ¡Correcto! Desde el operario de ingreso hasta gerencia: todos somos parte de la cadena.",
        feedbackIncorrecto: "❌ Calidad lidera, pero la inocuidad real depende de cada persona en cada momento.",
      },
    ],
  },

  // ── NIVEL CALIDAD ─────────────────────────────────────────

  calidad: {

    1: [
      {
        tema: "Microbiología Aplicada",
        pregunta: "¿Cuál es la temperatura mínima de crecimiento documentada de Listeria monocytogenes?",
        opciones: [
          { texto: "-1.5°C", correcta: true },
          { texto: "4°C", correcta: false },
          { texto: "0°C", correcta: false },
        ],
        feedbackCorrecto: "✅ Correcto. L. monocytogenes puede crecer desde -1.5°C, lo que la hace el patógeno crítico en RTE refrigerado. (ICMSF, 1996)",
        feedbackIncorrecto: "❌ L. monocytogenes puede crecer desde -1.5°C. El límite de 4°C es regulatorio, no biológico.",
      },
      {
        tema: "Microbiología Aplicada",
        pregunta: "En el modelo de microbiología predictiva de Baranyi-Roberts, ¿qué representa el parámetro 'h₀'?",
        opciones: [
          { texto: "La tasa máxima de crecimiento específico (μmax)", correcta: false },
          { texto: "El estado fisiológico inicial de la célula", correcta: true },
          { texto: "El tiempo de latencia observado directamente", correcta: false },
        ],
        feedbackCorrecto: "✅ Correcto. h₀ = μmax × λ, representa el trabajo fisiológico que la célula debe completar antes de dividirse.",
        feedbackIncorrecto: "❌ h₀ es el parámetro de estado fisiológico inicial en el modelo de Baranyi-Roberts, no la tasa de crecimiento.",
      },
      {
        tema: "Microbiología Aplicada",
        pregunta: "¿Qué significa que una cepa de L. monocytogenes pertenezca al Linaje I (Lineage I)?",
        opciones: [
          { texto: "Es más resistente al calor pero menos virulenta en humanos", correcta: false },
          { texto: "Está asociada con mayor proporción de casos clínicos humanos y brotes", correcta: true },
          { texto: "Solo contamina ambientes, raramente causa enfermedad", correcta: false },
        ],
        feedbackCorrecto: "✅ Correcto. El Linaje I (incluyendo ST6) concentra la mayoría de casos invasivos y brotes documentados en humanos. (Wiedmann et al., 1997)",
        feedbackIncorrecto: "❌ El Linaje I está sobrerrepresentado en casos clínicos humanos respecto a su prevalencia ambiental.",
      },
    ],

    2: [
      {
        tema: "HACCP y Control de Procesos",
        pregunta: "Según el Codex Alimentarius, ¿cuántos principios tiene el sistema HACCP?",
        opciones: [
          { texto: "5", correcta: false },
          { texto: "7", correcta: true },
          { texto: "12", correcta: false },
        ],
        feedbackCorrecto: "✅ Correcto. 7 principios HACCP: análisis de peligros, PCC, límites críticos, monitoreo, acciones correctivas, verificación, documentación.",
        feedbackIncorrecto: "❌ Son 7 principios. Los 12 son los pasos de implementación del sistema, que incluyen los 7 principios.",
      },
      {
        tema: "HACCP y Control de Procesos",
        pregunta: "En un proceso de ahumado en frío de salmón, ¿por qué NO se considera un PCC para L. monocytogenes?",
        opciones: [
          { texto: "Porque el humo elimina completamente la bacteria", correcta: false },
          { texto: "Porque el proceso no alcanza temperaturas letales para el patógeno", correcta: true },
          { texto: "Porque L. monocytogenes no contamina el salmón crudo", correcta: false },
        ],
        feedbackCorrecto: "✅ Correcto. El ahumado en frío (<30°C) no es letal para L. monocytogenes. El control recae en BPM y monitoreo ambiental post-proceso.",
        feedbackIncorrecto: "❌ El ahumado en frío no elimina L. monocytogenes. No hay reducción logarítmica significativa a esas temperaturas.",
      },
      {
        tema: "HACCP y Control de Procesos",
        pregunta: "¿Qué diferencia fundamental existe entre HACCP y HARPC (FSMA)?",
        opciones: [
          { texto: "HARPC incluye análisis de peligros de suministro y radiológicos, y requiere PCQI certificado", correcta: true },
          { texto: "HARPC reemplaza completamente a HACCP en mercados de exportación", correcta: false },
          { texto: "Solo difieren en el nombre; los requisitos son equivalentes", correcta: false },
        ],
        feedbackCorrecto: "✅ Correcto. HARPC amplía el análisis de peligros, incluye amenazas de adulteración intencional y exige un PCQI para el plan de inocuidad.",
        feedbackIncorrecto: "❌ HARPC (21 CFR Part 117) amplía HACCP significativamente: peligros de suministro, radiológicos, y requiere PCQI certificado.",
      },
    ],

    3: [
      {
        tema: "Monitoreo Ambiental",
        pregunta: "En un programa de monitoreo ambiental para Listeria (PMA), ¿qué diferencia a un sitio Zona 1 de un sitio Zona 3?",
        opciones: [
          { texto: "Zona 1 es superficie de contacto directo con alimento; Zona 3 es área adyacente sin contacto", correcta: true },
          { texto: "Zona 1 es área de mayor riesgo por humedad; Zona 3 es área seca", correcta: false },
          { texto: "La diferencia es solo administrativa, no afecta la frecuencia de muestreo", correcta: false },
        ],
        feedbackCorrecto: "✅ Correcto. Zona 1: contacto directo (tablas, cintas). Zona 3: áreas adyacentes (pisos, paredes, desagües). El riesgo y frecuencia de muestreo difieren.",
        feedbackIncorrecto: "❌ Las zonas en PMA se definen por proximidad al alimento: Z1 contacto directo, Z2 entorno inmediato, Z3 áreas adyacentes, Z4 externo.",
      },
      {
        tema: "Monitoreo Ambiental",
        pregunta: "Un resultado positivo de Listeria spp. (no monocytogenes) en Zona 2, ¿qué acción corresponde primero?",
        opciones: [
          { texto: "Retiro inmediato del producto en proceso", correcta: false },
          { texto: "Intensificación del muestreo y limpieza profunda del área afectada", correcta: true },
          { texto: "Notificación obligatoria a la autoridad sanitaria", correcta: false },
        ],
        feedbackCorrecto: "✅ Correcto. Un positivo en Zona 2 es una señal de alerta: intensificar muestreo, investigar la fuente y aplicar limpieza reforzada antes de escalar.",
        feedbackIncorrecto: "❌ Un positivo de Listeria spp. en Z2 activa protocolo de investigación y limpieza reforzada. El retiro aplica ante L. monocytogenes en Z1.",
      },
      {
        tema: "Monitoreo Ambiental",
        pregunta: "¿Qué indica un índice ATP elevado en una superficie después del proceso de sanitización?",
        opciones: [
          { texto: "Alta carga de L. monocytogenes viable", correcta: false },
          { texto: "Presencia de materia orgánica residual que puede proteger microorganismos", correcta: true },
          { texto: "Falla específica del desinfectante utilizado", correcta: false },
        ],
        feedbackCorrecto: "✅ Correcto. ATP mide materia orgánica total, no patógenos específicos. Un ATP alto indica limpieza insuficiente que compromete la eficacia del desinfectante.",
        feedbackIncorrecto: "❌ ATP no es específico para L. monocytogenes. Indica carga orgánica residual — problema de limpieza, no necesariamente del desinfectante.",
      },
    ],

    4: [
      {
        tema: "Trazabilidad y Regulación",
        pregunta: "En FSMA 204, ¿qué es un CTE (Critical Tracking Event)?",
        opciones: [
          { texto: "Un punto crítico de control equivalente al PCC de HACCP", correcta: false },
          { texto: "Un evento en la cadena de suministro donde se debe capturar información de trazabilidad", correcta: true },
          { texto: "Un registro de temperatura crítica durante el transporte", correcta: false },
        ],
        feedbackCorrecto: "✅ Correcto. Los CTEs de FSMA 204 son: cosecha, enfriamiento inicial, primer receptor terrestre, transformación, creación y envío. Cada uno exige KDEs específicos.",
        feedbackIncorrecto: "❌ CTE es Critical Tracking Event: puntos definidos en la cadena donde se captura información de trazabilidad (KDEs). No es equivalente a un PCC.",
      },
      {
        tema: "Trazabilidad y Regulación",
        pregunta: "¿Cuál es el plazo que exige FSMA 204 para proveer registros de trazabilidad ante una solicitud de FDA?",
        opciones: [
          { texto: "72 horas", correcta: false },
          { texto: "24 horas", correcta: true },
          { texto: "48 horas", correcta: false },
        ],
        feedbackCorrecto: "✅ Correcto. FSMA 204 requiere que los registros de trazabilidad estén disponibles para FDA en 24 horas ante una solicitud de investigación.",
        feedbackIncorrecto: "❌ El plazo es 24 horas. Este requerimiento es uno de los más exigentes del reglamento y requiere sistemas digitales robustos.",
      },
      {
        tema: "Trazabilidad y Regulación",
        pregunta: "¿Qué es un TLC (Traceability Lot Code) según FSMA 204?",
        opciones: [
          { texto: "El código de lote interno del productor, sin requisitos de formato", correcta: false },
          { texto: "Un identificador único asignado a un alimento en la Lista de Trazabilidad en un CTE específico", correcta: true },
          { texto: "El número de registro sanitario del establecimiento", correcta: false },
        ],
        feedbackCorrecto: "✅ Correcto. El TLC es el código que vincula el alimento con sus KDEs en cada CTE. Debe ser único, asignable y transferible en la cadena.",
        feedbackIncorrecto: "❌ El TLC es el identificador que conecta el alimento con su información de trazabilidad en cada evento crítico. Tiene requisitos específicos de FSMA 204.",
      },
    ],

    5: [
      {
        tema: "Gestión y Normas",
        pregunta: "En BRC Global Standard Food Safety, ¿qué categoría de No Conformidad puede resultar en suspensión inmediata de la certificación?",
        opciones: [
          { texto: "Mayor (Major)", correcta: false },
          { texto: "Crítica (Critical)", correcta: true },
          { texto: "Menor (Minor)", correcta: false },
        ],
        feedbackCorrecto: "✅ Correcto. Una NC Crítica en BRC indica falla en un requisito fundamental de inocuidad y resulta en suspensión o retiro de la certificación.",
        feedbackIncorrecto: "❌ En BRC: Minor no afecta la certificación, Major puede reducir el grado, Critical suspende la certificación.",
      },
      {
        tema: "Gestión y Normas",
        pregunta: "¿Qué diferencia a BAP (Best Aquaculture Practices) de otras certificaciones de inocuidad como BRC?",
        opciones: [
          { texto: "BAP certifica solo el producto terminado, BRC certifica el proceso", correcta: false },
          { texto: "BAP incluye criterios de sostenibilidad ambiental y responsabilidad social además de inocuidad", correcta: true },
          { texto: "BAP es equivalente a BRC pero para mercado asiático", correcta: false },
        ],
        feedbackCorrecto: "✅ Correcto. BAP evalúa 4 pilares: inocuidad alimentaria, medioambiente, responsabilidad social y bienestar animal — único en la cadena de acuicultura.",
        feedbackIncorrecto: "❌ BAP es una certificación de cadena completa (4 estrellas) que integra inocuidad, sostenibilidad ambiental, trazabilidad y responsabilidad social.",
      },
      {
        tema: "Gestión y Normas",
        pregunta: "En un programa FSMA, ¿quién puede firmar el Food Safety Plan como responsable?",
        opciones: [
          { texto: "Cualquier empleado con experiencia en producción", correcta: false },
          { texto: "Solo el gerente general de la planta", correcta: false },
          { texto: "Un PCQI (Preventive Controls Qualified Individual)", correcta: true },
        ],
        feedbackCorrecto: "✅ Correcto. El PCQI es el único habilitado por FSMA para preparar, revisar y firmar el Food Safety Plan. Requiere capacitación acreditada.",
        feedbackIncorrecto: "❌ FSMA exige que el Food Safety Plan sea preparado o supervisado por un PCQI con capacitación reconocida por FDA.",
      },
    ],
  },
};

// ── Selector de banco según nivel ────────────────────────────
function getPreguntasQR(qrNum, nivel) {
  const banco = nivel === 'calidad' ? PREGUNTAS.calidad : PREGUNTAS.general;
  return banco[qrNum] || [];
}
