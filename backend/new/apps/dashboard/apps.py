"""
App de las tablas y vistas del dashboard.

En SQLite las vistas v_* no se crean por migración sino en cada `migrate`:

- antes de migrar se borran, porque SQLite valida las vistas cuando una
  migración reconstruye una tabla (y una vista que la nombra hace fallar el
  ALTER);
- después de migrar se crean de nuevo desde `vistas_generadas.py`.

Las funciones que las vistas necesitan (`sqlite_funciones.py`) se registran en
cada conexión nueva.
"""
import logging

from django.apps import AppConfig
from django.db.models.signals import post_migrate, pre_migrate

logger = logging.getLogger(__name__)


def borrar_vistas(using='default', **kwargs):
    from django.db import connections

    conexion = connections[using]
    if conexion.vendor != 'sqlite':
        return
    from . import disparadores

    with conexion.cursor() as cursor:
        # Los disparadores también: una migración de datos no tiene que
        # ejecutar las funciones del dashboard.
        disparadores.borrar(cursor)
        cursor.execute("SELECT name FROM sqlite_master WHERE type = 'view' AND name LIKE 'v\\_%' ESCAPE '\\'")
        for (nombre,) in cursor.fetchall():
            cursor.execute(f'DROP VIEW IF EXISTS "{nombre}"')


def crear_vistas(using='default', **kwargs):
    """Crea (o recrea) las vistas del dashboard. Devuelve {vista: error} de las que fallan."""
    from django.db import connections

    from . import vistas_generadas

    conexion = connections[using]
    if conexion.vendor != 'sqlite':
        return {}
    borrar_vistas(using)
    errores = {}
    with conexion.cursor() as cursor:
        for nombre in vistas_generadas.ORDEN:
            try:
                cursor.execute(f'CREATE VIEW "{nombre}" AS {vistas_generadas.VISTAS[nombre]}')
            except Exception as e:  # una vista rota no deja a las demás sin crear
                errores[nombre] = str(e)
        from . import disparadores
        errores.update(disparadores.crear(cursor))
    for nombre, error in errores.items():
        logger.warning('No se pudo crear %s: %s', nombre, error)
    return errores


class DashboardConfig(AppConfig):
    default_auto_field = 'django.db.models.BigAutoField'
    name = 'apps.dashboard'
    verbose_name = 'Tablas del dashboard'

    def ready(self):
        from .sqlite_funciones import conectar_senal

        conectar_senal()
        pre_migrate.connect(self._antes_de_migrar, sender=self, dispatch_uid='dashboard_borrar_vistas')
        post_migrate.connect(self._despues_de_migrar, sender=self, dispatch_uid='dashboard_crear_vistas')

    @staticmethod
    def _antes_de_migrar(sender, using='default', **kwargs):
        borrar_vistas(using)

    @staticmethod
    def _despues_de_migrar(sender, using='default', **kwargs):
        crear_vistas(using)
