"""
Cada RPC que llaman el dashboard (web/src) y el middleware se ejecuta en el
intérprete de PL/pgSQL sobre SQLite sin romperse.

Con argumentos plausibles (ids de filas que existen cuando hay, fechas, montos)
una función puede contestar bien o rechazar por una regla de negocio —"No
existe esa orden de retiro", un CHECK, un NOT NULL de la propia función—; lo
que no puede es fallar por la traducción: "no such table", "no such column",
un error de sintaxis o una excepción de Python.
"""
import re
import uuid
from pathlib import Path

import pytest
from django.db import connection, transaction

from apps.dashboard import contexto
from apps.dashboard.plpgsql import ErrorPlpgsql
from apps.dashboard.plpgsql_motor import ejecutar_funcion, motor

from .factories import ClienteFactory, PlanVelocidadFactory

RAIZ = Path(__file__).resolve().parents[3]
LLAMADA = re.compile(r"""\.rpc\(\s*['"]([a-z_0-9]+)""")

# Errores que una función puede dar con datos de prueba: reglas de negocio y
# restricciones de la base. Todo lo demás es un problema de la traducción.
DE_NEGOCIO = {'P0001', 'P0002', '23514', '23505', '23503', '23502', '22023', '42501', '22P02'}


def rpcs_usadas():
    nombres = set()
    for carpeta in ('web/src', 'middleware/src'):
        for archivo in (RAIZ / carpeta).rglob('*'):
            if archivo.suffix in ('.js', '.jsx', '.mjs') and '.test.' not in archivo.name \
                    and 'node_modules' not in archivo.parts:
                nombres |= set(LLAMADA.findall(archivo.read_text(encoding='utf-8', errors='replace')))
    return sorted(nombres & set(motor().funciones))


def un_valor(nombre, tipo, ids):
    t = tipo.upper()
    if t.startswith('UUID'):
        candidato = next((v for clave, v in ids.items() if clave in nombre), str(uuid.uuid4()))
        return [candidato] if t.endswith('[]') else candidato
    if t.startswith('DATE'):
        return '2026-10-13'
    if t.startswith('TIMESTAMP'):
        return '2026-10-13T10:00:00Z'
    if t.startswith(('INT', 'BIGINT', 'SMALLINT')):
        return 1
    if t.startswith(('NUMERIC', 'DECIMAL', 'REAL', 'DOUBLE')):
        return 10
    if t.startswith('BOOL'):
        return False
    if t.startswith('JSON'):
        return {}
    if t.endswith('[]'):
        return []
    return 'prueba'


@pytest.mark.integration
@pytest.mark.parametrize('nombre', rpcs_usadas())
def test_la_rpc_corre_en_sqlite(nombre, user):
    cliente = ClienteFactory(plan=PlanVelocidadFactory())
    ids = {'client': str(cliente.id), 'cliente': str(cliente.id), 'plan': str(cliente.plan_id)}
    contexto.establecer_usuario(user)
    m = motor()
    args = {}
    for parametro, tipo, defecto, modo in m.firmas[nombre]:
        if modo == 'OUT' or (defecto is not None and not re.search(r'id\b|_id$', parametro)):
            continue
        args[parametro] = un_valor(parametro, m.tipo_de_columna(tipo), ids)

    connection.ensure_connection()
    try:
        with transaction.atomic():
            ejecutar_funcion(nombre, args, connection.connection)
            transaction.set_rollback(True)
    except ErrorPlpgsql as e:
        assert e.codigo in DE_NEGOCIO, f'{nombre}: [{e.codigo}] {e.mensaje} :: {(e.detalle or "")[:300]}'
    finally:
        contexto.establecer_usuario(None)
