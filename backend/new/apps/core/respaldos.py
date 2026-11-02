"""
Respaldos de la base y de los archivos.

Cada respaldo deja, en RESPALDOS_DIR:

    db-AAAAMMDD-HHMMSS.sqlite3        la base SQLite, copiada con su API de respaldo
                                       (consistente aunque haya gente escribiendo:
                                       no es copiar el archivo)
    db-AAAAMMDD-HHMMSS.dump           o la base PostgreSQL (pg_dump, formato propio:
                                       se restaura con pg_restore)
    archivos-AAAAMMDD-HHMMSS.tar.gz   media/buckets (documentos, fotos, firmas)
    respaldo-AAAAMMDD-HHMMSS.json     qué se respaldó y la prueba de restauración

La prueba de restauración abre la copia —no la base viva— y comprueba que:
- SQLite la da por sana (`PRAGMA integrity_check`);
- tiene las tablas y la cantidad de filas de la original;
- los datos cifrados se leen con la FIELD_ENCRYPTION_KEY actual.

Un respaldo que no pasa esa prueba se marca como fallido y la tarea falla: un
respaldo que nunca se probó no es un respaldo.

La clave NO se guarda junto al respaldo —quien se lleve la carpeta se llevaría
también con qué leerla—. Se anota solo su huella, para saber con qué clave hay
que restaurar. La clave se guarda aparte (gestor de contraseñas, papel en la
caja fuerte).

Se conservan los últimos RESPALDOS_CONSERVAR. Los archivos que no siguen el
nombre de arriba (por ejemplo `db-antes-de-cifrar-...`) no se tocan nunca.
"""
import hashlib
import json
import logging
import os
import re
import sqlite3
import subprocess
import tarfile
from datetime import datetime
from pathlib import Path

from django.conf import settings
from django.db import connection

logger = logging.getLogger(__name__)

NOMBRE = re.compile(r'^(db|archivos|respaldo)-(\d{8}-\d{6})\.(sqlite3|dump|tar\.gz|json)$')

# Una columna cifrada por tabla alcanza para saber si la clave lee la copia.
MUESTRAS_CIFRADAS = 20


class RespaldoFallido(Exception):
    pass


def carpeta():
    destino = Path(getattr(settings, 'RESPALDOS_DIR', settings.BASE_DIR.parent / 'respaldos'))
    destino.mkdir(parents=True, exist_ok=True)
    return destino


def huella_de_la_clave():
    clave = getattr(settings, 'FIELD_ENCRYPTION_KEY', '') or ''
    return hashlib.sha256(clave.encode()).hexdigest()[:16] if clave else None


def _ruta_de_la_base():
    return Path(connection.settings_dict['NAME'])


# ── PostgreSQL ───────────────────────────────────────────────────────────────


def _entorno_pg():
    d = connection.settings_dict
    entorno = dict(os.environ, PGPASSWORD=str(d.get('PASSWORD') or ''))
    args = ['-h', str(d.get('HOST') or 'localhost'), '-p', str(d.get('PORT') or '5432'),
            '-U', str(d.get('USER') or 'postgres')]
    return entorno, args


def _correr(comando, entorno):
    try:
        r = subprocess.run(comando, env=entorno, capture_output=True, text=True, timeout=3600)
    except FileNotFoundError as e:
        raise RespaldoFallido(f'No está instalado {comando[0]} (paquete postgresql-client).') from e
    if r.returncode != 0:
        raise RespaldoFallido(f'{comando[0]} falló: {r.stderr.strip()[:300]}')
    return r.stdout


def _volcar_postgres(destino):
    entorno, args = _entorno_pg()
    _correr(['pg_dump', *args, '-Fc', '-f', str(destino), connection.settings_dict['NAME']], entorno)


def probar_restauracion_postgres(ruta):
    """
    El volcado se puede leer entero (pg_restore --list) y los datos cifrados de
    una tabla se descifran con la clave actual.
    """
    from .cifrado import columnas_cifradas
    from .fields import PREFIJO, _descifrar_token

    entorno, _ = _entorno_pg()
    indice = _correr(['pg_restore', '--list', str(ruta)], entorno)
    tablas = len(re.findall(r' TABLE DATA ', indice))
    if not tablas:
        raise RespaldoFallido('El volcado no tiene datos de ninguna tabla.')
    leidos = 0
    for tabla in ('clientes', *sorted(columnas_cifradas())):
        if f' TABLE DATA public {tabla} ' not in indice:
            continue
        datos = _correr(['pg_restore', '--data-only', f'--table={tabla}', '-f', '-', str(ruta)], entorno)
        for token in re.findall(re.escape(PREFIJO) + r'([A-Za-z0-9_=-]+)', datos)[:MUESTRAS_CIFRADAS]:
            if _descifrar_token(token) is None:
                raise RespaldoFallido(
                    f'{tabla} no se puede leer con la FIELD_ENCRYPTION_KEY actual: sin esa clave '
                    'el respaldo no sirve.')
            leidos += 1
        break
    return {'integridad': 'ok', 'tablas': tablas, 'filas': None, 'cifrados_leidos': leidos}


def _copiar_base(destino):
    """Copia consistente con la API de respaldo de SQLite (sirve con WAL y con gente escribiendo)."""
    origen = sqlite3.connect(str(_ruta_de_la_base()))
    copia = sqlite3.connect(str(destino))
    try:
        with copia:
            origen.backup(copia)
        # La base viva está en WAL; el respaldo, en un solo archivo.
        copia.execute('PRAGMA journal_mode=DELETE')
    finally:
        copia.close()
        origen.close()


def _copiar_archivos(destino):
    raiz = Path(settings.MEDIA_ROOT) / 'buckets'
    cuantos = 0
    with tarfile.open(destino, 'w:gz') as tar:
        if raiz.exists():
            for f in sorted(raiz.rglob('*')):
                if f.is_file():
                    tar.add(f, arcname=str(f.relative_to(raiz.parent)))
                    cuantos += 1
    return cuantos


def _abrir(ruta):
    """Solo lectura, con las funciones propias del sistema (las usan restricciones y vistas)."""
    from apps.dashboard.sqlite_funciones import registrar

    con = sqlite3.connect(f'file:{Path(ruta).as_posix()}?mode=ro', uri=True)
    registrar(con)
    return con


def _conteos(con):
    tablas = [t for (t,) in con.execute(
        "SELECT name FROM sqlite_master WHERE type='table' AND name NOT LIKE 'sqlite_%' ORDER BY name")]
    return {t: con.execute(f'SELECT COUNT(*) FROM "{t}"').fetchone()[0] for t in tablas}


def probar_restauracion(ruta, conteos_originales=None):
    """
    Abre la copia y verifica que sirve. Devuelve el detalle; lanza
    RespaldoFallido si algo no da.
    """
    from .cifrado import columnas_cifradas
    from .fields import PREFIJO, _descifrar_token

    con = _abrir(ruta)
    try:
        sana = con.execute('PRAGMA integrity_check').fetchone()[0]
        if sana != 'ok':
            raise RespaldoFallido(f'La copia está dañada: {sana}')

        conteos = _conteos(con)
        if conteos_originales is not None:
            faltan = sorted(set(conteos_originales) - set(conteos))
            if faltan:
                raise RespaldoFallido(f'A la copia le faltan tablas: {", ".join(faltan[:5])}')

        leidos = 0
        for tabla, columnas in sorted(columnas_cifradas().items()):
            if tabla not in conteos:
                continue
            existentes = {r[1] for r in con.execute(f'PRAGMA table_info("{tabla}")')}
            for columna in sorted(columnas & existentes):
                muestras = con.execute(
                    f'SELECT "{columna}" FROM "{tabla}" WHERE "{columna}" LIKE ? LIMIT {MUESTRAS_CIFRADAS}',
                    [PREFIJO + '%']).fetchall()
                for (valor,) in muestras:
                    if _descifrar_token(valor[len(PREFIJO):]) is None:
                        raise RespaldoFallido(
                            f'{tabla}.{columna} no se puede leer con la FIELD_ENCRYPTION_KEY actual: sin esa '
                            'clave el respaldo no sirve.')
                    leidos += 1
                if muestras:
                    break  # una columna con datos por tabla alcanza
        return {'integridad': sana, 'tablas': len(conteos), 'filas': sum(conteos.values()),
                'cifrados_leidos': leidos}
    finally:
        con.close()


def rotar(conservar=None):
    """Borra los respaldos más viejos; deja los últimos `conservar` (y nada que no sea nuestro)."""
    conservar = conservar or int(getattr(settings, 'RESPALDOS_CONSERVAR', 14))
    grupos = {}
    for f in carpeta().iterdir():
        m = NOMBRE.match(f.name)
        if m:
            grupos.setdefault(m.group(2), []).append(f)
    viejos = sorted(grupos)[:-conservar] if len(grupos) > conservar else []
    for marca in viejos:
        for f in grupos[marca]:
            f.unlink(missing_ok=True)
    return len(viejos)


def respaldar():
    """Hace el respaldo completo, lo prueba y rota los viejos. Devuelve el informe."""
    marca = datetime.now().strftime('%Y%m%d-%H%M%S')
    destino = carpeta()
    es_sqlite = connection.vendor == 'sqlite'
    base = destino / f'db-{marca}.{"sqlite3" if es_sqlite else "dump"}'
    archivos = destino / f'archivos-{marca}.tar.gz'
    informe_ruta = destino / f'respaldo-{marca}.json'

    informe = {'cuando': datetime.now().isoformat(timespec='seconds'), 'clave_huella': huella_de_la_clave()}
    try:
        if es_sqlite:
            _copiar_base(base)
            origen = _abrir(_ruta_de_la_base())
            try:
                originales = _conteos(origen)
            finally:
                origen.close()
        else:
            _volcar_postgres(base)
        informe['base'] = {'archivo': base.name, 'bytes': base.stat().st_size}
        informe['archivos'] = {'archivo': archivos.name, 'cantidad': _copiar_archivos(archivos),
                               'bytes': None}
        informe['archivos']['bytes'] = archivos.stat().st_size
        informe['prueba'] = probar_restauracion(base, originales) if es_sqlite else probar_restauracion_postgres(base)
        informe['ok'] = True
    except Exception as e:
        informe['ok'] = False
        informe['error'] = str(e)
        informe_ruta.write_text(json.dumps(informe, indent=2, ensure_ascii=False), encoding='utf-8')
        logger.error('Respaldo fallido: %s', e)
        raise RespaldoFallido(str(e)) from e

    informe['borrados'] = rotar()
    informe_ruta.write_text(json.dumps(informe, indent=2, ensure_ascii=False), encoding='utf-8')
    logger.info('Respaldo %s listo: %s tablas, %s archivos', marca, informe['prueba']['tablas'],
                informe['archivos']['cantidad'])
    return informe
