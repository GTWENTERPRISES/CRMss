"""
OLTs, tipos de ONT, perfiles de línea, ONUs y el tablero GPON.

Las columnas son las de las tablas del dashboard (apps/dashboard/columnas.py,
columnas.py). Acá quedan los nombres de los valores que usa el
código y los métodos de cada modelo.
"""
from django.db import models

from apps.dashboard import columnas


class OLT(columnas.ColumnasOLT):
    class Marca(models.TextChoices):
        HUAWEI = 'Huawei', 'Huawei'
        VSOL = 'VSOL', 'V-SOL'

    class Estado(models.TextChoices):
        ONLINE = 'online', 'Online'
        OFFLINE = 'offline', 'Offline'
        DESCONOCIDO = 'desconocido', 'Desconocido'

    class Meta(columnas.ColumnasOLT.Meta):
        db_table = 'olts'
        ordering = ['nombre']
        verbose_name = 'OLT'
        verbose_name_plural = 'OLTs'

    def __str__(self):
        return f'{self.nombre} ({self.ip_host})'


class TipoONT(columnas.ColumnasTipoONT):
    class Meta(columnas.ColumnasTipoONT.Meta):
        db_table = 'tipos_ont'
        ordering = ['marca', 'modelo']
        verbose_name = 'Tipo de ONT'
        verbose_name_plural = 'Tipos de ONT'

    def __str__(self):
        return f'{self.marca} {self.modelo}'


class LineProfile(columnas.ColumnasLineProfile):
    class Meta(columnas.ColumnasLineProfile.Meta):
        db_table = 'line_profiles'
        ordering = ['nombre']
        verbose_name = 'Line Profile'
        verbose_name_plural = 'Line Profiles'

    def __str__(self):
        return f'{self.nombre} (VLAN {self.vlan_id})'


class ONU(columnas.ColumnasONU):
    class Estado(models.TextChoices):
        ONLINE = 'online', 'Online'
        OFFLINE = 'offline', 'Offline'
        LOS = 'los', 'LOS (sin señal)'
        POWER_OFF = 'power_off', 'Sin energía'
        UNKNOWN = 'unknown', 'Desconocido'

    class Meta(columnas.ColumnasONU.Meta):
        db_table = 'onus'
        ordering = ['frame', 'slot', 'puerto', 'onu_index']
        verbose_name = 'ONU'
        verbose_name_plural = 'ONUs'

    def __str__(self):
        return f'{self.sn} - {self.nombre_cliente or "Sin cliente"}'

    @property
    def posicion(self):
        return f'{self.frame}/{self.slot}/{self.puerto}:{self.onu_index}'

    @property
    def potencia_optima(self):
        if self.rx_power_dbm is None:
            return None
        return -27 <= float(self.rx_power_dbm) <= -8


# ── Tablero GPON (apps/dashboard/esquema_fuente.py) ────────────────────────────────


class OltHistorial(columnas.ColumnasOltHistorial):
    """Cada cambio de la ficha de una OLT (lo escribe apps/olts/signals.py)."""

    class Meta(columnas.ColumnasOltHistorial.Meta):
        db_table = 'olt_historial'
        ordering = ['-created_at']

    def __str__(self):
        return f'{self.olt_id} {self.accion} {self.campo}'


class OntEsperando(columnas.ColumnasOntEsperando):
    """ONT conectada a la fibra que nadie autorizó todavía (último barrido)."""

    class Meta(columnas.ColumnasOntEsperando.Meta):
        db_table = 'onts_esperando'
        ordering = ['detectada']

    def __str__(self):
        return self.sn


class OltEscaneo(columnas.ColumnasOltEscaneo):
    """Cómo salió el último barrido de ONTs esperando de cada OLT."""

    class Meta(columnas.ColumnasOltEscaneo.Meta):
        db_table = 'olt_escaneos'

    def __str__(self):
        return f'{self.olt_id} @ {self.at}'
