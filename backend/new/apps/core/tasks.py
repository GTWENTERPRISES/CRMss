"""Tareas de Celery del núcleo: el respaldo nocturno (ver apps/core/respaldos.py)."""
from celery import shared_task

from .respaldos import respaldar


@shared_task(bind=True, max_retries=2, default_retry_delay=600)
def respaldar_base(self):
    """
    Respaldo de la base y los archivos, con su prueba de restauración.

    Si falla, reintenta dos veces cada diez minutos (un bloqueo largo de la base,
    un disco momentáneamente lleno) y después queda como fallida en Celery: no se
    traga el error, porque un respaldo que no se hizo tiene que verse.
    """
    try:
        informe = respaldar()
    except Exception as e:
        raise self.retry(exc=e)
    return {k: informe[k] for k in ('cuando', 'ok', 'borrados')}
