-- ============================================================
-- SUPABASE SETUP — QR Hunt Día Mundial de la Inocuidad
-- Ejecutar en: Supabase Dashboard → SQL Editor → New query
-- ============================================================

-- Tabla principal de participantes
CREATE TABLE IF NOT EXISTS qrhunt_participantes (
  id          UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  rut         TEXT NOT NULL UNIQUE,
  nombre      TEXT NOT NULL,
  puntaje     INTEGER NOT NULL DEFAULT 0,
  qrs_completados INTEGER[] NOT NULL DEFAULT '{}',
  created_at  TIMESTAMPTZ DEFAULT now(),
  updated_at  TIMESTAMPTZ DEFAULT now()
);

-- Índice para ranking (ORDER BY puntaje DESC es la query más frecuente)
CREATE INDEX IF NOT EXISTS idx_participantes_puntaje
  ON qrhunt_participantes (puntaje DESC, updated_at ASC);

-- Tabla de respuestas detalladas (para análisis post-evento)
CREATE TABLE IF NOT EXISTS qrhunt_respuestas (
  id          UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  rut         TEXT NOT NULL REFERENCES qrhunt_participantes(rut),
  qr_numero   INTEGER NOT NULL CHECK (qr_numero BETWEEN 1 AND 5),
  correctas   INTEGER NOT NULL CHECK (correctas BETWEEN 0 AND 3),
  puntos      INTEGER NOT NULL DEFAULT 0,
  created_at  TIMESTAMPTZ DEFAULT now()
);

-- Índice para análisis por QR
CREATE INDEX IF NOT EXISTS idx_respuestas_qr
  ON respuestas (qr_numero, correctas);

-- ── RLS (Row Level Security) ───────────────────────────────

ALTER TABLE participantes ENABLE ROW LEVEL SECURITY;
ALTER TABLE respuestas ENABLE ROW LEVEL SECURITY;

-- participantes: lectura pública (para ranking)
CREATE POLICY "participantes_select_public"
  ON qrhunt_participantes FOR SELECT
  USING (true);

-- participantes: insertar si el RUT no existe aún
CREATE POLICY "participantes_insert_anon"
  ON qrhunt_participantes FOR INSERT
  WITH CHECK (true);

-- participantes: actualizar solo el propio registro (por RUT)
CREATE POLICY "participantes_update_own"
  ON qrhunt_participantes FOR UPDATE
  USING (true);  -- la lógica de RUT se maneja en el cliente; ajustar si se agrega auth

-- respuestas: insertar libre (anon)
CREATE POLICY "respuestas_insert_anon"
  ON respuestas FOR INSERT
  WITH CHECK (true);

-- respuestas: lectura restringida (solo via service_role para análisis)
-- Para acceso admin, usar service_role key desde backend o Supabase Studio

-- ── VISTA útil para análisis post-evento ──────────────────

CREATE OR REPLACE VIEW resumen_evento AS
SELECT
  p.nombre,
  p.puntaje,
  array_length(p.qrs_completados, 1) AS qrs_completados,
  p.qrs_completados,
  (
    SELECT COUNT(*) FROM respuestas r
    WHERE r.rut = p.rut AND r.correctas = 3
  ) AS qrs_perfectos,
  p.created_at AS registro,
  p.updated_at AS ultimo_intento
FROM qrhunt_participantes p
ORDER BY p.puntaje DESC, p.updated_at ASC;

-- ── Para resetear el evento (usar con cuidado) ─────────────
-- TRUNCATE participantes CASCADE;
