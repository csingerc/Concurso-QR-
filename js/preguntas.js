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
        tema: "Alérgenos",
        pregunta: "¿Cuál de estos es un alérgeno de declaración obligatoria en la etiqueta?",
        opciones: [
          { texto: "Sodio", correcta: false },
          { texto: "Gluten", correcta: false },
          { texto: "Pescado", correcta: true },
        ],
        feedbackCorrecto: "✅ ¡Correcto! El pescado es alérgeno de declaración obligatoria. El sodio es un mineral, no un alérgeno. El gluten también lo es, pero South Wind no lo procesa.",
        feedbackIncorrecto: "❌ El pescado es alérgeno mayor de declaración obligatoria. El sodio no es alérgeno. El gluten sí lo es pero no está presente en nuestros productos.",
      },
      {
        tema: "Alérgenos",
        pregunta: "Un compañero trae maní en su bolso al trabajo. ¿Qué riesgo representa?",
        opciones: [
          { texto: "Ninguno si no lo come dentro de la planta", correcta: false },
          { texto: "Puede transferir trazas de alérgeno por contacto con manos o ropa", correcta: true },
          { texto: "Solo si trabaja en la línea de empaque", correcta: false },
        ],
        feedbackCorrecto: "✅ ¡Correcto! Los alérgenos se transfieren por contacto indirecto — manos que tocaron el alimento, ropa, superficies. Por eso está prohibido ingresar alimentos a planta.",
        feedbackIncorrecto: "❌ El riesgo existe aunque no se abra el envase. El contacto con manos o ropa puede transferir trazas al proceso.",
      },
      {
        tema: "Alérgenos",
        pregunta: "¿Por qué está prohibido ingresar alimentos a la planta?",
        opciones: [
          { texto: "Para evitar olores en el área de proceso", correcta: false },
          { texto: "Para evitar que alérgenos externos contaminen el producto", correcta: true },
          { texto: "Es solo una norma de orden, no tiene impacto en inocuidad", correcta: false },
        ],
        feedbackCorrecto: "✅ ¡Correcto! El único alérgeno en planta es el pescado. Cualquier alimento externo puede introducir alérgenos que contaminen el producto y pongan en riesgo a consumidores sensibles.",
        feedbackIncorrecto: "❌ La prohibición de ingreso de alimentos es una medida de control de alérgenos, no solo de orden. Protege al consumidor final.",
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
        pregunta: "¿Qué patógeno tiene mayor tasa de mortalidad en casos confirmados de enfermedad?",
        opciones: [
          { texto: "Son similares, ambas rondan el 1%", correcta: false },
          { texto: "Listeria monocytogenes", correcta: true },
          { texto: "Salmonella spp.", correcta: false },
        ],
        feedbackCorrecto: "✅ Correcto. La tasa de mortalidad de listeriosis invasiva es ~20–30%, versus ~0.4% para salmonelosis. L. monocytogenes afecta principalmente a inmunodeprimidos, embarazadas y adultos mayores. (CDC, EFSA)",
        feedbackIncorrecto: "❌ L. monocytogenes tiene una tasa de mortalidad ~20–30% en casos invasivos, muy superior al ~0.4% de Salmonella. Es uno de los patógenos alimentarios más letales.",
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
        tema: "FDA Fish & Fishery Products Hazards Guide",
        pregunta: "Según el FDA Blue Book, ¿cuál es el principal peligro biológico asociado al salmón ahumado en frío que debe abordarse en el plan HACCP?",
        opciones: [
          { texto: "Staphylococcus aureus por manipulación post-proceso", correcta: false },
          { texto: "Clostridium botulinum tipo E por ausencia de killing step y condiciones anaeróbicas", correcta: true },
          { texto: "Salmonella spp. por contaminación cruzada en empaque", correcta: false },
        ],
        feedbackCorrecto: "✅ Correcto. C. botulinum tipo E es psicrotrófico y anaeróbico — crece en salmón ahumado en frío envasado al vacío incluso bajo refrigeración. El Blue Book establece controles por water phase salt o combinación tiempo/temperatura.",
        feedbackIncorrecto: "❌ C. botulinum tipo E es el hazard principal para smoked fish RTE según el Blue Book. Es psicrotrófico y prolifera en vacío sin señales organolépticas.",
      },
      {
        tema: "FDA Fish & Fishery Products Hazards Guide",
        pregunta: "El FDA Blue Book establece que el control de C. botulinum en salmón ahumado en frío puede lograrse mediante water phase salt. ¿Cuál es el nivel mínimo efectivo?",
        opciones: [
          { texto: "1.5% WPS", correcta: false },
          { texto: "3.5% WPS", correcta: true },
          { texto: "5.0% WPS", correcta: false },
        ],
        feedbackCorrecto: "✅ Correcto. ≥3.5% de water phase salt inhibe el crecimiento de C. botulinum tipo E. Por debajo, se requiere control combinado de temperatura y tiempo de vida útil reducido.",
        feedbackIncorrecto: "❌ El nivel mínimo efectivo es 3.5% WPS según el Blue Book. Por debajo de ese umbral, el control solo por sal no es suficiente.",
      },
      {
        tema: "FDA Fish & Fishery Products Hazards Guide",
        pregunta: "¿Qué condición hace al salmón ahumado en frío envasado al vacío especialmente susceptible a C. botulinum frente a otros patógenos?",
        opciones: [
          { texto: "El vacío elimina competidores aeróbicos, favoreciendo crecimiento anaeróbico sin señales organolépticas de deterioro", correcta: true },
          { texto: "El proceso de ahumado activa las esporas que estaban latentes", correcta: false },
          { texto: "El vacío incrementa la actividad de agua disponible para el patógeno", correcta: false },
        ],
        feedbackCorrecto: "✅ Correcto. El vacío suprime flora aeróbica deteriorante — el producto puede volverse peligroso sin cambiar olor ni apariencia. Es el hazard característico del smoked fish RTE. (FDA Blue Book, 4ª ed.)",
        feedbackIncorrecto: "❌ El vacío elimina competidores aeróbicos. C. botulinum puede producir toxina sin que el producto muestre signos visibles de deterioro.",
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
        tema: "Gestión de Alérgenos",
        pregunta: "¿Qué diferencia a una 'contaminación cruzada por alérgenos' de una 'presencia no declarada'?",
        opciones: [
          { texto: "Son sinónimos legales en el marco regulatorio", correcta: false },
          { texto: "La contaminación cruzada es involuntaria durante proceso; la presencia no declarada incluye también errores de formulación o etiquetado", correcta: true },
          { texto: "Solo difieren en la cantidad de alérgeno presente", correcta: false },
        ],
        feedbackCorrecto: "✅ Correcto. La contaminación cruzada ocurre durante manufactura. La presencia no declarada es más amplia: incluye errores de formulación, etiquetado incorrecto o sustitución de ingredientes. Ambas generan obligación de retiro.",
        feedbackIncorrecto: "❌ No son sinónimos. La presencia no declarada abarca contaminación cruzada más errores de formulación y etiquetado — cualquier situación donde un alérgeno está presente sin declaración.",
      },
      {
        tema: "Gestión de Alérgenos",
        pregunta: "Según el Reglamento Europeo 1169/2011, ¿cuántos alérgenos son de declaración obligatoria?",
        opciones: [
          { texto: "9 (igual que los Big 9 de FDA)", correcta: false },
          { texto: "14", correcta: true },
          { texto: "8", correcta: false },
        ],
        feedbackCorrecto: "✅ Correcto. La UE exige declaración de 14 alérgenos, incluyendo moluscos y sulfitos que FDA no incluye en su lista de Big 9. Relevante para exportaciones a Europa.",
        feedbackIncorrecto: "❌ Son 14 según la UE (Reglamento 1169/2011), versus 9 de FDA. La diferencia incluye moluscos, sulfitos y altramuces que no están en la lista americana.",
      },
      {
        tema: "Gestión de Alérgenos",
        pregunta: "¿Por qué es crítico el etiquetado correcto de alérgenos en salmón RTE aunque sea el único alérgeno del proceso?",
        opciones: [
          { texto: "Solo es relevante si hay otros alérgenos en la misma línea", correcta: false },
          { texto: "Porque el pescado es alérgeno de declaración obligatoria y su omisión puede causar reacción grave o fatal", correcta: true },
          { texto: "Es un requisito administrativo sin impacto real en la salud", correcta: false },
        ],
        feedbackCorrecto: "✅ Correcto. El pescado figura entre los 14 alérgenos de declaración obligatoria (UE) y los Big 9 de FDA. Una reacción anafiláctica puede ser fatal. El etiquetado correcto es un requisito legal y de inocuidad.",
        feedbackIncorrecto: "❌ El pescado es alérgeno mayor de declaración obligatoria. Su omisión en etiqueta puede causar anafilaxia en consumidores sensibles.",
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
        pregunta: "¿Qué producto(s) se definen como alto riesgo según BRC en el contexto de South Wind?",
        opciones: [
          { texto: "Salmón ahumado en caliente", correcta: true },
          { texto: "Salmón ahumado en caliente y en frío", correcta: false },
          { texto: "Salmón ahumado en caliente, ahumado en frío y carpaccio", correcta: false },
        ],
        feedbackCorrecto: "✅ Correcto. El ahumado en caliente tiene killing step — la carga microbiana competidora queda muy reducida post-proceso, dejando al producto altamente susceptible a recontaminación por L. monocytogenes. Los otros productos no tienen killing step, por lo que la flora residual actúa como barrera competidora parcial. BRC categoriza el área post-killing step como zona de alto riesgo.",
        feedbackIncorrecto: "❌ Solo el ahumado en caliente es alto riesgo BRC. El killing step elimina la flora competidora, exponiendo el producto a recontaminación sin barrera microbiana. Los productos sin killing step conservan flora que compite con L. monocytogenes.",
      },
    ],
  },
};

// ── Selector de banco según nivel ────────────────────────────
function getPreguntasQR(qrNum, nivel) {
  const banco = nivel === 'calidad' ? PREGUNTAS.calidad : PREGUNTAS.general;
  return banco[qrNum] || [];
}
