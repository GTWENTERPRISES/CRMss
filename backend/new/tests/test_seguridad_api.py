"""
Quién ve y quién toca qué: tablas internas, seguridad por fila (RLS), rutas
de cada módulo, rutas del bot y sesiones (apps/core/rls.py,
apps/core/rutas_servicio.py, apps/core/sesiones.py, apps/red/views.py).
"""
import uuid

import pytest
from django.contrib.auth.models import User
from rest_framework import status
from rest_framework.test import APIClient
from rest_framework_simplejwt.tokens import RefreshToken

from apps.clientes.models import Cliente
from apps.core.models import Tecnico
from apps.dashboard import contexto
from apps.soporte.models import Ticket


def _cliente_de(usuario):
    c = APIClient()
    c.force_authenticate(user=usuario)
    return c


def _legajo(servicio_client, usuario, permisos, tecnico=None, rol='tecnico'):
    r = servicio_client.post('/api/v1/tables/usuarios_sistema', {
        'nombre': usuario.username, 'usuario': usuario.username, 'email': f'{usuario.username}@x.local',
        'rol': rol, 'auth_id': str(usuario.pk), 'permisos': permisos, 'activo': True,
        'tecnico_id': str(tecnico.pk) if tecnico else None,
    }, format='json')
    assert r.status_code == status.HTTP_201_CREATED, r.data
    return r.data['id']


@pytest.fixture
def tecnico_y_clientes(servicio_client):
    """Un técnico sin `clientes.cartera`: ve solo a los abonados de sus trabajos."""
    usuario = User.objects.create_user(username='tecnico1', password='x-Clave-larga-1')
    tecnico = Tecnico.objects.create(nombre='Técnico Uno')
    _legajo(servicio_client, usuario, ['soporte.ver'], tecnico)
    suyo = Cliente.objects.create(nombre='Abonado del técnico', identificacion='0912345675')
    ajeno = Cliente.objects.create(nombre='Abonado de otro', identificacion='1710034065')
    Ticket.objects.create(nombre='Sin internet', estado='abierto', client=suyo, tecnico=tecnico)
    return _cliente_de(usuario), suyo, ajeno


class TestTablasInternas:
    @pytest.mark.parametrize('tabla', ['auth_user', 'django_session', 'auth_permission',
                                       'token_blacklist_outstandingtoken', 'sqlite_master'])
    def test_no_existen_para_la_api(self, authenticated_client, tabla):
        assert authenticated_client.get(f'/api/v1/tables/{tabla}').status_code == status.HTTP_404_NOT_FOUND
        assert authenticated_client.get(f'/api/v1/tables/{tabla}/1').status_code == status.HTTP_404_NOT_FOUND
        assert authenticated_client.patch(f'/api/v1/tables/{tabla}?id=eq.1', {'x': 1}, format='json').status_code == 404

    def test_ni_siquiera_para_el_servicio(self, servicio_client):
        r = servicio_client.get('/api/v1/tables/auth_user')
        assert r.status_code == status.HTTP_404_NOT_FOUND
        assert b'password' not in r.content


class TestSeguridadPorFila:
    def test_el_tecnico_ve_solo_sus_abonados(self, tecnico_y_clientes):
        cliente, suyo, ajeno = tecnico_y_clientes
        r = cliente.get('/api/v1/tables/clientes?select=id,nombre')
        assert r.status_code == status.HTTP_200_OK
        assert [c['nombre'] for c in r.data] == ['Abonado del técnico']
        assert cliente.get(f'/api/v1/tables/clientes/{ajeno.pk}').status_code == status.HTTP_404_NOT_FOUND

    def test_tampoco_por_una_vista_security_invoker(self, tecnico_y_clientes):
        cliente, suyo, ajeno = tecnico_y_clientes
        r = cliente.get('/api/v1/tables/v_clientes_ficha?select=id')
        assert r.status_code == status.HTTP_200_OK
        assert {str(f['id']).replace('-', '') for f in r.data} == {suyo.pk.hex}

    def test_ni_por_un_embed(self, tecnico_y_clientes, servicio_client):
        cliente, suyo, ajeno = tecnico_y_clientes
        # comunicaciones no tiene política propia: el técnico ve las dos, pero
        # el abonado embebido sigue la RLS de clientes.
        for c, asunto in ((suyo, 'al suyo'), (ajeno, 'al otro')):
            r = servicio_client.post('/api/v1/tables/comunicaciones', {
                'client_id': str(c.pk), 'canal': 'email', 'asunto': asunto}, format='json')
            assert r.status_code == status.HTTP_201_CREATED, r.data
        r = cliente.get('/api/v1/tables/comunicaciones?select=asunto,clientes(nombre)')
        assert r.status_code == status.HTTP_200_OK, r.data
        por_asunto = {t['asunto']: t['clientes'] for t in r.data}
        assert por_asunto['al suyo'] == {'nombre': 'Abonado del técnico'}
        assert por_asunto['al otro'] is None

    def test_no_modifica_ni_borra_sin_la_cartera(self, tecnico_y_clientes):
        cliente, suyo, ajeno = tecnico_y_clientes
        # clientes: escribir exige `clientes.cartera`, aunque la ficha se vea.
        assert cliente.patch(f'/api/v1/tables/clientes/{suyo.pk}', {'nombre': 'X'}, format='json').status_code == 404
        assert cliente.patch('/api/v1/tables/clientes?nombre=like.Abonado*', {'nombre': 'X'}, format='json').data == []
        assert cliente.delete(f'/api/v1/tables/clientes/{ajeno.pk}').status_code == 404
        suyo.refresh_from_db()
        assert suyo.nombre == 'Abonado del técnico'
        assert Cliente.objects.filter(pk=ajeno.pk).exists()

    def test_con_cartera_completa_ve_a_todos(self, servicio_client):
        usuario = User.objects.create_user(username='admin1', password='x-Clave-larga-1')
        _legajo(servicio_client, usuario, ['*'], rol='admin')
        Cliente.objects.create(nombre='A', identificacion='0912345675')
        Cliente.objects.create(nombre='B', identificacion='1710034065')
        r = _cliente_de(usuario).get('/api/v1/tables/clientes?select=nombre')
        assert sorted(c['nombre'] for c in r.data) == ['A', 'B']

    def test_el_personal_no_escribe_legajos(self, authenticated_client, servicio_client, user):
        """Sin esto, cualquiera se agregaba `*` a sus propios permisos."""
        legajo = _legajo(servicio_client, user, ['soporte.ver'])
        r = authenticated_client.patch(f'/api/v1/tables/usuarios_sistema?id=eq.{legajo}',
                                       {'permisos': ['*']}, format='json')
        assert r.status_code == status.HTTP_403_FORBIDDEN
        assert r.data['code'] == '42501'
        r = authenticated_client.post('/api/v1/tables/usuarios_sistema', {
            'nombre': 'Yo', 'usuario': 'yo', 'email': 'yo@x.local', 'rol': 'super_admin', 'permisos': ['*'],
        }, format='json')
        assert r.status_code == status.HTTP_403_FORBIDDEN
        fila = servicio_client.get(f'/api/v1/tables/usuarios_sistema?id=eq.{legajo}').data[0]
        assert fila['permisos'] == ['soporte.ver']

    def test_tablas_que_solo_escriben_las_funciones(self, authenticated_client):
        """comision_ventas: `USING (false)` para escribir; las cifras salen del evaluador."""
        r = authenticated_client.post('/api/v1/tables/comision_ventas', {'vendedor_id': str(uuid.uuid4())}, format='json')
        assert r.status_code == status.HTTP_403_FORBIDDEN

    def test_las_notificaciones_son_de_cada_uno(self, servicio_client):
        ana = User.objects.create_user(username='ana', password='x-Clave-larga-1')
        beto = User.objects.create_user(username='beto', password='x-Clave-larga-1')
        legajo_ana = _legajo(servicio_client, ana, ['*'], rol='admin')
        legajo_beto = _legajo(servicio_client, beto, ['*'], rol='admin')
        for legajo in (legajo_ana, legajo_beto):
            r = servicio_client.post('/api/v1/tables/notificaciones', {
                'usuario_id': legajo, 'tipo': 'aviso', 'titulo': f'para {legajo}'}, format='json')
            assert r.status_code == status.HTTP_201_CREATED, r.data
        r = _cliente_de(ana).get('/api/v1/tables/notificaciones?select=usuario_id')
        assert [n['usuario_id'] for n in r.data] == [legajo_ana]
        # WITH CHECK: no puede dejarle una a otro.
        r = _cliente_de(ana).post('/api/v1/tables/notificaciones', {
            'usuario_id': legajo_beto, 'tipo': 'aviso', 'titulo': 'trampa'}, format='json')
        assert r.status_code == status.HTTP_403_FORBIDDEN
        assert servicio_client.get('/api/v1/tables/notificaciones?titulo=eq.trampa').data == []

    def test_el_hash_de_la_clave_del_portal_no_sale(self, authenticated_client):
        c = Cliente.objects.create(nombre='Con portal', identificacion='0912345675')
        Cliente.objects.filter(pk=c.pk).update(portal_clave_hash='hash-secreto')
        fila = authenticated_client.get(f'/api/v1/tables/clientes/{c.pk}').data
        assert 'portal_clave_hash' not in fila

    def test_el_contexto_no_pasa_de_una_peticion_a_otra(self, servicio_client, authenticated_client):
        servicio_client.get('/api/v1/tables/clientes')
        assert contexto.usuario_id() is None and not contexto.es_servicio()


def _con_jwt(usuario):
    """Con token de verdad: estas rutas las revisa un middleware de Django, antes de DRF."""
    c = APIClient()
    c.credentials(HTTP_AUTHORIZATION=f'Bearer {RefreshToken.for_user(usuario).access_token}')
    return c


class TestRutasDeModulo:
    @pytest.mark.parametrize('ruta', ['/api/v1/clientes/clientes/', '/api/v1/mikrotik/routers/',
                                      '/api/v1/whatsapp/conversaciones/', '/api/v1/tecnicos/'])
    def test_solo_el_servicio(self, user, superuser, ruta):
        assert _con_jwt(user).get(ruta).status_code == status.HTTP_403_FORBIDDEN
        assert _con_jwt(superuser).get(ruta).status_code == status.HTTP_200_OK

    def test_sin_sesion(self, api_client):
        assert api_client.post('/api/v1/mikrotik/bloquear-cliente/', {}, format='json').status_code == 401


class TestRutasDelBot:
    """Las atiende el middleware con la llave de integración: Django solo las reenvía."""

    @pytest.mark.parametrize('ruta', ['cliente/consultar-deuda', 'pagos/registrar', 'soporte/crear-ticket',
                                      'red/diagnostico-ont', 'ventas/planes'])
    def test_van_al_middleware_sin_identidad_inventada(self, api_client, mocker, ruta):
        llamada = mocker.patch('apps.red.views.requests.request')
        llamada.return_value.status_code = 401
        llamada.return_value.content = b'{"error": "Falta la llave de API"}'
        llamada.return_value.headers = {'Content-Type': 'application/json'}

        r = api_client.post(f'/api/v1/{ruta}?x=1', {'cedula': '0912345675'}, format='json',
                            HTTP_X_API_KEY='sk_prueba', HTTP_X_USUARIO_ID='1', HTTP_X_CLAVE_INTERNA='robada')
        assert r.status_code == 401
        metodo, destino = llamada.call_args.args[:2]
        assert destino.endswith(f'/api/v1/{ruta}?x=1')
        cabeceras = {k.lower(): v for k, v in llamada.call_args.kwargs['headers'].items()}
        assert cabeceras['x-api-key'] == 'sk_prueba'
        assert 'x-usuario-id' not in cabeceras
        assert cabeceras['x-clave-interna'] != 'robada'


class TestSesiones:
    def _entrar(self, api_client, usuario, clave):
        r = api_client.post('/api/v1/auth/token/', {'email': usuario, 'password': clave}, format='json')
        assert r.status_code == 200, r.data
        return r.data

    def test_cerrar_sesion_revoca_el_refresh(self, api_client, user):
        tokens = self._entrar(api_client, 'test@example.com', 'testpass123')
        assert api_client.post('/api/v1/auth/token/blacklist/', {'refresh': tokens['refresh']}, format='json').status_code == 200
        assert api_client.post('/api/v1/auth/token/refresh/', {'refresh': tokens['refresh']}, format='json').status_code == 401

    def test_un_refresh_rotado_no_sirve_dos_veces(self, api_client, user):
        tokens = self._entrar(api_client, 'test@example.com', 'testpass123')
        assert api_client.post('/api/v1/auth/token/refresh/', {'refresh': tokens['refresh']}, format='json').status_code == 200
        assert api_client.post('/api/v1/auth/token/refresh/', {'refresh': tokens['refresh']}, format='json').status_code == 401

    def test_cambiar_la_clave_corta_las_otras_sesiones(self, api_client, user):
        otra = self._entrar(api_client, 'test@example.com', 'testpass123')
        esta = self._entrar(api_client, 'test@example.com', 'testpass123')
        api_client.credentials(HTTP_AUTHORIZATION=f'Bearer {esta["access"]}')
        r = api_client.post('/api/v1/auth/change-password',
                            {'old_password': 'testpass123', 'new_password': 'Otra-clave-larga-2026'}, format='json')
        assert r.status_code == 200 and r.data['refresh']
        api_client.credentials()
        assert api_client.post('/api/v1/auth/token/refresh/', {'refresh': otra['refresh']}, format='json').status_code == 401
        assert api_client.post('/api/v1/auth/token/refresh/', {'refresh': r.data['refresh']}, format='json').status_code == 200


class TestArchivos:
    """El documento de un abonado lo abre quien puede abrir al abonado (apps/core/storage_reglas.py)."""

    @pytest.fixture
    def media(self, monkeypatch, tmp_path):
        from django.core.files.storage import FileSystemStorage
        from apps.core import views_storage
        monkeypatch.setattr(views_storage, 'default_storage', FileSystemStorage(location=tmp_path))
        return tmp_path

    def _archivo(self, media, bucket, ruta):
        archivo = media / 'buckets' / bucket / ruta
        archivo.parent.mkdir(parents=True, exist_ok=True)
        archivo.write_bytes(b'%PDF-1.4 prueba')

    def _leer(self, cliente, url):
        r = cliente.get(url)
        if hasattr(r, 'streaming_content'):
            b''.join(r.streaming_content)
            r.close()
        return r.status_code

    def test_el_tecnico_abre_solo_los_de_sus_abonados(self, tecnico_y_clientes, media):
        cliente, suyo, ajeno = tecnico_y_clientes
        self._archivo(media, 'documentos', f'{suyo.pk}/cedula.pdf')
        self._archivo(media, 'documentos', f'{ajeno.pk}/cedula.pdf')
        assert self._leer(cliente, f'/api/v1/storage/documentos/{suyo.pk}/cedula.pdf') == 200
        assert self._leer(cliente, f'/api/v1/storage/documentos/{ajeno.pk}/cedula.pdf') == 404
        # Sin firma para lo ajeno: la URL firmada después no pide sesión.
        assert cliente.get(f'/api/v1/storage/documentos/signed-url?path={ajeno.pk}/cedula.pdf').status_code == 404
        assert cliente.get(f'/api/v1/storage/documentos/signed-url?path={suyo.pk}/cedula.pdf').status_code == 200
        assert cliente.delete(f'/api/v1/storage/documentos/{ajeno.pk}/cedula.pdf').status_code == 404
        assert (media / 'buckets' / 'documentos' / str(ajeno.pk) / 'cedula.pdf').exists()

    def test_el_listado_muestra_solo_las_carpetas_visibles(self, tecnico_y_clientes, media):
        cliente, suyo, ajeno = tecnico_y_clientes
        self._archivo(media, 'documentos', f'{suyo.pk}/a.pdf')
        self._archivo(media, 'documentos', f'{ajeno.pk}/b.pdf')
        raiz = cliente.get('/api/v1/storage/documentos/list').data
        assert [d['name'] for d in raiz] == [str(suyo.pk)]
        assert cliente.get(f'/api/v1/storage/documentos/list?prefix={ajeno.pk}/').data == []

    def test_no_sube_a_la_carpeta_de_otro(self, tecnico_y_clientes, media):
        from django.core.files.uploadedfile import SimpleUploadedFile
        cliente, suyo, ajeno = tecnico_y_clientes
        r = cliente.post('/api/v1/storage/documentos', {
            'file': SimpleUploadedFile('x.pdf', b'%PDF'), 'path': f'{ajeno.pk}/x.pdf'}, format='multipart')
        assert r.status_code == status.HTTP_403_FORBIDDEN
        r = cliente.post('/api/v1/storage/documentos', {
            'file': SimpleUploadedFile('x.pdf', b'%PDF'), 'path': f'{suyo.pk}/x.pdf'}, format='multipart')
        assert r.status_code == status.HTTP_201_CREATED

    @pytest.mark.parametrize('ruta', ['{suyo}/../{ajeno}/cedula.pdf', '../tickets/x.pdf', '{suyo}/./x.pdf'])
    def test_no_se_sale_de_la_carpeta(self, tecnico_y_clientes, media, ruta):
        cliente, suyo, ajeno = tecnico_y_clientes
        self._archivo(media, 'documentos', f'{ajeno.pk}/cedula.pdf')
        ruta = ruta.format(suyo=suyo.pk, ajeno=ajeno.pk)
        assert cliente.get(f'/api/v1/storage/documentos/signed-url?path={ruta}').status_code == 400

    def test_el_servicio_y_los_buckets_sin_regla(self, servicio_client, authenticated_client, media):
        self._archivo(media, 'documentos', 'cualquiera/x.pdf')
        self._archivo(media, 'avatars', 'yo.png')
        assert self._leer(servicio_client, '/api/v1/storage/documentos/cualquiera/x.pdf') == 200
        assert self._leer(authenticated_client, '/api/v1/storage/avatars/yo.png') == 200


class TestRpc:
    """Las funciones SECURITY INVOKER piden el permiso de lo que hacen (apps/core/rpc_permisos.py)."""

    def test_ninguna_funcion_invoker_queda_sin_decidir(self):
        from apps.core.rpc_permisos import LIBRES, PERMISOS, SOLO_SERVICIO
        from apps.dashboard.esquema import leer_esquema
        e = leer_esquema()
        de_disparadores = {t.funcion for t in e.triggers.values()}
        sueltas = [n for n, f in e.funciones.items()
                   if not f.definidor and n not in de_disparadores
                   and n not in PERMISOS and n not in SOLO_SERVICIO and n not in LIBRES]
        assert sueltas == [], f'Decidir quién puede llamar a: {sueltas}'

    def test_cobrar_pide_pagos_registrar(self, servicio_client):
        sin = User.objects.create_user(username='sin_cobro', password='x-Clave-larga-1')
        con = User.objects.create_user(username='cajero', password='x-Clave-larga-1')
        _legajo(servicio_client, sin, ['soporte.ver'])
        _legajo(servicio_client, con, ['pagos.registrar'], rol='cajero')
        cuerpo = {'p_client_id': str(uuid.uuid4()), 'p_monto': 10}
        assert _cliente_de(sin).post('/api/v1/rpc/aplicar_cobro', cuerpo, format='json').status_code == 403
        assert _cliente_de(con).post('/api/v1/rpc/aplicar_cobro', cuerpo, format='json').status_code != 403

    def test_las_del_middleware_solo_el_servicio(self, authenticated_client, servicio_client):
        cuerpo = {'p_tipo': 'factura', 'p_establecimiento': '001', 'p_punto_emision': '001'}
        assert authenticated_client.post('/api/v1/rpc/sri_next_secuencial', cuerpo, format='json').status_code == 403
        assert servicio_client.post('/api/v1/rpc/sri_next_secuencial', cuerpo, format='json').status_code != 403


class TestTareasProgramadas:
    def test_celery_no_duplica_lo_del_middleware(self):
        from config.celery import TAREAS_DEL_MIDDLEWARE, app
        tareas = {t['task'] for t in app.conf.beat_schedule.values()}
        assert not tareas & set(TAREAS_DEL_MIDDLEWARE)
        assert 'apps.core.tasks.respaldar_base' in tareas


class TestRespaldos:
    def _base(self, ruta):
        import sqlite3
        con = sqlite3.connect(ruta)
        con.execute('CREATE TABLE clientes (id TEXT, nombre TEXT)')
        from apps.core.fields import cifrar
        con.execute('INSERT INTO clientes VALUES (?, ?)', ['1', cifrar('Ana')])
        con.commit()
        con.close()

    def test_la_prueba_de_restauracion_lee_lo_cifrado(self, tmp_path):
        from apps.core.respaldos import probar_restauracion
        ruta = tmp_path / 'db-20260101-000000.sqlite3'
        self._base(ruta)
        r = probar_restauracion(ruta, {'clientes': 1})
        assert r['integridad'] == 'ok' and r['cifrados_leidos'] == 1

    def test_con_otra_clave_el_respaldo_no_sirve(self, tmp_path, settings):
        from cryptography.fernet import Fernet
        from apps.core import fields
        from apps.core.respaldos import RespaldoFallido, probar_restauracion
        ruta = tmp_path / 'db-20260101-000000.sqlite3'
        self._base(ruta)
        settings.FIELD_ENCRYPTION_KEY = Fernet.generate_key().decode()
        fields.reiniciar_claves()
        try:
            with pytest.raises(RespaldoFallido, match='FIELD_ENCRYPTION_KEY'):
                probar_restauracion(ruta, {'clientes': 1})
        finally:
            # `settings` devuelve la clave al terminar; la caché se vacía ya.
            fields.reiniciar_claves()

    def test_la_rotacion_deja_los_ultimos_y_no_toca_lo_ajeno(self, tmp_path, settings):
        from apps.core.respaldos import rotar
        settings.RESPALDOS_DIR = tmp_path
        for d in range(1, 6):
            for ext in ('sqlite3', 'json'):
                (tmp_path / f'db-2026010{d}-000000.{ext}').write_text('x')
        (tmp_path / 'db-antes-de-cifrar-20261017-164001.sqlite3').write_text('x')
        assert rotar(conservar=2) == 3
        quedan = sorted(f.name for f in tmp_path.iterdir())
        assert 'db-antes-de-cifrar-20261017-164001.sqlite3' in quedan
        assert [n for n in quedan if n.endswith('.sqlite3') and 'antes' not in n] == [
            'db-20260104-000000.sqlite3', 'db-20260105-000000.sqlite3']


class TestWebhookWhatsapp:
    def test_la_ruta_vieja_va_al_webhook_firmado(self, api_client, mocker):
        llamada = mocker.patch('apps.red.views.requests.request')
        llamada.return_value.status_code = 401
        llamada.return_value.content = b''
        llamada.return_value.headers = {}
        cuerpo = b'{"entry": []}'
        api_client.generic('POST', '/api/v1/whatsapp/webhook/', cuerpo, content_type='application/json',
                           HTTP_X_HUB_SIGNATURE_256='sha256=abc')
        destino = llamada.call_args.args[1]
        assert destino.endswith('/api/webhooks/whatsapp')
        assert llamada.call_args.kwargs['data'] == cuerpo
        assert llamada.call_args.kwargs['headers']['X-Hub-Signature-256'] == 'sha256=abc'
