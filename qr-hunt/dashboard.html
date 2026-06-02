<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0" />
  <title>Mi Progreso – South Wind</title>
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link href="https://fonts.googleapis.com/css2?family=Archivo+Black&family=Archivo:wght@400;500;600&display=swap" rel="stylesheet" />
  <script src="https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2/dist/umd/supabase.min.js"></script>
  <style>
    :root {
      --bg: #0a1628;
      --surface: #111f38;
      --surface2: #1a2f50;
      --accent: #00c896;
      --accent2: #00a8ff;
      --warn: #ff6b35;
      --text: #f0f4ff;
      --text-muted: #7a90b8;
      --border: #1e3358;
      --radius: 16px;
    }

    * { box-sizing: border-box; margin: 0; padding: 0; }

    body {
      font-family: 'Archivo', sans-serif;
      background: var(--bg);
      color: var(--text);
      min-height: 100vh;
      padding: 24px 16px 60px;
    }

    body::before {
      content: '';
      position: fixed;
      inset: 0;
      background:
        radial-gradient(ellipse 60% 40% at 20% 20%, rgba(0,200,150,0.07) 0%, transparent 60%),
        radial-gradient(ellipse 50% 50% at 80% 80%, rgba(0,168,255,0.06) 0%, transparent 60%);
      pointer-events: none;
      z-index: 0;
    }

    .container {
      position: relative;
      z-index: 1;
      max-width: 480px;
      margin: 0 auto;
    }

    .top-bar {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 28px;
    }

    .greeting {
      font-size: 13px;
      color: var(--text-muted);
    }

    .player-name {
      font-family: 'Archivo Black', sans-serif;
      font-size: 18px;
      color: var(--text);
    }

    .logout-btn {
      background: none;
      border: 1px solid var(--border);
      border-radius: 8px;
      color: var(--text-muted);
      font-size: 12px;
      padding: 6px 12px;
      cursor: pointer;
    }

    /* Puntaje hero */
    .score-hero {
      background: linear-gradient(135deg, #0d2440, #112a4a);
      border: 1px solid var(--border);
      border-radius: 20px;
      padding: 28px 24px;
      text-align: center;
      margin-bottom: 16px;
      position: relative;
      overflow: hidden;
    }

    .score-hero::before {
      content: '';
      position: absolute;
      top: -40px; right: -40px;
      width: 160px; height: 160px;
      border-radius: 50%;
      background: radial-gradient(circle, rgba(0,200,150,0.12), transparent 70%);
    }

    .score-label {
      font-size: 12px;
      letter-spacing: 0.1em;
      text-transform: uppercase;
      color: var(--text-muted);
      margin-bottom: 6px;
    }

    .score-value {
      font-family: 'Archivo Black', sans-serif;
      font-size: 64px;
      line-height: 1;
      background: linear-gradient(90deg, var(--accent), var(--accent2));
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
      margin-bottom: 4px;
    }

    .score-sub {
      color: var(--text-muted);
      font-size: 13px;
    }

    /* Progreso QRs */
    .progress-bar-wrap {
      background: var(--surface2);
      border-radius: 100px;
      height: 8px;
      margin: 16px 0 8px;
      overflow: hidden;
    }

    .progress-bar-fill {
      height: 100%;
      border-radius: 100px;
      background: linear-gradient(90deg, var(--accent), var(--accent2));
      transition: width 0.6s ease;
    }

    .progress-text {
      font-size: 12px;
      color: var(--text-muted);
      text-align: center;
    }

    /* QR Grid */
    .section-title {
      font-size: 12px;
      font-weight: 600;
      letter-spacing: 0.1em;
      text-transform: uppercase;
      color: var(--text-muted);
      margin: 20px 0 12px;
    }

    .qr-grid {
      display: grid;
      grid-template-columns: repeat(5, 1fr);
      gap: 8px;
      margin-bottom: 20px;
    }

    .qr-slot {
      aspect-ratio: 1;
      border-radius: 12px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      font-size: 10px;
      font-weight: 600;
      gap: 4px;
      position: relative;
      transition: transform 0.15s;
    }

    .qr-slot.pending {
      background: var(--surface);
      border: 1.5px dashed var(--border);
      color: var(--text-muted);
    }

    .qr-slot.done {
      background: linear-gradient(135deg, rgba(0,200,150,0.15), rgba(0,168,255,0.1));
      border: 1.5px solid var(--accent);
      color: var(--accent);
    }

    .qr-slot .slot-icon { font-size: 20px; }
    .qr-slot .slot-pts { font-size: 9px; }

    /* Bonus card */
    .bonus-card {
      background: linear-gradient(135deg, rgba(255,107,53,0.08), rgba(255,107,53,0.03));
      border: 1px solid rgba(255,107,53,0.25);
      border-radius: var(--radius);
      padding: 16px 18px;
      display: flex;
      align-items: center;
      gap: 14px;
      margin-bottom: 16px;
    }

    .bonus-icon { font-size: 28px; }

    .bonus-text .bonus-title {
      font-weight: 600;
      font-size: 14px;
      margin-bottom: 2px;
    }

    .bonus-text .bonus-desc {
      font-size: 12px;
      color: var(--text-muted);
    }

    .bonus-pts {
      margin-left: auto;
      font-family: 'Archivo Black', sans-serif;
      font-size: 18px;
      color: var(--warn);
      white-space: nowrap;
    }

    /* Ranking btn */
    .btn-ranking {
      width: 100%;
      background: var(--surface);
      border: 1.5px solid var(--border);
      border-radius: 12px;
      color: var(--text);
      font-family: 'Archivo', sans-serif;
      font-size: 14px;
      font-weight: 600;
      padding: 14px;
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 8px;
      transition: border-color 0.2s;
      -webkit-tap-highlight-color: transparent;
    }
    .btn-ranking:active { opacity: 0.8; }

    .live-dot {
      width: 8px; height: 8px;
      border-radius: 50%;
      background: var(--accent);
      animation: blink 1.5s ease-in-out infinite;
    }
    @keyframes blink {
      0%, 100% { opacity: 1; }
      50% { opacity: 0.3; }
    }

    .fade-in {
      animation: fadeIn 0.4s ease forwards;
    }
    @keyframes fadeIn {
      from { opacity: 0; transform: translateY(10px); }
      to { opacity: 1; transform: translateY(0); }
    }
  </style>
</head>
<body>
  <div class="container fade-in">

    <div class="top-bar">
      <div>
        <div class="greeting">Hola 👋</div>
        <div class="player-name" id="playerName">Cargando...</div>
      </div>
      <button class="logout-btn" onclick="cerrarSesion()">Cambiar usuario</button>
    </div>

    <!-- Puntaje -->
    <div class="score-hero">
      <div class="score-label">Tu puntaje total</div>
      <div class="score-value" id="scoreValue">0</div>
      <div class="score-sub">puntos acumulados</div>
      <div class="progress-bar-wrap">
        <div class="progress-bar-fill" id="progressBar" style="width:0%"></div>
      </div>
      <div class="progress-text" id="progressText">0 de 5 QR completados</div>
    </div>

    <!-- QR slots -->
    <div class="section-title">Estaciones completadas</div>
    <div class="qr-grid" id="qrGrid">
      <!-- Se genera dinámicamente -->
    </div>

    <!-- Bonus -->
    <div class="bonus-card">
      <div class="bonus-icon">🏆</div>
      <div class="bonus-text">
        <div class="bonus-title">Bonus por completar todo</div>
        <div class="bonus-desc">Responde los 5 QR y gana puntos extra</div>
      </div>
      <div class="bonus-pts">+20 pts</div>
    </div>

    <!-- Ranking -->
    <button class="btn-ranking" onclick="window.location.href='ranking.html'">
      <span class="live-dot"></span>
      Ver ranking en vivo
    </button>

  </div>
  <script src="js/config.js"></script>
  <script src="js/rut-db.js"></script>
  <script>
    // Supabase inline init
    let supabase;

    async function initSupabase() {
      if (window.supabase && window.supabase.createClient) {
        supabase = window.supabase.createClient(CONFIG.supabase.url, CONFIG.supabase.anonKey);
      }
    }

    function getParticipante() {
      const raw = sessionStorage.getItem('sw_participante');
      try { return raw ? JSON.parse(raw) : null; } catch { return null; }
    }

    function cerrarSesion() {
      sessionStorage.removeItem('sw_participante');
      window.location.href = 'index.html';
    }

    async function cargarDatos() {
      const p = getParticipante();
      if (!p) {
        window.location.href = 'index.html';
        return;
      }

      document.getElementById('playerName').textContent = p.nombre;

      if (!supabase) return;

      try {
        const { data } = await supabase
          .from('qrhunt_participantes')
          .select('puntaje, qrs_completados')
          .eq('rut', p.rut)
          .single();

        if (!data) return;

        const puntaje = data.puntaje || 0;
        const completados = Array.isArray(data.qrs_completados) ? data.qrs_completados : [];

        // Animar puntaje
        animarNumero('scoreValue', 0, puntaje, 600);

        // Barra de progreso
        const pct = (completados.length / CONFIG.totalQrs) * 100;
        document.getElementById('progressBar').style.width = pct + '%';
        document.getElementById('progressText').textContent =
          `${completados.length} de ${CONFIG.totalQrs} QR completados`;

        // Grid QR
        renderQrGrid(completados);

      } catch (err) {
        console.error(err);
      }
    }

    function renderQrGrid(completados) {
      const grid = document.getElementById('qrGrid');
      const iconsDone = ['🎯', '🔬', '🧊', '🏠', '⭐'];
      const iconsPending = ['❓', '❓', '❓', '❓', '❓'];

      grid.innerHTML = Array.from({ length: CONFIG.totalQrs }, (_, i) => {
        const num = i + 1;
        const done = completados.includes(num);
        // Calcular pts de este QR si está hecho (guardado en tabla respuestas)
        return `
          <div class="qr-slot ${done ? 'done' : 'pending'}">
            <span class="slot-icon">${done ? iconsDone[i] : iconsPending[i]}</span>
            <span>QR ${num}</span>
            ${done ? '<span class="slot-pts">✓</span>' : ''}
          </div>
        `;
      }).join('');
    }

    function animarNumero(id, desde, hasta, duracion) {
      const el = document.getElementById(id);
      if (!el) return;
      const inicio = performance.now();
      function step(ahora) {
        const t = Math.min((ahora - inicio) / duracion, 1);
        const ease = 1 - Math.pow(1 - t, 3);
        el.textContent = Math.round(desde + (hasta - desde) * ease);
        if (t < 1) requestAnimationFrame(step);
      }
      requestAnimationFrame(step);
    }

    document.addEventListener('DOMContentLoaded', () => {
      initSupabase();
      cargarDatos();
    });
  </script>
</body>
</html>
