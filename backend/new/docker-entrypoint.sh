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
    exec gunicorn config.wsgi:application \
      --bind 0.0.0.0:8000 \
      --workers "${GUNICORN_WORKERS:-3}" \
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
