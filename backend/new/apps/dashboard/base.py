"""
Base de los modelos de las tablas del dashboard.

Hace en Django lo que en Postgres hacía la base sola:

- `updated_at` se actualiza en cada guardado (los disparadores `set_updated_at`
  del esquema del dashboard);
- las columnas BIGSERIAL que no son la clave primaria (`tickets.numero`,
  `olts.numero`...) se numeran al insertar: el dashboard nunca las manda.
"""
from django.db import IntegrityError, models, transaction
from django.db.models import Max
from django.utils import timezone


def hoy():
    """CURRENT_DATE: la fecha de hoy en la zona del sistema."""
    return timezone.localdate()


class TablaDashboard(models.Model):
    # Columnas seriales que no son la PK: se numeran con el máximo + 1.
    SERIALES = ()
    # Columna → primer número, para secuencias que no empiezan en 1.
    SERIALES_DESDE = {}

    class Meta:
        abstract = True

    def save(self, *args, **kwargs):
        campos = {f.attname for f in self._meta.concrete_fields}
        nombres = campos | {f.name for f in self._meta.concrete_fields}
        if kwargs.get('update_fields') is not None:
            # El código anterior a las tablas del dashboard guarda con
            # `update_fields=[..., 'updated_at']` también en tablas que no la
            # tienen (onus, olt_historial...): se ignora lo que no existe.
            kwargs['update_fields'] = [c for c in kwargs['update_fields'] if c in nombres]
        if 'updated_at' in campos and not self._state.adding:
            self.updated_at = timezone.now()
            update_fields = kwargs.get('update_fields')
            if update_fields is not None and 'updated_at' not in update_fields:
                kwargs['update_fields'] = list(update_fields) + ['updated_at']

        pendientes = [c for c in self.SERIALES if getattr(self, c, None) is None]
        if not pendientes:
            return super().save(*args, **kwargs)

        # Dos altas a la vez pueden calcular el mismo número: la restricción
        # única lo detecta y se reintenta con el siguiente.
        for intento in range(5):
            for columna in pendientes:
                actual = type(self).objects.aggregate(m=Max(columna))['m'] or 0
                setattr(self, columna, max(actual + 1, self.SERIALES_DESDE.get(columna, 1)))
            try:
                with transaction.atomic():
                    return super().save(*args, **kwargs)
            except IntegrityError:
                for columna in pendientes:
                    setattr(self, columna, None)
                if intento == 4:
                    raise
