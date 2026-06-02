// ============================================================
// BANCO DE PREGUNTAS — 5 QR × 3 preguntas
// ============================================================

const PREGUNTAS = {

  1: [
    {
      tema: "Higiene Personal",
      pregunta: "¿Cuántos segundos mínimo debes lavarte las manos para eliminar bacterias?",
      opciones: [
        { texto: "5 segundos, si uso bastante jabón", correcta: false },
        { texto: "20 segundos, frotando bien todas las partes", correcta: true },
        { texto: "60 segundos siempre", correcta: false },
      ],
      feedbackCorrecto: "✅ ¡Correcto! 20 segundos frotando palmas, dorso, entre dedos y muñecas. Es el tiempo mínimo recomendado por la OMS.",
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
      feedbackIncorrecto: "❌ Las manos se lavan en múltiples momentos: al entrar, después del baño, al tocar superficies no sanitarias, y al cambiar de tarea.",
    },
    {
      tema: "Higiene Personal",
      pregunta: "Un guante roto, ¿qué riesgo representa para el producto?",
      opciones: [
        { texto: "Ninguno, igual cubre la mano", correcta: false },
        { texto: "Puede contaminar el producto igual que una mano descubierta", correcta: true },
        { texto: "Solo es problema si hay una herida visible", correcta: false },
      ],
      feedbackCorrecto: "✅ ¡Correcto! Un guante roto deja pasar microorganismos y restos de piel directamente al producto.",
      feedbackIncorrecto: "❌ Un guante roto pierde su función de barrera. Debe cambiarse inmediatamente.",
    },
  ],

  2: [
    {
      tema: "Temperatura y Cadena de Frío",
      pregunta: "¿Por encima de qué temperatura empieza a multiplicarse la Listeria monocytogenes de forma peligrosa?",
      opciones: [
        { texto: "Sobre 10°C", correcta: false },
        { texto: "Sobre 4°C", correcta: true },
        { texto: "Solo sobre 20°C", correcta: false },
      ],
      feedbackCorrecto: "✅ ¡Correcto! Por eso el salmón RTE debe mantenerse bajo 4°C. La Listeria es inusual: puede crecer incluso cerca de 0°C, aunque más lento.",
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
      feedbackCorrecto: "✅ ¡Correcto! La Listeria es psicrotrófica: sobrevive y crece en frío. Es el peligro principal en salmón RTE.",
      feedbackIncorrecto: "❌ La Listeria es una de las pocas bacterias que puede crecer en el refrigerador. Por eso el control de temperatura no es suficiente solo.",
    },
    {
      tema: "Temperatura y Cadena de Frío",
      pregunta: "Si un producto sale de la cadena de frío durante más de 2 horas a temperatura ambiente, ¿qué haces?",
      opciones: [
        { texto: "Lo vuelvo a enfriar rápido y listo", correcta: false },
        { texto: "Lo consumo antes de que empeore", correcta: false },
        { texto: "Aviso a mi supervisor para evaluar el producto", correcta: true },
      ],
      feedbackCorrecto: "✅ ¡Correcto! El daño microbiológico ya ocurrió. Volver a enfriar no elimina las bacterias que crecieron.",
      feedbackIncorrecto: "❌ Nunca tomes esa decisión solo. Un producto fuera de cadena de frío debe ser evaluado por calidad antes de cualquier acción.",
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
      feedbackCorrecto: "✅ ¡Correcto! La contaminación cruzada ocurre cuando bacterias viajan desde una fuente contaminada a un alimento seguro.",
      feedbackIncorrecto: "❌ La contaminación cruzada es la transferencia de microorganismos entre superficies, utensilios, manos o alimentos.",
    },
    {
      tema: "Contaminación Cruzada",
      pregunta: "Una bandeja negra que estuvo en el piso, ¿puede usarse para apoyar producto terminado?",
      opciones: [
        { texto: "Sí, si la limpio con un paño", correcta: false },
        { texto: "No, puede transferir suciedad y bacterias al producto", correcta: true },
        { texto: "Solo si el producto está en bolsa cerrada", correcta: false },
      ],
      feedbackCorrecto: "✅ ¡Correcto! El piso es una fuente de contaminación. Las bandejas que contactaron el piso van directo a lavado, nunca a producción.",
      feedbackIncorrecto: "❌ El piso concentra bacterias. Una bandeja que lo tocó debe higienizarse completamente antes de volver a usarse.",
    },
    {
      tema: "Contaminación Cruzada",
      pregunta: "Un operario toca su mascarilla con la mano enguantada y luego sigue trabajando el producto. ¿Qué ocurrió?",
      opciones: [
        { texto: "Nada, la mascarilla es parte del uniforme limpio", correcta: false },
        { texto: "Posible contaminación cruzada: debía cambiar guantes y lavarse", correcta: true },
        { texto: "Solo es riesgo si está resfriado", correcta: false },
      ],
      feedbackCorrecto: "✅ ¡Correcto! La mascarilla acumula microorganismos. Tocarla y seguir es un vector directo de contaminación.",
      feedbackIncorrecto: "❌ Tocar la mascarilla contamina los guantes. El protocolo es: retira el guante, lava manos, vuelve a enguantar.",
    },
  ],

  4: [
    {
      tema: "Inocuidad en Casa",
      pregunta: "¿Cómo guardas el salmón listo para comer (ahumado, envasado) en el refrigerador de tu casa?",
      opciones: [
        { texto: "En cualquier repisa, igual está sellado", correcta: false },
        { texto: "Bien tapado, separado de carnes y pescados crudos", correcta: true },
        { texto: "Lo dejo en la parte más baja junto a la carne cruda", correcta: false },
      ],
      feedbackCorrecto: "✅ ¡Correcto! El salmón RTE ya está listo para comer. Debe protegerse de posibles contaminantes, especialmente crudos.",
      feedbackIncorrecto: "❌ El salmón ahumado RTE no se cocina antes de comer, por eso debe alejarse de carnes crudas que pueden contener bacterias.",
    },
    {
      tema: "Inocuidad en Casa",
      pregunta: "¿Puedes descongelar salmón dejándolo en el mesón de la cocina toda la noche?",
      opciones: [
        { texto: "Sí, si la cocina está fresca", correcta: false },
        { texto: "No, debe descongelarse en el refrigerador o bajo agua fría corriente", correcta: true },
        { texto: "Solo es problema en verano", correcta: false },
      ],
      feedbackCorrecto: "✅ ¡Correcto! A temperatura ambiente, la zona de peligro (4–60°C) favorece el crecimiento bacteriano. Siempre descongelar en frío.",
      feedbackIncorrecto: "❌ El mesón a temperatura ambiente permite que las bacterias se multipliquen en la superficie del pescado mientras el centro sigue congelado.",
    },
    {
      tema: "Inocuidad en Casa",
      pregunta: "Llegas del trabajo y vas a preparar comida para tu familia. ¿Qué es lo primero que debes hacer?",
      opciones: [
        { texto: "Ver si el aceite está a la temperatura correcta", correcta: false },
        { texto: "Lavarse bien las manos con agua y jabón", correcta: true },
        { texto: "Revisar el celular por si hay mensajes urgentes", correcta: false },
      ],
      feedbackCorrecto: "✅ ¡Correcto! Las manos son el principal vector de contaminación en el hogar. Lo que aprendiste aquí protege a tu familia.",
      feedbackIncorrecto: "❌ Las manos recogen bacterias durante el día. Lavarse es siempre el primer paso antes de manipular alimentos.",
    },
  ],

  5: [
    {
      tema: "Cultura de Inocuidad",
      pregunta: "Ves algo que podría contaminar el producto, pero no es tu área de trabajo. ¿Qué haces?",
      opciones: [
        { texto: "No me meto, no es mi zona ni mi responsabilidad", correcta: false },
        { texto: "Lo ignoro si nadie más lo vio", correcta: false },
        { texto: "Aviso de todas formas, la inocuidad es de todos", correcta: true },
      ],
      feedbackCorrecto: "✅ ¡Correcto! La inocuidad no tiene fronteras de área. Reportar a tiempo puede evitar un problema grave.",
      feedbackIncorrecto: "❌ Un problema no reportado puede convertirse en un recall o en un consumidor enfermo. Siempre avisa, independiente del área.",
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
      feedbackIncorrecto: "❌ El objetivo del reporte no es la penalización: es proteger al consumidor final. Siempre vale la pena avisar.",
    },
    {
      tema: "Cultura de Inocuidad",
      pregunta: "La inocuidad alimentaria, ¿de quién es responsabilidad?",
      opciones: [
        { texto: "Solo del área de Calidad", correcta: false },
        { texto: "Del supervisor de turno", correcta: false },
        { texto: "De todos en la planta, sin excepción", correcta: true },
      ],
      feedbackCorrecto: "✅ ¡Correcto! Desde el operario de ingreso hasta gerencia: todos somos parte de la cadena de inocuidad.",
      feedbackIncorrecto: "❌ Calidad lidera, pero no puede estar en todos lados. La inocuidad real depende de cada persona en cada momento.",
    },
  ],

};
