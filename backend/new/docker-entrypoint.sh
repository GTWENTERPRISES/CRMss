#!/bin/sh
# Arranque de los contenedores del backend.
#
#   web     migra, crea el usuario de servicio del middleware y levanta gunicorn
#   worker  Celery (respaldos y limpiezas)
#   beat    el reloj de Celery
#
# La base SQLite, los archivos subidos y los respaldos van en /data (un volumen):
# recrear el contenedor no borra nada.
set -e

mkdir -p "$(dirname "${SQLITE_PATH:-/data/db.sqlite3}")" "${MEDIA_ROOT_PATH:-/data/media}" "${RESPALDOS_DIR:-/data/respaldos}"

case "$1" in
  web)
    python manage.py migrate --noinput
    python manage.py sincronizar_personal
    python manage.py crear_administrador
    python manage.py collectstatic --noinput >/dev/null
    # Con hilos, no un pedido por proceso: lo de /api/v1/red/ espera al
    # middleware, y el middleware para contestar le pide sus datos a Django.
    # Con 3 procesos de a un pedido, tres esperas a la vez ocupaban todo y el
    # middleware no tenía a quién preguntarle: todo quedaba colgado hasta que
    # gunicorn mataba los procesos a los 120 s.
    exec gunicorn config.wsgi:application \
      --bind 0.0.0.0:8000 \
      --worker-class gthread \
      --workers "${GUNICORN_WORKERS:-3}" \
      --threads "${GUNICORN_THREADS:-8}" \
      --timeout "${GUNICORN_TIMEOUT:-120}" \
      --access-logfile -
    ;;
  worker)
    exec celery -A config worker --loglevel=info --concurrency=2 -Q celery,nms
    ;;
  beat)
    exec celery -A config beat --loglevel=info
    ;;
  *)
    exec "$@"
    ;;
esac
