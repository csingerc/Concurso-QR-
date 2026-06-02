#!/usr/bin/env python3
"""
convert_rut_csv.py
Convierte el CSV de RUT-nombre al formato JS que necesita rut-db.js

Uso:
    python3 convert_rut_csv.py empleados.csv > js/rut-db.js

Formato esperado del CSV (sin importar separador , o ;):
    RUT,NOMBRE
    12345678-9,Camilo Singer
    11.111.111-1,María González

El script normaliza el RUT: quita puntos, minúsculas, conserva guión.
"""

import csv
import sys
import re

def normalizar_rut(rut: str) -> str:
    return re.sub(r'\.', '', rut.strip()).lower()

def nombre_display(nombre: str) -> str:
    # Title case, conserva nombres compuestos
    return ' '.join(w.capitalize() for w in nombre.strip().split())

def main():
    if len(sys.argv) < 2:
        print("Uso: python3 convert_rut_csv.py empleados.csv > js/rut-db.js")
        sys.exit(1)

    filepath = sys.argv[1]
    entries = {}

    with open(filepath, newline='', encoding='utf-8-sig') as f:
        # Auto-detectar separador
        sample = f.read(1024)
        f.seek(0)
        sep = ';' if sample.count(';') > sample.count(',') else ','
        reader = csv.DictReader(f, delimiter=sep)

        for row in reader:
            # Buscar columna RUT (case insensitive)
            rut_col = next((k for k in row if 'rut' in k.lower()), None)
            nom_col = next((k for k in row if any(x in k.lower() for x in ['nombre', 'name'])), None)

            if not rut_col or not nom_col:
                print(f"// ERROR: No se encontraron columnas RUT/NOMBRE. Columnas disponibles: {list(row.keys())}", file=sys.stderr)
                sys.exit(1)

            rut = normalizar_rut(row[rut_col])
            nombre = nombre_display(row[nom_col])

            if rut and nombre:
                entries[rut] = nombre

    # Generar JS
    lines = [
        "// ============================================================",
        "// BASE DE DATOS RUT → NOMBRE (generado automáticamente)",
        f"// Total empleados: {len(entries)}",
        "// ============================================================",
        "",
        "const RUT_DB = {",
    ]

    for rut, nombre in sorted(entries.items()):
        escaped = nombre.replace("'", "\\'")
        lines.append(f"  \"{rut}\": \"{escaped}\",")

    lines += [
        "};",
        "",
        "function normalizarRut(rut) {",
        "  return rut.toLowerCase().replace(/\\./g, '').replace(/\\s/g, '').trim();",
        "}",
        "",
        "function buscarNombrePorRut(rut) {",
        "  const normalizado = normalizarRut(rut);",
        "  return RUT_DB[normalizado] || null;",
        "}",
    ]

    print('\n'.join(lines))
    print(f"\n// Generado: {len(entries)} empleados", file=sys.stderr)

if __name__ == '__main__':
    main()
