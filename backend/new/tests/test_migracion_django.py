"""
Tests de la migración de la base a Django.

Lo que se comprueba acá es lo que el dashboard da por hecho y que no se veía en
ningún test: que las vistas `v_*` que pide cada pantalla devuelvan datos en vez
de una lista vacía silenciosa, y que la administración de credenciales (el
la administración de credenciales de antes) tenga las dos mitades: crear y listar.
"""
import pytest
from django.contrib.auth.models import User
from django.urls import resolve
from rest_framework import status

from apps.core import views_vistas_fallback
from apps.core.embeds import partir_select
from apps.core.views_rpc import funcion_retorna_conjunto
from .factories import TicketFactory


@pytest.mark.integration
class TestVistasDelDashboard:
    """El dispatcher de `/api/v1/tables/v_*`."""

    def test_vista_desconocida_devuelve_vacio_y_no_rompe(self, authenticated_client):
        """
        Una vista que no está ni en la base ni emulada devuelve [] con código
        200: es un pendiente de migración, no un error que apague la pantalla.
        """
        response = authenticated_client.get('/api/v1/tables/v_no_existe_esta_vista')
        assert response.status_code == status.HTTP_200_OK
        assert response.data == []

    def test_vista_emulada_devuelve_los_datos(self, authenticated_client):
        """
        En desarrollo (SQLite) `v_tickets` no existe como vista SQL, así que cae
        en la emulación por ORM —que antes ni se alcanzaba, porque el catch-all
        `v_vacia` la tapaba con una lista vacía.
        """
        TicketFactory.create_batch(2)

        response = authenticated_client.get('/api/v1/tables/v_tickets')

        assert response.status_code == status.HTTP_200_OK
        assert len(response.data) == 2

    def test_vista_exige_sesion(self, api_client):
        response = api_client.get('/api/v1/tables/v_tickets')
        assert response.status_code == status.HTTP_401_UNAUTHORIZED

    def test_la_vista_de_la_base_gana_sobre_la_emulacion(self, authenticated_client, monkeypatch):
        """
        Si la vista existe en la base, se sirve desde ahí y no desde la
        emulación: la vista real calcula columnas (plan, saldo, consumo) que la
        emulación devuelve en cero, porque no tiene de dónde sacarlas.
        """
        monkeypatch.setattr(views_vistas_fallback, 'columnas_reales', lambda nombre: {'id', 'nombre'})

        llamado = {}

        def raw_select_falso(request, nombre):
            llamado['nombre'] = nombre
            return views_vistas_fallback.Response([{'id': 1, 'nombre': 'desde postgres'}])

        monkeypatch.setattr(views_vistas_fallback, 'raw_select', raw_select_falso)

        response = authenticated_client.get('/api/v1/tables/v_cartera_kpis')

        assert llamado['nombre'] == 'v_cartera_kpis'
        assert response.data == [{'id': 1, 'nombre': 'desde postgres'}]

    def test_todas_las_vistas_emuladas_estan_registradas(self):
        """
        El registro cubre las que el dashboard consulta y tienen emulación. Si
        alguna se cae del diccionario, en SQLite pasa a devolver [] sin que nadie
        se entere.
        """
        esperadas = {
            'v_clientes_ficha', 'v_saldo_clientes', 'v_tickets', 'v_onus_clientes',
            'v_olt_resumen', 'v_pon_puertos', 'v_onus_por_dia', 'v_esperando_autorizacion',
        }
        assert esperadas <= set(views_vistas_fallback.VISTAS_ORM)

    def test_la_ruta_de_vistas_no_tapa_el_crud_de_tablas(self, authenticated_client):
        """`clientes` (una tabla) sigue entrando por el handler genérico."""
        response = authenticated_client.get('/api/v1/tables/clientes')
        assert response.status_code in (status.HTTP_200_OK, status.HTTP_404_NOT_FOUND)


@pytest.mark.integration
class TestCredencialesDelPersonal:
    """`/api/v1/auth/users`: la mitad administrativa que usaba el middleware."""

    @pytest.fixture
    def staff_client(self, api_client):
        staff = User.objects.create_user(
            username='admin_personal',
            email='admin@example.com',
            password='clave-de-prueba',
            is_staff=True,
        )
        api_client.force_authenticate(user=staff)
        return api_client

    def test_crear_credencial(self, staff_client):
        response = staff_client.post('/api/v1/auth/users', {
            'email': 'tecnico@example.com',
            'password': 'clave-inicial',
            'first_name': 'Ana',
            'last_name': 'Pérez',
        }, format='json')

        assert response.status_code == status.HTTP_201_CREATED
        assert response.data['id']
        assert response.data['email'] == 'tecnico@example.com'
        assert User.objects.filter(email='tecnico@example.com').exists()

    def test_listar_credenciales_filtrando_por_correo(self, staff_client):
        User.objects.create_user(username='otro', email='otro@example.com', password='x')

        response = staff_client.get('/api/v1/auth/users?email=eq.otro@example.com')

        assert response.status_code == status.HTTP_200_OK
        assert [u['email'] for u in response.data] == ['otro@example.com']

    def test_correo_repetido_avisa(self, staff_client):
        User.objects.create_user(username='repetido', email='repetido@example.com', password='x')

        response = staff_client.post('/api/v1/auth/users', {
            'email': 'repetido@example.com',
            'password': 'otra-clave',
        }, format='json')

        assert response.status_code == status.HTTP_400_BAD_REQUEST

    def test_un_usuario_comun_no_administra_credenciales(self, authenticated_client):
        response = authenticated_client.get('/api/v1/auth/users')
        assert response.status_code == status.HTTP_403_FORBIDDEN

    def test_sin_sesion_no_se_puede_crear_credencial(self, api_client):
        """Antes `/auth/register` era una puerta abierta: cualquiera se creaba."""
        response = api_client.post('/api/v1/auth/register', {
            'email': 'colado@example.com',
            'password': 'clave',
        }, format='json')

        assert response.status_code == status.HTTP_401_UNAUTHORIZED


@pytest.mark.integration
class TestRutasRpc:
    """El ejecutor genérico no puede comerse a las funciones específicas."""

    def test_las_funciones_conocidas_tienen_su_propia_vista(self):
        assert resolve('/api/v1/rpc/clientes_estadisticas_basicas').url_name == 'rpc-clientes-stats'
        assert resolve('/api/v1/rpc/top_pagadores').url_name == 'rpc-top-pagadores'
        assert resolve('/api/v1/rpc/otra_funcion_cualquiera').url_name == 'rpc-execute'

    def test_sin_postgres_no_se_adivina_si_la_funcion_devuelve_conjunto(self):
        """
        En SQLite no hay `pg_proc`: el criterio tiene que quedar en None para no
        cambiar el comportamiento del entorno de desarrollo.
        """
        assert funcion_retorna_conjunto('cualquiera') is None


@pytest.mark.integration
class TestStorageFirmado:
    """
    El bucket es privado: lo que abre un archivo sin sesión es la firma, porque
    un `<img src>` no manda la cabecera Authorization.
    """

    RUTA = '00000000000000000000000000000000/cedula.pdf'

    @pytest.fixture
    def media(self, monkeypatch, tmp_path):
        from django.core.files.storage import FileSystemStorage
        from apps.core import views_storage

        monkeypatch.setattr(views_storage, 'default_storage', FileSystemStorage(location=tmp_path))
        # El archivo cuelga de la carpeta de su abonado (apps/core/storage_reglas.py).
        from apps.clientes.models import Cliente
        self.RUTA = f'{Cliente.objects.create(nombre="Con cédula").pk}/cedula.pdf'
        return tmp_path

    def _subir(self, media, bucket='documentos'):
        archivo = media / 'buckets' / bucket / self.RUTA
        archivo.parent.mkdir(parents=True, exist_ok=True)
        archivo.write_bytes(b'%PDF-1.4 contenido de prueba')

    def test_borrar_un_archivo(self, authenticated_client, media):
        """`storage.remove()` manda DELETE a la misma URL de la descarga: daba 405."""
        self._subir(media)
        bajada = authenticated_client.get(f'/api/v1/storage/documentos/{self.RUTA}')
        assert bajada.status_code == 200
        b''.join(bajada.streaming_content)
        bajada.close()          # en Windows un archivo abierto no se puede borrar

        r = authenticated_client.delete(f'/api/v1/storage/documentos/{self.RUTA}')
        assert r.status_code == 200, r.content
        assert not (media / 'buckets' / 'documentos' / self.RUTA).exists()
        assert authenticated_client.delete(f'/api/v1/storage/documentos/{self.RUTA}').status_code == 404

    def test_borrar_exige_sesion(self, api_client, media):
        self._subir(media)
        assert api_client.delete(f'/api/v1/storage/documentos/{self.RUTA}').status_code == 401
        assert (media / 'buckets' / 'documentos' / self.RUTA).exists()

    def test_la_url_firmada_descarga_sin_sesion(self, authenticated_client, media, api_client):
        self._subir(media)

        pedido = authenticated_client.get(
            f'/api/v1/storage/documentos/signed-url?path={self.RUTA}&segundos=300'
        )
        assert pedido.status_code == status.HTTP_200_OK

        respuesta = api_client.get(pedido.data['signedUrl'])

        assert respuesta.status_code == status.HTTP_200_OK
        assert respuesta['Content-Type'] == 'application/pdf'

    def test_la_firma_no_sirve_para_otro_archivo(self, authenticated_client, media, api_client):
        self._subir(media)
        self._subir(media, bucket='tickets')

        pedido = authenticated_client.get(
            f'/api/v1/storage/documentos/signed-url?path={self.RUTA}&segundos=300'
        )

        # Mismo token, otro bucket: el archivo no se entrega.
        cambiada = pedido.data['signedUrl'].replace('/documentos/', '/tickets/')
        assert api_client.get(cambiada).status_code == status.HTTP_403_FORBIDDEN

    def test_la_firma_vencida_no_entrega(self, media, api_client):
        from django.core import signing
        from apps.core.views_storage import SAL_FIRMA
        import time as reloj

        self._subir(media)

        vencida = signing.dumps(
            {'bucket': 'documentos', 'path': self.RUTA, 'exp': reloj.time() - 10},
            salt=SAL_FIRMA,
            compress=True,
        )

        respuesta = api_client.get(
            f'/api/v1/storage/documentos/signed/{self.RUTA}?t={vencida}'
        )

        assert respuesta.status_code == status.HTTP_403_FORBIDDEN

    def test_la_firma_inventada_no_entrega(self, media, api_client):
        self._subir(media)

        respuesta = api_client.get(
            f'/api/v1/storage/documentos/signed/{self.RUTA}?t=inventada'
        )

        assert respuesta.status_code == status.HTTP_403_FORBIDDEN

    def test_pedir_la_firma_si_exige_sesion(self, api_client):
        respuesta = api_client.get(
            f'/api/v1/storage/documentos/signed-url?path={self.RUTA}'
        )
        assert respuesta.status_code == status.HTTP_401_UNAUTHORIZED


@pytest.mark.integration
class TestEmbeds:
    """Los `select('*, otra_tabla(cols)')` que antes respondían 400."""

    def test_embed_de_muchos_a_uno(self, authenticated_client):
        ticket = TicketFactory()

        response = authenticated_client.get('/api/v1/tables/tickets?select=*,clientes(nombre)')

        assert response.status_code == status.HTTP_200_OK
        assert response.data[0]['clientes']['nombre'] == ticket.client.nombre

    def test_embed_de_uno_a_muchos(self, authenticated_client):
        ticket = TicketFactory()

        response = authenticated_client.get(
            f'/api/v1/tables/clientes?select=*,tickets(estado)&id=eq.{ticket.client_id}'
        )

        assert response.status_code == status.HTTP_200_OK
        assert [t['estado'] for t in response.data[0]['tickets']] == ['abierto']

    def test_el_select_con_embed_no_pierde_las_columnas_pedidas(self, authenticated_client):
        TicketFactory()

        response = authenticated_client.get(
            '/api/v1/tables/tickets?select=id,estado,clientes(nombre)'
        )

        assert response.status_code == status.HTTP_200_OK
        assert set(response.data[0]) == {'id', 'estado', 'clientes'}


class TestPartirSelect:
    """El parseo del `select`, que es lo que decide qué es columna y qué es embed."""

    def test_separa_columnas_de_embeds(self):
        base, embeds = partir_select(
            '*, proveedores(nombre), compra_items(*, articulos(nombre, unidad))'
        )
        assert base == ['*']
        assert embeds == [
            ('proveedores', 'nombre'),
            ('compra_items', '*, articulos(nombre, unidad)'),
        ]

    def test_sin_embeds(self):
        base, embeds = partir_select('id, nombre, estado')
        assert base == ['id', 'nombre', 'estado']
        assert embeds == []

    def test_vacio(self):
        assert partir_select(None) == ([], [])
