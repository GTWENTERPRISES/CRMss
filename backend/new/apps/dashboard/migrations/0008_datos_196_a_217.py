"""
Los cambios de DATOS de las migraciones 196-217 (keplerost/CRM_ISP).

El esquema (tablas, columnas, vistas, funciones) va en 0007 y en
esquema_fuente.py; acá van las sentencias que tocaban filas existentes:

- 204: la regla de alerta "Subida saturada" (semilla idempotente).
- 205: las alertas de red (ONT caída, potencia crítica) avisan a cualquier hora.
- 207: la regla de óptica pasa a ser "NAP degradándose".
- 208: los usuarios técnicos sin ficha de técnico la reciben (lo hace el
  disparador trg_ficha_tecnico al tocar la fila) y la ficha queda atada al usuario.
- 211: cada cuadrilla con el vehículo de la flota que coincide con su texto.

Durante `migrate` los disparadores están borrados (apps/dashboard/apps.py): se
instalan acá un momento para que el de la 208 corra, y se quitan al terminar;
el post_migrate los vuelve a crear como siempre.
"""
from django.db import migrations

SENTENCIAS = [(205,
  'UPDATE alerta_reglas\n'
  '   SET desde_hora = NULL,\n'
  '       hasta_hora = NULL,\n'
  '       actualizado_en = NOW()\n'
  " WHERE clave IN ('ont_caida', 'potencia_critica')\n"
  '   AND (desde_hora IS NOT NULL OR hasta_hora IS NOT NULL)'),
 (207,
  'UPDATE alerta_reglas\n'
  "   SET nombre      = 'NAP degradándose',\n"
  "       descripcion = 'El promedio de potencia de los clientes de una caja empeoró de golpe o de a poco. "
  'No es un cliente: es la fibra, un conector o el splitter que alimenta la caja. Se arregla antes de que se '
  "corte.',\n"
  '       umbral      = 2,\n'
  '       espera_min  = 0,\n'
  '       desde_hora  = NULL,\n'
  '       hasta_hora  = NULL,\n'
  '       actualizado_en = NOW()\n'
  " WHERE clave = 'degradacion'\n"
  "   AND nombre <> 'NAP degradándose'"),
 (208,
  'UPDATE usuarios_sistema\n'
  '   SET rol = rol\n'
  " WHERE rol IN ('tecnico', 'jefe_tecnico') AND tecnico_id IS NULL"),
 (208,
  'UPDATE tecnicos t\n'
  '   SET user_id = u.auth_id\n'
  '  FROM usuarios_sistema u\n'
  ' WHERE u.tecnico_id = t.id AND t.user_id IS NULL AND u.auth_id IS NOT NULL'),
 (211,
  'UPDATE cuadrillas c\n'
  '   SET vehiculo_id = (\n'
  '        SELECT v.id FROM vehiculos v\n'
  '         WHERE v.activo\n'
  '           AND (LOWER(BTRIM(v.nombre)) = LOWER(BTRIM(c.vehiculo))\n'
  "             OR UPPER(REPLACE(REPLACE(v.placa, '-', ''), ' ', ''))\n"
  "              = UPPER(REPLACE(REPLACE(BTRIM(c.vehiculo), '-', ''), ' ', '')))\n"
  '         ORDER BY v.creado_en\n'
  '         LIMIT 1)\n'
  ' WHERE c.vehiculo_id IS NULL\n'
  "   AND NULLIF(BTRIM(c.vehiculo), '') IS NOT NULL")]


def aplicar(apps, schema_editor):
    conexion = schema_editor.connection
    if conexion.vendor != 'sqlite':
        return
    from apps.dashboard import disparadores
    from apps.dashboard.plpgsql_motor import Contexto, motor
    from apps.dashboard.semillas import cargar

    cargar(conexion)  # la regla de la 204 (ON CONFLICT DO NOTHING)
    conexion.ensure_connection()
    crudo = conexion.connection
    m = motor()
    with conexion.cursor() as cursor:
        disparadores.crear(cursor)
        try:
            for _migracion, sql in SENTENCIAS:
                m.ejecutar_sql(sql, Contexto(m, crudo, 'migracion_datos'))
        finally:
            disparadores.borrar(cursor)


class Migration(migrations.Migration):
    dependencies = [
        ('dashboard', '0007_migraciones_196_a_217'),
        ('soporte', '0011_ruta_del_dia'),
        ('mikrotik', '0005_router_que_no_contesta'),
    ]

    operations = [migrations.RunPython(aplicar, migrations.RunPython.noop)]
