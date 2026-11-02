"""
manage.py generar_vistas

Traduce las vistas v_* del esquema del dashboard a SQLite (apps/dashboard/vistas_sqlite.py)
y escribe apps/dashboard/vistas_generadas.py con:

    ORDEN     las vistas en el orden en que hay que crearlas (dependencias primero)
    VISTAS    nombre → SQL de SQLite
    COLUMNAS  nombre → {columna: clase} (bool, json, uuid, date, ts, int, num...)
              para que las APIs devuelvan los tipos como PostgREST
    FALLAS    nombre → motivo, de las que no se pudieron traducir

y apps/dashboard/politicas_generadas.py con la seguridad por fila (RLS) de
apps/dashboard/esquema_fuente.py para la API de tablas (ver apps/dashboard/politicas_rls.py). Las
vistas security_invoker salen ya con la RLS de sus tablas adentro.

Con --verificar, además crea las vistas sobre una copia de la base y las
consulta, para detectar las que traducen pero no corren.
"""
import os
import re
import shutil
import sqlite3
import tempfile
from pathlib import Path
from pprint import pformat

from django.conf import settings
from django.core.management.base import BaseCommand

from apps.dashboard.esquema import leer_esquema
from apps.dashboard.politicas_rls import Politicas, generar as generar_politicas
from apps.dashboard.sqlite_funciones import registrar
from apps.dashboard.vistas_sqlite import EQUIVALENTES, Traductor


def orden_por_dependencias(vistas):
    orden, hechos = [], set()

    def visitar(v, pila=()):
        if v in hechos or v in pila:
            return
        for d in re.findall(r'\b(v_[a-z0-9_]+)\b', vistas[v]):
            if d in vistas and d != v:
                visitar(d, pila + (v,))
        hechos.add(v)
        orden.append(v)

    for v in vistas:
        visitar(v)
    return orden


class Command(BaseCommand):
    help = 'Traduce las vistas del dashboard a SQLite y escribe vistas_generadas.py.'

    def add_arguments(self, parser):
        parser.add_argument('--verificar', action='store_true',
                            help='Crea las vistas sobre una copia de la base y las consulta.')

    def handle(self, *args, **opciones):
        esquema = leer_esquema()
        traductor = Traductor(esquema, EQUIVALENTES)
        orden = orden_por_dependencias(esquema.vistas)
        vistas, columnas, fallas = {}, {}, {}
        politicas = Politicas(esquema)

        for v in orden:
            # security_invoker: la vista ve lo que ve quien la consulta.
            envolver = politicas.envolver if v in esquema.vistas_invoker else None
            try:
                sql, cols = traductor.traducir(esquema.vistas[v], envolver=envolver)
            except Exception as e:
                fallas[v] = f'{type(e).__name__}: {str(e).splitlines()[0][:200]}'
                continue
            traductor.registrar_vista(v, traductor.tipos_para_esquema(cols))
            vistas[v] = sql
            columnas[v] = {c: k for c, k in cols.items() if k}

        if opciones['verificar']:
            self.verificar(vistas, fallas)

        destino = Path(__file__).resolve().parents[2] / 'vistas_generadas.py'
        orden_final = [v for v in orden if v in vistas]
        texto = (
            '"""\n'
            'Las vistas del dashboard traducidas a SQLite.\n\n'
            'GENERADO por `manage.py generar_vistas`: no se edita a mano. Se crean en cada\n'
            '`migrate` (apps/dashboard/apps.py) en el orden de ORDEN.\n'
            '"""\n\n'
            f'ORDEN = {pformat(orden_final, width=110)}\n\n'
            f'VISTAS = {pformat(vistas, width=110)}\n\n'
            f'COLUMNAS = {pformat(columnas, width=110)}\n\n'
            f'FALLAS = {pformat(fallas, width=110)}\n'
        )
        destino.write_text(texto, encoding='utf-8')
        self.stdout.write(self.style.SUCCESS(
            f'{len(vistas)} vistas traducidas, {len(fallas)} con fallas -> {destino.name}'))
        self.escribir_funciones(esquema, destino.parent / 'funciones_generadas.py')
        self.escribir_politicas(esquema, traductor, destino.parent / 'politicas_generadas.py')
        for v, motivo in fallas.items():
            self.stdout.write(self.style.WARNING(f'  {v}: {motivo}'))

    def escribir_funciones(self, esquema, destino):
        """Las funciones y disparadores del esquema del dashboard, para el intérprete de PL/pgSQL."""
        funciones = {
            n: (f.argumentos, f.retorna, f.lenguaje, f.cuerpo)
            for n, f in sorted(esquema.funciones.items()) if f.lenguaje in ('plpgsql', 'sql') and f.cuerpo.strip()
        }
        tablas = {t: {c: col.tipo for c, col in tabla.columnas.items()} for t, tabla in esquema.tablas.items()}
        disparadores = sorted(
            (t.tabla, t.nombre, t.momento, t.funcion, t.condicion)
            for t in esquema.triggers.values() if t.funcion in funciones
        )
        indices = {n: v for n, v in sorted(esquema.indices_unicos.items())}
        # Datos de referencia que cargaban las migraciones (INSERT ... VALUES):
        # se aplican sólo a tablas vacías (migración dashboard 0003).
        semillas = [(m, t, sql) for m, t, sql in esquema.semillas
                    if t in tablas and re.search(r'[Vv][Aa][Ll][Uu][Ee][Ss]', sql)]
        # Lo que Postgres completaba solo en un INSERT: DEFAULT y secuencias.
        defaults = {}
        for t, tabla in esquema.tablas.items():
            d = {}
            for c, col in tabla.columnas.items():
                serial = col.identidad or col.tipo.split('(')[0] in ('BIGSERIAL', 'SERIAL', 'SMALLSERIAL') \
                    or 'nextval' in (col.default or '').lower()
                if serial:
                    d[c] = 'SERIAL'
                elif col.default:
                    d[c] = col.default
                elif col.pk and col.tipo.upper().startswith('UUID'):
                    d[c] = 'gen_random_uuid()'
            if d:
                defaults[t] = d
        texto = (
            '"""\n'
            'Funciones y disparadores del esquema del dashboard, para el intérprete de PL/pgSQL.\n\n'
            'GENERADO por `manage.py generar_vistas`: no se edita a mano.\n'
            '"""\n\n'
            f'FUNCIONES = {pformat(funciones, width=110)}\n\n'
            f'TABLAS = {pformat(tablas, width=110)}\n\n'
            f'ENUMS = {pformat(dict(esquema.enums), width=110)}\n\n'
            f'DISPARADORES = {pformat(disparadores, width=110)}\n\n'
            f'DEFAULTS = {pformat(defaults, width=110)}\n\n'
            f'INDICES_UNICOS = {pformat(indices, width=110)}\n\n'
            f'SEMILLAS = {pformat(semillas, width=110)}\n'
        )
        destino.write_text(texto, encoding='utf-8')
        self.stdout.write(self.style.SUCCESS(
            f'{len(funciones)} funciones y {len(disparadores)} disparadores -> {destino.name}'))

    def escribir_politicas(self, esquema, traductor, destino):
        condiciones, definidoras, ocultas, fallas = generar_politicas(esquema, traductor)
        texto = (
            '"""\n'
            'La seguridad por fila (RLS) del esquema del dashboard, traducida a SQLite.\n\n'
            'GENERADO por `manage.py generar_vistas`: no se edita a mano. La aplica\n'
            'apps/core/rls.py en la API de tablas.\n\n'
            'CONDICIONES   tabla → {acción: condición SQLite sobre FROM "tabla"}; None no\n'
            '              restringe, \'0\' niega (no hay política que lo permita).\n'
            'DEFINIDORAS   funciones SECURITY DEFINER: adentro no se aplica RLS.\n'
            'OCULTAS       columnas que el personal no lee (REVOKE SELECT (col)).\n'
            'FALLAS        políticas que no se pudieron traducir (quedan negadas).\n'
            '"""\n\n'
            f'CONDICIONES = {pformat(condiciones, width=110)}\n\n'
            f'DEFINIDORAS = {pformat(definidoras, width=110)}\n\n'
            f'OCULTAS = {pformat(ocultas, width=110)}\n\n'
            f'FALLAS = {pformat(fallas, width=110)}\n'
        )
        destino.write_text(texto, encoding='utf-8')
        self.stdout.write(self.style.SUCCESS(
            f'{len(condiciones)} tablas con RLS, {len(fallas)} políticas sin traducir -> {destino.name}'))
        for clave, motivo in fallas.items():
            self.stdout.write(self.style.WARNING(f'  {clave}: {motivo}'))

    def verificar(self, vistas, fallas):
        base = settings.DATABASES['default']['NAME']
        copia = os.path.join(tempfile.gettempdir(), 'verificar_vistas.sqlite3')
        shutil.copy(base, copia)
        con = sqlite3.connect(copia)
        registrar(con)
        for (nombre,) in con.execute("SELECT name FROM sqlite_master WHERE type='view'").fetchall():
            con.execute(f'DROP VIEW "{nombre}"')
        for v in list(vistas):
            try:
                con.execute(f'CREATE VIEW "{v}" AS {vistas[v]}')
                con.execute(f'SELECT * FROM "{v}" LIMIT 50').fetchall()
            except Exception as e:
                fallas[v] = f'no corre: {e}'
                del vistas[v]
                con.execute(f'DROP VIEW IF EXISTS "{v}"')
        con.close()
