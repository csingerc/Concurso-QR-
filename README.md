# QR Hunt – Día Mundial de la Inocuidad
## South Wind · 4 de junio 2025

---

## Archivos del proyecto

```
qr-hunt/
├── index.html          ← Entrada: login por RUT
├── dashboard.html      ← Progreso personal del participante
├── preguntas.html      ← Estación QR (se carga con ?qr=1 a ?qr=5)
├── ranking.html        ← Ranking en tiempo real (completo)
├── js/
│   ├── config.js       ← ⚠️ Aquí van las credenciales de Supabase
│   ├── rut-db.js       ← Base RUT→Nombre (generada con convert_rut_csv.py)
│   ├── preguntas.js    ← Banco de preguntas (5 QR × 3 preguntas)
│   └── app.js          ← Lógica de login, estadísticas, mini-ranking
├── convert_rut_csv.py  ← Script para generar rut-db.js desde CSV
└── supabase_setup.sql  ← DDL de tablas
```

---

## Paso 1 – Crear tablas en Supabase

Ejecutar `supabase_setup.sql` en el SQL Editor de tu proyecto Supabase.

---

## Paso 2 – Cargar lista de RUT

```bash
python3 convert_rut_csv.py empleados.csv > js/rut-db.js
```

El CSV debe tener columnas `RUT` y `NOMBRE` (separador `,` o `;`).  
El script normaliza automáticamente (quita puntos, conserva guión).

---

## Paso 3 – Configurar credenciales

Editar `js/config.js`:

```js
const CONFIG = {
  supabase: {
    url: 'https://TU-PROJECT-ID.supabase.co',
    anonKey: 'TU-ANON-KEY',
  },
  ...
};
```

Obtener ambos valores desde: Supabase Dashboard → Project Settings → API

---

## Paso 4 – Deploy en Cloudflare Pages

1. Subir carpeta `qr-hunt/` a un repositorio GitHub (puede ser privado)
2. Cloudflare Pages → Create project → Connect to Git → seleccionar repo
3. Build settings:
   - **Framework preset**: None
   - **Build command**: (vacío)
   - **Build output directory**: `/` (raíz)
4. Deploy → obtener URL (ej: `qr-hunt.pages.dev`)

---

## Paso 5 – Generar QR para cada estación

Usar cualquier generador de QR (qr-code-generator.com, etc.):

| QR | URL |
|----|-----|
| QR 1 | `https://tu-dominio.pages.dev/preguntas.html?qr=1` |
| QR 2 | `https://tu-dominio.pages.dev/preguntas.html?qr=2` |
| QR 3 | `https://tu-dominio.pages.dev/preguntas.html?qr=3` |
| QR 4 | `https://tu-dominio.pages.dev/preguntas.html?qr=4` |
| QR 5 | `https://tu-dominio.pages.dev/preguntas.html?qr=5` |

Imprimir en hoja A5, plastificar, ubicar en planta.

---

## Paso 6 – Pantalla de ranking (opcional)

Para proyectar en pantalla grande durante el evento:

```
https://tu-dominio.pages.dev/ranking.html
```

Se auto-refresca cada 15 segundos.

---

## Flujo del participante

```
Escanea QR de estación
        ↓
preguntas.html?qr=N
        ↓
¿Tiene sesión? → NO → index.html (login por RUT)
        ↓ SÍ
Responde 3 preguntas
        ↓
Puntaje calculado y guardado en Supabase
        ↓
Resultado + acceso a dashboard y ranking
```

---

## Sistema de puntos

| Correctas | Puntos |
|-----------|--------|
| 1 de 3    | 10 pts |
| 2 de 3    | 25 pts (+5 bonus) |
| 3 de 3    | 45 pts (+10 bonus) |
| Completar los 5 QR | +20 pts bonus |
| **Máximo posible** | **245 pts** |

---

## Supabase RLS

Las tablas usan RLS habilitado. La política permite:
- INSERT/UPDATE en `participantes`: cualquier anon (controlado por RUT)
- SELECT en `participantes`: público (para el ranking)
- INSERT en `respuestas`: cualquier anon
- SELECT en `respuestas`: solo admin (datos internos)
