// ============================================================
// APP.JS — lógica principal
// Supabase SDK cargado síncronamente en el <head>
// ============================================================

let sbClient;

function initSupabase() {
  // SDK cargado síncronamente — disponible directo
  if (window.supabase && window.supabase.createClient) {
    sbClient = window.supabase.createClient(CONFIG.supabase.url, CONFIG.supabase.anonKey);
    return true;
  }
  console.error('Supabase SDK no disponible');
  return false;
}

// ── ESTADO LOCAL ──────────────────────────────────────────
function getParticipante() {
  const raw = sessionStorage.getItem('sw_participante');
  if (!raw) return null;
  try { return JSON.parse(raw); } catch { return null; }
}

function setParticipante(p) {
  sessionStorage.setItem('sw_participante', JSON.stringify(p));
}

// ── LOGIN ─────────────────────────────────────────────────
function buscarRut() {
  const input = document.getElementById('rutInput');
  const rut = input.value.trim();
  if (!rut) return;

  const nombre = buscarNombrePorRut(rut);

  if (!nombre) {
    mostrarError('RUT no encontrado. Verifica que esté escrito con guión (ej: 12345678-9) y sin puntos.');
    return;
  }

  ocultarError();
  document.getElementById('nombreConfirm').textContent = nombre;
  document.getElementById('rutForm').style.display = 'none';
  const cb = document.getElementById('confirmBlock');
  cb.style.display = 'flex';

  window._rutPendiente = normalizarRut(rut);
  window._nombrePendiente = nombre;
}

async function confirmarParticipante() {
  const rut = window._rutPendiente;
  const nombre = window._nombrePendiente;
  if (!rut || !nombre) return;

  const btn = document.querySelector('.btn-confirm');
  btn.textContent = '...';
  btn.disabled = true;

  try {
    const { data, error } = await sbClient
      .from('qrhunt_participantes')
      .upsert(
        { rut, nombre, updated_at: new Date().toISOString() },
        { onConflict: 'rut', ignoreDuplicates: false }
      )
      .select()
      .single();

    if (error) throw error;

    setParticipante({ rut, nombre, id: data.id });
    const params = new URLSearchParams(window.location.search);
    const returnUrl = params.get('returnUrl');
    window.location.href = returnUrl ? decodeURIComponent(returnUrl) : 'dashboard.html';

  } catch (err) {
    console.error(err);
    mostrarError('Error al conectar con el servidor. Intenta de nuevo.');
    btn.textContent = '¡Sí, soy yo! →';
    btn.disabled = false;
  }
}

function resetLogin() {
  document.getElementById('rutForm').style.display = 'block';
  document.getElementById('confirmBlock').style.display = 'none';
  document.getElementById('rutInput').value = '';
  ocultarError();
  window._rutPendiente = null;
  window._nombrePendiente = null;
}

function mostrarError(msg) {
  const el = document.getElementById('errorMsg');
  if (!el) return;
  el.textContent = msg;
  el.style.display = 'block';
}

function ocultarError() {
  const el = document.getElementById('errorMsg');
  if (el) el.style.display = 'none';
}

// ── INIT ──────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  initSupabase();

  const input = document.getElementById('rutInput');
  if (input) {
    input.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') buscarRut();
    });
  }

  // Si ya está logueado, mostrar acceso directo
  const p = getParticipante();
  if (p) {
    const loginCard = document.getElementById('loginCard');
    if (loginCard) {
      loginCard.innerHTML = `
        <div class="card-label">Ya estás participando</div>
        <div class="name-display">
          <div class="name-label">Jugando como</div>
          <div class="name-value">${p.nombre}</div>
        </div>
        <button class="btn-primary" style="margin-top:16px" onclick="window.location.href='dashboard.html'">
          Continuar →
        </button>
      `;
    }
  }

  cargarEstadisticasGlobales();
  cargarMiniRanking();
  setInterval(cargarMiniRanking, CONFIG.rankingRefreshMs);
});

// ── ESTADÍSTICAS GLOBALES ────────────────────────────────
async function cargarEstadisticasGlobales() {
  if (!sbClient) return;
  try {
    const { data } = await sbClient
      .from('qrhunt_participantes')
      .select('puntaje, qrs_completados');

    if (!data || data.length === 0) return;

    document.getElementById('statParticipants').textContent = data.length;

    const totalResp = data.reduce((sum, p) => {
      const arr = Array.isArray(p.qrs_completados) ? p.qrs_completados : [];
      return sum + arr.length;
    }, 0);
    document.getElementById('statResponses').textContent = totalResp;

    const maxPts = Math.max(...data.map(p => p.puntaje || 0));
    document.getElementById('statMaxPts').textContent = maxPts;

  } catch (err) {
    console.error('Stats error:', err);
  }
}

// ── MINI RANKING ─────────────────────────────────────────
async function cargarMiniRanking() {
  if (!sbClient) return;
  const el = document.getElementById('miniRanking');
  if (!el) return;

  try {
    const { data } = await sbClient
      .from('qrhunt_participantes')
      .select('nombre, puntaje, qrs_completados')
      .order('puntaje', { ascending: false })
      .limit(5);

    if (!data || data.length === 0) {
      el.innerHTML = `<div style="text-align:center; padding:12px; color:var(--text-muted); font-size:13px;">Sé el primero en participar</div>`;
      return;
    }

    const posEmojis = ['🥇', '🥈', '🥉'];
    const posClasses = ['gold', 'silver', 'bronze'];

    el.innerHTML = data.map((p, i) => {
      const qrs = Array.isArray(p.qrs_completados) ? p.qrs_completados.length : 0;
      const posLabel = i < 3 ? posEmojis[i] : `${i + 1}°`;
      const posClass = i < 3 ? posClasses[i] : '';
      return `
        <div class="ranking-row">
          <div class="rank-pos ${posClass}">${posLabel}</div>
          <div>
            <div class="rank-name">${p.nombre}</div>
            <div class="rank-qrs">${qrs}/${CONFIG.totalQrs} QR completados</div>
          </div>
          <div class="rank-pts">${p.puntaje || 0} pts</div>
        </div>
      `;
    }).join('');

  } catch (err) {
    console.error('Ranking error:', err);
  }
}
