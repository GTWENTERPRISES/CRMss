"""
La seguridad por fila (RLS) del esquema del dashboard, traducida a SQLite.

GENERADO por `manage.py generar_vistas`: no se edita a mano. La aplica
apps/core/rls.py en la API de tablas.

CONDICIONES   tabla → {acción: condición SQLite sobre FROM "tabla"}; None no
              restringe, '0' niega (no hay política que lo permita).
DEFINIDORAS   funciones SECURITY DEFINER: adentro no se aplica RLS.
OCULTAS       columnas que el personal no lee (REVOKE SELECT (col)).
FALLAS        políticas que no se pudieron traducir (quedan negadas).
"""

CONDICIONES = {'alerta_destinos': {'delete': "((SELECT COALESCE((SELECT PG_JSON_TIENE(usuarios_sistema.permisos, '*') OR "
                               "PG_JSON_TIENE(usuarios_sistema.permisos, 'ajustes.editar') OR "
                               "PG_JSON_TIENE(usuarios_sistema.permisos, 'nms.ver') AS _col_0 FROM "
                               'usuarios_sistema AS usuarios_sistema WHERE usuarios_sistema.auth_id = '
                               'AUTH_UID() AND usuarios_sistema.activo LIMIT 1), TRUE) AS _col_0))',
                     'insert': "((SELECT COALESCE((SELECT PG_JSON_TIENE(usuarios_sistema.permisos, '*') OR "
                               "PG_JSON_TIENE(usuarios_sistema.permisos, 'ajustes.editar') OR "
                               "PG_JSON_TIENE(usuarios_sistema.permisos, 'nms.ver') AS _col_0 FROM "
                               'usuarios_sistema AS usuarios_sistema WHERE usuarios_sistema.auth_id = '
                               'AUTH_UID() AND usuarios_sistema.activo LIMIT 1), TRUE) AS _col_0))',
                     'select': "((SELECT COALESCE((SELECT PG_JSON_TIENE(usuarios_sistema.permisos, '*') OR "
                               "PG_JSON_TIENE(usuarios_sistema.permisos, 'ajustes.editar') OR "
                               "PG_JSON_TIENE(usuarios_sistema.permisos, 'nms.ver') AS _col_0 FROM "
                               'usuarios_sistema AS usuarios_sistema WHERE usuarios_sistema.auth_id = '
                               'AUTH_UID() AND usuarios_sistema.activo LIMIT 1), TRUE) AS _col_0)) OR '
                               "((SELECT COALESCE((SELECT PG_JSON_TIENE(usuarios_sistema.permisos, '*') OR "
                               "PG_JSON_TIENE(usuarios_sistema.permisos, 'ajustes.editar') OR "
                               "PG_JSON_TIENE(usuarios_sistema.permisos, 'nms.ver') AS _col_0 FROM "
                               'usuarios_sistema AS usuarios_sistema WHERE usuarios_sistema.auth_id = '
                               'AUTH_UID() AND usuarios_sistema.activo LIMIT 1), TRUE) AS _col_0))',
                     'update': "((SELECT COALESCE((SELECT PG_JSON_TIENE(usuarios_sistema.permisos, '*') OR "
                               "PG_JSON_TIENE(usuarios_sistema.permisos, 'ajustes.editar') OR "
                               "PG_JSON_TIENE(usuarios_sistema.permisos, 'nms.ver') AS _col_0 FROM "
                               'usuarios_sistema AS usuarios_sistema WHERE usuarios_sistema.auth_id = '
                               'AUTH_UID() AND usuarios_sistema.activo LIMIT 1), TRUE) AS _col_0))',
                     'update_check': '((SELECT COALESCE((SELECT PG_JSON_TIENE(usuarios_sistema.permisos, '
                                     "'*') OR PG_JSON_TIENE(usuarios_sistema.permisos, 'ajustes.editar') OR "
                                     "PG_JSON_TIENE(usuarios_sistema.permisos, 'nms.ver') AS _col_0 FROM "
                                     'usuarios_sistema AS usuarios_sistema WHERE usuarios_sistema.auth_id = '
                                     'AUTH_UID() AND usuarios_sistema.activo LIMIT 1), TRUE) AS _col_0))'},
 'alerta_envios': {'delete': '0',
                   'insert': '0',
                   'select': "((SELECT COALESCE((SELECT PG_JSON_TIENE(usuarios_sistema.permisos, '*') OR "
                             "PG_JSON_TIENE(usuarios_sistema.permisos, 'ajustes.editar') OR "
                             "PG_JSON_TIENE(usuarios_sistema.permisos, 'nms.ver') AS _col_0 FROM "
                             'usuarios_sistema AS usuarios_sistema WHERE usuarios_sistema.auth_id = '
                             'AUTH_UID() AND usuarios_sistema.activo LIMIT 1), TRUE) AS _col_0))',
                   'update': '0',
                   'update_check': '0'},
 'alerta_eventos': {'delete': '0',
                    'insert': '0',
                    'select': "((SELECT COALESCE((SELECT PG_JSON_TIENE(usuarios_sistema.permisos, '*') OR "
                              "PG_JSON_TIENE(usuarios_sistema.permisos, 'ajustes.editar') OR "
                              "PG_JSON_TIENE(usuarios_sistema.permisos, 'nms.ver') AS _col_0 FROM "
                              'usuarios_sistema AS usuarios_sistema WHERE usuarios_sistema.auth_id = '
                              'AUTH_UID() AND usuarios_sistema.activo LIMIT 1), TRUE) AS _col_0))',
                    'update': '0',
                    'update_check': '0'},
 'alerta_reglas': {'delete': "((SELECT COALESCE((SELECT PG_JSON_TIENE(usuarios_sistema.permisos, '*') OR "
                             "PG_JSON_TIENE(usuarios_sistema.permisos, 'ajustes.editar') OR "
                             "PG_JSON_TIENE(usuarios_sistema.permisos, 'nms.ver') AS _col_0 FROM "
                             'usuarios_sistema AS usuarios_sistema WHERE usuarios_sistema.auth_id = '
                             'AUTH_UID() AND usuarios_sistema.activo LIMIT 1), TRUE) AS _col_0))',
                   'insert': "((SELECT COALESCE((SELECT PG_JSON_TIENE(usuarios_sistema.permisos, '*') OR "
                             "PG_JSON_TIENE(usuarios_sistema.permisos, 'ajustes.editar') OR "
                             "PG_JSON_TIENE(usuarios_sistema.permisos, 'nms.ver') AS _col_0 FROM "
                             'usuarios_sistema AS usuarios_sistema WHERE usuarios_sistema.auth_id = '
                             'AUTH_UID() AND usuarios_sistema.activo LIMIT 1), TRUE) AS _col_0))',
                   'select': None,
                   'update': "((SELECT COALESCE((SELECT PG_JSON_TIENE(usuarios_sistema.permisos, '*') OR "
                             "PG_JSON_TIENE(usuarios_sistema.permisos, 'ajustes.editar') OR "
                             "PG_JSON_TIENE(usuarios_sistema.permisos, 'nms.ver') AS _col_0 FROM "
                             'usuarios_sistema AS usuarios_sistema WHERE usuarios_sistema.auth_id = '
                             'AUTH_UID() AND usuarios_sistema.activo LIMIT 1), TRUE) AS _col_0))',
                   'update_check': "((SELECT COALESCE((SELECT PG_JSON_TIENE(usuarios_sistema.permisos, '*') "
                                   "OR PG_JSON_TIENE(usuarios_sistema.permisos, 'ajustes.editar') OR "
                                   "PG_JSON_TIENE(usuarios_sistema.permisos, 'nms.ver') AS _col_0 FROM "
                                   'usuarios_sistema AS usuarios_sistema WHERE usuarios_sistema.auth_id = '
                                   'AUTH_UID() AND usuarios_sistema.activo LIMIT 1), TRUE) AS _col_0))'},
 'almacenes': {'delete': None, 'insert': None, 'select': None, 'update': None, 'update_check': None},
 'api_llamadas': {'delete': '0', 'insert': '0', 'select': '0', 'update': '0', 'update_check': '0'},
 'api_llaves': {'delete': '0', 'insert': '0', 'select': '0', 'update': '0', 'update_check': '0'},
 'articulos': {'delete': None, 'insert': None, 'select': None, 'update': None, 'update_check': None},
 'audit_logs': {'delete': '0', 'insert': '0', 'select': None, 'update': '0', 'update_check': '0'},
 'auditoria_sistema': {'delete': '0', 'insert': '0', 'select': None, 'update': '0', 'update_check': '0'},
 'autorizacion_presets': {'delete': None,
                          'insert': None,
                          'select': None,
                          'update': None,
                          'update_check': None},
 'avisos_pendientes': {'delete': None, 'insert': None, 'select': None, 'update': None, 'update_check': None},
 'campo_llamadas': {'delete': '0',
                    'insert': '0',
                    'select': '(campo_llamadas.tecnico_id = (SELECT usuarios_sistema.tecnico_id AS '
                              'tecnico_id FROM usuarios_sistema AS usuarios_sistema WHERE '
                              'usuarios_sistema.auth_id = AUTH_UID() AND usuarios_sistema.activo LIMIT 1) OR '
                              '(SELECT (SELECT EXISTS(SELECT 1 AS "1" FROM usuarios_sistema AS '
                              'usuarios_sistema WHERE usuarios_sistema.auth_id = AUTH_UID() AND '
                              "usuarios_sistema.activo AND usuarios_sistema.rol IN ('super_admin', 'admin', "
                              '\'jefe_tecnico\')) AS _col_0) OR EXISTS(SELECT 1 AS "1" FROM usuarios_sistema '
                              'AS usuarios_sistema WHERE usuarios_sistema.auth_id = AUTH_UID() AND '
                              "usuarios_sistema.activo AND (PG_JSON_TIENE(usuarios_sistema.permisos, '*') OR "
                              "PG_JSON_TIENE(usuarios_sistema.permisos, 'soporte.ruta'))) AS _col_0))",
                    'update': '0',
                    'update_check': '0'},
 'cargas_combustible': {'delete': "((SELECT COALESCE((SELECT PG_JSON_TIENE(usuarios_sistema.permisos, '*') "
                                  "OR PG_JSON_TIENE(usuarios_sistema.permisos, 'clientes.cartera') AS _col_0 "
                                  'FROM usuarios_sistema AS usuarios_sistema WHERE usuarios_sistema.auth_id '
                                  '= AUTH_UID() AND usuarios_sistema.activo LIMIT 1), TRUE /* Sin legajo no '
                                  'se bloquea a nadie: es una instalación que todavía no */ /* corrió la '
                                  'migración 66, y cerrarle el paso la dejaría inutilizable de */ /* golpe. '
                                  'El frente se comporta igual por la misma razón. */) AS _col_0) OR (SELECT '
                                  "COALESCE((SELECT PG_JSON_TIENE(usuarios_sistema.permisos, '*') OR "
                                  "PG_JSON_TIENE(usuarios_sistema.permisos, 'ventas.equipo') AS _col_0 FROM "
                                  'usuarios_sistema AS usuarios_sistema WHERE usuarios_sistema.auth_id = '
                                  'AUTH_UID() AND usuarios_sistema.activo LIMIT 1), TRUE /* Sin legajo se '
                                  'permite, igual que el resto de los ayudantes: una */ /* instalación sin '
                                  'la migración 66 no puede quedarse sin módulo comercial. */) AS _col_0) OR '
                                  'cargas_combustible.tecnico_id = (SELECT usuarios_sistema.tecnico_id AS '
                                  'tecnico_id FROM usuarios_sistema AS usuarios_sistema WHERE '
                                  'usuarios_sistema.auth_id = AUTH_UID() AND usuarios_sistema.activo LIMIT '
                                  '1))',
                        'insert': "((SELECT COALESCE((SELECT PG_JSON_TIENE(usuarios_sistema.permisos, '*') "
                                  "OR PG_JSON_TIENE(usuarios_sistema.permisos, 'clientes.cartera') AS _col_0 "
                                  'FROM usuarios_sistema AS usuarios_sistema WHERE usuarios_sistema.auth_id '
                                  '= AUTH_UID() AND usuarios_sistema.activo LIMIT 1), TRUE /* Sin legajo no '
                                  'se bloquea a nadie: es una instalación que todavía no */ /* corrió la '
                                  'migración 66, y cerrarle el paso la dejaría inutilizable de */ /* golpe. '
                                  'El frente se comporta igual por la misma razón. */) AS _col_0) OR (SELECT '
                                  "COALESCE((SELECT PG_JSON_TIENE(usuarios_sistema.permisos, '*') OR "
                                  "PG_JSON_TIENE(usuarios_sistema.permisos, 'ventas.equipo') AS _col_0 FROM "
                                  'usuarios_sistema AS usuarios_sistema WHERE usuarios_sistema.auth_id = '
                                  'AUTH_UID() AND usuarios_sistema.activo LIMIT 1), TRUE /* Sin legajo se '
                                  'permite, igual que el resto de los ayudantes: una */ /* instalación sin '
                                  'la migración 66 no puede quedarse sin módulo comercial. */) AS _col_0) OR '
                                  'cargas_combustible.tecnico_id = (SELECT usuarios_sistema.tecnico_id AS '
                                  'tecnico_id FROM usuarios_sistema AS usuarios_sistema WHERE '
                                  'usuarios_sistema.auth_id = AUTH_UID() AND usuarios_sistema.activo LIMIT '
                                  '1))',
                        'select': "((SELECT COALESCE((SELECT PG_JSON_TIENE(usuarios_sistema.permisos, '*') "
                                  "OR PG_JSON_TIENE(usuarios_sistema.permisos, 'clientes.cartera') AS _col_0 "
                                  'FROM usuarios_sistema AS usuarios_sistema WHERE usuarios_sistema.auth_id '
                                  '= AUTH_UID() AND usuarios_sistema.activo LIMIT 1), TRUE /* Sin legajo no '
                                  'se bloquea a nadie: es una instalación que todavía no */ /* corrió la '
                                  'migración 66, y cerrarle el paso la dejaría inutilizable de */ /* golpe. '
                                  'El frente se comporta igual por la misma razón. */) AS _col_0) OR (SELECT '
                                  "COALESCE((SELECT PG_JSON_TIENE(usuarios_sistema.permisos, '*') OR "
                                  "PG_JSON_TIENE(usuarios_sistema.permisos, 'ventas.equipo') AS _col_0 FROM "
                                  'usuarios_sistema AS usuarios_sistema WHERE usuarios_sistema.auth_id = '
                                  'AUTH_UID() AND usuarios_sistema.activo LIMIT 1), TRUE /* Sin legajo se '
                                  'permite, igual que el resto de los ayudantes: una */ /* instalación sin '
                                  'la migración 66 no puede quedarse sin módulo comercial. */) AS _col_0) OR '
                                  'cargas_combustible.tecnico_id = (SELECT usuarios_sistema.tecnico_id AS '
                                  'tecnico_id FROM usuarios_sistema AS usuarios_sistema WHERE '
                                  'usuarios_sistema.auth_id = AUTH_UID() AND usuarios_sistema.activo LIMIT '
                                  '1))',
                        'update': "((SELECT COALESCE((SELECT PG_JSON_TIENE(usuarios_sistema.permisos, '*') "
                                  "OR PG_JSON_TIENE(usuarios_sistema.permisos, 'clientes.cartera') AS _col_0 "
                                  'FROM usuarios_sistema AS usuarios_sistema WHERE usuarios_sistema.auth_id '
                                  '= AUTH_UID() AND usuarios_sistema.activo LIMIT 1), TRUE /* Sin legajo no '
                                  'se bloquea a nadie: es una instalación que todavía no */ /* corrió la '
                                  'migración 66, y cerrarle el paso la dejaría inutilizable de */ /* golpe. '
                                  'El frente se comporta igual por la misma razón. */) AS _col_0) OR (SELECT '
                                  "COALESCE((SELECT PG_JSON_TIENE(usuarios_sistema.permisos, '*') OR "
                                  "PG_JSON_TIENE(usuarios_sistema.permisos, 'ventas.equipo') AS _col_0 FROM "
                                  'usuarios_sistema AS usuarios_sistema WHERE usuarios_sistema.auth_id = '
                                  'AUTH_UID() AND usuarios_sistema.activo LIMIT 1), TRUE /* Sin legajo se '
                                  'permite, igual que el resto de los ayudantes: una */ /* instalación sin '
                                  'la migración 66 no puede quedarse sin módulo comercial. */) AS _col_0) OR '
                                  'cargas_combustible.tecnico_id = (SELECT usuarios_sistema.tecnico_id AS '
                                  'tecnico_id FROM usuarios_sistema AS usuarios_sistema WHERE '
                                  'usuarios_sistema.auth_id = AUTH_UID() AND usuarios_sistema.activo LIMIT '
                                  '1))',
                        'update_check': '((SELECT COALESCE((SELECT PG_JSON_TIENE(usuarios_sistema.permisos, '
                                        "'*') OR PG_JSON_TIENE(usuarios_sistema.permisos, "
                                        "'clientes.cartera') AS _col_0 FROM usuarios_sistema AS "
                                        'usuarios_sistema WHERE usuarios_sistema.auth_id = AUTH_UID() AND '
                                        'usuarios_sistema.activo LIMIT 1), TRUE /* Sin legajo no se bloquea '
                                        'a nadie: es una instalación que todavía no */ /* corrió la '
                                        'migración 66, y cerrarle el paso la dejaría inutilizable de */ /* '
                                        'golpe. El frente se comporta igual por la misma razón. */) AS '
                                        '_col_0) OR (SELECT COALESCE((SELECT '
                                        "PG_JSON_TIENE(usuarios_sistema.permisos, '*') OR "
                                        "PG_JSON_TIENE(usuarios_sistema.permisos, 'ventas.equipo') AS _col_0 "
                                        'FROM usuarios_sistema AS usuarios_sistema WHERE '
                                        'usuarios_sistema.auth_id = AUTH_UID() AND usuarios_sistema.activo '
                                        'LIMIT 1), TRUE /* Sin legajo se permite, igual que el resto de los '
                                        'ayudantes: una */ /* instalación sin la migración 66 no puede '
                                        'quedarse sin módulo comercial. */) AS _col_0) OR '
                                        'cargas_combustible.tecnico_id = (SELECT usuarios_sistema.tecnico_id '
                                        'AS tecnico_id FROM usuarios_sistema AS usuarios_sistema WHERE '
                                        'usuarios_sistema.auth_id = AUTH_UID() AND usuarios_sistema.activo '
                                        'LIMIT 1))'},
 'clausulas_contrato': {'delete': None, 'insert': None, 'select': None, 'update': None, 'update_check': None},
 'clientes': {'delete': "((SELECT COALESCE((SELECT PG_JSON_TIENE(usuarios_sistema.permisos, '*') OR "
                        "PG_JSON_TIENE(usuarios_sistema.permisos, 'clientes.cartera') AS _col_0 FROM "
                        'usuarios_sistema AS usuarios_sistema WHERE usuarios_sistema.auth_id = AUTH_UID() '
                        'AND usuarios_sistema.activo LIMIT 1), TRUE /* Sin legajo no se bloquea a nadie: es '
                        'una instalación que todavía no */ /* corrió la migración 66, y cerrarle el paso la '
                        'dejaría inutilizable de */ /* golpe. El frente se comporta igual por la misma '
                        'razón. */) AS _col_0))',
              'insert': "((SELECT COALESCE((SELECT PG_JSON_TIENE(usuarios_sistema.permisos, '*') OR "
                        "PG_JSON_TIENE(usuarios_sistema.permisos, 'clientes.cartera') AS _col_0 FROM "
                        'usuarios_sistema AS usuarios_sistema WHERE usuarios_sistema.auth_id = AUTH_UID() '
                        'AND usuarios_sistema.activo LIMIT 1), TRUE /* Sin legajo no se bloquea a nadie: es '
                        'una instalación que todavía no */ /* corrió la migración 66, y cerrarle el paso la '
                        'dejaría inutilizable de */ /* golpe. El frente se comporta igual por la misma '
                        'razón. */) AS _col_0))',
              'select': "((SELECT COALESCE((SELECT PG_JSON_TIENE(usuarios_sistema.permisos, '*') OR "
                        "PG_JSON_TIENE(usuarios_sistema.permisos, 'clientes.cartera') AS _col_0 FROM "
                        'usuarios_sistema AS usuarios_sistema WHERE usuarios_sistema.auth_id = AUTH_UID() '
                        'AND usuarios_sistema.activo LIMIT 1), TRUE /* Sin legajo no se bloquea a nadie: es '
                        'una instalación que todavía no */ /* corrió la migración 66, y cerrarle el paso la '
                        'dejaría inutilizable de */ /* golpe. El frente se comporta igual por la misma '
                        'razón. */) AS _col_0) OR clientes.id IN (SELECT cliente_id AS cliente_id FROM (WITH '
                        'yo /* Solo el técnico y los clientes de sus trabajos. */ /* La cobranza SALIÓ de '
                        'acá a propósito: abría la ficha completa cuando lo */ /* que hace falta es un '
                        'nombre, un teléfono y un saldo. Va por */ /* `v_cobros_por_gestionar`, más abajo. '
                        '*/ AS (SELECT usuarios_sistema.id AS id, usuarios_sistema.tecnico_id AS tecnico_id '
                        'FROM usuarios_sistema AS usuarios_sistema WHERE usuarios_sistema.auth_id = '
                        'AUTH_UID() AND usuarios_sistema.activo LIMIT 1) SELECT t_fn961.client_id AS '
                        'cliente_id FROM tickets AS t_fn961 JOIN yo AS yo ON t_fn961.tecnico_id = '
                        'yo.tecnico_id WHERE NOT t_fn961.client_id IS NULL UNION SELECT i_fn961.client_id AS '
                        'client_id FROM instalaciones AS i_fn961 JOIN yo AS yo ON i_fn961.tecnico_id = '
                        'yo.tecnico_id WHERE NOT i_fn961.client_id IS NULL) AS _0)) OR ((SELECT '
                        "COALESCE((SELECT PG_JSON_TIENE(usuarios_sistema.permisos, '*') OR "
                        "PG_JSON_TIENE(usuarios_sistema.permisos, 'clientes.cartera') AS _col_0 FROM "
                        'usuarios_sistema AS usuarios_sistema WHERE usuarios_sistema.auth_id = AUTH_UID() '
                        'AND usuarios_sistema.activo LIMIT 1), TRUE /* Sin legajo no se bloquea a nadie: es '
                        'una instalación que todavía no */ /* corrió la migración 66, y cerrarle el paso la '
                        'dejaría inutilizable de */ /* golpe. El frente se comporta igual por la misma '
                        'razón. */) AS _col_0))',
              'update': "((SELECT COALESCE((SELECT PG_JSON_TIENE(usuarios_sistema.permisos, '*') OR "
                        "PG_JSON_TIENE(usuarios_sistema.permisos, 'clientes.cartera') AS _col_0 FROM "
                        'usuarios_sistema AS usuarios_sistema WHERE usuarios_sistema.auth_id = AUTH_UID() '
                        'AND usuarios_sistema.activo LIMIT 1), TRUE /* Sin legajo no se bloquea a nadie: es '
                        'una instalación que todavía no */ /* corrió la migración 66, y cerrarle el paso la '
                        'dejaría inutilizable de */ /* golpe. El frente se comporta igual por la misma '
                        'razón. */) AS _col_0))',
              'update_check': "((SELECT COALESCE((SELECT PG_JSON_TIENE(usuarios_sistema.permisos, '*') OR "
                              "PG_JSON_TIENE(usuarios_sistema.permisos, 'clientes.cartera') AS _col_0 FROM "
                              'usuarios_sistema AS usuarios_sistema WHERE usuarios_sistema.auth_id = '
                              'AUTH_UID() AND usuarios_sistema.activo LIMIT 1), TRUE /* Sin legajo no se '
                              'bloquea a nadie: es una instalación que todavía no */ /* corrió la migración '
                              '66, y cerrarle el paso la dejaría inutilizable de */ /* golpe. El frente se '
                              'comporta igual por la misma razón. */) AS _col_0))'},
 'cobranza_asignaciones': {'delete': '0',
                           'insert': '0',
                           'select': '((SELECT COALESCE((SELECT PG_JSON_TIENE(usuarios_sistema.permisos, '
                                     "'*') OR PG_JSON_TIENE(usuarios_sistema.permisos, 'clientes.cartera') "
                                     'AS _col_0 FROM usuarios_sistema AS usuarios_sistema WHERE '
                                     'usuarios_sistema.auth_id = AUTH_UID() AND usuarios_sistema.activo '
                                     'LIMIT 1), TRUE /* Sin legajo no se bloquea a nadie: es una instalación '
                                     'que todavía no */ /* corrió la migración 66, y cerrarle el paso la '
                                     'dejaría inutilizable de */ /* golpe. El frente se comporta igual por '
                                     'la misma razón. */) AS _col_0) OR cobranza_asignaciones.vendedor_id = '
                                     '(SELECT usuarios_sistema.id AS id FROM usuarios_sistema AS '
                                     'usuarios_sistema WHERE usuarios_sistema.auth_id = AUTH_UID() LIMIT 1))',
                           'update': '0',
                           'update_check': '0'},
 'cobranza_gestiones': {'delete': '0',
                        'insert': '(cobranza_gestiones.asignacion_id IN (SELECT ca.id AS id FROM (SELECT '
                                  'cobranza_asignaciones.id AS id, cobranza_asignaciones.cliente_id AS '
                                  'cliente_id, cobranza_asignaciones.vendedor_id AS vendedor_id, '
                                  'cobranza_asignaciones.vence_el AS vence_el, cobranza_asignaciones.estado '
                                  'AS estado, cobranza_asignaciones.saldo_inicial AS saldo_inicial, '
                                  'cobranza_asignaciones.motivo AS motivo, '
                                  'cobranza_asignaciones.asignado_por AS asignado_por, '
                                  'cobranza_asignaciones.creado_en AS creado_en, '
                                  'cobranza_asignaciones.cerrado_en AS cerrado_en FROM cobranza_asignaciones '
                                  'AS cobranza_asignaciones WHERE NOT RLS_ACTIVA() OR (((SELECT '
                                  "COALESCE((SELECT PG_JSON_TIENE(usuarios_sistema.permisos, '*') OR "
                                  "PG_JSON_TIENE(usuarios_sistema.permisos, 'clientes.cartera') AS _col_0 "
                                  'FROM usuarios_sistema AS usuarios_sistema WHERE usuarios_sistema.auth_id '
                                  '= AUTH_UID() AND usuarios_sistema.activo LIMIT 1), TRUE /* Sin legajo no '
                                  'se bloquea a nadie: es una instalación que todavía no */ /* corrió la '
                                  'migración 66, y cerrarle el paso la dejaría inutilizable de */ /* golpe. '
                                  'El frente se comporta igual por la misma razón. */) AS _col_0) OR '
                                  'cobranza_asignaciones.vendedor_id = (SELECT usuarios_sistema.id AS id '
                                  'FROM usuarios_sistema AS usuarios_sistema WHERE usuarios_sistema.auth_id '
                                  "= AUTH_UID() LIMIT 1)))) AS ca WHERE ca.estado = 'activa' AND "
                                  'ca.vendedor_id = (SELECT usuarios_sistema.id AS id FROM usuarios_sistema '
                                  'AS usuarios_sistema WHERE usuarios_sistema.auth_id = AUTH_UID() LIMIT 1)) '
                                  "OR (SELECT COALESCE((SELECT PG_JSON_TIENE(usuarios_sistema.permisos, '*') "
                                  "OR PG_JSON_TIENE(usuarios_sistema.permisos, 'clientes.cartera') AS _col_0 "
                                  'FROM usuarios_sistema AS usuarios_sistema WHERE usuarios_sistema.auth_id '
                                  '= AUTH_UID() AND usuarios_sistema.activo LIMIT 1), TRUE /* Sin legajo no '
                                  'se bloquea a nadie: es una instalación que todavía no */ /* corrió la '
                                  'migración 66, y cerrarle el paso la dejaría inutilizable de */ /* golpe. '
                                  'El frente se comporta igual por la misma razón. */) AS _col_0))',
                        'select': "((SELECT COALESCE((SELECT PG_JSON_TIENE(usuarios_sistema.permisos, '*') "
                                  "OR PG_JSON_TIENE(usuarios_sistema.permisos, 'clientes.cartera') AS _col_0 "
                                  'FROM usuarios_sistema AS usuarios_sistema WHERE usuarios_sistema.auth_id '
                                  '= AUTH_UID() AND usuarios_sistema.activo LIMIT 1), TRUE /* Sin legajo no '
                                  'se bloquea a nadie: es una instalación que todavía no */ /* corrió la '
                                  'migración 66, y cerrarle el paso la dejaría inutilizable de */ /* golpe. '
                                  'El frente se comporta igual por la misma razón. */) AS _col_0) OR '
                                  'cobranza_gestiones.asignacion_id IN (SELECT ca.id AS id FROM (SELECT '
                                  'cobranza_asignaciones.id AS id, cobranza_asignaciones.cliente_id AS '
                                  'cliente_id, cobranza_asignaciones.vendedor_id AS vendedor_id, '
                                  'cobranza_asignaciones.vence_el AS vence_el, cobranza_asignaciones.estado '
                                  'AS estado, cobranza_asignaciones.saldo_inicial AS saldo_inicial, '
                                  'cobranza_asignaciones.motivo AS motivo, '
                                  'cobranza_asignaciones.asignado_por AS asignado_por, '
                                  'cobranza_asignaciones.creado_en AS creado_en, '
                                  'cobranza_asignaciones.cerrado_en AS cerrado_en FROM cobranza_asignaciones '
                                  'AS cobranza_asignaciones WHERE NOT RLS_ACTIVA() OR (((SELECT '
                                  "COALESCE((SELECT PG_JSON_TIENE(usuarios_sistema.permisos, '*') OR "
                                  "PG_JSON_TIENE(usuarios_sistema.permisos, 'clientes.cartera') AS _col_0 "
                                  'FROM usuarios_sistema AS usuarios_sistema WHERE usuarios_sistema.auth_id '
                                  '= AUTH_UID() AND usuarios_sistema.activo LIMIT 1), TRUE /* Sin legajo no '
                                  'se bloquea a nadie: es una instalación que todavía no */ /* corrió la '
                                  'migración 66, y cerrarle el paso la dejaría inutilizable de */ /* golpe. '
                                  'El frente se comporta igual por la misma razón. */) AS _col_0) OR '
                                  'cobranza_asignaciones.vendedor_id = (SELECT usuarios_sistema.id AS id '
                                  'FROM usuarios_sistema AS usuarios_sistema WHERE usuarios_sistema.auth_id '
                                  '= AUTH_UID() LIMIT 1)))) AS ca WHERE ca.vendedor_id = (SELECT '
                                  'usuarios_sistema.id AS id FROM usuarios_sistema AS usuarios_sistema WHERE '
                                  'usuarios_sistema.auth_id = AUTH_UID() LIMIT 1)))',
                        'update': '0',
                        'update_check': '0'},
 'comandos_ejecutados': {'delete': None,
                         'insert': None,
                         'select': None,
                         'update': None,
                         'update_check': None},
 'comision_bases_plan': {'delete': "((SELECT COALESCE((SELECT PG_JSON_TIENE(usuarios_sistema.permisos, '*') "
                                   "OR PG_JSON_TIENE(usuarios_sistema.permisos, 'comisiones.configurar') AS "
                                   '_col_0 FROM usuarios_sistema AS usuarios_sistema WHERE '
                                   'usuarios_sistema.auth_id = AUTH_UID() AND usuarios_sistema.activo LIMIT '
                                   '1), TRUE /* Sin legajo no se bloquea: misma regla que el resto del '
                                   'sistema, para */ /* que una instalación a medio migrar no quede '
                                   'inutilizable. */) AS _col_0))',
                         'insert': "((SELECT COALESCE((SELECT PG_JSON_TIENE(usuarios_sistema.permisos, '*') "
                                   "OR PG_JSON_TIENE(usuarios_sistema.permisos, 'comisiones.configurar') AS "
                                   '_col_0 FROM usuarios_sistema AS usuarios_sistema WHERE '
                                   'usuarios_sistema.auth_id = AUTH_UID() AND usuarios_sistema.activo LIMIT '
                                   '1), TRUE /* Sin legajo no se bloquea: misma regla que el resto del '
                                   'sistema, para */ /* que una instalación a medio migrar no quede '
                                   'inutilizable. */) AS _col_0))',
                         'select': None,
                         'update': "((SELECT COALESCE((SELECT PG_JSON_TIENE(usuarios_sistema.permisos, '*') "
                                   "OR PG_JSON_TIENE(usuarios_sistema.permisos, 'comisiones.configurar') AS "
                                   '_col_0 FROM usuarios_sistema AS usuarios_sistema WHERE '
                                   'usuarios_sistema.auth_id = AUTH_UID() AND usuarios_sistema.activo LIMIT '
                                   '1), TRUE /* Sin legajo no se bloquea: misma regla que el resto del '
                                   'sistema, para */ /* que una instalación a medio migrar no quede '
                                   'inutilizable. */) AS _col_0))',
                         'update_check': '((SELECT COALESCE((SELECT PG_JSON_TIENE(usuarios_sistema.permisos, '
                                         "'*') OR PG_JSON_TIENE(usuarios_sistema.permisos, "
                                         "'comisiones.configurar') AS _col_0 FROM usuarios_sistema AS "
                                         'usuarios_sistema WHERE usuarios_sistema.auth_id = AUTH_UID() AND '
                                         'usuarios_sistema.activo LIMIT 1), TRUE /* Sin legajo no se '
                                         'bloquea: misma regla que el resto del sistema, para */ /* que una '
                                         'instalación a medio migrar no quede inutilizable. */) AS _col_0))'},
 'comision_bonos_calidad': {'delete': '((SELECT COALESCE((SELECT PG_JSON_TIENE(usuarios_sistema.permisos, '
                                      "'*') OR PG_JSON_TIENE(usuarios_sistema.permisos, "
                                      "'comisiones.configurar') AS _col_0 FROM usuarios_sistema AS "
                                      'usuarios_sistema WHERE usuarios_sistema.auth_id = AUTH_UID() AND '
                                      'usuarios_sistema.activo LIMIT 1), TRUE /* Sin legajo no se bloquea: '
                                      'misma regla que el resto del sistema, para */ /* que una instalación '
                                      'a medio migrar no quede inutilizable. */) AS _col_0))',
                            'insert': '((SELECT COALESCE((SELECT PG_JSON_TIENE(usuarios_sistema.permisos, '
                                      "'*') OR PG_JSON_TIENE(usuarios_sistema.permisos, "
                                      "'comisiones.configurar') AS _col_0 FROM usuarios_sistema AS "
                                      'usuarios_sistema WHERE usuarios_sistema.auth_id = AUTH_UID() AND '
                                      'usuarios_sistema.activo LIMIT 1), TRUE /* Sin legajo no se bloquea: '
                                      'misma regla que el resto del sistema, para */ /* que una instalación '
                                      'a medio migrar no quede inutilizable. */) AS _col_0))',
                            'select': None,
                            'update': '((SELECT COALESCE((SELECT PG_JSON_TIENE(usuarios_sistema.permisos, '
                                      "'*') OR PG_JSON_TIENE(usuarios_sistema.permisos, "
                                      "'comisiones.configurar') AS _col_0 FROM usuarios_sistema AS "
                                      'usuarios_sistema WHERE usuarios_sistema.auth_id = AUTH_UID() AND '
                                      'usuarios_sistema.activo LIMIT 1), TRUE /* Sin legajo no se bloquea: '
                                      'misma regla que el resto del sistema, para */ /* que una instalación '
                                      'a medio migrar no quede inutilizable. */) AS _col_0))',
                            'update_check': '((SELECT COALESCE((SELECT '
                                            "PG_JSON_TIENE(usuarios_sistema.permisos, '*') OR "
                                            'PG_JSON_TIENE(usuarios_sistema.permisos, '
                                            "'comisiones.configurar') AS _col_0 FROM usuarios_sistema AS "
                                            'usuarios_sistema WHERE usuarios_sistema.auth_id = AUTH_UID() '
                                            'AND usuarios_sistema.activo LIMIT 1), TRUE /* Sin legajo no se '
                                            'bloquea: misma regla que el resto del sistema, para */ /* que '
                                            'una instalación a medio migrar no quede inutilizable. */) AS '
                                            '_col_0))'},
 'comision_cohortes': {'delete': '(FALSE)',
                       'insert': '(FALSE)',
                       'select': "((SELECT COALESCE((SELECT PG_JSON_TIENE(usuarios_sistema.permisos, '*') OR "
                                 "PG_JSON_TIENE(usuarios_sistema.permisos, 'comisiones.ver_todas') AS _col_0 "
                                 'FROM usuarios_sistema AS usuarios_sistema WHERE usuarios_sistema.auth_id = '
                                 'AUTH_UID() AND usuarios_sistema.activo LIMIT 1), TRUE) AS _col_0) OR '
                                 'comision_cohortes.vendedor_id = (SELECT usuarios_sistema.id AS id FROM '
                                 'usuarios_sistema AS usuarios_sistema WHERE usuarios_sistema.auth_id = '
                                 'AUTH_UID() AND usuarios_sistema.activo LIMIT 1)) OR (FALSE)',
                       'update': '(FALSE)',
                       'update_check': '(FALSE)'},
 'comision_esquemas': {'delete': "((SELECT COALESCE((SELECT PG_JSON_TIENE(usuarios_sistema.permisos, '*') OR "
                                 "PG_JSON_TIENE(usuarios_sistema.permisos, 'comisiones.configurar') AS "
                                 '_col_0 FROM usuarios_sistema AS usuarios_sistema WHERE '
                                 'usuarios_sistema.auth_id = AUTH_UID() AND usuarios_sistema.activo LIMIT '
                                 '1), TRUE /* Sin legajo no se bloquea: misma regla que el resto del '
                                 'sistema, para */ /* que una instalación a medio migrar no quede '
                                 'inutilizable. */) AS _col_0))',
                       'insert': "((SELECT COALESCE((SELECT PG_JSON_TIENE(usuarios_sistema.permisos, '*') OR "
                                 "PG_JSON_TIENE(usuarios_sistema.permisos, 'comisiones.configurar') AS "
                                 '_col_0 FROM usuarios_sistema AS usuarios_sistema WHERE '
                                 'usuarios_sistema.auth_id = AUTH_UID() AND usuarios_sistema.activo LIMIT '
                                 '1), TRUE /* Sin legajo no se bloquea: misma regla que el resto del '
                                 'sistema, para */ /* que una instalación a medio migrar no quede '
                                 'inutilizable. */) AS _col_0))',
                       'select': None,
                       'update': "((SELECT COALESCE((SELECT PG_JSON_TIENE(usuarios_sistema.permisos, '*') OR "
                                 "PG_JSON_TIENE(usuarios_sistema.permisos, 'comisiones.configurar') AS "
                                 '_col_0 FROM usuarios_sistema AS usuarios_sistema WHERE '
                                 'usuarios_sistema.auth_id = AUTH_UID() AND usuarios_sistema.activo LIMIT '
                                 '1), TRUE /* Sin legajo no se bloquea: misma regla que el resto del '
                                 'sistema, para */ /* que una instalación a medio migrar no quede '
                                 'inutilizable. */) AS _col_0))',
                       'update_check': '((SELECT COALESCE((SELECT PG_JSON_TIENE(usuarios_sistema.permisos, '
                                       "'*') OR PG_JSON_TIENE(usuarios_sistema.permisos, "
                                       "'comisiones.configurar') AS _col_0 FROM usuarios_sistema AS "
                                       'usuarios_sistema WHERE usuarios_sistema.auth_id = AUTH_UID() AND '
                                       'usuarios_sistema.activo LIMIT 1), TRUE /* Sin legajo no se bloquea: '
                                       'misma regla que el resto del sistema, para */ /* que una instalación '
                                       'a medio migrar no quede inutilizable. */) AS _col_0))'},
 'comision_niveles': {'delete': "((SELECT COALESCE((SELECT PG_JSON_TIENE(usuarios_sistema.permisos, '*') OR "
                                "PG_JSON_TIENE(usuarios_sistema.permisos, 'comisiones.configurar') AS _col_0 "
                                'FROM usuarios_sistema AS usuarios_sistema WHERE usuarios_sistema.auth_id = '
                                'AUTH_UID() AND usuarios_sistema.activo LIMIT 1), TRUE /* Sin legajo no se '
                                'bloquea: misma regla que el resto del sistema, para */ /* que una '
                                'instalación a medio migrar no quede inutilizable. */) AS _col_0))',
                      'insert': "((SELECT COALESCE((SELECT PG_JSON_TIENE(usuarios_sistema.permisos, '*') OR "
                                "PG_JSON_TIENE(usuarios_sistema.permisos, 'comisiones.configurar') AS _col_0 "
                                'FROM usuarios_sistema AS usuarios_sistema WHERE usuarios_sistema.auth_id = '
                                'AUTH_UID() AND usuarios_sistema.activo LIMIT 1), TRUE /* Sin legajo no se '
                                'bloquea: misma regla que el resto del sistema, para */ /* que una '
                                'instalación a medio migrar no quede inutilizable. */) AS _col_0))',
                      'select': None,
                      'update': "((SELECT COALESCE((SELECT PG_JSON_TIENE(usuarios_sistema.permisos, '*') OR "
                                "PG_JSON_TIENE(usuarios_sistema.permisos, 'comisiones.configurar') AS _col_0 "
                                'FROM usuarios_sistema AS usuarios_sistema WHERE usuarios_sistema.auth_id = '
                                'AUTH_UID() AND usuarios_sistema.activo LIMIT 1), TRUE /* Sin legajo no se '
                                'bloquea: misma regla que el resto del sistema, para */ /* que una '
                                'instalación a medio migrar no quede inutilizable. */) AS _col_0))',
                      'update_check': '((SELECT COALESCE((SELECT PG_JSON_TIENE(usuarios_sistema.permisos, '
                                      "'*') OR PG_JSON_TIENE(usuarios_sistema.permisos, "
                                      "'comisiones.configurar') AS _col_0 FROM usuarios_sistema AS "
                                      'usuarios_sistema WHERE usuarios_sistema.auth_id = AUTH_UID() AND '
                                      'usuarios_sistema.activo LIMIT 1), TRUE /* Sin legajo no se bloquea: '
                                      'misma regla que el resto del sistema, para */ /* que una instalación '
                                      'a medio migrar no quede inutilizable. */) AS _col_0))'},
 'comision_periodos': {'delete': '(FALSE)',
                       'insert': '(FALSE)',
                       'select': "((SELECT COALESCE((SELECT PG_JSON_TIENE(usuarios_sistema.permisos, '*') OR "
                                 "PG_JSON_TIENE(usuarios_sistema.permisos, 'comisiones.ver_todas') AS _col_0 "
                                 'FROM usuarios_sistema AS usuarios_sistema WHERE usuarios_sistema.auth_id = '
                                 'AUTH_UID() AND usuarios_sistema.activo LIMIT 1), TRUE) AS _col_0) OR '
                                 'comision_periodos.vendedor_id = (SELECT usuarios_sistema.id AS id FROM '
                                 'usuarios_sistema AS usuarios_sistema WHERE usuarios_sistema.auth_id = '
                                 'AUTH_UID() AND usuarios_sistema.activo LIMIT 1)) OR (FALSE)',
                       'update': '(FALSE)',
                       'update_check': '(FALSE)'},
 'comision_reglas': {'delete': "((SELECT COALESCE((SELECT PG_JSON_TIENE(usuarios_sistema.permisos, '*') OR "
                               "PG_JSON_TIENE(usuarios_sistema.permisos, 'comisiones.configurar') AS _col_0 "
                               'FROM usuarios_sistema AS usuarios_sistema WHERE usuarios_sistema.auth_id = '
                               'AUTH_UID() AND usuarios_sistema.activo LIMIT 1), TRUE /* Sin legajo no se '
                               'bloquea: misma regla que el resto del sistema, para */ /* que una '
                               'instalación a medio migrar no quede inutilizable. */) AS _col_0))',
                     'insert': "((SELECT COALESCE((SELECT PG_JSON_TIENE(usuarios_sistema.permisos, '*') OR "
                               "PG_JSON_TIENE(usuarios_sistema.permisos, 'comisiones.configurar') AS _col_0 "
                               'FROM usuarios_sistema AS usuarios_sistema WHERE usuarios_sistema.auth_id = '
                               'AUTH_UID() AND usuarios_sistema.activo LIMIT 1), TRUE /* Sin legajo no se '
                               'bloquea: misma regla que el resto del sistema, para */ /* que una '
                               'instalación a medio migrar no quede inutilizable. */) AS _col_0))',
                     'select': None,
                     'update': "((SELECT COALESCE((SELECT PG_JSON_TIENE(usuarios_sistema.permisos, '*') OR "
                               "PG_JSON_TIENE(usuarios_sistema.permisos, 'comisiones.configurar') AS _col_0 "
                               'FROM usuarios_sistema AS usuarios_sistema WHERE usuarios_sistema.auth_id = '
                               'AUTH_UID() AND usuarios_sistema.activo LIMIT 1), TRUE /* Sin legajo no se '
                               'bloquea: misma regla que el resto del sistema, para */ /* que una '
                               'instalación a medio migrar no quede inutilizable. */) AS _col_0))',
                     'update_check': '((SELECT COALESCE((SELECT PG_JSON_TIENE(usuarios_sistema.permisos, '
                                     "'*') OR PG_JSON_TIENE(usuarios_sistema.permisos, "
                                     "'comisiones.configurar') AS _col_0 FROM usuarios_sistema AS "
                                     'usuarios_sistema WHERE usuarios_sistema.auth_id = AUTH_UID() AND '
                                     'usuarios_sistema.activo LIMIT 1), TRUE /* Sin legajo no se bloquea: '
                                     'misma regla que el resto del sistema, para */ /* que una instalación a '
                                     'medio migrar no quede inutilizable. */) AS _col_0))'},
 'comision_ventas': {'delete': '(FALSE)',
                     'insert': '(FALSE)',
                     'select': "((SELECT COALESCE((SELECT PG_JSON_TIENE(usuarios_sistema.permisos, '*') OR "
                               "PG_JSON_TIENE(usuarios_sistema.permisos, 'comisiones.ver_todas') AS _col_0 "
                               'FROM usuarios_sistema AS usuarios_sistema WHERE usuarios_sistema.auth_id = '
                               'AUTH_UID() AND usuarios_sistema.activo LIMIT 1), TRUE) AS _col_0) OR '
                               'comision_ventas.vendedor_id = (SELECT usuarios_sistema.id AS id FROM '
                               'usuarios_sistema AS usuarios_sistema WHERE usuarios_sistema.auth_id = '
                               'AUTH_UID() AND usuarios_sistema.activo LIMIT 1)) OR (FALSE)',
                     'update': '(FALSE)',
                     'update_check': '(FALSE)'},
 'compra_items': {'delete': None, 'insert': None, 'select': None, 'update': None, 'update_check': None},
 'compras': {'delete': None, 'insert': None, 'select': None, 'update': None, 'update_check': None},
 'comunicaciones': {'delete': None, 'insert': None, 'select': None, 'update': None, 'update_check': None},
 'config_avisos_pago': {'delete': None, 'insert': None, 'select': None, 'update': None, 'update_check': None},
 'config_cartera': {'delete': '0', 'insert': '0', 'select': None, 'update': '0', 'update_check': '0'},
 'config_corte': {'delete': None, 'insert': None, 'select': None, 'update': None, 'update_check': None},
 'config_firma': {'delete': None, 'insert': None, 'select': None, 'update': None, 'update_check': None},
 'config_general': {'delete': '0', 'insert': '0', 'select': None, 'update': '0', 'update_check': '0'},
 'config_mensajeria': {'delete': '0', 'insert': '0', 'select': '0', 'update': '0', 'update_check': '0'},
 'config_tareas': {'delete': '0', 'insert': '0', 'select': None, 'update': '0', 'update_check': '0'},
 'consumo_contadores': {'delete': None, 'insert': None, 'select': None, 'update': None, 'update_check': None},
 'consumo_diario': {'delete': None, 'insert': None, 'select': None, 'update': None, 'update_check': None},
 'contratos': {'delete': "((SELECT COALESCE((SELECT PG_JSON_TIENE(usuarios_sistema.permisos, '*') OR "
                         "PG_JSON_TIENE(usuarios_sistema.permisos, 'clientes.cartera') AS _col_0 FROM "
                         'usuarios_sistema AS usuarios_sistema WHERE usuarios_sistema.auth_id = AUTH_UID() '
                         'AND usuarios_sistema.activo LIMIT 1), TRUE /* Sin legajo no se bloquea a nadie: es '
                         'una instalación que todavía no */ /* corrió la migración 66, y cerrarle el paso la '
                         'dejaría inutilizable de */ /* golpe. El frente se comporta igual por la misma '
                         'razón. */) AS _col_0) OR contratos.client_id IN (SELECT cliente_id AS cliente_id '
                         'FROM (WITH yo /* Solo el técnico y los clientes de sus trabajos. */ /* La cobranza '
                         'SALIÓ de acá a propósito: abría la ficha completa cuando lo */ /* que hace falta '
                         'es un nombre, un teléfono y un saldo. Va por */ /* `v_cobros_por_gestionar`, más '
                         'abajo. */ AS (SELECT usuarios_sistema.id AS id, usuarios_sistema.tecnico_id AS '
                         'tecnico_id FROM usuarios_sistema AS usuarios_sistema WHERE '
                         'usuarios_sistema.auth_id = AUTH_UID() AND usuarios_sistema.activo LIMIT 1) SELECT '
                         't_fn1005.client_id AS cliente_id FROM tickets AS t_fn1005 JOIN yo AS yo ON '
                         't_fn1005.tecnico_id = yo.tecnico_id WHERE NOT t_fn1005.client_id IS NULL UNION '
                         'SELECT i_fn1005.client_id AS client_id FROM instalaciones AS i_fn1005 JOIN yo AS '
                         'yo ON i_fn1005.tecnico_id = yo.tecnico_id WHERE NOT i_fn1005.client_id IS NULL) AS '
                         '_0))',
               'insert': "((SELECT COALESCE((SELECT PG_JSON_TIENE(usuarios_sistema.permisos, '*') OR "
                         "PG_JSON_TIENE(usuarios_sistema.permisos, 'clientes.cartera') AS _col_0 FROM "
                         'usuarios_sistema AS usuarios_sistema WHERE usuarios_sistema.auth_id = AUTH_UID() '
                         'AND usuarios_sistema.activo LIMIT 1), TRUE /* Sin legajo no se bloquea a nadie: es '
                         'una instalación que todavía no */ /* corrió la migración 66, y cerrarle el paso la '
                         'dejaría inutilizable de */ /* golpe. El frente se comporta igual por la misma '
                         'razón. */) AS _col_0))',
               'select': "((SELECT COALESCE((SELECT PG_JSON_TIENE(usuarios_sistema.permisos, '*') OR "
                         "PG_JSON_TIENE(usuarios_sistema.permisos, 'clientes.cartera') AS _col_0 FROM "
                         'usuarios_sistema AS usuarios_sistema WHERE usuarios_sistema.auth_id = AUTH_UID() '
                         'AND usuarios_sistema.activo LIMIT 1), TRUE /* Sin legajo no se bloquea a nadie: es '
                         'una instalación que todavía no */ /* corrió la migración 66, y cerrarle el paso la '
                         'dejaría inutilizable de */ /* golpe. El frente se comporta igual por la misma '
                         'razón. */) AS _col_0) OR contratos.client_id IN (SELECT cliente_id AS cliente_id '
                         'FROM (WITH yo /* Solo el técnico y los clientes de sus trabajos. */ /* La cobranza '
                         'SALIÓ de acá a propósito: abría la ficha completa cuando lo */ /* que hace falta '
                         'es un nombre, un teléfono y un saldo. Va por */ /* `v_cobros_por_gestionar`, más '
                         'abajo. */ AS (SELECT usuarios_sistema.id AS id, usuarios_sistema.tecnico_id AS '
                         'tecnico_id FROM usuarios_sistema AS usuarios_sistema WHERE '
                         'usuarios_sistema.auth_id = AUTH_UID() AND usuarios_sistema.activo LIMIT 1) SELECT '
                         't_fn999.client_id AS cliente_id FROM tickets AS t_fn999 JOIN yo AS yo ON '
                         't_fn999.tecnico_id = yo.tecnico_id WHERE NOT t_fn999.client_id IS NULL UNION '
                         'SELECT i_fn999.client_id AS client_id FROM instalaciones AS i_fn999 JOIN yo AS yo '
                         'ON i_fn999.tecnico_id = yo.tecnico_id WHERE NOT i_fn999.client_id IS NULL) AS _0))',
               'update': "((SELECT COALESCE((SELECT PG_JSON_TIENE(usuarios_sistema.permisos, '*') OR "
                         "PG_JSON_TIENE(usuarios_sistema.permisos, 'clientes.cartera') AS _col_0 FROM "
                         'usuarios_sistema AS usuarios_sistema WHERE usuarios_sistema.auth_id = AUTH_UID() '
                         'AND usuarios_sistema.activo LIMIT 1), TRUE /* Sin legajo no se bloquea a nadie: es '
                         'una instalación que todavía no */ /* corrió la migración 66, y cerrarle el paso la '
                         'dejaría inutilizable de */ /* golpe. El frente se comporta igual por la misma '
                         'razón. */) AS _col_0) OR contratos.client_id IN (SELECT cliente_id AS cliente_id '
                         'FROM (WITH yo /* Solo el técnico y los clientes de sus trabajos. */ /* La cobranza '
                         'SALIÓ de acá a propósito: abría la ficha completa cuando lo */ /* que hace falta '
                         'es un nombre, un teléfono y un saldo. Va por */ /* `v_cobros_por_gestionar`, más '
                         'abajo. */ AS (SELECT usuarios_sistema.id AS id, usuarios_sistema.tecnico_id AS '
                         'tecnico_id FROM usuarios_sistema AS usuarios_sistema WHERE '
                         'usuarios_sistema.auth_id = AUTH_UID() AND usuarios_sistema.activo LIMIT 1) SELECT '
                         't_fn1002.client_id AS cliente_id FROM tickets AS t_fn1002 JOIN yo AS yo ON '
                         't_fn1002.tecnico_id = yo.tecnico_id WHERE NOT t_fn1002.client_id IS NULL UNION '
                         'SELECT i_fn1002.client_id AS client_id FROM instalaciones AS i_fn1002 JOIN yo AS '
                         'yo ON i_fn1002.tecnico_id = yo.tecnico_id WHERE NOT i_fn1002.client_id IS NULL) AS '
                         '_0))',
               'update_check': "((SELECT COALESCE((SELECT PG_JSON_TIENE(usuarios_sistema.permisos, '*') OR "
                               "PG_JSON_TIENE(usuarios_sistema.permisos, 'clientes.cartera') AS _col_0 FROM "
                               'usuarios_sistema AS usuarios_sistema WHERE usuarios_sistema.auth_id = '
                               'AUTH_UID() AND usuarios_sistema.activo LIMIT 1), TRUE /* Sin legajo no se '
                               'bloquea a nadie: es una instalación que todavía no */ /* corrió la migración '
                               '66, y cerrarle el paso la dejaría inutilizable de */ /* golpe. El frente se '
                               'comporta igual por la misma razón. */) AS _col_0))'},
 'cotizaciones': {'delete': "((SELECT COALESCE((SELECT PG_JSON_TIENE(usuarios_sistema.permisos, '*') OR "
                            "PG_JSON_TIENE(usuarios_sistema.permisos, 'clientes.cartera') AS _col_0 FROM "
                            'usuarios_sistema AS usuarios_sistema WHERE usuarios_sistema.auth_id = '
                            'AUTH_UID() AND usuarios_sistema.activo LIMIT 1), TRUE /* Sin legajo no se '
                            'bloquea a nadie: es una instalación que todavía no */ /* corrió la migración '
                            '66, y cerrarle el paso la dejaría inutilizable de */ /* golpe. El frente se '
                            'comporta igual por la misma razón. */) AS _col_0) OR cotizaciones.vendedor_id = '
                            '(SELECT usuarios_sistema.id AS id FROM usuarios_sistema AS usuarios_sistema '
                            'WHERE usuarios_sistema.auth_id = AUTH_UID() AND usuarios_sistema.activo LIMIT '
                            '1) OR cotizaciones.creado_por = (SELECT usuarios_sistema.id AS id FROM '
                            'usuarios_sistema AS usuarios_sistema WHERE usuarios_sistema.auth_id = '
                            'AUTH_UID() AND usuarios_sistema.activo LIMIT 1) OR cotizaciones.prospecto_id IN '
                            '(SELECT prospectos.id AS id FROM (SELECT prospectos.id AS id, '
                            'PG_DESCIFRAR(prospectos.nombre) AS nombre, '
                            'PG_DESCIFRAR(prospectos.identificacion) AS identificacion, '
                            'PG_DESCIFRAR(prospectos.telefono) AS telefono, '
                            'PG_DESCIFRAR(prospectos.telefono_whatsapp) AS telefono_whatsapp, '
                            'PG_DESCIFRAR(prospectos.email) AS email, PG_DESCIFRAR(prospectos.direccion) AS '
                            'direccion, PG_DESCIFRAR(prospectos.referencia) AS referencia, prospectos.sector '
                            'AS sector, prospectos.canton AS canton, prospectos.latitud AS latitud, '
                            'prospectos.longitud AS longitud, prospectos.plan_id AS plan_id, '
                            'prospectos.origen AS origen, prospectos.estado AS estado, '
                            'prospectos.motivo_perdida AS motivo_perdida, prospectos.vendedor_id AS '
                            'vendedor_id, prospectos.cobertura AS cobertura, prospectos.nap_id AS nap_id, '
                            'prospectos.distancia_nodo_m AS distancia_nodo_m, prospectos.proxima_accion AS '
                            'proxima_accion, prospectos.instalacion_id AS instalacion_id, '
                            'prospectos.cliente_id AS cliente_id, prospectos.notas AS notas, '
                            'prospectos.creado_por AS creado_por, prospectos.creado_en AS creado_en, '
                            'prospectos.actualizado_en AS actualizado_en, prospectos.archivado_en AS '
                            'archivado_en, prospectos.ganado_en AS ganado_en, prospectos.promocion_id AS '
                            'promocion_id, prospectos.tipo_operacion AS tipo_operacion FROM prospectos AS '
                            'prospectos WHERE NOT RLS_ACTIVA() OR (((SELECT COALESCE((SELECT '
                            "PG_JSON_TIENE(usuarios_sistema.permisos, '*') OR "
                            "PG_JSON_TIENE(usuarios_sistema.permisos, 'clientes.cartera') AS _col_0 FROM "
                            'usuarios_sistema AS usuarios_sistema WHERE usuarios_sistema.auth_id = '
                            'AUTH_UID() AND usuarios_sistema.activo LIMIT 1), TRUE /* Sin legajo no se '
                            'bloquea a nadie: es una instalación que todavía no */ /* corrió la migración '
                            '66, y cerrarle el paso la dejaría inutilizable de */ /* golpe. El frente se '
                            'comporta igual por la misma razón. */) AS _col_0) OR (prospectos.archivado_en '
                            'IS NULL AND ((SELECT COALESCE((SELECT PG_JSON_TIENE(usuarios_sistema.permisos, '
                            "'*') OR PG_JSON_TIENE(usuarios_sistema.permisos, 'ventas.equipo') AS _col_0 "
                            'FROM usuarios_sistema AS usuarios_sistema WHERE usuarios_sistema.auth_id = '
                            'AUTH_UID() AND usuarios_sistema.activo LIMIT 1), TRUE /* Sin legajo se permite, '
                            'igual que el resto de los ayudantes: una */ /* instalación sin la migración 66 '
                            'no puede quedarse sin módulo comercial. */) AS _col_0) OR '
                            'prospectos.vendedor_id = (SELECT usuarios_sistema.id AS id FROM '
                            'usuarios_sistema AS usuarios_sistema WHERE usuarios_sistema.auth_id = '
                            'AUTH_UID() AND usuarios_sistema.activo LIMIT 1) OR prospectos.creado_por = '
                            '(SELECT usuarios_sistema.id AS id FROM usuarios_sistema AS usuarios_sistema '
                            'WHERE usuarios_sistema.auth_id = AUTH_UID() AND usuarios_sistema.activo LIMIT '
                            '1)))) OR ((SELECT COALESCE((SELECT PG_JSON_TIENE(usuarios_sistema.permisos, '
                            "'*') OR PG_JSON_TIENE(usuarios_sistema.permisos, 'clientes.cartera') AS _col_0 "
                            'FROM usuarios_sistema AS usuarios_sistema WHERE usuarios_sistema.auth_id = '
                            'AUTH_UID() AND usuarios_sistema.activo LIMIT 1), TRUE /* Sin legajo no se '
                            'bloquea a nadie: es una instalación que todavía no */ /* corrió la migración '
                            '66, y cerrarle el paso la dejaría inutilizable de */ /* golpe. El frente se '
                            'comporta igual por la misma razón. */) AS _col_0) OR (prospectos.archivado_en '
                            'IS NULL AND ((SELECT COALESCE((SELECT PG_JSON_TIENE(usuarios_sistema.permisos, '
                            "'*') OR PG_JSON_TIENE(usuarios_sistema.permisos, 'ventas.equipo') AS _col_0 "
                            'FROM usuarios_sistema AS usuarios_sistema WHERE usuarios_sistema.auth_id = '
                            'AUTH_UID() AND usuarios_sistema.activo LIMIT 1), TRUE /* Sin legajo se permite, '
                            'igual que el resto de los ayudantes: una */ /* instalación sin la migración 66 '
                            'no puede quedarse sin módulo comercial. */) AS _col_0) OR '
                            'prospectos.vendedor_id = (SELECT usuarios_sistema.id AS id FROM '
                            'usuarios_sistema AS usuarios_sistema WHERE usuarios_sistema.auth_id = '
                            'AUTH_UID() AND usuarios_sistema.activo LIMIT 1) OR prospectos.creado_por = '
                            '(SELECT usuarios_sistema.id AS id FROM usuarios_sistema AS usuarios_sistema '
                            'WHERE usuarios_sistema.auth_id = AUTH_UID() AND usuarios_sistema.activo LIMIT '
                            '1)))))) AS prospectos))',
                  'insert': "((SELECT COALESCE((SELECT PG_JSON_TIENE(usuarios_sistema.permisos, '*') OR "
                            "PG_JSON_TIENE(usuarios_sistema.permisos, 'clientes.cartera') AS _col_0 FROM "
                            'usuarios_sistema AS usuarios_sistema WHERE usuarios_sistema.auth_id = '
                            'AUTH_UID() AND usuarios_sistema.activo LIMIT 1), TRUE /* Sin legajo no se '
                            'bloquea a nadie: es una instalación que todavía no */ /* corrió la migración '
                            '66, y cerrarle el paso la dejaría inutilizable de */ /* golpe. El frente se '
                            'comporta igual por la misma razón. */) AS _col_0) OR cotizaciones.vendedor_id = '
                            '(SELECT usuarios_sistema.id AS id FROM usuarios_sistema AS usuarios_sistema '
                            'WHERE usuarios_sistema.auth_id = AUTH_UID() AND usuarios_sistema.activo LIMIT '
                            '1) OR cotizaciones.creado_por = (SELECT usuarios_sistema.id AS id FROM '
                            'usuarios_sistema AS usuarios_sistema WHERE usuarios_sistema.auth_id = '
                            'AUTH_UID() AND usuarios_sistema.activo LIMIT 1))',
                  'select': "((SELECT COALESCE((SELECT PG_JSON_TIENE(usuarios_sistema.permisos, '*') OR "
                            "PG_JSON_TIENE(usuarios_sistema.permisos, 'clientes.cartera') AS _col_0 FROM "
                            'usuarios_sistema AS usuarios_sistema WHERE usuarios_sistema.auth_id = '
                            'AUTH_UID() AND usuarios_sistema.activo LIMIT 1), TRUE /* Sin legajo no se '
                            'bloquea a nadie: es una instalación que todavía no */ /* corrió la migración '
                            '66, y cerrarle el paso la dejaría inutilizable de */ /* golpe. El frente se '
                            'comporta igual por la misma razón. */) AS _col_0) OR cotizaciones.vendedor_id = '
                            '(SELECT usuarios_sistema.id AS id FROM usuarios_sistema AS usuarios_sistema '
                            'WHERE usuarios_sistema.auth_id = AUTH_UID() AND usuarios_sistema.activo LIMIT '
                            '1) OR cotizaciones.creado_por = (SELECT usuarios_sistema.id AS id FROM '
                            'usuarios_sistema AS usuarios_sistema WHERE usuarios_sistema.auth_id = '
                            'AUTH_UID() AND usuarios_sistema.activo LIMIT 1) OR cotizaciones.prospecto_id IN '
                            '(SELECT prospectos.id AS id FROM (SELECT prospectos.id AS id, '
                            'PG_DESCIFRAR(prospectos.nombre) AS nombre, '
                            'PG_DESCIFRAR(prospectos.identificacion) AS identificacion, '
                            'PG_DESCIFRAR(prospectos.telefono) AS telefono, '
                            'PG_DESCIFRAR(prospectos.telefono_whatsapp) AS telefono_whatsapp, '
                            'PG_DESCIFRAR(prospectos.email) AS email, PG_DESCIFRAR(prospectos.direccion) AS '
                            'direccion, PG_DESCIFRAR(prospectos.referencia) AS referencia, prospectos.sector '
                            'AS sector, prospectos.canton AS canton, prospectos.latitud AS latitud, '
                            'prospectos.longitud AS longitud, prospectos.plan_id AS plan_id, '
                            'prospectos.origen AS origen, prospectos.estado AS estado, '
                            'prospectos.motivo_perdida AS motivo_perdida, prospectos.vendedor_id AS '
                            'vendedor_id, prospectos.cobertura AS cobertura, prospectos.nap_id AS nap_id, '
                            'prospectos.distancia_nodo_m AS distancia_nodo_m, prospectos.proxima_accion AS '
                            'proxima_accion, prospectos.instalacion_id AS instalacion_id, '
                            'prospectos.cliente_id AS cliente_id, prospectos.notas AS notas, '
                            'prospectos.creado_por AS creado_por, prospectos.creado_en AS creado_en, '
                            'prospectos.actualizado_en AS actualizado_en, prospectos.archivado_en AS '
                            'archivado_en, prospectos.ganado_en AS ganado_en, prospectos.promocion_id AS '
                            'promocion_id, prospectos.tipo_operacion AS tipo_operacion FROM prospectos AS '
                            'prospectos WHERE NOT RLS_ACTIVA() OR (((SELECT COALESCE((SELECT '
                            "PG_JSON_TIENE(usuarios_sistema.permisos, '*') OR "
                            "PG_JSON_TIENE(usuarios_sistema.permisos, 'clientes.cartera') AS _col_0 FROM "
                            'usuarios_sistema AS usuarios_sistema WHERE usuarios_sistema.auth_id = '
                            'AUTH_UID() AND usuarios_sistema.activo LIMIT 1), TRUE /* Sin legajo no se '
                            'bloquea a nadie: es una instalación que todavía no */ /* corrió la migración '
                            '66, y cerrarle el paso la dejaría inutilizable de */ /* golpe. El frente se '
                            'comporta igual por la misma razón. */) AS _col_0) OR (prospectos.archivado_en '
                            'IS NULL AND ((SELECT COALESCE((SELECT PG_JSON_TIENE(usuarios_sistema.permisos, '
                            "'*') OR PG_JSON_TIENE(usuarios_sistema.permisos, 'ventas.equipo') AS _col_0 "
                            'FROM usuarios_sistema AS usuarios_sistema WHERE usuarios_sistema.auth_id = '
                            'AUTH_UID() AND usuarios_sistema.activo LIMIT 1), TRUE /* Sin legajo se permite, '
                            'igual que el resto de los ayudantes: una */ /* instalación sin la migración 66 '
                            'no puede quedarse sin módulo comercial. */) AS _col_0) OR '
                            'prospectos.vendedor_id = (SELECT usuarios_sistema.id AS id FROM '
                            'usuarios_sistema AS usuarios_sistema WHERE usuarios_sistema.auth_id = '
                            'AUTH_UID() AND usuarios_sistema.activo LIMIT 1) OR prospectos.creado_por = '
                            '(SELECT usuarios_sistema.id AS id FROM usuarios_sistema AS usuarios_sistema '
                            'WHERE usuarios_sistema.auth_id = AUTH_UID() AND usuarios_sistema.activo LIMIT '
                            '1)))) OR ((SELECT COALESCE((SELECT PG_JSON_TIENE(usuarios_sistema.permisos, '
                            "'*') OR PG_JSON_TIENE(usuarios_sistema.permisos, 'clientes.cartera') AS _col_0 "
                            'FROM usuarios_sistema AS usuarios_sistema WHERE usuarios_sistema.auth_id = '
                            'AUTH_UID() AND usuarios_sistema.activo LIMIT 1), TRUE /* Sin legajo no se '
                            'bloquea a nadie: es una instalación que todavía no */ /* corrió la migración '
                            '66, y cerrarle el paso la dejaría inutilizable de */ /* golpe. El frente se '
                            'comporta igual por la misma razón. */) AS _col_0) OR (prospectos.archivado_en '
                            'IS NULL AND ((SELECT COALESCE((SELECT PG_JSON_TIENE(usuarios_sistema.permisos, '
                            "'*') OR PG_JSON_TIENE(usuarios_sistema.permisos, 'ventas.equipo') AS _col_0 "
                            'FROM usuarios_sistema AS usuarios_sistema WHERE usuarios_sistema.auth_id = '
                            'AUTH_UID() AND usuarios_sistema.activo LIMIT 1), TRUE /* Sin legajo se permite, '
                            'igual que el resto de los ayudantes: una */ /* instalación sin la migración 66 '
                            'no puede quedarse sin módulo comercial. */) AS _col_0) OR '
                            'prospectos.vendedor_id = (SELECT usuarios_sistema.id AS id FROM '
                            'usuarios_sistema AS usuarios_sistema WHERE usuarios_sistema.auth_id = '
                            'AUTH_UID() AND usuarios_sistema.activo LIMIT 1) OR prospectos.creado_por = '
                            '(SELECT usuarios_sistema.id AS id FROM usuarios_sistema AS usuarios_sistema '
                            'WHERE usuarios_sistema.auth_id = AUTH_UID() AND usuarios_sistema.activo LIMIT '
                            '1)))))) AS prospectos))',
                  'update': "((SELECT COALESCE((SELECT PG_JSON_TIENE(usuarios_sistema.permisos, '*') OR "
                            "PG_JSON_TIENE(usuarios_sistema.permisos, 'clientes.cartera') AS _col_0 FROM "
                            'usuarios_sistema AS usuarios_sistema WHERE usuarios_sistema.auth_id = '
                            'AUTH_UID() AND usuarios_sistema.activo LIMIT 1), TRUE /* Sin legajo no se '
                            'bloquea a nadie: es una instalación que todavía no */ /* corrió la migración '
                            '66, y cerrarle el paso la dejaría inutilizable de */ /* golpe. El frente se '
                            'comporta igual por la misma razón. */) AS _col_0) OR cotizaciones.vendedor_id = '
                            '(SELECT usuarios_sistema.id AS id FROM usuarios_sistema AS usuarios_sistema '
                            'WHERE usuarios_sistema.auth_id = AUTH_UID() AND usuarios_sistema.activo LIMIT '
                            '1) OR cotizaciones.creado_por = (SELECT usuarios_sistema.id AS id FROM '
                            'usuarios_sistema AS usuarios_sistema WHERE usuarios_sistema.auth_id = '
                            'AUTH_UID() AND usuarios_sistema.activo LIMIT 1) OR cotizaciones.prospecto_id IN '
                            '(SELECT prospectos.id AS id FROM (SELECT prospectos.id AS id, '
                            'PG_DESCIFRAR(prospectos.nombre) AS nombre, '
                            'PG_DESCIFRAR(prospectos.identificacion) AS identificacion, '
                            'PG_DESCIFRAR(prospectos.telefono) AS telefono, '
                            'PG_DESCIFRAR(prospectos.telefono_whatsapp) AS telefono_whatsapp, '
                            'PG_DESCIFRAR(prospectos.email) AS email, PG_DESCIFRAR(prospectos.direccion) AS '
                            'direccion, PG_DESCIFRAR(prospectos.referencia) AS referencia, prospectos.sector '
                            'AS sector, prospectos.canton AS canton, prospectos.latitud AS latitud, '
                            'prospectos.longitud AS longitud, prospectos.plan_id AS plan_id, '
                            'prospectos.origen AS origen, prospectos.estado AS estado, '
                            'prospectos.motivo_perdida AS motivo_perdida, prospectos.vendedor_id AS '
                            'vendedor_id, prospectos.cobertura AS cobertura, prospectos.nap_id AS nap_id, '
                            'prospectos.distancia_nodo_m AS distancia_nodo_m, prospectos.proxima_accion AS '
                            'proxima_accion, prospectos.instalacion_id AS instalacion_id, '
                            'prospectos.cliente_id AS cliente_id, prospectos.notas AS notas, '
                            'prospectos.creado_por AS creado_por, prospectos.creado_en AS creado_en, '
                            'prospectos.actualizado_en AS actualizado_en, prospectos.archivado_en AS '
                            'archivado_en, prospectos.ganado_en AS ganado_en, prospectos.promocion_id AS '
                            'promocion_id, prospectos.tipo_operacion AS tipo_operacion FROM prospectos AS '
                            'prospectos WHERE NOT RLS_ACTIVA() OR (((SELECT COALESCE((SELECT '
                            "PG_JSON_TIENE(usuarios_sistema.permisos, '*') OR "
                            "PG_JSON_TIENE(usuarios_sistema.permisos, 'clientes.cartera') AS _col_0 FROM "
                            'usuarios_sistema AS usuarios_sistema WHERE usuarios_sistema.auth_id = '
                            'AUTH_UID() AND usuarios_sistema.activo LIMIT 1), TRUE /* Sin legajo no se '
                            'bloquea a nadie: es una instalación que todavía no */ /* corrió la migración '
                            '66, y cerrarle el paso la dejaría inutilizable de */ /* golpe. El frente se '
                            'comporta igual por la misma razón. */) AS _col_0) OR (prospectos.archivado_en '
                            'IS NULL AND ((SELECT COALESCE((SELECT PG_JSON_TIENE(usuarios_sistema.permisos, '
                            "'*') OR PG_JSON_TIENE(usuarios_sistema.permisos, 'ventas.equipo') AS _col_0 "
                            'FROM usuarios_sistema AS usuarios_sistema WHERE usuarios_sistema.auth_id = '
                            'AUTH_UID() AND usuarios_sistema.activo LIMIT 1), TRUE /* Sin legajo se permite, '
                            'igual que el resto de los ayudantes: una */ /* instalación sin la migración 66 '
                            'no puede quedarse sin módulo comercial. */) AS _col_0) OR '
                            'prospectos.vendedor_id = (SELECT usuarios_sistema.id AS id FROM '
                            'usuarios_sistema AS usuarios_sistema WHERE usuarios_sistema.auth_id = '
                            'AUTH_UID() AND usuarios_sistema.activo LIMIT 1) OR prospectos.creado_por = '
                            '(SELECT usuarios_sistema.id AS id FROM usuarios_sistema AS usuarios_sistema '
                            'WHERE usuarios_sistema.auth_id = AUTH_UID() AND usuarios_sistema.activo LIMIT '
                            '1)))) OR ((SELECT COALESCE((SELECT PG_JSON_TIENE(usuarios_sistema.permisos, '
                            "'*') OR PG_JSON_TIENE(usuarios_sistema.permisos, 'clientes.cartera') AS _col_0 "
                            'FROM usuarios_sistema AS usuarios_sistema WHERE usuarios_sistema.auth_id = '
                            'AUTH_UID() AND usuarios_sistema.activo LIMIT 1), TRUE /* Sin legajo no se '
                            'bloquea a nadie: es una instalación que todavía no */ /* corrió la migración '
                            '66, y cerrarle el paso la dejaría inutilizable de */ /* golpe. El frente se '
                            'comporta igual por la misma razón. */) AS _col_0) OR (prospectos.archivado_en '
                            'IS NULL AND ((SELECT COALESCE((SELECT PG_JSON_TIENE(usuarios_sistema.permisos, '
                            "'*') OR PG_JSON_TIENE(usuarios_sistema.permisos, 'ventas.equipo') AS _col_0 "
                            'FROM usuarios_sistema AS usuarios_sistema WHERE usuarios_sistema.auth_id = '
                            'AUTH_UID() AND usuarios_sistema.activo LIMIT 1), TRUE /* Sin legajo se permite, '
                            'igual que el resto de los ayudantes: una */ /* instalación sin la migración 66 '
                            'no puede quedarse sin módulo comercial. */) AS _col_0) OR '
                            'prospectos.vendedor_id = (SELECT usuarios_sistema.id AS id FROM '
                            'usuarios_sistema AS usuarios_sistema WHERE usuarios_sistema.auth_id = '
                            'AUTH_UID() AND usuarios_sistema.activo LIMIT 1) OR prospectos.creado_por = '
                            '(SELECT usuarios_sistema.id AS id FROM usuarios_sistema AS usuarios_sistema '
                            'WHERE usuarios_sistema.auth_id = AUTH_UID() AND usuarios_sistema.activo LIMIT '
                            '1)))))) AS prospectos))',
                  'update_check': "((SELECT COALESCE((SELECT PG_JSON_TIENE(usuarios_sistema.permisos, '*') "
                                  "OR PG_JSON_TIENE(usuarios_sistema.permisos, 'clientes.cartera') AS _col_0 "
                                  'FROM usuarios_sistema AS usuarios_sistema WHERE usuarios_sistema.auth_id '
                                  '= AUTH_UID() AND usuarios_sistema.activo LIMIT 1), TRUE /* Sin legajo no '
                                  'se bloquea a nadie: es una instalación que todavía no */ /* corrió la '
                                  'migración 66, y cerrarle el paso la dejaría inutilizable de */ /* golpe. '
                                  'El frente se comporta igual por la misma razón. */) AS _col_0) OR '
                                  'cotizaciones.vendedor_id = (SELECT usuarios_sistema.id AS id FROM '
                                  'usuarios_sistema AS usuarios_sistema WHERE usuarios_sistema.auth_id = '
                                  'AUTH_UID() AND usuarios_sistema.activo LIMIT 1) OR '
                                  'cotizaciones.creado_por = (SELECT usuarios_sistema.id AS id FROM '
                                  'usuarios_sistema AS usuarios_sistema WHERE usuarios_sistema.auth_id = '
                                  'AUTH_UID() AND usuarios_sistema.activo LIMIT 1))'},
 'cuadrilla_miembros': {'delete': None, 'insert': None, 'select': None, 'update': None, 'update_check': None},
 'cuadrilla_reemplazos': {'delete': '((SELECT EXISTS(SELECT 1 AS "1" FROM usuarios_sistema AS '
                                    'usuarios_sistema WHERE usuarios_sistema.auth_id = AUTH_UID() AND '
                                    "usuarios_sistema.activo AND usuarios_sistema.rol IN ('super_admin', "
                                    "'admin', 'jefe_tecnico')) AS _col_0))",
                          'insert': '((SELECT EXISTS(SELECT 1 AS "1" FROM usuarios_sistema AS '
                                    'usuarios_sistema WHERE usuarios_sistema.auth_id = AUTH_UID() AND '
                                    "usuarios_sistema.activo AND usuarios_sistema.rol IN ('super_admin', "
                                    "'admin', 'jefe_tecnico')) AS _col_0))",
                          'select': None,
                          'update': '((SELECT EXISTS(SELECT 1 AS "1" FROM usuarios_sistema AS '
                                    'usuarios_sistema WHERE usuarios_sistema.auth_id = AUTH_UID() AND '
                                    "usuarios_sistema.activo AND usuarios_sistema.rol IN ('super_admin', "
                                    "'admin', 'jefe_tecnico')) AS _col_0))",
                          'update_check': '((SELECT EXISTS(SELECT 1 AS "1" FROM usuarios_sistema AS '
                                          'usuarios_sistema WHERE usuarios_sistema.auth_id = AUTH_UID() AND '
                                          'usuarios_sistema.activo AND usuarios_sistema.rol IN '
                                          "('super_admin', 'admin', 'jefe_tecnico')) AS _col_0))"},
 'cuadrillas': {'delete': None, 'insert': None, 'select': None, 'update': None, 'update_check': None},
 'cuentas_pago': {'delete': None, 'insert': None, 'select': None, 'update': None, 'update_check': None},
 'document_items': {'delete': None, 'insert': None, 'select': None, 'update': None, 'update_check': None},
 'documentos': {'delete': None, 'insert': None, 'select': None, 'update': None, 'update_check': None},
 'electronic_documents': {'delete': None,
                          'insert': None,
                          'select': None,
                          'update': None,
                          'update_check': None},
 'entrega_items': {'delete': '(FALSE)',
                   'insert': '(FALSE)',
                   'select': '(EXISTS(SELECT 1 AS "1" FROM (SELECT entregas_inventario.id AS id, '
                             'entregas_inventario.numero AS numero, entregas_inventario.entrega_id AS '
                             'entrega_id, entregas_inventario.almacen_origen AS almacen_origen, '
                             'entregas_inventario.recibe_id AS recibe_id, '
                             'entregas_inventario.almacen_destino AS almacen_destino, '
                             'entregas_inventario.estado AS estado, entregas_inventario.firma_b64 AS '
                             'firma_b64, entregas_inventario.firmado_en AS firmado_en, '
                             'entregas_inventario.notas AS notas, entregas_inventario.motivo_anulacion AS '
                             'motivo_anulacion, entregas_inventario.creado_en AS creado_en, '
                             'entregas_inventario.firma_entrega_b64 AS firma_entrega_b64, '
                             'entregas_inventario.firma_entrega_en AS firma_entrega_en FROM '
                             'entregas_inventario AS entregas_inventario WHERE NOT RLS_ACTIVA() OR (((SELECT '
                             "COALESCE((SELECT PG_JSON_TIENE(usuarios_sistema.permisos, '*') OR "
                             "PG_JSON_TIENE(usuarios_sistema.permisos, 'retiros.gestionar') OR "
                             "PG_JSON_TIENE(usuarios_sistema.permisos, 'inventario.transferir') AS _col_0 "
                             'FROM usuarios_sistema AS usuarios_sistema WHERE usuarios_sistema.auth_id = '
                             'AUTH_UID() AND usuarios_sistema.activo LIMIT 1) /* `inventario.transferir` '
                             'también sirve: es el permiso de quien despacha */ /* material a los técnicos, '
                             'y un equipo que vuelve es material que */ /* entra. Sin esto, toda instalación '
                             'que ya funciona tendría que editar */ /* sus roles antes de poder cerrar la '
                             'primera orden. */, TRUE) AS _col_0) OR entregas_inventario.entrega_id = '
                             '(SELECT usuarios_sistema.id AS id FROM usuarios_sistema AS usuarios_sistema '
                             'WHERE usuarios_sistema.auth_id = AUTH_UID() AND usuarios_sistema.activo LIMIT '
                             '1) OR entregas_inventario.recibe_id = (SELECT usuarios_sistema.id AS id FROM '
                             'usuarios_sistema AS usuarios_sistema WHERE usuarios_sistema.auth_id = '
                             'AUTH_UID() AND usuarios_sistema.activo LIMIT 1)) OR (FALSE))) AS e WHERE e.id '
                             '= entrega_items.entrega_id AND ((SELECT COALESCE((SELECT '
                             "PG_JSON_TIENE(usuarios_sistema.permisos, '*') OR "
                             "PG_JSON_TIENE(usuarios_sistema.permisos, 'retiros.gestionar') OR "
                             "PG_JSON_TIENE(usuarios_sistema.permisos, 'inventario.transferir') AS _col_0 "
                             'FROM usuarios_sistema AS usuarios_sistema WHERE usuarios_sistema.auth_id = '
                             'AUTH_UID() AND usuarios_sistema.activo LIMIT 1) /* `inventario.transferir` '
                             'también sirve: es el permiso de quien despacha */ /* material a los técnicos, '
                             'y un equipo que vuelve es material que */ /* entra. Sin esto, toda instalación '
                             'que ya funciona tendría que editar */ /* sus roles antes de poder cerrar la '
                             'primera orden. */, TRUE) AS _col_0) OR e.entrega_id = (SELECT '
                             'usuarios_sistema.id AS id FROM usuarios_sistema AS usuarios_sistema WHERE '
                             'usuarios_sistema.auth_id = AUTH_UID() AND usuarios_sistema.activo LIMIT 1) OR '
                             'e.recibe_id = (SELECT usuarios_sistema.id AS id FROM usuarios_sistema AS '
                             'usuarios_sistema WHERE usuarios_sistema.auth_id = AUTH_UID() AND '
                             'usuarios_sistema.activo LIMIT 1)))) OR (FALSE)',
                   'update': '(FALSE)',
                   'update_check': '(FALSE)'},
 'entregas_inventario': {'delete': '(FALSE)',
                         'insert': '(FALSE)',
                         'select': "((SELECT COALESCE((SELECT PG_JSON_TIENE(usuarios_sistema.permisos, '*') "
                                   "OR PG_JSON_TIENE(usuarios_sistema.permisos, 'retiros.gestionar') OR "
                                   "PG_JSON_TIENE(usuarios_sistema.permisos, 'inventario.transferir') AS "
                                   '_col_0 FROM usuarios_sistema AS usuarios_sistema WHERE '
                                   'usuarios_sistema.auth_id = AUTH_UID() AND usuarios_sistema.activo LIMIT '
                                   '1) /* `inventario.transferir` también sirve: es el permiso de quien '
                                   'despacha */ /* material a los técnicos, y un equipo que vuelve es '
                                   'material que */ /* entra. Sin esto, toda instalación que ya funciona '
                                   'tendría que editar */ /* sus roles antes de poder cerrar la primera '
                                   'orden. */, TRUE) AS _col_0) OR entregas_inventario.entrega_id = (SELECT '
                                   'usuarios_sistema.id AS id FROM usuarios_sistema AS usuarios_sistema '
                                   'WHERE usuarios_sistema.auth_id = AUTH_UID() AND usuarios_sistema.activo '
                                   'LIMIT 1) OR entregas_inventario.recibe_id = (SELECT usuarios_sistema.id '
                                   'AS id FROM usuarios_sistema AS usuarios_sistema WHERE '
                                   'usuarios_sistema.auth_id = AUTH_UID() AND usuarios_sistema.activo LIMIT '
                                   '1)) OR (FALSE)',
                         'update': '(FALSE)',
                         'update_check': '(FALSE)'},
 'equipos': {'delete': None, 'insert': None, 'select': None, 'update': None, 'update_check': None},
 'equipos_cliente': {'delete': None, 'insert': None, 'select': None, 'update': None, 'update_check': None},
 'existencias': {'delete': None, 'insert': None, 'select': None, 'update': None, 'update_check': None},
 'expediente_documentos': {'delete': '(expediente_documentos.expediente_id IN (SELECT expedientes.id AS id '
                                     'FROM (SELECT expedientes.id AS id, expedientes.prospecto_id AS '
                                     'prospecto_id, expedientes.contrato_id AS contrato_id, '
                                     'expedientes.instalacion_id AS instalacion_id, expedientes.cliente_id '
                                     'AS cliente_id, expedientes.datos_confirmados_en AS '
                                     'datos_confirmados_en, expedientes.latitud AS latitud, '
                                     'expedientes.longitud AS longitud, expedientes.precision_m AS '
                                     'precision_m, expedientes.ubicacion_origen AS ubicacion_origen, '
                                     'expedientes.ubicacion_en AS ubicacion_en, expedientes.ubicacion_por AS '
                                     'ubicacion_por, expedientes.estado AS estado, expedientes.enviado_en AS '
                                     'enviado_en, expedientes.notas AS notas, expedientes.creado_por AS '
                                     'creado_por, expedientes.creado_en AS creado_en, '
                                     'expedientes.actualizado_en AS actualizado_en FROM expedientes AS '
                                     'expedientes WHERE NOT RLS_ACTIVA() OR ((expedientes.prospecto_id IN '
                                     '(SELECT prospectos.id AS id FROM (SELECT prospectos.id AS id, '
                                     'PG_DESCIFRAR(prospectos.nombre) AS nombre, '
                                     'PG_DESCIFRAR(prospectos.identificacion) AS identificacion, '
                                     'PG_DESCIFRAR(prospectos.telefono) AS telefono, '
                                     'PG_DESCIFRAR(prospectos.telefono_whatsapp) AS telefono_whatsapp, '
                                     'PG_DESCIFRAR(prospectos.email) AS email, '
                                     'PG_DESCIFRAR(prospectos.direccion) AS direccion, '
                                     'PG_DESCIFRAR(prospectos.referencia) AS referencia, prospectos.sector '
                                     'AS sector, prospectos.canton AS canton, prospectos.latitud AS latitud, '
                                     'prospectos.longitud AS longitud, prospectos.plan_id AS plan_id, '
                                     'prospectos.origen AS origen, prospectos.estado AS estado, '
                                     'prospectos.motivo_perdida AS motivo_perdida, prospectos.vendedor_id AS '
                                     'vendedor_id, prospectos.cobertura AS cobertura, prospectos.nap_id AS '
                                     'nap_id, prospectos.distancia_nodo_m AS distancia_nodo_m, '
                                     'prospectos.proxima_accion AS proxima_accion, prospectos.instalacion_id '
                                     'AS instalacion_id, prospectos.cliente_id AS cliente_id, '
                                     'prospectos.notas AS notas, prospectos.creado_por AS creado_por, '
                                     'prospectos.creado_en AS creado_en, prospectos.actualizado_en AS '
                                     'actualizado_en, prospectos.archivado_en AS archivado_en, '
                                     'prospectos.ganado_en AS ganado_en, prospectos.promocion_id AS '
                                     'promocion_id, prospectos.tipo_operacion AS tipo_operacion FROM '
                                     'prospectos AS prospectos WHERE NOT RLS_ACTIVA() OR (((SELECT '
                                     "COALESCE((SELECT PG_JSON_TIENE(usuarios_sistema.permisos, '*') OR "
                                     "PG_JSON_TIENE(usuarios_sistema.permisos, 'clientes.cartera') AS _col_0 "
                                     'FROM usuarios_sistema AS usuarios_sistema WHERE '
                                     'usuarios_sistema.auth_id = AUTH_UID() AND usuarios_sistema.activo '
                                     'LIMIT 1), TRUE /* Sin legajo no se bloquea a nadie: es una instalación '
                                     'que todavía no */ /* corrió la migración 66, y cerrarle el paso la '
                                     'dejaría inutilizable de */ /* golpe. El frente se comporta igual por '
                                     'la misma razón. */) AS _col_0) OR (prospectos.archivado_en IS NULL AND '
                                     '((SELECT COALESCE((SELECT PG_JSON_TIENE(usuarios_sistema.permisos, '
                                     "'*') OR PG_JSON_TIENE(usuarios_sistema.permisos, 'ventas.equipo') AS "
                                     '_col_0 FROM usuarios_sistema AS usuarios_sistema WHERE '
                                     'usuarios_sistema.auth_id = AUTH_UID() AND usuarios_sistema.activo '
                                     'LIMIT 1), TRUE /* Sin legajo se permite, igual que el resto de los '
                                     'ayudantes: una */ /* instalación sin la migración 66 no puede quedarse '
                                     'sin módulo comercial. */) AS _col_0) OR prospectos.vendedor_id = '
                                     '(SELECT usuarios_sistema.id AS id FROM usuarios_sistema AS '
                                     'usuarios_sistema WHERE usuarios_sistema.auth_id = AUTH_UID() AND '
                                     'usuarios_sistema.activo LIMIT 1) OR prospectos.creado_por = (SELECT '
                                     'usuarios_sistema.id AS id FROM usuarios_sistema AS usuarios_sistema '
                                     'WHERE usuarios_sistema.auth_id = AUTH_UID() AND '
                                     'usuarios_sistema.activo LIMIT 1)))) OR ((SELECT COALESCE((SELECT '
                                     "PG_JSON_TIENE(usuarios_sistema.permisos, '*') OR "
                                     "PG_JSON_TIENE(usuarios_sistema.permisos, 'clientes.cartera') AS _col_0 "
                                     'FROM usuarios_sistema AS usuarios_sistema WHERE '
                                     'usuarios_sistema.auth_id = AUTH_UID() AND usuarios_sistema.activo '
                                     'LIMIT 1), TRUE /* Sin legajo no se bloquea a nadie: es una instalación '
                                     'que todavía no */ /* corrió la migración 66, y cerrarle el paso la '
                                     'dejaría inutilizable de */ /* golpe. El frente se comporta igual por '
                                     'la misma razón. */) AS _col_0) OR (prospectos.archivado_en IS NULL AND '
                                     '((SELECT COALESCE((SELECT PG_JSON_TIENE(usuarios_sistema.permisos, '
                                     "'*') OR PG_JSON_TIENE(usuarios_sistema.permisos, 'ventas.equipo') AS "
                                     '_col_0 FROM usuarios_sistema AS usuarios_sistema WHERE '
                                     'usuarios_sistema.auth_id = AUTH_UID() AND usuarios_sistema.activo '
                                     'LIMIT 1), TRUE /* Sin legajo se permite, igual que el resto de los '
                                     'ayudantes: una */ /* instalación sin la migración 66 no puede quedarse '
                                     'sin módulo comercial. */) AS _col_0) OR prospectos.vendedor_id = '
                                     '(SELECT usuarios_sistema.id AS id FROM usuarios_sistema AS '
                                     'usuarios_sistema WHERE usuarios_sistema.auth_id = AUTH_UID() AND '
                                     'usuarios_sistema.activo LIMIT 1) OR prospectos.creado_por = (SELECT '
                                     'usuarios_sistema.id AS id FROM usuarios_sistema AS usuarios_sistema '
                                     'WHERE usuarios_sistema.auth_id = AUTH_UID() AND '
                                     'usuarios_sistema.activo LIMIT 1)))))) AS prospectos)))) AS '
                                     'expedientes))',
                           'insert': '(expediente_documentos.expediente_id IN (SELECT expedientes.id AS id '
                                     'FROM (SELECT expedientes.id AS id, expedientes.prospecto_id AS '
                                     'prospecto_id, expedientes.contrato_id AS contrato_id, '
                                     'expedientes.instalacion_id AS instalacion_id, expedientes.cliente_id '
                                     'AS cliente_id, expedientes.datos_confirmados_en AS '
                                     'datos_confirmados_en, expedientes.latitud AS latitud, '
                                     'expedientes.longitud AS longitud, expedientes.precision_m AS '
                                     'precision_m, expedientes.ubicacion_origen AS ubicacion_origen, '
                                     'expedientes.ubicacion_en AS ubicacion_en, expedientes.ubicacion_por AS '
                                     'ubicacion_por, expedientes.estado AS estado, expedientes.enviado_en AS '
                                     'enviado_en, expedientes.notas AS notas, expedientes.creado_por AS '
                                     'creado_por, expedientes.creado_en AS creado_en, '
                                     'expedientes.actualizado_en AS actualizado_en FROM expedientes AS '
                                     'expedientes WHERE NOT RLS_ACTIVA() OR ((expedientes.prospecto_id IN '
                                     '(SELECT prospectos.id AS id FROM (SELECT prospectos.id AS id, '
                                     'PG_DESCIFRAR(prospectos.nombre) AS nombre, '
                                     'PG_DESCIFRAR(prospectos.identificacion) AS identificacion, '
                                     'PG_DESCIFRAR(prospectos.telefono) AS telefono, '
                                     'PG_DESCIFRAR(prospectos.telefono_whatsapp) AS telefono_whatsapp, '
                                     'PG_DESCIFRAR(prospectos.email) AS email, '
                                     'PG_DESCIFRAR(prospectos.direccion) AS direccion, '
                                     'PG_DESCIFRAR(prospectos.referencia) AS referencia, prospectos.sector '
                                     'AS sector, prospectos.canton AS canton, prospectos.latitud AS latitud, '
                                     'prospectos.longitud AS longitud, prospectos.plan_id AS plan_id, '
                                     'prospectos.origen AS origen, prospectos.estado AS estado, '
                                     'prospectos.motivo_perdida AS motivo_perdida, prospectos.vendedor_id AS '
                                     'vendedor_id, prospectos.cobertura AS cobertura, prospectos.nap_id AS '
                                     'nap_id, prospectos.distancia_nodo_m AS distancia_nodo_m, '
                                     'prospectos.proxima_accion AS proxima_accion, prospectos.instalacion_id '
                                     'AS instalacion_id, prospectos.cliente_id AS cliente_id, '
                                     'prospectos.notas AS notas, prospectos.creado_por AS creado_por, '
                                     'prospectos.creado_en AS creado_en, prospectos.actualizado_en AS '
                                     'actualizado_en, prospectos.archivado_en AS archivado_en, '
                                     'prospectos.ganado_en AS ganado_en, prospectos.promocion_id AS '
                                     'promocion_id, prospectos.tipo_operacion AS tipo_operacion FROM '
                                     'prospectos AS prospectos WHERE NOT RLS_ACTIVA() OR (((SELECT '
                                     "COALESCE((SELECT PG_JSON_TIENE(usuarios_sistema.permisos, '*') OR "
                                     "PG_JSON_TIENE(usuarios_sistema.permisos, 'clientes.cartera') AS _col_0 "
                                     'FROM usuarios_sistema AS usuarios_sistema WHERE '
                                     'usuarios_sistema.auth_id = AUTH_UID() AND usuarios_sistema.activo '
                                     'LIMIT 1), TRUE /* Sin legajo no se bloquea a nadie: es una instalación '
                                     'que todavía no */ /* corrió la migración 66, y cerrarle el paso la '
                                     'dejaría inutilizable de */ /* golpe. El frente se comporta igual por '
                                     'la misma razón. */) AS _col_0) OR (prospectos.archivado_en IS NULL AND '
                                     '((SELECT COALESCE((SELECT PG_JSON_TIENE(usuarios_sistema.permisos, '
                                     "'*') OR PG_JSON_TIENE(usuarios_sistema.permisos, 'ventas.equipo') AS "
                                     '_col_0 FROM usuarios_sistema AS usuarios_sistema WHERE '
                                     'usuarios_sistema.auth_id = AUTH_UID() AND usuarios_sistema.activo '
                                     'LIMIT 1), TRUE /* Sin legajo se permite, igual que el resto de los '
                                     'ayudantes: una */ /* instalación sin la migración 66 no puede quedarse '
                                     'sin módulo comercial. */) AS _col_0) OR prospectos.vendedor_id = '
                                     '(SELECT usuarios_sistema.id AS id FROM usuarios_sistema AS '
                                     'usuarios_sistema WHERE usuarios_sistema.auth_id = AUTH_UID() AND '
                                     'usuarios_sistema.activo LIMIT 1) OR prospectos.creado_por = (SELECT '
                                     'usuarios_sistema.id AS id FROM usuarios_sistema AS usuarios_sistema '
                                     'WHERE usuarios_sistema.auth_id = AUTH_UID() AND '
                                     'usuarios_sistema.activo LIMIT 1)))) OR ((SELECT COALESCE((SELECT '
                                     "PG_JSON_TIENE(usuarios_sistema.permisos, '*') OR "
                                     "PG_JSON_TIENE(usuarios_sistema.permisos, 'clientes.cartera') AS _col_0 "
                                     'FROM usuarios_sistema AS usuarios_sistema WHERE '
                                     'usuarios_sistema.auth_id = AUTH_UID() AND usuarios_sistema.activo '
                                     'LIMIT 1), TRUE /* Sin legajo no se bloquea a nadie: es una instalación '
                                     'que todavía no */ /* corrió la migración 66, y cerrarle el paso la '
                                     'dejaría inutilizable de */ /* golpe. El frente se comporta igual por '
                                     'la misma razón. */) AS _col_0) OR (prospectos.archivado_en IS NULL AND '
                                     '((SELECT COALESCE((SELECT PG_JSON_TIENE(usuarios_sistema.permisos, '
                                     "'*') OR PG_JSON_TIENE(usuarios_sistema.permisos, 'ventas.equipo') AS "
                                     '_col_0 FROM usuarios_sistema AS usuarios_sistema WHERE '
                                     'usuarios_sistema.auth_id = AUTH_UID() AND usuarios_sistema.activo '
                                     'LIMIT 1), TRUE /* Sin legajo se permite, igual que el resto de los '
                                     'ayudantes: una */ /* instalación sin la migración 66 no puede quedarse '
                                     'sin módulo comercial. */) AS _col_0) OR prospectos.vendedor_id = '
                                     '(SELECT usuarios_sistema.id AS id FROM usuarios_sistema AS '
                                     'usuarios_sistema WHERE usuarios_sistema.auth_id = AUTH_UID() AND '
                                     'usuarios_sistema.activo LIMIT 1) OR prospectos.creado_por = (SELECT '
                                     'usuarios_sistema.id AS id FROM usuarios_sistema AS usuarios_sistema '
                                     'WHERE usuarios_sistema.auth_id = AUTH_UID() AND '
                                     'usuarios_sistema.activo LIMIT 1)))))) AS prospectos)))) AS '
                                     'expedientes))',
                           'select': '(expediente_documentos.expediente_id IN (SELECT expedientes.id AS id '
                                     'FROM (SELECT expedientes.id AS id, expedientes.prospecto_id AS '
                                     'prospecto_id, expedientes.contrato_id AS contrato_id, '
                                     'expedientes.instalacion_id AS instalacion_id, expedientes.cliente_id '
                                     'AS cliente_id, expedientes.datos_confirmados_en AS '
                                     'datos_confirmados_en, expedientes.latitud AS latitud, '
                                     'expedientes.longitud AS longitud, expedientes.precision_m AS '
                                     'precision_m, expedientes.ubicacion_origen AS ubicacion_origen, '
                                     'expedientes.ubicacion_en AS ubicacion_en, expedientes.ubicacion_por AS '
                                     'ubicacion_por, expedientes.estado AS estado, expedientes.enviado_en AS '
                                     'enviado_en, expedientes.notas AS notas, expedientes.creado_por AS '
                                     'creado_por, expedientes.creado_en AS creado_en, '
                                     'expedientes.actualizado_en AS actualizado_en FROM expedientes AS '
                                     'expedientes WHERE NOT RLS_ACTIVA() OR ((expedientes.prospecto_id IN '
                                     '(SELECT prospectos.id AS id FROM (SELECT prospectos.id AS id, '
                                     'PG_DESCIFRAR(prospectos.nombre) AS nombre, '
                                     'PG_DESCIFRAR(prospectos.identificacion) AS identificacion, '
                                     'PG_DESCIFRAR(prospectos.telefono) AS telefono, '
                                     'PG_DESCIFRAR(prospectos.telefono_whatsapp) AS telefono_whatsapp, '
                                     'PG_DESCIFRAR(prospectos.email) AS email, '
                                     'PG_DESCIFRAR(prospectos.direccion) AS direccion, '
                                     'PG_DESCIFRAR(prospectos.referencia) AS referencia, prospectos.sector '
                                     'AS sector, prospectos.canton AS canton, prospectos.latitud AS latitud, '
                                     'prospectos.longitud AS longitud, prospectos.plan_id AS plan_id, '
                                     'prospectos.origen AS origen, prospectos.estado AS estado, '
                                     'prospectos.motivo_perdida AS motivo_perdida, prospectos.vendedor_id AS '
                                     'vendedor_id, prospectos.cobertura AS cobertura, prospectos.nap_id AS '
                                     'nap_id, prospectos.distancia_nodo_m AS distancia_nodo_m, '
                                     'prospectos.proxima_accion AS proxima_accion, prospectos.instalacion_id '
                                     'AS instalacion_id, prospectos.cliente_id AS cliente_id, '
                                     'prospectos.notas AS notas, prospectos.creado_por AS creado_por, '
                                     'prospectos.creado_en AS creado_en, prospectos.actualizado_en AS '
                                     'actualizado_en, prospectos.archivado_en AS archivado_en, '
                                     'prospectos.ganado_en AS ganado_en, prospectos.promocion_id AS '
                                     'promocion_id, prospectos.tipo_operacion AS tipo_operacion FROM '
                                     'prospectos AS prospectos WHERE NOT RLS_ACTIVA() OR (((SELECT '
                                     "COALESCE((SELECT PG_JSON_TIENE(usuarios_sistema.permisos, '*') OR "
                                     "PG_JSON_TIENE(usuarios_sistema.permisos, 'clientes.cartera') AS _col_0 "
                                     'FROM usuarios_sistema AS usuarios_sistema WHERE '
                                     'usuarios_sistema.auth_id = AUTH_UID() AND usuarios_sistema.activo '
                                     'LIMIT 1), TRUE /* Sin legajo no se bloquea a nadie: es una instalación '
                                     'que todavía no */ /* corrió la migración 66, y cerrarle el paso la '
                                     'dejaría inutilizable de */ /* golpe. El frente se comporta igual por '
                                     'la misma razón. */) AS _col_0) OR (prospectos.archivado_en IS NULL AND '
                                     '((SELECT COALESCE((SELECT PG_JSON_TIENE(usuarios_sistema.permisos, '
                                     "'*') OR PG_JSON_TIENE(usuarios_sistema.permisos, 'ventas.equipo') AS "
                                     '_col_0 FROM usuarios_sistema AS usuarios_sistema WHERE '
                                     'usuarios_sistema.auth_id = AUTH_UID() AND usuarios_sistema.activo '
                                     'LIMIT 1), TRUE /* Sin legajo se permite, igual que el resto de los '
                                     'ayudantes: una */ /* instalación sin la migración 66 no puede quedarse '
                                     'sin módulo comercial. */) AS _col_0) OR prospectos.vendedor_id = '
                                     '(SELECT usuarios_sistema.id AS id FROM usuarios_sistema AS '
                                     'usuarios_sistema WHERE usuarios_sistema.auth_id = AUTH_UID() AND '
                                     'usuarios_sistema.activo LIMIT 1) OR prospectos.creado_por = (SELECT '
                                     'usuarios_sistema.id AS id FROM usuarios_sistema AS usuarios_sistema '
                                     'WHERE usuarios_sistema.auth_id = AUTH_UID() AND '
                                     'usuarios_sistema.activo LIMIT 1)))) OR ((SELECT COALESCE((SELECT '
                                     "PG_JSON_TIENE(usuarios_sistema.permisos, '*') OR "
                                     "PG_JSON_TIENE(usuarios_sistema.permisos, 'clientes.cartera') AS _col_0 "
                                     'FROM usuarios_sistema AS usuarios_sistema WHERE '
                                     'usuarios_sistema.auth_id = AUTH_UID() AND usuarios_sistema.activo '
                                     'LIMIT 1), TRUE /* Sin legajo no se bloquea a nadie: es una instalación '
                                     'que todavía no */ /* corrió la migración 66, y cerrarle el paso la '
                                     'dejaría inutilizable de */ /* golpe. El frente se comporta igual por '
                                     'la misma razón. */) AS _col_0) OR (prospectos.archivado_en IS NULL AND '
                                     '((SELECT COALESCE((SELECT PG_JSON_TIENE(usuarios_sistema.permisos, '
                                     "'*') OR PG_JSON_TIENE(usuarios_sistema.permisos, 'ventas.equipo') AS "
                                     '_col_0 FROM usuarios_sistema AS usuarios_sistema WHERE '
                                     'usuarios_sistema.auth_id = AUTH_UID() AND usuarios_sistema.activo '
                                     'LIMIT 1), TRUE /* Sin legajo se permite, igual que el resto de los '
                                     'ayudantes: una */ /* instalación sin la migración 66 no puede quedarse '
                                     'sin módulo comercial. */) AS _col_0) OR prospectos.vendedor_id = '
                                     '(SELECT usuarios_sistema.id AS id FROM usuarios_sistema AS '
                                     'usuarios_sistema WHERE usuarios_sistema.auth_id = AUTH_UID() AND '
                                     'usuarios_sistema.activo LIMIT 1) OR prospectos.creado_por = (SELECT '
                                     'usuarios_sistema.id AS id FROM usuarios_sistema AS usuarios_sistema '
                                     'WHERE usuarios_sistema.auth_id = AUTH_UID() AND '
                                     'usuarios_sistema.activo LIMIT 1)))))) AS prospectos)))) AS '
                                     'expedientes))',
                           'update': '(expediente_documentos.expediente_id IN (SELECT expedientes.id AS id '
                                     'FROM (SELECT expedientes.id AS id, expedientes.prospecto_id AS '
                                     'prospecto_id, expedientes.contrato_id AS contrato_id, '
                                     'expedientes.instalacion_id AS instalacion_id, expedientes.cliente_id '
                                     'AS cliente_id, expedientes.datos_confirmados_en AS '
                                     'datos_confirmados_en, expedientes.latitud AS latitud, '
                                     'expedientes.longitud AS longitud, expedientes.precision_m AS '
                                     'precision_m, expedientes.ubicacion_origen AS ubicacion_origen, '
                                     'expedientes.ubicacion_en AS ubicacion_en, expedientes.ubicacion_por AS '
                                     'ubicacion_por, expedientes.estado AS estado, expedientes.enviado_en AS '
                                     'enviado_en, expedientes.notas AS notas, expedientes.creado_por AS '
                                     'creado_por, expedientes.creado_en AS creado_en, '
                                     'expedientes.actualizado_en AS actualizado_en FROM expedientes AS '
                                     'expedientes WHERE NOT RLS_ACTIVA() OR ((expedientes.prospecto_id IN '
                                     '(SELECT prospectos.id AS id FROM (SELECT prospectos.id AS id, '
                                     'PG_DESCIFRAR(prospectos.nombre) AS nombre, '
                                     'PG_DESCIFRAR(prospectos.identificacion) AS identificacion, '
                                     'PG_DESCIFRAR(prospectos.telefono) AS telefono, '
                                     'PG_DESCIFRAR(prospectos.telefono_whatsapp) AS telefono_whatsapp, '
                                     'PG_DESCIFRAR(prospectos.email) AS email, '
                                     'PG_DESCIFRAR(prospectos.direccion) AS direccion, '
                                     'PG_DESCIFRAR(prospectos.referencia) AS referencia, prospectos.sector '
                                     'AS sector, prospectos.canton AS canton, prospectos.latitud AS latitud, '
                                     'prospectos.longitud AS longitud, prospectos.plan_id AS plan_id, '
                                     'prospectos.origen AS origen, prospectos.estado AS estado, '
                                     'prospectos.motivo_perdida AS motivo_perdida, prospectos.vendedor_id AS '
                                     'vendedor_id, prospectos.cobertura AS cobertura, prospectos.nap_id AS '
                                     'nap_id, prospectos.distancia_nodo_m AS distancia_nodo_m, '
                                     'prospectos.proxima_accion AS proxima_accion, prospectos.instalacion_id '
                                     'AS instalacion_id, prospectos.cliente_id AS cliente_id, '
                                     'prospectos.notas AS notas, prospectos.creado_por AS creado_por, '
                                     'prospectos.creado_en AS creado_en, prospectos.actualizado_en AS '
                                     'actualizado_en, prospectos.archivado_en AS archivado_en, '
                                     'prospectos.ganado_en AS ganado_en, prospectos.promocion_id AS '
                                     'promocion_id, prospectos.tipo_operacion AS tipo_operacion FROM '
                                     'prospectos AS prospectos WHERE NOT RLS_ACTIVA() OR (((SELECT '
                                     "COALESCE((SELECT PG_JSON_TIENE(usuarios_sistema.permisos, '*') OR "
                                     "PG_JSON_TIENE(usuarios_sistema.permisos, 'clientes.cartera') AS _col_0 "
                                     'FROM usuarios_sistema AS usuarios_sistema WHERE '
                                     'usuarios_sistema.auth_id = AUTH_UID() AND usuarios_sistema.activo '
                                     'LIMIT 1), TRUE /* Sin legajo no se bloquea a nadie: es una instalación '
                                     'que todavía no */ /* corrió la migración 66, y cerrarle el paso la '
                                     'dejaría inutilizable de */ /* golpe. El frente se comporta igual por '
                                     'la misma razón. */) AS _col_0) OR (prospectos.archivado_en IS NULL AND '
                                     '((SELECT COALESCE((SELECT PG_JSON_TIENE(usuarios_sistema.permisos, '
                                     "'*') OR PG_JSON_TIENE(usuarios_sistema.permisos, 'ventas.equipo') AS "
                                     '_col_0 FROM usuarios_sistema AS usuarios_sistema WHERE '
                                     'usuarios_sistema.auth_id = AUTH_UID() AND usuarios_sistema.activo '
                                     'LIMIT 1), TRUE /* Sin legajo se permite, igual que el resto de los '
                                     'ayudantes: una */ /* instalación sin la migración 66 no puede quedarse '
                                     'sin módulo comercial. */) AS _col_0) OR prospectos.vendedor_id = '
                                     '(SELECT usuarios_sistema.id AS id FROM usuarios_sistema AS '
                                     'usuarios_sistema WHERE usuarios_sistema.auth_id = AUTH_UID() AND '
                                     'usuarios_sistema.activo LIMIT 1) OR prospectos.creado_por = (SELECT '
                                     'usuarios_sistema.id AS id FROM usuarios_sistema AS usuarios_sistema '
                                     'WHERE usuarios_sistema.auth_id = AUTH_UID() AND '
                                     'usuarios_sistema.activo LIMIT 1)))) OR ((SELECT COALESCE((SELECT '
                                     "PG_JSON_TIENE(usuarios_sistema.permisos, '*') OR "
                                     "PG_JSON_TIENE(usuarios_sistema.permisos, 'clientes.cartera') AS _col_0 "
                                     'FROM usuarios_sistema AS usuarios_sistema WHERE '
                                     'usuarios_sistema.auth_id = AUTH_UID() AND usuarios_sistema.activo '
                                     'LIMIT 1), TRUE /* Sin legajo no se bloquea a nadie: es una instalación '
                                     'que todavía no */ /* corrió la migración 66, y cerrarle el paso la '
                                     'dejaría inutilizable de */ /* golpe. El frente se comporta igual por '
                                     'la misma razón. */) AS _col_0) OR (prospectos.archivado_en IS NULL AND '
                                     '((SELECT COALESCE((SELECT PG_JSON_TIENE(usuarios_sistema.permisos, '
                                     "'*') OR PG_JSON_TIENE(usuarios_sistema.permisos, 'ventas.equipo') AS "
                                     '_col_0 FROM usuarios_sistema AS usuarios_sistema WHERE '
                                     'usuarios_sistema.auth_id = AUTH_UID() AND usuarios_sistema.activo '
                                     'LIMIT 1), TRUE /* Sin legajo se permite, igual que el resto de los '
                                     'ayudantes: una */ /* instalación sin la migración 66 no puede quedarse '
                                     'sin módulo comercial. */) AS _col_0) OR prospectos.vendedor_id = '
                                     '(SELECT usuarios_sistema.id AS id FROM usuarios_sistema AS '
                                     'usuarios_sistema WHERE usuarios_sistema.auth_id = AUTH_UID() AND '
                                     'usuarios_sistema.activo LIMIT 1) OR prospectos.creado_por = (SELECT '
                                     'usuarios_sistema.id AS id FROM usuarios_sistema AS usuarios_sistema '
                                     'WHERE usuarios_sistema.auth_id = AUTH_UID() AND '
                                     'usuarios_sistema.activo LIMIT 1)))))) AS prospectos)))) AS '
                                     'expedientes))',
                           'update_check': '(expediente_documentos.expediente_id IN (SELECT expedientes.id '
                                           'AS id FROM (SELECT expedientes.id AS id, '
                                           'expedientes.prospecto_id AS prospecto_id, '
                                           'expedientes.contrato_id AS contrato_id, '
                                           'expedientes.instalacion_id AS instalacion_id, '
                                           'expedientes.cliente_id AS cliente_id, '
                                           'expedientes.datos_confirmados_en AS datos_confirmados_en, '
                                           'expedientes.latitud AS latitud, expedientes.longitud AS '
                                           'longitud, expedientes.precision_m AS precision_m, '
                                           'expedientes.ubicacion_origen AS ubicacion_origen, '
                                           'expedientes.ubicacion_en AS ubicacion_en, '
                                           'expedientes.ubicacion_por AS ubicacion_por, expedientes.estado '
                                           'AS estado, expedientes.enviado_en AS enviado_en, '
                                           'expedientes.notas AS notas, expedientes.creado_por AS '
                                           'creado_por, expedientes.creado_en AS creado_en, '
                                           'expedientes.actualizado_en AS actualizado_en FROM expedientes AS '
                                           'expedientes WHERE NOT RLS_ACTIVA() OR ((expedientes.prospecto_id '
                                           'IN (SELECT prospectos.id AS id FROM (SELECT prospectos.id AS id, '
                                           'PG_DESCIFRAR(prospectos.nombre) AS nombre, '
                                           'PG_DESCIFRAR(prospectos.identificacion) AS identificacion, '
                                           'PG_DESCIFRAR(prospectos.telefono) AS telefono, '
                                           'PG_DESCIFRAR(prospectos.telefono_whatsapp) AS telefono_whatsapp, '
                                           'PG_DESCIFRAR(prospectos.email) AS email, '
                                           'PG_DESCIFRAR(prospectos.direccion) AS direccion, '
                                           'PG_DESCIFRAR(prospectos.referencia) AS referencia, '
                                           'prospectos.sector AS sector, prospectos.canton AS canton, '
                                           'prospectos.latitud AS latitud, prospectos.longitud AS longitud, '
                                           'prospectos.plan_id AS plan_id, prospectos.origen AS origen, '
                                           'prospectos.estado AS estado, prospectos.motivo_perdida AS '
                                           'motivo_perdida, prospectos.vendedor_id AS vendedor_id, '
                                           'prospectos.cobertura AS cobertura, prospectos.nap_id AS nap_id, '
                                           'prospectos.distancia_nodo_m AS distancia_nodo_m, '
                                           'prospectos.proxima_accion AS proxima_accion, '
                                           'prospectos.instalacion_id AS instalacion_id, '
                                           'prospectos.cliente_id AS cliente_id, prospectos.notas AS notas, '
                                           'prospectos.creado_por AS creado_por, prospectos.creado_en AS '
                                           'creado_en, prospectos.actualizado_en AS actualizado_en, '
                                           'prospectos.archivado_en AS archivado_en, prospectos.ganado_en AS '
                                           'ganado_en, prospectos.promocion_id AS promocion_id, '
                                           'prospectos.tipo_operacion AS tipo_operacion FROM prospectos AS '
                                           'prospectos WHERE NOT RLS_ACTIVA() OR (((SELECT COALESCE((SELECT '
                                           "PG_JSON_TIENE(usuarios_sistema.permisos, '*') OR "
                                           "PG_JSON_TIENE(usuarios_sistema.permisos, 'clientes.cartera') AS "
                                           '_col_0 FROM usuarios_sistema AS usuarios_sistema WHERE '
                                           'usuarios_sistema.auth_id = AUTH_UID() AND '
                                           'usuarios_sistema.activo LIMIT 1), TRUE /* Sin legajo no se '
                                           'bloquea a nadie: es una instalación que todavía no */ /* corrió '
                                           'la migración 66, y cerrarle el paso la dejaría inutilizable de '
                                           '*/ /* golpe. El frente se comporta igual por la misma razón. */) '
                                           'AS _col_0) OR (prospectos.archivado_en IS NULL AND ((SELECT '
                                           "COALESCE((SELECT PG_JSON_TIENE(usuarios_sistema.permisos, '*') "
                                           "OR PG_JSON_TIENE(usuarios_sistema.permisos, 'ventas.equipo') AS "
                                           '_col_0 FROM usuarios_sistema AS usuarios_sistema WHERE '
                                           'usuarios_sistema.auth_id = AUTH_UID() AND '
                                           'usuarios_sistema.activo LIMIT 1), TRUE /* Sin legajo se permite, '
                                           'igual que el resto de los ayudantes: una */ /* instalación sin '
                                           'la migración 66 no puede quedarse sin módulo comercial. */) AS '
                                           '_col_0) OR prospectos.vendedor_id = (SELECT usuarios_sistema.id '
                                           'AS id FROM usuarios_sistema AS usuarios_sistema WHERE '
                                           'usuarios_sistema.auth_id = AUTH_UID() AND '
                                           'usuarios_sistema.activo LIMIT 1) OR prospectos.creado_por = '
                                           '(SELECT usuarios_sistema.id AS id FROM usuarios_sistema AS '
                                           'usuarios_sistema WHERE usuarios_sistema.auth_id = AUTH_UID() AND '
                                           'usuarios_sistema.activo LIMIT 1)))) OR ((SELECT COALESCE((SELECT '
                                           "PG_JSON_TIENE(usuarios_sistema.permisos, '*') OR "
                                           "PG_JSON_TIENE(usuarios_sistema.permisos, 'clientes.cartera') AS "
                                           '_col_0 FROM usuarios_sistema AS usuarios_sistema WHERE '
                                           'usuarios_sistema.auth_id = AUTH_UID() AND '
                                           'usuarios_sistema.activo LIMIT 1), TRUE /* Sin legajo no se '
                                           'bloquea a nadie: es una instalación que todavía no */ /* corrió '
                                           'la migración 66, y cerrarle el paso la dejaría inutilizable de '
                                           '*/ /* golpe. El frente se comporta igual por la misma razón. */) '
                                           'AS _col_0) OR (prospectos.archivado_en IS NULL AND ((SELECT '
                                           "COALESCE((SELECT PG_JSON_TIENE(usuarios_sistema.permisos, '*') "
                                           "OR PG_JSON_TIENE(usuarios_sistema.permisos, 'ventas.equipo') AS "
                                           '_col_0 FROM usuarios_sistema AS usuarios_sistema WHERE '
                                           'usuarios_sistema.auth_id = AUTH_UID() AND '
                                           'usuarios_sistema.activo LIMIT 1), TRUE /* Sin legajo se permite, '
                                           'igual que el resto de los ayudantes: una */ /* instalación sin '
                                           'la migración 66 no puede quedarse sin módulo comercial. */) AS '
                                           '_col_0) OR prospectos.vendedor_id = (SELECT usuarios_sistema.id '
                                           'AS id FROM usuarios_sistema AS usuarios_sistema WHERE '
                                           'usuarios_sistema.auth_id = AUTH_UID() AND '
                                           'usuarios_sistema.activo LIMIT 1) OR prospectos.creado_por = '
                                           '(SELECT usuarios_sistema.id AS id FROM usuarios_sistema AS '
                                           'usuarios_sistema WHERE usuarios_sistema.auth_id = AUTH_UID() AND '
                                           'usuarios_sistema.activo LIMIT 1)))))) AS prospectos)))) AS '
                                           'expedientes))'},
 'expedientes': {'delete': '(expedientes.prospecto_id IN (SELECT prospectos.id AS id FROM (SELECT '
                           'prospectos.id AS id, PG_DESCIFRAR(prospectos.nombre) AS nombre, '
                           'PG_DESCIFRAR(prospectos.identificacion) AS identificacion, '
                           'PG_DESCIFRAR(prospectos.telefono) AS telefono, '
                           'PG_DESCIFRAR(prospectos.telefono_whatsapp) AS telefono_whatsapp, '
                           'PG_DESCIFRAR(prospectos.email) AS email, PG_DESCIFRAR(prospectos.direccion) AS '
                           'direccion, PG_DESCIFRAR(prospectos.referencia) AS referencia, prospectos.sector '
                           'AS sector, prospectos.canton AS canton, prospectos.latitud AS latitud, '
                           'prospectos.longitud AS longitud, prospectos.plan_id AS plan_id, '
                           'prospectos.origen AS origen, prospectos.estado AS estado, '
                           'prospectos.motivo_perdida AS motivo_perdida, prospectos.vendedor_id AS '
                           'vendedor_id, prospectos.cobertura AS cobertura, prospectos.nap_id AS nap_id, '
                           'prospectos.distancia_nodo_m AS distancia_nodo_m, prospectos.proxima_accion AS '
                           'proxima_accion, prospectos.instalacion_id AS instalacion_id, '
                           'prospectos.cliente_id AS cliente_id, prospectos.notas AS notas, '
                           'prospectos.creado_por AS creado_por, prospectos.creado_en AS creado_en, '
                           'prospectos.actualizado_en AS actualizado_en, prospectos.archivado_en AS '
                           'archivado_en, prospectos.ganado_en AS ganado_en, prospectos.promocion_id AS '
                           'promocion_id, prospectos.tipo_operacion AS tipo_operacion FROM prospectos AS '
                           'prospectos WHERE NOT RLS_ACTIVA() OR (((SELECT COALESCE((SELECT '
                           "PG_JSON_TIENE(usuarios_sistema.permisos, '*') OR "
                           "PG_JSON_TIENE(usuarios_sistema.permisos, 'clientes.cartera') AS _col_0 FROM "
                           'usuarios_sistema AS usuarios_sistema WHERE usuarios_sistema.auth_id = AUTH_UID() '
                           'AND usuarios_sistema.activo LIMIT 1), TRUE /* Sin legajo no se bloquea a nadie: '
                           'es una instalación que todavía no */ /* corrió la migración 66, y cerrarle el '
                           'paso la dejaría inutilizable de */ /* golpe. El frente se comporta igual por la '
                           'misma razón. */) AS _col_0) OR (prospectos.archivado_en IS NULL AND ((SELECT '
                           "COALESCE((SELECT PG_JSON_TIENE(usuarios_sistema.permisos, '*') OR "
                           "PG_JSON_TIENE(usuarios_sistema.permisos, 'ventas.equipo') AS _col_0 FROM "
                           'usuarios_sistema AS usuarios_sistema WHERE usuarios_sistema.auth_id = AUTH_UID() '
                           'AND usuarios_sistema.activo LIMIT 1), TRUE /* Sin legajo se permite, igual que '
                           'el resto de los ayudantes: una */ /* instalación sin la migración 66 no puede '
                           'quedarse sin módulo comercial. */) AS _col_0) OR prospectos.vendedor_id = '
                           '(SELECT usuarios_sistema.id AS id FROM usuarios_sistema AS usuarios_sistema '
                           'WHERE usuarios_sistema.auth_id = AUTH_UID() AND usuarios_sistema.activo LIMIT 1) '
                           'OR prospectos.creado_por = (SELECT usuarios_sistema.id AS id FROM '
                           'usuarios_sistema AS usuarios_sistema WHERE usuarios_sistema.auth_id = AUTH_UID() '
                           'AND usuarios_sistema.activo LIMIT 1)))) OR ((SELECT COALESCE((SELECT '
                           "PG_JSON_TIENE(usuarios_sistema.permisos, '*') OR "
                           "PG_JSON_TIENE(usuarios_sistema.permisos, 'clientes.cartera') AS _col_0 FROM "
                           'usuarios_sistema AS usuarios_sistema WHERE usuarios_sistema.auth_id = AUTH_UID() '
                           'AND usuarios_sistema.activo LIMIT 1), TRUE /* Sin legajo no se bloquea a nadie: '
                           'es una instalación que todavía no */ /* corrió la migración 66, y cerrarle el '
                           'paso la dejaría inutilizable de */ /* golpe. El frente se comporta igual por la '
                           'misma razón. */) AS _col_0) OR (prospectos.archivado_en IS NULL AND ((SELECT '
                           "COALESCE((SELECT PG_JSON_TIENE(usuarios_sistema.permisos, '*') OR "
                           "PG_JSON_TIENE(usuarios_sistema.permisos, 'ventas.equipo') AS _col_0 FROM "
                           'usuarios_sistema AS usuarios_sistema WHERE usuarios_sistema.auth_id = AUTH_UID() '
                           'AND usuarios_sistema.activo LIMIT 1), TRUE /* Sin legajo se permite, igual que '
                           'el resto de los ayudantes: una */ /* instalación sin la migración 66 no puede '
                           'quedarse sin módulo comercial. */) AS _col_0) OR prospectos.vendedor_id = '
                           '(SELECT usuarios_sistema.id AS id FROM usuarios_sistema AS usuarios_sistema '
                           'WHERE usuarios_sistema.auth_id = AUTH_UID() AND usuarios_sistema.activo LIMIT 1) '
                           'OR prospectos.creado_por = (SELECT usuarios_sistema.id AS id FROM '
                           'usuarios_sistema AS usuarios_sistema WHERE usuarios_sistema.auth_id = AUTH_UID() '
                           'AND usuarios_sistema.activo LIMIT 1)))))) AS prospectos))',
                 'insert': '(expedientes.prospecto_id IN (SELECT prospectos.id AS id FROM (SELECT '
                           'prospectos.id AS id, PG_DESCIFRAR(prospectos.nombre) AS nombre, '
                           'PG_DESCIFRAR(prospectos.identificacion) AS identificacion, '
                           'PG_DESCIFRAR(prospectos.telefono) AS telefono, '
                           'PG_DESCIFRAR(prospectos.telefono_whatsapp) AS telefono_whatsapp, '
                           'PG_DESCIFRAR(prospectos.email) AS email, PG_DESCIFRAR(prospectos.direccion) AS '
                           'direccion, PG_DESCIFRAR(prospectos.referencia) AS referencia, prospectos.sector '
                           'AS sector, prospectos.canton AS canton, prospectos.latitud AS latitud, '
                           'prospectos.longitud AS longitud, prospectos.plan_id AS plan_id, '
                           'prospectos.origen AS origen, prospectos.estado AS estado, '
                           'prospectos.motivo_perdida AS motivo_perdida, prospectos.vendedor_id AS '
                           'vendedor_id, prospectos.cobertura AS cobertura, prospectos.nap_id AS nap_id, '
                           'prospectos.distancia_nodo_m AS distancia_nodo_m, prospectos.proxima_accion AS '
                           'proxima_accion, prospectos.instalacion_id AS instalacion_id, '
                           'prospectos.cliente_id AS cliente_id, prospectos.notas AS notas, '
                           'prospectos.creado_por AS creado_por, prospectos.creado_en AS creado_en, '
                           'prospectos.actualizado_en AS actualizado_en, prospectos.archivado_en AS '
                           'archivado_en, prospectos.ganado_en AS ganado_en, prospectos.promocion_id AS '
                           'promocion_id, prospectos.tipo_operacion AS tipo_operacion FROM prospectos AS '
                           'prospectos WHERE NOT RLS_ACTIVA() OR (((SELECT COALESCE((SELECT '
                           "PG_JSON_TIENE(usuarios_sistema.permisos, '*') OR "
                           "PG_JSON_TIENE(usuarios_sistema.permisos, 'clientes.cartera') AS _col_0 FROM "
                           'usuarios_sistema AS usuarios_sistema WHERE usuarios_sistema.auth_id = AUTH_UID() '
                           'AND usuarios_sistema.activo LIMIT 1), TRUE /* Sin legajo no se bloquea a nadie: '
                           'es una instalación que todavía no */ /* corrió la migración 66, y cerrarle el '
                           'paso la dejaría inutilizable de */ /* golpe. El frente se comporta igual por la '
                           'misma razón. */) AS _col_0) OR (prospectos.archivado_en IS NULL AND ((SELECT '
                           "COALESCE((SELECT PG_JSON_TIENE(usuarios_sistema.permisos, '*') OR "
                           "PG_JSON_TIENE(usuarios_sistema.permisos, 'ventas.equipo') AS _col_0 FROM "
                           'usuarios_sistema AS usuarios_sistema WHERE usuarios_sistema.auth_id = AUTH_UID() '
                           'AND usuarios_sistema.activo LIMIT 1), TRUE /* Sin legajo se permite, igual que '
                           'el resto de los ayudantes: una */ /* instalación sin la migración 66 no puede '
                           'quedarse sin módulo comercial. */) AS _col_0) OR prospectos.vendedor_id = '
                           '(SELECT usuarios_sistema.id AS id FROM usuarios_sistema AS usuarios_sistema '
                           'WHERE usuarios_sistema.auth_id = AUTH_UID() AND usuarios_sistema.activo LIMIT 1) '
                           'OR prospectos.creado_por = (SELECT usuarios_sistema.id AS id FROM '
                           'usuarios_sistema AS usuarios_sistema WHERE usuarios_sistema.auth_id = AUTH_UID() '
                           'AND usuarios_sistema.activo LIMIT 1)))) OR ((SELECT COALESCE((SELECT '
                           "PG_JSON_TIENE(usuarios_sistema.permisos, '*') OR "
                           "PG_JSON_TIENE(usuarios_sistema.permisos, 'clientes.cartera') AS _col_0 FROM "
                           'usuarios_sistema AS usuarios_sistema WHERE usuarios_sistema.auth_id = AUTH_UID() '
                           'AND usuarios_sistema.activo LIMIT 1), TRUE /* Sin legajo no se bloquea a nadie: '
                           'es una instalación que todavía no */ /* corrió la migración 66, y cerrarle el '
                           'paso la dejaría inutilizable de */ /* golpe. El frente se comporta igual por la '
                           'misma razón. */) AS _col_0) OR (prospectos.archivado_en IS NULL AND ((SELECT '
                           "COALESCE((SELECT PG_JSON_TIENE(usuarios_sistema.permisos, '*') OR "
                           "PG_JSON_TIENE(usuarios_sistema.permisos, 'ventas.equipo') AS _col_0 FROM "
                           'usuarios_sistema AS usuarios_sistema WHERE usuarios_sistema.auth_id = AUTH_UID() '
                           'AND usuarios_sistema.activo LIMIT 1), TRUE /* Sin legajo se permite, igual que '
                           'el resto de los ayudantes: una */ /* instalación sin la migración 66 no puede '
                           'quedarse sin módulo comercial. */) AS _col_0) OR prospectos.vendedor_id = '
                           '(SELECT usuarios_sistema.id AS id FROM usuarios_sistema AS usuarios_sistema '
                           'WHERE usuarios_sistema.auth_id = AUTH_UID() AND usuarios_sistema.activo LIMIT 1) '
                           'OR prospectos.creado_por = (SELECT usuarios_sistema.id AS id FROM '
                           'usuarios_sistema AS usuarios_sistema WHERE usuarios_sistema.auth_id = AUTH_UID() '
                           'AND usuarios_sistema.activo LIMIT 1)))))) AS prospectos))',
                 'select': '(expedientes.prospecto_id IN (SELECT prospectos.id AS id FROM (SELECT '
                           'prospectos.id AS id, PG_DESCIFRAR(prospectos.nombre) AS nombre, '
                           'PG_DESCIFRAR(prospectos.identificacion) AS identificacion, '
                           'PG_DESCIFRAR(prospectos.telefono) AS telefono, '
                           'PG_DESCIFRAR(prospectos.telefono_whatsapp) AS telefono_whatsapp, '
                           'PG_DESCIFRAR(prospectos.email) AS email, PG_DESCIFRAR(prospectos.direccion) AS '
                           'direccion, PG_DESCIFRAR(prospectos.referencia) AS referencia, prospectos.sector '
                           'AS sector, prospectos.canton AS canton, prospectos.latitud AS latitud, '
                           'prospectos.longitud AS longitud, prospectos.plan_id AS plan_id, '
                           'prospectos.origen AS origen, prospectos.estado AS estado, '
                           'prospectos.motivo_perdida AS motivo_perdida, prospectos.vendedor_id AS '
                           'vendedor_id, prospectos.cobertura AS cobertura, prospectos.nap_id AS nap_id, '
                           'prospectos.distancia_nodo_m AS distancia_nodo_m, prospectos.proxima_accion AS '
                           'proxima_accion, prospectos.instalacion_id AS instalacion_id, '
                           'prospectos.cliente_id AS cliente_id, prospectos.notas AS notas, '
                           'prospectos.creado_por AS creado_por, prospectos.creado_en AS creado_en, '
                           'prospectos.actualizado_en AS actualizado_en, prospectos.archivado_en AS '
                           'archivado_en, prospectos.ganado_en AS ganado_en, prospectos.promocion_id AS '
                           'promocion_id, prospectos.tipo_operacion AS tipo_operacion FROM prospectos AS '
                           'prospectos WHERE NOT RLS_ACTIVA() OR (((SELECT COALESCE((SELECT '
                           "PG_JSON_TIENE(usuarios_sistema.permisos, '*') OR "
                           "PG_JSON_TIENE(usuarios_sistema.permisos, 'clientes.cartera') AS _col_0 FROM "
                           'usuarios_sistema AS usuarios_sistema WHERE usuarios_sistema.auth_id = AUTH_UID() '
                           'AND usuarios_sistema.activo LIMIT 1), TRUE /* Sin legajo no se bloquea a nadie: '
                           'es una instalación que todavía no */ /* corrió la migración 66, y cerrarle el '
                           'paso la dejaría inutilizable de */ /* golpe. El frente se comporta igual por la '
                           'misma razón. */) AS _col_0) OR (prospectos.archivado_en IS NULL AND ((SELECT '
                           "COALESCE((SELECT PG_JSON_TIENE(usuarios_sistema.permisos, '*') OR "
                           "PG_JSON_TIENE(usuarios_sistema.permisos, 'ventas.equipo') AS _col_0 FROM "
                           'usuarios_sistema AS usuarios_sistema WHERE usuarios_sistema.auth_id = AUTH_UID() '
                           'AND usuarios_sistema.activo LIMIT 1), TRUE /* Sin legajo se permite, igual que '
                           'el resto de los ayudantes: una */ /* instalación sin la migración 66 no puede '
                           'quedarse sin módulo comercial. */) AS _col_0) OR prospectos.vendedor_id = '
                           '(SELECT usuarios_sistema.id AS id FROM usuarios_sistema AS usuarios_sistema '
                           'WHERE usuarios_sistema.auth_id = AUTH_UID() AND usuarios_sistema.activo LIMIT 1) '
                           'OR prospectos.creado_por = (SELECT usuarios_sistema.id AS id FROM '
                           'usuarios_sistema AS usuarios_sistema WHERE usuarios_sistema.auth_id = AUTH_UID() '
                           'AND usuarios_sistema.activo LIMIT 1)))) OR ((SELECT COALESCE((SELECT '
                           "PG_JSON_TIENE(usuarios_sistema.permisos, '*') OR "
                           "PG_JSON_TIENE(usuarios_sistema.permisos, 'clientes.cartera') AS _col_0 FROM "
                           'usuarios_sistema AS usuarios_sistema WHERE usuarios_sistema.auth_id = AUTH_UID() '
                           'AND usuarios_sistema.activo LIMIT 1), TRUE /* Sin legajo no se bloquea a nadie: '
                           'es una instalación que todavía no */ /* corrió la migración 66, y cerrarle el '
                           'paso la dejaría inutilizable de */ /* golpe. El frente se comporta igual por la '
                           'misma razón. */) AS _col_0) OR (prospectos.archivado_en IS NULL AND ((SELECT '
                           "COALESCE((SELECT PG_JSON_TIENE(usuarios_sistema.permisos, '*') OR "
                           "PG_JSON_TIENE(usuarios_sistema.permisos, 'ventas.equipo') AS _col_0 FROM "
                           'usuarios_sistema AS usuarios_sistema WHERE usuarios_sistema.auth_id = AUTH_UID() '
                           'AND usuarios_sistema.activo LIMIT 1), TRUE /* Sin legajo se permite, igual que '
                           'el resto de los ayudantes: una */ /* instalación sin la migración 66 no puede '
                           'quedarse sin módulo comercial. */) AS _col_0) OR prospectos.vendedor_id = '
                           '(SELECT usuarios_sistema.id AS id FROM usuarios_sistema AS usuarios_sistema '
                           'WHERE usuarios_sistema.auth_id = AUTH_UID() AND usuarios_sistema.activo LIMIT 1) '
                           'OR prospectos.creado_por = (SELECT usuarios_sistema.id AS id FROM '
                           'usuarios_sistema AS usuarios_sistema WHERE usuarios_sistema.auth_id = AUTH_UID() '
                           'AND usuarios_sistema.activo LIMIT 1)))))) AS prospectos))',
                 'update': '(expedientes.prospecto_id IN (SELECT prospectos.id AS id FROM (SELECT '
                           'prospectos.id AS id, PG_DESCIFRAR(prospectos.nombre) AS nombre, '
                           'PG_DESCIFRAR(prospectos.identificacion) AS identificacion, '
                           'PG_DESCIFRAR(prospectos.telefono) AS telefono, '
                           'PG_DESCIFRAR(prospectos.telefono_whatsapp) AS telefono_whatsapp, '
                           'PG_DESCIFRAR(prospectos.email) AS email, PG_DESCIFRAR(prospectos.direccion) AS '
                           'direccion, PG_DESCIFRAR(prospectos.referencia) AS referencia, prospectos.sector '
                           'AS sector, prospectos.canton AS canton, prospectos.latitud AS latitud, '
                           'prospectos.longitud AS longitud, prospectos.plan_id AS plan_id, '
                           'prospectos.origen AS origen, prospectos.estado AS estado, '
                           'prospectos.motivo_perdida AS motivo_perdida, prospectos.vendedor_id AS '
                           'vendedor_id, prospectos.cobertura AS cobertura, prospectos.nap_id AS nap_id, '
                           'prospectos.distancia_nodo_m AS distancia_nodo_m, prospectos.proxima_accion AS '
                           'proxima_accion, prospectos.instalacion_id AS instalacion_id, '
                           'prospectos.cliente_id AS cliente_id, prospectos.notas AS notas, '
                           'prospectos.creado_por AS creado_por, prospectos.creado_en AS creado_en, '
                           'prospectos.actualizado_en AS actualizado_en, prospectos.archivado_en AS '
                           'archivado_en, prospectos.ganado_en AS ganado_en, prospectos.promocion_id AS '
                           'promocion_id, prospectos.tipo_operacion AS tipo_operacion FROM prospectos AS '
                           'prospectos WHERE NOT RLS_ACTIVA() OR (((SELECT COALESCE((SELECT '
                           "PG_JSON_TIENE(usuarios_sistema.permisos, '*') OR "
                           "PG_JSON_TIENE(usuarios_sistema.permisos, 'clientes.cartera') AS _col_0 FROM "
                           'usuarios_sistema AS usuarios_sistema WHERE usuarios_sistema.auth_id = AUTH_UID() '
                           'AND usuarios_sistema.activo LIMIT 1), TRUE /* Sin legajo no se bloquea a nadie: '
                           'es una instalación que todavía no */ /* corrió la migración 66, y cerrarle el '
                           'paso la dejaría inutilizable de */ /* golpe. El frente se comporta igual por la '
                           'misma razón. */) AS _col_0) OR (prospectos.archivado_en IS NULL AND ((SELECT '
                           "COALESCE((SELECT PG_JSON_TIENE(usuarios_sistema.permisos, '*') OR "
                           "PG_JSON_TIENE(usuarios_sistema.permisos, 'ventas.equipo') AS _col_0 FROM "
                           'usuarios_sistema AS usuarios_sistema WHERE usuarios_sistema.auth_id = AUTH_UID() '
                           'AND usuarios_sistema.activo LIMIT 1), TRUE /* Sin legajo se permite, igual que '
                           'el resto de los ayudantes: una */ /* instalación sin la migración 66 no puede '
                           'quedarse sin módulo comercial. */) AS _col_0) OR prospectos.vendedor_id = '
                           '(SELECT usuarios_sistema.id AS id FROM usuarios_sistema AS usuarios_sistema '
                           'WHERE usuarios_sistema.auth_id = AUTH_UID() AND usuarios_sistema.activo LIMIT 1) '
                           'OR prospectos.creado_por = (SELECT usuarios_sistema.id AS id FROM '
                           'usuarios_sistema AS usuarios_sistema WHERE usuarios_sistema.auth_id = AUTH_UID() '
                           'AND usuarios_sistema.activo LIMIT 1)))) OR ((SELECT COALESCE((SELECT '
                           "PG_JSON_TIENE(usuarios_sistema.permisos, '*') OR "
                           "PG_JSON_TIENE(usuarios_sistema.permisos, 'clientes.cartera') AS _col_0 FROM "
                           'usuarios_sistema AS usuarios_sistema WHERE usuarios_sistema.auth_id = AUTH_UID() '
                           'AND usuarios_sistema.activo LIMIT 1), TRUE /* Sin legajo no se bloquea a nadie: '
                           'es una instalación que todavía no */ /* corrió la migración 66, y cerrarle el '
                           'paso la dejaría inutilizable de */ /* golpe. El frente se comporta igual por la '
                           'misma razón. */) AS _col_0) OR (prospectos.archivado_en IS NULL AND ((SELECT '
                           "COALESCE((SELECT PG_JSON_TIENE(usuarios_sistema.permisos, '*') OR "
                           "PG_JSON_TIENE(usuarios_sistema.permisos, 'ventas.equipo') AS _col_0 FROM "
                           'usuarios_sistema AS usuarios_sistema WHERE usuarios_sistema.auth_id = AUTH_UID() '
                           'AND usuarios_sistema.activo LIMIT 1), TRUE /* Sin legajo se permite, igual que '
                           'el resto de los ayudantes: una */ /* instalación sin la migración 66 no puede '
                           'quedarse sin módulo comercial. */) AS _col_0) OR prospectos.vendedor_id = '
                           '(SELECT usuarios_sistema.id AS id FROM usuarios_sistema AS usuarios_sistema '
                           'WHERE usuarios_sistema.auth_id = AUTH_UID() AND usuarios_sistema.activo LIMIT 1) '
                           'OR prospectos.creado_por = (SELECT usuarios_sistema.id AS id FROM '
                           'usuarios_sistema AS usuarios_sistema WHERE usuarios_sistema.auth_id = AUTH_UID() '
                           'AND usuarios_sistema.activo LIMIT 1)))))) AS prospectos))',
                 'update_check': '(expedientes.prospecto_id IN (SELECT prospectos.id AS id FROM (SELECT '
                                 'prospectos.id AS id, PG_DESCIFRAR(prospectos.nombre) AS nombre, '
                                 'PG_DESCIFRAR(prospectos.identificacion) AS identificacion, '
                                 'PG_DESCIFRAR(prospectos.telefono) AS telefono, '
                                 'PG_DESCIFRAR(prospectos.telefono_whatsapp) AS telefono_whatsapp, '
                                 'PG_DESCIFRAR(prospectos.email) AS email, '
                                 'PG_DESCIFRAR(prospectos.direccion) AS direccion, '
                                 'PG_DESCIFRAR(prospectos.referencia) AS referencia, prospectos.sector AS '
                                 'sector, prospectos.canton AS canton, prospectos.latitud AS latitud, '
                                 'prospectos.longitud AS longitud, prospectos.plan_id AS plan_id, '
                                 'prospectos.origen AS origen, prospectos.estado AS estado, '
                                 'prospectos.motivo_perdida AS motivo_perdida, prospectos.vendedor_id AS '
                                 'vendedor_id, prospectos.cobertura AS cobertura, prospectos.nap_id AS '
                                 'nap_id, prospectos.distancia_nodo_m AS distancia_nodo_m, '
                                 'prospectos.proxima_accion AS proxima_accion, prospectos.instalacion_id AS '
                                 'instalacion_id, prospectos.cliente_id AS cliente_id, prospectos.notas AS '
                                 'notas, prospectos.creado_por AS creado_por, prospectos.creado_en AS '
                                 'creado_en, prospectos.actualizado_en AS actualizado_en, '
                                 'prospectos.archivado_en AS archivado_en, prospectos.ganado_en AS '
                                 'ganado_en, prospectos.promocion_id AS promocion_id, '
                                 'prospectos.tipo_operacion AS tipo_operacion FROM prospectos AS prospectos '
                                 'WHERE NOT RLS_ACTIVA() OR (((SELECT COALESCE((SELECT '
                                 "PG_JSON_TIENE(usuarios_sistema.permisos, '*') OR "
                                 "PG_JSON_TIENE(usuarios_sistema.permisos, 'clientes.cartera') AS _col_0 "
                                 'FROM usuarios_sistema AS usuarios_sistema WHERE usuarios_sistema.auth_id = '
                                 'AUTH_UID() AND usuarios_sistema.activo LIMIT 1), TRUE /* Sin legajo no se '
                                 'bloquea a nadie: es una instalación que todavía no */ /* corrió la '
                                 'migración 66, y cerrarle el paso la dejaría inutilizable de */ /* golpe. '
                                 'El frente se comporta igual por la misma razón. */) AS _col_0) OR '
                                 '(prospectos.archivado_en IS NULL AND ((SELECT COALESCE((SELECT '
                                 "PG_JSON_TIENE(usuarios_sistema.permisos, '*') OR "
                                 "PG_JSON_TIENE(usuarios_sistema.permisos, 'ventas.equipo') AS _col_0 FROM "
                                 'usuarios_sistema AS usuarios_sistema WHERE usuarios_sistema.auth_id = '
                                 'AUTH_UID() AND usuarios_sistema.activo LIMIT 1), TRUE /* Sin legajo se '
                                 'permite, igual que el resto de los ayudantes: una */ /* instalación sin la '
                                 'migración 66 no puede quedarse sin módulo comercial. */) AS _col_0) OR '
                                 'prospectos.vendedor_id = (SELECT usuarios_sistema.id AS id FROM '
                                 'usuarios_sistema AS usuarios_sistema WHERE usuarios_sistema.auth_id = '
                                 'AUTH_UID() AND usuarios_sistema.activo LIMIT 1) OR prospectos.creado_por = '
                                 '(SELECT usuarios_sistema.id AS id FROM usuarios_sistema AS '
                                 'usuarios_sistema WHERE usuarios_sistema.auth_id = AUTH_UID() AND '
                                 'usuarios_sistema.activo LIMIT 1)))) OR ((SELECT COALESCE((SELECT '
                                 "PG_JSON_TIENE(usuarios_sistema.permisos, '*') OR "
                                 "PG_JSON_TIENE(usuarios_sistema.permisos, 'clientes.cartera') AS _col_0 "
                                 'FROM usuarios_sistema AS usuarios_sistema WHERE usuarios_sistema.auth_id = '
                                 'AUTH_UID() AND usuarios_sistema.activo LIMIT 1), TRUE /* Sin legajo no se '
                                 'bloquea a nadie: es una instalación que todavía no */ /* corrió la '
                                 'migración 66, y cerrarle el paso la dejaría inutilizable de */ /* golpe. '
                                 'El frente se comporta igual por la misma razón. */) AS _col_0) OR '
                                 '(prospectos.archivado_en IS NULL AND ((SELECT COALESCE((SELECT '
                                 "PG_JSON_TIENE(usuarios_sistema.permisos, '*') OR "
                                 "PG_JSON_TIENE(usuarios_sistema.permisos, 'ventas.equipo') AS _col_0 FROM "
                                 'usuarios_sistema AS usuarios_sistema WHERE usuarios_sistema.auth_id = '
                                 'AUTH_UID() AND usuarios_sistema.activo LIMIT 1), TRUE /* Sin legajo se '
                                 'permite, igual que el resto de los ayudantes: una */ /* instalación sin la '
                                 'migración 66 no puede quedarse sin módulo comercial. */) AS _col_0) OR '
                                 'prospectos.vendedor_id = (SELECT usuarios_sistema.id AS id FROM '
                                 'usuarios_sistema AS usuarios_sistema WHERE usuarios_sistema.auth_id = '
                                 'AUTH_UID() AND usuarios_sistema.activo LIMIT 1) OR prospectos.creado_por = '
                                 '(SELECT usuarios_sistema.id AS id FROM usuarios_sistema AS '
                                 'usuarios_sistema WHERE usuarios_sistema.auth_id = AUTH_UID() AND '
                                 'usuarios_sistema.activo LIMIT 1)))))) AS prospectos))'},
 'factura_proveedores': {'delete': '0', 'insert': '0', 'select': '0', 'update': '0', 'update_check': '0'},
 'facturas': {'delete': "((SELECT COALESCE((SELECT PG_JSON_TIENE(usuarios_sistema.permisos, '*') OR "
                        "PG_JSON_TIENE(usuarios_sistema.permisos, 'clientes.cartera') AS _col_0 FROM "
                        'usuarios_sistema AS usuarios_sistema WHERE usuarios_sistema.auth_id = AUTH_UID() '
                        'AND usuarios_sistema.activo LIMIT 1), TRUE /* Sin legajo no se bloquea a nadie: es '
                        'una instalación que todavía no */ /* corrió la migración 66, y cerrarle el paso la '
                        'dejaría inutilizable de */ /* golpe. El frente se comporta igual por la misma '
                        'razón. */) AS _col_0) OR facturas.client_id IN (SELECT cliente_id AS cliente_id '
                        'FROM (WITH yo /* Solo el técnico y los clientes de sus trabajos. */ /* La cobranza '
                        'SALIÓ de acá a propósito: abría la ficha completa cuando lo */ /* que hace falta es '
                        'un nombre, un teléfono y un saldo. Va por */ /* `v_cobros_por_gestionar`, más '
                        'abajo. */ AS (SELECT usuarios_sistema.id AS id, usuarios_sistema.tecnico_id AS '
                        'tecnico_id FROM usuarios_sistema AS usuarios_sistema WHERE usuarios_sistema.auth_id '
                        '= AUTH_UID() AND usuarios_sistema.activo LIMIT 1) SELECT t_fn1145.client_id AS '
                        'cliente_id FROM tickets AS t_fn1145 JOIN yo AS yo ON t_fn1145.tecnico_id = '
                        'yo.tecnico_id WHERE NOT t_fn1145.client_id IS NULL UNION SELECT i_fn1145.client_id '
                        'AS client_id FROM instalaciones AS i_fn1145 JOIN yo AS yo ON i_fn1145.tecnico_id = '
                        'yo.tecnico_id WHERE NOT i_fn1145.client_id IS NULL) AS _0))',
              'insert': "((SELECT COALESCE((SELECT PG_JSON_TIENE(usuarios_sistema.permisos, '*') OR "
                        "PG_JSON_TIENE(usuarios_sistema.permisos, 'clientes.cartera') AS _col_0 FROM "
                        'usuarios_sistema AS usuarios_sistema WHERE usuarios_sistema.auth_id = AUTH_UID() '
                        'AND usuarios_sistema.activo LIMIT 1), TRUE /* Sin legajo no se bloquea a nadie: es '
                        'una instalación que todavía no */ /* corrió la migración 66, y cerrarle el paso la '
                        'dejaría inutilizable de */ /* golpe. El frente se comporta igual por la misma '
                        'razón. */) AS _col_0))',
              'select': "((SELECT COALESCE((SELECT PG_JSON_TIENE(usuarios_sistema.permisos, '*') OR "
                        "PG_JSON_TIENE(usuarios_sistema.permisos, 'clientes.cartera') AS _col_0 FROM "
                        'usuarios_sistema AS usuarios_sistema WHERE usuarios_sistema.auth_id = AUTH_UID() '
                        'AND usuarios_sistema.activo LIMIT 1), TRUE /* Sin legajo no se bloquea a nadie: es '
                        'una instalación que todavía no */ /* corrió la migración 66, y cerrarle el paso la '
                        'dejaría inutilizable de */ /* golpe. El frente se comporta igual por la misma '
                        'razón. */) AS _col_0) OR facturas.client_id IN (SELECT cliente_id AS cliente_id '
                        'FROM (WITH yo /* Solo el técnico y los clientes de sus trabajos. */ /* La cobranza '
                        'SALIÓ de acá a propósito: abría la ficha completa cuando lo */ /* que hace falta es '
                        'un nombre, un teléfono y un saldo. Va por */ /* `v_cobros_por_gestionar`, más '
                        'abajo. */ AS (SELECT usuarios_sistema.id AS id, usuarios_sistema.tecnico_id AS '
                        'tecnico_id FROM usuarios_sistema AS usuarios_sistema WHERE usuarios_sistema.auth_id '
                        '= AUTH_UID() AND usuarios_sistema.activo LIMIT 1) SELECT t_fn1139.client_id AS '
                        'cliente_id FROM tickets AS t_fn1139 JOIN yo AS yo ON t_fn1139.tecnico_id = '
                        'yo.tecnico_id WHERE NOT t_fn1139.client_id IS NULL UNION SELECT i_fn1139.client_id '
                        'AS client_id FROM instalaciones AS i_fn1139 JOIN yo AS yo ON i_fn1139.tecnico_id = '
                        'yo.tecnico_id WHERE NOT i_fn1139.client_id IS NULL) AS _0))',
              'update': "((SELECT COALESCE((SELECT PG_JSON_TIENE(usuarios_sistema.permisos, '*') OR "
                        "PG_JSON_TIENE(usuarios_sistema.permisos, 'clientes.cartera') AS _col_0 FROM "
                        'usuarios_sistema AS usuarios_sistema WHERE usuarios_sistema.auth_id = AUTH_UID() '
                        'AND usuarios_sistema.activo LIMIT 1), TRUE /* Sin legajo no se bloquea a nadie: es '
                        'una instalación que todavía no */ /* corrió la migración 66, y cerrarle el paso la '
                        'dejaría inutilizable de */ /* golpe. El frente se comporta igual por la misma '
                        'razón. */) AS _col_0) OR facturas.client_id IN (SELECT cliente_id AS cliente_id '
                        'FROM (WITH yo /* Solo el técnico y los clientes de sus trabajos. */ /* La cobranza '
                        'SALIÓ de acá a propósito: abría la ficha completa cuando lo */ /* que hace falta es '
                        'un nombre, un teléfono y un saldo. Va por */ /* `v_cobros_por_gestionar`, más '
                        'abajo. */ AS (SELECT usuarios_sistema.id AS id, usuarios_sistema.tecnico_id AS '
                        'tecnico_id FROM usuarios_sistema AS usuarios_sistema WHERE usuarios_sistema.auth_id '
                        '= AUTH_UID() AND usuarios_sistema.activo LIMIT 1) SELECT t_fn1142.client_id AS '
                        'cliente_id FROM tickets AS t_fn1142 JOIN yo AS yo ON t_fn1142.tecnico_id = '
                        'yo.tecnico_id WHERE NOT t_fn1142.client_id IS NULL UNION SELECT i_fn1142.client_id '
                        'AS client_id FROM instalaciones AS i_fn1142 JOIN yo AS yo ON i_fn1142.tecnico_id = '
                        'yo.tecnico_id WHERE NOT i_fn1142.client_id IS NULL) AS _0))',
              'update_check': "((SELECT COALESCE((SELECT PG_JSON_TIENE(usuarios_sistema.permisos, '*') OR "
                              "PG_JSON_TIENE(usuarios_sistema.permisos, 'clientes.cartera') AS _col_0 FROM "
                              'usuarios_sistema AS usuarios_sistema WHERE usuarios_sistema.auth_id = '
                              'AUTH_UID() AND usuarios_sistema.activo LIMIT 1), TRUE /* Sin legajo no se '
                              'bloquea a nadie: es una instalación que todavía no */ /* corrió la migración '
                              '66, y cerrarle el paso la dejaría inutilizable de */ /* golpe. El frente se '
                              'comporta igual por la misma razón. */) AS _col_0))'},
 'firewall_bloqueos': {'delete': None, 'insert': None, 'select': None, 'update': None, 'update_check': None},
 'firmas_contrato': {'delete': None, 'insert': None, 'select': None, 'update': None, 'update_check': None},
 'fotos_routers_mensual': {'delete': '0', 'insert': '0', 'select': None, 'update': '0', 'update_check': '0'},
 'incidencia_avisos': {'delete': '0', 'insert': '0', 'select': None, 'update': '0', 'update_check': '0'},
 'incidencias_masivas': {'delete': None,
                         'insert': None,
                         'select': None,
                         'update': None,
                         'update_check': None},
 'ingresos_grupales': {'delete': '0',
                       'insert': '0',
                       'select': "((SELECT COALESCE((SELECT PG_JSON_TIENE(usuarios_sistema.permisos, '*') OR "
                                 "PG_JSON_TIENE(usuarios_sistema.permisos, 'clientes.cartera') AS _col_0 "
                                 'FROM usuarios_sistema AS usuarios_sistema WHERE usuarios_sistema.auth_id = '
                                 'AUTH_UID() AND usuarios_sistema.activo LIMIT 1), TRUE /* Sin legajo no se '
                                 'bloquea a nadie: es una instalación que todavía no */ /* corrió la '
                                 'migración 66, y cerrarle el paso la dejaría inutilizable de */ /* golpe. '
                                 'El frente se comporta igual por la misma razón. */) AS _col_0) OR (SELECT '
                                 "COALESCE((SELECT PG_JSON_TIENE(usuarios_sistema.permisos, '*') OR "
                                 "PG_JSON_TIENE(usuarios_sistema.permisos, 'ventas.equipo') AS _col_0 FROM "
                                 'usuarios_sistema AS usuarios_sistema WHERE usuarios_sistema.auth_id = '
                                 'AUTH_UID() AND usuarios_sistema.activo LIMIT 1), TRUE /* Sin legajo se '
                                 'permite, igual que el resto de los ayudantes: una */ /* instalación sin la '
                                 'migración 66 no puede quedarse sin módulo comercial. */) AS _col_0) OR '
                                 '(SELECT EXISTS(SELECT 1 AS "1" FROM usuarios_sistema AS usuarios_sistema '
                                 'WHERE usuarios_sistema.auth_id = AUTH_UID() AND usuarios_sistema.activo '
                                 "AND usuarios_sistema.rol IN ('super_admin', 'admin', 'jefe_tecnico')) AS "
                                 '_col_0) OR ingresos_grupales.cuadrilla_id IN (SELECT (SELECT '
                                 'cuadrilla_miembros.cuadrilla_id AS cuadrilla_id FROM cuadrilla_miembros AS '
                                 'cuadrilla_miembros WHERE cuadrilla_miembros.tecnico_id = (SELECT '
                                 'usuarios_sistema.tecnico_id AS tecnico_id FROM usuarios_sistema AS '
                                 'usuarios_sistema WHERE usuarios_sistema.auth_id = AUTH_UID() AND '
                                 'usuarios_sistema.activo LIMIT 1)) AS _col_0))',
                       'update': '0',
                       'update_check': '0'},
 'instalacion_fotos': {'delete': '(instalacion_fotos.instalacion_id IN (SELECT instalaciones.id AS id FROM '
                                 '(SELECT instalaciones.id AS id, instalaciones.client_id AS client_id, '
                                 'instalaciones.tipo AS tipo, instalaciones.estado AS estado, '
                                 'instalaciones.fecha AS fecha, instalaciones.hora AS hora, '
                                 'instalaciones.tecnico AS tecnico, instalaciones.onu_id AS onu_id, '
                                 'instalaciones.equipo AS equipo, instalaciones.metros_cable AS '
                                 'metros_cable, instalaciones.costo AS costo, '
                                 'PG_DESCIFRAR(instalaciones.direccion) AS direccion, instalaciones.latitud '
                                 'AS latitud, instalaciones.longitud AS longitud, instalaciones.notas AS '
                                 'notas, instalaciones.created_by AS created_by, instalaciones.created_at AS '
                                 'created_at, instalaciones.updated_at AS updated_at, '
                                 'PG_DESCIFRAR(instalaciones.nombre) AS nombre, '
                                 'instalaciones.tipo_identificacion AS tipo_identificacion, '
                                 'PG_DESCIFRAR(instalaciones.identificacion) AS identificacion, '
                                 'PG_DESCIFRAR(instalaciones.telefono) AS telefono, '
                                 'PG_DESCIFRAR(instalaciones.telefono_whatsapp) AS telefono_whatsapp, '
                                 'PG_DESCIFRAR(instalaciones.email) AS email, '
                                 'PG_DESCIFRAR(instalaciones.referencia) AS referencia, instalaciones.sector '
                                 'AS sector, instalaciones.canton AS canton, instalaciones.tecnologia AS '
                                 'tecnologia, instalaciones.factibilidad AS factibilidad, '
                                 'instalaciones.factibilidad_notas AS factibilidad_notas, '
                                 'instalaciones.factibilidad_at AS factibilidad_at, instalaciones.nap_id AS '
                                 'nap_id, instalaciones.puerto_nap AS puerto_nap, instalaciones.torre_id AS '
                                 'torre_id, instalaciones.distancia_nodo_m AS distancia_nodo_m, '
                                 'instalaciones.tecnico_id AS tecnico_id, instalaciones.cuadrilla_id AS '
                                 'cuadrilla_id, instalaciones.franja AS franja, instalaciones.plan_id AS '
                                 'plan_id, instalaciones.precio_mensual AS precio_mensual, '
                                 'instalaciones.dia_facturacion AS dia_facturacion, '
                                 'instalaciones.equipo_tipo AS equipo_tipo, instalaciones.equipo_modelo AS '
                                 'equipo_modelo, instalaciones.equipo_sn AS equipo_sn, '
                                 'instalaciones.equipo_mac AS equipo_mac, instalaciones.equipo_origen AS '
                                 'equipo_origen, instalaciones.olt_id AS olt_id, instalaciones.puerto_pon AS '
                                 'puerto_pon, instalaciones.rx_power_dbm AS rx_power_dbm, '
                                 'instalaciones.tx_power_dbm AS tx_power_dbm, instalaciones.senal_dbm AS '
                                 'senal_dbm, instalaciones.ccq AS ccq, instalaciones.lectura_at AS '
                                 'lectura_at, instalaciones.router_id AS router_id, '
                                 'instalaciones.tipo_conexion AS tipo_conexion, instalaciones.tipo_ip AS '
                                 'tipo_ip, instalaciones.usuario_ppp AS usuario_ppp, '
                                 'PG_DESCIFRAR(instalaciones.clave_ppp) AS clave_ppp, instalaciones.ip AS '
                                 'ip, instalaciones.ipv6 AS ipv6, instalaciones.pool AS pool, '
                                 'instalaciones.aprovisionado_at AS aprovisionado_at, instalaciones.ping_ok '
                                 'AS ping_ok, instalaciones.ping_ms AS ping_ms, instalaciones.ping_perdida '
                                 'AS ping_perdida, instalaciones.test_bajada_mbps AS test_bajada_mbps, '
                                 'instalaciones.test_subida_mbps AS test_subida_mbps, '
                                 'instalaciones.pruebas_at AS pruebas_at, instalaciones.firma_b64 AS '
                                 'firma_b64, PG_DESCIFRAR(instalaciones.firmante_nombre) AS firmante_nombre, '
                                 'PG_DESCIFRAR(instalaciones.firmante_identificacion) AS '
                                 'firmante_identificacion, instalaciones.observaciones AS observaciones, '
                                 'instalaciones.alta_at AS alta_at, instalaciones.paso AS paso, '
                                 'instalaciones.motivo_no_realizada AS motivo_no_realizada, '
                                 'instalaciones.detalle_no_realizada AS detalle_no_realizada, '
                                 'instalaciones.reprogramada_para AS reprogramada_para, '
                                 'instalaciones.llegada_at AS llegada_at, instalaciones.llegada_lat AS '
                                 'llegada_lat, instalaciones.llegada_lng AS llegada_lng, '
                                 'instalaciones.llegada_precision_m AS llegada_precision_m, '
                                 'instalaciones.numero AS numero, instalaciones.provincia AS provincia, '
                                 'instalaciones.ciudad AS ciudad, instalaciones.parroquia AS parroquia, '
                                 'instalaciones.condicion_especial AS condicion_especial, '
                                 'instalaciones.tarifa_preferencial AS tarifa_preferencial, '
                                 'instalaciones.acepta_arbitraje AS acepta_arbitraje, '
                                 'instalaciones.equipo_modalidad AS equipo_modalidad, '
                                 'instalaciones.red_acceso AS red_acceso, instalaciones.tipo_cuenta AS '
                                 'tipo_cuenta, instalaciones.permanencia_meses AS permanencia_meses, '
                                 'instalaciones.valor_instalacion AS valor_instalacion, '
                                 'instalaciones.acepta_datos_personales AS acepta_datos_personales, '
                                 'instalaciones.ruta_fecha AS ruta_fecha, instalaciones.ruta_orden AS '
                                 'ruta_orden FROM instalaciones AS instalaciones WHERE NOT RLS_ACTIVA() OR '
                                 "(((SELECT COALESCE((SELECT PG_JSON_TIENE(usuarios_sistema.permisos, '*') "
                                 "OR PG_JSON_TIENE(usuarios_sistema.permisos, 'clientes.cartera') AS _col_0 "
                                 'FROM usuarios_sistema AS usuarios_sistema WHERE usuarios_sistema.auth_id = '
                                 'AUTH_UID() AND usuarios_sistema.activo LIMIT 1), TRUE /* Sin legajo no se '
                                 'bloquea a nadie: es una instalación que todavía no */ /* corrió la '
                                 'migración 66, y cerrarle el paso la dejaría inutilizable de */ /* golpe. '
                                 'El frente se comporta igual por la misma razón. */) AS _col_0) OR (NOT '
                                 'instalaciones.tecnico_id IS NULL AND instalaciones.tecnico_id = (SELECT '
                                 'usuarios_sistema.tecnico_id AS tecnico_id FROM usuarios_sistema AS '
                                 'usuarios_sistema WHERE usuarios_sistema.auth_id = AUTH_UID() AND '
                                 'usuarios_sistema.activo LIMIT 1)) OR instalaciones.client_id IN (SELECT '
                                 'cliente_id AS cliente_id FROM (WITH yo /* Solo el técnico y los clientes '
                                 'de sus trabajos. */ /* La cobranza SALIÓ de acá a propósito: abría la '
                                 'ficha completa cuando lo */ /* que hace falta es un nombre, un teléfono y '
                                 'un saldo. Va por */ /* `v_cobros_por_gestionar`, más abajo. */ AS (SELECT '
                                 'usuarios_sistema.id AS id, usuarios_sistema.tecnico_id AS tecnico_id FROM '
                                 'usuarios_sistema AS usuarios_sistema WHERE usuarios_sistema.auth_id = '
                                 'AUTH_UID() AND usuarios_sistema.activo LIMIT 1) SELECT t_fn1209.client_id '
                                 'AS cliente_id FROM tickets AS t_fn1209 JOIN yo AS yo ON '
                                 't_fn1209.tecnico_id = yo.tecnico_id WHERE NOT t_fn1209.client_id IS NULL '
                                 'UNION SELECT i_fn1209.client_id AS client_id FROM instalaciones AS '
                                 'i_fn1209 JOIN yo AS yo ON i_fn1209.tecnico_id = yo.tecnico_id WHERE NOT '
                                 'i_fn1209.client_id IS NULL) AS _0)) OR ((SELECT COALESCE((SELECT '
                                 "PG_JSON_TIENE(usuarios_sistema.permisos, '*') OR "
                                 "PG_JSON_TIENE(usuarios_sistema.permisos, 'clientes.cartera') AS _col_0 "
                                 'FROM usuarios_sistema AS usuarios_sistema WHERE usuarios_sistema.auth_id = '
                                 'AUTH_UID() AND usuarios_sistema.activo LIMIT 1), TRUE /* Sin legajo no se '
                                 'bloquea a nadie: es una instalación que todavía no */ /* corrió la '
                                 'migración 66, y cerrarle el paso la dejaría inutilizable de */ /* golpe. '
                                 'El frente se comporta igual por la misma razón. */) AS _col_0) OR (NOT '
                                 'instalaciones.tecnico_id IS NULL AND instalaciones.tecnico_id = (SELECT '
                                 'usuarios_sistema.tecnico_id AS tecnico_id FROM usuarios_sistema AS '
                                 'usuarios_sistema WHERE usuarios_sistema.auth_id = AUTH_UID() AND '
                                 'usuarios_sistema.activo LIMIT 1))) OR (instalaciones.id IN (SELECT '
                                 'pr.instalacion_id AS instalacion_id FROM (SELECT prospectos.id AS id, '
                                 'PG_DESCIFRAR(prospectos.nombre) AS nombre, '
                                 'PG_DESCIFRAR(prospectos.identificacion) AS identificacion, '
                                 'PG_DESCIFRAR(prospectos.telefono) AS telefono, '
                                 'PG_DESCIFRAR(prospectos.telefono_whatsapp) AS telefono_whatsapp, '
                                 'PG_DESCIFRAR(prospectos.email) AS email, '
                                 'PG_DESCIFRAR(prospectos.direccion) AS direccion, '
                                 'PG_DESCIFRAR(prospectos.referencia) AS referencia, prospectos.sector AS '
                                 'sector, prospectos.canton AS canton, prospectos.latitud AS latitud, '
                                 'prospectos.longitud AS longitud, prospectos.plan_id AS plan_id, '
                                 'prospectos.origen AS origen, prospectos.estado AS estado, '
                                 'prospectos.motivo_perdida AS motivo_perdida, prospectos.vendedor_id AS '
                                 'vendedor_id, prospectos.cobertura AS cobertura, prospectos.nap_id AS '
                                 'nap_id, prospectos.distancia_nodo_m AS distancia_nodo_m, '
                                 'prospectos.proxima_accion AS proxima_accion, prospectos.instalacion_id AS '
                                 'instalacion_id, prospectos.cliente_id AS cliente_id, prospectos.notas AS '
                                 'notas, prospectos.creado_por AS creado_por, prospectos.creado_en AS '
                                 'creado_en, prospectos.actualizado_en AS actualizado_en, '
                                 'prospectos.archivado_en AS archivado_en, prospectos.ganado_en AS '
                                 'ganado_en, prospectos.promocion_id AS promocion_id, '
                                 'prospectos.tipo_operacion AS tipo_operacion FROM prospectos AS prospectos '
                                 'WHERE NOT RLS_ACTIVA() OR (((SELECT COALESCE((SELECT '
                                 "PG_JSON_TIENE(usuarios_sistema.permisos, '*') OR "
                                 "PG_JSON_TIENE(usuarios_sistema.permisos, 'clientes.cartera') AS _col_0 "
                                 'FROM usuarios_sistema AS usuarios_sistema WHERE usuarios_sistema.auth_id = '
                                 'AUTH_UID() AND usuarios_sistema.activo LIMIT 1), TRUE /* Sin legajo no se '
                                 'bloquea a nadie: es una instalación que todavía no */ /* corrió la '
                                 'migración 66, y cerrarle el paso la dejaría inutilizable de */ /* golpe. '
                                 'El frente se comporta igual por la misma razón. */) AS _col_0) OR '
                                 '(prospectos.archivado_en IS NULL AND ((SELECT COALESCE((SELECT '
                                 "PG_JSON_TIENE(usuarios_sistema.permisos, '*') OR "
                                 "PG_JSON_TIENE(usuarios_sistema.permisos, 'ventas.equipo') AS _col_0 FROM "
                                 'usuarios_sistema AS usuarios_sistema WHERE usuarios_sistema.auth_id = '
                                 'AUTH_UID() AND usuarios_sistema.activo LIMIT 1), TRUE /* Sin legajo se '
                                 'permite, igual que el resto de los ayudantes: una */ /* instalación sin la '
                                 'migración 66 no puede quedarse sin módulo comercial. */) AS _col_0) OR '
                                 'prospectos.vendedor_id = (SELECT usuarios_sistema.id AS id FROM '
                                 'usuarios_sistema AS usuarios_sistema WHERE usuarios_sistema.auth_id = '
                                 'AUTH_UID() AND usuarios_sistema.activo LIMIT 1) OR prospectos.creado_por = '
                                 '(SELECT usuarios_sistema.id AS id FROM usuarios_sistema AS '
                                 'usuarios_sistema WHERE usuarios_sistema.auth_id = AUTH_UID() AND '
                                 'usuarios_sistema.activo LIMIT 1)))) OR ((SELECT COALESCE((SELECT '
                                 "PG_JSON_TIENE(usuarios_sistema.permisos, '*') OR "
                                 "PG_JSON_TIENE(usuarios_sistema.permisos, 'clientes.cartera') AS _col_0 "
                                 'FROM usuarios_sistema AS usuarios_sistema WHERE usuarios_sistema.auth_id = '
                                 'AUTH_UID() AND usuarios_sistema.activo LIMIT 1), TRUE /* Sin legajo no se '
                                 'bloquea a nadie: es una instalación que todavía no */ /* corrió la '
                                 'migración 66, y cerrarle el paso la dejaría inutilizable de */ /* golpe. '
                                 'El frente se comporta igual por la misma razón. */) AS _col_0) OR '
                                 '(prospectos.archivado_en IS NULL AND ((SELECT COALESCE((SELECT '
                                 "PG_JSON_TIENE(usuarios_sistema.permisos, '*') OR "
                                 "PG_JSON_TIENE(usuarios_sistema.permisos, 'ventas.equipo') AS _col_0 FROM "
                                 'usuarios_sistema AS usuarios_sistema WHERE usuarios_sistema.auth_id = '
                                 'AUTH_UID() AND usuarios_sistema.activo LIMIT 1), TRUE /* Sin legajo se '
                                 'permite, igual que el resto de los ayudantes: una */ /* instalación sin la '
                                 'migración 66 no puede quedarse sin módulo comercial. */) AS _col_0) OR '
                                 'prospectos.vendedor_id = (SELECT usuarios_sistema.id AS id FROM '
                                 'usuarios_sistema AS usuarios_sistema WHERE usuarios_sistema.auth_id = '
                                 'AUTH_UID() AND usuarios_sistema.activo LIMIT 1) OR prospectos.creado_por = '
                                 '(SELECT usuarios_sistema.id AS id FROM usuarios_sistema AS '
                                 'usuarios_sistema WHERE usuarios_sistema.auth_id = AUTH_UID() AND '
                                 'usuarios_sistema.activo LIMIT 1)))))) AS pr WHERE pr.vendedor_id = (SELECT '
                                 'usuarios_sistema.id AS id FROM usuarios_sistema AS usuarios_sistema WHERE '
                                 'usuarios_sistema.auth_id = AUTH_UID() AND usuarios_sistema.activo LIMIT 1) '
                                 'AND NOT pr.instalacion_id IS NULL)))) AS instalaciones))',
                       'insert': '(instalacion_fotos.instalacion_id IN (SELECT instalaciones.id AS id FROM '
                                 '(SELECT instalaciones.id AS id, instalaciones.client_id AS client_id, '
                                 'instalaciones.tipo AS tipo, instalaciones.estado AS estado, '
                                 'instalaciones.fecha AS fecha, instalaciones.hora AS hora, '
                                 'instalaciones.tecnico AS tecnico, instalaciones.onu_id AS onu_id, '
                                 'instalaciones.equipo AS equipo, instalaciones.metros_cable AS '
                                 'metros_cable, instalaciones.costo AS costo, '
                                 'PG_DESCIFRAR(instalaciones.direccion) AS direccion, instalaciones.latitud '
                                 'AS latitud, instalaciones.longitud AS longitud, instalaciones.notas AS '
                                 'notas, instalaciones.created_by AS created_by, instalaciones.created_at AS '
                                 'created_at, instalaciones.updated_at AS updated_at, '
                                 'PG_DESCIFRAR(instalaciones.nombre) AS nombre, '
                                 'instalaciones.tipo_identificacion AS tipo_identificacion, '
                                 'PG_DESCIFRAR(instalaciones.identificacion) AS identificacion, '
                                 'PG_DESCIFRAR(instalaciones.telefono) AS telefono, '
                                 'PG_DESCIFRAR(instalaciones.telefono_whatsapp) AS telefono_whatsapp, '
                                 'PG_DESCIFRAR(instalaciones.email) AS email, '
                                 'PG_DESCIFRAR(instalaciones.referencia) AS referencia, instalaciones.sector '
                                 'AS sector, instalaciones.canton AS canton, instalaciones.tecnologia AS '
                                 'tecnologia, instalaciones.factibilidad AS factibilidad, '
                                 'instalaciones.factibilidad_notas AS factibilidad_notas, '
                                 'instalaciones.factibilidad_at AS factibilidad_at, instalaciones.nap_id AS '
                                 'nap_id, instalaciones.puerto_nap AS puerto_nap, instalaciones.torre_id AS '
                                 'torre_id, instalaciones.distancia_nodo_m AS distancia_nodo_m, '
                                 'instalaciones.tecnico_id AS tecnico_id, instalaciones.cuadrilla_id AS '
                                 'cuadrilla_id, instalaciones.franja AS franja, instalaciones.plan_id AS '
                                 'plan_id, instalaciones.precio_mensual AS precio_mensual, '
                                 'instalaciones.dia_facturacion AS dia_facturacion, '
                                 'instalaciones.equipo_tipo AS equipo_tipo, instalaciones.equipo_modelo AS '
                                 'equipo_modelo, instalaciones.equipo_sn AS equipo_sn, '
                                 'instalaciones.equipo_mac AS equipo_mac, instalaciones.equipo_origen AS '
                                 'equipo_origen, instalaciones.olt_id AS olt_id, instalaciones.puerto_pon AS '
                                 'puerto_pon, instalaciones.rx_power_dbm AS rx_power_dbm, '
                                 'instalaciones.tx_power_dbm AS tx_power_dbm, instalaciones.senal_dbm AS '
                                 'senal_dbm, instalaciones.ccq AS ccq, instalaciones.lectura_at AS '
                                 'lectura_at, instalaciones.router_id AS router_id, '
                                 'instalaciones.tipo_conexion AS tipo_conexion, instalaciones.tipo_ip AS '
                                 'tipo_ip, instalaciones.usuario_ppp AS usuario_ppp, '
                                 'PG_DESCIFRAR(instalaciones.clave_ppp) AS clave_ppp, instalaciones.ip AS '
                                 'ip, instalaciones.ipv6 AS ipv6, instalaciones.pool AS pool, '
                                 'instalaciones.aprovisionado_at AS aprovisionado_at, instalaciones.ping_ok '
                                 'AS ping_ok, instalaciones.ping_ms AS ping_ms, instalaciones.ping_perdida '
                                 'AS ping_perdida, instalaciones.test_bajada_mbps AS test_bajada_mbps, '
                                 'instalaciones.test_subida_mbps AS test_subida_mbps, '
                                 'instalaciones.pruebas_at AS pruebas_at, instalaciones.firma_b64 AS '
                                 'firma_b64, PG_DESCIFRAR(instalaciones.firmante_nombre) AS firmante_nombre, '
                                 'PG_DESCIFRAR(instalaciones.firmante_identificacion) AS '
                                 'firmante_identificacion, instalaciones.observaciones AS observaciones, '
                                 'instalaciones.alta_at AS alta_at, instalaciones.paso AS paso, '
                                 'instalaciones.motivo_no_realizada AS motivo_no_realizada, '
                                 'instalaciones.detalle_no_realizada AS detalle_no_realizada, '
                                 'instalaciones.reprogramada_para AS reprogramada_para, '
                                 'instalaciones.llegada_at AS llegada_at, instalaciones.llegada_lat AS '
                                 'llegada_lat, instalaciones.llegada_lng AS llegada_lng, '
                                 'instalaciones.llegada_precision_m AS llegada_precision_m, '
                                 'instalaciones.numero AS numero, instalaciones.provincia AS provincia, '
                                 'instalaciones.ciudad AS ciudad, instalaciones.parroquia AS parroquia, '
                                 'instalaciones.condicion_especial AS condicion_especial, '
                                 'instalaciones.tarifa_preferencial AS tarifa_preferencial, '
                                 'instalaciones.acepta_arbitraje AS acepta_arbitraje, '
                                 'instalaciones.equipo_modalidad AS equipo_modalidad, '
                                 'instalaciones.red_acceso AS red_acceso, instalaciones.tipo_cuenta AS '
                                 'tipo_cuenta, instalaciones.permanencia_meses AS permanencia_meses, '
                                 'instalaciones.valor_instalacion AS valor_instalacion, '
                                 'instalaciones.acepta_datos_personales AS acepta_datos_personales, '
                                 'instalaciones.ruta_fecha AS ruta_fecha, instalaciones.ruta_orden AS '
                                 'ruta_orden FROM instalaciones AS instalaciones WHERE NOT RLS_ACTIVA() OR '
                                 "(((SELECT COALESCE((SELECT PG_JSON_TIENE(usuarios_sistema.permisos, '*') "
                                 "OR PG_JSON_TIENE(usuarios_sistema.permisos, 'clientes.cartera') AS _col_0 "
                                 'FROM usuarios_sistema AS usuarios_sistema WHERE usuarios_sistema.auth_id = '
                                 'AUTH_UID() AND usuarios_sistema.activo LIMIT 1), TRUE /* Sin legajo no se '
                                 'bloquea a nadie: es una instalación que todavía no */ /* corrió la '
                                 'migración 66, y cerrarle el paso la dejaría inutilizable de */ /* golpe. '
                                 'El frente se comporta igual por la misma razón. */) AS _col_0) OR (NOT '
                                 'instalaciones.tecnico_id IS NULL AND instalaciones.tecnico_id = (SELECT '
                                 'usuarios_sistema.tecnico_id AS tecnico_id FROM usuarios_sistema AS '
                                 'usuarios_sistema WHERE usuarios_sistema.auth_id = AUTH_UID() AND '
                                 'usuarios_sistema.activo LIMIT 1)) OR instalaciones.client_id IN (SELECT '
                                 'cliente_id AS cliente_id FROM (WITH yo /* Solo el técnico y los clientes '
                                 'de sus trabajos. */ /* La cobranza SALIÓ de acá a propósito: abría la '
                                 'ficha completa cuando lo */ /* que hace falta es un nombre, un teléfono y '
                                 'un saldo. Va por */ /* `v_cobros_por_gestionar`, más abajo. */ AS (SELECT '
                                 'usuarios_sistema.id AS id, usuarios_sistema.tecnico_id AS tecnico_id FROM '
                                 'usuarios_sistema AS usuarios_sistema WHERE usuarios_sistema.auth_id = '
                                 'AUTH_UID() AND usuarios_sistema.activo LIMIT 1) SELECT t_fn1167.client_id '
                                 'AS cliente_id FROM tickets AS t_fn1167 JOIN yo AS yo ON '
                                 't_fn1167.tecnico_id = yo.tecnico_id WHERE NOT t_fn1167.client_id IS NULL '
                                 'UNION SELECT i_fn1167.client_id AS client_id FROM instalaciones AS '
                                 'i_fn1167 JOIN yo AS yo ON i_fn1167.tecnico_id = yo.tecnico_id WHERE NOT '
                                 'i_fn1167.client_id IS NULL) AS _0)) OR ((SELECT COALESCE((SELECT '
                                 "PG_JSON_TIENE(usuarios_sistema.permisos, '*') OR "
                                 "PG_JSON_TIENE(usuarios_sistema.permisos, 'clientes.cartera') AS _col_0 "
                                 'FROM usuarios_sistema AS usuarios_sistema WHERE usuarios_sistema.auth_id = '
                                 'AUTH_UID() AND usuarios_sistema.activo LIMIT 1), TRUE /* Sin legajo no se '
                                 'bloquea a nadie: es una instalación que todavía no */ /* corrió la '
                                 'migración 66, y cerrarle el paso la dejaría inutilizable de */ /* golpe. '
                                 'El frente se comporta igual por la misma razón. */) AS _col_0) OR (NOT '
                                 'instalaciones.tecnico_id IS NULL AND instalaciones.tecnico_id = (SELECT '
                                 'usuarios_sistema.tecnico_id AS tecnico_id FROM usuarios_sistema AS '
                                 'usuarios_sistema WHERE usuarios_sistema.auth_id = AUTH_UID() AND '
                                 'usuarios_sistema.activo LIMIT 1))) OR (instalaciones.id IN (SELECT '
                                 'pr.instalacion_id AS instalacion_id FROM (SELECT prospectos.id AS id, '
                                 'PG_DESCIFRAR(prospectos.nombre) AS nombre, '
                                 'PG_DESCIFRAR(prospectos.identificacion) AS identificacion, '
                                 'PG_DESCIFRAR(prospectos.telefono) AS telefono, '
                                 'PG_DESCIFRAR(prospectos.telefono_whatsapp) AS telefono_whatsapp, '
                                 'PG_DESCIFRAR(prospectos.email) AS email, '
                                 'PG_DESCIFRAR(prospectos.direccion) AS direccion, '
                                 'PG_DESCIFRAR(prospectos.referencia) AS referencia, prospectos.sector AS '
                                 'sector, prospectos.canton AS canton, prospectos.latitud AS latitud, '
                                 'prospectos.longitud AS longitud, prospectos.plan_id AS plan_id, '
                                 'prospectos.origen AS origen, prospectos.estado AS estado, '
                                 'prospectos.motivo_perdida AS motivo_perdida, prospectos.vendedor_id AS '
                                 'vendedor_id, prospectos.cobertura AS cobertura, prospectos.nap_id AS '
                                 'nap_id, prospectos.distancia_nodo_m AS distancia_nodo_m, '
                                 'prospectos.proxima_accion AS proxima_accion, prospectos.instalacion_id AS '
                                 'instalacion_id, prospectos.cliente_id AS cliente_id, prospectos.notas AS '
                                 'notas, prospectos.creado_por AS creado_por, prospectos.creado_en AS '
                                 'creado_en, prospectos.actualizado_en AS actualizado_en, '
                                 'prospectos.archivado_en AS archivado_en, prospectos.ganado_en AS '
                                 'ganado_en, prospectos.promocion_id AS promocion_id, '
                                 'prospectos.tipo_operacion AS tipo_operacion FROM prospectos AS prospectos '
                                 'WHERE NOT RLS_ACTIVA() OR (((SELECT COALESCE((SELECT '
                                 "PG_JSON_TIENE(usuarios_sistema.permisos, '*') OR "
                                 "PG_JSON_TIENE(usuarios_sistema.permisos, 'clientes.cartera') AS _col_0 "
                                 'FROM usuarios_sistema AS usuarios_sistema WHERE usuarios_sistema.auth_id = '
                                 'AUTH_UID() AND usuarios_sistema.activo LIMIT 1), TRUE /* Sin legajo no se '
                                 'bloquea a nadie: es una instalación que todavía no */ /* corrió la '
                                 'migración 66, y cerrarle el paso la dejaría inutilizable de */ /* golpe. '
                                 'El frente se comporta igual por la misma razón. */) AS _col_0) OR '
                                 '(prospectos.archivado_en IS NULL AND ((SELECT COALESCE((SELECT '
                                 "PG_JSON_TIENE(usuarios_sistema.permisos, '*') OR "
                                 "PG_JSON_TIENE(usuarios_sistema.permisos, 'ventas.equipo') AS _col_0 FROM "
                                 'usuarios_sistema AS usuarios_sistema WHERE usuarios_sistema.auth_id = '
                                 'AUTH_UID() AND usuarios_sistema.activo LIMIT 1), TRUE /* Sin legajo se '
                                 'permite, igual que el resto de los ayudantes: una */ /* instalación sin la '
                                 'migración 66 no puede quedarse sin módulo comercial. */) AS _col_0) OR '
                                 'prospectos.vendedor_id = (SELECT usuarios_sistema.id AS id FROM '
                                 'usuarios_sistema AS usuarios_sistema WHERE usuarios_sistema.auth_id = '
                                 'AUTH_UID() AND usuarios_sistema.activo LIMIT 1) OR prospectos.creado_por = '
                                 '(SELECT usuarios_sistema.id AS id FROM usuarios_sistema AS '
                                 'usuarios_sistema WHERE usuarios_sistema.auth_id = AUTH_UID() AND '
                                 'usuarios_sistema.activo LIMIT 1)))) OR ((SELECT COALESCE((SELECT '
                                 "PG_JSON_TIENE(usuarios_sistema.permisos, '*') OR "
                                 "PG_JSON_TIENE(usuarios_sistema.permisos, 'clientes.cartera') AS _col_0 "
                                 'FROM usuarios_sistema AS usuarios_sistema WHERE usuarios_sistema.auth_id = '
                                 'AUTH_UID() AND usuarios_sistema.activo LIMIT 1), TRUE /* Sin legajo no se '
                                 'bloquea a nadie: es una instalación que todavía no */ /* corrió la '
                                 'migración 66, y cerrarle el paso la dejaría inutilizable de */ /* golpe. '
                                 'El frente se comporta igual por la misma razón. */) AS _col_0) OR '
                                 '(prospectos.archivado_en IS NULL AND ((SELECT COALESCE((SELECT '
                                 "PG_JSON_TIENE(usuarios_sistema.permisos, '*') OR "
                                 "PG_JSON_TIENE(usuarios_sistema.permisos, 'ventas.equipo') AS _col_0 FROM "
                                 'usuarios_sistema AS usuarios_sistema WHERE usuarios_sistema.auth_id = '
                                 'AUTH_UID() AND usuarios_sistema.activo LIMIT 1), TRUE /* Sin legajo se '
                                 'permite, igual que el resto de los ayudantes: una */ /* instalación sin la '
                                 'migración 66 no puede quedarse sin módulo comercial. */) AS _col_0) OR '
                                 'prospectos.vendedor_id = (SELECT usuarios_sistema.id AS id FROM '
                                 'usuarios_sistema AS usuarios_sistema WHERE usuarios_sistema.auth_id = '
                                 'AUTH_UID() AND usuarios_sistema.activo LIMIT 1) OR prospectos.creado_por = '
                                 '(SELECT usuarios_sistema.id AS id FROM usuarios_sistema AS '
                                 'usuarios_sistema WHERE usuarios_sistema.auth_id = AUTH_UID() AND '
                                 'usuarios_sistema.activo LIMIT 1)))))) AS pr WHERE pr.vendedor_id = (SELECT '
                                 'usuarios_sistema.id AS id FROM usuarios_sistema AS usuarios_sistema WHERE '
                                 'usuarios_sistema.auth_id = AUTH_UID() AND usuarios_sistema.activo LIMIT 1) '
                                 'AND NOT pr.instalacion_id IS NULL)))) AS instalaciones))',
                       'select': '(instalacion_fotos.instalacion_id IN (SELECT instalaciones.id AS id FROM '
                                 '(SELECT instalaciones.id AS id, instalaciones.client_id AS client_id, '
                                 'instalaciones.tipo AS tipo, instalaciones.estado AS estado, '
                                 'instalaciones.fecha AS fecha, instalaciones.hora AS hora, '
                                 'instalaciones.tecnico AS tecnico, instalaciones.onu_id AS onu_id, '
                                 'instalaciones.equipo AS equipo, instalaciones.metros_cable AS '
                                 'metros_cable, instalaciones.costo AS costo, '
                                 'PG_DESCIFRAR(instalaciones.direccion) AS direccion, instalaciones.latitud '
                                 'AS latitud, instalaciones.longitud AS longitud, instalaciones.notas AS '
                                 'notas, instalaciones.created_by AS created_by, instalaciones.created_at AS '
                                 'created_at, instalaciones.updated_at AS updated_at, '
                                 'PG_DESCIFRAR(instalaciones.nombre) AS nombre, '
                                 'instalaciones.tipo_identificacion AS tipo_identificacion, '
                                 'PG_DESCIFRAR(instalaciones.identificacion) AS identificacion, '
                                 'PG_DESCIFRAR(instalaciones.telefono) AS telefono, '
                                 'PG_DESCIFRAR(instalaciones.telefono_whatsapp) AS telefono_whatsapp, '
                                 'PG_DESCIFRAR(instalaciones.email) AS email, '
                                 'PG_DESCIFRAR(instalaciones.referencia) AS referencia, instalaciones.sector '
                                 'AS sector, instalaciones.canton AS canton, instalaciones.tecnologia AS '
                                 'tecnologia, instalaciones.factibilidad AS factibilidad, '
                                 'instalaciones.factibilidad_notas AS factibilidad_notas, '
                                 'instalaciones.factibilidad_at AS factibilidad_at, instalaciones.nap_id AS '
                                 'nap_id, instalaciones.puerto_nap AS puerto_nap, instalaciones.torre_id AS '
                                 'torre_id, instalaciones.distancia_nodo_m AS distancia_nodo_m, '
                                 'instalaciones.tecnico_id AS tecnico_id, instalaciones.cuadrilla_id AS '
                                 'cuadrilla_id, instalaciones.franja AS franja, instalaciones.plan_id AS '
                                 'plan_id, instalaciones.precio_mensual AS precio_mensual, '
                                 'instalaciones.dia_facturacion AS dia_facturacion, '
                                 'instalaciones.equipo_tipo AS equipo_tipo, instalaciones.equipo_modelo AS '
                                 'equipo_modelo, instalaciones.equipo_sn AS equipo_sn, '
                                 'instalaciones.equipo_mac AS equipo_mac, instalaciones.equipo_origen AS '
                                 'equipo_origen, instalaciones.olt_id AS olt_id, instalaciones.puerto_pon AS '
                                 'puerto_pon, instalaciones.rx_power_dbm AS rx_power_dbm, '
                                 'instalaciones.tx_power_dbm AS tx_power_dbm, instalaciones.senal_dbm AS '
                                 'senal_dbm, instalaciones.ccq AS ccq, instalaciones.lectura_at AS '
                                 'lectura_at, instalaciones.router_id AS router_id, '
                                 'instalaciones.tipo_conexion AS tipo_conexion, instalaciones.tipo_ip AS '
                                 'tipo_ip, instalaciones.usuario_ppp AS usuario_ppp, '
                                 'PG_DESCIFRAR(instalaciones.clave_ppp) AS clave_ppp, instalaciones.ip AS '
                                 'ip, instalaciones.ipv6 AS ipv6, instalaciones.pool AS pool, '
                                 'instalaciones.aprovisionado_at AS aprovisionado_at, instalaciones.ping_ok '
                                 'AS ping_ok, instalaciones.ping_ms AS ping_ms, instalaciones.ping_perdida '
                                 'AS ping_perdida, instalaciones.test_bajada_mbps AS test_bajada_mbps, '
                                 'instalaciones.test_subida_mbps AS test_subida_mbps, '
                                 'instalaciones.pruebas_at AS pruebas_at, instalaciones.firma_b64 AS '
                                 'firma_b64, PG_DESCIFRAR(instalaciones.firmante_nombre) AS firmante_nombre, '
                                 'PG_DESCIFRAR(instalaciones.firmante_identificacion) AS '
                                 'firmante_identificacion, instalaciones.observaciones AS observaciones, '
                                 'instalaciones.alta_at AS alta_at, instalaciones.paso AS paso, '
                                 'instalaciones.motivo_no_realizada AS motivo_no_realizada, '
                                 'instalaciones.detalle_no_realizada AS detalle_no_realizada, '
                                 'instalaciones.reprogramada_para AS reprogramada_para, '
                                 'instalaciones.llegada_at AS llegada_at, instalaciones.llegada_lat AS '
                                 'llegada_lat, instalaciones.llegada_lng AS llegada_lng, '
                                 'instalaciones.llegada_precision_m AS llegada_precision_m, '
                                 'instalaciones.numero AS numero, instalaciones.provincia AS provincia, '
                                 'instalaciones.ciudad AS ciudad, instalaciones.parroquia AS parroquia, '
                                 'instalaciones.condicion_especial AS condicion_especial, '
                                 'instalaciones.tarifa_preferencial AS tarifa_preferencial, '
                                 'instalaciones.acepta_arbitraje AS acepta_arbitraje, '
                                 'instalaciones.equipo_modalidad AS equipo_modalidad, '
                                 'instalaciones.red_acceso AS red_acceso, instalaciones.tipo_cuenta AS '
                                 'tipo_cuenta, instalaciones.permanencia_meses AS permanencia_meses, '
                                 'instalaciones.valor_instalacion AS valor_instalacion, '
                                 'instalaciones.acepta_datos_personales AS acepta_datos_personales, '
                                 'instalaciones.ruta_fecha AS ruta_fecha, instalaciones.ruta_orden AS '
                                 'ruta_orden FROM instalaciones AS instalaciones WHERE NOT RLS_ACTIVA() OR '
                                 "(((SELECT COALESCE((SELECT PG_JSON_TIENE(usuarios_sistema.permisos, '*') "
                                 "OR PG_JSON_TIENE(usuarios_sistema.permisos, 'clientes.cartera') AS _col_0 "
                                 'FROM usuarios_sistema AS usuarios_sistema WHERE usuarios_sistema.auth_id = '
                                 'AUTH_UID() AND usuarios_sistema.activo LIMIT 1), TRUE /* Sin legajo no se '
                                 'bloquea a nadie: es una instalación que todavía no */ /* corrió la '
                                 'migración 66, y cerrarle el paso la dejaría inutilizable de */ /* golpe. '
                                 'El frente se comporta igual por la misma razón. */) AS _col_0) OR (NOT '
                                 'instalaciones.tecnico_id IS NULL AND instalaciones.tecnico_id = (SELECT '
                                 'usuarios_sistema.tecnico_id AS tecnico_id FROM usuarios_sistema AS '
                                 'usuarios_sistema WHERE usuarios_sistema.auth_id = AUTH_UID() AND '
                                 'usuarios_sistema.activo LIMIT 1)) OR instalaciones.client_id IN (SELECT '
                                 'cliente_id AS cliente_id FROM (WITH yo /* Solo el técnico y los clientes '
                                 'de sus trabajos. */ /* La cobranza SALIÓ de acá a propósito: abría la '
                                 'ficha completa cuando lo */ /* que hace falta es un nombre, un teléfono y '
                                 'un saldo. Va por */ /* `v_cobros_por_gestionar`, más abajo. */ AS (SELECT '
                                 'usuarios_sistema.id AS id, usuarios_sistema.tecnico_id AS tecnico_id FROM '
                                 'usuarios_sistema AS usuarios_sistema WHERE usuarios_sistema.auth_id = '
                                 'AUTH_UID() AND usuarios_sistema.activo LIMIT 1) SELECT t_fn1153.client_id '
                                 'AS cliente_id FROM tickets AS t_fn1153 JOIN yo AS yo ON '
                                 't_fn1153.tecnico_id = yo.tecnico_id WHERE NOT t_fn1153.client_id IS NULL '
                                 'UNION SELECT i_fn1153.client_id AS client_id FROM instalaciones AS '
                                 'i_fn1153 JOIN yo AS yo ON i_fn1153.tecnico_id = yo.tecnico_id WHERE NOT '
                                 'i_fn1153.client_id IS NULL) AS _0)) OR ((SELECT COALESCE((SELECT '
                                 "PG_JSON_TIENE(usuarios_sistema.permisos, '*') OR "
                                 "PG_JSON_TIENE(usuarios_sistema.permisos, 'clientes.cartera') AS _col_0 "
                                 'FROM usuarios_sistema AS usuarios_sistema WHERE usuarios_sistema.auth_id = '
                                 'AUTH_UID() AND usuarios_sistema.activo LIMIT 1), TRUE /* Sin legajo no se '
                                 'bloquea a nadie: es una instalación que todavía no */ /* corrió la '
                                 'migración 66, y cerrarle el paso la dejaría inutilizable de */ /* golpe. '
                                 'El frente se comporta igual por la misma razón. */) AS _col_0) OR (NOT '
                                 'instalaciones.tecnico_id IS NULL AND instalaciones.tecnico_id = (SELECT '
                                 'usuarios_sistema.tecnico_id AS tecnico_id FROM usuarios_sistema AS '
                                 'usuarios_sistema WHERE usuarios_sistema.auth_id = AUTH_UID() AND '
                                 'usuarios_sistema.activo LIMIT 1))) OR (instalaciones.id IN (SELECT '
                                 'pr.instalacion_id AS instalacion_id FROM (SELECT prospectos.id AS id, '
                                 'PG_DESCIFRAR(prospectos.nombre) AS nombre, '
                                 'PG_DESCIFRAR(prospectos.identificacion) AS identificacion, '
                                 'PG_DESCIFRAR(prospectos.telefono) AS telefono, '
                                 'PG_DESCIFRAR(prospectos.telefono_whatsapp) AS telefono_whatsapp, '
                                 'PG_DESCIFRAR(prospectos.email) AS email, '
                                 'PG_DESCIFRAR(prospectos.direccion) AS direccion, '
                                 'PG_DESCIFRAR(prospectos.referencia) AS referencia, prospectos.sector AS '
                                 'sector, prospectos.canton AS canton, prospectos.latitud AS latitud, '
                                 'prospectos.longitud AS longitud, prospectos.plan_id AS plan_id, '
                                 'prospectos.origen AS origen, prospectos.estado AS estado, '
                                 'prospectos.motivo_perdida AS motivo_perdida, prospectos.vendedor_id AS '
                                 'vendedor_id, prospectos.cobertura AS cobertura, prospectos.nap_id AS '
                                 'nap_id, prospectos.distancia_nodo_m AS distancia_nodo_m, '
                                 'prospectos.proxima_accion AS proxima_accion, prospectos.instalacion_id AS '
                                 'instalacion_id, prospectos.cliente_id AS cliente_id, prospectos.notas AS '
                                 'notas, prospectos.creado_por AS creado_por, prospectos.creado_en AS '
                                 'creado_en, prospectos.actualizado_en AS actualizado_en, '
                                 'prospectos.archivado_en AS archivado_en, prospectos.ganado_en AS '
                                 'ganado_en, prospectos.promocion_id AS promocion_id, '
                                 'prospectos.tipo_operacion AS tipo_operacion FROM prospectos AS prospectos '
                                 'WHERE NOT RLS_ACTIVA() OR (((SELECT COALESCE((SELECT '
                                 "PG_JSON_TIENE(usuarios_sistema.permisos, '*') OR "
                                 "PG_JSON_TIENE(usuarios_sistema.permisos, 'clientes.cartera') AS _col_0 "
                                 'FROM usuarios_sistema AS usuarios_sistema WHERE usuarios_sistema.auth_id = '
                                 'AUTH_UID() AND usuarios_sistema.activo LIMIT 1), TRUE /* Sin legajo no se '
                                 'bloquea a nadie: es una instalación que todavía no */ /* corrió la '
                                 'migración 66, y cerrarle el paso la dejaría inutilizable de */ /* golpe. '
                                 'El frente se comporta igual por la misma razón. */) AS _col_0) OR '
                                 '(prospectos.archivado_en IS NULL AND ((SELECT COALESCE((SELECT '
                                 "PG_JSON_TIENE(usuarios_sistema.permisos, '*') OR "
                                 "PG_JSON_TIENE(usuarios_sistema.permisos, 'ventas.equipo') AS _col_0 FROM "
                                 'usuarios_sistema AS usuarios_sistema WHERE usuarios_sistema.auth_id = '
                                 'AUTH_UID() AND usuarios_sistema.activo LIMIT 1), TRUE /* Sin legajo se '
                                 'permite, igual que el resto de los ayudantes: una */ /* instalación sin la '
                                 'migración 66 no puede quedarse sin módulo comercial. */) AS _col_0) OR '
                                 'prospectos.vendedor_id = (SELECT usuarios_sistema.id AS id FROM '
                                 'usuarios_sistema AS usuarios_sistema WHERE usuarios_sistema.auth_id = '
                                 'AUTH_UID() AND usuarios_sistema.activo LIMIT 1) OR prospectos.creado_por = '
                                 '(SELECT usuarios_sistema.id AS id FROM usuarios_sistema AS '
                                 'usuarios_sistema WHERE usuarios_sistema.auth_id = AUTH_UID() AND '
                                 'usuarios_sistema.activo LIMIT 1)))) OR ((SELECT COALESCE((SELECT '
                                 "PG_JSON_TIENE(usuarios_sistema.permisos, '*') OR "
                                 "PG_JSON_TIENE(usuarios_sistema.permisos, 'clientes.cartera') AS _col_0 "
                                 'FROM usuarios_sistema AS usuarios_sistema WHERE usuarios_sistema.auth_id = '
                                 'AUTH_UID() AND usuarios_sistema.activo LIMIT 1), TRUE /* Sin legajo no se '
                                 'bloquea a nadie: es una instalación que todavía no */ /* corrió la '
                                 'migración 66, y cerrarle el paso la dejaría inutilizable de */ /* golpe. '
                                 'El frente se comporta igual por la misma razón. */) AS _col_0) OR '
                                 '(prospectos.archivado_en IS NULL AND ((SELECT COALESCE((SELECT '
                                 "PG_JSON_TIENE(usuarios_sistema.permisos, '*') OR "
                                 "PG_JSON_TIENE(usuarios_sistema.permisos, 'ventas.equipo') AS _col_0 FROM "
                                 'usuarios_sistema AS usuarios_sistema WHERE usuarios_sistema.auth_id = '
                                 'AUTH_UID() AND usuarios_sistema.activo LIMIT 1), TRUE /* Sin legajo se '
                                 'permite, igual que el resto de los ayudantes: una */ /* instalación sin la '
                                 'migración 66 no puede quedarse sin módulo comercial. */) AS _col_0) OR '
                                 'prospectos.vendedor_id = (SELECT usuarios_sistema.id AS id FROM '
                                 'usuarios_sistema AS usuarios_sistema WHERE usuarios_sistema.auth_id = '
                                 'AUTH_UID() AND usuarios_sistema.activo LIMIT 1) OR prospectos.creado_por = '
                                 '(SELECT usuarios_sistema.id AS id FROM usuarios_sistema AS '
                                 'usuarios_sistema WHERE usuarios_sistema.auth_id = AUTH_UID() AND '
                                 'usuarios_sistema.activo LIMIT 1)))))) AS pr WHERE pr.vendedor_id = (SELECT '
                                 'usuarios_sistema.id AS id FROM usuarios_sistema AS usuarios_sistema WHERE '
                                 'usuarios_sistema.auth_id = AUTH_UID() AND usuarios_sistema.activo LIMIT 1) '
                                 'AND NOT pr.instalacion_id IS NULL)))) AS instalaciones))',
                       'update': '(instalacion_fotos.instalacion_id IN (SELECT instalaciones.id AS id FROM '
                                 '(SELECT instalaciones.id AS id, instalaciones.client_id AS client_id, '
                                 'instalaciones.tipo AS tipo, instalaciones.estado AS estado, '
                                 'instalaciones.fecha AS fecha, instalaciones.hora AS hora, '
                                 'instalaciones.tecnico AS tecnico, instalaciones.onu_id AS onu_id, '
                                 'instalaciones.equipo AS equipo, instalaciones.metros_cable AS '
                                 'metros_cable, instalaciones.costo AS costo, '
                                 'PG_DESCIFRAR(instalaciones.direccion) AS direccion, instalaciones.latitud '
                                 'AS latitud, instalaciones.longitud AS longitud, instalaciones.notas AS '
                                 'notas, instalaciones.created_by AS created_by, instalaciones.created_at AS '
                                 'created_at, instalaciones.updated_at AS updated_at, '
                                 'PG_DESCIFRAR(instalaciones.nombre) AS nombre, '
                                 'instalaciones.tipo_identificacion AS tipo_identificacion, '
                                 'PG_DESCIFRAR(instalaciones.identificacion) AS identificacion, '
                                 'PG_DESCIFRAR(instalaciones.telefono) AS telefono, '
                                 'PG_DESCIFRAR(instalaciones.telefono_whatsapp) AS telefono_whatsapp, '
                                 'PG_DESCIFRAR(instalaciones.email) AS email, '
                                 'PG_DESCIFRAR(instalaciones.referencia) AS referencia, instalaciones.sector '
                                 'AS sector, instalaciones.canton AS canton, instalaciones.tecnologia AS '
                                 'tecnologia, instalaciones.factibilidad AS factibilidad, '
                                 'instalaciones.factibilidad_notas AS factibilidad_notas, '
                                 'instalaciones.factibilidad_at AS factibilidad_at, instalaciones.nap_id AS '
                                 'nap_id, instalaciones.puerto_nap AS puerto_nap, instalaciones.torre_id AS '
                                 'torre_id, instalaciones.distancia_nodo_m AS distancia_nodo_m, '
                                 'instalaciones.tecnico_id AS tecnico_id, instalaciones.cuadrilla_id AS '
                                 'cuadrilla_id, instalaciones.franja AS franja, instalaciones.plan_id AS '
                                 'plan_id, instalaciones.precio_mensual AS precio_mensual, '
                                 'instalaciones.dia_facturacion AS dia_facturacion, '
                                 'instalaciones.equipo_tipo AS equipo_tipo, instalaciones.equipo_modelo AS '
                                 'equipo_modelo, instalaciones.equipo_sn AS equipo_sn, '
                                 'instalaciones.equipo_mac AS equipo_mac, instalaciones.equipo_origen AS '
                                 'equipo_origen, instalaciones.olt_id AS olt_id, instalaciones.puerto_pon AS '
                                 'puerto_pon, instalaciones.rx_power_dbm AS rx_power_dbm, '
                                 'instalaciones.tx_power_dbm AS tx_power_dbm, instalaciones.senal_dbm AS '
                                 'senal_dbm, instalaciones.ccq AS ccq, instalaciones.lectura_at AS '
                                 'lectura_at, instalaciones.router_id AS router_id, '
                                 'instalaciones.tipo_conexion AS tipo_conexion, instalaciones.tipo_ip AS '
                                 'tipo_ip, instalaciones.usuario_ppp AS usuario_ppp, '
                                 'PG_DESCIFRAR(instalaciones.clave_ppp) AS clave_ppp, instalaciones.ip AS '
                                 'ip, instalaciones.ipv6 AS ipv6, instalaciones.pool AS pool, '
                                 'instalaciones.aprovisionado_at AS aprovisionado_at, instalaciones.ping_ok '
                                 'AS ping_ok, instalaciones.ping_ms AS ping_ms, instalaciones.ping_perdida '
                                 'AS ping_perdida, instalaciones.test_bajada_mbps AS test_bajada_mbps, '
                                 'instalaciones.test_subida_mbps AS test_subida_mbps, '
                                 'instalaciones.pruebas_at AS pruebas_at, instalaciones.firma_b64 AS '
                                 'firma_b64, PG_DESCIFRAR(instalaciones.firmante_nombre) AS firmante_nombre, '
                                 'PG_DESCIFRAR(instalaciones.firmante_identificacion) AS '
                                 'firmante_identificacion, instalaciones.observaciones AS observaciones, '
                                 'instalaciones.alta_at AS alta_at, instalaciones.paso AS paso, '
                                 'instalaciones.motivo_no_realizada AS motivo_no_realizada, '
                                 'instalaciones.detalle_no_realizada AS detalle_no_realizada, '
                                 'instalaciones.reprogramada_para AS reprogramada_para, '
                                 'instalaciones.llegada_at AS llegada_at, instalaciones.llegada_lat AS '
                                 'llegada_lat, instalaciones.llegada_lng AS llegada_lng, '
                                 'instalaciones.llegada_precision_m AS llegada_precision_m, '
                                 'instalaciones.numero AS numero, instalaciones.provincia AS provincia, '
                                 'instalaciones.ciudad AS ciudad, instalaciones.parroquia AS parroquia, '
                                 'instalaciones.condicion_especial AS condicion_especial, '
                                 'instalaciones.tarifa_preferencial AS tarifa_preferencial, '
                                 'instalaciones.acepta_arbitraje AS acepta_arbitraje, '
                                 'instalaciones.equipo_modalidad AS equipo_modalidad, '
                                 'instalaciones.red_acceso AS red_acceso, instalaciones.tipo_cuenta AS '
                                 'tipo_cuenta, instalaciones.permanencia_meses AS permanencia_meses, '
                                 'instalaciones.valor_instalacion AS valor_instalacion, '
                                 'instalaciones.acepta_datos_personales AS acepta_datos_personales, '
                                 'instalaciones.ruta_fecha AS ruta_fecha, instalaciones.ruta_orden AS '
                                 'ruta_orden FROM instalaciones AS instalaciones WHERE NOT RLS_ACTIVA() OR '
                                 "(((SELECT COALESCE((SELECT PG_JSON_TIENE(usuarios_sistema.permisos, '*') "
                                 "OR PG_JSON_TIENE(usuarios_sistema.permisos, 'clientes.cartera') AS _col_0 "
                                 'FROM usuarios_sistema AS usuarios_sistema WHERE usuarios_sistema.auth_id = '
                                 'AUTH_UID() AND usuarios_sistema.activo LIMIT 1), TRUE /* Sin legajo no se '
                                 'bloquea a nadie: es una instalación que todavía no */ /* corrió la '
                                 'migración 66, y cerrarle el paso la dejaría inutilizable de */ /* golpe. '
                                 'El frente se comporta igual por la misma razón. */) AS _col_0) OR (NOT '
                                 'instalaciones.tecnico_id IS NULL AND instalaciones.tecnico_id = (SELECT '
                                 'usuarios_sistema.tecnico_id AS tecnico_id FROM usuarios_sistema AS '
                                 'usuarios_sistema WHERE usuarios_sistema.auth_id = AUTH_UID() AND '
                                 'usuarios_sistema.activo LIMIT 1)) OR instalaciones.client_id IN (SELECT '
                                 'cliente_id AS cliente_id FROM (WITH yo /* Solo el técnico y los clientes '
                                 'de sus trabajos. */ /* La cobranza SALIÓ de acá a propósito: abría la '
                                 'ficha completa cuando lo */ /* que hace falta es un nombre, un teléfono y '
                                 'un saldo. Va por */ /* `v_cobros_por_gestionar`, más abajo. */ AS (SELECT '
                                 'usuarios_sistema.id AS id, usuarios_sistema.tecnico_id AS tecnico_id FROM '
                                 'usuarios_sistema AS usuarios_sistema WHERE usuarios_sistema.auth_id = '
                                 'AUTH_UID() AND usuarios_sistema.activo LIMIT 1) SELECT t_fn1181.client_id '
                                 'AS cliente_id FROM tickets AS t_fn1181 JOIN yo AS yo ON '
                                 't_fn1181.tecnico_id = yo.tecnico_id WHERE NOT t_fn1181.client_id IS NULL '
                                 'UNION SELECT i_fn1181.client_id AS client_id FROM instalaciones AS '
                                 'i_fn1181 JOIN yo AS yo ON i_fn1181.tecnico_id = yo.tecnico_id WHERE NOT '
                                 'i_fn1181.client_id IS NULL) AS _0)) OR ((SELECT COALESCE((SELECT '
                                 "PG_JSON_TIENE(usuarios_sistema.permisos, '*') OR "
                                 "PG_JSON_TIENE(usuarios_sistema.permisos, 'clientes.cartera') AS _col_0 "
                                 'FROM usuarios_sistema AS usuarios_sistema WHERE usuarios_sistema.auth_id = '
                                 'AUTH_UID() AND usuarios_sistema.activo LIMIT 1), TRUE /* Sin legajo no se '
                                 'bloquea a nadie: es una instalación que todavía no */ /* corrió la '
                                 'migración 66, y cerrarle el paso la dejaría inutilizable de */ /* golpe. '
                                 'El frente se comporta igual por la misma razón. */) AS _col_0) OR (NOT '
                                 'instalaciones.tecnico_id IS NULL AND instalaciones.tecnico_id = (SELECT '
                                 'usuarios_sistema.tecnico_id AS tecnico_id FROM usuarios_sistema AS '
                                 'usuarios_sistema WHERE usuarios_sistema.auth_id = AUTH_UID() AND '
                                 'usuarios_sistema.activo LIMIT 1))) OR (instalaciones.id IN (SELECT '
                                 'pr.instalacion_id AS instalacion_id FROM (SELECT prospectos.id AS id, '
                                 'PG_DESCIFRAR(prospectos.nombre) AS nombre, '
                                 'PG_DESCIFRAR(prospectos.identificacion) AS identificacion, '
                                 'PG_DESCIFRAR(prospectos.telefono) AS telefono, '
                                 'PG_DESCIFRAR(prospectos.telefono_whatsapp) AS telefono_whatsapp, '
                                 'PG_DESCIFRAR(prospectos.email) AS email, '
                                 'PG_DESCIFRAR(prospectos.direccion) AS direccion, '
                                 'PG_DESCIFRAR(prospectos.referencia) AS referencia, prospectos.sector AS '
                                 'sector, prospectos.canton AS canton, prospectos.latitud AS latitud, '
                                 'prospectos.longitud AS longitud, prospectos.plan_id AS plan_id, '
                                 'prospectos.origen AS origen, prospectos.estado AS estado, '
                                 'prospectos.motivo_perdida AS motivo_perdida, prospectos.vendedor_id AS '
                                 'vendedor_id, prospectos.cobertura AS cobertura, prospectos.nap_id AS '
                                 'nap_id, prospectos.distancia_nodo_m AS distancia_nodo_m, '
                                 'prospectos.proxima_accion AS proxima_accion, prospectos.instalacion_id AS '
                                 'instalacion_id, prospectos.cliente_id AS cliente_id, prospectos.notas AS '
                                 'notas, prospectos.creado_por AS creado_por, prospectos.creado_en AS '
                                 'creado_en, prospectos.actualizado_en AS actualizado_en, '
                                 'prospectos.archivado_en AS archivado_en, prospectos.ganado_en AS '
                                 'ganado_en, prospectos.promocion_id AS promocion_id, '
                                 'prospectos.tipo_operacion AS tipo_operacion FROM prospectos AS prospectos '
                                 'WHERE NOT RLS_ACTIVA() OR (((SELECT COALESCE((SELECT '
                                 "PG_JSON_TIENE(usuarios_sistema.permisos, '*') OR "
                                 "PG_JSON_TIENE(usuarios_sistema.permisos, 'clientes.cartera') AS _col_0 "
                                 'FROM usuarios_sistema AS usuarios_sistema WHERE usuarios_sistema.auth_id = '
                                 'AUTH_UID() AND usuarios_sistema.activo LIMIT 1), TRUE /* Sin legajo no se '
                                 'bloquea a nadie: es una instalación que todavía no */ /* corrió la '
                                 'migración 66, y cerrarle el paso la dejaría inutilizable de */ /* golpe. '
                                 'El frente se comporta igual por la misma razón. */) AS _col_0) OR '
                                 '(prospectos.archivado_en IS NULL AND ((SELECT COALESCE((SELECT '
                                 "PG_JSON_TIENE(usuarios_sistema.permisos, '*') OR "
                                 "PG_JSON_TIENE(usuarios_sistema.permisos, 'ventas.equipo') AS _col_0 FROM "
                                 'usuarios_sistema AS usuarios_sistema WHERE usuarios_sistema.auth_id = '
                                 'AUTH_UID() AND usuarios_sistema.activo LIMIT 1), TRUE /* Sin legajo se '
                                 'permite, igual que el resto de los ayudantes: una */ /* instalación sin la '
                                 'migración 66 no puede quedarse sin módulo comercial. */) AS _col_0) OR '
                                 'prospectos.vendedor_id = (SELECT usuarios_sistema.id AS id FROM '
                                 'usuarios_sistema AS usuarios_sistema WHERE usuarios_sistema.auth_id = '
                                 'AUTH_UID() AND usuarios_sistema.activo LIMIT 1) OR prospectos.creado_por = '
                                 '(SELECT usuarios_sistema.id AS id FROM usuarios_sistema AS '
                                 'usuarios_sistema WHERE usuarios_sistema.auth_id = AUTH_UID() AND '
                                 'usuarios_sistema.activo LIMIT 1)))) OR ((SELECT COALESCE((SELECT '
                                 "PG_JSON_TIENE(usuarios_sistema.permisos, '*') OR "
                                 "PG_JSON_TIENE(usuarios_sistema.permisos, 'clientes.cartera') AS _col_0 "
                                 'FROM usuarios_sistema AS usuarios_sistema WHERE usuarios_sistema.auth_id = '
                                 'AUTH_UID() AND usuarios_sistema.activo LIMIT 1), TRUE /* Sin legajo no se '
                                 'bloquea a nadie: es una instalación que todavía no */ /* corrió la '
                                 'migración 66, y cerrarle el paso la dejaría inutilizable de */ /* golpe. '
                                 'El frente se comporta igual por la misma razón. */) AS _col_0) OR '
                                 '(prospectos.archivado_en IS NULL AND ((SELECT COALESCE((SELECT '
                                 "PG_JSON_TIENE(usuarios_sistema.permisos, '*') OR "
                                 "PG_JSON_TIENE(usuarios_sistema.permisos, 'ventas.equipo') AS _col_0 FROM "
                                 'usuarios_sistema AS usuarios_sistema WHERE usuarios_sistema.auth_id = '
                                 'AUTH_UID() AND usuarios_sistema.activo LIMIT 1), TRUE /* Sin legajo se '
                                 'permite, igual que el resto de los ayudantes: una */ /* instalación sin la '
                                 'migración 66 no puede quedarse sin módulo comercial. */) AS _col_0) OR '
                                 'prospectos.vendedor_id = (SELECT usuarios_sistema.id AS id FROM '
                                 'usuarios_sistema AS usuarios_sistema WHERE usuarios_sistema.auth_id = '
                                 'AUTH_UID() AND usuarios_sistema.activo LIMIT 1) OR prospectos.creado_por = '
                                 '(SELECT usuarios_sistema.id AS id FROM usuarios_sistema AS '
                                 'usuarios_sistema WHERE usuarios_sistema.auth_id = AUTH_UID() AND '
                                 'usuarios_sistema.activo LIMIT 1)))))) AS pr WHERE pr.vendedor_id = (SELECT '
                                 'usuarios_sistema.id AS id FROM usuarios_sistema AS usuarios_sistema WHERE '
                                 'usuarios_sistema.auth_id = AUTH_UID() AND usuarios_sistema.activo LIMIT 1) '
                                 'AND NOT pr.instalacion_id IS NULL)))) AS instalaciones))',
                       'update_check': '(instalacion_fotos.instalacion_id IN (SELECT instalaciones.id AS id '
                                       'FROM (SELECT instalaciones.id AS id, instalaciones.client_id AS '
                                       'client_id, instalaciones.tipo AS tipo, instalaciones.estado AS '
                                       'estado, instalaciones.fecha AS fecha, instalaciones.hora AS hora, '
                                       'instalaciones.tecnico AS tecnico, instalaciones.onu_id AS onu_id, '
                                       'instalaciones.equipo AS equipo, instalaciones.metros_cable AS '
                                       'metros_cable, instalaciones.costo AS costo, '
                                       'PG_DESCIFRAR(instalaciones.direccion) AS direccion, '
                                       'instalaciones.latitud AS latitud, instalaciones.longitud AS '
                                       'longitud, instalaciones.notas AS notas, instalaciones.created_by AS '
                                       'created_by, instalaciones.created_at AS created_at, '
                                       'instalaciones.updated_at AS updated_at, '
                                       'PG_DESCIFRAR(instalaciones.nombre) AS nombre, '
                                       'instalaciones.tipo_identificacion AS tipo_identificacion, '
                                       'PG_DESCIFRAR(instalaciones.identificacion) AS identificacion, '
                                       'PG_DESCIFRAR(instalaciones.telefono) AS telefono, '
                                       'PG_DESCIFRAR(instalaciones.telefono_whatsapp) AS telefono_whatsapp, '
                                       'PG_DESCIFRAR(instalaciones.email) AS email, '
                                       'PG_DESCIFRAR(instalaciones.referencia) AS referencia, '
                                       'instalaciones.sector AS sector, instalaciones.canton AS canton, '
                                       'instalaciones.tecnologia AS tecnologia, instalaciones.factibilidad '
                                       'AS factibilidad, instalaciones.factibilidad_notas AS '
                                       'factibilidad_notas, instalaciones.factibilidad_at AS '
                                       'factibilidad_at, instalaciones.nap_id AS nap_id, '
                                       'instalaciones.puerto_nap AS puerto_nap, instalaciones.torre_id AS '
                                       'torre_id, instalaciones.distancia_nodo_m AS distancia_nodo_m, '
                                       'instalaciones.tecnico_id AS tecnico_id, instalaciones.cuadrilla_id '
                                       'AS cuadrilla_id, instalaciones.franja AS franja, '
                                       'instalaciones.plan_id AS plan_id, instalaciones.precio_mensual AS '
                                       'precio_mensual, instalaciones.dia_facturacion AS dia_facturacion, '
                                       'instalaciones.equipo_tipo AS equipo_tipo, '
                                       'instalaciones.equipo_modelo AS equipo_modelo, '
                                       'instalaciones.equipo_sn AS equipo_sn, instalaciones.equipo_mac AS '
                                       'equipo_mac, instalaciones.equipo_origen AS equipo_origen, '
                                       'instalaciones.olt_id AS olt_id, instalaciones.puerto_pon AS '
                                       'puerto_pon, instalaciones.rx_power_dbm AS rx_power_dbm, '
                                       'instalaciones.tx_power_dbm AS tx_power_dbm, instalaciones.senal_dbm '
                                       'AS senal_dbm, instalaciones.ccq AS ccq, instalaciones.lectura_at AS '
                                       'lectura_at, instalaciones.router_id AS router_id, '
                                       'instalaciones.tipo_conexion AS tipo_conexion, instalaciones.tipo_ip '
                                       'AS tipo_ip, instalaciones.usuario_ppp AS usuario_ppp, '
                                       'PG_DESCIFRAR(instalaciones.clave_ppp) AS clave_ppp, instalaciones.ip '
                                       'AS ip, instalaciones.ipv6 AS ipv6, instalaciones.pool AS pool, '
                                       'instalaciones.aprovisionado_at AS aprovisionado_at, '
                                       'instalaciones.ping_ok AS ping_ok, instalaciones.ping_ms AS ping_ms, '
                                       'instalaciones.ping_perdida AS ping_perdida, '
                                       'instalaciones.test_bajada_mbps AS test_bajada_mbps, '
                                       'instalaciones.test_subida_mbps AS test_subida_mbps, '
                                       'instalaciones.pruebas_at AS pruebas_at, instalaciones.firma_b64 AS '
                                       'firma_b64, PG_DESCIFRAR(instalaciones.firmante_nombre) AS '
                                       'firmante_nombre, PG_DESCIFRAR(instalaciones.firmante_identificacion) '
                                       'AS firmante_identificacion, instalaciones.observaciones AS '
                                       'observaciones, instalaciones.alta_at AS alta_at, instalaciones.paso '
                                       'AS paso, instalaciones.motivo_no_realizada AS motivo_no_realizada, '
                                       'instalaciones.detalle_no_realizada AS detalle_no_realizada, '
                                       'instalaciones.reprogramada_para AS reprogramada_para, '
                                       'instalaciones.llegada_at AS llegada_at, instalaciones.llegada_lat AS '
                                       'llegada_lat, instalaciones.llegada_lng AS llegada_lng, '
                                       'instalaciones.llegada_precision_m AS llegada_precision_m, '
                                       'instalaciones.numero AS numero, instalaciones.provincia AS '
                                       'provincia, instalaciones.ciudad AS ciudad, instalaciones.parroquia '
                                       'AS parroquia, instalaciones.condicion_especial AS '
                                       'condicion_especial, instalaciones.tarifa_preferencial AS '
                                       'tarifa_preferencial, instalaciones.acepta_arbitraje AS '
                                       'acepta_arbitraje, instalaciones.equipo_modalidad AS '
                                       'equipo_modalidad, instalaciones.red_acceso AS red_acceso, '
                                       'instalaciones.tipo_cuenta AS tipo_cuenta, '
                                       'instalaciones.permanencia_meses AS permanencia_meses, '
                                       'instalaciones.valor_instalacion AS valor_instalacion, '
                                       'instalaciones.acepta_datos_personales AS acepta_datos_personales, '
                                       'instalaciones.ruta_fecha AS ruta_fecha, instalaciones.ruta_orden AS '
                                       'ruta_orden FROM instalaciones AS instalaciones WHERE NOT '
                                       'RLS_ACTIVA() OR (((SELECT COALESCE((SELECT '
                                       "PG_JSON_TIENE(usuarios_sistema.permisos, '*') OR "
                                       "PG_JSON_TIENE(usuarios_sistema.permisos, 'clientes.cartera') AS "
                                       '_col_0 FROM usuarios_sistema AS usuarios_sistema WHERE '
                                       'usuarios_sistema.auth_id = AUTH_UID() AND usuarios_sistema.activo '
                                       'LIMIT 1), TRUE /* Sin legajo no se bloquea a nadie: es una '
                                       'instalación que todavía no */ /* corrió la migración 66, y cerrarle '
                                       'el paso la dejaría inutilizable de */ /* golpe. El frente se '
                                       'comporta igual por la misma razón. */) AS _col_0) OR (NOT '
                                       'instalaciones.tecnico_id IS NULL AND instalaciones.tecnico_id = '
                                       '(SELECT usuarios_sistema.tecnico_id AS tecnico_id FROM '
                                       'usuarios_sistema AS usuarios_sistema WHERE usuarios_sistema.auth_id '
                                       '= AUTH_UID() AND usuarios_sistema.activo LIMIT 1)) OR '
                                       'instalaciones.client_id IN (SELECT cliente_id AS cliente_id FROM '
                                       '(WITH yo /* Solo el técnico y los clientes de sus trabajos. */ /* La '
                                       'cobranza SALIÓ de acá a propósito: abría la ficha completa cuando lo '
                                       '*/ /* que hace falta es un nombre, un teléfono y un saldo. Va por */ '
                                       '/* `v_cobros_por_gestionar`, más abajo. */ AS (SELECT '
                                       'usuarios_sistema.id AS id, usuarios_sistema.tecnico_id AS tecnico_id '
                                       'FROM usuarios_sistema AS usuarios_sistema WHERE '
                                       'usuarios_sistema.auth_id = AUTH_UID() AND usuarios_sistema.activo '
                                       'LIMIT 1) SELECT t_fn1195.client_id AS cliente_id FROM tickets AS '
                                       't_fn1195 JOIN yo AS yo ON t_fn1195.tecnico_id = yo.tecnico_id WHERE '
                                       'NOT t_fn1195.client_id IS NULL UNION SELECT i_fn1195.client_id AS '
                                       'client_id FROM instalaciones AS i_fn1195 JOIN yo AS yo ON '
                                       'i_fn1195.tecnico_id = yo.tecnico_id WHERE NOT i_fn1195.client_id IS '
                                       'NULL) AS _0)) OR ((SELECT COALESCE((SELECT '
                                       "PG_JSON_TIENE(usuarios_sistema.permisos, '*') OR "
                                       "PG_JSON_TIENE(usuarios_sistema.permisos, 'clientes.cartera') AS "
                                       '_col_0 FROM usuarios_sistema AS usuarios_sistema WHERE '
                                       'usuarios_sistema.auth_id = AUTH_UID() AND usuarios_sistema.activo '
                                       'LIMIT 1), TRUE /* Sin legajo no se bloquea a nadie: es una '
                                       'instalación que todavía no */ /* corrió la migración 66, y cerrarle '
                                       'el paso la dejaría inutilizable de */ /* golpe. El frente se '
                                       'comporta igual por la misma razón. */) AS _col_0) OR (NOT '
                                       'instalaciones.tecnico_id IS NULL AND instalaciones.tecnico_id = '
                                       '(SELECT usuarios_sistema.tecnico_id AS tecnico_id FROM '
                                       'usuarios_sistema AS usuarios_sistema WHERE usuarios_sistema.auth_id '
                                       '= AUTH_UID() AND usuarios_sistema.activo LIMIT 1))) OR '
                                       '(instalaciones.id IN (SELECT pr.instalacion_id AS instalacion_id '
                                       'FROM (SELECT prospectos.id AS id, PG_DESCIFRAR(prospectos.nombre) AS '
                                       'nombre, PG_DESCIFRAR(prospectos.identificacion) AS identificacion, '
                                       'PG_DESCIFRAR(prospectos.telefono) AS telefono, '
                                       'PG_DESCIFRAR(prospectos.telefono_whatsapp) AS telefono_whatsapp, '
                                       'PG_DESCIFRAR(prospectos.email) AS email, '
                                       'PG_DESCIFRAR(prospectos.direccion) AS direccion, '
                                       'PG_DESCIFRAR(prospectos.referencia) AS referencia, prospectos.sector '
                                       'AS sector, prospectos.canton AS canton, prospectos.latitud AS '
                                       'latitud, prospectos.longitud AS longitud, prospectos.plan_id AS '
                                       'plan_id, prospectos.origen AS origen, prospectos.estado AS estado, '
                                       'prospectos.motivo_perdida AS motivo_perdida, prospectos.vendedor_id '
                                       'AS vendedor_id, prospectos.cobertura AS cobertura, prospectos.nap_id '
                                       'AS nap_id, prospectos.distancia_nodo_m AS distancia_nodo_m, '
                                       'prospectos.proxima_accion AS proxima_accion, '
                                       'prospectos.instalacion_id AS instalacion_id, prospectos.cliente_id '
                                       'AS cliente_id, prospectos.notas AS notas, prospectos.creado_por AS '
                                       'creado_por, prospectos.creado_en AS creado_en, '
                                       'prospectos.actualizado_en AS actualizado_en, prospectos.archivado_en '
                                       'AS archivado_en, prospectos.ganado_en AS ganado_en, '
                                       'prospectos.promocion_id AS promocion_id, prospectos.tipo_operacion '
                                       'AS tipo_operacion FROM prospectos AS prospectos WHERE NOT '
                                       'RLS_ACTIVA() OR (((SELECT COALESCE((SELECT '
                                       "PG_JSON_TIENE(usuarios_sistema.permisos, '*') OR "
                                       "PG_JSON_TIENE(usuarios_sistema.permisos, 'clientes.cartera') AS "
                                       '_col_0 FROM usuarios_sistema AS usuarios_sistema WHERE '
                                       'usuarios_sistema.auth_id = AUTH_UID() AND usuarios_sistema.activo '
                                       'LIMIT 1), TRUE /* Sin legajo no se bloquea a nadie: es una '
                                       'instalación que todavía no */ /* corrió la migración 66, y cerrarle '
                                       'el paso la dejaría inutilizable de */ /* golpe. El frente se '
                                       'comporta igual por la misma razón. */) AS _col_0) OR '
                                       '(prospectos.archivado_en IS NULL AND ((SELECT COALESCE((SELECT '
                                       "PG_JSON_TIENE(usuarios_sistema.permisos, '*') OR "
                                       "PG_JSON_TIENE(usuarios_sistema.permisos, 'ventas.equipo') AS _col_0 "
                                       'FROM usuarios_sistema AS usuarios_sistema WHERE '
                                       'usuarios_sistema.auth_id = AUTH_UID() AND usuarios_sistema.activo '
                                       'LIMIT 1), TRUE /* Sin legajo se permite, igual que el resto de los '
                                       'ayudantes: una */ /* instalación sin la migración 66 no puede '
                                       'quedarse sin módulo comercial. */) AS _col_0) OR '
                                       'prospectos.vendedor_id = (SELECT usuarios_sistema.id AS id FROM '
                                       'usuarios_sistema AS usuarios_sistema WHERE usuarios_sistema.auth_id '
                                       '= AUTH_UID() AND usuarios_sistema.activo LIMIT 1) OR '
                                       'prospectos.creado_por = (SELECT usuarios_sistema.id AS id FROM '
                                       'usuarios_sistema AS usuarios_sistema WHERE usuarios_sistema.auth_id '
                                       '= AUTH_UID() AND usuarios_sistema.activo LIMIT 1)))) OR ((SELECT '
                                       "COALESCE((SELECT PG_JSON_TIENE(usuarios_sistema.permisos, '*') OR "
                                       "PG_JSON_TIENE(usuarios_sistema.permisos, 'clientes.cartera') AS "
                                       '_col_0 FROM usuarios_sistema AS usuarios_sistema WHERE '
                                       'usuarios_sistema.auth_id = AUTH_UID() AND usuarios_sistema.activo '
                                       'LIMIT 1), TRUE /* Sin legajo no se bloquea a nadie: es una '
                                       'instalación que todavía no */ /* corrió la migración 66, y cerrarle '
                                       'el paso la dejaría inutilizable de */ /* golpe. El frente se '
                                       'comporta igual por la misma razón. */) AS _col_0) OR '
                                       '(prospectos.archivado_en IS NULL AND ((SELECT COALESCE((SELECT '
                                       "PG_JSON_TIENE(usuarios_sistema.permisos, '*') OR "
                                       "PG_JSON_TIENE(usuarios_sistema.permisos, 'ventas.equipo') AS _col_0 "
                                       'FROM usuarios_sistema AS usuarios_sistema WHERE '
                                       'usuarios_sistema.auth_id = AUTH_UID() AND usuarios_sistema.activo '
                                       'LIMIT 1), TRUE /* Sin legajo se permite, igual que el resto de los '
                                       'ayudantes: una */ /* instalación sin la migración 66 no puede '
                                       'quedarse sin módulo comercial. */) AS _col_0) OR '
                                       'prospectos.vendedor_id = (SELECT usuarios_sistema.id AS id FROM '
                                       'usuarios_sistema AS usuarios_sistema WHERE usuarios_sistema.auth_id '
                                       '= AUTH_UID() AND usuarios_sistema.activo LIMIT 1) OR '
                                       'prospectos.creado_por = (SELECT usuarios_sistema.id AS id FROM '
                                       'usuarios_sistema AS usuarios_sistema WHERE usuarios_sistema.auth_id '
                                       '= AUTH_UID() AND usuarios_sistema.activo LIMIT 1)))))) AS pr WHERE '
                                       'pr.vendedor_id = (SELECT usuarios_sistema.id AS id FROM '
                                       'usuarios_sistema AS usuarios_sistema WHERE usuarios_sistema.auth_id '
                                       '= AUTH_UID() AND usuarios_sistema.activo LIMIT 1) AND NOT '
                                       'pr.instalacion_id IS NULL)))) AS instalaciones))'},
 'instalaciones': {'delete': "((SELECT COALESCE((SELECT PG_JSON_TIENE(usuarios_sistema.permisos, '*') OR "
                             "PG_JSON_TIENE(usuarios_sistema.permisos, 'clientes.cartera') AS _col_0 FROM "
                             'usuarios_sistema AS usuarios_sistema WHERE usuarios_sistema.auth_id = '
                             'AUTH_UID() AND usuarios_sistema.activo LIMIT 1), TRUE /* Sin legajo no se '
                             'bloquea a nadie: es una instalación que todavía no */ /* corrió la migración '
                             '66, y cerrarle el paso la dejaría inutilizable de */ /* golpe. El frente se '
                             'comporta igual por la misma razón. */) AS _col_0) OR (NOT '
                             'instalaciones.tecnico_id IS NULL AND instalaciones.tecnico_id = (SELECT '
                             'usuarios_sistema.tecnico_id AS tecnico_id FROM usuarios_sistema AS '
                             'usuarios_sistema WHERE usuarios_sistema.auth_id = AUTH_UID() AND '
                             'usuarios_sistema.activo LIMIT 1)))',
                   'insert': "((SELECT COALESCE((SELECT PG_JSON_TIENE(usuarios_sistema.permisos, '*') OR "
                             "PG_JSON_TIENE(usuarios_sistema.permisos, 'clientes.cartera') AS _col_0 FROM "
                             'usuarios_sistema AS usuarios_sistema WHERE usuarios_sistema.auth_id = '
                             'AUTH_UID() AND usuarios_sistema.activo LIMIT 1), TRUE /* Sin legajo no se '
                             'bloquea a nadie: es una instalación que todavía no */ /* corrió la migración '
                             '66, y cerrarle el paso la dejaría inutilizable de */ /* golpe. El frente se '
                             'comporta igual por la misma razón. */) AS _col_0) OR (NOT '
                             'instalaciones.tecnico_id IS NULL AND instalaciones.tecnico_id = (SELECT '
                             'usuarios_sistema.tecnico_id AS tecnico_id FROM usuarios_sistema AS '
                             'usuarios_sistema WHERE usuarios_sistema.auth_id = AUTH_UID() AND '
                             'usuarios_sistema.activo LIMIT 1)))',
                   'select': "((SELECT COALESCE((SELECT PG_JSON_TIENE(usuarios_sistema.permisos, '*') OR "
                             "PG_JSON_TIENE(usuarios_sistema.permisos, 'clientes.cartera') AS _col_0 FROM "
                             'usuarios_sistema AS usuarios_sistema WHERE usuarios_sistema.auth_id = '
                             'AUTH_UID() AND usuarios_sistema.activo LIMIT 1), TRUE /* Sin legajo no se '
                             'bloquea a nadie: es una instalación que todavía no */ /* corrió la migración '
                             '66, y cerrarle el paso la dejaría inutilizable de */ /* golpe. El frente se '
                             'comporta igual por la misma razón. */) AS _col_0) OR (NOT '
                             'instalaciones.tecnico_id IS NULL AND instalaciones.tecnico_id = (SELECT '
                             'usuarios_sistema.tecnico_id AS tecnico_id FROM usuarios_sistema AS '
                             'usuarios_sistema WHERE usuarios_sistema.auth_id = AUTH_UID() AND '
                             'usuarios_sistema.activo LIMIT 1)) OR instalaciones.client_id IN (SELECT '
                             'cliente_id AS cliente_id FROM (WITH yo /* Solo el técnico y los clientes de '
                             'sus trabajos. */ /* La cobranza SALIÓ de acá a propósito: abría la ficha '
                             'completa cuando lo */ /* que hace falta es un nombre, un teléfono y un saldo. '
                             'Va por */ /* `v_cobros_por_gestionar`, más abajo. */ AS (SELECT '
                             'usuarios_sistema.id AS id, usuarios_sistema.tecnico_id AS tecnico_id FROM '
                             'usuarios_sistema AS usuarios_sistema WHERE usuarios_sistema.auth_id = '
                             'AUTH_UID() AND usuarios_sistema.activo LIMIT 1) SELECT t_fn1223.client_id AS '
                             'cliente_id FROM tickets AS t_fn1223 JOIN yo AS yo ON t_fn1223.tecnico_id = '
                             'yo.tecnico_id WHERE NOT t_fn1223.client_id IS NULL UNION SELECT '
                             'i_fn1223.client_id AS client_id FROM instalaciones AS i_fn1223 JOIN yo AS yo '
                             'ON i_fn1223.tecnico_id = yo.tecnico_id WHERE NOT i_fn1223.client_id IS NULL) '
                             'AS _0)) OR ((SELECT COALESCE((SELECT PG_JSON_TIENE(usuarios_sistema.permisos, '
                             "'*') OR PG_JSON_TIENE(usuarios_sistema.permisos, 'clientes.cartera') AS _col_0 "
                             'FROM usuarios_sistema AS usuarios_sistema WHERE usuarios_sistema.auth_id = '
                             'AUTH_UID() AND usuarios_sistema.activo LIMIT 1), TRUE /* Sin legajo no se '
                             'bloquea a nadie: es una instalación que todavía no */ /* corrió la migración '
                             '66, y cerrarle el paso la dejaría inutilizable de */ /* golpe. El frente se '
                             'comporta igual por la misma razón. */) AS _col_0) OR (NOT '
                             'instalaciones.tecnico_id IS NULL AND instalaciones.tecnico_id = (SELECT '
                             'usuarios_sistema.tecnico_id AS tecnico_id FROM usuarios_sistema AS '
                             'usuarios_sistema WHERE usuarios_sistema.auth_id = AUTH_UID() AND '
                             'usuarios_sistema.activo LIMIT 1))) OR (instalaciones.id IN (SELECT '
                             'pr.instalacion_id AS instalacion_id FROM (SELECT prospectos.id AS id, '
                             'PG_DESCIFRAR(prospectos.nombre) AS nombre, '
                             'PG_DESCIFRAR(prospectos.identificacion) AS identificacion, '
                             'PG_DESCIFRAR(prospectos.telefono) AS telefono, '
                             'PG_DESCIFRAR(prospectos.telefono_whatsapp) AS telefono_whatsapp, '
                             'PG_DESCIFRAR(prospectos.email) AS email, PG_DESCIFRAR(prospectos.direccion) AS '
                             'direccion, PG_DESCIFRAR(prospectos.referencia) AS referencia, '
                             'prospectos.sector AS sector, prospectos.canton AS canton, prospectos.latitud '
                             'AS latitud, prospectos.longitud AS longitud, prospectos.plan_id AS plan_id, '
                             'prospectos.origen AS origen, prospectos.estado AS estado, '
                             'prospectos.motivo_perdida AS motivo_perdida, prospectos.vendedor_id AS '
                             'vendedor_id, prospectos.cobertura AS cobertura, prospectos.nap_id AS nap_id, '
                             'prospectos.distancia_nodo_m AS distancia_nodo_m, prospectos.proxima_accion AS '
                             'proxima_accion, prospectos.instalacion_id AS instalacion_id, '
                             'prospectos.cliente_id AS cliente_id, prospectos.notas AS notas, '
                             'prospectos.creado_por AS creado_por, prospectos.creado_en AS creado_en, '
                             'prospectos.actualizado_en AS actualizado_en, prospectos.archivado_en AS '
                             'archivado_en, prospectos.ganado_en AS ganado_en, prospectos.promocion_id AS '
                             'promocion_id, prospectos.tipo_operacion AS tipo_operacion FROM prospectos AS '
                             'prospectos WHERE NOT RLS_ACTIVA() OR (((SELECT COALESCE((SELECT '
                             "PG_JSON_TIENE(usuarios_sistema.permisos, '*') OR "
                             "PG_JSON_TIENE(usuarios_sistema.permisos, 'clientes.cartera') AS _col_0 FROM "
                             'usuarios_sistema AS usuarios_sistema WHERE usuarios_sistema.auth_id = '
                             'AUTH_UID() AND usuarios_sistema.activo LIMIT 1), TRUE /* Sin legajo no se '
                             'bloquea a nadie: es una instalación que todavía no */ /* corrió la migración '
                             '66, y cerrarle el paso la dejaría inutilizable de */ /* golpe. El frente se '
                             'comporta igual por la misma razón. */) AS _col_0) OR (prospectos.archivado_en '
                             'IS NULL AND ((SELECT COALESCE((SELECT PG_JSON_TIENE(usuarios_sistema.permisos, '
                             "'*') OR PG_JSON_TIENE(usuarios_sistema.permisos, 'ventas.equipo') AS _col_0 "
                             'FROM usuarios_sistema AS usuarios_sistema WHERE usuarios_sistema.auth_id = '
                             'AUTH_UID() AND usuarios_sistema.activo LIMIT 1), TRUE /* Sin legajo se '
                             'permite, igual que el resto de los ayudantes: una */ /* instalación sin la '
                             'migración 66 no puede quedarse sin módulo comercial. */) AS _col_0) OR '
                             'prospectos.vendedor_id = (SELECT usuarios_sistema.id AS id FROM '
                             'usuarios_sistema AS usuarios_sistema WHERE usuarios_sistema.auth_id = '
                             'AUTH_UID() AND usuarios_sistema.activo LIMIT 1) OR prospectos.creado_por = '
                             '(SELECT usuarios_sistema.id AS id FROM usuarios_sistema AS usuarios_sistema '
                             'WHERE usuarios_sistema.auth_id = AUTH_UID() AND usuarios_sistema.activo LIMIT '
                             '1)))) OR ((SELECT COALESCE((SELECT PG_JSON_TIENE(usuarios_sistema.permisos, '
                             "'*') OR PG_JSON_TIENE(usuarios_sistema.permisos, 'clientes.cartera') AS _col_0 "
                             'FROM usuarios_sistema AS usuarios_sistema WHERE usuarios_sistema.auth_id = '
                             'AUTH_UID() AND usuarios_sistema.activo LIMIT 1), TRUE /* Sin legajo no se '
                             'bloquea a nadie: es una instalación que todavía no */ /* corrió la migración '
                             '66, y cerrarle el paso la dejaría inutilizable de */ /* golpe. El frente se '
                             'comporta igual por la misma razón. */) AS _col_0) OR (prospectos.archivado_en '
                             'IS NULL AND ((SELECT COALESCE((SELECT PG_JSON_TIENE(usuarios_sistema.permisos, '
                             "'*') OR PG_JSON_TIENE(usuarios_sistema.permisos, 'ventas.equipo') AS _col_0 "
                             'FROM usuarios_sistema AS usuarios_sistema WHERE usuarios_sistema.auth_id = '
                             'AUTH_UID() AND usuarios_sistema.activo LIMIT 1), TRUE /* Sin legajo se '
                             'permite, igual que el resto de los ayudantes: una */ /* instalación sin la '
                             'migración 66 no puede quedarse sin módulo comercial. */) AS _col_0) OR '
                             'prospectos.vendedor_id = (SELECT usuarios_sistema.id AS id FROM '
                             'usuarios_sistema AS usuarios_sistema WHERE usuarios_sistema.auth_id = '
                             'AUTH_UID() AND usuarios_sistema.activo LIMIT 1) OR prospectos.creado_por = '
                             '(SELECT usuarios_sistema.id AS id FROM usuarios_sistema AS usuarios_sistema '
                             'WHERE usuarios_sistema.auth_id = AUTH_UID() AND usuarios_sistema.activo LIMIT '
                             '1)))))) AS pr WHERE pr.vendedor_id = (SELECT usuarios_sistema.id AS id FROM '
                             'usuarios_sistema AS usuarios_sistema WHERE usuarios_sistema.auth_id = '
                             'AUTH_UID() AND usuarios_sistema.activo LIMIT 1) AND NOT pr.instalacion_id IS '
                             'NULL))',
                   'update': "((SELECT COALESCE((SELECT PG_JSON_TIENE(usuarios_sistema.permisos, '*') OR "
                             "PG_JSON_TIENE(usuarios_sistema.permisos, 'clientes.cartera') AS _col_0 FROM "
                             'usuarios_sistema AS usuarios_sistema WHERE usuarios_sistema.auth_id = '
                             'AUTH_UID() AND usuarios_sistema.activo LIMIT 1), TRUE /* Sin legajo no se '
                             'bloquea a nadie: es una instalación que todavía no */ /* corrió la migración '
                             '66, y cerrarle el paso la dejaría inutilizable de */ /* golpe. El frente se '
                             'comporta igual por la misma razón. */) AS _col_0) OR (NOT '
                             'instalaciones.tecnico_id IS NULL AND instalaciones.tecnico_id = (SELECT '
                             'usuarios_sistema.tecnico_id AS tecnico_id FROM usuarios_sistema AS '
                             'usuarios_sistema WHERE usuarios_sistema.auth_id = AUTH_UID() AND '
                             'usuarios_sistema.activo LIMIT 1)))',
                   'update_check': "((SELECT COALESCE((SELECT PG_JSON_TIENE(usuarios_sistema.permisos, '*') "
                                   "OR PG_JSON_TIENE(usuarios_sistema.permisos, 'clientes.cartera') AS "
                                   '_col_0 FROM usuarios_sistema AS usuarios_sistema WHERE '
                                   'usuarios_sistema.auth_id = AUTH_UID() AND usuarios_sistema.activo LIMIT '
                                   '1), TRUE /* Sin legajo no se bloquea a nadie: es una instalación que '
                                   'todavía no */ /* corrió la migración 66, y cerrarle el paso la dejaría '
                                   'inutilizable de */ /* golpe. El frente se comporta igual por la misma '
                                   'razón. */) AS _col_0) OR (NOT instalaciones.tecnico_id IS NULL AND '
                                   'instalaciones.tecnico_id = (SELECT usuarios_sistema.tecnico_id AS '
                                   'tecnico_id FROM usuarios_sistema AS usuarios_sistema WHERE '
                                   'usuarios_sistema.auth_id = AUTH_UID() AND usuarios_sistema.activo LIMIT '
                                   '1)))'},
 'ip_addresses': {'delete': None, 'insert': None, 'select': None, 'update': None, 'update_check': None},
 'jornadas': {'delete': "((SELECT COALESCE((SELECT PG_JSON_TIENE(usuarios_sistema.permisos, '*') OR "
                        "PG_JSON_TIENE(usuarios_sistema.permisos, 'clientes.cartera') AS _col_0 FROM "
                        'usuarios_sistema AS usuarios_sistema WHERE usuarios_sistema.auth_id = AUTH_UID() '
                        'AND usuarios_sistema.activo LIMIT 1), TRUE /* Sin legajo no se bloquea a nadie: es '
                        'una instalación que todavía no */ /* corrió la migración 66, y cerrarle el paso la '
                        'dejaría inutilizable de */ /* golpe. El frente se comporta igual por la misma '
                        'razón. */) AS _col_0) OR (SELECT COALESCE((SELECT '
                        "PG_JSON_TIENE(usuarios_sistema.permisos, '*') OR "
                        "PG_JSON_TIENE(usuarios_sistema.permisos, 'ventas.equipo') AS _col_0 FROM "
                        'usuarios_sistema AS usuarios_sistema WHERE usuarios_sistema.auth_id = AUTH_UID() '
                        'AND usuarios_sistema.activo LIMIT 1), TRUE /* Sin legajo se permite, igual que el '
                        'resto de los ayudantes: una */ /* instalación sin la migración 66 no puede quedarse '
                        'sin módulo comercial. */) AS _col_0) OR jornadas.tecnico_id = (SELECT '
                        'usuarios_sistema.tecnico_id AS tecnico_id FROM usuarios_sistema AS usuarios_sistema '
                        'WHERE usuarios_sistema.auth_id = AUTH_UID() AND usuarios_sistema.activo LIMIT 1))',
              'insert': "((SELECT COALESCE((SELECT PG_JSON_TIENE(usuarios_sistema.permisos, '*') OR "
                        "PG_JSON_TIENE(usuarios_sistema.permisos, 'clientes.cartera') AS _col_0 FROM "
                        'usuarios_sistema AS usuarios_sistema WHERE usuarios_sistema.auth_id = AUTH_UID() '
                        'AND usuarios_sistema.activo LIMIT 1), TRUE /* Sin legajo no se bloquea a nadie: es '
                        'una instalación que todavía no */ /* corrió la migración 66, y cerrarle el paso la '
                        'dejaría inutilizable de */ /* golpe. El frente se comporta igual por la misma '
                        'razón. */) AS _col_0) OR (SELECT COALESCE((SELECT '
                        "PG_JSON_TIENE(usuarios_sistema.permisos, '*') OR "
                        "PG_JSON_TIENE(usuarios_sistema.permisos, 'ventas.equipo') AS _col_0 FROM "
                        'usuarios_sistema AS usuarios_sistema WHERE usuarios_sistema.auth_id = AUTH_UID() '
                        'AND usuarios_sistema.activo LIMIT 1), TRUE /* Sin legajo se permite, igual que el '
                        'resto de los ayudantes: una */ /* instalación sin la migración 66 no puede quedarse '
                        'sin módulo comercial. */) AS _col_0) OR jornadas.tecnico_id = (SELECT '
                        'usuarios_sistema.tecnico_id AS tecnico_id FROM usuarios_sistema AS usuarios_sistema '
                        'WHERE usuarios_sistema.auth_id = AUTH_UID() AND usuarios_sistema.activo LIMIT 1))',
              'select': "((SELECT COALESCE((SELECT PG_JSON_TIENE(usuarios_sistema.permisos, '*') OR "
                        "PG_JSON_TIENE(usuarios_sistema.permisos, 'clientes.cartera') AS _col_0 FROM "
                        'usuarios_sistema AS usuarios_sistema WHERE usuarios_sistema.auth_id = AUTH_UID() '
                        'AND usuarios_sistema.activo LIMIT 1), TRUE /* Sin legajo no se bloquea a nadie: es '
                        'una instalación que todavía no */ /* corrió la migración 66, y cerrarle el paso la '
                        'dejaría inutilizable de */ /* golpe. El frente se comporta igual por la misma '
                        'razón. */) AS _col_0) OR (SELECT COALESCE((SELECT '
                        "PG_JSON_TIENE(usuarios_sistema.permisos, '*') OR "
                        "PG_JSON_TIENE(usuarios_sistema.permisos, 'ventas.equipo') AS _col_0 FROM "
                        'usuarios_sistema AS usuarios_sistema WHERE usuarios_sistema.auth_id = AUTH_UID() '
                        'AND usuarios_sistema.activo LIMIT 1), TRUE /* Sin legajo se permite, igual que el '
                        'resto de los ayudantes: una */ /* instalación sin la migración 66 no puede quedarse '
                        'sin módulo comercial. */) AS _col_0) OR jornadas.tecnico_id = (SELECT '
                        'usuarios_sistema.tecnico_id AS tecnico_id FROM usuarios_sistema AS usuarios_sistema '
                        'WHERE usuarios_sistema.auth_id = AUTH_UID() AND usuarios_sistema.activo LIMIT 1))',
              'update': "((SELECT COALESCE((SELECT PG_JSON_TIENE(usuarios_sistema.permisos, '*') OR "
                        "PG_JSON_TIENE(usuarios_sistema.permisos, 'clientes.cartera') AS _col_0 FROM "
                        'usuarios_sistema AS usuarios_sistema WHERE usuarios_sistema.auth_id = AUTH_UID() '
                        'AND usuarios_sistema.activo LIMIT 1), TRUE /* Sin legajo no se bloquea a nadie: es '
                        'una instalación que todavía no */ /* corrió la migración 66, y cerrarle el paso la '
                        'dejaría inutilizable de */ /* golpe. El frente se comporta igual por la misma '
                        'razón. */) AS _col_0) OR (SELECT COALESCE((SELECT '
                        "PG_JSON_TIENE(usuarios_sistema.permisos, '*') OR "
                        "PG_JSON_TIENE(usuarios_sistema.permisos, 'ventas.equipo') AS _col_0 FROM "
                        'usuarios_sistema AS usuarios_sistema WHERE usuarios_sistema.auth_id = AUTH_UID() '
                        'AND usuarios_sistema.activo LIMIT 1), TRUE /* Sin legajo se permite, igual que el '
                        'resto de los ayudantes: una */ /* instalación sin la migración 66 no puede quedarse '
                        'sin módulo comercial. */) AS _col_0) OR jornadas.tecnico_id = (SELECT '
                        'usuarios_sistema.tecnico_id AS tecnico_id FROM usuarios_sistema AS usuarios_sistema '
                        'WHERE usuarios_sistema.auth_id = AUTH_UID() AND usuarios_sistema.activo LIMIT 1))',
              'update_check': "((SELECT COALESCE((SELECT PG_JSON_TIENE(usuarios_sistema.permisos, '*') OR "
                              "PG_JSON_TIENE(usuarios_sistema.permisos, 'clientes.cartera') AS _col_0 FROM "
                              'usuarios_sistema AS usuarios_sistema WHERE usuarios_sistema.auth_id = '
                              'AUTH_UID() AND usuarios_sistema.activo LIMIT 1), TRUE /* Sin legajo no se '
                              'bloquea a nadie: es una instalación que todavía no */ /* corrió la migración '
                              '66, y cerrarle el paso la dejaría inutilizable de */ /* golpe. El frente se '
                              'comporta igual por la misma razón. */) AS _col_0) OR (SELECT COALESCE((SELECT '
                              "PG_JSON_TIENE(usuarios_sistema.permisos, '*') OR "
                              "PG_JSON_TIENE(usuarios_sistema.permisos, 'ventas.equipo') AS _col_0 FROM "
                              'usuarios_sistema AS usuarios_sistema WHERE usuarios_sistema.auth_id = '
                              'AUTH_UID() AND usuarios_sistema.activo LIMIT 1), TRUE /* Sin legajo se '
                              'permite, igual que el resto de los ayudantes: una */ /* instalación sin la '
                              'migración 66 no puede quedarse sin módulo comercial. */) AS _col_0) OR '
                              'jornadas.tecnico_id = (SELECT usuarios_sistema.tecnico_id AS tecnico_id FROM '
                              'usuarios_sistema AS usuarios_sistema WHERE usuarios_sistema.auth_id = '
                              'AUTH_UID() AND usuarios_sistema.activo LIMIT 1))'},
 'licencia': {'delete': '0', 'insert': '0', 'select': None, 'update': '0', 'update_check': '0'},
 'line_profiles': {'delete': None, 'insert': None, 'select': None, 'update': None, 'update_check': None},
 'mantenimiento_intervalos': {'delete': None,
                              'insert': None,
                              'select': None,
                              'update': None,
                              'update_check': None},
 'mantenimiento_tipos': {'delete': None,
                         'insert': None,
                         'select': None,
                         'update': None,
                         'update_check': None},
 'mantenimientos': {'delete': None, 'insert': None, 'select': None, 'update': None, 'update_check': None},
 'mensajes_comerciales': {'delete': '0',
                          'insert': '(mensajes_comerciales.vendedor_id = (SELECT usuarios_sistema.id AS id '
                                    'FROM usuarios_sistema AS usuarios_sistema WHERE '
                                    'usuarios_sistema.auth_id = AUTH_UID() AND usuarios_sistema.activo LIMIT '
                                    '1) OR (SELECT COALESCE((SELECT PG_JSON_TIENE(usuarios_sistema.permisos, '
                                    "'*') OR PG_JSON_TIENE(usuarios_sistema.permisos, 'clientes.cartera') AS "
                                    '_col_0 FROM usuarios_sistema AS usuarios_sistema WHERE '
                                    'usuarios_sistema.auth_id = AUTH_UID() AND usuarios_sistema.activo LIMIT '
                                    '1), TRUE /* Sin legajo no se bloquea a nadie: es una instalación que '
                                    'todavía no */ /* corrió la migración 66, y cerrarle el paso la dejaría '
                                    'inutilizable de */ /* golpe. El frente se comporta igual por la misma '
                                    'razón. */) AS _col_0))',
                          'select': "((SELECT COALESCE((SELECT PG_JSON_TIENE(usuarios_sistema.permisos, '*') "
                                    "OR PG_JSON_TIENE(usuarios_sistema.permisos, 'clientes.cartera') AS "
                                    '_col_0 FROM usuarios_sistema AS usuarios_sistema WHERE '
                                    'usuarios_sistema.auth_id = AUTH_UID() AND usuarios_sistema.activo LIMIT '
                                    '1), TRUE /* Sin legajo no se bloquea a nadie: es una instalación que '
                                    'todavía no */ /* corrió la migración 66, y cerrarle el paso la dejaría '
                                    'inutilizable de */ /* golpe. El frente se comporta igual por la misma '
                                    'razón. */) AS _col_0) OR mensajes_comerciales.vendedor_id = (SELECT '
                                    'usuarios_sistema.id AS id FROM usuarios_sistema AS usuarios_sistema '
                                    'WHERE usuarios_sistema.auth_id = AUTH_UID() AND usuarios_sistema.activo '
                                    'LIMIT 1))',
                          'update': '0',
                          'update_check': '0'},
 'metas_venta': {'delete': "((SELECT COALESCE((SELECT PG_JSON_TIENE(usuarios_sistema.permisos, '*') OR "
                           "PG_JSON_TIENE(usuarios_sistema.permisos, 'clientes.cartera') AS _col_0 FROM "
                           'usuarios_sistema AS usuarios_sistema WHERE usuarios_sistema.auth_id = AUTH_UID() '
                           'AND usuarios_sistema.activo LIMIT 1), TRUE /* Sin legajo no se bloquea a nadie: '
                           'es una instalación que todavía no */ /* corrió la migración 66, y cerrarle el '
                           'paso la dejaría inutilizable de */ /* golpe. El frente se comporta igual por la '
                           'misma razón. */) AS _col_0) OR (SELECT COALESCE((SELECT '
                           "PG_JSON_TIENE(usuarios_sistema.permisos, '*') OR "
                           "PG_JSON_TIENE(usuarios_sistema.permisos, 'ventas.equipo') AS _col_0 FROM "
                           'usuarios_sistema AS usuarios_sistema WHERE usuarios_sistema.auth_id = AUTH_UID() '
                           'AND usuarios_sistema.activo LIMIT 1), TRUE /* Sin legajo se permite, igual que '
                           'el resto de los ayudantes: una */ /* instalación sin la migración 66 no puede '
                           'quedarse sin módulo comercial. */) AS _col_0))',
                 'insert': "((SELECT COALESCE((SELECT PG_JSON_TIENE(usuarios_sistema.permisos, '*') OR "
                           "PG_JSON_TIENE(usuarios_sistema.permisos, 'clientes.cartera') AS _col_0 FROM "
                           'usuarios_sistema AS usuarios_sistema WHERE usuarios_sistema.auth_id = AUTH_UID() '
                           'AND usuarios_sistema.activo LIMIT 1), TRUE /* Sin legajo no se bloquea a nadie: '
                           'es una instalación que todavía no */ /* corrió la migración 66, y cerrarle el '
                           'paso la dejaría inutilizable de */ /* golpe. El frente se comporta igual por la '
                           'misma razón. */) AS _col_0) OR (SELECT COALESCE((SELECT '
                           "PG_JSON_TIENE(usuarios_sistema.permisos, '*') OR "
                           "PG_JSON_TIENE(usuarios_sistema.permisos, 'ventas.equipo') AS _col_0 FROM "
                           'usuarios_sistema AS usuarios_sistema WHERE usuarios_sistema.auth_id = AUTH_UID() '
                           'AND usuarios_sistema.activo LIMIT 1), TRUE /* Sin legajo se permite, igual que '
                           'el resto de los ayudantes: una */ /* instalación sin la migración 66 no puede '
                           'quedarse sin módulo comercial. */) AS _col_0))',
                 'select': "((SELECT COALESCE((SELECT PG_JSON_TIENE(usuarios_sistema.permisos, '*') OR "
                           "PG_JSON_TIENE(usuarios_sistema.permisos, 'clientes.cartera') AS _col_0 FROM "
                           'usuarios_sistema AS usuarios_sistema WHERE usuarios_sistema.auth_id = AUTH_UID() '
                           'AND usuarios_sistema.activo LIMIT 1), TRUE /* Sin legajo no se bloquea a nadie: '
                           'es una instalación que todavía no */ /* corrió la migración 66, y cerrarle el '
                           'paso la dejaría inutilizable de */ /* golpe. El frente se comporta igual por la '
                           'misma razón. */) AS _col_0) OR (SELECT COALESCE((SELECT '
                           "PG_JSON_TIENE(usuarios_sistema.permisos, '*') OR "
                           "PG_JSON_TIENE(usuarios_sistema.permisos, 'ventas.equipo') AS _col_0 FROM "
                           'usuarios_sistema AS usuarios_sistema WHERE usuarios_sistema.auth_id = AUTH_UID() '
                           'AND usuarios_sistema.activo LIMIT 1), TRUE /* Sin legajo se permite, igual que '
                           'el resto de los ayudantes: una */ /* instalación sin la migración 66 no puede '
                           'quedarse sin módulo comercial. */) AS _col_0) OR metas_venta.vendedor_id = '
                           '(SELECT usuarios_sistema.id AS id FROM usuarios_sistema AS usuarios_sistema '
                           'WHERE usuarios_sistema.auth_id = AUTH_UID() AND usuarios_sistema.activo LIMIT '
                           "1)) OR ((SELECT COALESCE((SELECT PG_JSON_TIENE(usuarios_sistema.permisos, '*') "
                           "OR PG_JSON_TIENE(usuarios_sistema.permisos, 'clientes.cartera') AS _col_0 FROM "
                           'usuarios_sistema AS usuarios_sistema WHERE usuarios_sistema.auth_id = AUTH_UID() '
                           'AND usuarios_sistema.activo LIMIT 1), TRUE /* Sin legajo no se bloquea a nadie: '
                           'es una instalación que todavía no */ /* corrió la migración 66, y cerrarle el '
                           'paso la dejaría inutilizable de */ /* golpe. El frente se comporta igual por la '
                           'misma razón. */) AS _col_0) OR (SELECT COALESCE((SELECT '
                           "PG_JSON_TIENE(usuarios_sistema.permisos, '*') OR "
                           "PG_JSON_TIENE(usuarios_sistema.permisos, 'ventas.equipo') AS _col_0 FROM "
                           'usuarios_sistema AS usuarios_sistema WHERE usuarios_sistema.auth_id = AUTH_UID() '
                           'AND usuarios_sistema.activo LIMIT 1), TRUE /* Sin legajo se permite, igual que '
                           'el resto de los ayudantes: una */ /* instalación sin la migración 66 no puede '
                           'quedarse sin módulo comercial. */) AS _col_0))',
                 'update': "((SELECT COALESCE((SELECT PG_JSON_TIENE(usuarios_sistema.permisos, '*') OR "
                           "PG_JSON_TIENE(usuarios_sistema.permisos, 'clientes.cartera') AS _col_0 FROM "
                           'usuarios_sistema AS usuarios_sistema WHERE usuarios_sistema.auth_id = AUTH_UID() '
                           'AND usuarios_sistema.activo LIMIT 1), TRUE /* Sin legajo no se bloquea a nadie: '
                           'es una instalación que todavía no */ /* corrió la migración 66, y cerrarle el '
                           'paso la dejaría inutilizable de */ /* golpe. El frente se comporta igual por la '
                           'misma razón. */) AS _col_0) OR (SELECT COALESCE((SELECT '
                           "PG_JSON_TIENE(usuarios_sistema.permisos, '*') OR "
                           "PG_JSON_TIENE(usuarios_sistema.permisos, 'ventas.equipo') AS _col_0 FROM "
                           'usuarios_sistema AS usuarios_sistema WHERE usuarios_sistema.auth_id = AUTH_UID() '
                           'AND usuarios_sistema.activo LIMIT 1), TRUE /* Sin legajo se permite, igual que '
                           'el resto de los ayudantes: una */ /* instalación sin la migración 66 no puede '
                           'quedarse sin módulo comercial. */) AS _col_0))',
                 'update_check': "((SELECT COALESCE((SELECT PG_JSON_TIENE(usuarios_sistema.permisos, '*') OR "
                                 "PG_JSON_TIENE(usuarios_sistema.permisos, 'clientes.cartera') AS _col_0 "
                                 'FROM usuarios_sistema AS usuarios_sistema WHERE usuarios_sistema.auth_id = '
                                 'AUTH_UID() AND usuarios_sistema.activo LIMIT 1), TRUE /* Sin legajo no se '
                                 'bloquea a nadie: es una instalación que todavía no */ /* corrió la '
                                 'migración 66, y cerrarle el paso la dejaría inutilizable de */ /* golpe. '
                                 'El frente se comporta igual por la misma razón. */) AS _col_0) OR (SELECT '
                                 "COALESCE((SELECT PG_JSON_TIENE(usuarios_sistema.permisos, '*') OR "
                                 "PG_JSON_TIENE(usuarios_sistema.permisos, 'ventas.equipo') AS _col_0 FROM "
                                 'usuarios_sistema AS usuarios_sistema WHERE usuarios_sistema.auth_id = '
                                 'AUTH_UID() AND usuarios_sistema.activo LIMIT 1), TRUE /* Sin legajo se '
                                 'permite, igual que el resto de los ayudantes: una */ /* instalación sin la '
                                 'migración 66 no puede quedarse sin módulo comercial. */) AS _col_0))'},
 'motivos_baja': {'delete': "((SELECT COALESCE((SELECT PG_JSON_TIENE(usuarios_sistema.permisos, '*') OR "
                            "PG_JSON_TIENE(usuarios_sistema.permisos, 'comisiones.configurar') AS _col_0 "
                            'FROM usuarios_sistema AS usuarios_sistema WHERE usuarios_sistema.auth_id = '
                            'AUTH_UID() AND usuarios_sistema.activo LIMIT 1), TRUE /* Sin legajo no se '
                            'bloquea: misma regla que el resto del sistema, para */ /* que una instalación a '
                            'medio migrar no quede inutilizable. */) AS _col_0))',
                  'insert': "((SELECT COALESCE((SELECT PG_JSON_TIENE(usuarios_sistema.permisos, '*') OR "
                            "PG_JSON_TIENE(usuarios_sistema.permisos, 'comisiones.configurar') AS _col_0 "
                            'FROM usuarios_sistema AS usuarios_sistema WHERE usuarios_sistema.auth_id = '
                            'AUTH_UID() AND usuarios_sistema.activo LIMIT 1), TRUE /* Sin legajo no se '
                            'bloquea: misma regla que el resto del sistema, para */ /* que una instalación a '
                            'medio migrar no quede inutilizable. */) AS _col_0))',
                  'select': None,
                  'update': "((SELECT COALESCE((SELECT PG_JSON_TIENE(usuarios_sistema.permisos, '*') OR "
                            "PG_JSON_TIENE(usuarios_sistema.permisos, 'comisiones.configurar') AS _col_0 "
                            'FROM usuarios_sistema AS usuarios_sistema WHERE usuarios_sistema.auth_id = '
                            'AUTH_UID() AND usuarios_sistema.activo LIMIT 1), TRUE /* Sin legajo no se '
                            'bloquea: misma regla que el resto del sistema, para */ /* que una instalación a '
                            'medio migrar no quede inutilizable. */) AS _col_0))',
                  'update_check': "((SELECT COALESCE((SELECT PG_JSON_TIENE(usuarios_sistema.permisos, '*') "
                                  "OR PG_JSON_TIENE(usuarios_sistema.permisos, 'comisiones.configurar') AS "
                                  '_col_0 FROM usuarios_sistema AS usuarios_sistema WHERE '
                                  'usuarios_sistema.auth_id = AUTH_UID() AND usuarios_sistema.activo LIMIT '
                                  '1), TRUE /* Sin legajo no se bloquea: misma regla que el resto del '
                                  'sistema, para */ /* que una instalación a medio migrar no quede '
                                  'inutilizable. */) AS _col_0))'},
 'movimientos_inventario': {'delete': None,
                            'insert': None,
                            'select': None,
                            'update': None,
                            'update_check': None},
 'nodo_eventos': {'delete': "((SELECT COALESCE((SELECT PG_JSON_TIENE(usuarios_sistema.permisos, '*') OR "
                            "PG_JSON_TIENE(usuarios_sistema.permisos, 'red.monitoreo') AS _col_0 FROM "
                            'usuarios_sistema AS usuarios_sistema WHERE usuarios_sistema.auth_id = '
                            'AUTH_UID() AND usuarios_sistema.activo LIMIT 1), TRUE) AS _col_0))',
                  'insert': "((SELECT COALESCE((SELECT PG_JSON_TIENE(usuarios_sistema.permisos, '*') OR "
                            "PG_JSON_TIENE(usuarios_sistema.permisos, 'red.monitoreo') AS _col_0 FROM "
                            'usuarios_sistema AS usuarios_sistema WHERE usuarios_sistema.auth_id = '
                            'AUTH_UID() AND usuarios_sistema.activo LIMIT 1), TRUE) AS _col_0))',
                  'select': "((SELECT COALESCE((SELECT PG_JSON_TIENE(usuarios_sistema.permisos, '*') OR "
                            "PG_JSON_TIENE(usuarios_sistema.permisos, 'red.monitoreo') OR "
                            "PG_JSON_TIENE(usuarios_sistema.permisos, 'red.monitoreo_ver') AS _col_0 FROM "
                            'usuarios_sistema AS usuarios_sistema WHERE usuarios_sistema.auth_id = '
                            'AUTH_UID() AND usuarios_sistema.activo LIMIT 1), TRUE /* Sin legajo se permite, '
                            'igual que el resto de los ayudantes: una */ /* instalación que todavía no '
                            'corrió la migración 66 no puede quedarse */ /* sin monitoreo de golpe. */) AS '
                            '_col_0)) OR ((SELECT COALESCE((SELECT PG_JSON_TIENE(usuarios_sistema.permisos, '
                            "'*') OR PG_JSON_TIENE(usuarios_sistema.permisos, 'red.monitoreo') AS _col_0 "
                            'FROM usuarios_sistema AS usuarios_sistema WHERE usuarios_sistema.auth_id = '
                            'AUTH_UID() AND usuarios_sistema.activo LIMIT 1), TRUE) AS _col_0))',
                  'update': "((SELECT COALESCE((SELECT PG_JSON_TIENE(usuarios_sistema.permisos, '*') OR "
                            "PG_JSON_TIENE(usuarios_sistema.permisos, 'red.monitoreo') AS _col_0 FROM "
                            'usuarios_sistema AS usuarios_sistema WHERE usuarios_sistema.auth_id = '
                            'AUTH_UID() AND usuarios_sistema.activo LIMIT 1), TRUE) AS _col_0))',
                  'update_check': "((SELECT COALESCE((SELECT PG_JSON_TIENE(usuarios_sistema.permisos, '*') "
                                  "OR PG_JSON_TIENE(usuarios_sistema.permisos, 'red.monitoreo') AS _col_0 "
                                  'FROM usuarios_sistema AS usuarios_sistema WHERE usuarios_sistema.auth_id '
                                  '= AUTH_UID() AND usuarios_sistema.activo LIMIT 1), TRUE) AS _col_0))'},
 'nodos_red': {'delete': "((SELECT COALESCE((SELECT PG_JSON_TIENE(usuarios_sistema.permisos, '*') OR "
                         "PG_JSON_TIENE(usuarios_sistema.permisos, 'red.monitoreo') AS _col_0 FROM "
                         'usuarios_sistema AS usuarios_sistema WHERE usuarios_sistema.auth_id = AUTH_UID() '
                         'AND usuarios_sistema.activo LIMIT 1), TRUE) AS _col_0))',
               'insert': "((SELECT COALESCE((SELECT PG_JSON_TIENE(usuarios_sistema.permisos, '*') OR "
                         "PG_JSON_TIENE(usuarios_sistema.permisos, 'red.monitoreo') AS _col_0 FROM "
                         'usuarios_sistema AS usuarios_sistema WHERE usuarios_sistema.auth_id = AUTH_UID() '
                         'AND usuarios_sistema.activo LIMIT 1), TRUE) AS _col_0))',
               'select': "((SELECT COALESCE((SELECT PG_JSON_TIENE(usuarios_sistema.permisos, '*') OR "
                         "PG_JSON_TIENE(usuarios_sistema.permisos, 'red.monitoreo') AS _col_0 FROM "
                         'usuarios_sistema AS usuarios_sistema WHERE usuarios_sistema.auth_id = AUTH_UID() '
                         'AND usuarios_sistema.activo LIMIT 1), TRUE) AS _col_0)) OR ((SELECT '
                         "COALESCE((SELECT PG_JSON_TIENE(usuarios_sistema.permisos, '*') OR "
                         "PG_JSON_TIENE(usuarios_sistema.permisos, 'red.monitoreo') AS _col_0 FROM "
                         'usuarios_sistema AS usuarios_sistema WHERE usuarios_sistema.auth_id = AUTH_UID() '
                         'AND usuarios_sistema.activo LIMIT 1), TRUE) AS _col_0))',
               'update': "((SELECT COALESCE((SELECT PG_JSON_TIENE(usuarios_sistema.permisos, '*') OR "
                         "PG_JSON_TIENE(usuarios_sistema.permisos, 'red.monitoreo') AS _col_0 FROM "
                         'usuarios_sistema AS usuarios_sistema WHERE usuarios_sistema.auth_id = AUTH_UID() '
                         'AND usuarios_sistema.activo LIMIT 1), TRUE) AS _col_0))',
               'update_check': "((SELECT COALESCE((SELECT PG_JSON_TIENE(usuarios_sistema.permisos, '*') OR "
                               "PG_JSON_TIENE(usuarios_sistema.permisos, 'red.monitoreo') AS _col_0 FROM "
                               'usuarios_sistema AS usuarios_sistema WHERE usuarios_sistema.auth_id = '
                               'AUTH_UID() AND usuarios_sistema.activo LIMIT 1), TRUE) AS _col_0))'},
 'notificaciones': {'delete': '(notificaciones.usuario_id = (SELECT usuarios_sistema.id AS id FROM '
                              'usuarios_sistema AS usuarios_sistema WHERE usuarios_sistema.auth_id = '
                              'AUTH_UID() AND usuarios_sistema.activo LIMIT 1))',
                    'insert': '(notificaciones.usuario_id = (SELECT usuarios_sistema.id AS id FROM '
                              'usuarios_sistema AS usuarios_sistema WHERE usuarios_sistema.auth_id = '
                              'AUTH_UID() AND usuarios_sistema.activo LIMIT 1))',
                    'select': '(notificaciones.usuario_id = (SELECT usuarios_sistema.id AS id FROM '
                              'usuarios_sistema AS usuarios_sistema WHERE usuarios_sistema.auth_id = '
                              'AUTH_UID() AND usuarios_sistema.activo LIMIT 1))',
                    'update': '(notificaciones.usuario_id = (SELECT usuarios_sistema.id AS id FROM '
                              'usuarios_sistema AS usuarios_sistema WHERE usuarios_sistema.auth_id = '
                              'AUTH_UID() AND usuarios_sistema.activo LIMIT 1))',
                    'update_check': '(notificaciones.usuario_id = (SELECT usuarios_sistema.id AS id FROM '
                                    'usuarios_sistema AS usuarios_sistema WHERE usuarios_sistema.auth_id = '
                                    'AUTH_UID() AND usuarios_sistema.activo LIMIT 1))'},
 'olt_backups': {'delete': None, 'insert': None, 'select': None, 'update': None, 'update_check': None},
 'olt_escaneos': {'delete': None, 'insert': None, 'select': None, 'update': None, 'update_check': None},
 'olt_historial': {'delete': None, 'insert': None, 'select': None, 'update': None, 'update_check': None},
 'olts': {'delete': None, 'insert': None, 'select': None, 'update': None, 'update_check': None},
 'onts_esperando': {'delete': None, 'insert': None, 'select': None, 'update': None, 'update_check': None},
 'onts_preautorizadas': {'delete': None,
                         'insert': None,
                         'select': None,
                         'update': None,
                         'update_check': None},
 'onu_optica_historial': {'delete': None,
                          'insert': None,
                          'select': None,
                          'update': None,
                          'update_check': None},
 'onus': {'delete': "((SELECT COALESCE((SELECT PG_JSON_TIENE(usuarios_sistema.permisos, '*') OR "
                    "PG_JSON_TIENE(usuarios_sistema.permisos, 'red.onus_ver') OR "
                    "PG_JSON_TIENE(usuarios_sistema.permisos, 'red.olts_ver') AS _col_0 FROM "
                    'usuarios_sistema AS usuarios_sistema WHERE usuarios_sistema.auth_id = AUTH_UID() AND '
                    'usuarios_sistema.activo LIMIT 1), TRUE) AS _col_0) OR onus.id IN (SELECT '
                    'clientes.onu_id AS onu_id FROM (SELECT clientes.id AS id, PG_DESCIFRAR(clientes.nombre) '
                    'AS nombre, clientes.router_id AS router_id, clientes.onu_id AS onu_id, clientes.plan_id '
                    'AS plan_id, clientes.ip AS ip, clientes.mac_address AS mac_address, '
                    'clientes.usuario_ppp AS usuario_ppp, clientes.estado AS estado, clientes.origen AS '
                    'origen, clientes.velocidad_cruda AS velocidad_cruda, clientes.comentario AS comentario, '
                    'clientes.created_at AS created_at, clientes.updated_at AS updated_at, '
                    'clientes.tipo_identificacion AS tipo_identificacion, '
                    'PG_DESCIFRAR(clientes.identificacion) AS identificacion, PG_DESCIFRAR(clientes.email) '
                    'AS email, PG_DESCIFRAR(clientes.telefono) AS telefono, PG_DESCIFRAR(clientes.direccion) '
                    'AS direccion, clientes.precio_mensual AS precio_mensual, clientes.dia_facturacion AS '
                    'dia_facturacion, PG_DESCIFRAR(clientes.telefono_movil) AS telefono_movil, '
                    'clientes.codigo_pago AS codigo_pago, PG_DESCIFRAR(clientes.clave_ppp) AS clave_ppp, '
                    'clientes.latitud AS latitud, clientes.longitud AS longitud, clientes.notas AS notas, '
                    'clientes.nap_id AS nap_id, clientes.puerto_nap AS puerto_nap, clientes.conectado_a_id '
                    'AS conectado_a_id, clientes.ip_administracion AS ip_administracion, '
                    'clientes.tipo_antena AS tipo_antena, clientes.tipo_conexion AS tipo_conexion, '
                    'clientes.tipo_ip AS tipo_ip, clientes.red_ipv4 AS red_ipv4, clientes.ipv6 AS ipv6, '
                    'clientes.ipv6_duid AS ipv6_duid, clientes.rutas AS rutas, clientes.descripcion_servicio '
                    'AS descripcion_servicio, clientes.excluir_firewall AS excluir_firewall, '
                    'clientes.fecha_instalacion AS fecha_instalacion, clientes.factura_electronica AS '
                    'factura_electronica, clientes.modalidad_pago AS modalidad_pago, '
                    'clientes.dia_generar_factura AS dia_generar_factura, clientes.tipo_impuesto AS '
                    'tipo_impuesto, clientes.dias_gracia AS dias_gracia, clientes.aplicar_corte AS '
                    'aplicar_corte, clientes.descuento_tipo AS descuento_tipo, clientes.descuento_porcentaje '
                    'AS descuento_porcentaje, clientes.descuento_documento AS descuento_documento, '
                    'clientes.promo_porcentaje AS promo_porcentaje, clientes.promo_meses AS promo_meses, '
                    'clientes.promo_desde AS promo_desde, clientes.telegram_chat_id AS telegram_chat_id, '
                    'clientes.canal_preferido AS canal_preferido, clientes.codigo_externo AS codigo_externo, '
                    'clientes.sistema_origen AS sistema_origen, clientes.importado_at AS importado_at, '
                    'clientes.portal_clave_hash AS portal_clave_hash, clientes.portal_clave_puesta AS '
                    'portal_clave_puesta, clientes.activado_en AS activado_en, clientes.numero_orden AS '
                    'numero_orden, clientes.motivo_baja_id AS motivo_baja_id, clientes.baja_en AS baja_en, '
                    'clientes.baja_nota AS baja_nota, clientes.codigo AS codigo, clientes.portal_clave AS '
                    'portal_clave, clientes.zona AS zona, clientes.estado_desde AS estado_desde, '
                    'clientes.pasarela AS pasarela, clientes.deuda_equipo AS deuda_equipo, '
                    'clientes.ultimo_pago_externo AS ultimo_pago_externo, clientes.avisos_activos AS '
                    'avisos_activos, clientes.avisos_canales AS avisos_canales, clientes.avisos_pantalla AS '
                    'avisos_pantalla, clientes.aviso_dias_1 AS aviso_dias_1, clientes.aviso_dias_2 AS '
                    'aviso_dias_2, clientes.aviso_dias_3 AS aviso_dias_3, clientes.aviso_factura_canales AS '
                    'aviso_factura_canales, clientes.aviso_pantalla_dias AS aviso_pantalla_dias, '
                    'clientes.cortar_tras_meses AS cortar_tras_meses, clientes.prestador_id AS prestador_id, '
                    'clientes.provincia AS provincia, clientes.canton AS canton, clientes.ciudad AS ciudad, '
                    'clientes.parroquia AS parroquia, clientes.tarifa_preferencial AS tarifa_preferencial, '
                    'clientes.acepta_arbitraje AS acepta_arbitraje, clientes.equipo_modalidad AS '
                    'equipo_modalidad, clientes.condicion_especial AS condicion_especial, '
                    'clientes.red_acceso AS red_acceso, clientes.tipo_cuenta AS tipo_cuenta, '
                    'clientes.permanencia_meses AS permanencia_meses, clientes.valor_instalacion AS '
                    'valor_instalacion, clientes.avisos_baja_at AS avisos_baja_at, '
                    'clientes.avisos_baja_texto AS avisos_baja_texto, clientes.descuento_fijo AS '
                    'descuento_fijo, clientes.descuento_fijo_motivo AS descuento_fijo_motivo, '
                    'clientes.ipv6_prefijo AS ipv6_prefijo, clientes.acepta_datos_personales AS '
                    'acepta_datos_personales, clientes.cortado_en AS cortado_en, clientes.aviso_dias_4 AS '
                    'aviso_dias_4, clientes.referencia_servicio AS referencia_servicio, '
                    'clientes.suspendido_motivo AS suspendido_motivo, clientes.suspendido_hasta AS '
                    'suspendido_hasta FROM clientes AS clientes WHERE NOT RLS_ACTIVA() OR (((SELECT '
                    "COALESCE((SELECT PG_JSON_TIENE(usuarios_sistema.permisos, '*') OR "
                    "PG_JSON_TIENE(usuarios_sistema.permisos, 'clientes.cartera') AS _col_0 FROM "
                    'usuarios_sistema AS usuarios_sistema WHERE usuarios_sistema.auth_id = AUTH_UID() AND '
                    'usuarios_sistema.activo LIMIT 1), TRUE /* Sin legajo no se bloquea a nadie: es una '
                    'instalación que todavía no */ /* corrió la migración 66, y cerrarle el paso la dejaría '
                    'inutilizable de */ /* golpe. El frente se comporta igual por la misma razón. */) AS '
                    '_col_0) OR clientes.id IN (SELECT cliente_id AS cliente_id FROM (WITH yo /* Solo el '
                    'técnico y los clientes de sus trabajos. */ /* La cobranza SALIÓ de acá a propósito: '
                    'abría la ficha completa cuando lo */ /* que hace falta es un nombre, un teléfono y un '
                    'saldo. Va por */ /* `v_cobros_por_gestionar`, más abajo. */ AS (SELECT '
                    'usuarios_sistema.id AS id, usuarios_sistema.tecnico_id AS tecnico_id FROM '
                    'usuarios_sistema AS usuarios_sistema WHERE usuarios_sistema.auth_id = AUTH_UID() AND '
                    'usuarios_sistema.activo LIMIT 1) SELECT t_fn1308.client_id AS cliente_id FROM tickets '
                    'AS t_fn1308 JOIN yo AS yo ON t_fn1308.tecnico_id = yo.tecnico_id WHERE NOT '
                    't_fn1308.client_id IS NULL UNION SELECT i_fn1308.client_id AS client_id FROM '
                    'instalaciones AS i_fn1308 JOIN yo AS yo ON i_fn1308.tecnico_id = yo.tecnico_id WHERE '
                    'NOT i_fn1308.client_id IS NULL) AS _0)) OR ((SELECT COALESCE((SELECT '
                    "PG_JSON_TIENE(usuarios_sistema.permisos, '*') OR "
                    "PG_JSON_TIENE(usuarios_sistema.permisos, 'clientes.cartera') AS _col_0 FROM "
                    'usuarios_sistema AS usuarios_sistema WHERE usuarios_sistema.auth_id = AUTH_UID() AND '
                    'usuarios_sistema.activo LIMIT 1), TRUE /* Sin legajo no se bloquea a nadie: es una '
                    'instalación que todavía no */ /* corrió la migración 66, y cerrarle el paso la dejaría '
                    'inutilizable de */ /* golpe. El frente se comporta igual por la misma razón. */) AS '
                    '_col_0)))) AS clientes WHERE NOT clientes.onu_id IS NULL))',
          'insert': "((SELECT COALESCE((SELECT PG_JSON_TIENE(usuarios_sistema.permisos, '*') OR "
                    "PG_JSON_TIENE(usuarios_sistema.permisos, 'red.onus_ver') OR "
                    "PG_JSON_TIENE(usuarios_sistema.permisos, 'red.olts_ver') AS _col_0 FROM "
                    'usuarios_sistema AS usuarios_sistema WHERE usuarios_sistema.auth_id = AUTH_UID() AND '
                    'usuarios_sistema.activo LIMIT 1), TRUE) AS _col_0))',
          'select': "((SELECT COALESCE((SELECT PG_JSON_TIENE(usuarios_sistema.permisos, '*') OR "
                    "PG_JSON_TIENE(usuarios_sistema.permisos, 'red.onus_ver') OR "
                    "PG_JSON_TIENE(usuarios_sistema.permisos, 'red.olts_ver') AS _col_0 FROM "
                    'usuarios_sistema AS usuarios_sistema WHERE usuarios_sistema.auth_id = AUTH_UID() AND '
                    'usuarios_sistema.activo LIMIT 1), TRUE) AS _col_0) OR onus.id IN (SELECT '
                    'clientes.onu_id AS onu_id FROM (SELECT clientes.id AS id, PG_DESCIFRAR(clientes.nombre) '
                    'AS nombre, clientes.router_id AS router_id, clientes.onu_id AS onu_id, clientes.plan_id '
                    'AS plan_id, clientes.ip AS ip, clientes.mac_address AS mac_address, '
                    'clientes.usuario_ppp AS usuario_ppp, clientes.estado AS estado, clientes.origen AS '
                    'origen, clientes.velocidad_cruda AS velocidad_cruda, clientes.comentario AS comentario, '
                    'clientes.created_at AS created_at, clientes.updated_at AS updated_at, '
                    'clientes.tipo_identificacion AS tipo_identificacion, '
                    'PG_DESCIFRAR(clientes.identificacion) AS identificacion, PG_DESCIFRAR(clientes.email) '
                    'AS email, PG_DESCIFRAR(clientes.telefono) AS telefono, PG_DESCIFRAR(clientes.direccion) '
                    'AS direccion, clientes.precio_mensual AS precio_mensual, clientes.dia_facturacion AS '
                    'dia_facturacion, PG_DESCIFRAR(clientes.telefono_movil) AS telefono_movil, '
                    'clientes.codigo_pago AS codigo_pago, PG_DESCIFRAR(clientes.clave_ppp) AS clave_ppp, '
                    'clientes.latitud AS latitud, clientes.longitud AS longitud, clientes.notas AS notas, '
                    'clientes.nap_id AS nap_id, clientes.puerto_nap AS puerto_nap, clientes.conectado_a_id '
                    'AS conectado_a_id, clientes.ip_administracion AS ip_administracion, '
                    'clientes.tipo_antena AS tipo_antena, clientes.tipo_conexion AS tipo_conexion, '
                    'clientes.tipo_ip AS tipo_ip, clientes.red_ipv4 AS red_ipv4, clientes.ipv6 AS ipv6, '
                    'clientes.ipv6_duid AS ipv6_duid, clientes.rutas AS rutas, clientes.descripcion_servicio '
                    'AS descripcion_servicio, clientes.excluir_firewall AS excluir_firewall, '
                    'clientes.fecha_instalacion AS fecha_instalacion, clientes.factura_electronica AS '
                    'factura_electronica, clientes.modalidad_pago AS modalidad_pago, '
                    'clientes.dia_generar_factura AS dia_generar_factura, clientes.tipo_impuesto AS '
                    'tipo_impuesto, clientes.dias_gracia AS dias_gracia, clientes.aplicar_corte AS '
                    'aplicar_corte, clientes.descuento_tipo AS descuento_tipo, clientes.descuento_porcentaje '
                    'AS descuento_porcentaje, clientes.descuento_documento AS descuento_documento, '
                    'clientes.promo_porcentaje AS promo_porcentaje, clientes.promo_meses AS promo_meses, '
                    'clientes.promo_desde AS promo_desde, clientes.telegram_chat_id AS telegram_chat_id, '
                    'clientes.canal_preferido AS canal_preferido, clientes.codigo_externo AS codigo_externo, '
                    'clientes.sistema_origen AS sistema_origen, clientes.importado_at AS importado_at, '
                    'clientes.portal_clave_hash AS portal_clave_hash, clientes.portal_clave_puesta AS '
                    'portal_clave_puesta, clientes.activado_en AS activado_en, clientes.numero_orden AS '
                    'numero_orden, clientes.motivo_baja_id AS motivo_baja_id, clientes.baja_en AS baja_en, '
                    'clientes.baja_nota AS baja_nota, clientes.codigo AS codigo, clientes.portal_clave AS '
                    'portal_clave, clientes.zona AS zona, clientes.estado_desde AS estado_desde, '
                    'clientes.pasarela AS pasarela, clientes.deuda_equipo AS deuda_equipo, '
                    'clientes.ultimo_pago_externo AS ultimo_pago_externo, clientes.avisos_activos AS '
                    'avisos_activos, clientes.avisos_canales AS avisos_canales, clientes.avisos_pantalla AS '
                    'avisos_pantalla, clientes.aviso_dias_1 AS aviso_dias_1, clientes.aviso_dias_2 AS '
                    'aviso_dias_2, clientes.aviso_dias_3 AS aviso_dias_3, clientes.aviso_factura_canales AS '
                    'aviso_factura_canales, clientes.aviso_pantalla_dias AS aviso_pantalla_dias, '
                    'clientes.cortar_tras_meses AS cortar_tras_meses, clientes.prestador_id AS prestador_id, '
                    'clientes.provincia AS provincia, clientes.canton AS canton, clientes.ciudad AS ciudad, '
                    'clientes.parroquia AS parroquia, clientes.tarifa_preferencial AS tarifa_preferencial, '
                    'clientes.acepta_arbitraje AS acepta_arbitraje, clientes.equipo_modalidad AS '
                    'equipo_modalidad, clientes.condicion_especial AS condicion_especial, '
                    'clientes.red_acceso AS red_acceso, clientes.tipo_cuenta AS tipo_cuenta, '
                    'clientes.permanencia_meses AS permanencia_meses, clientes.valor_instalacion AS '
                    'valor_instalacion, clientes.avisos_baja_at AS avisos_baja_at, '
                    'clientes.avisos_baja_texto AS avisos_baja_texto, clientes.descuento_fijo AS '
                    'descuento_fijo, clientes.descuento_fijo_motivo AS descuento_fijo_motivo, '
                    'clientes.ipv6_prefijo AS ipv6_prefijo, clientes.acepta_datos_personales AS '
                    'acepta_datos_personales, clientes.cortado_en AS cortado_en, clientes.aviso_dias_4 AS '
                    'aviso_dias_4, clientes.referencia_servicio AS referencia_servicio, '
                    'clientes.suspendido_motivo AS suspendido_motivo, clientes.suspendido_hasta AS '
                    'suspendido_hasta FROM clientes AS clientes WHERE NOT RLS_ACTIVA() OR (((SELECT '
                    "COALESCE((SELECT PG_JSON_TIENE(usuarios_sistema.permisos, '*') OR "
                    "PG_JSON_TIENE(usuarios_sistema.permisos, 'clientes.cartera') AS _col_0 FROM "
                    'usuarios_sistema AS usuarios_sistema WHERE usuarios_sistema.auth_id = AUTH_UID() AND '
                    'usuarios_sistema.activo LIMIT 1), TRUE /* Sin legajo no se bloquea a nadie: es una '
                    'instalación que todavía no */ /* corrió la migración 66, y cerrarle el paso la dejaría '
                    'inutilizable de */ /* golpe. El frente se comporta igual por la misma razón. */) AS '
                    '_col_0) OR clientes.id IN (SELECT cliente_id AS cliente_id FROM (WITH yo /* Solo el '
                    'técnico y los clientes de sus trabajos. */ /* La cobranza SALIÓ de acá a propósito: '
                    'abría la ficha completa cuando lo */ /* que hace falta es un nombre, un teléfono y un '
                    'saldo. Va por */ /* `v_cobros_por_gestionar`, más abajo. */ AS (SELECT '
                    'usuarios_sistema.id AS id, usuarios_sistema.tecnico_id AS tecnico_id FROM '
                    'usuarios_sistema AS usuarios_sistema WHERE usuarios_sistema.auth_id = AUTH_UID() AND '
                    'usuarios_sistema.activo LIMIT 1) SELECT t_fn1298.client_id AS cliente_id FROM tickets '
                    'AS t_fn1298 JOIN yo AS yo ON t_fn1298.tecnico_id = yo.tecnico_id WHERE NOT '
                    't_fn1298.client_id IS NULL UNION SELECT i_fn1298.client_id AS client_id FROM '
                    'instalaciones AS i_fn1298 JOIN yo AS yo ON i_fn1298.tecnico_id = yo.tecnico_id WHERE '
                    'NOT i_fn1298.client_id IS NULL) AS _0)) OR ((SELECT COALESCE((SELECT '
                    "PG_JSON_TIENE(usuarios_sistema.permisos, '*') OR "
                    "PG_JSON_TIENE(usuarios_sistema.permisos, 'clientes.cartera') AS _col_0 FROM "
                    'usuarios_sistema AS usuarios_sistema WHERE usuarios_sistema.auth_id = AUTH_UID() AND '
                    'usuarios_sistema.activo LIMIT 1), TRUE /* Sin legajo no se bloquea a nadie: es una '
                    'instalación que todavía no */ /* corrió la migración 66, y cerrarle el paso la dejaría '
                    'inutilizable de */ /* golpe. El frente se comporta igual por la misma razón. */) AS '
                    '_col_0)))) AS clientes WHERE NOT clientes.onu_id IS NULL))',
          'update': "((SELECT COALESCE((SELECT PG_JSON_TIENE(usuarios_sistema.permisos, '*') OR "
                    "PG_JSON_TIENE(usuarios_sistema.permisos, 'red.onus_ver') OR "
                    "PG_JSON_TIENE(usuarios_sistema.permisos, 'red.olts_ver') AS _col_0 FROM "
                    'usuarios_sistema AS usuarios_sistema WHERE usuarios_sistema.auth_id = AUTH_UID() AND '
                    'usuarios_sistema.activo LIMIT 1), TRUE) AS _col_0) OR onus.id IN (SELECT '
                    'clientes.onu_id AS onu_id FROM (SELECT clientes.id AS id, PG_DESCIFRAR(clientes.nombre) '
                    'AS nombre, clientes.router_id AS router_id, clientes.onu_id AS onu_id, clientes.plan_id '
                    'AS plan_id, clientes.ip AS ip, clientes.mac_address AS mac_address, '
                    'clientes.usuario_ppp AS usuario_ppp, clientes.estado AS estado, clientes.origen AS '
                    'origen, clientes.velocidad_cruda AS velocidad_cruda, clientes.comentario AS comentario, '
                    'clientes.created_at AS created_at, clientes.updated_at AS updated_at, '
                    'clientes.tipo_identificacion AS tipo_identificacion, '
                    'PG_DESCIFRAR(clientes.identificacion) AS identificacion, PG_DESCIFRAR(clientes.email) '
                    'AS email, PG_DESCIFRAR(clientes.telefono) AS telefono, PG_DESCIFRAR(clientes.direccion) '
                    'AS direccion, clientes.precio_mensual AS precio_mensual, clientes.dia_facturacion AS '
                    'dia_facturacion, PG_DESCIFRAR(clientes.telefono_movil) AS telefono_movil, '
                    'clientes.codigo_pago AS codigo_pago, PG_DESCIFRAR(clientes.clave_ppp) AS clave_ppp, '
                    'clientes.latitud AS latitud, clientes.longitud AS longitud, clientes.notas AS notas, '
                    'clientes.nap_id AS nap_id, clientes.puerto_nap AS puerto_nap, clientes.conectado_a_id '
                    'AS conectado_a_id, clientes.ip_administracion AS ip_administracion, '
                    'clientes.tipo_antena AS tipo_antena, clientes.tipo_conexion AS tipo_conexion, '
                    'clientes.tipo_ip AS tipo_ip, clientes.red_ipv4 AS red_ipv4, clientes.ipv6 AS ipv6, '
                    'clientes.ipv6_duid AS ipv6_duid, clientes.rutas AS rutas, clientes.descripcion_servicio '
                    'AS descripcion_servicio, clientes.excluir_firewall AS excluir_firewall, '
                    'clientes.fecha_instalacion AS fecha_instalacion, clientes.factura_electronica AS '
                    'factura_electronica, clientes.modalidad_pago AS modalidad_pago, '
                    'clientes.dia_generar_factura AS dia_generar_factura, clientes.tipo_impuesto AS '
                    'tipo_impuesto, clientes.dias_gracia AS dias_gracia, clientes.aplicar_corte AS '
                    'aplicar_corte, clientes.descuento_tipo AS descuento_tipo, clientes.descuento_porcentaje '
                    'AS descuento_porcentaje, clientes.descuento_documento AS descuento_documento, '
                    'clientes.promo_porcentaje AS promo_porcentaje, clientes.promo_meses AS promo_meses, '
                    'clientes.promo_desde AS promo_desde, clientes.telegram_chat_id AS telegram_chat_id, '
                    'clientes.canal_preferido AS canal_preferido, clientes.codigo_externo AS codigo_externo, '
                    'clientes.sistema_origen AS sistema_origen, clientes.importado_at AS importado_at, '
                    'clientes.portal_clave_hash AS portal_clave_hash, clientes.portal_clave_puesta AS '
                    'portal_clave_puesta, clientes.activado_en AS activado_en, clientes.numero_orden AS '
                    'numero_orden, clientes.motivo_baja_id AS motivo_baja_id, clientes.baja_en AS baja_en, '
                    'clientes.baja_nota AS baja_nota, clientes.codigo AS codigo, clientes.portal_clave AS '
                    'portal_clave, clientes.zona AS zona, clientes.estado_desde AS estado_desde, '
                    'clientes.pasarela AS pasarela, clientes.deuda_equipo AS deuda_equipo, '
                    'clientes.ultimo_pago_externo AS ultimo_pago_externo, clientes.avisos_activos AS '
                    'avisos_activos, clientes.avisos_canales AS avisos_canales, clientes.avisos_pantalla AS '
                    'avisos_pantalla, clientes.aviso_dias_1 AS aviso_dias_1, clientes.aviso_dias_2 AS '
                    'aviso_dias_2, clientes.aviso_dias_3 AS aviso_dias_3, clientes.aviso_factura_canales AS '
                    'aviso_factura_canales, clientes.aviso_pantalla_dias AS aviso_pantalla_dias, '
                    'clientes.cortar_tras_meses AS cortar_tras_meses, clientes.prestador_id AS prestador_id, '
                    'clientes.provincia AS provincia, clientes.canton AS canton, clientes.ciudad AS ciudad, '
                    'clientes.parroquia AS parroquia, clientes.tarifa_preferencial AS tarifa_preferencial, '
                    'clientes.acepta_arbitraje AS acepta_arbitraje, clientes.equipo_modalidad AS '
                    'equipo_modalidad, clientes.condicion_especial AS condicion_especial, '
                    'clientes.red_acceso AS red_acceso, clientes.tipo_cuenta AS tipo_cuenta, '
                    'clientes.permanencia_meses AS permanencia_meses, clientes.valor_instalacion AS '
                    'valor_instalacion, clientes.avisos_baja_at AS avisos_baja_at, '
                    'clientes.avisos_baja_texto AS avisos_baja_texto, clientes.descuento_fijo AS '
                    'descuento_fijo, clientes.descuento_fijo_motivo AS descuento_fijo_motivo, '
                    'clientes.ipv6_prefijo AS ipv6_prefijo, clientes.acepta_datos_personales AS '
                    'acepta_datos_personales, clientes.cortado_en AS cortado_en, clientes.aviso_dias_4 AS '
                    'aviso_dias_4, clientes.referencia_servicio AS referencia_servicio, '
                    'clientes.suspendido_motivo AS suspendido_motivo, clientes.suspendido_hasta AS '
                    'suspendido_hasta FROM clientes AS clientes WHERE NOT RLS_ACTIVA() OR (((SELECT '
                    "COALESCE((SELECT PG_JSON_TIENE(usuarios_sistema.permisos, '*') OR "
                    "PG_JSON_TIENE(usuarios_sistema.permisos, 'clientes.cartera') AS _col_0 FROM "
                    'usuarios_sistema AS usuarios_sistema WHERE usuarios_sistema.auth_id = AUTH_UID() AND '
                    'usuarios_sistema.activo LIMIT 1), TRUE /* Sin legajo no se bloquea a nadie: es una '
                    'instalación que todavía no */ /* corrió la migración 66, y cerrarle el paso la dejaría '
                    'inutilizable de */ /* golpe. El frente se comporta igual por la misma razón. */) AS '
                    '_col_0) OR clientes.id IN (SELECT cliente_id AS cliente_id FROM (WITH yo /* Solo el '
                    'técnico y los clientes de sus trabajos. */ /* La cobranza SALIÓ de acá a propósito: '
                    'abría la ficha completa cuando lo */ /* que hace falta es un nombre, un teléfono y un '
                    'saldo. Va por */ /* `v_cobros_por_gestionar`, más abajo. */ AS (SELECT '
                    'usuarios_sistema.id AS id, usuarios_sistema.tecnico_id AS tecnico_id FROM '
                    'usuarios_sistema AS usuarios_sistema WHERE usuarios_sistema.auth_id = AUTH_UID() AND '
                    'usuarios_sistema.activo LIMIT 1) SELECT t_fn1303.client_id AS cliente_id FROM tickets '
                    'AS t_fn1303 JOIN yo AS yo ON t_fn1303.tecnico_id = yo.tecnico_id WHERE NOT '
                    't_fn1303.client_id IS NULL UNION SELECT i_fn1303.client_id AS client_id FROM '
                    'instalaciones AS i_fn1303 JOIN yo AS yo ON i_fn1303.tecnico_id = yo.tecnico_id WHERE '
                    'NOT i_fn1303.client_id IS NULL) AS _0)) OR ((SELECT COALESCE((SELECT '
                    "PG_JSON_TIENE(usuarios_sistema.permisos, '*') OR "
                    "PG_JSON_TIENE(usuarios_sistema.permisos, 'clientes.cartera') AS _col_0 FROM "
                    'usuarios_sistema AS usuarios_sistema WHERE usuarios_sistema.auth_id = AUTH_UID() AND '
                    'usuarios_sistema.activo LIMIT 1), TRUE /* Sin legajo no se bloquea a nadie: es una '
                    'instalación que todavía no */ /* corrió la migración 66, y cerrarle el paso la dejaría '
                    'inutilizable de */ /* golpe. El frente se comporta igual por la misma razón. */) AS '
                    '_col_0)))) AS clientes WHERE NOT clientes.onu_id IS NULL))',
          'update_check': "((SELECT COALESCE((SELECT PG_JSON_TIENE(usuarios_sistema.permisos, '*') OR "
                          "PG_JSON_TIENE(usuarios_sistema.permisos, 'red.onus_ver') OR "
                          "PG_JSON_TIENE(usuarios_sistema.permisos, 'red.olts_ver') AS _col_0 FROM "
                          'usuarios_sistema AS usuarios_sistema WHERE usuarios_sistema.auth_id = AUTH_UID() '
                          'AND usuarios_sistema.activo LIMIT 1), TRUE) AS _col_0))'},
 'pagos': {'delete': "((SELECT COALESCE((SELECT PG_JSON_TIENE(usuarios_sistema.permisos, '*') OR "
                     "PG_JSON_TIENE(usuarios_sistema.permisos, 'clientes.cartera') AS _col_0 FROM "
                     'usuarios_sistema AS usuarios_sistema WHERE usuarios_sistema.auth_id = AUTH_UID() AND '
                     'usuarios_sistema.activo LIMIT 1), TRUE /* Sin legajo no se bloquea a nadie: es una '
                     'instalación que todavía no */ /* corrió la migración 66, y cerrarle el paso la dejaría '
                     'inutilizable de */ /* golpe. El frente se comporta igual por la misma razón. */) AS '
                     '_col_0) OR pagos.client_id IN (SELECT cliente_id AS cliente_id FROM (WITH yo /* Solo '
                     'el técnico y los clientes de sus trabajos. */ /* La cobranza SALIÓ de acá a propósito: '
                     'abría la ficha completa cuando lo */ /* que hace falta es un nombre, un teléfono y un '
                     'saldo. Va por */ /* `v_cobros_por_gestionar`, más abajo. */ AS (SELECT '
                     'usuarios_sistema.id AS id, usuarios_sistema.tecnico_id AS tecnico_id FROM '
                     'usuarios_sistema AS usuarios_sistema WHERE usuarios_sistema.auth_id = AUTH_UID() AND '
                     'usuarios_sistema.activo LIMIT 1) SELECT t_fn1317.client_id AS cliente_id FROM tickets '
                     'AS t_fn1317 JOIN yo AS yo ON t_fn1317.tecnico_id = yo.tecnico_id WHERE NOT '
                     't_fn1317.client_id IS NULL UNION SELECT i_fn1317.client_id AS client_id FROM '
                     'instalaciones AS i_fn1317 JOIN yo AS yo ON i_fn1317.tecnico_id = yo.tecnico_id WHERE '
                     'NOT i_fn1317.client_id IS NULL) AS _0))',
           'insert': "((SELECT COALESCE((SELECT PG_JSON_TIENE(usuarios_sistema.permisos, '*') OR "
                     "PG_JSON_TIENE(usuarios_sistema.permisos, 'clientes.cartera') AS _col_0 FROM "
                     'usuarios_sistema AS usuarios_sistema WHERE usuarios_sistema.auth_id = AUTH_UID() AND '
                     'usuarios_sistema.activo LIMIT 1), TRUE /* Sin legajo no se bloquea a nadie: es una '
                     'instalación que todavía no */ /* corrió la migración 66, y cerrarle el paso la dejaría '
                     'inutilizable de */ /* golpe. El frente se comporta igual por la misma razón. */) AS '
                     '_col_0))',
           'select': "((SELECT COALESCE((SELECT PG_JSON_TIENE(usuarios_sistema.permisos, '*') OR "
                     "PG_JSON_TIENE(usuarios_sistema.permisos, 'clientes.cartera') AS _col_0 FROM "
                     'usuarios_sistema AS usuarios_sistema WHERE usuarios_sistema.auth_id = AUTH_UID() AND '
                     'usuarios_sistema.activo LIMIT 1), TRUE /* Sin legajo no se bloquea a nadie: es una '
                     'instalación que todavía no */ /* corrió la migración 66, y cerrarle el paso la dejaría '
                     'inutilizable de */ /* golpe. El frente se comporta igual por la misma razón. */) AS '
                     '_col_0) OR pagos.client_id IN (SELECT cliente_id AS cliente_id FROM (WITH yo /* Solo '
                     'el técnico y los clientes de sus trabajos. */ /* La cobranza SALIÓ de acá a propósito: '
                     'abría la ficha completa cuando lo */ /* que hace falta es un nombre, un teléfono y un '
                     'saldo. Va por */ /* `v_cobros_por_gestionar`, más abajo. */ AS (SELECT '
                     'usuarios_sistema.id AS id, usuarios_sistema.tecnico_id AS tecnico_id FROM '
                     'usuarios_sistema AS usuarios_sistema WHERE usuarios_sistema.auth_id = AUTH_UID() AND '
                     'usuarios_sistema.activo LIMIT 1) SELECT t_fn1311.client_id AS cliente_id FROM tickets '
                     'AS t_fn1311 JOIN yo AS yo ON t_fn1311.tecnico_id = yo.tecnico_id WHERE NOT '
                     't_fn1311.client_id IS NULL UNION SELECT i_fn1311.client_id AS client_id FROM '
                     'instalaciones AS i_fn1311 JOIN yo AS yo ON i_fn1311.tecnico_id = yo.tecnico_id WHERE '
                     'NOT i_fn1311.client_id IS NULL) AS _0))',
           'update': "((SELECT COALESCE((SELECT PG_JSON_TIENE(usuarios_sistema.permisos, '*') OR "
                     "PG_JSON_TIENE(usuarios_sistema.permisos, 'clientes.cartera') AS _col_0 FROM "
                     'usuarios_sistema AS usuarios_sistema WHERE usuarios_sistema.auth_id = AUTH_UID() AND '
                     'usuarios_sistema.activo LIMIT 1), TRUE /* Sin legajo no se bloquea a nadie: es una '
                     'instalación que todavía no */ /* corrió la migración 66, y cerrarle el paso la dejaría '
                     'inutilizable de */ /* golpe. El frente se comporta igual por la misma razón. */) AS '
                     '_col_0) OR pagos.client_id IN (SELECT cliente_id AS cliente_id FROM (WITH yo /* Solo '
                     'el técnico y los clientes de sus trabajos. */ /* La cobranza SALIÓ de acá a propósito: '
                     'abría la ficha completa cuando lo */ /* que hace falta es un nombre, un teléfono y un '
                     'saldo. Va por */ /* `v_cobros_por_gestionar`, más abajo. */ AS (SELECT '
                     'usuarios_sistema.id AS id, usuarios_sistema.tecnico_id AS tecnico_id FROM '
                     'usuarios_sistema AS usuarios_sistema WHERE usuarios_sistema.auth_id = AUTH_UID() AND '
                     'usuarios_sistema.activo LIMIT 1) SELECT t_fn1314.client_id AS cliente_id FROM tickets '
                     'AS t_fn1314 JOIN yo AS yo ON t_fn1314.tecnico_id = yo.tecnico_id WHERE NOT '
                     't_fn1314.client_id IS NULL UNION SELECT i_fn1314.client_id AS client_id FROM '
                     'instalaciones AS i_fn1314 JOIN yo AS yo ON i_fn1314.tecnico_id = yo.tecnico_id WHERE '
                     'NOT i_fn1314.client_id IS NULL) AS _0))',
           'update_check': "((SELECT COALESCE((SELECT PG_JSON_TIENE(usuarios_sistema.permisos, '*') OR "
                           "PG_JSON_TIENE(usuarios_sistema.permisos, 'clientes.cartera') AS _col_0 FROM "
                           'usuarios_sistema AS usuarios_sistema WHERE usuarios_sistema.auth_id = AUTH_UID() '
                           'AND usuarios_sistema.activo LIMIT 1), TRUE /* Sin legajo no se bloquea a nadie: '
                           'es una instalación que todavía no */ /* corrió la migración 66, y cerrarle el '
                           'paso la dejaría inutilizable de */ /* golpe. El frente se comporta igual por la '
                           'misma razón. */) AS _col_0))'},
 'pagos_reportados': {'delete': '0', 'insert': '0', 'select': None, 'update': '0', 'update_check': '0'},
 'parametros_tecnicos': {'delete': '0', 'insert': '0', 'select': None, 'update': '0', 'update_check': '0'},
 'plan_routers': {'delete': None, 'insert': None, 'select': None, 'update': None, 'update_check': None},
 'planes_velocidad': {'delete': None, 'insert': None, 'select': None, 'update': None, 'update_check': None},
 'planes_velocidad_historico': {'delete': '0',
                                'insert': '0',
                                'select': None,
                                'update': '0',
                                'update_check': '0'},
 'plantillas_mensaje': {'delete': None, 'insert': None, 'select': None, 'update': None, 'update_check': None},
 'plantillas_whatsapp': {'delete': None,
                         'insert': None,
                         'select': None,
                         'update': None,
                         'update_check': None},
 'portal_codigos': {'delete': '0', 'insert': '0', 'select': '0', 'update': '0', 'update_check': '0'},
 'portal_sesiones': {'delete': '0', 'insert': '0', 'select': '0', 'update': '0', 'update_check': '0'},
 'portal_solicitudes': {'delete': '0', 'insert': '0', 'select': None, 'update': '0', 'update_check': '0'},
 'prestadores': {'delete': None, 'insert': None, 'select': None, 'update': None, 'update_check': None},
 'promesas_pago': {'delete': "((SELECT COALESCE((SELECT PG_JSON_TIENE(usuarios_sistema.permisos, '*') OR "
                             "PG_JSON_TIENE(usuarios_sistema.permisos, 'clientes.cartera') AS _col_0 FROM "
                             'usuarios_sistema AS usuarios_sistema WHERE usuarios_sistema.auth_id = '
                             'AUTH_UID() AND usuarios_sistema.activo LIMIT 1), TRUE /* Sin legajo no se '
                             'bloquea a nadie: es una instalación que todavía no */ /* corrió la migración '
                             '66, y cerrarle el paso la dejaría inutilizable de */ /* golpe. El frente se '
                             'comporta igual por la misma razón. */) AS _col_0) OR promesas_pago.client_id '
                             'IN (SELECT cliente_id AS cliente_id FROM (WITH yo /* Solo el técnico y los '
                             'clientes de sus trabajos. */ /* La cobranza SALIÓ de acá a propósito: abría la '
                             'ficha completa cuando lo */ /* que hace falta es un nombre, un teléfono y un '
                             'saldo. Va por */ /* `v_cobros_por_gestionar`, más abajo. */ AS (SELECT '
                             'usuarios_sistema.id AS id, usuarios_sistema.tecnico_id AS tecnico_id FROM '
                             'usuarios_sistema AS usuarios_sistema WHERE usuarios_sistema.auth_id = '
                             'AUTH_UID() AND usuarios_sistema.activo LIMIT 1) SELECT t_fn1327.client_id AS '
                             'cliente_id FROM tickets AS t_fn1327 JOIN yo AS yo ON t_fn1327.tecnico_id = '
                             'yo.tecnico_id WHERE NOT t_fn1327.client_id IS NULL UNION SELECT '
                             'i_fn1327.client_id AS client_id FROM instalaciones AS i_fn1327 JOIN yo AS yo '
                             'ON i_fn1327.tecnico_id = yo.tecnico_id WHERE NOT i_fn1327.client_id IS NULL) '
                             'AS _0))',
                   'insert': "((SELECT COALESCE((SELECT PG_JSON_TIENE(usuarios_sistema.permisos, '*') OR "
                             "PG_JSON_TIENE(usuarios_sistema.permisos, 'clientes.cartera') AS _col_0 FROM "
                             'usuarios_sistema AS usuarios_sistema WHERE usuarios_sistema.auth_id = '
                             'AUTH_UID() AND usuarios_sistema.activo LIMIT 1), TRUE /* Sin legajo no se '
                             'bloquea a nadie: es una instalación que todavía no */ /* corrió la migración '
                             '66, y cerrarle el paso la dejaría inutilizable de */ /* golpe. El frente se '
                             'comporta igual por la misma razón. */) AS _col_0) OR promesas_pago.client_id '
                             'IN (SELECT cliente_id AS cliente_id FROM (WITH yo /* Solo el técnico y los '
                             'clientes de sus trabajos. */ /* La cobranza SALIÓ de acá a propósito: abría la '
                             'ficha completa cuando lo */ /* que hace falta es un nombre, un teléfono y un '
                             'saldo. Va por */ /* `v_cobros_por_gestionar`, más abajo. */ AS (SELECT '
                             'usuarios_sistema.id AS id, usuarios_sistema.tecnico_id AS tecnico_id FROM '
                             'usuarios_sistema AS usuarios_sistema WHERE usuarios_sistema.auth_id = '
                             'AUTH_UID() AND usuarios_sistema.activo LIMIT 1) SELECT t_fn1321.client_id AS '
                             'cliente_id FROM tickets AS t_fn1321 JOIN yo AS yo ON t_fn1321.tecnico_id = '
                             'yo.tecnico_id WHERE NOT t_fn1321.client_id IS NULL UNION SELECT '
                             'i_fn1321.client_id AS client_id FROM instalaciones AS i_fn1321 JOIN yo AS yo '
                             'ON i_fn1321.tecnico_id = yo.tecnico_id WHERE NOT i_fn1321.client_id IS NULL) '
                             'AS _0))',
                   'select': "((SELECT COALESCE((SELECT PG_JSON_TIENE(usuarios_sistema.permisos, '*') OR "
                             "PG_JSON_TIENE(usuarios_sistema.permisos, 'clientes.cartera') AS _col_0 FROM "
                             'usuarios_sistema AS usuarios_sistema WHERE usuarios_sistema.auth_id = '
                             'AUTH_UID() AND usuarios_sistema.activo LIMIT 1), TRUE /* Sin legajo no se '
                             'bloquea a nadie: es una instalación que todavía no */ /* corrió la migración '
                             '66, y cerrarle el paso la dejaría inutilizable de */ /* golpe. El frente se '
                             'comporta igual por la misma razón. */) AS _col_0) OR promesas_pago.client_id '
                             'IN (SELECT cliente_id AS cliente_id FROM (WITH yo /* Solo el técnico y los '
                             'clientes de sus trabajos. */ /* La cobranza SALIÓ de acá a propósito: abría la '
                             'ficha completa cuando lo */ /* que hace falta es un nombre, un teléfono y un '
                             'saldo. Va por */ /* `v_cobros_por_gestionar`, más abajo. */ AS (SELECT '
                             'usuarios_sistema.id AS id, usuarios_sistema.tecnico_id AS tecnico_id FROM '
                             'usuarios_sistema AS usuarios_sistema WHERE usuarios_sistema.auth_id = '
                             'AUTH_UID() AND usuarios_sistema.activo LIMIT 1) SELECT t_fn1319.client_id AS '
                             'cliente_id FROM tickets AS t_fn1319 JOIN yo AS yo ON t_fn1319.tecnico_id = '
                             'yo.tecnico_id WHERE NOT t_fn1319.client_id IS NULL UNION SELECT '
                             'i_fn1319.client_id AS client_id FROM instalaciones AS i_fn1319 JOIN yo AS yo '
                             'ON i_fn1319.tecnico_id = yo.tecnico_id WHERE NOT i_fn1319.client_id IS NULL) '
                             'AS _0))',
                   'update': "((SELECT COALESCE((SELECT PG_JSON_TIENE(usuarios_sistema.permisos, '*') OR "
                             "PG_JSON_TIENE(usuarios_sistema.permisos, 'clientes.cartera') AS _col_0 FROM "
                             'usuarios_sistema AS usuarios_sistema WHERE usuarios_sistema.auth_id = '
                             'AUTH_UID() AND usuarios_sistema.activo LIMIT 1), TRUE /* Sin legajo no se '
                             'bloquea a nadie: es una instalación que todavía no */ /* corrió la migración '
                             '66, y cerrarle el paso la dejaría inutilizable de */ /* golpe. El frente se '
                             'comporta igual por la misma razón. */) AS _col_0) OR promesas_pago.client_id '
                             'IN (SELECT cliente_id AS cliente_id FROM (WITH yo /* Solo el técnico y los '
                             'clientes de sus trabajos. */ /* La cobranza SALIÓ de acá a propósito: abría la '
                             'ficha completa cuando lo */ /* que hace falta es un nombre, un teléfono y un '
                             'saldo. Va por */ /* `v_cobros_por_gestionar`, más abajo. */ AS (SELECT '
                             'usuarios_sistema.id AS id, usuarios_sistema.tecnico_id AS tecnico_id FROM '
                             'usuarios_sistema AS usuarios_sistema WHERE usuarios_sistema.auth_id = '
                             'AUTH_UID() AND usuarios_sistema.activo LIMIT 1) SELECT t_fn1323.client_id AS '
                             'cliente_id FROM tickets AS t_fn1323 JOIN yo AS yo ON t_fn1323.tecnico_id = '
                             'yo.tecnico_id WHERE NOT t_fn1323.client_id IS NULL UNION SELECT '
                             'i_fn1323.client_id AS client_id FROM instalaciones AS i_fn1323 JOIN yo AS yo '
                             'ON i_fn1323.tecnico_id = yo.tecnico_id WHERE NOT i_fn1323.client_id IS NULL) '
                             'AS _0))',
                   'update_check': "((SELECT COALESCE((SELECT PG_JSON_TIENE(usuarios_sistema.permisos, '*') "
                                   "OR PG_JSON_TIENE(usuarios_sistema.permisos, 'clientes.cartera') AS "
                                   '_col_0 FROM usuarios_sistema AS usuarios_sistema WHERE '
                                   'usuarios_sistema.auth_id = AUTH_UID() AND usuarios_sistema.activo LIMIT '
                                   '1), TRUE /* Sin legajo no se bloquea a nadie: es una instalación que '
                                   'todavía no */ /* corrió la migración 66, y cerrarle el paso la dejaría '
                                   'inutilizable de */ /* golpe. El frente se comporta igual por la misma '
                                   'razón. */) AS _col_0) OR promesas_pago.client_id IN (SELECT cliente_id '
                                   'AS cliente_id FROM (WITH yo /* Solo el técnico y los clientes de sus '
                                   'trabajos. */ /* La cobranza SALIÓ de acá a propósito: abría la ficha '
                                   'completa cuando lo */ /* que hace falta es un nombre, un teléfono y un '
                                   'saldo. Va por */ /* `v_cobros_por_gestionar`, más abajo. */ AS (SELECT '
                                   'usuarios_sistema.id AS id, usuarios_sistema.tecnico_id AS tecnico_id '
                                   'FROM usuarios_sistema AS usuarios_sistema WHERE usuarios_sistema.auth_id '
                                   '= AUTH_UID() AND usuarios_sistema.activo LIMIT 1) SELECT '
                                   't_fn1325.client_id AS cliente_id FROM tickets AS t_fn1325 JOIN yo AS yo '
                                   'ON t_fn1325.tecnico_id = yo.tecnico_id WHERE NOT t_fn1325.client_id IS '
                                   'NULL UNION SELECT i_fn1325.client_id AS client_id FROM instalaciones AS '
                                   'i_fn1325 JOIN yo AS yo ON i_fn1325.tecnico_id = yo.tecnico_id WHERE NOT '
                                   'i_fn1325.client_id IS NULL) AS _0))'},
 'promocion_planes': {'delete': "((SELECT COALESCE((SELECT PG_JSON_TIENE(usuarios_sistema.permisos, '*') OR "
                                "PG_JSON_TIENE(usuarios_sistema.permisos, 'clientes.cartera') AS _col_0 FROM "
                                'usuarios_sistema AS usuarios_sistema WHERE usuarios_sistema.auth_id = '
                                'AUTH_UID() AND usuarios_sistema.activo LIMIT 1), TRUE /* Sin legajo no se '
                                'bloquea a nadie: es una instalación que todavía no */ /* corrió la '
                                'migración 66, y cerrarle el paso la dejaría inutilizable de */ /* golpe. El '
                                'frente se comporta igual por la misma razón. */) AS _col_0))',
                      'insert': "((SELECT COALESCE((SELECT PG_JSON_TIENE(usuarios_sistema.permisos, '*') OR "
                                "PG_JSON_TIENE(usuarios_sistema.permisos, 'clientes.cartera') AS _col_0 FROM "
                                'usuarios_sistema AS usuarios_sistema WHERE usuarios_sistema.auth_id = '
                                'AUTH_UID() AND usuarios_sistema.activo LIMIT 1), TRUE /* Sin legajo no se '
                                'bloquea a nadie: es una instalación que todavía no */ /* corrió la '
                                'migración 66, y cerrarle el paso la dejaría inutilizable de */ /* golpe. El '
                                'frente se comporta igual por la misma razón. */) AS _col_0))',
                      'select': None,
                      'update': "((SELECT COALESCE((SELECT PG_JSON_TIENE(usuarios_sistema.permisos, '*') OR "
                                "PG_JSON_TIENE(usuarios_sistema.permisos, 'clientes.cartera') AS _col_0 FROM "
                                'usuarios_sistema AS usuarios_sistema WHERE usuarios_sistema.auth_id = '
                                'AUTH_UID() AND usuarios_sistema.activo LIMIT 1), TRUE /* Sin legajo no se '
                                'bloquea a nadie: es una instalación que todavía no */ /* corrió la '
                                'migración 66, y cerrarle el paso la dejaría inutilizable de */ /* golpe. El '
                                'frente se comporta igual por la misma razón. */) AS _col_0))',
                      'update_check': '((SELECT COALESCE((SELECT PG_JSON_TIENE(usuarios_sistema.permisos, '
                                      "'*') OR PG_JSON_TIENE(usuarios_sistema.permisos, 'clientes.cartera') "
                                      'AS _col_0 FROM usuarios_sistema AS usuarios_sistema WHERE '
                                      'usuarios_sistema.auth_id = AUTH_UID() AND usuarios_sistema.activo '
                                      'LIMIT 1), TRUE /* Sin legajo no se bloquea a nadie: es una '
                                      'instalación que todavía no */ /* corrió la migración 66, y cerrarle '
                                      'el paso la dejaría inutilizable de */ /* golpe. El frente se comporta '
                                      'igual por la misma razón. */) AS _col_0))'},
 'promociones': {'delete': "((SELECT COALESCE((SELECT PG_JSON_TIENE(usuarios_sistema.permisos, '*') OR "
                           "PG_JSON_TIENE(usuarios_sistema.permisos, 'clientes.cartera') AS _col_0 FROM "
                           'usuarios_sistema AS usuarios_sistema WHERE usuarios_sistema.auth_id = AUTH_UID() '
                           'AND usuarios_sistema.activo LIMIT 1), TRUE /* Sin legajo no se bloquea a nadie: '
                           'es una instalación que todavía no */ /* corrió la migración 66, y cerrarle el '
                           'paso la dejaría inutilizable de */ /* golpe. El frente se comporta igual por la '
                           'misma razón. */) AS _col_0))',
                 'insert': "((SELECT COALESCE((SELECT PG_JSON_TIENE(usuarios_sistema.permisos, '*') OR "
                           "PG_JSON_TIENE(usuarios_sistema.permisos, 'clientes.cartera') AS _col_0 FROM "
                           'usuarios_sistema AS usuarios_sistema WHERE usuarios_sistema.auth_id = AUTH_UID() '
                           'AND usuarios_sistema.activo LIMIT 1), TRUE /* Sin legajo no se bloquea a nadie: '
                           'es una instalación que todavía no */ /* corrió la migración 66, y cerrarle el '
                           'paso la dejaría inutilizable de */ /* golpe. El frente se comporta igual por la '
                           'misma razón. */) AS _col_0))',
                 'select': None,
                 'update': "((SELECT COALESCE((SELECT PG_JSON_TIENE(usuarios_sistema.permisos, '*') OR "
                           "PG_JSON_TIENE(usuarios_sistema.permisos, 'clientes.cartera') AS _col_0 FROM "
                           'usuarios_sistema AS usuarios_sistema WHERE usuarios_sistema.auth_id = AUTH_UID() '
                           'AND usuarios_sistema.activo LIMIT 1), TRUE /* Sin legajo no se bloquea a nadie: '
                           'es una instalación que todavía no */ /* corrió la migración 66, y cerrarle el '
                           'paso la dejaría inutilizable de */ /* golpe. El frente se comporta igual por la '
                           'misma razón. */) AS _col_0))',
                 'update_check': "((SELECT COALESCE((SELECT PG_JSON_TIENE(usuarios_sistema.permisos, '*') OR "
                                 "PG_JSON_TIENE(usuarios_sistema.permisos, 'clientes.cartera') AS _col_0 "
                                 'FROM usuarios_sistema AS usuarios_sistema WHERE usuarios_sistema.auth_id = '
                                 'AUTH_UID() AND usuarios_sistema.activo LIMIT 1), TRUE /* Sin legajo no se '
                                 'bloquea a nadie: es una instalación que todavía no */ /* corrió la '
                                 'migración 66, y cerrarle el paso la dejaría inutilizable de */ /* golpe. '
                                 'El frente se comporta igual por la misma razón. */) AS _col_0))'},
 'prospecto_actividades': {'delete': '(prospecto_actividades.prospecto_id IN (SELECT prospectos.id AS id '
                                     'FROM (SELECT prospectos.id AS id, PG_DESCIFRAR(prospectos.nombre) AS '
                                     'nombre, PG_DESCIFRAR(prospectos.identificacion) AS identificacion, '
                                     'PG_DESCIFRAR(prospectos.telefono) AS telefono, '
                                     'PG_DESCIFRAR(prospectos.telefono_whatsapp) AS telefono_whatsapp, '
                                     'PG_DESCIFRAR(prospectos.email) AS email, '
                                     'PG_DESCIFRAR(prospectos.direccion) AS direccion, '
                                     'PG_DESCIFRAR(prospectos.referencia) AS referencia, prospectos.sector '
                                     'AS sector, prospectos.canton AS canton, prospectos.latitud AS latitud, '
                                     'prospectos.longitud AS longitud, prospectos.plan_id AS plan_id, '
                                     'prospectos.origen AS origen, prospectos.estado AS estado, '
                                     'prospectos.motivo_perdida AS motivo_perdida, prospectos.vendedor_id AS '
                                     'vendedor_id, prospectos.cobertura AS cobertura, prospectos.nap_id AS '
                                     'nap_id, prospectos.distancia_nodo_m AS distancia_nodo_m, '
                                     'prospectos.proxima_accion AS proxima_accion, prospectos.instalacion_id '
                                     'AS instalacion_id, prospectos.cliente_id AS cliente_id, '
                                     'prospectos.notas AS notas, prospectos.creado_por AS creado_por, '
                                     'prospectos.creado_en AS creado_en, prospectos.actualizado_en AS '
                                     'actualizado_en, prospectos.archivado_en AS archivado_en, '
                                     'prospectos.ganado_en AS ganado_en, prospectos.promocion_id AS '
                                     'promocion_id, prospectos.tipo_operacion AS tipo_operacion FROM '
                                     'prospectos AS prospectos WHERE NOT RLS_ACTIVA() OR (((SELECT '
                                     "COALESCE((SELECT PG_JSON_TIENE(usuarios_sistema.permisos, '*') OR "
                                     "PG_JSON_TIENE(usuarios_sistema.permisos, 'clientes.cartera') AS _col_0 "
                                     'FROM usuarios_sistema AS usuarios_sistema WHERE '
                                     'usuarios_sistema.auth_id = AUTH_UID() AND usuarios_sistema.activo '
                                     'LIMIT 1), TRUE /* Sin legajo no se bloquea a nadie: es una instalación '
                                     'que todavía no */ /* corrió la migración 66, y cerrarle el paso la '
                                     'dejaría inutilizable de */ /* golpe. El frente se comporta igual por '
                                     'la misma razón. */) AS _col_0) OR (prospectos.archivado_en IS NULL AND '
                                     '((SELECT COALESCE((SELECT PG_JSON_TIENE(usuarios_sistema.permisos, '
                                     "'*') OR PG_JSON_TIENE(usuarios_sistema.permisos, 'ventas.equipo') AS "
                                     '_col_0 FROM usuarios_sistema AS usuarios_sistema WHERE '
                                     'usuarios_sistema.auth_id = AUTH_UID() AND usuarios_sistema.activo '
                                     'LIMIT 1), TRUE /* Sin legajo se permite, igual que el resto de los '
                                     'ayudantes: una */ /* instalación sin la migración 66 no puede quedarse '
                                     'sin módulo comercial. */) AS _col_0) OR prospectos.vendedor_id = '
                                     '(SELECT usuarios_sistema.id AS id FROM usuarios_sistema AS '
                                     'usuarios_sistema WHERE usuarios_sistema.auth_id = AUTH_UID() AND '
                                     'usuarios_sistema.activo LIMIT 1) OR prospectos.creado_por = (SELECT '
                                     'usuarios_sistema.id AS id FROM usuarios_sistema AS usuarios_sistema '
                                     'WHERE usuarios_sistema.auth_id = AUTH_UID() AND '
                                     'usuarios_sistema.activo LIMIT 1)))) OR ((SELECT COALESCE((SELECT '
                                     "PG_JSON_TIENE(usuarios_sistema.permisos, '*') OR "
                                     "PG_JSON_TIENE(usuarios_sistema.permisos, 'clientes.cartera') AS _col_0 "
                                     'FROM usuarios_sistema AS usuarios_sistema WHERE '
                                     'usuarios_sistema.auth_id = AUTH_UID() AND usuarios_sistema.activo '
                                     'LIMIT 1), TRUE /* Sin legajo no se bloquea a nadie: es una instalación '
                                     'que todavía no */ /* corrió la migración 66, y cerrarle el paso la '
                                     'dejaría inutilizable de */ /* golpe. El frente se comporta igual por '
                                     'la misma razón. */) AS _col_0) OR (prospectos.archivado_en IS NULL AND '
                                     '((SELECT COALESCE((SELECT PG_JSON_TIENE(usuarios_sistema.permisos, '
                                     "'*') OR PG_JSON_TIENE(usuarios_sistema.permisos, 'ventas.equipo') AS "
                                     '_col_0 FROM usuarios_sistema AS usuarios_sistema WHERE '
                                     'usuarios_sistema.auth_id = AUTH_UID() AND usuarios_sistema.activo '
                                     'LIMIT 1), TRUE /* Sin legajo se permite, igual que el resto de los '
                                     'ayudantes: una */ /* instalación sin la migración 66 no puede quedarse '
                                     'sin módulo comercial. */) AS _col_0) OR prospectos.vendedor_id = '
                                     '(SELECT usuarios_sistema.id AS id FROM usuarios_sistema AS '
                                     'usuarios_sistema WHERE usuarios_sistema.auth_id = AUTH_UID() AND '
                                     'usuarios_sistema.activo LIMIT 1) OR prospectos.creado_por = (SELECT '
                                     'usuarios_sistema.id AS id FROM usuarios_sistema AS usuarios_sistema '
                                     'WHERE usuarios_sistema.auth_id = AUTH_UID() AND '
                                     'usuarios_sistema.activo LIMIT 1)))))) AS prospectos))',
                           'insert': '(prospecto_actividades.prospecto_id IN (SELECT prospectos.id AS id '
                                     'FROM (SELECT prospectos.id AS id, PG_DESCIFRAR(prospectos.nombre) AS '
                                     'nombre, PG_DESCIFRAR(prospectos.identificacion) AS identificacion, '
                                     'PG_DESCIFRAR(prospectos.telefono) AS telefono, '
                                     'PG_DESCIFRAR(prospectos.telefono_whatsapp) AS telefono_whatsapp, '
                                     'PG_DESCIFRAR(prospectos.email) AS email, '
                                     'PG_DESCIFRAR(prospectos.direccion) AS direccion, '
                                     'PG_DESCIFRAR(prospectos.referencia) AS referencia, prospectos.sector '
                                     'AS sector, prospectos.canton AS canton, prospectos.latitud AS latitud, '
                                     'prospectos.longitud AS longitud, prospectos.plan_id AS plan_id, '
                                     'prospectos.origen AS origen, prospectos.estado AS estado, '
                                     'prospectos.motivo_perdida AS motivo_perdida, prospectos.vendedor_id AS '
                                     'vendedor_id, prospectos.cobertura AS cobertura, prospectos.nap_id AS '
                                     'nap_id, prospectos.distancia_nodo_m AS distancia_nodo_m, '
                                     'prospectos.proxima_accion AS proxima_accion, prospectos.instalacion_id '
                                     'AS instalacion_id, prospectos.cliente_id AS cliente_id, '
                                     'prospectos.notas AS notas, prospectos.creado_por AS creado_por, '
                                     'prospectos.creado_en AS creado_en, prospectos.actualizado_en AS '
                                     'actualizado_en, prospectos.archivado_en AS archivado_en, '
                                     'prospectos.ganado_en AS ganado_en, prospectos.promocion_id AS '
                                     'promocion_id, prospectos.tipo_operacion AS tipo_operacion FROM '
                                     'prospectos AS prospectos WHERE NOT RLS_ACTIVA() OR (((SELECT '
                                     "COALESCE((SELECT PG_JSON_TIENE(usuarios_sistema.permisos, '*') OR "
                                     "PG_JSON_TIENE(usuarios_sistema.permisos, 'clientes.cartera') AS _col_0 "
                                     'FROM usuarios_sistema AS usuarios_sistema WHERE '
                                     'usuarios_sistema.auth_id = AUTH_UID() AND usuarios_sistema.activo '
                                     'LIMIT 1), TRUE /* Sin legajo no se bloquea a nadie: es una instalación '
                                     'que todavía no */ /* corrió la migración 66, y cerrarle el paso la '
                                     'dejaría inutilizable de */ /* golpe. El frente se comporta igual por '
                                     'la misma razón. */) AS _col_0) OR (prospectos.archivado_en IS NULL AND '
                                     '((SELECT COALESCE((SELECT PG_JSON_TIENE(usuarios_sistema.permisos, '
                                     "'*') OR PG_JSON_TIENE(usuarios_sistema.permisos, 'ventas.equipo') AS "
                                     '_col_0 FROM usuarios_sistema AS usuarios_sistema WHERE '
                                     'usuarios_sistema.auth_id = AUTH_UID() AND usuarios_sistema.activo '
                                     'LIMIT 1), TRUE /* Sin legajo se permite, igual que el resto de los '
                                     'ayudantes: una */ /* instalación sin la migración 66 no puede quedarse '
                                     'sin módulo comercial. */) AS _col_0) OR prospectos.vendedor_id = '
                                     '(SELECT usuarios_sistema.id AS id FROM usuarios_sistema AS '
                                     'usuarios_sistema WHERE usuarios_sistema.auth_id = AUTH_UID() AND '
                                     'usuarios_sistema.activo LIMIT 1) OR prospectos.creado_por = (SELECT '
                                     'usuarios_sistema.id AS id FROM usuarios_sistema AS usuarios_sistema '
                                     'WHERE usuarios_sistema.auth_id = AUTH_UID() AND '
                                     'usuarios_sistema.activo LIMIT 1)))) OR ((SELECT COALESCE((SELECT '
                                     "PG_JSON_TIENE(usuarios_sistema.permisos, '*') OR "
                                     "PG_JSON_TIENE(usuarios_sistema.permisos, 'clientes.cartera') AS _col_0 "
                                     'FROM usuarios_sistema AS usuarios_sistema WHERE '
                                     'usuarios_sistema.auth_id = AUTH_UID() AND usuarios_sistema.activo '
                                     'LIMIT 1), TRUE /* Sin legajo no se bloquea a nadie: es una instalación '
                                     'que todavía no */ /* corrió la migración 66, y cerrarle el paso la '
                                     'dejaría inutilizable de */ /* golpe. El frente se comporta igual por '
                                     'la misma razón. */) AS _col_0) OR (prospectos.archivado_en IS NULL AND '
                                     '((SELECT COALESCE((SELECT PG_JSON_TIENE(usuarios_sistema.permisos, '
                                     "'*') OR PG_JSON_TIENE(usuarios_sistema.permisos, 'ventas.equipo') AS "
                                     '_col_0 FROM usuarios_sistema AS usuarios_sistema WHERE '
                                     'usuarios_sistema.auth_id = AUTH_UID() AND usuarios_sistema.activo '
                                     'LIMIT 1), TRUE /* Sin legajo se permite, igual que el resto de los '
                                     'ayudantes: una */ /* instalación sin la migración 66 no puede quedarse '
                                     'sin módulo comercial. */) AS _col_0) OR prospectos.vendedor_id = '
                                     '(SELECT usuarios_sistema.id AS id FROM usuarios_sistema AS '
                                     'usuarios_sistema WHERE usuarios_sistema.auth_id = AUTH_UID() AND '
                                     'usuarios_sistema.activo LIMIT 1) OR prospectos.creado_por = (SELECT '
                                     'usuarios_sistema.id AS id FROM usuarios_sistema AS usuarios_sistema '
                                     'WHERE usuarios_sistema.auth_id = AUTH_UID() AND '
                                     'usuarios_sistema.activo LIMIT 1)))))) AS prospectos))',
                           'select': '(prospecto_actividades.prospecto_id IN (SELECT prospectos.id AS id '
                                     'FROM (SELECT prospectos.id AS id, PG_DESCIFRAR(prospectos.nombre) AS '
                                     'nombre, PG_DESCIFRAR(prospectos.identificacion) AS identificacion, '
                                     'PG_DESCIFRAR(prospectos.telefono) AS telefono, '
                                     'PG_DESCIFRAR(prospectos.telefono_whatsapp) AS telefono_whatsapp, '
                                     'PG_DESCIFRAR(prospectos.email) AS email, '
                                     'PG_DESCIFRAR(prospectos.direccion) AS direccion, '
                                     'PG_DESCIFRAR(prospectos.referencia) AS referencia, prospectos.sector '
                                     'AS sector, prospectos.canton AS canton, prospectos.latitud AS latitud, '
                                     'prospectos.longitud AS longitud, prospectos.plan_id AS plan_id, '
                                     'prospectos.origen AS origen, prospectos.estado AS estado, '
                                     'prospectos.motivo_perdida AS motivo_perdida, prospectos.vendedor_id AS '
                                     'vendedor_id, prospectos.cobertura AS cobertura, prospectos.nap_id AS '
                                     'nap_id, prospectos.distancia_nodo_m AS distancia_nodo_m, '
                                     'prospectos.proxima_accion AS proxima_accion, prospectos.instalacion_id '
                                     'AS instalacion_id, prospectos.cliente_id AS cliente_id, '
                                     'prospectos.notas AS notas, prospectos.creado_por AS creado_por, '
                                     'prospectos.creado_en AS creado_en, prospectos.actualizado_en AS '
                                     'actualizado_en, prospectos.archivado_en AS archivado_en, '
                                     'prospectos.ganado_en AS ganado_en, prospectos.promocion_id AS '
                                     'promocion_id, prospectos.tipo_operacion AS tipo_operacion FROM '
                                     'prospectos AS prospectos WHERE NOT RLS_ACTIVA() OR (((SELECT '
                                     "COALESCE((SELECT PG_JSON_TIENE(usuarios_sistema.permisos, '*') OR "
                                     "PG_JSON_TIENE(usuarios_sistema.permisos, 'clientes.cartera') AS _col_0 "
                                     'FROM usuarios_sistema AS usuarios_sistema WHERE '
                                     'usuarios_sistema.auth_id = AUTH_UID() AND usuarios_sistema.activo '
                                     'LIMIT 1), TRUE /* Sin legajo no se bloquea a nadie: es una instalación '
                                     'que todavía no */ /* corrió la migración 66, y cerrarle el paso la '
                                     'dejaría inutilizable de */ /* golpe. El frente se comporta igual por '
                                     'la misma razón. */) AS _col_0) OR (prospectos.archivado_en IS NULL AND '
                                     '((SELECT COALESCE((SELECT PG_JSON_TIENE(usuarios_sistema.permisos, '
                                     "'*') OR PG_JSON_TIENE(usuarios_sistema.permisos, 'ventas.equipo') AS "
                                     '_col_0 FROM usuarios_sistema AS usuarios_sistema WHERE '
                                     'usuarios_sistema.auth_id = AUTH_UID() AND usuarios_sistema.activo '
                                     'LIMIT 1), TRUE /* Sin legajo se permite, igual que el resto de los '
                                     'ayudantes: una */ /* instalación sin la migración 66 no puede quedarse '
                                     'sin módulo comercial. */) AS _col_0) OR prospectos.vendedor_id = '
                                     '(SELECT usuarios_sistema.id AS id FROM usuarios_sistema AS '
                                     'usuarios_sistema WHERE usuarios_sistema.auth_id = AUTH_UID() AND '
                                     'usuarios_sistema.activo LIMIT 1) OR prospectos.creado_por = (SELECT '
                                     'usuarios_sistema.id AS id FROM usuarios_sistema AS usuarios_sistema '
                                     'WHERE usuarios_sistema.auth_id = AUTH_UID() AND '
                                     'usuarios_sistema.activo LIMIT 1)))) OR ((SELECT COALESCE((SELECT '
                                     "PG_JSON_TIENE(usuarios_sistema.permisos, '*') OR "
                                     "PG_JSON_TIENE(usuarios_sistema.permisos, 'clientes.cartera') AS _col_0 "
                                     'FROM usuarios_sistema AS usuarios_sistema WHERE '
                                     'usuarios_sistema.auth_id = AUTH_UID() AND usuarios_sistema.activo '
                                     'LIMIT 1), TRUE /* Sin legajo no se bloquea a nadie: es una instalación '
                                     'que todavía no */ /* corrió la migración 66, y cerrarle el paso la '
                                     'dejaría inutilizable de */ /* golpe. El frente se comporta igual por '
                                     'la misma razón. */) AS _col_0) OR (prospectos.archivado_en IS NULL AND '
                                     '((SELECT COALESCE((SELECT PG_JSON_TIENE(usuarios_sistema.permisos, '
                                     "'*') OR PG_JSON_TIENE(usuarios_sistema.permisos, 'ventas.equipo') AS "
                                     '_col_0 FROM usuarios_sistema AS usuarios_sistema WHERE '
                                     'usuarios_sistema.auth_id = AUTH_UID() AND usuarios_sistema.activo '
                                     'LIMIT 1), TRUE /* Sin legajo se permite, igual que el resto de los '
                                     'ayudantes: una */ /* instalación sin la migración 66 no puede quedarse '
                                     'sin módulo comercial. */) AS _col_0) OR prospectos.vendedor_id = '
                                     '(SELECT usuarios_sistema.id AS id FROM usuarios_sistema AS '
                                     'usuarios_sistema WHERE usuarios_sistema.auth_id = AUTH_UID() AND '
                                     'usuarios_sistema.activo LIMIT 1) OR prospectos.creado_por = (SELECT '
                                     'usuarios_sistema.id AS id FROM usuarios_sistema AS usuarios_sistema '
                                     'WHERE usuarios_sistema.auth_id = AUTH_UID() AND '
                                     'usuarios_sistema.activo LIMIT 1)))))) AS prospectos))',
                           'update': '(prospecto_actividades.prospecto_id IN (SELECT prospectos.id AS id '
                                     'FROM (SELECT prospectos.id AS id, PG_DESCIFRAR(prospectos.nombre) AS '
                                     'nombre, PG_DESCIFRAR(prospectos.identificacion) AS identificacion, '
                                     'PG_DESCIFRAR(prospectos.telefono) AS telefono, '
                                     'PG_DESCIFRAR(prospectos.telefono_whatsapp) AS telefono_whatsapp, '
                                     'PG_DESCIFRAR(prospectos.email) AS email, '
                                     'PG_DESCIFRAR(prospectos.direccion) AS direccion, '
                                     'PG_DESCIFRAR(prospectos.referencia) AS referencia, prospectos.sector '
                                     'AS sector, prospectos.canton AS canton, prospectos.latitud AS latitud, '
                                     'prospectos.longitud AS longitud, prospectos.plan_id AS plan_id, '
                                     'prospectos.origen AS origen, prospectos.estado AS estado, '
                                     'prospectos.motivo_perdida AS motivo_perdida, prospectos.vendedor_id AS '
                                     'vendedor_id, prospectos.cobertura AS cobertura, prospectos.nap_id AS '
                                     'nap_id, prospectos.distancia_nodo_m AS distancia_nodo_m, '
                                     'prospectos.proxima_accion AS proxima_accion, prospectos.instalacion_id '
                                     'AS instalacion_id, prospectos.cliente_id AS cliente_id, '
                                     'prospectos.notas AS notas, prospectos.creado_por AS creado_por, '
                                     'prospectos.creado_en AS creado_en, prospectos.actualizado_en AS '
                                     'actualizado_en, prospectos.archivado_en AS archivado_en, '
                                     'prospectos.ganado_en AS ganado_en, prospectos.promocion_id AS '
                                     'promocion_id, prospectos.tipo_operacion AS tipo_operacion FROM '
                                     'prospectos AS prospectos WHERE NOT RLS_ACTIVA() OR (((SELECT '
                                     "COALESCE((SELECT PG_JSON_TIENE(usuarios_sistema.permisos, '*') OR "
                                     "PG_JSON_TIENE(usuarios_sistema.permisos, 'clientes.cartera') AS _col_0 "
                                     'FROM usuarios_sistema AS usuarios_sistema WHERE '
                                     'usuarios_sistema.auth_id = AUTH_UID() AND usuarios_sistema.activo '
                                     'LIMIT 1), TRUE /* Sin legajo no se bloquea a nadie: es una instalación '
                                     'que todavía no */ /* corrió la migración 66, y cerrarle el paso la '
                                     'dejaría inutilizable de */ /* golpe. El frente se comporta igual por '
                                     'la misma razón. */) AS _col_0) OR (prospectos.archivado_en IS NULL AND '
                                     '((SELECT COALESCE((SELECT PG_JSON_TIENE(usuarios_sistema.permisos, '
                                     "'*') OR PG_JSON_TIENE(usuarios_sistema.permisos, 'ventas.equipo') AS "
                                     '_col_0 FROM usuarios_sistema AS usuarios_sistema WHERE '
                                     'usuarios_sistema.auth_id = AUTH_UID() AND usuarios_sistema.activo '
                                     'LIMIT 1), TRUE /* Sin legajo se permite, igual que el resto de los '
                                     'ayudantes: una */ /* instalación sin la migración 66 no puede quedarse '
                                     'sin módulo comercial. */) AS _col_0) OR prospectos.vendedor_id = '
                                     '(SELECT usuarios_sistema.id AS id FROM usuarios_sistema AS '
                                     'usuarios_sistema WHERE usuarios_sistema.auth_id = AUTH_UID() AND '
                                     'usuarios_sistema.activo LIMIT 1) OR prospectos.creado_por = (SELECT '
                                     'usuarios_sistema.id AS id FROM usuarios_sistema AS usuarios_sistema '
                                     'WHERE usuarios_sistema.auth_id = AUTH_UID() AND '
                                     'usuarios_sistema.activo LIMIT 1)))) OR ((SELECT COALESCE((SELECT '
                                     "PG_JSON_TIENE(usuarios_sistema.permisos, '*') OR "
                                     "PG_JSON_TIENE(usuarios_sistema.permisos, 'clientes.cartera') AS _col_0 "
                                     'FROM usuarios_sistema AS usuarios_sistema WHERE '
                                     'usuarios_sistema.auth_id = AUTH_UID() AND usuarios_sistema.activo '
                                     'LIMIT 1), TRUE /* Sin legajo no se bloquea a nadie: es una instalación '
                                     'que todavía no */ /* corrió la migración 66, y cerrarle el paso la '
                                     'dejaría inutilizable de */ /* golpe. El frente se comporta igual por '
                                     'la misma razón. */) AS _col_0) OR (prospectos.archivado_en IS NULL AND '
                                     '((SELECT COALESCE((SELECT PG_JSON_TIENE(usuarios_sistema.permisos, '
                                     "'*') OR PG_JSON_TIENE(usuarios_sistema.permisos, 'ventas.equipo') AS "
                                     '_col_0 FROM usuarios_sistema AS usuarios_sistema WHERE '
                                     'usuarios_sistema.auth_id = AUTH_UID() AND usuarios_sistema.activo '
                                     'LIMIT 1), TRUE /* Sin legajo se permite, igual que el resto de los '
                                     'ayudantes: una */ /* instalación sin la migración 66 no puede quedarse '
                                     'sin módulo comercial. */) AS _col_0) OR prospectos.vendedor_id = '
                                     '(SELECT usuarios_sistema.id AS id FROM usuarios_sistema AS '
                                     'usuarios_sistema WHERE usuarios_sistema.auth_id = AUTH_UID() AND '
                                     'usuarios_sistema.activo LIMIT 1) OR prospectos.creado_por = (SELECT '
                                     'usuarios_sistema.id AS id FROM usuarios_sistema AS usuarios_sistema '
                                     'WHERE usuarios_sistema.auth_id = AUTH_UID() AND '
                                     'usuarios_sistema.activo LIMIT 1)))))) AS prospectos))',
                           'update_check': '(prospecto_actividades.prospecto_id IN (SELECT prospectos.id AS '
                                           'id FROM (SELECT prospectos.id AS id, '
                                           'PG_DESCIFRAR(prospectos.nombre) AS nombre, '
                                           'PG_DESCIFRAR(prospectos.identificacion) AS identificacion, '
                                           'PG_DESCIFRAR(prospectos.telefono) AS telefono, '
                                           'PG_DESCIFRAR(prospectos.telefono_whatsapp) AS telefono_whatsapp, '
                                           'PG_DESCIFRAR(prospectos.email) AS email, '
                                           'PG_DESCIFRAR(prospectos.direccion) AS direccion, '
                                           'PG_DESCIFRAR(prospectos.referencia) AS referencia, '
                                           'prospectos.sector AS sector, prospectos.canton AS canton, '
                                           'prospectos.latitud AS latitud, prospectos.longitud AS longitud, '
                                           'prospectos.plan_id AS plan_id, prospectos.origen AS origen, '
                                           'prospectos.estado AS estado, prospectos.motivo_perdida AS '
                                           'motivo_perdida, prospectos.vendedor_id AS vendedor_id, '
                                           'prospectos.cobertura AS cobertura, prospectos.nap_id AS nap_id, '
                                           'prospectos.distancia_nodo_m AS distancia_nodo_m, '
                                           'prospectos.proxima_accion AS proxima_accion, '
                                           'prospectos.instalacion_id AS instalacion_id, '
                                           'prospectos.cliente_id AS cliente_id, prospectos.notas AS notas, '
                                           'prospectos.creado_por AS creado_por, prospectos.creado_en AS '
                                           'creado_en, prospectos.actualizado_en AS actualizado_en, '
                                           'prospectos.archivado_en AS archivado_en, prospectos.ganado_en AS '
                                           'ganado_en, prospectos.promocion_id AS promocion_id, '
                                           'prospectos.tipo_operacion AS tipo_operacion FROM prospectos AS '
                                           'prospectos WHERE NOT RLS_ACTIVA() OR (((SELECT COALESCE((SELECT '
                                           "PG_JSON_TIENE(usuarios_sistema.permisos, '*') OR "
                                           "PG_JSON_TIENE(usuarios_sistema.permisos, 'clientes.cartera') AS "
                                           '_col_0 FROM usuarios_sistema AS usuarios_sistema WHERE '
                                           'usuarios_sistema.auth_id = AUTH_UID() AND '
                                           'usuarios_sistema.activo LIMIT 1), TRUE /* Sin legajo no se '
                                           'bloquea a nadie: es una instalación que todavía no */ /* corrió '
                                           'la migración 66, y cerrarle el paso la dejaría inutilizable de '
                                           '*/ /* golpe. El frente se comporta igual por la misma razón. */) '
                                           'AS _col_0) OR (prospectos.archivado_en IS NULL AND ((SELECT '
                                           "COALESCE((SELECT PG_JSON_TIENE(usuarios_sistema.permisos, '*') "
                                           "OR PG_JSON_TIENE(usuarios_sistema.permisos, 'ventas.equipo') AS "
                                           '_col_0 FROM usuarios_sistema AS usuarios_sistema WHERE '
                                           'usuarios_sistema.auth_id = AUTH_UID() AND '
                                           'usuarios_sistema.activo LIMIT 1), TRUE /* Sin legajo se permite, '
                                           'igual que el resto de los ayudantes: una */ /* instalación sin '
                                           'la migración 66 no puede quedarse sin módulo comercial. */) AS '
                                           '_col_0) OR prospectos.vendedor_id = (SELECT usuarios_sistema.id '
                                           'AS id FROM usuarios_sistema AS usuarios_sistema WHERE '
                                           'usuarios_sistema.auth_id = AUTH_UID() AND '
                                           'usuarios_sistema.activo LIMIT 1) OR prospectos.creado_por = '
                                           '(SELECT usuarios_sistema.id AS id FROM usuarios_sistema AS '
                                           'usuarios_sistema WHERE usuarios_sistema.auth_id = AUTH_UID() AND '
                                           'usuarios_sistema.activo LIMIT 1)))) OR ((SELECT COALESCE((SELECT '
                                           "PG_JSON_TIENE(usuarios_sistema.permisos, '*') OR "
                                           "PG_JSON_TIENE(usuarios_sistema.permisos, 'clientes.cartera') AS "
                                           '_col_0 FROM usuarios_sistema AS usuarios_sistema WHERE '
                                           'usuarios_sistema.auth_id = AUTH_UID() AND '
                                           'usuarios_sistema.activo LIMIT 1), TRUE /* Sin legajo no se '
                                           'bloquea a nadie: es una instalación que todavía no */ /* corrió '
                                           'la migración 66, y cerrarle el paso la dejaría inutilizable de '
                                           '*/ /* golpe. El frente se comporta igual por la misma razón. */) '
                                           'AS _col_0) OR (prospectos.archivado_en IS NULL AND ((SELECT '
                                           "COALESCE((SELECT PG_JSON_TIENE(usuarios_sistema.permisos, '*') "
                                           "OR PG_JSON_TIENE(usuarios_sistema.permisos, 'ventas.equipo') AS "
                                           '_col_0 FROM usuarios_sistema AS usuarios_sistema WHERE '
                                           'usuarios_sistema.auth_id = AUTH_UID() AND '
                                           'usuarios_sistema.activo LIMIT 1), TRUE /* Sin legajo se permite, '
                                           'igual que el resto de los ayudantes: una */ /* instalación sin '
                                           'la migración 66 no puede quedarse sin módulo comercial. */) AS '
                                           '_col_0) OR prospectos.vendedor_id = (SELECT usuarios_sistema.id '
                                           'AS id FROM usuarios_sistema AS usuarios_sistema WHERE '
                                           'usuarios_sistema.auth_id = AUTH_UID() AND '
                                           'usuarios_sistema.activo LIMIT 1) OR prospectos.creado_por = '
                                           '(SELECT usuarios_sistema.id AS id FROM usuarios_sistema AS '
                                           'usuarios_sistema WHERE usuarios_sistema.auth_id = AUTH_UID() AND '
                                           'usuarios_sistema.activo LIMIT 1)))))) AS prospectos))'},
 'prospectos': {'delete': "((SELECT COALESCE((SELECT PG_JSON_TIENE(usuarios_sistema.permisos, '*') OR "
                          "PG_JSON_TIENE(usuarios_sistema.permisos, 'clientes.cartera') AS _col_0 FROM "
                          'usuarios_sistema AS usuarios_sistema WHERE usuarios_sistema.auth_id = AUTH_UID() '
                          'AND usuarios_sistema.activo LIMIT 1), TRUE /* Sin legajo no se bloquea a nadie: '
                          'es una instalación que todavía no */ /* corrió la migración 66, y cerrarle el '
                          'paso la dejaría inutilizable de */ /* golpe. El frente se comporta igual por la '
                          'misma razón. */) AS _col_0) OR (prospectos.archivado_en IS NULL AND ((SELECT '
                          "COALESCE((SELECT PG_JSON_TIENE(usuarios_sistema.permisos, '*') OR "
                          "PG_JSON_TIENE(usuarios_sistema.permisos, 'ventas.equipo') AS _col_0 FROM "
                          'usuarios_sistema AS usuarios_sistema WHERE usuarios_sistema.auth_id = AUTH_UID() '
                          'AND usuarios_sistema.activo LIMIT 1), TRUE /* Sin legajo se permite, igual que el '
                          'resto de los ayudantes: una */ /* instalación sin la migración 66 no puede '
                          'quedarse sin módulo comercial. */) AS _col_0) OR prospectos.vendedor_id = (SELECT '
                          'usuarios_sistema.id AS id FROM usuarios_sistema AS usuarios_sistema WHERE '
                          'usuarios_sistema.auth_id = AUTH_UID() AND usuarios_sistema.activo LIMIT 1) OR '
                          'prospectos.creado_por = (SELECT usuarios_sistema.id AS id FROM usuarios_sistema '
                          'AS usuarios_sistema WHERE usuarios_sistema.auth_id = AUTH_UID() AND '
                          'usuarios_sistema.activo LIMIT 1))))',
                'insert': "((SELECT COALESCE((SELECT PG_JSON_TIENE(usuarios_sistema.permisos, '*') OR "
                          "PG_JSON_TIENE(usuarios_sistema.permisos, 'clientes.cartera') AS _col_0 FROM "
                          'usuarios_sistema AS usuarios_sistema WHERE usuarios_sistema.auth_id = AUTH_UID() '
                          'AND usuarios_sistema.activo LIMIT 1), TRUE /* Sin legajo no se bloquea a nadie: '
                          'es una instalación que todavía no */ /* corrió la migración 66, y cerrarle el '
                          'paso la dejaría inutilizable de */ /* golpe. El frente se comporta igual por la '
                          'misma razón. */) AS _col_0) OR (prospectos.archivado_en IS NULL AND ((SELECT '
                          "COALESCE((SELECT PG_JSON_TIENE(usuarios_sistema.permisos, '*') OR "
                          "PG_JSON_TIENE(usuarios_sistema.permisos, 'ventas.equipo') AS _col_0 FROM "
                          'usuarios_sistema AS usuarios_sistema WHERE usuarios_sistema.auth_id = AUTH_UID() '
                          'AND usuarios_sistema.activo LIMIT 1), TRUE /* Sin legajo se permite, igual que el '
                          'resto de los ayudantes: una */ /* instalación sin la migración 66 no puede '
                          'quedarse sin módulo comercial. */) AS _col_0) OR prospectos.vendedor_id = (SELECT '
                          'usuarios_sistema.id AS id FROM usuarios_sistema AS usuarios_sistema WHERE '
                          'usuarios_sistema.auth_id = AUTH_UID() AND usuarios_sistema.activo LIMIT 1) OR '
                          'prospectos.creado_por = (SELECT usuarios_sistema.id AS id FROM usuarios_sistema '
                          'AS usuarios_sistema WHERE usuarios_sistema.auth_id = AUTH_UID() AND '
                          'usuarios_sistema.activo LIMIT 1))))',
                'select': "((SELECT COALESCE((SELECT PG_JSON_TIENE(usuarios_sistema.permisos, '*') OR "
                          "PG_JSON_TIENE(usuarios_sistema.permisos, 'clientes.cartera') AS _col_0 FROM "
                          'usuarios_sistema AS usuarios_sistema WHERE usuarios_sistema.auth_id = AUTH_UID() '
                          'AND usuarios_sistema.activo LIMIT 1), TRUE /* Sin legajo no se bloquea a nadie: '
                          'es una instalación que todavía no */ /* corrió la migración 66, y cerrarle el '
                          'paso la dejaría inutilizable de */ /* golpe. El frente se comporta igual por la '
                          'misma razón. */) AS _col_0) OR (prospectos.archivado_en IS NULL AND ((SELECT '
                          "COALESCE((SELECT PG_JSON_TIENE(usuarios_sistema.permisos, '*') OR "
                          "PG_JSON_TIENE(usuarios_sistema.permisos, 'ventas.equipo') AS _col_0 FROM "
                          'usuarios_sistema AS usuarios_sistema WHERE usuarios_sistema.auth_id = AUTH_UID() '
                          'AND usuarios_sistema.activo LIMIT 1), TRUE /* Sin legajo se permite, igual que el '
                          'resto de los ayudantes: una */ /* instalación sin la migración 66 no puede '
                          'quedarse sin módulo comercial. */) AS _col_0) OR prospectos.vendedor_id = (SELECT '
                          'usuarios_sistema.id AS id FROM usuarios_sistema AS usuarios_sistema WHERE '
                          'usuarios_sistema.auth_id = AUTH_UID() AND usuarios_sistema.activo LIMIT 1) OR '
                          'prospectos.creado_por = (SELECT usuarios_sistema.id AS id FROM usuarios_sistema '
                          'AS usuarios_sistema WHERE usuarios_sistema.auth_id = AUTH_UID() AND '
                          'usuarios_sistema.activo LIMIT 1)))) OR ((SELECT COALESCE((SELECT '
                          "PG_JSON_TIENE(usuarios_sistema.permisos, '*') OR "
                          "PG_JSON_TIENE(usuarios_sistema.permisos, 'clientes.cartera') AS _col_0 FROM "
                          'usuarios_sistema AS usuarios_sistema WHERE usuarios_sistema.auth_id = AUTH_UID() '
                          'AND usuarios_sistema.activo LIMIT 1), TRUE /* Sin legajo no se bloquea a nadie: '
                          'es una instalación que todavía no */ /* corrió la migración 66, y cerrarle el '
                          'paso la dejaría inutilizable de */ /* golpe. El frente se comporta igual por la '
                          'misma razón. */) AS _col_0) OR (prospectos.archivado_en IS NULL AND ((SELECT '
                          "COALESCE((SELECT PG_JSON_TIENE(usuarios_sistema.permisos, '*') OR "
                          "PG_JSON_TIENE(usuarios_sistema.permisos, 'ventas.equipo') AS _col_0 FROM "
                          'usuarios_sistema AS usuarios_sistema WHERE usuarios_sistema.auth_id = AUTH_UID() '
                          'AND usuarios_sistema.activo LIMIT 1), TRUE /* Sin legajo se permite, igual que el '
                          'resto de los ayudantes: una */ /* instalación sin la migración 66 no puede '
                          'quedarse sin módulo comercial. */) AS _col_0) OR prospectos.vendedor_id = (SELECT '
                          'usuarios_sistema.id AS id FROM usuarios_sistema AS usuarios_sistema WHERE '
                          'usuarios_sistema.auth_id = AUTH_UID() AND usuarios_sistema.activo LIMIT 1) OR '
                          'prospectos.creado_por = (SELECT usuarios_sistema.id AS id FROM usuarios_sistema '
                          'AS usuarios_sistema WHERE usuarios_sistema.auth_id = AUTH_UID() AND '
                          'usuarios_sistema.activo LIMIT 1))))',
                'update': "((SELECT COALESCE((SELECT PG_JSON_TIENE(usuarios_sistema.permisos, '*') OR "
                          "PG_JSON_TIENE(usuarios_sistema.permisos, 'clientes.cartera') AS _col_0 FROM "
                          'usuarios_sistema AS usuarios_sistema WHERE usuarios_sistema.auth_id = AUTH_UID() '
                          'AND usuarios_sistema.activo LIMIT 1), TRUE /* Sin legajo no se bloquea a nadie: '
                          'es una instalación que todavía no */ /* corrió la migración 66, y cerrarle el '
                          'paso la dejaría inutilizable de */ /* golpe. El frente se comporta igual por la '
                          'misma razón. */) AS _col_0) OR (prospectos.archivado_en IS NULL AND ((SELECT '
                          "COALESCE((SELECT PG_JSON_TIENE(usuarios_sistema.permisos, '*') OR "
                          "PG_JSON_TIENE(usuarios_sistema.permisos, 'ventas.equipo') AS _col_0 FROM "
                          'usuarios_sistema AS usuarios_sistema WHERE usuarios_sistema.auth_id = AUTH_UID() '
                          'AND usuarios_sistema.activo LIMIT 1), TRUE /* Sin legajo se permite, igual que el '
                          'resto de los ayudantes: una */ /* instalación sin la migración 66 no puede '
                          'quedarse sin módulo comercial. */) AS _col_0) OR prospectos.vendedor_id = (SELECT '
                          'usuarios_sistema.id AS id FROM usuarios_sistema AS usuarios_sistema WHERE '
                          'usuarios_sistema.auth_id = AUTH_UID() AND usuarios_sistema.activo LIMIT 1) OR '
                          'prospectos.creado_por = (SELECT usuarios_sistema.id AS id FROM usuarios_sistema '
                          'AS usuarios_sistema WHERE usuarios_sistema.auth_id = AUTH_UID() AND '
                          'usuarios_sistema.activo LIMIT 1))))',
                'update_check': "((SELECT COALESCE((SELECT PG_JSON_TIENE(usuarios_sistema.permisos, '*') OR "
                                "PG_JSON_TIENE(usuarios_sistema.permisos, 'clientes.cartera') AS _col_0 FROM "
                                'usuarios_sistema AS usuarios_sistema WHERE usuarios_sistema.auth_id = '
                                'AUTH_UID() AND usuarios_sistema.activo LIMIT 1), TRUE /* Sin legajo no se '
                                'bloquea a nadie: es una instalación que todavía no */ /* corrió la '
                                'migración 66, y cerrarle el paso la dejaría inutilizable de */ /* golpe. El '
                                'frente se comporta igual por la misma razón. */) AS _col_0) OR '
                                '(prospectos.archivado_en IS NULL AND ((SELECT COALESCE((SELECT '
                                "PG_JSON_TIENE(usuarios_sistema.permisos, '*') OR "
                                "PG_JSON_TIENE(usuarios_sistema.permisos, 'ventas.equipo') AS _col_0 FROM "
                                'usuarios_sistema AS usuarios_sistema WHERE usuarios_sistema.auth_id = '
                                'AUTH_UID() AND usuarios_sistema.activo LIMIT 1), TRUE /* Sin legajo se '
                                'permite, igual que el resto de los ayudantes: una */ /* instalación sin la '
                                'migración 66 no puede quedarse sin módulo comercial. */) AS _col_0) OR '
                                'prospectos.vendedor_id = (SELECT usuarios_sistema.id AS id FROM '
                                'usuarios_sistema AS usuarios_sistema WHERE usuarios_sistema.auth_id = '
                                'AUTH_UID() AND usuarios_sistema.activo LIMIT 1) OR prospectos.creado_por = '
                                '(SELECT usuarios_sistema.id AS id FROM usuarios_sistema AS usuarios_sistema '
                                'WHERE usuarios_sistema.auth_id = AUTH_UID() AND usuarios_sistema.activo '
                                'LIMIT 1))))'},
 'proveedores': {'delete': None, 'insert': None, 'select': None, 'update': None, 'update_check': None},
 'puertos_pon': {'delete': None, 'insert': None, 'select': None, 'update': None, 'update_check': None},
 'puntos_red': {'delete': None, 'insert': None, 'select': None, 'update': None, 'update_check': None},
 'reactivaciones': {'delete': '(FALSE)',
                    'insert': '(FALSE)',
                    'select': "((SELECT COALESCE((SELECT PG_JSON_TIENE(usuarios_sistema.permisos, '*') OR "
                              "PG_JSON_TIENE(usuarios_sistema.permisos, 'comisiones.ver_todas') AS _col_0 "
                              'FROM usuarios_sistema AS usuarios_sistema WHERE usuarios_sistema.auth_id = '
                              'AUTH_UID() AND usuarios_sistema.activo LIMIT 1), TRUE) AS _col_0) OR '
                              'reactivaciones.vendedor_id = (SELECT usuarios_sistema.id AS id FROM '
                              'usuarios_sistema AS usuarios_sistema WHERE usuarios_sistema.auth_id = '
                              'AUTH_UID() AND usuarios_sistema.activo LIMIT 1)) OR (FALSE)',
                    'update': '(FALSE)',
                    'update_check': '(FALSE)'},
 'reconexiones_pendientes': {'delete': None,
                             'insert': None,
                             'select': None,
                             'update': None,
                             'update_check': None},
 'reemplazos_equipo': {'delete': "((SELECT COALESCE((SELECT PG_JSON_TIENE(usuarios_sistema.permisos, '*') OR "
                                 "PG_JSON_TIENE(usuarios_sistema.permisos, 'clientes.cartera') AS _col_0 "
                                 'FROM usuarios_sistema AS usuarios_sistema WHERE usuarios_sistema.auth_id = '
                                 'AUTH_UID() AND usuarios_sistema.activo LIMIT 1), TRUE /* Sin legajo no se '
                                 'bloquea a nadie: es una instalación que todavía no */ /* corrió la '
                                 'migración 66, y cerrarle el paso la dejaría inutilizable de */ /* golpe. '
                                 'El frente se comporta igual por la misma razón. */) AS _col_0))',
                       'insert': "((SELECT COALESCE((SELECT PG_JSON_TIENE(usuarios_sistema.permisos, '*') OR "
                                 "PG_JSON_TIENE(usuarios_sistema.permisos, 'clientes.cartera') AS _col_0 "
                                 'FROM usuarios_sistema AS usuarios_sistema WHERE usuarios_sistema.auth_id = '
                                 'AUTH_UID() AND usuarios_sistema.activo LIMIT 1), TRUE /* Sin legajo no se '
                                 'bloquea a nadie: es una instalación que todavía no */ /* corrió la '
                                 'migración 66, y cerrarle el paso la dejaría inutilizable de */ /* golpe. '
                                 'El frente se comporta igual por la misma razón. */) AS _col_0))',
                       'select': "((SELECT COALESCE((SELECT PG_JSON_TIENE(usuarios_sistema.permisos, '*') OR "
                                 "PG_JSON_TIENE(usuarios_sistema.permisos, 'clientes.cartera') AS _col_0 "
                                 'FROM usuarios_sistema AS usuarios_sistema WHERE usuarios_sistema.auth_id = '
                                 'AUTH_UID() AND usuarios_sistema.activo LIMIT 1), TRUE /* Sin legajo no se '
                                 'bloquea a nadie: es una instalación que todavía no */ /* corrió la '
                                 'migración 66, y cerrarle el paso la dejaría inutilizable de */ /* golpe. '
                                 'El frente se comporta igual por la misma razón. */) AS _col_0) OR '
                                 'reemplazos_equipo.tecnico_id = (SELECT usuarios_sistema.tecnico_id AS '
                                 'tecnico_id FROM usuarios_sistema AS usuarios_sistema WHERE '
                                 'usuarios_sistema.auth_id = AUTH_UID() AND usuarios_sistema.activo LIMIT '
                                 '1)) OR ((SELECT COALESCE((SELECT PG_JSON_TIENE(usuarios_sistema.permisos, '
                                 "'*') OR PG_JSON_TIENE(usuarios_sistema.permisos, 'clientes.cartera') AS "
                                 '_col_0 FROM usuarios_sistema AS usuarios_sistema WHERE '
                                 'usuarios_sistema.auth_id = AUTH_UID() AND usuarios_sistema.activo LIMIT '
                                 '1), TRUE /* Sin legajo no se bloquea a nadie: es una instalación que '
                                 'todavía no */ /* corrió la migración 66, y cerrarle el paso la dejaría '
                                 'inutilizable de */ /* golpe. El frente se comporta igual por la misma '
                                 'razón. */) AS _col_0))',
                       'update': "((SELECT COALESCE((SELECT PG_JSON_TIENE(usuarios_sistema.permisos, '*') OR "
                                 "PG_JSON_TIENE(usuarios_sistema.permisos, 'clientes.cartera') AS _col_0 "
                                 'FROM usuarios_sistema AS usuarios_sistema WHERE usuarios_sistema.auth_id = '
                                 'AUTH_UID() AND usuarios_sistema.activo LIMIT 1), TRUE /* Sin legajo no se '
                                 'bloquea a nadie: es una instalación que todavía no */ /* corrió la '
                                 'migración 66, y cerrarle el paso la dejaría inutilizable de */ /* golpe. '
                                 'El frente se comporta igual por la misma razón. */) AS _col_0))',
                       'update_check': '((SELECT COALESCE((SELECT PG_JSON_TIENE(usuarios_sistema.permisos, '
                                       "'*') OR PG_JSON_TIENE(usuarios_sistema.permisos, 'clientes.cartera') "
                                       'AS _col_0 FROM usuarios_sistema AS usuarios_sistema WHERE '
                                       'usuarios_sistema.auth_id = AUTH_UID() AND usuarios_sistema.activo '
                                       'LIMIT 1), TRUE /* Sin legajo no se bloquea a nadie: es una '
                                       'instalación que todavía no */ /* corrió la migración 66, y cerrarle '
                                       'el paso la dejaría inutilizable de */ /* golpe. El frente se '
                                       'comporta igual por la misma razón. */) AS _col_0))'},
 'reparacion_reportes': {'delete': '0',
                         'insert': '0',
                         'select': '((SELECT (SELECT EXISTS(SELECT 1 AS "1" FROM usuarios_sistema AS '
                                   'usuarios_sistema WHERE usuarios_sistema.auth_id = AUTH_UID() AND '
                                   "usuarios_sistema.activo AND usuarios_sistema.rol IN ('super_admin', "
                                   '\'admin\', \'jefe_tecnico\')) AS _col_0) OR EXISTS(SELECT 1 AS "1" FROM '
                                   'reparaciones_red AS r_fn1409 WHERE r_fn1409.id = '
                                   'reparacion_reportes.reparacion_id AND ((NOT r_fn1409.tecnico_id IS NULL '
                                   'AND r_fn1409.tecnico_id = (SELECT usuarios_sistema.tecnico_id AS '
                                   'tecnico_id FROM usuarios_sistema AS usuarios_sistema WHERE '
                                   'usuarios_sistema.auth_id = AUTH_UID() AND usuarios_sistema.activo LIMIT '
                                   '1)) OR (NOT r_fn1409.cuadrilla_id IS NULL AND r_fn1409.cuadrilla_id IN '
                                   '(SELECT (SELECT cuadrilla_miembros.cuadrilla_id AS cuadrilla_id FROM '
                                   'cuadrilla_miembros AS cuadrilla_miembros WHERE '
                                   'cuadrilla_miembros.tecnico_id = (SELECT usuarios_sistema.tecnico_id AS '
                                   'tecnico_id FROM usuarios_sistema AS usuarios_sistema WHERE '
                                   'usuarios_sistema.auth_id = AUTH_UID() AND usuarios_sistema.activo LIMIT '
                                   '1)) AS _col_0)))) AS _col_0))',
                         'update': '0',
                         'update_check': '0'},
 'reparaciones_red': {'delete': '0',
                      'insert': '0',
                      'select': '((SELECT (SELECT EXISTS(SELECT 1 AS "1" FROM usuarios_sistema AS '
                                'usuarios_sistema WHERE usuarios_sistema.auth_id = AUTH_UID() AND '
                                "usuarios_sistema.activo AND usuarios_sistema.rol IN ('super_admin', "
                                '\'admin\', \'jefe_tecnico\')) AS _col_0) OR EXISTS(SELECT 1 AS "1" FROM '
                                'reparaciones_red AS r_fn1414 WHERE r_fn1414.id = r_fn1414.id AND ((NOT '
                                'r_fn1414.tecnico_id IS NULL AND r_fn1414.tecnico_id = (SELECT '
                                'usuarios_sistema.tecnico_id AS tecnico_id FROM usuarios_sistema AS '
                                'usuarios_sistema WHERE usuarios_sistema.auth_id = AUTH_UID() AND '
                                'usuarios_sistema.activo LIMIT 1)) OR (NOT r_fn1414.cuadrilla_id IS NULL AND '
                                'r_fn1414.cuadrilla_id IN (SELECT (SELECT cuadrilla_miembros.cuadrilla_id AS '
                                'cuadrilla_id FROM cuadrilla_miembros AS cuadrilla_miembros WHERE '
                                'cuadrilla_miembros.tecnico_id = (SELECT usuarios_sistema.tecnico_id AS '
                                'tecnico_id FROM usuarios_sistema AS usuarios_sistema WHERE '
                                'usuarios_sistema.auth_id = AUTH_UID() AND usuarios_sistema.activo LIMIT 1)) '
                                'AS _col_0)))) AS _col_0))',
                      'update': '0',
                      'update_check': '0'},
 'retencion_items': {'delete': None, 'insert': None, 'select': None, 'update': None, 'update_check': None},
 'retiro_categorias': {'delete': '0', 'insert': '0', 'select': None, 'update': '0', 'update_check': '0'},
 'retiro_intentos': {'delete': '(FALSE)',
                     'insert': '(FALSE)',
                     'select': '(FALSE) OR ((SELECT COALESCE((SELECT '
                               "PG_JSON_TIENE(usuarios_sistema.permisos, '*') OR "
                               "PG_JSON_TIENE(usuarios_sistema.permisos, 'retiros.gestionar') OR "
                               "PG_JSON_TIENE(usuarios_sistema.permisos, 'inventario.transferir') AS _col_0 "
                               'FROM usuarios_sistema AS usuarios_sistema WHERE usuarios_sistema.auth_id = '
                               'AUTH_UID() AND usuarios_sistema.activo LIMIT 1) /* `inventario.transferir` '
                               'también sirve: es el permiso de quien despacha */ /* material a los '
                               'técnicos, y un equipo que vuelve es material que */ /* entra. Sin esto, toda '
                               'instalación que ya funciona tendría que editar */ /* sus roles antes de '
                               'poder cerrar la primera orden. */, TRUE) AS _col_0) OR EXISTS(SELECT 1 AS '
                               '"1" FROM (SELECT retiros_equipo.id AS id, retiros_equipo.cliente_id AS '
                               'cliente_id, retiros_equipo.vendedor_id AS vendedor_id, '
                               'retiros_equipo.equipo_id AS equipo_id, retiros_equipo.onu_id AS onu_id, '
                               'retiros_equipo.serie AS serie, retiros_equipo.modelo AS modelo, '
                               'retiros_equipo.valor AS valor, retiros_equipo.fecha_instalacion AS '
                               'fecha_instalacion, retiros_equipo.ultimo_pago AS ultimo_pago, '
                               'retiros_equipo.suspendido_en AS suspendido_en, retiros_equipo.meses_sin_pago '
                               'AS meses_sin_pago, retiros_equipo.tecnico_id AS tecnico_id, '
                               'retiros_equipo.intentos AS intentos, retiros_equipo.estado AS estado, '
                               'retiros_equipo.motivo AS motivo, retiros_equipo.observaciones AS '
                               'observaciones, retiros_equipo.evidencia_url AS evidencia_url, '
                               'retiros_equipo.creado_por AS creado_por, retiros_equipo.creado_en AS '
                               'creado_en, retiros_equipo.asignado_en AS asignado_en, '
                               'retiros_equipo.cerrado_por AS cerrado_por, retiros_equipo.cerrado_en AS '
                               'cerrado_en, retiros_equipo.responsable_id AS responsable_id, '
                               'retiros_equipo.agendado_para AS agendado_para, retiros_equipo.agenda_nota AS '
                               'agenda_nota, retiros_equipo.recordado_en AS recordado_en, '
                               'retiros_equipo.firma_b64 AS firma_b64, retiros_equipo.firmante AS firmante, '
                               'retiros_equipo.firmado_en AS firmado_en, retiros_equipo.categoria_cierre AS '
                               'categoria_cierre, retiros_equipo.deuda_aplicada AS deuda_aplicada FROM '
                               'retiros_equipo AS retiros_equipo WHERE NOT RLS_ACTIVA() OR ((FALSE) OR '
                               "((SELECT COALESCE((SELECT PG_JSON_TIENE(usuarios_sistema.permisos, '*') OR "
                               "PG_JSON_TIENE(usuarios_sistema.permisos, 'retiros.gestionar') OR "
                               "PG_JSON_TIENE(usuarios_sistema.permisos, 'inventario.transferir') AS _col_0 "
                               'FROM usuarios_sistema AS usuarios_sistema WHERE usuarios_sistema.auth_id = '
                               'AUTH_UID() AND usuarios_sistema.activo LIMIT 1) /* `inventario.transferir` '
                               'también sirve: es el permiso de quien despacha */ /* material a los '
                               'técnicos, y un equipo que vuelve es material que */ /* entra. Sin esto, toda '
                               'instalación que ya funciona tendría que editar */ /* sus roles antes de '
                               'poder cerrar la primera orden. */, TRUE) AS _col_0) OR '
                               'retiros_equipo.tecnico_id = (SELECT usuarios_sistema.tecnico_id AS '
                               'tecnico_id FROM usuarios_sistema AS usuarios_sistema WHERE '
                               'usuarios_sistema.auth_id = AUTH_UID() AND usuarios_sistema.activo LIMIT 1) '
                               'OR retiros_equipo.responsable_id = (SELECT usuarios_sistema.id AS id FROM '
                               'usuarios_sistema AS usuarios_sistema WHERE usuarios_sistema.auth_id = '
                               'AUTH_UID() AND usuarios_sistema.activo LIMIT 1) OR '
                               'retiros_equipo.vendedor_id = (SELECT usuarios_sistema.id AS id FROM '
                               'usuarios_sistema AS usuarios_sistema WHERE usuarios_sistema.auth_id = '
                               'AUTH_UID() AND usuarios_sistema.activo LIMIT 1)))) AS r WHERE r.id = '
                               'retiro_intentos.retiro_id AND (r.tecnico_id = (SELECT '
                               'usuarios_sistema.tecnico_id AS tecnico_id FROM usuarios_sistema AS '
                               'usuarios_sistema WHERE usuarios_sistema.auth_id = AUTH_UID() AND '
                               'usuarios_sistema.activo LIMIT 1) OR r.responsable_id = (SELECT '
                               'usuarios_sistema.id AS id FROM usuarios_sistema AS usuarios_sistema WHERE '
                               'usuarios_sistema.auth_id = AUTH_UID() AND usuarios_sistema.activo LIMIT 1) '
                               'OR r.vendedor_id = (SELECT usuarios_sistema.id AS id FROM usuarios_sistema '
                               'AS usuarios_sistema WHERE usuarios_sistema.auth_id = AUTH_UID() AND '
                               'usuarios_sistema.activo LIMIT 1))))',
                     'update': '(FALSE)',
                     'update_check': '(FALSE)'},
 'retiros_equipo': {'delete': '(FALSE)',
                    'insert': '(FALSE)',
                    'select': '(FALSE) OR ((SELECT COALESCE((SELECT PG_JSON_TIENE(usuarios_sistema.permisos, '
                              "'*') OR PG_JSON_TIENE(usuarios_sistema.permisos, 'retiros.gestionar') OR "
                              "PG_JSON_TIENE(usuarios_sistema.permisos, 'inventario.transferir') AS _col_0 "
                              'FROM usuarios_sistema AS usuarios_sistema WHERE usuarios_sistema.auth_id = '
                              'AUTH_UID() AND usuarios_sistema.activo LIMIT 1) /* `inventario.transferir` '
                              'también sirve: es el permiso de quien despacha */ /* material a los técnicos, '
                              'y un equipo que vuelve es material que */ /* entra. Sin esto, toda '
                              'instalación que ya funciona tendría que editar */ /* sus roles antes de poder '
                              'cerrar la primera orden. */, TRUE) AS _col_0) OR retiros_equipo.tecnico_id = '
                              '(SELECT usuarios_sistema.tecnico_id AS tecnico_id FROM usuarios_sistema AS '
                              'usuarios_sistema WHERE usuarios_sistema.auth_id = AUTH_UID() AND '
                              'usuarios_sistema.activo LIMIT 1) OR retiros_equipo.responsable_id = (SELECT '
                              'usuarios_sistema.id AS id FROM usuarios_sistema AS usuarios_sistema WHERE '
                              'usuarios_sistema.auth_id = AUTH_UID() AND usuarios_sistema.activo LIMIT 1) OR '
                              'retiros_equipo.vendedor_id = (SELECT usuarios_sistema.id AS id FROM '
                              'usuarios_sistema AS usuarios_sistema WHERE usuarios_sistema.auth_id = '
                              'AUTH_UID() AND usuarios_sistema.activo LIMIT 1))',
                    'update': '(FALSE)',
                    'update_check': '(FALSE)'},
 'routers_mikrotik': {'delete': None, 'insert': None, 'select': None, 'update': None, 'update_check': None},
 'ruta_cambios': {'delete': '0',
                  'insert': '0',
                  'select': '((SELECT (SELECT EXISTS(SELECT 1 AS "1" FROM usuarios_sistema AS '
                            'usuarios_sistema WHERE usuarios_sistema.auth_id = AUTH_UID() AND '
                            "usuarios_sistema.activo AND usuarios_sistema.rol IN ('super_admin', 'admin', "
                            '\'jefe_tecnico\')) AS _col_0) OR EXISTS(SELECT 1 AS "1" FROM usuarios_sistema '
                            'AS usuarios_sistema WHERE usuarios_sistema.auth_id = AUTH_UID() AND '
                            "usuarios_sistema.activo AND (PG_JSON_TIENE(usuarios_sistema.permisos, '*') OR "
                            "PG_JSON_TIENE(usuarios_sistema.permisos, 'soporte.ruta'))) AS _col_0))",
                  'update': '0',
                  'update_check': '0'},
 'salidas_emergencia': {'delete': '0',
                        'insert': '0',
                        'select': "((SELECT COALESCE((SELECT PG_JSON_TIENE(usuarios_sistema.permisos, '*') "
                                  "OR PG_JSON_TIENE(usuarios_sistema.permisos, 'clientes.cartera') AS _col_0 "
                                  'FROM usuarios_sistema AS usuarios_sistema WHERE usuarios_sistema.auth_id '
                                  '= AUTH_UID() AND usuarios_sistema.activo LIMIT 1), TRUE /* Sin legajo no '
                                  'se bloquea a nadie: es una instalación que todavía no */ /* corrió la '
                                  'migración 66, y cerrarle el paso la dejaría inutilizable de */ /* golpe. '
                                  'El frente se comporta igual por la misma razón. */) AS _col_0) OR (SELECT '
                                  "COALESCE((SELECT PG_JSON_TIENE(usuarios_sistema.permisos, '*') OR "
                                  "PG_JSON_TIENE(usuarios_sistema.permisos, 'ventas.equipo') AS _col_0 FROM "
                                  'usuarios_sistema AS usuarios_sistema WHERE usuarios_sistema.auth_id = '
                                  'AUTH_UID() AND usuarios_sistema.activo LIMIT 1), TRUE /* Sin legajo se '
                                  'permite, igual que el resto de los ayudantes: una */ /* instalación sin '
                                  'la migración 66 no puede quedarse sin módulo comercial. */) AS _col_0) OR '
                                  'salidas_emergencia.tecnico_id = (SELECT usuarios_sistema.tecnico_id AS '
                                  'tecnico_id FROM usuarios_sistema AS usuarios_sistema WHERE '
                                  'usuarios_sistema.auth_id = AUTH_UID() AND usuarios_sistema.activo LIMIT '
                                  '1))',
                        'update': '(salidas_emergencia.tecnico_id = (SELECT usuarios_sistema.tecnico_id AS '
                                  'tecnico_id FROM usuarios_sistema AS usuarios_sistema WHERE '
                                  'usuarios_sistema.auth_id = AUTH_UID() AND usuarios_sistema.activo LIMIT '
                                  '1))',
                        'update_check': '(salidas_emergencia.tecnico_id = (SELECT '
                                        'usuarios_sistema.tecnico_id AS tecnico_id FROM usuarios_sistema AS '
                                        'usuarios_sistema WHERE usuarios_sistema.auth_id = AUTH_UID() AND '
                                        'usuarios_sistema.activo LIMIT 1))'},
 'sesiones_conexion': {'delete': None, 'insert': None, 'select': None, 'update': None, 'update_check': None},
 'solicitudes_validacion': {'delete': '(FALSE)',
                            'insert': '(FALSE)',
                            'select': '((SELECT COALESCE((SELECT PG_JSON_TIENE(usuarios_sistema.permisos, '
                                      "'*') OR PG_JSON_TIENE(usuarios_sistema.permisos, "
                                      "'ventas.validacion_sensible') AS _col_0 FROM usuarios_sistema AS "
                                      'usuarios_sistema WHERE usuarios_sistema.auth_id = AUTH_UID() AND '
                                      'usuarios_sistema.activo LIMIT 1), TRUE) AS _col_0)) OR (FALSE)',
                            'update': '(FALSE)',
                            'update_check': '(FALSE)'},
 'sri_config': {'delete': None, 'insert': None, 'select': None, 'update': None, 'update_check': None},
 'sri_secuenciales_libres': {'delete': None,
                             'insert': None,
                             'select': None,
                             'update': None,
                             'update_check': None},
 'sri_sequences': {'delete': None, 'insert': None, 'select': None, 'update': None, 'update_check': None},
 'stock_minimos': {'delete': None, 'insert': None, 'select': None, 'update': None, 'update_check': None},
 'subredes': {'delete': None, 'insert': None, 'select': None, 'update': None, 'update_check': None},
 'tecnicos': {'delete': None, 'insert': None, 'select': None, 'update': None, 'update_check': None},
 'ticket_adjuntos': {'delete': '(ticket_adjuntos.ticket_id IN (SELECT tickets.id AS id FROM (SELECT '
                               'tickets.id AS id, tickets.numero AS numero, tickets.client_id AS client_id, '
                               'PG_DESCIFRAR(tickets.identificacion) AS identificacion, '
                               'PG_DESCIFRAR(tickets.nombre) AS nombre, PG_DESCIFRAR(tickets.telefono) AS '
                               'telefono, PG_DESCIFRAR(tickets.telefono_whatsapp) AS telefono_whatsapp, '
                               'PG_DESCIFRAR(tickets.direccion) AS direccion, '
                               'PG_DESCIFRAR(tickets.referencia) AS referencia, tickets.sector AS sector, '
                               'tickets.canton AS canton, tickets.latitud AS latitud, tickets.longitud AS '
                               'longitud, tickets.tecnologia AS tecnologia, tickets.nap_id AS nap_id, '
                               'tickets.puerto_nap AS puerto_nap, tickets.ont_modelo AS ont_modelo, '
                               'tickets.ont_serie AS ont_serie, tickets.potencia_dbm AS potencia_dbm, '
                               'tickets.torre_id AS torre_id, tickets.cpe_ip AS cpe_ip, tickets.frecuencia '
                               'AS frecuencia, tickets.senal_dbm AS senal_dbm, tickets.antena_modelo AS '
                               'antena_modelo, tickets.tipo_incidencia AS tipo_incidencia, '
                               'tickets.descripcion AS descripcion, tickets.prioridad AS prioridad, '
                               'tickets.fecha_visita AS fecha_visita, tickets.franja AS franja, '
                               'tickets.hora_visita AS hora_visita, tickets.tecnico_id AS tecnico_id, '
                               'tickets.cuadrilla_id AS cuadrilla_id, tickets.estado AS estado, '
                               'tickets.solucion AS solucion, tickets.checklist AS checklist, '
                               'tickets.firma_b64 AS firma_b64, PG_DESCIFRAR(tickets.firmante_nombre) AS '
                               'firmante_nombre, PG_DESCIFRAR(tickets.firmante_cedula) AS firmante_cedula, '
                               'tickets.material_usado AS material_usado, tickets.motivo_cancelacion AS '
                               'motivo_cancelacion, tickets.cerrado_at AS cerrado_at, tickets.cerrado_por AS '
                               'cerrado_por, tickets.created_by AS created_by, tickets.created_at AS '
                               'created_at, tickets.updated_at AS updated_at, tickets.salida_at AS '
                               'salida_at, tickets.llegada_at AS llegada_at, tickets.llegada_lat AS '
                               'llegada_lat, tickets.llegada_lng AS llegada_lng, tickets.llegada_precision_m '
                               'AS llegada_precision_m, PG_DESCIFRAR(tickets.email) AS email, '
                               'tickets.ruta_fecha AS ruta_fecha, tickets.ruta_orden AS ruta_orden, '
                               'tickets.reprogramar_desde AS reprogramar_desde FROM tickets AS tickets WHERE '
                               'NOT RLS_ACTIVA() OR (((SELECT COALESCE((SELECT '
                               "PG_JSON_TIENE(usuarios_sistema.permisos, '*') OR "
                               "PG_JSON_TIENE(usuarios_sistema.permisos, 'clientes.cartera') AS _col_0 FROM "
                               'usuarios_sistema AS usuarios_sistema WHERE usuarios_sistema.auth_id = '
                               'AUTH_UID() AND usuarios_sistema.activo LIMIT 1), TRUE /* Sin legajo no se '
                               'bloquea a nadie: es una instalación que todavía no */ /* corrió la migración '
                               '66, y cerrarle el paso la dejaría inutilizable de */ /* golpe. El frente se '
                               'comporta igual por la misma razón. */) AS _col_0) OR (NOT tickets.tecnico_id '
                               'IS NULL AND tickets.tecnico_id = (SELECT usuarios_sistema.tecnico_id AS '
                               'tecnico_id FROM usuarios_sistema AS usuarios_sistema WHERE '
                               'usuarios_sistema.auth_id = AUTH_UID() AND usuarios_sistema.activo LIMIT 1)) '
                               'OR (NOT tickets.cuadrilla_id IS NULL AND tickets.cuadrilla_id IN (SELECT '
                               '(SELECT cuadrilla_miembros.cuadrilla_id AS cuadrilla_id FROM '
                               'cuadrilla_miembros AS cuadrilla_miembros WHERE cuadrilla_miembros.tecnico_id '
                               '= (SELECT usuarios_sistema.tecnico_id AS tecnico_id FROM usuarios_sistema AS '
                               'usuarios_sistema WHERE usuarios_sistema.auth_id = AUTH_UID() AND '
                               'usuarios_sistema.activo LIMIT 1)) AS _col_0)) OR tickets.client_id IN '
                               '(SELECT cliente_id AS cliente_id FROM (WITH yo /* Solo el técnico y los '
                               'clientes de sus trabajos. */ /* La cobranza SALIÓ de acá a propósito: abría '
                               'la ficha completa cuando lo */ /* que hace falta es un nombre, un teléfono y '
                               'un saldo. Va por */ /* `v_cobros_por_gestionar`, más abajo. */ AS (SELECT '
                               'usuarios_sistema.id AS id, usuarios_sistema.tecnico_id AS tecnico_id FROM '
                               'usuarios_sistema AS usuarios_sistema WHERE usuarios_sistema.auth_id = '
                               'AUTH_UID() AND usuarios_sistema.activo LIMIT 1) SELECT t_fn1462.client_id AS '
                               'cliente_id FROM tickets AS t_fn1462 JOIN yo AS yo ON t_fn1462.tecnico_id = '
                               'yo.tecnico_id WHERE NOT t_fn1462.client_id IS NULL UNION SELECT '
                               'i_fn1462.client_id AS client_id FROM instalaciones AS i_fn1462 JOIN yo AS yo '
                               'ON i_fn1462.tecnico_id = yo.tecnico_id WHERE NOT i_fn1462.client_id IS NULL) '
                               'AS _0)))) AS tickets))',
                     'insert': '(ticket_adjuntos.ticket_id IN (SELECT tickets.id AS id FROM (SELECT '
                               'tickets.id AS id, tickets.numero AS numero, tickets.client_id AS client_id, '
                               'PG_DESCIFRAR(tickets.identificacion) AS identificacion, '
                               'PG_DESCIFRAR(tickets.nombre) AS nombre, PG_DESCIFRAR(tickets.telefono) AS '
                               'telefono, PG_DESCIFRAR(tickets.telefono_whatsapp) AS telefono_whatsapp, '
                               'PG_DESCIFRAR(tickets.direccion) AS direccion, '
                               'PG_DESCIFRAR(tickets.referencia) AS referencia, tickets.sector AS sector, '
                               'tickets.canton AS canton, tickets.latitud AS latitud, tickets.longitud AS '
                               'longitud, tickets.tecnologia AS tecnologia, tickets.nap_id AS nap_id, '
                               'tickets.puerto_nap AS puerto_nap, tickets.ont_modelo AS ont_modelo, '
                               'tickets.ont_serie AS ont_serie, tickets.potencia_dbm AS potencia_dbm, '
                               'tickets.torre_id AS torre_id, tickets.cpe_ip AS cpe_ip, tickets.frecuencia '
                               'AS frecuencia, tickets.senal_dbm AS senal_dbm, tickets.antena_modelo AS '
                               'antena_modelo, tickets.tipo_incidencia AS tipo_incidencia, '
                               'tickets.descripcion AS descripcion, tickets.prioridad AS prioridad, '
                               'tickets.fecha_visita AS fecha_visita, tickets.franja AS franja, '
                               'tickets.hora_visita AS hora_visita, tickets.tecnico_id AS tecnico_id, '
                               'tickets.cuadrilla_id AS cuadrilla_id, tickets.estado AS estado, '
                               'tickets.solucion AS solucion, tickets.checklist AS checklist, '
                               'tickets.firma_b64 AS firma_b64, PG_DESCIFRAR(tickets.firmante_nombre) AS '
                               'firmante_nombre, PG_DESCIFRAR(tickets.firmante_cedula) AS firmante_cedula, '
                               'tickets.material_usado AS material_usado, tickets.motivo_cancelacion AS '
                               'motivo_cancelacion, tickets.cerrado_at AS cerrado_at, tickets.cerrado_por AS '
                               'cerrado_por, tickets.created_by AS created_by, tickets.created_at AS '
                               'created_at, tickets.updated_at AS updated_at, tickets.salida_at AS '
                               'salida_at, tickets.llegada_at AS llegada_at, tickets.llegada_lat AS '
                               'llegada_lat, tickets.llegada_lng AS llegada_lng, tickets.llegada_precision_m '
                               'AS llegada_precision_m, PG_DESCIFRAR(tickets.email) AS email, '
                               'tickets.ruta_fecha AS ruta_fecha, tickets.ruta_orden AS ruta_orden, '
                               'tickets.reprogramar_desde AS reprogramar_desde FROM tickets AS tickets WHERE '
                               'NOT RLS_ACTIVA() OR (((SELECT COALESCE((SELECT '
                               "PG_JSON_TIENE(usuarios_sistema.permisos, '*') OR "
                               "PG_JSON_TIENE(usuarios_sistema.permisos, 'clientes.cartera') AS _col_0 FROM "
                               'usuarios_sistema AS usuarios_sistema WHERE usuarios_sistema.auth_id = '
                               'AUTH_UID() AND usuarios_sistema.activo LIMIT 1), TRUE /* Sin legajo no se '
                               'bloquea a nadie: es una instalación que todavía no */ /* corrió la migración '
                               '66, y cerrarle el paso la dejaría inutilizable de */ /* golpe. El frente se '
                               'comporta igual por la misma razón. */) AS _col_0) OR (NOT tickets.tecnico_id '
                               'IS NULL AND tickets.tecnico_id = (SELECT usuarios_sistema.tecnico_id AS '
                               'tecnico_id FROM usuarios_sistema AS usuarios_sistema WHERE '
                               'usuarios_sistema.auth_id = AUTH_UID() AND usuarios_sistema.activo LIMIT 1)) '
                               'OR (NOT tickets.cuadrilla_id IS NULL AND tickets.cuadrilla_id IN (SELECT '
                               '(SELECT cuadrilla_miembros.cuadrilla_id AS cuadrilla_id FROM '
                               'cuadrilla_miembros AS cuadrilla_miembros WHERE cuadrilla_miembros.tecnico_id '
                               '= (SELECT usuarios_sistema.tecnico_id AS tecnico_id FROM usuarios_sistema AS '
                               'usuarios_sistema WHERE usuarios_sistema.auth_id = AUTH_UID() AND '
                               'usuarios_sistema.activo LIMIT 1)) AS _col_0)) OR tickets.client_id IN '
                               '(SELECT cliente_id AS cliente_id FROM (WITH yo /* Solo el técnico y los '
                               'clientes de sus trabajos. */ /* La cobranza SALIÓ de acá a propósito: abría '
                               'la ficha completa cuando lo */ /* que hace falta es un nombre, un teléfono y '
                               'un saldo. Va por */ /* `v_cobros_por_gestionar`, más abajo. */ AS (SELECT '
                               'usuarios_sistema.id AS id, usuarios_sistema.tecnico_id AS tecnico_id FROM '
                               'usuarios_sistema AS usuarios_sistema WHERE usuarios_sistema.auth_id = '
                               'AUTH_UID() AND usuarios_sistema.activo LIMIT 1) SELECT t_fn1447.client_id AS '
                               'cliente_id FROM tickets AS t_fn1447 JOIN yo AS yo ON t_fn1447.tecnico_id = '
                               'yo.tecnico_id WHERE NOT t_fn1447.client_id IS NULL UNION SELECT '
                               'i_fn1447.client_id AS client_id FROM instalaciones AS i_fn1447 JOIN yo AS yo '
                               'ON i_fn1447.tecnico_id = yo.tecnico_id WHERE NOT i_fn1447.client_id IS NULL) '
                               'AS _0)))) AS tickets))',
                     'select': '(ticket_adjuntos.ticket_id IN (SELECT tickets.id AS id FROM (SELECT '
                               'tickets.id AS id, tickets.numero AS numero, tickets.client_id AS client_id, '
                               'PG_DESCIFRAR(tickets.identificacion) AS identificacion, '
                               'PG_DESCIFRAR(tickets.nombre) AS nombre, PG_DESCIFRAR(tickets.telefono) AS '
                               'telefono, PG_DESCIFRAR(tickets.telefono_whatsapp) AS telefono_whatsapp, '
                               'PG_DESCIFRAR(tickets.direccion) AS direccion, '
                               'PG_DESCIFRAR(tickets.referencia) AS referencia, tickets.sector AS sector, '
                               'tickets.canton AS canton, tickets.latitud AS latitud, tickets.longitud AS '
                               'longitud, tickets.tecnologia AS tecnologia, tickets.nap_id AS nap_id, '
                               'tickets.puerto_nap AS puerto_nap, tickets.ont_modelo AS ont_modelo, '
                               'tickets.ont_serie AS ont_serie, tickets.potencia_dbm AS potencia_dbm, '
                               'tickets.torre_id AS torre_id, tickets.cpe_ip AS cpe_ip, tickets.frecuencia '
                               'AS frecuencia, tickets.senal_dbm AS senal_dbm, tickets.antena_modelo AS '
                               'antena_modelo, tickets.tipo_incidencia AS tipo_incidencia, '
                               'tickets.descripcion AS descripcion, tickets.prioridad AS prioridad, '
                               'tickets.fecha_visita AS fecha_visita, tickets.franja AS franja, '
                               'tickets.hora_visita AS hora_visita, tickets.tecnico_id AS tecnico_id, '
                               'tickets.cuadrilla_id AS cuadrilla_id, tickets.estado AS estado, '
                               'tickets.solucion AS solucion, tickets.checklist AS checklist, '
                               'tickets.firma_b64 AS firma_b64, PG_DESCIFRAR(tickets.firmante_nombre) AS '
                               'firmante_nombre, PG_DESCIFRAR(tickets.firmante_cedula) AS firmante_cedula, '
                               'tickets.material_usado AS material_usado, tickets.motivo_cancelacion AS '
                               'motivo_cancelacion, tickets.cerrado_at AS cerrado_at, tickets.cerrado_por AS '
                               'cerrado_por, tickets.created_by AS created_by, tickets.created_at AS '
                               'created_at, tickets.updated_at AS updated_at, tickets.salida_at AS '
                               'salida_at, tickets.llegada_at AS llegada_at, tickets.llegada_lat AS '
                               'llegada_lat, tickets.llegada_lng AS llegada_lng, tickets.llegada_precision_m '
                               'AS llegada_precision_m, PG_DESCIFRAR(tickets.email) AS email, '
                               'tickets.ruta_fecha AS ruta_fecha, tickets.ruta_orden AS ruta_orden, '
                               'tickets.reprogramar_desde AS reprogramar_desde FROM tickets AS tickets WHERE '
                               'NOT RLS_ACTIVA() OR (((SELECT COALESCE((SELECT '
                               "PG_JSON_TIENE(usuarios_sistema.permisos, '*') OR "
                               "PG_JSON_TIENE(usuarios_sistema.permisos, 'clientes.cartera') AS _col_0 FROM "
                               'usuarios_sistema AS usuarios_sistema WHERE usuarios_sistema.auth_id = '
                               'AUTH_UID() AND usuarios_sistema.activo LIMIT 1), TRUE /* Sin legajo no se '
                               'bloquea a nadie: es una instalación que todavía no */ /* corrió la migración '
                               '66, y cerrarle el paso la dejaría inutilizable de */ /* golpe. El frente se '
                               'comporta igual por la misma razón. */) AS _col_0) OR (NOT tickets.tecnico_id '
                               'IS NULL AND tickets.tecnico_id = (SELECT usuarios_sistema.tecnico_id AS '
                               'tecnico_id FROM usuarios_sistema AS usuarios_sistema WHERE '
                               'usuarios_sistema.auth_id = AUTH_UID() AND usuarios_sistema.activo LIMIT 1)) '
                               'OR (NOT tickets.cuadrilla_id IS NULL AND tickets.cuadrilla_id IN (SELECT '
                               '(SELECT cuadrilla_miembros.cuadrilla_id AS cuadrilla_id FROM '
                               'cuadrilla_miembros AS cuadrilla_miembros WHERE cuadrilla_miembros.tecnico_id '
                               '= (SELECT usuarios_sistema.tecnico_id AS tecnico_id FROM usuarios_sistema AS '
                               'usuarios_sistema WHERE usuarios_sistema.auth_id = AUTH_UID() AND '
                               'usuarios_sistema.activo LIMIT 1)) AS _col_0)) OR tickets.client_id IN '
                               '(SELECT cliente_id AS cliente_id FROM (WITH yo /* Solo el técnico y los '
                               'clientes de sus trabajos. */ /* La cobranza SALIÓ de acá a propósito: abría '
                               'la ficha completa cuando lo */ /* que hace falta es un nombre, un teléfono y '
                               'un saldo. Va por */ /* `v_cobros_por_gestionar`, más abajo. */ AS (SELECT '
                               'usuarios_sistema.id AS id, usuarios_sistema.tecnico_id AS tecnico_id FROM '
                               'usuarios_sistema AS usuarios_sistema WHERE usuarios_sistema.auth_id = '
                               'AUTH_UID() AND usuarios_sistema.activo LIMIT 1) SELECT t_fn1442.client_id AS '
                               'cliente_id FROM tickets AS t_fn1442 JOIN yo AS yo ON t_fn1442.tecnico_id = '
                               'yo.tecnico_id WHERE NOT t_fn1442.client_id IS NULL UNION SELECT '
                               'i_fn1442.client_id AS client_id FROM instalaciones AS i_fn1442 JOIN yo AS yo '
                               'ON i_fn1442.tecnico_id = yo.tecnico_id WHERE NOT i_fn1442.client_id IS NULL) '
                               'AS _0)))) AS tickets))',
                     'update': '(ticket_adjuntos.ticket_id IN (SELECT tickets.id AS id FROM (SELECT '
                               'tickets.id AS id, tickets.numero AS numero, tickets.client_id AS client_id, '
                               'PG_DESCIFRAR(tickets.identificacion) AS identificacion, '
                               'PG_DESCIFRAR(tickets.nombre) AS nombre, PG_DESCIFRAR(tickets.telefono) AS '
                               'telefono, PG_DESCIFRAR(tickets.telefono_whatsapp) AS telefono_whatsapp, '
                               'PG_DESCIFRAR(tickets.direccion) AS direccion, '
                               'PG_DESCIFRAR(tickets.referencia) AS referencia, tickets.sector AS sector, '
                               'tickets.canton AS canton, tickets.latitud AS latitud, tickets.longitud AS '
                               'longitud, tickets.tecnologia AS tecnologia, tickets.nap_id AS nap_id, '
                               'tickets.puerto_nap AS puerto_nap, tickets.ont_modelo AS ont_modelo, '
                               'tickets.ont_serie AS ont_serie, tickets.potencia_dbm AS potencia_dbm, '
                               'tickets.torre_id AS torre_id, tickets.cpe_ip AS cpe_ip, tickets.frecuencia '
                               'AS frecuencia, tickets.senal_dbm AS senal_dbm, tickets.antena_modelo AS '
                               'antena_modelo, tickets.tipo_incidencia AS tipo_incidencia, '
                               'tickets.descripcion AS descripcion, tickets.prioridad AS prioridad, '
                               'tickets.fecha_visita AS fecha_visita, tickets.franja AS franja, '
                               'tickets.hora_visita AS hora_visita, tickets.tecnico_id AS tecnico_id, '
                               'tickets.cuadrilla_id AS cuadrilla_id, tickets.estado AS estado, '
                               'tickets.solucion AS solucion, tickets.checklist AS checklist, '
                               'tickets.firma_b64 AS firma_b64, PG_DESCIFRAR(tickets.firmante_nombre) AS '
                               'firmante_nombre, PG_DESCIFRAR(tickets.firmante_cedula) AS firmante_cedula, '
                               'tickets.material_usado AS material_usado, tickets.motivo_cancelacion AS '
                               'motivo_cancelacion, tickets.cerrado_at AS cerrado_at, tickets.cerrado_por AS '
                               'cerrado_por, tickets.created_by AS created_by, tickets.created_at AS '
                               'created_at, tickets.updated_at AS updated_at, tickets.salida_at AS '
                               'salida_at, tickets.llegada_at AS llegada_at, tickets.llegada_lat AS '
                               'llegada_lat, tickets.llegada_lng AS llegada_lng, tickets.llegada_precision_m '
                               'AS llegada_precision_m, PG_DESCIFRAR(tickets.email) AS email, '
                               'tickets.ruta_fecha AS ruta_fecha, tickets.ruta_orden AS ruta_orden, '
                               'tickets.reprogramar_desde AS reprogramar_desde FROM tickets AS tickets WHERE '
                               'NOT RLS_ACTIVA() OR (((SELECT COALESCE((SELECT '
                               "PG_JSON_TIENE(usuarios_sistema.permisos, '*') OR "
                               "PG_JSON_TIENE(usuarios_sistema.permisos, 'clientes.cartera') AS _col_0 FROM "
                               'usuarios_sistema AS usuarios_sistema WHERE usuarios_sistema.auth_id = '
                               'AUTH_UID() AND usuarios_sistema.activo LIMIT 1), TRUE /* Sin legajo no se '
                               'bloquea a nadie: es una instalación que todavía no */ /* corrió la migración '
                               '66, y cerrarle el paso la dejaría inutilizable de */ /* golpe. El frente se '
                               'comporta igual por la misma razón. */) AS _col_0) OR (NOT tickets.tecnico_id '
                               'IS NULL AND tickets.tecnico_id = (SELECT usuarios_sistema.tecnico_id AS '
                               'tecnico_id FROM usuarios_sistema AS usuarios_sistema WHERE '
                               'usuarios_sistema.auth_id = AUTH_UID() AND usuarios_sistema.activo LIMIT 1)) '
                               'OR (NOT tickets.cuadrilla_id IS NULL AND tickets.cuadrilla_id IN (SELECT '
                               '(SELECT cuadrilla_miembros.cuadrilla_id AS cuadrilla_id FROM '
                               'cuadrilla_miembros AS cuadrilla_miembros WHERE cuadrilla_miembros.tecnico_id '
                               '= (SELECT usuarios_sistema.tecnico_id AS tecnico_id FROM usuarios_sistema AS '
                               'usuarios_sistema WHERE usuarios_sistema.auth_id = AUTH_UID() AND '
                               'usuarios_sistema.activo LIMIT 1)) AS _col_0)) OR tickets.client_id IN '
                               '(SELECT cliente_id AS cliente_id FROM (WITH yo /* Solo el técnico y los '
                               'clientes de sus trabajos. */ /* La cobranza SALIÓ de acá a propósito: abría '
                               'la ficha completa cuando lo */ /* que hace falta es un nombre, un teléfono y '
                               'un saldo. Va por */ /* `v_cobros_por_gestionar`, más abajo. */ AS (SELECT '
                               'usuarios_sistema.id AS id, usuarios_sistema.tecnico_id AS tecnico_id FROM '
                               'usuarios_sistema AS usuarios_sistema WHERE usuarios_sistema.auth_id = '
                               'AUTH_UID() AND usuarios_sistema.activo LIMIT 1) SELECT t_fn1452.client_id AS '
                               'cliente_id FROM tickets AS t_fn1452 JOIN yo AS yo ON t_fn1452.tecnico_id = '
                               'yo.tecnico_id WHERE NOT t_fn1452.client_id IS NULL UNION SELECT '
                               'i_fn1452.client_id AS client_id FROM instalaciones AS i_fn1452 JOIN yo AS yo '
                               'ON i_fn1452.tecnico_id = yo.tecnico_id WHERE NOT i_fn1452.client_id IS NULL) '
                               'AS _0)))) AS tickets))',
                     'update_check': '(ticket_adjuntos.ticket_id IN (SELECT tickets.id AS id FROM (SELECT '
                                     'tickets.id AS id, tickets.numero AS numero, tickets.client_id AS '
                                     'client_id, PG_DESCIFRAR(tickets.identificacion) AS identificacion, '
                                     'PG_DESCIFRAR(tickets.nombre) AS nombre, PG_DESCIFRAR(tickets.telefono) '
                                     'AS telefono, PG_DESCIFRAR(tickets.telefono_whatsapp) AS '
                                     'telefono_whatsapp, PG_DESCIFRAR(tickets.direccion) AS direccion, '
                                     'PG_DESCIFRAR(tickets.referencia) AS referencia, tickets.sector AS '
                                     'sector, tickets.canton AS canton, tickets.latitud AS latitud, '
                                     'tickets.longitud AS longitud, tickets.tecnologia AS tecnologia, '
                                     'tickets.nap_id AS nap_id, tickets.puerto_nap AS puerto_nap, '
                                     'tickets.ont_modelo AS ont_modelo, tickets.ont_serie AS ont_serie, '
                                     'tickets.potencia_dbm AS potencia_dbm, tickets.torre_id AS torre_id, '
                                     'tickets.cpe_ip AS cpe_ip, tickets.frecuencia AS frecuencia, '
                                     'tickets.senal_dbm AS senal_dbm, tickets.antena_modelo AS '
                                     'antena_modelo, tickets.tipo_incidencia AS tipo_incidencia, '
                                     'tickets.descripcion AS descripcion, tickets.prioridad AS prioridad, '
                                     'tickets.fecha_visita AS fecha_visita, tickets.franja AS franja, '
                                     'tickets.hora_visita AS hora_visita, tickets.tecnico_id AS tecnico_id, '
                                     'tickets.cuadrilla_id AS cuadrilla_id, tickets.estado AS estado, '
                                     'tickets.solucion AS solucion, tickets.checklist AS checklist, '
                                     'tickets.firma_b64 AS firma_b64, PG_DESCIFRAR(tickets.firmante_nombre) '
                                     'AS firmante_nombre, PG_DESCIFRAR(tickets.firmante_cedula) AS '
                                     'firmante_cedula, tickets.material_usado AS material_usado, '
                                     'tickets.motivo_cancelacion AS motivo_cancelacion, tickets.cerrado_at '
                                     'AS cerrado_at, tickets.cerrado_por AS cerrado_por, tickets.created_by '
                                     'AS created_by, tickets.created_at AS created_at, tickets.updated_at AS '
                                     'updated_at, tickets.salida_at AS salida_at, tickets.llegada_at AS '
                                     'llegada_at, tickets.llegada_lat AS llegada_lat, tickets.llegada_lng AS '
                                     'llegada_lng, tickets.llegada_precision_m AS llegada_precision_m, '
                                     'PG_DESCIFRAR(tickets.email) AS email, tickets.ruta_fecha AS '
                                     'ruta_fecha, tickets.ruta_orden AS ruta_orden, '
                                     'tickets.reprogramar_desde AS reprogramar_desde FROM tickets AS tickets '
                                     'WHERE NOT RLS_ACTIVA() OR (((SELECT COALESCE((SELECT '
                                     "PG_JSON_TIENE(usuarios_sistema.permisos, '*') OR "
                                     "PG_JSON_TIENE(usuarios_sistema.permisos, 'clientes.cartera') AS _col_0 "
                                     'FROM usuarios_sistema AS usuarios_sistema WHERE '
                                     'usuarios_sistema.auth_id = AUTH_UID() AND usuarios_sistema.activo '
                                     'LIMIT 1), TRUE /* Sin legajo no se bloquea a nadie: es una instalación '
                                     'que todavía no */ /* corrió la migración 66, y cerrarle el paso la '
                                     'dejaría inutilizable de */ /* golpe. El frente se comporta igual por '
                                     'la misma razón. */) AS _col_0) OR (NOT tickets.tecnico_id IS NULL AND '
                                     'tickets.tecnico_id = (SELECT usuarios_sistema.tecnico_id AS tecnico_id '
                                     'FROM usuarios_sistema AS usuarios_sistema WHERE '
                                     'usuarios_sistema.auth_id = AUTH_UID() AND usuarios_sistema.activo '
                                     'LIMIT 1)) OR (NOT tickets.cuadrilla_id IS NULL AND '
                                     'tickets.cuadrilla_id IN (SELECT (SELECT '
                                     'cuadrilla_miembros.cuadrilla_id AS cuadrilla_id FROM '
                                     'cuadrilla_miembros AS cuadrilla_miembros WHERE '
                                     'cuadrilla_miembros.tecnico_id = (SELECT usuarios_sistema.tecnico_id AS '
                                     'tecnico_id FROM usuarios_sistema AS usuarios_sistema WHERE '
                                     'usuarios_sistema.auth_id = AUTH_UID() AND usuarios_sistema.activo '
                                     'LIMIT 1)) AS _col_0)) OR tickets.client_id IN (SELECT cliente_id AS '
                                     'cliente_id FROM (WITH yo /* Solo el técnico y los clientes de sus '
                                     'trabajos. */ /* La cobranza SALIÓ de acá a propósito: abría la ficha '
                                     'completa cuando lo */ /* que hace falta es un nombre, un teléfono y un '
                                     'saldo. Va por */ /* `v_cobros_por_gestionar`, más abajo. */ AS (SELECT '
                                     'usuarios_sistema.id AS id, usuarios_sistema.tecnico_id AS tecnico_id '
                                     'FROM usuarios_sistema AS usuarios_sistema WHERE '
                                     'usuarios_sistema.auth_id = AUTH_UID() AND usuarios_sistema.activo '
                                     'LIMIT 1) SELECT t_fn1457.client_id AS cliente_id FROM tickets AS '
                                     't_fn1457 JOIN yo AS yo ON t_fn1457.tecnico_id = yo.tecnico_id WHERE '
                                     'NOT t_fn1457.client_id IS NULL UNION SELECT i_fn1457.client_id AS '
                                     'client_id FROM instalaciones AS i_fn1457 JOIN yo AS yo ON '
                                     'i_fn1457.tecnico_id = yo.tecnico_id WHERE NOT i_fn1457.client_id IS '
                                     'NULL) AS _0)))) AS tickets))'},
 'ticket_eventos': {'delete': '(ticket_eventos.ticket_id IN (SELECT tickets.id AS id FROM (SELECT tickets.id '
                              'AS id, tickets.numero AS numero, tickets.client_id AS client_id, '
                              'PG_DESCIFRAR(tickets.identificacion) AS identificacion, '
                              'PG_DESCIFRAR(tickets.nombre) AS nombre, PG_DESCIFRAR(tickets.telefono) AS '
                              'telefono, PG_DESCIFRAR(tickets.telefono_whatsapp) AS telefono_whatsapp, '
                              'PG_DESCIFRAR(tickets.direccion) AS direccion, '
                              'PG_DESCIFRAR(tickets.referencia) AS referencia, tickets.sector AS sector, '
                              'tickets.canton AS canton, tickets.latitud AS latitud, tickets.longitud AS '
                              'longitud, tickets.tecnologia AS tecnologia, tickets.nap_id AS nap_id, '
                              'tickets.puerto_nap AS puerto_nap, tickets.ont_modelo AS ont_modelo, '
                              'tickets.ont_serie AS ont_serie, tickets.potencia_dbm AS potencia_dbm, '
                              'tickets.torre_id AS torre_id, tickets.cpe_ip AS cpe_ip, tickets.frecuencia AS '
                              'frecuencia, tickets.senal_dbm AS senal_dbm, tickets.antena_modelo AS '
                              'antena_modelo, tickets.tipo_incidencia AS tipo_incidencia, '
                              'tickets.descripcion AS descripcion, tickets.prioridad AS prioridad, '
                              'tickets.fecha_visita AS fecha_visita, tickets.franja AS franja, '
                              'tickets.hora_visita AS hora_visita, tickets.tecnico_id AS tecnico_id, '
                              'tickets.cuadrilla_id AS cuadrilla_id, tickets.estado AS estado, '
                              'tickets.solucion AS solucion, tickets.checklist AS checklist, '
                              'tickets.firma_b64 AS firma_b64, PG_DESCIFRAR(tickets.firmante_nombre) AS '
                              'firmante_nombre, PG_DESCIFRAR(tickets.firmante_cedula) AS firmante_cedula, '
                              'tickets.material_usado AS material_usado, tickets.motivo_cancelacion AS '
                              'motivo_cancelacion, tickets.cerrado_at AS cerrado_at, tickets.cerrado_por AS '
                              'cerrado_por, tickets.created_by AS created_by, tickets.created_at AS '
                              'created_at, tickets.updated_at AS updated_at, tickets.salida_at AS salida_at, '
                              'tickets.llegada_at AS llegada_at, tickets.llegada_lat AS llegada_lat, '
                              'tickets.llegada_lng AS llegada_lng, tickets.llegada_precision_m AS '
                              'llegada_precision_m, PG_DESCIFRAR(tickets.email) AS email, tickets.ruta_fecha '
                              'AS ruta_fecha, tickets.ruta_orden AS ruta_orden, tickets.reprogramar_desde AS '
                              'reprogramar_desde FROM tickets AS tickets WHERE NOT RLS_ACTIVA() OR (((SELECT '
                              "COALESCE((SELECT PG_JSON_TIENE(usuarios_sistema.permisos, '*') OR "
                              "PG_JSON_TIENE(usuarios_sistema.permisos, 'clientes.cartera') AS _col_0 FROM "
                              'usuarios_sistema AS usuarios_sistema WHERE usuarios_sistema.auth_id = '
                              'AUTH_UID() AND usuarios_sistema.activo LIMIT 1), TRUE /* Sin legajo no se '
                              'bloquea a nadie: es una instalación que todavía no */ /* corrió la migración '
                              '66, y cerrarle el paso la dejaría inutilizable de */ /* golpe. El frente se '
                              'comporta igual por la misma razón. */) AS _col_0) OR (NOT tickets.tecnico_id '
                              'IS NULL AND tickets.tecnico_id = (SELECT usuarios_sistema.tecnico_id AS '
                              'tecnico_id FROM usuarios_sistema AS usuarios_sistema WHERE '
                              'usuarios_sistema.auth_id = AUTH_UID() AND usuarios_sistema.activo LIMIT 1)) '
                              'OR (NOT tickets.cuadrilla_id IS NULL AND tickets.cuadrilla_id IN (SELECT '
                              '(SELECT cuadrilla_miembros.cuadrilla_id AS cuadrilla_id FROM '
                              'cuadrilla_miembros AS cuadrilla_miembros WHERE cuadrilla_miembros.tecnico_id '
                              '= (SELECT usuarios_sistema.tecnico_id AS tecnico_id FROM usuarios_sistema AS '
                              'usuarios_sistema WHERE usuarios_sistema.auth_id = AUTH_UID() AND '
                              'usuarios_sistema.activo LIMIT 1)) AS _col_0)) OR tickets.client_id IN (SELECT '
                              'cliente_id AS cliente_id FROM (WITH yo /* Solo el técnico y los clientes de '
                              'sus trabajos. */ /* La cobranza SALIÓ de acá a propósito: abría la ficha '
                              'completa cuando lo */ /* que hace falta es un nombre, un teléfono y un saldo. '
                              'Va por */ /* `v_cobros_por_gestionar`, más abajo. */ AS (SELECT '
                              'usuarios_sistema.id AS id, usuarios_sistema.tecnico_id AS tecnico_id FROM '
                              'usuarios_sistema AS usuarios_sistema WHERE usuarios_sistema.auth_id = '
                              'AUTH_UID() AND usuarios_sistema.activo LIMIT 1) SELECT t_fn1487.client_id AS '
                              'cliente_id FROM tickets AS t_fn1487 JOIN yo AS yo ON t_fn1487.tecnico_id = '
                              'yo.tecnico_id WHERE NOT t_fn1487.client_id IS NULL UNION SELECT '
                              'i_fn1487.client_id AS client_id FROM instalaciones AS i_fn1487 JOIN yo AS yo '
                              'ON i_fn1487.tecnico_id = yo.tecnico_id WHERE NOT i_fn1487.client_id IS NULL) '
                              'AS _0)))) AS tickets))',
                    'insert': '(ticket_eventos.ticket_id IN (SELECT tickets.id AS id FROM (SELECT tickets.id '
                              'AS id, tickets.numero AS numero, tickets.client_id AS client_id, '
                              'PG_DESCIFRAR(tickets.identificacion) AS identificacion, '
                              'PG_DESCIFRAR(tickets.nombre) AS nombre, PG_DESCIFRAR(tickets.telefono) AS '
                              'telefono, PG_DESCIFRAR(tickets.telefono_whatsapp) AS telefono_whatsapp, '
                              'PG_DESCIFRAR(tickets.direccion) AS direccion, '
                              'PG_DESCIFRAR(tickets.referencia) AS referencia, tickets.sector AS sector, '
                              'tickets.canton AS canton, tickets.latitud AS latitud, tickets.longitud AS '
                              'longitud, tickets.tecnologia AS tecnologia, tickets.nap_id AS nap_id, '
                              'tickets.puerto_nap AS puerto_nap, tickets.ont_modelo AS ont_modelo, '
                              'tickets.ont_serie AS ont_serie, tickets.potencia_dbm AS potencia_dbm, '
                              'tickets.torre_id AS torre_id, tickets.cpe_ip AS cpe_ip, tickets.frecuencia AS '
                              'frecuencia, tickets.senal_dbm AS senal_dbm, tickets.antena_modelo AS '
                              'antena_modelo, tickets.tipo_incidencia AS tipo_incidencia, '
                              'tickets.descripcion AS descripcion, tickets.prioridad AS prioridad, '
                              'tickets.fecha_visita AS fecha_visita, tickets.franja AS franja, '
                              'tickets.hora_visita AS hora_visita, tickets.tecnico_id AS tecnico_id, '
                              'tickets.cuadrilla_id AS cuadrilla_id, tickets.estado AS estado, '
                              'tickets.solucion AS solucion, tickets.checklist AS checklist, '
                              'tickets.firma_b64 AS firma_b64, PG_DESCIFRAR(tickets.firmante_nombre) AS '
                              'firmante_nombre, PG_DESCIFRAR(tickets.firmante_cedula) AS firmante_cedula, '
                              'tickets.material_usado AS material_usado, tickets.motivo_cancelacion AS '
                              'motivo_cancelacion, tickets.cerrado_at AS cerrado_at, tickets.cerrado_por AS '
                              'cerrado_por, tickets.created_by AS created_by, tickets.created_at AS '
                              'created_at, tickets.updated_at AS updated_at, tickets.salida_at AS salida_at, '
                              'tickets.llegada_at AS llegada_at, tickets.llegada_lat AS llegada_lat, '
                              'tickets.llegada_lng AS llegada_lng, tickets.llegada_precision_m AS '
                              'llegada_precision_m, PG_DESCIFRAR(tickets.email) AS email, tickets.ruta_fecha '
                              'AS ruta_fecha, tickets.ruta_orden AS ruta_orden, tickets.reprogramar_desde AS '
                              'reprogramar_desde FROM tickets AS tickets WHERE NOT RLS_ACTIVA() OR (((SELECT '
                              "COALESCE((SELECT PG_JSON_TIENE(usuarios_sistema.permisos, '*') OR "
                              "PG_JSON_TIENE(usuarios_sistema.permisos, 'clientes.cartera') AS _col_0 FROM "
                              'usuarios_sistema AS usuarios_sistema WHERE usuarios_sistema.auth_id = '
                              'AUTH_UID() AND usuarios_sistema.activo LIMIT 1), TRUE /* Sin legajo no se '
                              'bloquea a nadie: es una instalación que todavía no */ /* corrió la migración '
                              '66, y cerrarle el paso la dejaría inutilizable de */ /* golpe. El frente se '
                              'comporta igual por la misma razón. */) AS _col_0) OR (NOT tickets.tecnico_id '
                              'IS NULL AND tickets.tecnico_id = (SELECT usuarios_sistema.tecnico_id AS '
                              'tecnico_id FROM usuarios_sistema AS usuarios_sistema WHERE '
                              'usuarios_sistema.auth_id = AUTH_UID() AND usuarios_sistema.activo LIMIT 1)) '
                              'OR (NOT tickets.cuadrilla_id IS NULL AND tickets.cuadrilla_id IN (SELECT '
                              '(SELECT cuadrilla_miembros.cuadrilla_id AS cuadrilla_id FROM '
                              'cuadrilla_miembros AS cuadrilla_miembros WHERE cuadrilla_miembros.tecnico_id '
                              '= (SELECT usuarios_sistema.tecnico_id AS tecnico_id FROM usuarios_sistema AS '
                              'usuarios_sistema WHERE usuarios_sistema.auth_id = AUTH_UID() AND '
                              'usuarios_sistema.activo LIMIT 1)) AS _col_0)) OR tickets.client_id IN (SELECT '
                              'cliente_id AS cliente_id FROM (WITH yo /* Solo el técnico y los clientes de '
                              'sus trabajos. */ /* La cobranza SALIÓ de acá a propósito: abría la ficha '
                              'completa cuando lo */ /* que hace falta es un nombre, un teléfono y un saldo. '
                              'Va por */ /* `v_cobros_por_gestionar`, más abajo. */ AS (SELECT '
                              'usuarios_sistema.id AS id, usuarios_sistema.tecnico_id AS tecnico_id FROM '
                              'usuarios_sistema AS usuarios_sistema WHERE usuarios_sistema.auth_id = '
                              'AUTH_UID() AND usuarios_sistema.activo LIMIT 1) SELECT t_fn1472.client_id AS '
                              'cliente_id FROM tickets AS t_fn1472 JOIN yo AS yo ON t_fn1472.tecnico_id = '
                              'yo.tecnico_id WHERE NOT t_fn1472.client_id IS NULL UNION SELECT '
                              'i_fn1472.client_id AS client_id FROM instalaciones AS i_fn1472 JOIN yo AS yo '
                              'ON i_fn1472.tecnico_id = yo.tecnico_id WHERE NOT i_fn1472.client_id IS NULL) '
                              'AS _0)))) AS tickets))',
                    'select': '(ticket_eventos.ticket_id IN (SELECT tickets.id AS id FROM (SELECT tickets.id '
                              'AS id, tickets.numero AS numero, tickets.client_id AS client_id, '
                              'PG_DESCIFRAR(tickets.identificacion) AS identificacion, '
                              'PG_DESCIFRAR(tickets.nombre) AS nombre, PG_DESCIFRAR(tickets.telefono) AS '
                              'telefono, PG_DESCIFRAR(tickets.telefono_whatsapp) AS telefono_whatsapp, '
                              'PG_DESCIFRAR(tickets.direccion) AS direccion, '
                              'PG_DESCIFRAR(tickets.referencia) AS referencia, tickets.sector AS sector, '
                              'tickets.canton AS canton, tickets.latitud AS latitud, tickets.longitud AS '
                              'longitud, tickets.tecnologia AS tecnologia, tickets.nap_id AS nap_id, '
                              'tickets.puerto_nap AS puerto_nap, tickets.ont_modelo AS ont_modelo, '
                              'tickets.ont_serie AS ont_serie, tickets.potencia_dbm AS potencia_dbm, '
                              'tickets.torre_id AS torre_id, tickets.cpe_ip AS cpe_ip, tickets.frecuencia AS '
                              'frecuencia, tickets.senal_dbm AS senal_dbm, tickets.antena_modelo AS '
                              'antena_modelo, tickets.tipo_incidencia AS tipo_incidencia, '
                              'tickets.descripcion AS descripcion, tickets.prioridad AS prioridad, '
                              'tickets.fecha_visita AS fecha_visita, tickets.franja AS franja, '
                              'tickets.hora_visita AS hora_visita, tickets.tecnico_id AS tecnico_id, '
                              'tickets.cuadrilla_id AS cuadrilla_id, tickets.estado AS estado, '
                              'tickets.solucion AS solucion, tickets.checklist AS checklist, '
                              'tickets.firma_b64 AS firma_b64, PG_DESCIFRAR(tickets.firmante_nombre) AS '
                              'firmante_nombre, PG_DESCIFRAR(tickets.firmante_cedula) AS firmante_cedula, '
                              'tickets.material_usado AS material_usado, tickets.motivo_cancelacion AS '
                              'motivo_cancelacion, tickets.cerrado_at AS cerrado_at, tickets.cerrado_por AS '
                              'cerrado_por, tickets.created_by AS created_by, tickets.created_at AS '
                              'created_at, tickets.updated_at AS updated_at, tickets.salida_at AS salida_at, '
                              'tickets.llegada_at AS llegada_at, tickets.llegada_lat AS llegada_lat, '
                              'tickets.llegada_lng AS llegada_lng, tickets.llegada_precision_m AS '
                              'llegada_precision_m, PG_DESCIFRAR(tickets.email) AS email, tickets.ruta_fecha '
                              'AS ruta_fecha, tickets.ruta_orden AS ruta_orden, tickets.reprogramar_desde AS '
                              'reprogramar_desde FROM tickets AS tickets WHERE NOT RLS_ACTIVA() OR (((SELECT '
                              "COALESCE((SELECT PG_JSON_TIENE(usuarios_sistema.permisos, '*') OR "
                              "PG_JSON_TIENE(usuarios_sistema.permisos, 'clientes.cartera') AS _col_0 FROM "
                              'usuarios_sistema AS usuarios_sistema WHERE usuarios_sistema.auth_id = '
                              'AUTH_UID() AND usuarios_sistema.activo LIMIT 1), TRUE /* Sin legajo no se '
                              'bloquea a nadie: es una instalación que todavía no */ /* corrió la migración '
                              '66, y cerrarle el paso la dejaría inutilizable de */ /* golpe. El frente se '
                              'comporta igual por la misma razón. */) AS _col_0) OR (NOT tickets.tecnico_id '
                              'IS NULL AND tickets.tecnico_id = (SELECT usuarios_sistema.tecnico_id AS '
                              'tecnico_id FROM usuarios_sistema AS usuarios_sistema WHERE '
                              'usuarios_sistema.auth_id = AUTH_UID() AND usuarios_sistema.activo LIMIT 1)) '
                              'OR (NOT tickets.cuadrilla_id IS NULL AND tickets.cuadrilla_id IN (SELECT '
                              '(SELECT cuadrilla_miembros.cuadrilla_id AS cuadrilla_id FROM '
                              'cuadrilla_miembros AS cuadrilla_miembros WHERE cuadrilla_miembros.tecnico_id '
                              '= (SELECT usuarios_sistema.tecnico_id AS tecnico_id FROM usuarios_sistema AS '
                              'usuarios_sistema WHERE usuarios_sistema.auth_id = AUTH_UID() AND '
                              'usuarios_sistema.activo LIMIT 1)) AS _col_0)) OR tickets.client_id IN (SELECT '
                              'cliente_id AS cliente_id FROM (WITH yo /* Solo el técnico y los clientes de '
                              'sus trabajos. */ /* La cobranza SALIÓ de acá a propósito: abría la ficha '
                              'completa cuando lo */ /* que hace falta es un nombre, un teléfono y un saldo. '
                              'Va por */ /* `v_cobros_por_gestionar`, más abajo. */ AS (SELECT '
                              'usuarios_sistema.id AS id, usuarios_sistema.tecnico_id AS tecnico_id FROM '
                              'usuarios_sistema AS usuarios_sistema WHERE usuarios_sistema.auth_id = '
                              'AUTH_UID() AND usuarios_sistema.activo LIMIT 1) SELECT t_fn1467.client_id AS '
                              'cliente_id FROM tickets AS t_fn1467 JOIN yo AS yo ON t_fn1467.tecnico_id = '
                              'yo.tecnico_id WHERE NOT t_fn1467.client_id IS NULL UNION SELECT '
                              'i_fn1467.client_id AS client_id FROM instalaciones AS i_fn1467 JOIN yo AS yo '
                              'ON i_fn1467.tecnico_id = yo.tecnico_id WHERE NOT i_fn1467.client_id IS NULL) '
                              'AS _0)))) AS tickets))',
                    'update': '(ticket_eventos.ticket_id IN (SELECT tickets.id AS id FROM (SELECT tickets.id '
                              'AS id, tickets.numero AS numero, tickets.client_id AS client_id, '
                              'PG_DESCIFRAR(tickets.identificacion) AS identificacion, '
                              'PG_DESCIFRAR(tickets.nombre) AS nombre, PG_DESCIFRAR(tickets.telefono) AS '
                              'telefono, PG_DESCIFRAR(tickets.telefono_whatsapp) AS telefono_whatsapp, '
                              'PG_DESCIFRAR(tickets.direccion) AS direccion, '
                              'PG_DESCIFRAR(tickets.referencia) AS referencia, tickets.sector AS sector, '
                              'tickets.canton AS canton, tickets.latitud AS latitud, tickets.longitud AS '
                              'longitud, tickets.tecnologia AS tecnologia, tickets.nap_id AS nap_id, '
                              'tickets.puerto_nap AS puerto_nap, tickets.ont_modelo AS ont_modelo, '
                              'tickets.ont_serie AS ont_serie, tickets.potencia_dbm AS potencia_dbm, '
                              'tickets.torre_id AS torre_id, tickets.cpe_ip AS cpe_ip, tickets.frecuencia AS '
                              'frecuencia, tickets.senal_dbm AS senal_dbm, tickets.antena_modelo AS '
                              'antena_modelo, tickets.tipo_incidencia AS tipo_incidencia, '
                              'tickets.descripcion AS descripcion, tickets.prioridad AS prioridad, '
                              'tickets.fecha_visita AS fecha_visita, tickets.franja AS franja, '
                              'tickets.hora_visita AS hora_visita, tickets.tecnico_id AS tecnico_id, '
                              'tickets.cuadrilla_id AS cuadrilla_id, tickets.estado AS estado, '
                              'tickets.solucion AS solucion, tickets.checklist AS checklist, '
                              'tickets.firma_b64 AS firma_b64, PG_DESCIFRAR(tickets.firmante_nombre) AS '
                              'firmante_nombre, PG_DESCIFRAR(tickets.firmante_cedula) AS firmante_cedula, '
                              'tickets.material_usado AS material_usado, tickets.motivo_cancelacion AS '
                              'motivo_cancelacion, tickets.cerrado_at AS cerrado_at, tickets.cerrado_por AS '
                              'cerrado_por, tickets.created_by AS created_by, tickets.created_at AS '
                              'created_at, tickets.updated_at AS updated_at, tickets.salida_at AS salida_at, '
                              'tickets.llegada_at AS llegada_at, tickets.llegada_lat AS llegada_lat, '
                              'tickets.llegada_lng AS llegada_lng, tickets.llegada_precision_m AS '
                              'llegada_precision_m, PG_DESCIFRAR(tickets.email) AS email, tickets.ruta_fecha '
                              'AS ruta_fecha, tickets.ruta_orden AS ruta_orden, tickets.reprogramar_desde AS '
                              'reprogramar_desde FROM tickets AS tickets WHERE NOT RLS_ACTIVA() OR (((SELECT '
                              "COALESCE((SELECT PG_JSON_TIENE(usuarios_sistema.permisos, '*') OR "
                              "PG_JSON_TIENE(usuarios_sistema.permisos, 'clientes.cartera') AS _col_0 FROM "
                              'usuarios_sistema AS usuarios_sistema WHERE usuarios_sistema.auth_id = '
                              'AUTH_UID() AND usuarios_sistema.activo LIMIT 1), TRUE /* Sin legajo no se '
                              'bloquea a nadie: es una instalación que todavía no */ /* corrió la migración '
                              '66, y cerrarle el paso la dejaría inutilizable de */ /* golpe. El frente se '
                              'comporta igual por la misma razón. */) AS _col_0) OR (NOT tickets.tecnico_id '
                              'IS NULL AND tickets.tecnico_id = (SELECT usuarios_sistema.tecnico_id AS '
                              'tecnico_id FROM usuarios_sistema AS usuarios_sistema WHERE '
                              'usuarios_sistema.auth_id = AUTH_UID() AND usuarios_sistema.activo LIMIT 1)) '
                              'OR (NOT tickets.cuadrilla_id IS NULL AND tickets.cuadrilla_id IN (SELECT '
                              '(SELECT cuadrilla_miembros.cuadrilla_id AS cuadrilla_id FROM '
                              'cuadrilla_miembros AS cuadrilla_miembros WHERE cuadrilla_miembros.tecnico_id '
                              '= (SELECT usuarios_sistema.tecnico_id AS tecnico_id FROM usuarios_sistema AS '
                              'usuarios_sistema WHERE usuarios_sistema.auth_id = AUTH_UID() AND '
                              'usuarios_sistema.activo LIMIT 1)) AS _col_0)) OR tickets.client_id IN (SELECT '
                              'cliente_id AS cliente_id FROM (WITH yo /* Solo el técnico y los clientes de '
                              'sus trabajos. */ /* La cobranza SALIÓ de acá a propósito: abría la ficha '
                              'completa cuando lo */ /* que hace falta es un nombre, un teléfono y un saldo. '
                              'Va por */ /* `v_cobros_por_gestionar`, más abajo. */ AS (SELECT '
                              'usuarios_sistema.id AS id, usuarios_sistema.tecnico_id AS tecnico_id FROM '
                              'usuarios_sistema AS usuarios_sistema WHERE usuarios_sistema.auth_id = '
                              'AUTH_UID() AND usuarios_sistema.activo LIMIT 1) SELECT t_fn1477.client_id AS '
                              'cliente_id FROM tickets AS t_fn1477 JOIN yo AS yo ON t_fn1477.tecnico_id = '
                              'yo.tecnico_id WHERE NOT t_fn1477.client_id IS NULL UNION SELECT '
                              'i_fn1477.client_id AS client_id FROM instalaciones AS i_fn1477 JOIN yo AS yo '
                              'ON i_fn1477.tecnico_id = yo.tecnico_id WHERE NOT i_fn1477.client_id IS NULL) '
                              'AS _0)))) AS tickets))',
                    'update_check': '(ticket_eventos.ticket_id IN (SELECT tickets.id AS id FROM (SELECT '
                                    'tickets.id AS id, tickets.numero AS numero, tickets.client_id AS '
                                    'client_id, PG_DESCIFRAR(tickets.identificacion) AS identificacion, '
                                    'PG_DESCIFRAR(tickets.nombre) AS nombre, PG_DESCIFRAR(tickets.telefono) '
                                    'AS telefono, PG_DESCIFRAR(tickets.telefono_whatsapp) AS '
                                    'telefono_whatsapp, PG_DESCIFRAR(tickets.direccion) AS direccion, '
                                    'PG_DESCIFRAR(tickets.referencia) AS referencia, tickets.sector AS '
                                    'sector, tickets.canton AS canton, tickets.latitud AS latitud, '
                                    'tickets.longitud AS longitud, tickets.tecnologia AS tecnologia, '
                                    'tickets.nap_id AS nap_id, tickets.puerto_nap AS puerto_nap, '
                                    'tickets.ont_modelo AS ont_modelo, tickets.ont_serie AS ont_serie, '
                                    'tickets.potencia_dbm AS potencia_dbm, tickets.torre_id AS torre_id, '
                                    'tickets.cpe_ip AS cpe_ip, tickets.frecuencia AS frecuencia, '
                                    'tickets.senal_dbm AS senal_dbm, tickets.antena_modelo AS antena_modelo, '
                                    'tickets.tipo_incidencia AS tipo_incidencia, tickets.descripcion AS '
                                    'descripcion, tickets.prioridad AS prioridad, tickets.fecha_visita AS '
                                    'fecha_visita, tickets.franja AS franja, tickets.hora_visita AS '
                                    'hora_visita, tickets.tecnico_id AS tecnico_id, tickets.cuadrilla_id AS '
                                    'cuadrilla_id, tickets.estado AS estado, tickets.solucion AS solucion, '
                                    'tickets.checklist AS checklist, tickets.firma_b64 AS firma_b64, '
                                    'PG_DESCIFRAR(tickets.firmante_nombre) AS firmante_nombre, '
                                    'PG_DESCIFRAR(tickets.firmante_cedula) AS firmante_cedula, '
                                    'tickets.material_usado AS material_usado, tickets.motivo_cancelacion AS '
                                    'motivo_cancelacion, tickets.cerrado_at AS cerrado_at, '
                                    'tickets.cerrado_por AS cerrado_por, tickets.created_by AS created_by, '
                                    'tickets.created_at AS created_at, tickets.updated_at AS updated_at, '
                                    'tickets.salida_at AS salida_at, tickets.llegada_at AS llegada_at, '
                                    'tickets.llegada_lat AS llegada_lat, tickets.llegada_lng AS llegada_lng, '
                                    'tickets.llegada_precision_m AS llegada_precision_m, '
                                    'PG_DESCIFRAR(tickets.email) AS email, tickets.ruta_fecha AS ruta_fecha, '
                                    'tickets.ruta_orden AS ruta_orden, tickets.reprogramar_desde AS '
                                    'reprogramar_desde FROM tickets AS tickets WHERE NOT RLS_ACTIVA() OR '
                                    '(((SELECT COALESCE((SELECT PG_JSON_TIENE(usuarios_sistema.permisos, '
                                    "'*') OR PG_JSON_TIENE(usuarios_sistema.permisos, 'clientes.cartera') AS "
                                    '_col_0 FROM usuarios_sistema AS usuarios_sistema WHERE '
                                    'usuarios_sistema.auth_id = AUTH_UID() AND usuarios_sistema.activo LIMIT '
                                    '1), TRUE /* Sin legajo no se bloquea a nadie: es una instalación que '
                                    'todavía no */ /* corrió la migración 66, y cerrarle el paso la dejaría '
                                    'inutilizable de */ /* golpe. El frente se comporta igual por la misma '
                                    'razón. */) AS _col_0) OR (NOT tickets.tecnico_id IS NULL AND '
                                    'tickets.tecnico_id = (SELECT usuarios_sistema.tecnico_id AS tecnico_id '
                                    'FROM usuarios_sistema AS usuarios_sistema WHERE '
                                    'usuarios_sistema.auth_id = AUTH_UID() AND usuarios_sistema.activo LIMIT '
                                    '1)) OR (NOT tickets.cuadrilla_id IS NULL AND tickets.cuadrilla_id IN '
                                    '(SELECT (SELECT cuadrilla_miembros.cuadrilla_id AS cuadrilla_id FROM '
                                    'cuadrilla_miembros AS cuadrilla_miembros WHERE '
                                    'cuadrilla_miembros.tecnico_id = (SELECT usuarios_sistema.tecnico_id AS '
                                    'tecnico_id FROM usuarios_sistema AS usuarios_sistema WHERE '
                                    'usuarios_sistema.auth_id = AUTH_UID() AND usuarios_sistema.activo LIMIT '
                                    '1)) AS _col_0)) OR tickets.client_id IN (SELECT cliente_id AS '
                                    'cliente_id FROM (WITH yo /* Solo el técnico y los clientes de sus '
                                    'trabajos. */ /* La cobranza SALIÓ de acá a propósito: abría la ficha '
                                    'completa cuando lo */ /* que hace falta es un nombre, un teléfono y un '
                                    'saldo. Va por */ /* `v_cobros_por_gestionar`, más abajo. */ AS (SELECT '
                                    'usuarios_sistema.id AS id, usuarios_sistema.tecnico_id AS tecnico_id '
                                    'FROM usuarios_sistema AS usuarios_sistema WHERE '
                                    'usuarios_sistema.auth_id = AUTH_UID() AND usuarios_sistema.activo LIMIT '
                                    '1) SELECT t_fn1482.client_id AS cliente_id FROM tickets AS t_fn1482 '
                                    'JOIN yo AS yo ON t_fn1482.tecnico_id = yo.tecnico_id WHERE NOT '
                                    't_fn1482.client_id IS NULL UNION SELECT i_fn1482.client_id AS client_id '
                                    'FROM instalaciones AS i_fn1482 JOIN yo AS yo ON i_fn1482.tecnico_id = '
                                    'yo.tecnico_id WHERE NOT i_fn1482.client_id IS NULL) AS _0)))) AS '
                                    'tickets))'},
 'tickets': {'delete': "((SELECT COALESCE((SELECT PG_JSON_TIENE(usuarios_sistema.permisos, '*') OR "
                       "PG_JSON_TIENE(usuarios_sistema.permisos, 'clientes.cartera') AS _col_0 FROM "
                       'usuarios_sistema AS usuarios_sistema WHERE usuarios_sistema.auth_id = AUTH_UID() AND '
                       'usuarios_sistema.activo LIMIT 1), TRUE /* Sin legajo no se bloquea a nadie: es una '
                       'instalación que todavía no */ /* corrió la migración 66, y cerrarle el paso la '
                       'dejaría inutilizable de */ /* golpe. El frente se comporta igual por la misma razón. '
                       '*/) AS _col_0) OR (NOT tickets.tecnico_id IS NULL AND tickets.tecnico_id = (SELECT '
                       'usuarios_sistema.tecnico_id AS tecnico_id FROM usuarios_sistema AS usuarios_sistema '
                       'WHERE usuarios_sistema.auth_id = AUTH_UID() AND usuarios_sistema.activo LIMIT 1)) OR '
                       '(NOT tickets.cuadrilla_id IS NULL AND tickets.cuadrilla_id IN (SELECT (SELECT '
                       'cuadrilla_miembros.cuadrilla_id AS cuadrilla_id FROM cuadrilla_miembros AS '
                       'cuadrilla_miembros WHERE cuadrilla_miembros.tecnico_id = (SELECT '
                       'usuarios_sistema.tecnico_id AS tecnico_id FROM usuarios_sistema AS usuarios_sistema '
                       'WHERE usuarios_sistema.auth_id = AUTH_UID() AND usuarios_sistema.activo LIMIT 1)) AS '
                       '_col_0)) OR tickets.client_id IN (SELECT cliente_id AS cliente_id FROM (WITH yo /* '
                       'Solo el técnico y los clientes de sus trabajos. */ /* La cobranza SALIÓ de acá a '
                       'propósito: abría la ficha completa cuando lo */ /* que hace falta es un nombre, un '
                       'teléfono y un saldo. Va por */ /* `v_cobros_por_gestionar`, más abajo. */ AS (SELECT '
                       'usuarios_sistema.id AS id, usuarios_sistema.tecnico_id AS tecnico_id FROM '
                       'usuarios_sistema AS usuarios_sistema WHERE usuarios_sistema.auth_id = AUTH_UID() AND '
                       'usuarios_sistema.activo LIMIT 1) SELECT t_fn1510.client_id AS cliente_id FROM '
                       'tickets AS t_fn1510 JOIN yo AS yo ON t_fn1510.tecnico_id = yo.tecnico_id WHERE NOT '
                       't_fn1510.client_id IS NULL UNION SELECT i_fn1510.client_id AS client_id FROM '
                       'instalaciones AS i_fn1510 JOIN yo AS yo ON i_fn1510.tecnico_id = yo.tecnico_id WHERE '
                       'NOT i_fn1510.client_id IS NULL) AS _0))',
             'insert': "((SELECT COALESCE((SELECT PG_JSON_TIENE(usuarios_sistema.permisos, '*') OR "
                       "PG_JSON_TIENE(usuarios_sistema.permisos, 'clientes.cartera') AS _col_0 FROM "
                       'usuarios_sistema AS usuarios_sistema WHERE usuarios_sistema.auth_id = AUTH_UID() AND '
                       'usuarios_sistema.activo LIMIT 1), TRUE /* Sin legajo no se bloquea a nadie: es una '
                       'instalación que todavía no */ /* corrió la migración 66, y cerrarle el paso la '
                       'dejaría inutilizable de */ /* golpe. El frente se comporta igual por la misma razón. '
                       '*/) AS _col_0) OR (NOT tickets.tecnico_id IS NULL AND tickets.tecnico_id = (SELECT '
                       'usuarios_sistema.tecnico_id AS tecnico_id FROM usuarios_sistema AS usuarios_sistema '
                       'WHERE usuarios_sistema.auth_id = AUTH_UID() AND usuarios_sistema.activo LIMIT 1)) OR '
                       '(NOT tickets.cuadrilla_id IS NULL AND tickets.cuadrilla_id IN (SELECT (SELECT '
                       'cuadrilla_miembros.cuadrilla_id AS cuadrilla_id FROM cuadrilla_miembros AS '
                       'cuadrilla_miembros WHERE cuadrilla_miembros.tecnico_id = (SELECT '
                       'usuarios_sistema.tecnico_id AS tecnico_id FROM usuarios_sistema AS usuarios_sistema '
                       'WHERE usuarios_sistema.auth_id = AUTH_UID() AND usuarios_sistema.activo LIMIT 1)) AS '
                       '_col_0)))',
             'select': "((SELECT COALESCE((SELECT PG_JSON_TIENE(usuarios_sistema.permisos, '*') OR "
                       "PG_JSON_TIENE(usuarios_sistema.permisos, 'clientes.cartera') AS _col_0 FROM "
                       'usuarios_sistema AS usuarios_sistema WHERE usuarios_sistema.auth_id = AUTH_UID() AND '
                       'usuarios_sistema.activo LIMIT 1), TRUE /* Sin legajo no se bloquea a nadie: es una '
                       'instalación que todavía no */ /* corrió la migración 66, y cerrarle el paso la '
                       'dejaría inutilizable de */ /* golpe. El frente se comporta igual por la misma razón. '
                       '*/) AS _col_0) OR (NOT tickets.tecnico_id IS NULL AND tickets.tecnico_id = (SELECT '
                       'usuarios_sistema.tecnico_id AS tecnico_id FROM usuarios_sistema AS usuarios_sistema '
                       'WHERE usuarios_sistema.auth_id = AUTH_UID() AND usuarios_sistema.activo LIMIT 1)) OR '
                       '(NOT tickets.cuadrilla_id IS NULL AND tickets.cuadrilla_id IN (SELECT (SELECT '
                       'cuadrilla_miembros.cuadrilla_id AS cuadrilla_id FROM cuadrilla_miembros AS '
                       'cuadrilla_miembros WHERE cuadrilla_miembros.tecnico_id = (SELECT '
                       'usuarios_sistema.tecnico_id AS tecnico_id FROM usuarios_sistema AS usuarios_sistema '
                       'WHERE usuarios_sistema.auth_id = AUTH_UID() AND usuarios_sistema.activo LIMIT 1)) AS '
                       '_col_0)) OR tickets.client_id IN (SELECT cliente_id AS cliente_id FROM (WITH yo /* '
                       'Solo el técnico y los clientes de sus trabajos. */ /* La cobranza SALIÓ de acá a '
                       'propósito: abría la ficha completa cuando lo */ /* que hace falta es un nombre, un '
                       'teléfono y un saldo. Va por */ /* `v_cobros_por_gestionar`, más abajo. */ AS (SELECT '
                       'usuarios_sistema.id AS id, usuarios_sistema.tecnico_id AS tecnico_id FROM '
                       'usuarios_sistema AS usuarios_sistema WHERE usuarios_sistema.auth_id = AUTH_UID() AND '
                       'usuarios_sistema.activo LIMIT 1) SELECT t_fn1492.client_id AS cliente_id FROM '
                       'tickets AS t_fn1492 JOIN yo AS yo ON t_fn1492.tecnico_id = yo.tecnico_id WHERE NOT '
                       't_fn1492.client_id IS NULL UNION SELECT i_fn1492.client_id AS client_id FROM '
                       'instalaciones AS i_fn1492 JOIN yo AS yo ON i_fn1492.tecnico_id = yo.tecnico_id WHERE '
                       'NOT i_fn1492.client_id IS NULL) AS _0))',
             'update': "((SELECT COALESCE((SELECT PG_JSON_TIENE(usuarios_sistema.permisos, '*') OR "
                       "PG_JSON_TIENE(usuarios_sistema.permisos, 'clientes.cartera') AS _col_0 FROM "
                       'usuarios_sistema AS usuarios_sistema WHERE usuarios_sistema.auth_id = AUTH_UID() AND '
                       'usuarios_sistema.activo LIMIT 1), TRUE /* Sin legajo no se bloquea a nadie: es una '
                       'instalación que todavía no */ /* corrió la migración 66, y cerrarle el paso la '
                       'dejaría inutilizable de */ /* golpe. El frente se comporta igual por la misma razón. '
                       '*/) AS _col_0) OR (NOT tickets.tecnico_id IS NULL AND tickets.tecnico_id = (SELECT '
                       'usuarios_sistema.tecnico_id AS tecnico_id FROM usuarios_sistema AS usuarios_sistema '
                       'WHERE usuarios_sistema.auth_id = AUTH_UID() AND usuarios_sistema.activo LIMIT 1)) OR '
                       '(NOT tickets.cuadrilla_id IS NULL AND tickets.cuadrilla_id IN (SELECT (SELECT '
                       'cuadrilla_miembros.cuadrilla_id AS cuadrilla_id FROM cuadrilla_miembros AS '
                       'cuadrilla_miembros WHERE cuadrilla_miembros.tecnico_id = (SELECT '
                       'usuarios_sistema.tecnico_id AS tecnico_id FROM usuarios_sistema AS usuarios_sistema '
                       'WHERE usuarios_sistema.auth_id = AUTH_UID() AND usuarios_sistema.activo LIMIT 1)) AS '
                       '_col_0)) OR tickets.client_id IN (SELECT cliente_id AS cliente_id FROM (WITH yo /* '
                       'Solo el técnico y los clientes de sus trabajos. */ /* La cobranza SALIÓ de acá a '
                       'propósito: abría la ficha completa cuando lo */ /* que hace falta es un nombre, un '
                       'teléfono y un saldo. Va por */ /* `v_cobros_por_gestionar`, más abajo. */ AS (SELECT '
                       'usuarios_sistema.id AS id, usuarios_sistema.tecnico_id AS tecnico_id FROM '
                       'usuarios_sistema AS usuarios_sistema WHERE usuarios_sistema.auth_id = AUTH_UID() AND '
                       'usuarios_sistema.activo LIMIT 1) SELECT t_fn1501.client_id AS cliente_id FROM '
                       'tickets AS t_fn1501 JOIN yo AS yo ON t_fn1501.tecnico_id = yo.tecnico_id WHERE NOT '
                       't_fn1501.client_id IS NULL UNION SELECT i_fn1501.client_id AS client_id FROM '
                       'instalaciones AS i_fn1501 JOIN yo AS yo ON i_fn1501.tecnico_id = yo.tecnico_id WHERE '
                       'NOT i_fn1501.client_id IS NULL) AS _0))',
             'update_check': "((SELECT COALESCE((SELECT PG_JSON_TIENE(usuarios_sistema.permisos, '*') OR "
                             "PG_JSON_TIENE(usuarios_sistema.permisos, 'clientes.cartera') AS _col_0 FROM "
                             'usuarios_sistema AS usuarios_sistema WHERE usuarios_sistema.auth_id = '
                             'AUTH_UID() AND usuarios_sistema.activo LIMIT 1), TRUE /* Sin legajo no se '
                             'bloquea a nadie: es una instalación que todavía no */ /* corrió la migración '
                             '66, y cerrarle el paso la dejaría inutilizable de */ /* golpe. El frente se '
                             'comporta igual por la misma razón. */) AS _col_0) OR (NOT tickets.tecnico_id '
                             'IS NULL AND tickets.tecnico_id = (SELECT usuarios_sistema.tecnico_id AS '
                             'tecnico_id FROM usuarios_sistema AS usuarios_sistema WHERE '
                             'usuarios_sistema.auth_id = AUTH_UID() AND usuarios_sistema.activo LIMIT 1)) OR '
                             '(NOT tickets.cuadrilla_id IS NULL AND tickets.cuadrilla_id IN (SELECT (SELECT '
                             'cuadrilla_miembros.cuadrilla_id AS cuadrilla_id FROM cuadrilla_miembros AS '
                             'cuadrilla_miembros WHERE cuadrilla_miembros.tecnico_id = (SELECT '
                             'usuarios_sistema.tecnico_id AS tecnico_id FROM usuarios_sistema AS '
                             'usuarios_sistema WHERE usuarios_sistema.auth_id = AUTH_UID() AND '
                             'usuarios_sistema.activo LIMIT 1)) AS _col_0)))'},
 'tipos_ont': {'delete': None, 'insert': None, 'select': None, 'update': None, 'update_check': None},
 'traslados': {'delete': "((SELECT COALESCE((SELECT PG_JSON_TIENE(usuarios_sistema.permisos, '*') OR "
                         "PG_JSON_TIENE(usuarios_sistema.permisos, 'clientes.cartera') AS _col_0 FROM "
                         'usuarios_sistema AS usuarios_sistema WHERE usuarios_sistema.auth_id = AUTH_UID() '
                         'AND usuarios_sistema.activo LIMIT 1), TRUE /* Sin legajo no se bloquea a nadie: es '
                         'una instalación que todavía no */ /* corrió la migración 66, y cerrarle el paso la '
                         'dejaría inutilizable de */ /* golpe. El frente se comporta igual por la misma '
                         'razón. */) AS _col_0))',
               'insert': "((SELECT COALESCE((SELECT PG_JSON_TIENE(usuarios_sistema.permisos, '*') OR "
                         "PG_JSON_TIENE(usuarios_sistema.permisos, 'clientes.cartera') AS _col_0 FROM "
                         'usuarios_sistema AS usuarios_sistema WHERE usuarios_sistema.auth_id = AUTH_UID() '
                         'AND usuarios_sistema.activo LIMIT 1), TRUE /* Sin legajo no se bloquea a nadie: es '
                         'una instalación que todavía no */ /* corrió la migración 66, y cerrarle el paso la '
                         'dejaría inutilizable de */ /* golpe. El frente se comporta igual por la misma '
                         'razón. */) AS _col_0))',
               'select': "((SELECT COALESCE((SELECT PG_JSON_TIENE(usuarios_sistema.permisos, '*') OR "
                         "PG_JSON_TIENE(usuarios_sistema.permisos, 'clientes.cartera') AS _col_0 FROM "
                         'usuarios_sistema AS usuarios_sistema WHERE usuarios_sistema.auth_id = AUTH_UID() '
                         'AND usuarios_sistema.activo LIMIT 1), TRUE /* Sin legajo no se bloquea a nadie: es '
                         'una instalación que todavía no */ /* corrió la migración 66, y cerrarle el paso la '
                         'dejaría inutilizable de */ /* golpe. El frente se comporta igual por la misma '
                         'razón. */) AS _col_0) OR traslados.tecnico_id = (SELECT '
                         'usuarios_sistema.tecnico_id AS tecnico_id FROM usuarios_sistema AS '
                         'usuarios_sistema WHERE usuarios_sistema.auth_id = AUTH_UID() AND '
                         'usuarios_sistema.activo LIMIT 1)) OR ((SELECT COALESCE((SELECT '
                         "PG_JSON_TIENE(usuarios_sistema.permisos, '*') OR "
                         "PG_JSON_TIENE(usuarios_sistema.permisos, 'clientes.cartera') AS _col_0 FROM "
                         'usuarios_sistema AS usuarios_sistema WHERE usuarios_sistema.auth_id = AUTH_UID() '
                         'AND usuarios_sistema.activo LIMIT 1), TRUE /* Sin legajo no se bloquea a nadie: es '
                         'una instalación que todavía no */ /* corrió la migración 66, y cerrarle el paso la '
                         'dejaría inutilizable de */ /* golpe. El frente se comporta igual por la misma '
                         'razón. */) AS _col_0))',
               'update': "((SELECT COALESCE((SELECT PG_JSON_TIENE(usuarios_sistema.permisos, '*') OR "
                         "PG_JSON_TIENE(usuarios_sistema.permisos, 'clientes.cartera') AS _col_0 FROM "
                         'usuarios_sistema AS usuarios_sistema WHERE usuarios_sistema.auth_id = AUTH_UID() '
                         'AND usuarios_sistema.activo LIMIT 1), TRUE /* Sin legajo no se bloquea a nadie: es '
                         'una instalación que todavía no */ /* corrió la migración 66, y cerrarle el paso la '
                         'dejaría inutilizable de */ /* golpe. El frente se comporta igual por la misma '
                         'razón. */) AS _col_0))',
               'update_check': "((SELECT COALESCE((SELECT PG_JSON_TIENE(usuarios_sistema.permisos, '*') OR "
                               "PG_JSON_TIENE(usuarios_sistema.permisos, 'clientes.cartera') AS _col_0 FROM "
                               'usuarios_sistema AS usuarios_sistema WHERE usuarios_sistema.auth_id = '
                               'AUTH_UID() AND usuarios_sistema.activo LIMIT 1), TRUE /* Sin legajo no se '
                               'bloquea a nadie: es una instalación que todavía no */ /* corrió la migración '
                               '66, y cerrarle el paso la dejaría inutilizable de */ /* golpe. El frente se '
                               'comporta igual por la misma razón. */) AS _col_0))'},
 'usuario_dispositivos': {'delete': '0',
                          'insert': '0',
                          'select': "((SELECT COALESCE((SELECT PG_JSON_TIENE(usuarios_sistema.permisos, '*') "
                                    "OR PG_JSON_TIENE(usuarios_sistema.permisos, 'clientes.cartera') AS "
                                    '_col_0 FROM usuarios_sistema AS usuarios_sistema WHERE '
                                    'usuarios_sistema.auth_id = AUTH_UID() AND usuarios_sistema.activo LIMIT '
                                    '1), TRUE /* Sin legajo no se bloquea a nadie: es una instalación que '
                                    'todavía no */ /* corrió la migración 66, y cerrarle el paso la dejaría '
                                    'inutilizable de */ /* golpe. El frente se comporta igual por la misma '
                                    'razón. */) AS _col_0) OR usuario_dispositivos.usuario_id = (SELECT '
                                    'usuarios_sistema.id AS id FROM usuarios_sistema AS usuarios_sistema '
                                    'WHERE usuarios_sistema.auth_id = AUTH_UID() AND usuarios_sistema.activo '
                                    'LIMIT 1))',
                          'update': '0',
                          'update_check': '0'},
 'usuarios_sistema': {'delete': '0', 'insert': '0', 'select': None, 'update': '0', 'update_check': '0'},
 'vehiculos': {'delete': "((SELECT COALESCE((SELECT PG_JSON_TIENE(usuarios_sistema.permisos, '*') OR "
                         "PG_JSON_TIENE(usuarios_sistema.permisos, 'clientes.cartera') AS _col_0 FROM "
                         'usuarios_sistema AS usuarios_sistema WHERE usuarios_sistema.auth_id = AUTH_UID() '
                         'AND usuarios_sistema.activo LIMIT 1), TRUE /* Sin legajo no se bloquea a nadie: es '
                         'una instalación que todavía no */ /* corrió la migración 66, y cerrarle el paso la '
                         'dejaría inutilizable de */ /* golpe. El frente se comporta igual por la misma '
                         'razón. */) AS _col_0))',
               'insert': "((SELECT COALESCE((SELECT PG_JSON_TIENE(usuarios_sistema.permisos, '*') OR "
                         "PG_JSON_TIENE(usuarios_sistema.permisos, 'clientes.cartera') AS _col_0 FROM "
                         'usuarios_sistema AS usuarios_sistema WHERE usuarios_sistema.auth_id = AUTH_UID() '
                         'AND usuarios_sistema.activo LIMIT 1), TRUE /* Sin legajo no se bloquea a nadie: es '
                         'una instalación que todavía no */ /* corrió la migración 66, y cerrarle el paso la '
                         'dejaría inutilizable de */ /* golpe. El frente se comporta igual por la misma '
                         'razón. */) AS _col_0))',
               'select': None,
               'update': "((SELECT COALESCE((SELECT PG_JSON_TIENE(usuarios_sistema.permisos, '*') OR "
                         "PG_JSON_TIENE(usuarios_sistema.permisos, 'clientes.cartera') AS _col_0 FROM "
                         'usuarios_sistema AS usuarios_sistema WHERE usuarios_sistema.auth_id = AUTH_UID() '
                         'AND usuarios_sistema.activo LIMIT 1), TRUE /* Sin legajo no se bloquea a nadie: es '
                         'una instalación que todavía no */ /* corrió la migración 66, y cerrarle el paso la '
                         'dejaría inutilizable de */ /* golpe. El frente se comporta igual por la misma '
                         'razón. */) AS _col_0))',
               'update_check': "((SELECT COALESCE((SELECT PG_JSON_TIENE(usuarios_sistema.permisos, '*') OR "
                               "PG_JSON_TIENE(usuarios_sistema.permisos, 'clientes.cartera') AS _col_0 FROM "
                               'usuarios_sistema AS usuarios_sistema WHERE usuarios_sistema.auth_id = '
                               'AUTH_UID() AND usuarios_sistema.activo LIMIT 1), TRUE /* Sin legajo no se '
                               'bloquea a nadie: es una instalación que todavía no */ /* corrió la migración '
                               '66, y cerrarle el paso la dejaría inutilizable de */ /* golpe. El frente se '
                               'comporta igual por la misma razón. */) AS _col_0))'},
 'ventanas_whatsapp': {'delete': '0', 'insert': '0', 'select': None, 'update': '0', 'update_check': '0'},
 'verificaciones_cobertura': {'delete': '((SELECT COALESCE((SELECT PG_JSON_TIENE(usuarios_sistema.permisos, '
                                        "'*') OR PG_JSON_TIENE(usuarios_sistema.permisos, "
                                        "'clientes.cartera') AS _col_0 FROM usuarios_sistema AS "
                                        'usuarios_sistema WHERE usuarios_sistema.auth_id = AUTH_UID() AND '
                                        'usuarios_sistema.activo LIMIT 1), TRUE /* Sin legajo no se bloquea '
                                        'a nadie: es una instalación que todavía no */ /* corrió la '
                                        'migración 66, y cerrarle el paso la dejaría inutilizable de */ /* '
                                        'golpe. El frente se comporta igual por la misma razón. */) AS '
                                        '_col_0) OR (SELECT COALESCE((SELECT '
                                        "PG_JSON_TIENE(usuarios_sistema.permisos, '*') OR "
                                        "PG_JSON_TIENE(usuarios_sistema.permisos, 'ventas.equipo') AS _col_0 "
                                        'FROM usuarios_sistema AS usuarios_sistema WHERE '
                                        'usuarios_sistema.auth_id = AUTH_UID() AND usuarios_sistema.activo '
                                        'LIMIT 1), TRUE /* Sin legajo se permite, igual que el resto de los '
                                        'ayudantes: una */ /* instalación sin la migración 66 no puede '
                                        'quedarse sin módulo comercial. */) AS _col_0) OR '
                                        'verificaciones_cobertura.verificado_por = (SELECT '
                                        'usuarios_sistema.id AS id FROM usuarios_sistema AS usuarios_sistema '
                                        'WHERE usuarios_sistema.auth_id = AUTH_UID() AND '
                                        'usuarios_sistema.activo LIMIT 1) OR '
                                        'verificaciones_cobertura.prospecto_id IN (SELECT prospectos.id AS '
                                        'id FROM (SELECT prospectos.id AS id, '
                                        'PG_DESCIFRAR(prospectos.nombre) AS nombre, '
                                        'PG_DESCIFRAR(prospectos.identificacion) AS identificacion, '
                                        'PG_DESCIFRAR(prospectos.telefono) AS telefono, '
                                        'PG_DESCIFRAR(prospectos.telefono_whatsapp) AS telefono_whatsapp, '
                                        'PG_DESCIFRAR(prospectos.email) AS email, '
                                        'PG_DESCIFRAR(prospectos.direccion) AS direccion, '
                                        'PG_DESCIFRAR(prospectos.referencia) AS referencia, '
                                        'prospectos.sector AS sector, prospectos.canton AS canton, '
                                        'prospectos.latitud AS latitud, prospectos.longitud AS longitud, '
                                        'prospectos.plan_id AS plan_id, prospectos.origen AS origen, '
                                        'prospectos.estado AS estado, prospectos.motivo_perdida AS '
                                        'motivo_perdida, prospectos.vendedor_id AS vendedor_id, '
                                        'prospectos.cobertura AS cobertura, prospectos.nap_id AS nap_id, '
                                        'prospectos.distancia_nodo_m AS distancia_nodo_m, '
                                        'prospectos.proxima_accion AS proxima_accion, '
                                        'prospectos.instalacion_id AS instalacion_id, prospectos.cliente_id '
                                        'AS cliente_id, prospectos.notas AS notas, prospectos.creado_por AS '
                                        'creado_por, prospectos.creado_en AS creado_en, '
                                        'prospectos.actualizado_en AS actualizado_en, '
                                        'prospectos.archivado_en AS archivado_en, prospectos.ganado_en AS '
                                        'ganado_en, prospectos.promocion_id AS promocion_id, '
                                        'prospectos.tipo_operacion AS tipo_operacion FROM prospectos AS '
                                        'prospectos WHERE NOT RLS_ACTIVA() OR (((SELECT COALESCE((SELECT '
                                        "PG_JSON_TIENE(usuarios_sistema.permisos, '*') OR "
                                        "PG_JSON_TIENE(usuarios_sistema.permisos, 'clientes.cartera') AS "
                                        '_col_0 FROM usuarios_sistema AS usuarios_sistema WHERE '
                                        'usuarios_sistema.auth_id = AUTH_UID() AND usuarios_sistema.activo '
                                        'LIMIT 1), TRUE /* Sin legajo no se bloquea a nadie: es una '
                                        'instalación que todavía no */ /* corrió la migración 66, y cerrarle '
                                        'el paso la dejaría inutilizable de */ /* golpe. El frente se '
                                        'comporta igual por la misma razón. */) AS _col_0) OR '
                                        '(prospectos.archivado_en IS NULL AND ((SELECT COALESCE((SELECT '
                                        "PG_JSON_TIENE(usuarios_sistema.permisos, '*') OR "
                                        "PG_JSON_TIENE(usuarios_sistema.permisos, 'ventas.equipo') AS _col_0 "
                                        'FROM usuarios_sistema AS usuarios_sistema WHERE '
                                        'usuarios_sistema.auth_id = AUTH_UID() AND usuarios_sistema.activo '
                                        'LIMIT 1), TRUE /* Sin legajo se permite, igual que el resto de los '
                                        'ayudantes: una */ /* instalación sin la migración 66 no puede '
                                        'quedarse sin módulo comercial. */) AS _col_0) OR '
                                        'prospectos.vendedor_id = (SELECT usuarios_sistema.id AS id FROM '
                                        'usuarios_sistema AS usuarios_sistema WHERE usuarios_sistema.auth_id '
                                        '= AUTH_UID() AND usuarios_sistema.activo LIMIT 1) OR '
                                        'prospectos.creado_por = (SELECT usuarios_sistema.id AS id FROM '
                                        'usuarios_sistema AS usuarios_sistema WHERE usuarios_sistema.auth_id '
                                        '= AUTH_UID() AND usuarios_sistema.activo LIMIT 1)))) OR ((SELECT '
                                        "COALESCE((SELECT PG_JSON_TIENE(usuarios_sistema.permisos, '*') OR "
                                        "PG_JSON_TIENE(usuarios_sistema.permisos, 'clientes.cartera') AS "
                                        '_col_0 FROM usuarios_sistema AS usuarios_sistema WHERE '
                                        'usuarios_sistema.auth_id = AUTH_UID() AND usuarios_sistema.activo '
                                        'LIMIT 1), TRUE /* Sin legajo no se bloquea a nadie: es una '
                                        'instalación que todavía no */ /* corrió la migración 66, y cerrarle '
                                        'el paso la dejaría inutilizable de */ /* golpe. El frente se '
                                        'comporta igual por la misma razón. */) AS _col_0) OR '
                                        '(prospectos.archivado_en IS NULL AND ((SELECT COALESCE((SELECT '
                                        "PG_JSON_TIENE(usuarios_sistema.permisos, '*') OR "
                                        "PG_JSON_TIENE(usuarios_sistema.permisos, 'ventas.equipo') AS _col_0 "
                                        'FROM usuarios_sistema AS usuarios_sistema WHERE '
                                        'usuarios_sistema.auth_id = AUTH_UID() AND usuarios_sistema.activo '
                                        'LIMIT 1), TRUE /* Sin legajo se permite, igual que el resto de los '
                                        'ayudantes: una */ /* instalación sin la migración 66 no puede '
                                        'quedarse sin módulo comercial. */) AS _col_0) OR '
                                        'prospectos.vendedor_id = (SELECT usuarios_sistema.id AS id FROM '
                                        'usuarios_sistema AS usuarios_sistema WHERE usuarios_sistema.auth_id '
                                        '= AUTH_UID() AND usuarios_sistema.activo LIMIT 1) OR '
                                        'prospectos.creado_por = (SELECT usuarios_sistema.id AS id FROM '
                                        'usuarios_sistema AS usuarios_sistema WHERE usuarios_sistema.auth_id '
                                        '= AUTH_UID() AND usuarios_sistema.activo LIMIT 1)))))) AS '
                                        'prospectos))',
                              'insert': '((SELECT COALESCE((SELECT PG_JSON_TIENE(usuarios_sistema.permisos, '
                                        "'*') OR PG_JSON_TIENE(usuarios_sistema.permisos, "
                                        "'clientes.cartera') AS _col_0 FROM usuarios_sistema AS "
                                        'usuarios_sistema WHERE usuarios_sistema.auth_id = AUTH_UID() AND '
                                        'usuarios_sistema.activo LIMIT 1), TRUE /* Sin legajo no se bloquea '
                                        'a nadie: es una instalación que todavía no */ /* corrió la '
                                        'migración 66, y cerrarle el paso la dejaría inutilizable de */ /* '
                                        'golpe. El frente se comporta igual por la misma razón. */) AS '
                                        '_col_0) OR (SELECT COALESCE((SELECT '
                                        "PG_JSON_TIENE(usuarios_sistema.permisos, '*') OR "
                                        "PG_JSON_TIENE(usuarios_sistema.permisos, 'ventas.equipo') AS _col_0 "
                                        'FROM usuarios_sistema AS usuarios_sistema WHERE '
                                        'usuarios_sistema.auth_id = AUTH_UID() AND usuarios_sistema.activo '
                                        'LIMIT 1), TRUE /* Sin legajo se permite, igual que el resto de los '
                                        'ayudantes: una */ /* instalación sin la migración 66 no puede '
                                        'quedarse sin módulo comercial. */) AS _col_0) OR '
                                        'verificaciones_cobertura.verificado_por = (SELECT '
                                        'usuarios_sistema.id AS id FROM usuarios_sistema AS usuarios_sistema '
                                        'WHERE usuarios_sistema.auth_id = AUTH_UID() AND '
                                        'usuarios_sistema.activo LIMIT 1))',
                              'select': '((SELECT COALESCE((SELECT PG_JSON_TIENE(usuarios_sistema.permisos, '
                                        "'*') OR PG_JSON_TIENE(usuarios_sistema.permisos, "
                                        "'clientes.cartera') AS _col_0 FROM usuarios_sistema AS "
                                        'usuarios_sistema WHERE usuarios_sistema.auth_id = AUTH_UID() AND '
                                        'usuarios_sistema.activo LIMIT 1), TRUE /* Sin legajo no se bloquea '
                                        'a nadie: es una instalación que todavía no */ /* corrió la '
                                        'migración 66, y cerrarle el paso la dejaría inutilizable de */ /* '
                                        'golpe. El frente se comporta igual por la misma razón. */) AS '
                                        '_col_0) OR (SELECT COALESCE((SELECT '
                                        "PG_JSON_TIENE(usuarios_sistema.permisos, '*') OR "
                                        "PG_JSON_TIENE(usuarios_sistema.permisos, 'ventas.equipo') AS _col_0 "
                                        'FROM usuarios_sistema AS usuarios_sistema WHERE '
                                        'usuarios_sistema.auth_id = AUTH_UID() AND usuarios_sistema.activo '
                                        'LIMIT 1), TRUE /* Sin legajo se permite, igual que el resto de los '
                                        'ayudantes: una */ /* instalación sin la migración 66 no puede '
                                        'quedarse sin módulo comercial. */) AS _col_0) OR '
                                        'verificaciones_cobertura.verificado_por = (SELECT '
                                        'usuarios_sistema.id AS id FROM usuarios_sistema AS usuarios_sistema '
                                        'WHERE usuarios_sistema.auth_id = AUTH_UID() AND '
                                        'usuarios_sistema.activo LIMIT 1) OR '
                                        'verificaciones_cobertura.prospecto_id IN (SELECT prospectos.id AS '
                                        'id FROM (SELECT prospectos.id AS id, '
                                        'PG_DESCIFRAR(prospectos.nombre) AS nombre, '
                                        'PG_DESCIFRAR(prospectos.identificacion) AS identificacion, '
                                        'PG_DESCIFRAR(prospectos.telefono) AS telefono, '
                                        'PG_DESCIFRAR(prospectos.telefono_whatsapp) AS telefono_whatsapp, '
                                        'PG_DESCIFRAR(prospectos.email) AS email, '
                                        'PG_DESCIFRAR(prospectos.direccion) AS direccion, '
                                        'PG_DESCIFRAR(prospectos.referencia) AS referencia, '
                                        'prospectos.sector AS sector, prospectos.canton AS canton, '
                                        'prospectos.latitud AS latitud, prospectos.longitud AS longitud, '
                                        'prospectos.plan_id AS plan_id, prospectos.origen AS origen, '
                                        'prospectos.estado AS estado, prospectos.motivo_perdida AS '
                                        'motivo_perdida, prospectos.vendedor_id AS vendedor_id, '
                                        'prospectos.cobertura AS cobertura, prospectos.nap_id AS nap_id, '
                                        'prospectos.distancia_nodo_m AS distancia_nodo_m, '
                                        'prospectos.proxima_accion AS proxima_accion, '
                                        'prospectos.instalacion_id AS instalacion_id, prospectos.cliente_id '
                                        'AS cliente_id, prospectos.notas AS notas, prospectos.creado_por AS '
                                        'creado_por, prospectos.creado_en AS creado_en, '
                                        'prospectos.actualizado_en AS actualizado_en, '
                                        'prospectos.archivado_en AS archivado_en, prospectos.ganado_en AS '
                                        'ganado_en, prospectos.promocion_id AS promocion_id, '
                                        'prospectos.tipo_operacion AS tipo_operacion FROM prospectos AS '
                                        'prospectos WHERE NOT RLS_ACTIVA() OR (((SELECT COALESCE((SELECT '
                                        "PG_JSON_TIENE(usuarios_sistema.permisos, '*') OR "
                                        "PG_JSON_TIENE(usuarios_sistema.permisos, 'clientes.cartera') AS "
                                        '_col_0 FROM usuarios_sistema AS usuarios_sistema WHERE '
                                        'usuarios_sistema.auth_id = AUTH_UID() AND usuarios_sistema.activo '
                                        'LIMIT 1), TRUE /* Sin legajo no se bloquea a nadie: es una '
                                        'instalación que todavía no */ /* corrió la migración 66, y cerrarle '
                                        'el paso la dejaría inutilizable de */ /* golpe. El frente se '
                                        'comporta igual por la misma razón. */) AS _col_0) OR '
                                        '(prospectos.archivado_en IS NULL AND ((SELECT COALESCE((SELECT '
                                        "PG_JSON_TIENE(usuarios_sistema.permisos, '*') OR "
                                        "PG_JSON_TIENE(usuarios_sistema.permisos, 'ventas.equipo') AS _col_0 "
                                        'FROM usuarios_sistema AS usuarios_sistema WHERE '
                                        'usuarios_sistema.auth_id = AUTH_UID() AND usuarios_sistema.activo '
                                        'LIMIT 1), TRUE /* Sin legajo se permite, igual que el resto de los '
                                        'ayudantes: una */ /* instalación sin la migración 66 no puede '
                                        'quedarse sin módulo comercial. */) AS _col_0) OR '
                                        'prospectos.vendedor_id = (SELECT usuarios_sistema.id AS id FROM '
                                        'usuarios_sistema AS usuarios_sistema WHERE usuarios_sistema.auth_id '
                                        '= AUTH_UID() AND usuarios_sistema.activo LIMIT 1) OR '
                                        'prospectos.creado_por = (SELECT usuarios_sistema.id AS id FROM '
                                        'usuarios_sistema AS usuarios_sistema WHERE usuarios_sistema.auth_id '
                                        '= AUTH_UID() AND usuarios_sistema.activo LIMIT 1)))) OR ((SELECT '
                                        "COALESCE((SELECT PG_JSON_TIENE(usuarios_sistema.permisos, '*') OR "
                                        "PG_JSON_TIENE(usuarios_sistema.permisos, 'clientes.cartera') AS "
                                        '_col_0 FROM usuarios_sistema AS usuarios_sistema WHERE '
                                        'usuarios_sistema.auth_id = AUTH_UID() AND usuarios_sistema.activo '
                                        'LIMIT 1), TRUE /* Sin legajo no se bloquea a nadie: es una '
                                        'instalación que todavía no */ /* corrió la migración 66, y cerrarle '
                                        'el paso la dejaría inutilizable de */ /* golpe. El frente se '
                                        'comporta igual por la misma razón. */) AS _col_0) OR '
                                        '(prospectos.archivado_en IS NULL AND ((SELECT COALESCE((SELECT '
                                        "PG_JSON_TIENE(usuarios_sistema.permisos, '*') OR "
                                        "PG_JSON_TIENE(usuarios_sistema.permisos, 'ventas.equipo') AS _col_0 "
                                        'FROM usuarios_sistema AS usuarios_sistema WHERE '
                                        'usuarios_sistema.auth_id = AUTH_UID() AND usuarios_sistema.activo '
                                        'LIMIT 1), TRUE /* Sin legajo se permite, igual que el resto de los '
                                        'ayudantes: una */ /* instalación sin la migración 66 no puede '
                                        'quedarse sin módulo comercial. */) AS _col_0) OR '
                                        'prospectos.vendedor_id = (SELECT usuarios_sistema.id AS id FROM '
                                        'usuarios_sistema AS usuarios_sistema WHERE usuarios_sistema.auth_id '
                                        '= AUTH_UID() AND usuarios_sistema.activo LIMIT 1) OR '
                                        'prospectos.creado_por = (SELECT usuarios_sistema.id AS id FROM '
                                        'usuarios_sistema AS usuarios_sistema WHERE usuarios_sistema.auth_id '
                                        '= AUTH_UID() AND usuarios_sistema.activo LIMIT 1)))))) AS '
                                        'prospectos))',
                              'update': '((SELECT COALESCE((SELECT PG_JSON_TIENE(usuarios_sistema.permisos, '
                                        "'*') OR PG_JSON_TIENE(usuarios_sistema.permisos, "
                                        "'clientes.cartera') AS _col_0 FROM usuarios_sistema AS "
                                        'usuarios_sistema WHERE usuarios_sistema.auth_id = AUTH_UID() AND '
                                        'usuarios_sistema.activo LIMIT 1), TRUE /* Sin legajo no se bloquea '
                                        'a nadie: es una instalación que todavía no */ /* corrió la '
                                        'migración 66, y cerrarle el paso la dejaría inutilizable de */ /* '
                                        'golpe. El frente se comporta igual por la misma razón. */) AS '
                                        '_col_0) OR (SELECT COALESCE((SELECT '
                                        "PG_JSON_TIENE(usuarios_sistema.permisos, '*') OR "
                                        "PG_JSON_TIENE(usuarios_sistema.permisos, 'ventas.equipo') AS _col_0 "
                                        'FROM usuarios_sistema AS usuarios_sistema WHERE '
                                        'usuarios_sistema.auth_id = AUTH_UID() AND usuarios_sistema.activo '
                                        'LIMIT 1), TRUE /* Sin legajo se permite, igual que el resto de los '
                                        'ayudantes: una */ /* instalación sin la migración 66 no puede '
                                        'quedarse sin módulo comercial. */) AS _col_0) OR '
                                        'verificaciones_cobertura.verificado_por = (SELECT '
                                        'usuarios_sistema.id AS id FROM usuarios_sistema AS usuarios_sistema '
                                        'WHERE usuarios_sistema.auth_id = AUTH_UID() AND '
                                        'usuarios_sistema.activo LIMIT 1) OR '
                                        'verificaciones_cobertura.prospecto_id IN (SELECT prospectos.id AS '
                                        'id FROM (SELECT prospectos.id AS id, '
                                        'PG_DESCIFRAR(prospectos.nombre) AS nombre, '
                                        'PG_DESCIFRAR(prospectos.identificacion) AS identificacion, '
                                        'PG_DESCIFRAR(prospectos.telefono) AS telefono, '
                                        'PG_DESCIFRAR(prospectos.telefono_whatsapp) AS telefono_whatsapp, '
                                        'PG_DESCIFRAR(prospectos.email) AS email, '
                                        'PG_DESCIFRAR(prospectos.direccion) AS direccion, '
                                        'PG_DESCIFRAR(prospectos.referencia) AS referencia, '
                                        'prospectos.sector AS sector, prospectos.canton AS canton, '
                                        'prospectos.latitud AS latitud, prospectos.longitud AS longitud, '
                                        'prospectos.plan_id AS plan_id, prospectos.origen AS origen, '
                                        'prospectos.estado AS estado, prospectos.motivo_perdida AS '
                                        'motivo_perdida, prospectos.vendedor_id AS vendedor_id, '
                                        'prospectos.cobertura AS cobertura, prospectos.nap_id AS nap_id, '
                                        'prospectos.distancia_nodo_m AS distancia_nodo_m, '
                                        'prospectos.proxima_accion AS proxima_accion, '
                                        'prospectos.instalacion_id AS instalacion_id, prospectos.cliente_id '
                                        'AS cliente_id, prospectos.notas AS notas, prospectos.creado_por AS '
                                        'creado_por, prospectos.creado_en AS creado_en, '
                                        'prospectos.actualizado_en AS actualizado_en, '
                                        'prospectos.archivado_en AS archivado_en, prospectos.ganado_en AS '
                                        'ganado_en, prospectos.promocion_id AS promocion_id, '
                                        'prospectos.tipo_operacion AS tipo_operacion FROM prospectos AS '
                                        'prospectos WHERE NOT RLS_ACTIVA() OR (((SELECT COALESCE((SELECT '
                                        "PG_JSON_TIENE(usuarios_sistema.permisos, '*') OR "
                                        "PG_JSON_TIENE(usuarios_sistema.permisos, 'clientes.cartera') AS "
                                        '_col_0 FROM usuarios_sistema AS usuarios_sistema WHERE '
                                        'usuarios_sistema.auth_id = AUTH_UID() AND usuarios_sistema.activo '
                                        'LIMIT 1), TRUE /* Sin legajo no se bloquea a nadie: es una '
                                        'instalación que todavía no */ /* corrió la migración 66, y cerrarle '
                                        'el paso la dejaría inutilizable de */ /* golpe. El frente se '
                                        'comporta igual por la misma razón. */) AS _col_0) OR '
                                        '(prospectos.archivado_en IS NULL AND ((SELECT COALESCE((SELECT '
                                        "PG_JSON_TIENE(usuarios_sistema.permisos, '*') OR "
                                        "PG_JSON_TIENE(usuarios_sistema.permisos, 'ventas.equipo') AS _col_0 "
                                        'FROM usuarios_sistema AS usuarios_sistema WHERE '
                                        'usuarios_sistema.auth_id = AUTH_UID() AND usuarios_sistema.activo '
                                        'LIMIT 1), TRUE /* Sin legajo se permite, igual que el resto de los '
                                        'ayudantes: una */ /* instalación sin la migración 66 no puede '
                                        'quedarse sin módulo comercial. */) AS _col_0) OR '
                                        'prospectos.vendedor_id = (SELECT usuarios_sistema.id AS id FROM '
                                        'usuarios_sistema AS usuarios_sistema WHERE usuarios_sistema.auth_id '
                                        '= AUTH_UID() AND usuarios_sistema.activo LIMIT 1) OR '
                                        'prospectos.creado_por = (SELECT usuarios_sistema.id AS id FROM '
                                        'usuarios_sistema AS usuarios_sistema WHERE usuarios_sistema.auth_id '
                                        '= AUTH_UID() AND usuarios_sistema.activo LIMIT 1)))) OR ((SELECT '
                                        "COALESCE((SELECT PG_JSON_TIENE(usuarios_sistema.permisos, '*') OR "
                                        "PG_JSON_TIENE(usuarios_sistema.permisos, 'clientes.cartera') AS "
                                        '_col_0 FROM usuarios_sistema AS usuarios_sistema WHERE '
                                        'usuarios_sistema.auth_id = AUTH_UID() AND usuarios_sistema.activo '
                                        'LIMIT 1), TRUE /* Sin legajo no se bloquea a nadie: es una '
                                        'instalación que todavía no */ /* corrió la migración 66, y cerrarle '
                                        'el paso la dejaría inutilizable de */ /* golpe. El frente se '
                                        'comporta igual por la misma razón. */) AS _col_0) OR '
                                        '(prospectos.archivado_en IS NULL AND ((SELECT COALESCE((SELECT '
                                        "PG_JSON_TIENE(usuarios_sistema.permisos, '*') OR "
                                        "PG_JSON_TIENE(usuarios_sistema.permisos, 'ventas.equipo') AS _col_0 "
                                        'FROM usuarios_sistema AS usuarios_sistema WHERE '
                                        'usuarios_sistema.auth_id = AUTH_UID() AND usuarios_sistema.activo '
                                        'LIMIT 1), TRUE /* Sin legajo se permite, igual que el resto de los '
                                        'ayudantes: una */ /* instalación sin la migración 66 no puede '
                                        'quedarse sin módulo comercial. */) AS _col_0) OR '
                                        'prospectos.vendedor_id = (SELECT usuarios_sistema.id AS id FROM '
                                        'usuarios_sistema AS usuarios_sistema WHERE usuarios_sistema.auth_id '
                                        '= AUTH_UID() AND usuarios_sistema.activo LIMIT 1) OR '
                                        'prospectos.creado_por = (SELECT usuarios_sistema.id AS id FROM '
                                        'usuarios_sistema AS usuarios_sistema WHERE usuarios_sistema.auth_id '
                                        '= AUTH_UID() AND usuarios_sistema.activo LIMIT 1)))))) AS '
                                        'prospectos))',
                              'update_check': '((SELECT COALESCE((SELECT '
                                              "PG_JSON_TIENE(usuarios_sistema.permisos, '*') OR "
                                              "PG_JSON_TIENE(usuarios_sistema.permisos, 'clientes.cartera') "
                                              'AS _col_0 FROM usuarios_sistema AS usuarios_sistema WHERE '
                                              'usuarios_sistema.auth_id = AUTH_UID() AND '
                                              'usuarios_sistema.activo LIMIT 1), TRUE /* Sin legajo no se '
                                              'bloquea a nadie: es una instalación que todavía no */ /* '
                                              'corrió la migración 66, y cerrarle el paso la dejaría '
                                              'inutilizable de */ /* golpe. El frente se comporta igual por '
                                              'la misma razón. */) AS _col_0) OR (SELECT COALESCE((SELECT '
                                              "PG_JSON_TIENE(usuarios_sistema.permisos, '*') OR "
                                              "PG_JSON_TIENE(usuarios_sistema.permisos, 'ventas.equipo') AS "
                                              '_col_0 FROM usuarios_sistema AS usuarios_sistema WHERE '
                                              'usuarios_sistema.auth_id = AUTH_UID() AND '
                                              'usuarios_sistema.activo LIMIT 1), TRUE /* Sin legajo se '
                                              'permite, igual que el resto de los ayudantes: una */ /* '
                                              'instalación sin la migración 66 no puede quedarse sin módulo '
                                              'comercial. */) AS _col_0) OR '
                                              'verificaciones_cobertura.verificado_por = (SELECT '
                                              'usuarios_sistema.id AS id FROM usuarios_sistema AS '
                                              'usuarios_sistema WHERE usuarios_sistema.auth_id = AUTH_UID() '
                                              'AND usuarios_sistema.activo LIMIT 1))'},
 'visitas_fallidas': {'delete': '0',
                      'insert': '0',
                      'select': '((SELECT (SELECT EXISTS(SELECT 1 AS "1" FROM usuarios_sistema AS '
                                'usuarios_sistema WHERE usuarios_sistema.auth_id = AUTH_UID() AND '
                                "usuarios_sistema.activo AND usuarios_sistema.rol IN ('super_admin', "
                                '\'admin\', \'jefe_tecnico\')) AS _col_0) OR EXISTS(SELECT 1 AS "1" FROM '
                                'usuarios_sistema AS usuarios_sistema WHERE usuarios_sistema.auth_id = '
                                'AUTH_UID() AND usuarios_sistema.activo AND '
                                "(PG_JSON_TIENE(usuarios_sistema.permisos, '*') OR "
                                "PG_JSON_TIENE(usuarios_sistema.permisos, 'soporte.ruta'))) AS _col_0) OR "
                                "(SELECT COALESCE((SELECT PG_JSON_TIENE(usuarios_sistema.permisos, '*') OR "
                                "PG_JSON_TIENE(usuarios_sistema.permisos, 'clientes.cartera') AS _col_0 FROM "
                                'usuarios_sistema AS usuarios_sistema WHERE usuarios_sistema.auth_id = '
                                'AUTH_UID() AND usuarios_sistema.activo LIMIT 1), TRUE /* Sin legajo no se '
                                'bloquea a nadie: es una instalación que todavía no */ /* corrió la '
                                'migración 66, y cerrarle el paso la dejaría inutilizable de */ /* golpe. El '
                                'frente se comporta igual por la misma razón. */) AS _col_0) OR '
                                'visitas_fallidas.tecnico_id = (SELECT usuarios_sistema.tecnico_id AS '
                                'tecnico_id FROM usuarios_sistema AS usuarios_sistema WHERE '
                                'usuarios_sistema.auth_id = AUTH_UID() AND usuarios_sistema.activo LIMIT 1) '
                                'OR visitas_fallidas.ticket_id IN (SELECT tickets.id AS id FROM (SELECT '
                                'tickets.id AS id, tickets.numero AS numero, tickets.client_id AS client_id, '
                                'PG_DESCIFRAR(tickets.identificacion) AS identificacion, '
                                'PG_DESCIFRAR(tickets.nombre) AS nombre, PG_DESCIFRAR(tickets.telefono) AS '
                                'telefono, PG_DESCIFRAR(tickets.telefono_whatsapp) AS telefono_whatsapp, '
                                'PG_DESCIFRAR(tickets.direccion) AS direccion, '
                                'PG_DESCIFRAR(tickets.referencia) AS referencia, tickets.sector AS sector, '
                                'tickets.canton AS canton, tickets.latitud AS latitud, tickets.longitud AS '
                                'longitud, tickets.tecnologia AS tecnologia, tickets.nap_id AS nap_id, '
                                'tickets.puerto_nap AS puerto_nap, tickets.ont_modelo AS ont_modelo, '
                                'tickets.ont_serie AS ont_serie, tickets.potencia_dbm AS potencia_dbm, '
                                'tickets.torre_id AS torre_id, tickets.cpe_ip AS cpe_ip, tickets.frecuencia '
                                'AS frecuencia, tickets.senal_dbm AS senal_dbm, tickets.antena_modelo AS '
                                'antena_modelo, tickets.tipo_incidencia AS tipo_incidencia, '
                                'tickets.descripcion AS descripcion, tickets.prioridad AS prioridad, '
                                'tickets.fecha_visita AS fecha_visita, tickets.franja AS franja, '
                                'tickets.hora_visita AS hora_visita, tickets.tecnico_id AS tecnico_id, '
                                'tickets.cuadrilla_id AS cuadrilla_id, tickets.estado AS estado, '
                                'tickets.solucion AS solucion, tickets.checklist AS checklist, '
                                'tickets.firma_b64 AS firma_b64, PG_DESCIFRAR(tickets.firmante_nombre) AS '
                                'firmante_nombre, PG_DESCIFRAR(tickets.firmante_cedula) AS firmante_cedula, '
                                'tickets.material_usado AS material_usado, tickets.motivo_cancelacion AS '
                                'motivo_cancelacion, tickets.cerrado_at AS cerrado_at, tickets.cerrado_por '
                                'AS cerrado_por, tickets.created_by AS created_by, tickets.created_at AS '
                                'created_at, tickets.updated_at AS updated_at, tickets.salida_at AS '
                                'salida_at, tickets.llegada_at AS llegada_at, tickets.llegada_lat AS '
                                'llegada_lat, tickets.llegada_lng AS llegada_lng, '
                                'tickets.llegada_precision_m AS llegada_precision_m, '
                                'PG_DESCIFRAR(tickets.email) AS email, tickets.ruta_fecha AS ruta_fecha, '
                                'tickets.ruta_orden AS ruta_orden, tickets.reprogramar_desde AS '
                                'reprogramar_desde FROM tickets AS tickets WHERE NOT RLS_ACTIVA() OR '
                                "(((SELECT COALESCE((SELECT PG_JSON_TIENE(usuarios_sistema.permisos, '*') OR "
                                "PG_JSON_TIENE(usuarios_sistema.permisos, 'clientes.cartera') AS _col_0 FROM "
                                'usuarios_sistema AS usuarios_sistema WHERE usuarios_sistema.auth_id = '
                                'AUTH_UID() AND usuarios_sistema.activo LIMIT 1), TRUE /* Sin legajo no se '
                                'bloquea a nadie: es una instalación que todavía no */ /* corrió la '
                                'migración 66, y cerrarle el paso la dejaría inutilizable de */ /* golpe. El '
                                'frente se comporta igual por la misma razón. */) AS _col_0) OR (NOT '
                                'tickets.tecnico_id IS NULL AND tickets.tecnico_id = (SELECT '
                                'usuarios_sistema.tecnico_id AS tecnico_id FROM usuarios_sistema AS '
                                'usuarios_sistema WHERE usuarios_sistema.auth_id = AUTH_UID() AND '
                                'usuarios_sistema.activo LIMIT 1)) OR (NOT tickets.cuadrilla_id IS NULL AND '
                                'tickets.cuadrilla_id IN (SELECT (SELECT cuadrilla_miembros.cuadrilla_id AS '
                                'cuadrilla_id FROM cuadrilla_miembros AS cuadrilla_miembros WHERE '
                                'cuadrilla_miembros.tecnico_id = (SELECT usuarios_sistema.tecnico_id AS '
                                'tecnico_id FROM usuarios_sistema AS usuarios_sistema WHERE '
                                'usuarios_sistema.auth_id = AUTH_UID() AND usuarios_sistema.activo LIMIT 1)) '
                                'AS _col_0)) OR tickets.client_id IN (SELECT cliente_id AS cliente_id FROM '
                                '(WITH yo /* Solo el técnico y los clientes de sus trabajos. */ /* La '
                                'cobranza SALIÓ de acá a propósito: abría la ficha completa cuando lo */ /* '
                                'que hace falta es un nombre, un teléfono y un saldo. Va por */ /* '
                                '`v_cobros_por_gestionar`, más abajo. */ AS (SELECT usuarios_sistema.id AS '
                                'id, usuarios_sistema.tecnico_id AS tecnico_id FROM usuarios_sistema AS '
                                'usuarios_sistema WHERE usuarios_sistema.auth_id = AUTH_UID() AND '
                                'usuarios_sistema.activo LIMIT 1) SELECT t_fn1570.client_id AS cliente_id '
                                'FROM tickets AS t_fn1570 JOIN yo AS yo ON t_fn1570.tecnico_id = '
                                'yo.tecnico_id WHERE NOT t_fn1570.client_id IS NULL UNION SELECT '
                                'i_fn1570.client_id AS client_id FROM instalaciones AS i_fn1570 JOIN yo AS '
                                'yo ON i_fn1570.tecnico_id = yo.tecnico_id WHERE NOT i_fn1570.client_id IS '
                                'NULL) AS _0)))) AS tickets))',
                      'update': '0',
                      'update_check': '0'},
 'vlans_olt': {'delete': None, 'insert': None, 'select': None, 'update': None, 'update_check': None},
 'zonas_cobertura': {'delete': "((SELECT COALESCE((SELECT PG_JSON_TIENE(usuarios_sistema.permisos, '*') OR "
                               "PG_JSON_TIENE(usuarios_sistema.permisos, 'clientes.cartera') AS _col_0 FROM "
                               'usuarios_sistema AS usuarios_sistema WHERE usuarios_sistema.auth_id = '
                               'AUTH_UID() AND usuarios_sistema.activo LIMIT 1), TRUE /* Sin legajo no se '
                               'bloquea a nadie: es una instalación que todavía no */ /* corrió la migración '
                               '66, y cerrarle el paso la dejaría inutilizable de */ /* golpe. El frente se '
                               'comporta igual por la misma razón. */) AS _col_0))',
                     'insert': "((SELECT COALESCE((SELECT PG_JSON_TIENE(usuarios_sistema.permisos, '*') OR "
                               "PG_JSON_TIENE(usuarios_sistema.permisos, 'clientes.cartera') AS _col_0 FROM "
                               'usuarios_sistema AS usuarios_sistema WHERE usuarios_sistema.auth_id = '
                               'AUTH_UID() AND usuarios_sistema.activo LIMIT 1), TRUE /* Sin legajo no se '
                               'bloquea a nadie: es una instalación que todavía no */ /* corrió la migración '
                               '66, y cerrarle el paso la dejaría inutilizable de */ /* golpe. El frente se '
                               'comporta igual por la misma razón. */) AS _col_0))',
                     'select': None,
                     'update': "((SELECT COALESCE((SELECT PG_JSON_TIENE(usuarios_sistema.permisos, '*') OR "
                               "PG_JSON_TIENE(usuarios_sistema.permisos, 'clientes.cartera') AS _col_0 FROM "
                               'usuarios_sistema AS usuarios_sistema WHERE usuarios_sistema.auth_id = '
                               'AUTH_UID() AND usuarios_sistema.activo LIMIT 1), TRUE /* Sin legajo no se '
                               'bloquea a nadie: es una instalación que todavía no */ /* corrió la migración '
                               '66, y cerrarle el paso la dejaría inutilizable de */ /* golpe. El frente se '
                               'comporta igual por la misma razón. */) AS _col_0))',
                     'update_check': '((SELECT COALESCE((SELECT PG_JSON_TIENE(usuarios_sistema.permisos, '
                                     "'*') OR PG_JSON_TIENE(usuarios_sistema.permisos, 'clientes.cartera') "
                                     'AS _col_0 FROM usuarios_sistema AS usuarios_sistema WHERE '
                                     'usuarios_sistema.auth_id = AUTH_UID() AND usuarios_sistema.activo '
                                     'LIMIT 1), TRUE /* Sin legajo no se bloquea a nadie: es una instalación '
                                     'que todavía no */ /* corrió la migración 66, y cerrarle el paso la '
                                     'dejaría inutilizable de */ /* golpe. El frente se comporta igual por '
                                     'la misma razón. */) AS _col_0))'}}

DEFINIDORAS = ['abrir_emergencia',
 'abrir_expediente_al_ganar',
 'abrir_gestion_recuperacion',
 'afectados_por_alcance',
 'afectados_por_incidencia',
 'agendar_retiro_equipo',
 'alertas_por_enviar',
 'anular_comision_venta',
 'aplicar_promo_al_cliente',
 'asignar_cobranza',
 'asignar_reparacion',
 'asignar_retiro_a',
 'asignar_retiro_equipo',
 'asignar_retiros_equipo',
 'audit_actor',
 'audit_cambios',
 'auditar_cambio_comisiones',
 'avisar_bienvenida',
 'avisar_del_ticket',
 'avisar_ficha_por_cerrar',
 'avisar_fichas_por_cerrar',
 'avisar_pago_recibido',
 'avisar_respuesta_de_ticket',
 'avisar_stock_bajo',
 'bono_de_calidad',
 'cajas_del_usuario',
 'cancelar_reparacion',
 'cartera_completa',
 'cerrar_emergencia',
 'cerrar_ficha_por_retiro',
 'cerrar_periodo_comisiones',
 'cerrar_reparacion',
 'cerrar_retiro_equipo',
 'clientes_de_nodo',
 'comision_de_periodo',
 'consolida_cobros',
 'controlar_inicio_instalacion',
 'controlar_inicio_ticket',
 'controlar_km_jornada',
 'controlar_reporte_reparacion',
 'convertir_cotizacion_en_prospecto',
 'copiar_modelo_a_prestador',
 'copiar_numero_orden',
 'crear_entrega_inventario',
 'dar_de_baja_cliente',
 'detectar_alertas',
 'detectar_nap_degradada',
 'detectar_reactivaciones',
 'dias_de_atraso',
 'dirige_cuadrillas',
 'documento_reemplaza_al_anterior',
 'documentos_pasan_al_abonado',
 'en_servicio',
 'enviar_expediente_a_instalaciones',
 'es_tecnico_de_campo',
 'esquema_comisiones_vigente',
 'estado_de_ingreso',
 'estoy_en_servicio',
 'evaluar_cohortes',
 'evaluar_cohortes_de_cliente',
 'exigir_en_servicio',
 'exigir_trabajo_actual',
 'fecha_de_corte',
 'finalizar_alta_instalacion',
 'firma_actualiza_contrato',
 'foto_ingreso_grupal',
 'generar_comisiones',
 'generar_retiros_equipo',
 'incidencia_activa_de',
 'ingreso_automatico',
 'ingreso_grupal',
 'iniciar_traslado',
 'items_de_ruta',
 'jefe_de_grupo',
 'limpiar_reconexiones_vencidas',
 'meses_de_atraso',
 'meses_sin_pago',
 'mi_cuadrilla_hoy',
 'mi_ingreso_de_hoy',
 'mi_jornada_de_hoy',
 'mi_legajo',
 'mi_legajo_id',
 'mi_ruta_hoy',
 'mi_tecnico_id',
 'mi_usuario_id',
 'mis_clientes_visibles',
 'mis_cuadrillas',
 'motivo_sin_emergencia',
 'mover_periodo_comisiones',
 'nivel_comision',
 'no_se_pudo_atender',
 'nodos_de_cliente',
 'notificar',
 'notificar_estado_nodo',
 'notificar_expediente_enviado',
 'notificar_instalacion',
 'ordena_rutas',
 'ordenar_ruta',
 'pedir_reconexion',
 'prestador_hereda_del_sri',
 'primera_ip_libre',
 'puede_autorizar_firma_manual',
 'puede_cargar_km',
 'puede_cerrar_reparacion',
 'puede_configurar_alertas',
 'puede_configurar_comisiones',
 'puede_gestionar_retiros',
 'puede_operar_red',
 'puede_ver_monitoreo',
 'puede_ver_red',
 'quien_es_la_onu',
 'quien_tiene_la_ip',
 'racha_de_ventas',
 'recibir_entrega_inventario',
 'reconectar_al_pagar',
 'reconectar_al_prometer',
 'recordar_retiros_agendados',
 'reemplazar_equipo_cliente',
 'registrar_alta_olt',
 'registrar_cambio_olt',
 'registrar_gestion_cobranza',
 'registrar_intento_retiro',
 'registrar_llamada',
 'reportar_reparacion',
 'rutas_del_dia',
 'saldar_deuda_equipo',
 'sincronizar_cobranza_comercial',
 'sincronizar_ficha_tecnico',
 'subida_saturada_de',
 'tiene_permiso_comision',
 'tomar_foto_routers',
 'totales_transacciones',
 'traslado_se_cancela',
 'traslado_se_cierra',
 'validar_cobro_de_recaudacion',
 'validar_cuenta_del_pago',
 'validar_solicitud',
 'valor_del_prospecto',
 've_comisiones_de_todos',
 've_reparacion',
 've_todo_el_equipo',
 'vencer_firmas_pendientes',
 'vendedor_de_instalacion',
 'verificar_comisiones',
 'zona_horaria']

OCULTAS = {'clientes': ['portal_clave_hash']}

FALLAS = {}
