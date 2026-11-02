"""
Tests del traductor de vistas Postgres → SQLite (apps/dashboard/vistas_sqlite.py).

Cada caso traduce una expresión de Postgres, la ejecuta en SQLite con las
funciones de sqlite_funciones.py y compara con lo que devuelve Postgres.
"""
import json
import sqlite3

import pytest

from apps.dashboard import contexto
from apps.dashboard.esquema import Esquema, Tabla, Columna
from apps.dashboard.sqlite_funciones import registrar
from apps.dashboard.vistas_sqlite import Traductor
from .factories import ClienteFactory


def esquema_de_prueba():
    e = Esquema()
    t = Tabla(nombre='t')
    for nombre, tipo in [('id', 'UUID'), ('d', 'DATE'), ('ts', 'TIMESTAMPTZ'), ('ts2', 'TIMESTAMPTZ'),
                         ('n', 'INT'), ('arr', 'TEXT[]'), ('permisos', 'JSONB'), ('txt', 'TEXT')]:
        t.columnas[nombre] = Columna(nombre=nombre, tipo=tipo)
    e.tablas['t'] = t
    return e


@pytest.fixture
def ejecutar():
    con = sqlite3.connect(':memory:')
    registrar(con)
    con.execute('CREATE TABLE t (id, d, ts, ts2, n, arr, permisos, txt)')
    con.execute("""INSERT INTO t VALUES ('a1', '2026-01-31', '2026-10-13 10:00:00', '2026-10-13 09:30:00', 3,
                   '["a","b"]', '{"*": true}', 'Hola')""")
    traductor = Traductor(esquema_de_prueba())

    def correr(expresion):
        sql, _ = traductor.traducir(f'SELECT {expresion} AS x FROM t')
        return con.execute(sql).fetchone()[0]
    return correr


@pytest.mark.unit
class TestTraduccionDeFechas:

    def test_fecha_mas_un_mes_respeta_el_fin_de_mes(self, ejecutar):
        # Postgres: '2026-01-31'::date + INTERVAL '1 month' = 2026-02-28
        assert ejecutar("d + INTERVAL '1 month'") == '2026-02-28'

    def test_timestamp_menos_dias(self, ejecutar):
        assert ejecutar("ts - INTERVAL '90 days'") == '2026-07-15 10:00:00'

    def test_timestamp_mas_horas(self, ejecutar):
        assert ejecutar("ts + INTERVAL '2 hours'") == '2026-10-13 12:00:00'

    def test_fecha_menos_fecha_es_entero(self, ejecutar):
        assert ejecutar("DATE '2026-02-10' - d") == 10

    def test_fecha_mas_entero_son_dias(self, ejecutar):
        assert ejecutar('d + 3') == '2026-02-03'

    def test_epoch_de_una_diferencia_en_segundos(self, ejecutar):
        assert ejecutar('EXTRACT(EPOCH FROM (ts - ts2))') == pytest.approx(1800)

    def test_minutos_entre_dos_timestamps(self, ejecutar):
        assert ejecutar('EXTRACT(EPOCH FROM (ts - ts2)) / 60') == pytest.approx(30)

    def test_extract_de_campos(self, ejecutar):
        assert ejecutar('EXTRACT(YEAR FROM ts)') == 2026
        assert ejecutar('EXTRACT(MONTH FROM d)') == 1
        assert ejecutar('EXTRACT(DOW FROM ts)') == 2   # 13/10/2026 es martes

    def test_date_trunc_al_mes(self, ejecutar):
        assert ejecutar("DATE_TRUNC('month', ts)::DATE") == '2026-10-01'

    def test_meses_completos_con_age(self, ejecutar):
        assert ejecutar("EXTRACT(YEAR FROM AGE(DATE '2027-03-15', d)) * 12 + EXTRACT(MONTH FROM AGE(DATE '2027-03-15', d))") == 13

    def test_intervalo_por_cantidad_de_meses(self, ejecutar):
        assert ejecutar("d + n * INTERVAL '1 month'") == '2026-04-30'

    def test_comparar_contra_intervalo(self, ejecutar):
        assert ejecutar("(ts - ts2) > INTERVAL '20 minutes'") == 1


@pytest.mark.unit
class TestTraduccionDeArreglosYJson:

    def test_any_de_un_arreglo(self, ejecutar):
        assert ejecutar("'b' = ANY(arr)") == 1
        assert ejecutar("'z' = ANY(arr)") == 0

    def test_operador_pregunta_de_jsonb(self, ejecutar):
        assert ejecutar("permisos ? '*'") == 1
        assert ejecutar("permisos ? 'clientes.ver'") == 0

    def test_array_literal(self, ejecutar):
        assert json.loads(ejecutar("ARRAY['x', 'y']")) == ['x', 'y']

    def test_lpad(self, ejecutar):
        assert ejecutar("LPAD(n::TEXT, 6, '0')") == '000003'

    def test_string_agg_distinct(self, ejecutar):
        assert ejecutar("(SELECT STRING_AGG(DISTINCT x, ', ') FROM (SELECT 'a' AS x UNION ALL SELECT 'a' UNION ALL SELECT 'b') s)") == 'a, b'


@pytest.mark.unit
class TestFuncionesPropias:

    def test_auth_uid_es_el_usuario_de_la_peticion(self, ejecutar):
        class Usuario:
            pk = 7
            is_authenticated = True
        contexto.establecer_usuario(Usuario())
        try:
            assert ejecutar('auth.uid()') == '7'
        finally:
            contexto.establecer_usuario(None)

    def test_funcion_sql_se_inserta_como_subconsulta(self):
        e = esquema_de_prueba()
        from apps.dashboard.esquema import Funcion
        e.funciones['doble'] = Funcion(nombre='doble', argumentos='p_n INT', retorna='INT',
                                       cuerpo='SELECT p_n * 2', lenguaje='sql')
        con = sqlite3.connect(':memory:')
        registrar(con)
        con.execute('CREATE TABLE t (n)')
        con.execute('INSERT INTO t VALUES (21)')
        sql, _ = Traductor(e).traducir('SELECT doble(t.n) AS x FROM t')
        assert con.execute(sql).fetchone()[0] == 42


@pytest.mark.integration
class TestVistasEnLaBase:

    def test_las_135_vistas_existen(self):
        from django.db import connection
        from apps.dashboard import vistas_generadas
        with connection.cursor() as cursor:
            cursor.execute("SELECT COUNT(*) FROM sqlite_master WHERE type = 'view' AND name LIKE 'v_%'")
            assert cursor.fetchone()[0] == len(vistas_generadas.ORDEN) == 135
        assert vistas_generadas.FALLAS == {}

    def test_la_vista_devuelve_tipos_como_postgrest(self, authenticated_client):
        from apps.soporte.models import Ticket
        t = Ticket.objects.create(nombre='Ana', checklist={'ok': True})
        r = authenticated_client.get(f'/api/v1/tables/v_tickets?id=eq.{t.id}&select=id,checklist,visita_atrasada,created_at')
        assert r.status_code == 200, r.data
        [fila] = r.data
        assert fila['id'] == str(t.id)               # UUID con guiones
        assert fila['checklist'] == {'ok': True}      # JSON, no texto
        assert fila['visita_atrasada'] is False       # booleano, no 0
        assert fila['created_at'].endswith('+00:00')  # ISO con zona

    def test_un_arreglo_armado_con_una_subconsulta_sale_como_lista(self):
        """`ARRAY(SELECT jsonb_object_keys(...))` en v_audit_logs: la ficha de Actividad hace campos.map()."""
        from apps.dashboard import vistas_generadas
        assert vistas_generadas.COLUMNAS['v_audit_logs']['campos'] == 'json'

    def test_la_auditoria_registra_solo_lo_que_cambio(self, authenticated_client):
        """
        `clientes` tiene más de 50 columnas: OLD se arma en trozos y las vacías
        de más allá de la 50 no se pueden perder, o la auditoría las da por
        cambiadas ("— → —" en la pestaña Actividad).
        """
        cliente = ClienteFactory(telefono='0991111111')
        r = authenticated_client.patch(f'/api/v1/tables/clientes?id=eq.{cliente.id}',
                                       {'telefono': '0992222222'}, format='json')
        assert r.status_code == 200, r.data

        r = authenticated_client.get(f'/api/v1/tables/v_audit_logs?client_id=eq.{cliente.id}&accion=eq.modificar')
        assert r.status_code == 200
        assert [fila['campos'] for fila in r.data] == [['telefono']]

    def test_guardar_la_ficha_entera_solo_audita_lo_que_cambio(self, authenticated_client):
        """La ficha manda todos los campos: email y dirección (cifrados) no cambiaron."""
        cliente = ClienteFactory(telefono='0991111111', email='ana@example.com', direccion='Calle 1')
        r = authenticated_client.patch(f'/api/v1/tables/clientes/{cliente.id}', {
            'nombre': cliente.nombre, 'email': 'ana@example.com', 'direccion': 'Calle 1',
            'telefono': '0993333333', 'dia_facturacion': cliente.dia_facturacion,
        }, format='json')
        assert r.status_code == 200, r.data
        r = authenticated_client.get(f'/api/v1/tables/v_audit_logs?client_id=eq.{cliente.id}&accion=eq.modificar')
        assert [fila['campos'] for fila in r.data] == [['telefono']]

    def test_arreglos_armados_con_funciones_salen_como_lista(self):
        """ARRAY_REMOVE(ARRAY[...], NULL): la pantalla del prestador hace le_falta.map()."""
        from apps.dashboard import vistas_generadas
        assert vistas_generadas.COLUMNAS['v_prestadores_listos']['le_falta'] == 'json'
        assert vistas_generadas.COLUMNAS['v_arcotel_incompletos']['le_falta'] == 'json'
        assert vistas_generadas.COLUMNAS['v_prospectos']['motivos_puntaje'] == 'json'


def test_los_esquemas_zod_del_dashboard_estan_al_dia():
    """web/src/lib/validacion/tablas.generado.js sale de los modelos: si cambia la base, hay que regenerarlo."""
    from django.core.management import call_command
    call_command('generar_esquemas_zod', '--verificar')


def test_flecha_json_dentro_de_una_funcion_no_es_lambda():
    """
    sqlglot lee `x -> clave` dentro de los argumentos de una función como una
    lambda. En Postgres es el operador JSON: auditar_cambio_comisiones fallaba
    con "no such column: v_antes" al editar un motivo de baja.
    """
    import sqlglot
    from sqlglot import exp
    from apps.dashboard.vistas_sqlite import normalizar_postgres

    arbol = normalizar_postgres(sqlglot.parse_one(
        'SELECT jsonb_object_agg(e.key, jsonb_build_array(v_antes -> e.key, e.value)) FROM jsonb_each(v_despues) e',
        read='postgres'))
    assert arbol.find(exp.Lambda) is None
    assert 'v_antes' in [c.name for c in arbol.find_all(exp.Column)]
    assert any(isinstance(n, exp.Anonymous) and n.name.lower() == 'jsonb_object_agg' for n in arbol.walk())
