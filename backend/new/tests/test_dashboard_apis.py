"""
Tests de las APIs que alimentan el inicio y el tablero GPON del dashboard.

Dos frentes:

- el CRUD genérico (`/api/v1/tables/...`): que los filtros lleguen a la consulta
  —un filtro descartado en silencio no da error, da datos equivocados, y en un
  DELETE borra de más— y que el camino SQL funcione en SQLite;
- las emulaciones de las vistas del tablero (v_olt_resumen, v_pon_puertos,
  v_onus_por_dia, v_esperando_autorizacion, v_onus_clientes): que calculen lo
  mismo que la vista de Postgres y respeten los parámetros de PostgREST.
"""
from datetime import date, timedelta
from decimal import Decimal

import pytest
from django.utils import timezone
from rest_framework import status

from apps.core import views_generic
from apps.core.models import Tecnico
from apps.olts.models import ONU, OltEscaneo, OltHistorial, OntEsperando
from .factories import ClienteFactory, OLTFactory, ONUFactory, PlanVelocidadFactory


def _abonado(onu, plan=None, **campos):
    """Un cliente servido por `onu` (`clientes.onu_id`, como en la vista)."""
    return ClienteFactory(onu=onu, plan=plan, **campos)


# ── CRUD genérico ────────────────────────────────────────────────────────────


@pytest.mark.integration
class TestFiltrosDelCrudGenerico:

    def test_columnas_reales_en_sqlite_son_nombres(self):
        """PRAGMA table_info da (cid, name, ...): antes se tomaba el cid."""
        columnas = views_generic.columnas_reales('tecnicos')
        assert {'id', 'nombre', 'activo'} <= columnas

    def test_tabla_por_sql_directo_con_tipos_de_postgrest(self, servicio_client):
        """
        Una tabla sin vista ni serializer (usuarios_sistema) se lee por SQL
        directo: el UUID tiene que salir con guiones, el JSON como JSON y el
        booleano como booleano, igual que en PostgREST. El middleware busca el
        legajo por `auth_id` y lee `permisos` como arreglo.

        Con el usuario de servicio: los legajos los escribe solo el middleware
        (la RLS de usuarios_sistema no deja escribir al personal).
        """
        authenticated_client = servicio_client
        creado = authenticated_client.post('/api/v1/tables/usuarios_sistema', {
            'nombre': 'Ana', 'usuario': 'ana', 'email': 'ana@x.local', 'rol': 'admin',
            'auth_id': '77', 'permisos': ['pagos.anular'], 'activo': True,
        }, format='json')
        assert creado.status_code == status.HTTP_201_CREATED, creado.data
        legajo = creado.data['id']
        assert len(legajo) == 36 and legajo.count('-') == 4
        assert creado.data['permisos'] == ['pagos.anular']
        assert creado.data['activo'] is True

        response = authenticated_client.get('/api/v1/tables/usuarios_sistema?auth_id=eq.77')
        assert response.status_code == status.HTTP_200_OK
        assert response.data[0]['id'] == legajo
        assert response.data[0]['permisos'] == ['pagos.anular']

        # El id con guiones sirve para leer, filtrar y modificar.
        uno = authenticated_client.get(f'/api/v1/tables/usuarios_sistema/{legajo}')
        assert uno.status_code == status.HTTP_200_OK and uno.data['id'] == legajo
        cambiado = authenticated_client.patch(f'/api/v1/tables/usuarios_sistema?id=eq.{legajo}', {'activo': False}, format='json')
        assert cambiado.status_code == status.HTTP_200_OK
        assert cambiado.data[0]['activo'] is False

    def test_booleano_en_minuscula(self, authenticated_client):
        """`activo=eq.true` (como lo escribe PostgREST) tiraba 500."""
        Tecnico.objects.create(nombre='Activo', activo=True)
        Tecnico.objects.create(nombre='Inactivo', activo=False)

        response = authenticated_client.get('/api/v1/tables/tecnicos?activo=eq.true&select=nombre')

        assert response.status_code == status.HTTP_200_OK
        assert [f['nombre'] for f in response.data] == ['Activo']

    def test_filtro_por_columna_de_clave_foranea(self, authenticated_client):
        """`olt_id` es la columna del FK `olt`: antes no matcheaba y se ignoraba."""
        mia, otra = OLTFactory(), OLTFactory()
        ONUFactory(olt=mia)
        ONUFactory(olt=otra)

        response = authenticated_client.get(f'/api/v1/tables/onus?olt_id=eq.{mia.id}')

        assert response.status_code == status.HTTP_200_OK
        assert [str(f['olt_id']) for f in response.data] == [str(mia.id)]

    def test_columna_desconocida_es_400_y_no_un_filtro_ignorado(self, authenticated_client):
        ONUFactory.create_batch(2)

        response = authenticated_client.get('/api/v1/tables/onus?no_existe=eq.1')

        assert response.status_code == status.HTTP_400_BAD_REQUEST

    def test_delete_con_columna_desconocida_no_borra_nada(self, authenticated_client):
        """Con el filtro descartado, el DELETE se aplicaba a lo que quedaba."""
        mia = OLTFactory()
        ONUFactory(olt=mia, slot=1)
        ONUFactory(slot=1)

        response = authenticated_client.delete(
            f'/api/v1/tables/onus?no_existe=eq.{mia.id}&slot=eq.1'
        )

        assert response.status_code == status.HTTP_400_BAD_REQUEST
        assert ONU.objects.count() == 2

    def test_rango_con_la_misma_columna_dos_veces(self, authenticated_client):
        olt = OLTFactory()
        for rx in ('-30', '-25', '-20'):
            ONUFactory(olt=olt, rx_power_dbm=Decimal(rx))

        response = authenticated_client.get(
            '/api/v1/tables/onus?rx_power_dbm=gte.-26&rx_power_dbm=lte.-21'
        )

        assert response.status_code == status.HTTP_200_OK
        assert [Decimal(str(f['rx_power_dbm'])) for f in response.data] == [Decimal('-25')]

    def test_modelo_que_no_coincide_con_la_tabla_va_por_sql(self, monkeypatch):
        """
        En el Postgres de producción `clientes` tiene otras columnas que el
        modelo: ahí el ORM rompe y tiene que usarse el SQL directo.
        """
        monkeypatch.setattr(views_generic, '_COINCIDENCIAS', {})
        monkeypatch.setattr(views_generic, 'columnas_reales', lambda t: {'id', 'nombre', 'estado'})

        assert views_generic.find_model('clientes') is None

    def test_modelo_que_coincide_se_usa(self, monkeypatch):
        monkeypatch.setattr(views_generic, '_COINCIDENCIAS', {})
        assert views_generic.find_model('tecnicos') is Tecnico


# ── Tablas del tablero GPON ──────────────────────────────────────────────────


@pytest.mark.integration
class TestTablasDelTableroGpon:

    def test_onts_esperando_se_lee_y_se_escribe(self, authenticated_client):
        olt = OLTFactory()
        response = authenticated_client.post(
            '/api/v1/tables/onts_esperando',
            {'olt_id': str(olt.id), 'sn': 'ZTEG00000001', 'slot': 1, 'puerto': 3},
            format='json',
        )
        assert response.status_code == status.HTTP_201_CREATED

        response = authenticated_client.get(
            f'/api/v1/tables/onts_esperando?olt_id=eq.{olt.id}&order=detectada.asc'
        )
        assert response.status_code == status.HTTP_200_OK
        assert [f['sn'] for f in response.data] == ['ZTEG00000001']

    def test_editar_una_olt_queda_en_el_historial(self, authenticated_client):
        olt = OLTFactory(nombre='Antes')
        OltHistorial.objects.all().delete()   # el alta ya dejó su fila

        response = authenticated_client.patch(
            f'/api/v1/tables/olts/{olt.id}',
            {'nombre': 'Después', 'password_encrypted': 'otra-clave'},
            format='json',
        )
        assert response.status_code == status.HTTP_200_OK

        cambios = {h.campo: h for h in OltHistorial.objects.filter(olt=olt)}
        assert cambios['nombre'].valor_antes == 'Antes'
        assert cambios['nombre'].valor_despues == 'Después'
        # De una credencial se registra que cambió, nunca a qué.
        assert 'otra-clave' not in (cambios['password_encrypted'].valor_despues or '')

    def test_el_alta_de_una_olt_queda_en_el_historial(self):
        olt = OLTFactory(nombre='Nueva')
        assert OltHistorial.objects.filter(olt=olt, accion='alta', valor_despues='Nueva').exists()

    def test_el_sondeo_no_ensucia_el_historial(self):
        olt = OLTFactory()
        OltHistorial.objects.all().delete()

        olt.estado_ultimo_sondeo = 'online'
        olt.ultima_conexion = timezone.now()
        olt.save()

        assert not OltHistorial.objects.filter(olt=olt).exists()


# ── Vistas emuladas ──────────────────────────────────────────────────────────


@pytest.mark.integration
class TestVistasDelTableroGpon:

    def test_v_olt_resumen_cuenta_como_la_vista(self, authenticated_client):
        olt = OLTFactory()
        ONUFactory(olt=olt, estado='online', rx_power_dbm=Decimal('-20'))
        ONUFactory(olt=olt, estado='los', rx_power_dbm=Decimal('-28'))
        ONUFactory(olt=olt, estado='offline', rx_power_dbm=Decimal('-25'))
        sin_lectura = ONUFactory(olt=olt, estado='online', rx_power_dbm=None)
        _abonado(sin_lectura)

        response = authenticated_client.get(f'/api/v1/tables/v_olt_resumen?olt_id=eq.{olt.id}')

        assert response.status_code == status.HTTP_200_OK
        [fila] = response.data
        assert fila['onus'] == 4
        assert fila['online'] == 2
        assert fila['caidas'] == 2
        assert fila['los'] == 1
        assert fila['sin_causa'] == 1
        assert fila['sin_lectura'] == 1
        assert fila['senal_critica'] == 1
        assert fila['senal_aviso'] == 1
        assert fila['rx_peor'] == -28
        assert fila['rx_promedio'] == pytest.approx(-24.33)
        assert fila['sin_abonado'] == 3

    def test_v_olt_resumen_respeta_select_y_orden(self, authenticated_client):
        OLTFactory(nombre='B')
        OLTFactory(nombre='A')

        response = authenticated_client.get(
            '/api/v1/tables/v_olt_resumen?select=nombre,onus&order=nombre.asc'
        )

        assert response.data == [{'nombre': 'A', 'onus': 0}, {'nombre': 'B', 'onus': 0}]

    def test_v_pon_puertos_detecta_el_puerto_caido(self, authenticated_client):
        olt = OLTFactory()
        for _ in range(2):
            ONUFactory(olt=olt, slot=0, puerto=1, estado='los')
        ONUFactory(olt=olt, slot=0, puerto=2, estado='online')

        response = authenticated_client.get(
            f'/api/v1/tables/v_pon_puertos?olt_id=eq.{olt.id}&puerto_caido=eq.true'
        )

        assert response.status_code == status.HTTP_200_OK
        assert [(f['slot'], f['puerto'], f['onus']) for f in response.data] == [(0, 1, 2)]

    def test_v_onus_por_dia_usa_la_fecha_de_autorizacion(self, authenticated_client):
        olt = OLTFactory()
        ayer = date.today() - timedelta(days=1)
        ONUFactory.create_batch(2, olt=olt, autorizada_at=ayer)
        ONUFactory(olt=olt, autorizada_at=None)   # sin fecha real: queda fuera

        response = authenticated_client.get('/api/v1/tables/v_onus_por_dia?order=dia.asc')

        assert response.data == [{'olt_id': str(olt.id), 'dia': ayer.isoformat(), 'altas': 2}]

    def test_v_esperando_autorizacion(self, authenticated_client):
        olt = OLTFactory()
        OntEsperando.objects.create(olt=olt, sn='A')
        OntEsperando.objects.create(olt=olt, sn='B')
        OltEscaneo.objects.create(olt=olt, puertos=16, error=None)

        response = authenticated_client.get(
            f'/api/v1/tables/v_esperando_autorizacion?olt_id=eq.{olt.id}'
        )

        [fila] = response.data
        assert fila['esperando'] == 2
        assert fila['puertos_consultados'] == 16
        assert fila['escaneada_hace_segundos'] >= 0

    def test_v_onus_clientes_senal_baja_con_conteo(self, authenticated_client):
        """La tarjeta del inicio: cuenta en la base y baja sólo las que dibuja."""
        plan = PlanVelocidadFactory()
        mala = ONUFactory(rx_power_dbm=Decimal('-29'))
        _abonado(mala, plan=plan, nombre='Ana')
        ONUFactory(rx_power_dbm=Decimal('-28'))
        ONUFactory(rx_power_dbm=Decimal('-20'))

        response = authenticated_client.get(
            '/api/v1/tables/v_onus_clientes'
            '?select=onu_id,sn,cliente,rx_power_dbm,ruta_onu,plan'
            '&senal_baja=eq.true&order=rx_power_dbm.asc&limit=1&count=exact'
        )

        assert response.status_code == status.HTTP_200_OK
        assert response['X-Total-Count'] == '2'
        [fila] = response.data
        assert fila['cliente'] == 'Ana'
        assert fila['plan'] == plan.nombre
        assert fila['ruta_onu'] == f'gpon-onu_{mala.frame}/{mala.slot}/{mala.puerto}:{mala.onu_index}'

    def test_columna_que_la_vista_no_tiene_es_400(self, authenticated_client):
        response = authenticated_client.get('/api/v1/tables/v_olt_resumen?no_existe=eq.1')
        assert response.status_code == status.HTTP_400_BAD_REQUEST

    def test_nulos_al_final_en_orden_ascendente(self, authenticated_client):
        olt = OLTFactory()
        ONUFactory(olt=olt, rx_power_dbm=None)
        ONUFactory(olt=olt, rx_power_dbm=Decimal('-22'))

        response = authenticated_client.get(
            '/api/v1/tables/v_onus_clientes?select=rx_power_dbm&order=rx_power_dbm.asc'
        )

        assert [f['rx_power_dbm'] for f in response.data] == [-22.0, None]


# ── clientes con el esquema del dashboard ────────────────────────────────────


@pytest.mark.integration
class TestClientesComoLosPideElDashboard:

    def test_pausados_con_la_fecha_vencida(self, authenticated_client):
        """La tarjeta del inicio: suspendidos por viaje cuya vuelta ya pasó."""
        hoy = date.today()
        vencido = ClienteFactory(estado='suspendido', suspendido_hasta=hoy - timedelta(days=3),
                                 suspendido_motivo='viaje')
        ClienteFactory(estado='suspendido', suspendido_hasta=hoy + timedelta(days=3))
        ClienteFactory(estado='suspendido', suspendido_hasta=None)
        ClienteFactory(estado='activo')

        response = authenticated_client.get(
            '/api/v1/tables/clientes?select=id,nombre,suspendido_motivo,suspendido_hasta'
            f'&count=exact&estado=eq.suspendido&suspendido_hasta=not.is.null'
            f'&suspendido_hasta=lt.{hoy.isoformat()}&order=suspendido_hasta.asc&limit=6'
        )

        assert response.status_code == status.HTTP_200_OK
        assert response['X-Total-Count'] == '1'
        assert [str(f['id']) for f in response.data] == [str(vencido.id)]

    def test_buscador_con_or(self, authenticated_client):
        """BuscadorCliente: nombre, identificación, ip o usuario PPP a la vez."""
        ClienteFactory(nombre='Ana Pérez', identificacion='0911111111')
        ClienteFactory(nombre='Luis', ip='10.0.0.77')
        ClienteFactory(nombre='Otro')

        def buscar(q):
            # Codificado como lo hace URLSearchParams: un `%09` crudo es un tab.
            r = authenticated_client.get('/api/v1/tables/clientes', {
                'select': 'nombre', 'order': 'nombre.asc',
                'or': f'(nombre.ilike.%{q}%,identificacion.ilike.%{q}%,ip.ilike.%{q}%,usuario_ppp.ilike.%{q}%)',
            })
            assert r.status_code == status.HTTP_200_OK, r.data
            return [f['nombre'] for f in r.data]

        assert buscar('ana') == ['Ana Pérez']
        assert buscar('0911') == ['Ana Pérez']
        assert buscar('0.0.77') == ['Luis']

    def test_or_con_columna_desconocida_es_400(self, authenticated_client):
        response = authenticated_client.get('/api/v1/tables/clientes?or=(no_existe.eq.1,nombre.eq.x)')
        assert response.status_code == status.HTTP_400_BAD_REQUEST

    def test_duplicado_por_identificacion(self, authenticated_client):
        """ClienteForm avisa si la cédula ya existe: hace falta poder compararla."""
        ClienteFactory(identificacion='0922222222')

        response = authenticated_client.get('/api/v1/tables/clientes?identificacion=eq.0922222222')

        assert len(response.data) == 1

    def test_alta_con_columnas_del_dashboard(self, authenticated_client):
        plan = PlanVelocidadFactory()
        response = authenticated_client.post('/api/v1/tables/clientes', {
            'nombre': 'Nuevo', 'identificacion': '0933333333', 'plan_id': str(plan.id),
            'tipo_conexion': 'pppoe', 'usuario_ppp': 'nuevo01', 'precio_mensual': '25.00',
            'zona': 'Norte', 'avisos_canales': ['whatsapp', 'email'],
        }, format='json')

        assert response.status_code == status.HTTP_201_CREATED, response.data
        assert response.data['plan_id'] == str(plan.id)  # la columna, como PostgREST
        assert response.data['avisos_canales'] == ['whatsapp', 'email']

    def test_el_correo_sigue_cifrado_en_la_base(self):
        from django.db import connection
        cliente = ClienteFactory(email='ana@example.com')
        with connection.cursor() as cursor:
            cursor.execute('SELECT email FROM clientes WHERE id = %s', [cliente.id.hex])
            crudo = cursor.fetchone()[0]
        assert crudo.startswith('enc::')
        assert 'ana@example.com' not in crudo


    def test_el_correo_y_la_direccion_salen_descifrados_por_la_api(self, authenticated_client):
        """El listado de clientes va por SQL directo: no puede mostrar 'enc::...'."""
        cliente = ClienteFactory(email='ana@example.com', direccion='Av. Siempre Viva 742')

        response = authenticated_client.get(f'/api/v1/tables/clientes?id=eq.{cliente.id}&select=email,direccion')

        assert response.status_code == status.HTTP_200_OK
        assert response.data == [{'email': 'ana@example.com', 'direccion': 'Av. Siempre Viva 742'}]

# ── tickets con el esquema del dashboard ─────────────────────────────────────


@pytest.mark.integration
class TestTicketsComoLosPideElDashboard:

    def test_alta_desde_el_formulario_numera_sola(self, authenticated_client):
        """TicketForm inserta en `tickets` sin número: lo pone la base (BIGSERIAL)."""
        cliente = ClienteFactory()
        datos = {
            'client_id': str(cliente.id), 'nombre': cliente.nombre,
            'tipo_incidencia': 'lentitud', 'tecnologia': 'ftth', 'prioridad': 'alta',
            'fecha_visita': date.today().isoformat(), 'franja': 'manana',
            'checklist': {'ont_reiniciada': True},
        }
        uno = authenticated_client.post('/api/v1/tables/tickets', datos, format='json')
        dos = authenticated_client.post('/api/v1/tables/tickets', datos, format='json')

        assert uno.status_code == status.HTTP_201_CREATED, uno.data
        assert dos.data['numero'] == uno.data['numero'] + 1
        assert uno.data['checklist'] == {'ont_reiniciada': True}

    def test_v_tickets_calcula_lo_que_agrega_la_vista(self, authenticated_client):
        from apps.soporte.models import Ticket
        tecnico = Tecnico.objects.create(nombre='Pedro', telefono='0999')
        ayer = date.today() - timedelta(days=1)
        t = Ticket.objects.create(
            nombre='Ana', tecnico=tecnico, fecha_visita=ayer, estado='asignado',
            latitud=Decimal('-2.1700000'), longitud=Decimal('-79.9000000'),
            llegada_lat=Decimal('-2.1700000'), llegada_lng=Decimal('-79.9010000'),
            salida_at=timezone.now() - timedelta(minutes=30), llegada_at=timezone.now(),
        )

        response = authenticated_client.get(
            f'/api/v1/tables/v_tickets?id=eq.{t.id}'
            '&select=codigo,tecnico,tecnico_telefono,visita_atrasada,minutos_en_ruta,llegada_distancia_m'
        )

        assert response.status_code == status.HTTP_200_OK, response.data
        [fila] = response.data
        assert fila['codigo'] == f'{t.numero:06d}'
        assert fila['tecnico'] == 'Pedro'
        assert fila['visita_atrasada'] is True
        assert fila['minutos_en_ruta'] == pytest.approx(30, abs=0.1)
        assert 100 < fila['llegada_distancia_m'] < 120   # 0,001° de longitud ≈ 111 m

    def test_tickets_abiertos_con_in(self, authenticated_client):
        from apps.soporte.models import Ticket
        for estado in ('abierto', 'en_ruta', 'resuelto'):
            Ticket.objects.create(nombre=estado, estado=estado)

        response = authenticated_client.get(
            '/api/v1/tables/v_tickets?estado=in.(abierto,asignado,en_ruta,en_proceso)&select=nombre&order=nombre.asc'
        )

        assert [f['nombre'] for f in response.data] == ['abierto', 'en_ruta']

    def test_el_bot_sigue_mandando_los_valores_viejos(self):
        # La ruta del bot ahora la atiende el middleware (con llave de
        # integración); la traducción de los valores viejos sigue en el modelo.
        from apps.soporte.models import Ticket
        cliente = ClienteFactory(telefono='0991112233')
        t = Ticket.desde_bot(cliente, 'SIN_SERVICIO_LUZ_ROJA', 'luz roja', 'CRITICA')
        assert (t.tipo_incidencia, t.prioridad, t.nombre, t.telefono) == (
            'fibra_cortada', 'alta', cliente.nombre, '0991112233')


@pytest.mark.integration
class TestFormaDeLasRespuestas:
    """Lo que devuelve la API tiene la forma de PostgREST en todos los caminos."""

    def test_detalle_y_alta_usan_el_nombre_de_la_columna(self, authenticated_client):
        plan = PlanVelocidadFactory()
        cliente = ClienteFactory(plan=plan)
        r = authenticated_client.get(f'/api/v1/tables/clientes/{cliente.id}')
        assert r.status_code == 200
        assert r.data['plan_id'] == str(plan.id) and 'plan' not in r.data
        assert isinstance(r.data['precio_mensual'], (int, float, type(None)))

    def test_uuid_guardado_como_texto_sale_con_guiones(self, authenticated_client):
        from django.db import connection
        with connection.cursor() as c:
            c.execute("INSERT INTO auditoria_sistema (accion, descripcion, entidad, entidad_id, creado_en) "
                      "VALUES ('x', '', 'cliente', 'fedcba9876543210fedcba9876543210', CURRENT_TIMESTAMP)")
        r = authenticated_client.get('/api/v1/tables/auditoria_sistema'
                                     '?entidad_id=eq.fedcba98-7654-3210-fedc-ba9876543210')
        assert r.status_code == 200 and len(r.data) == 1
        assert r.data[0]['entidad_id'] == 'fedcba98-7654-3210-fedc-ba9876543210'

    def test_vista_con_enie_en_el_nombre(self, authenticated_client):
        r = authenticated_client.get('/api/v1/tables/v_auditoria_señales?limit=1')
        assert r.status_code == 200

    def test_nombre_de_tabla_con_salto_de_linea_rechazado(self, authenticated_client):
        assert not views_generic.identificador_valido('clientes\n')
        assert not views_generic.identificador_valido('clientes"; DROP')

    def test_credencial_legada_se_descifra_salvo_las_encrypted(self):
        from apps.core.fields import EncryptedMixin
        cifrado = EncryptedMixin().get_prep_value('admin')
        fila = {'usuario': cifrado, 'password_encrypted': cifrado}
        views_generic.descifrar_columnas([fila])
        assert fila['usuario'] == 'admin'
        assert fila['password_encrypted'] == cifrado


@pytest.mark.integration
def test_el_prestador_hereda_la_direccion_de_la_matriz_si_el_establecimiento_esta_vacio(authenticated_client):
    """El formulario de Empresa manda '' en los campos vacíos: no pueden ganarle a la matriz."""
    r = authenticated_client.post('/api/v1/tables/sri_config', {
        'ruc': '0912345675001', 'razon_social': 'QA S.A.', 'dir_matriz': 'Av. Matriz 1',
        'dir_establecimiento': '', 'telefono': '',
    }, format='json')
    assert r.status_code == 201, r.data
    p = authenticated_client.get('/api/v1/tables/prestadores?ruc=eq.0912345675001').data[0]
    assert p['direccion'] == 'Av. Matriz 1'
    assert p['telefono'] is None

    authenticated_client.patch(f"/api/v1/tables/sri_config?id=eq.{r.data['id']}",
                               {'telefono': '042111111', 'dir_matriz': 'Av. Matriz 2'}, format='json')
    p = authenticated_client.get('/api/v1/tables/prestadores?ruc=eq.0912345675001').data[0]
    assert (p['direccion'], p['telefono']) == ('Av. Matriz 2', '042111111')


@pytest.mark.integration
class TestFechasDelNavegador:
    """El navegador manda ISO con 'T' y 'Z'; la base las guarda como Django."""

    def test_timestamp_iso_se_guarda_normalizado_y_filtra_bien(self, authenticated_client):
        from django.db import connection
        cliente = ClienteFactory()
        r = authenticated_client.post('/api/v1/tables/comunicaciones', {
            'client_id': str(cliente.id), 'canal': 'whatsapp', 'cuerpo': 'hola',
            'enviado_at': '2026-10-17T00:34:00.000Z',
        }, format='json')
        assert r.status_code == 201, r.data
        crudo = connection.connection.execute(       # sin los conversores de Django
            'SELECT CAST(enviado_at AS TEXT) FROM comunicaciones WHERE id = ?', [r.data['id'].replace('-', '')])
        assert crudo.fetchone()[0] == '2026-10-17 00:34:00.000000'
        # Con zona: se pasa a UTC.
        assert views_generic.momento_sql('2026-10-16T19:34:00-05:00') == '2026-10-17 00:34:00.000000'
        # Y el filtro con ISO compara contra el mismo formato.
        antes = authenticated_client.get('/api/v1/tables/comunicaciones?enviado_at=lte.2026-10-17T00:33:59.000Z')
        despues = authenticated_client.get('/api/v1/tables/comunicaciones?enviado_at=lte.2026-10-17T00:34:01.000Z')
        assert len(antes.data) == 0 and len(despues.data) == 1
        assert despues.data[0]['enviado_at'].startswith('2026-10-17T00:34:00')

    def test_fecha_con_hora_se_guarda_como_fecha(self):
        assert views_generic.fecha_sql('2026-10-14T00:00:00.000Z') == '2026-10-14'
        assert views_generic.fecha_sql('2026-10-14') == '2026-10-14'


@pytest.mark.integration
def test_el_expediente_puede_generar_el_contrato_antes_de_que_exista_el_abonado(authenticated_client):
    """expedientesApi.generarContrato inserta con client_id null: el abonado nace en el alta."""
    plan = PlanVelocidadFactory()
    r = authenticated_client.post('/api/v1/tables/contratos', {
        'client_id': None, 'plan_id': str(plan.id), 'precio_mensual': 25,
        'estado': 'vigente', 'firma_estado': 'no_enviado',
    }, format='json')
    assert r.status_code == 201, r.data
    assert r.data['client_id'] is None


@pytest.mark.integration
class TestTiposDeRed:
    """INET/CIDR como en Postgres: en SQLite son texto y aceptaban cualquier cosa."""

    def _bloque(self, client, **campos):
        datos = {'nombre': 'Bloque', 'cidr': '10.50.0.0/24', 'gateway': '10.50.0.1', 'tipo': 'estatica'}
        datos.update(campos)
        return client.post('/api/v1/tables/subredes', datos, format='json')

    def test_ip_invalida_se_rechaza(self, authenticated_client):
        r = self._bloque(authenticated_client, gateway='QA gateway')
        assert r.status_code == 400
        # El mensaje es para la persona; el técnico queda en details.
        assert r.data['error'] == '«QA gateway» no es una dirección IP.'
        assert 'invalid input syntax for type inet' in r.data['details']

    def test_bloque_valido_y_red_repetida(self, authenticated_client):
        assert self._bloque(authenticated_client).status_code == 201
        # La misma red escrita con otra IP del bloque: idx_subredes_cidr la frena.
        r = self._bloque(authenticated_client, nombre='Otro', cidr='10.50.0.7/24', gateway='10.50.0.1')
        assert r.status_code in (400, 409), r.data

    def test_modificar_con_ip_invalida_es_400(self, authenticated_client):
        creado = self._bloque(authenticated_client, cidr='10.60.0.0/24', gateway='10.60.0.1')
        r = authenticated_client.patch(f"/api/v1/tables/subredes?id=eq.{creado.data['id']}",
                                       {'rango_desde': 'no-es-ip'}, format='json')
        assert r.status_code == 400 and r.data['code'] == '22P02'

    def test_validar_red(self):
        assert views_generic.validar_red('MACADDR', 'AA:BB:CC:DD:EE:FF') == 'AA:BB:CC:DD:EE:FF'
        with pytest.raises(views_generic.ValorInvalido):
            views_generic.validar_red('MACADDR', 'AA:BB')
        with pytest.raises(views_generic.ValorInvalido):
            views_generic.validar_red('CIDR', '10.0.0.5/24')     # cidr no admite bits de host


@pytest.mark.integration
def test_los_errores_de_la_base_se_explican_en_castellano(authenticated_client):
    """NOT NULL/UNIQUE de SQLite no llegan crudos a la pantalla: quedan en details."""
    r = authenticated_client.post('/api/v1/tables/tecnicos', {'nombre': None}, format='json')
    assert r.status_code == 400
    assert r.data['error'].startswith('Falta completar')
    assert 'NOT NULL' in r.data['details']
    from apps.dashboard.mensajes import humanizar
    assert humanizar('El abonado no tiene correo') is None      # lo legible no se toca
