"""
Datos de referencia del esquema del dashboard (configuraciones de una fila, plantillas,
cuentas, motivos de baja, reglas, esquema de comisiones...).

Cada semilla se aplica si su tabla está vacía (instalación nueva) o si la
sentencia ya es idempotente por sí misma (ON CONFLICT DO NOTHING, WHERE NOT
EXISTS): así se puede volver a correr sin duplicar ni pisar nada.

    python manage.py cargar_semillas
"""
import logging
import re

logger = logging.getLogger(__name__)

IDEMPOTENTE = re.compile(r'ON\s+CONFLICT\b.*?\bDO\s+NOTHING|WHERE\s+NOT\s+EXISTS', re.I | re.S)


def cargar(conexion):
    """Devuelve {'aplicadas': n, 'omitidas': n, 'fallas': {tabla: motivo}}."""
    from . import funciones_generadas as g
    from .plpgsql import ErrorPlpgsql, _Retornar, compilar
    from .plpgsql_motor import Contexto, motor

    from . import disparadores

    conexion.ensure_connection()
    crudo = conexion.connection
    # Los ON CONFLICT de las semillas necesitan los índices únicos, y en una base
    # nueva esta migración corre antes del post_migrate que los crea.
    disparadores.crear_indices(crudo)
    m = motor()
    vacias, aplicadas, omitidas, fallas = {}, 0, 0, {}
    for _migracion, tabla, sql in g.SEMILLAS:
        es_bloque = sql.startswith('DO ')
        if not es_bloque and re.search(r'\bRETURNING\b.*\bINTO\b', sql, re.I | re.S):
            continue          # sondas de verificación de una migración, no datos
        if tabla not in vacias:
            try:
                vacias[tabla] = crudo.execute(f'SELECT COUNT(*) FROM "{tabla}"').fetchone()[0] == 0
            except Exception:
                vacias[tabla] = False
        if not vacias[tabla] and not IDEMPOTENTE.search(sql):
            omitidas += 1
            continue
        ctx = Contexto(m, crudo, 'semillas')
        try:
            crudo.execute('SAVEPOINT semilla')
            if es_bloque:
                cuerpo = re.match(r'DO\s+\$bloque\$(.*)\$bloque\$$', sql, re.S).group(1)
                try:
                    m.bloque(compilar(cuerpo), ctx)
                except _Retornar:
                    pass      # RETURN de un DO: la guarda "ya está cargado"
            else:
                m.ejecutar_sql(sql, ctx)
            crudo.execute('RELEASE semilla')
            aplicadas += 1
        except ErrorPlpgsql as e:
            crudo.execute('ROLLBACK TO semilla')
            crudo.execute('RELEASE semilla')
            fallas[tabla] = e.mensaje[:200]
            logger.warning('Semilla de %s no aplicada: %s', tabla, e.mensaje[:200])
    return {'aplicadas': aplicadas, 'omitidas': omitidas, 'fallas': fallas}
