"""
Cifrado en reposo de los datos personales (apps/core/fields.py, apps/core/cifrado.py).

Lo que se prueba es la promesa: en el archivo de la base solo hay tokens
ilegibles, y todo lo que usa la base —el ORM, la API, las vistas, los
procesos— sigue viendo, buscando y ordenando el texto en claro.
"""
import pytest
from django.core.management import call_command
from django.db import connection
from django.test import override_settings

from apps.core.cifrado import aplicar_cifrado, columnas_cifradas
from apps.core.fields import cifrar, descifrar, reiniciar_claves
from .factories import ClienteFactory


def crudo(tabla, columna, pk):
    """Lo que hay de verdad en el archivo de la base, sin pasar por Django."""
    with connection.cursor() as c:
        c.execute(f'SELECT "{columna}" FROM "{tabla}" WHERE id = %s', [pk.hex])
        return c.fetchone()[0]


@pytest.mark.django_db
class TestEnLaBase:

    def test_los_datos_personales_se_guardan_ilegibles(self):
        cliente = ClienteFactory(nombre='Ana Torres', identificacion='0912345675', telefono='0991234567',
                                 email='ana@correo.com', direccion='Av. 9 de Octubre 100')
        for col, valor in [('nombre', 'Ana Torres'), ('identificacion', '0912345675'), ('telefono', '0991234567'),
                           ('email', 'ana@correo.com'), ('direccion', 'Av. 9 de Octubre 100')]:
            guardado = crudo('clientes', col, cliente.id)
            assert guardado.startswith('enc::'), col
            assert valor not in guardado, col
        cliente.refresh_from_db()
        assert cliente.nombre == 'Ana Torres'

    def test_el_mismo_dato_da_tokens_distintos(self):
        # Fernet usa un IV al azar: no se puede adivinar comparando tokens.
        assert cifrar('0912345675') != cifrar('0912345675')
        assert descifrar(cifrar('0912345675')) == '0912345675'

    def test_las_columnas_que_dicen_los_modelos(self):
        cifradas = columnas_cifradas()
        assert {'nombre', 'identificacion', 'telefono', 'email', 'direccion', 'clave_ppp'} <= cifradas['clientes']
        assert {'nombre', 'identificacion', 'telefono'} <= cifradas['prospectos']
        assert 'cliente_nombre' in cifradas['pagos']


@pytest.mark.django_db
class TestBuscarYOrdenar:

    def test_orm_busca_por_el_texto(self):
        from apps.clientes.models import Cliente
        ClienteFactory(nombre='Ana Torres', identificacion='0912345675')
        ClienteFactory(nombre='Bruno Díaz', identificacion='1710034065')
        assert Cliente.objects.get(identificacion='0912345675').nombre == 'Ana Torres'
        assert list(Cliente.objects.filter(nombre__icontains='TORRES').values_list('nombre', flat=True)) == ['Ana Torres']
        assert Cliente.objects.filter(identificacion__in=['1710034065', 'x']).count() == 1
        assert Cliente.objects.filter(nombre__startswith='Bru').count() == 1

    def test_la_api_filtra_y_ordena_por_el_texto(self, authenticated_client):
        for nombre in ('Carla Mena', 'Ana Torres', 'Bruno Díaz'):
            ClienteFactory(nombre=nombre)
        r = authenticated_client.get('/api/v1/tables/clientes?select=nombre&order=nombre.asc')
        assert r.status_code == 200, r.data
        assert [f['nombre'] for f in r.data] == ['Ana Torres', 'Bruno Díaz', 'Carla Mena']
        r = authenticated_client.get('/api/v1/tables/clientes?nombre=ilike.*torr*&select=nombre')
        assert [f['nombre'] for f in r.data] == ['Ana Torres']
        r = authenticated_client.get('/api/v1/tables/clientes?or=(nombre.ilike.*mena*,identificacion.eq.nada)&select=nombre')
        assert [f['nombre'] for f in r.data] == ['Carla Mena']

    def test_las_vistas_devuelven_y_filtran_en_claro(self, authenticated_client):
        cliente = ClienteFactory(nombre='Ana Torres', identificacion='0912345675', telefono='0991234567')
        r = authenticated_client.get('/api/v1/tables/v_clientes_ficha?identificacion=eq.0912345675&select=id,nombre,telefono')
        assert r.status_code == 200, r.data
        assert r.data == [{'id': str(cliente.id), 'nombre': 'Ana Torres', 'telefono': '0991234567'}]

    def test_guardar_desde_la_api_cifra(self, authenticated_client):
        cliente = ClienteFactory(telefono='0991111111')
        r = authenticated_client.patch(f'/api/v1/tables/clientes?id=eq.{cliente.id}', {'telefono': '0992222222'}, format='json')
        assert r.status_code == 200, r.data
        assert crudo('clientes', 'telefono', cliente.id).startswith('enc::')
        assert descifrar(crudo('clientes', 'telefono', cliente.id)) == '0992222222'


class TestSqlDeVistasYProcesos:
    """El traductor pone pg_descifrar al leer y pg_cifrar al escribir."""

    def traducir(self, sql):
        from apps.dashboard.plpgsql_motor import motor
        return motor().traductor.traducir(sql)[0].lower()

    @pytest.mark.django_db
    def test_lectura(self):
        sql = self.traducir("SELECT c.nombre, f.numero FROM clientes c JOIN facturas f ON f.client_id = c.id "
                            "WHERE c.identificacion = '1' ORDER BY c.nombre")
        assert 'pg_descifrar(c.nombre) as nombre' in sql
        assert "pg_descifrar(c.identificacion) = '1'" in sql
        assert 'pg_descifrar(f.numero)' not in sql

    @pytest.mark.django_db
    def test_escritura(self):
        assert "set telefono = pg_cifrar('099')" in self.traducir("UPDATE clientes SET telefono = '099' WHERE id = 'x'")
        assert "values ('x', pg_cifrar('ana'))" in self.traducir("INSERT INTO clientes (id, nombre) VALUES ('x', 'ana')")
        sql = self.traducir("INSERT INTO pagos (id, cliente_nombre) SELECT c.id, c.nombre FROM clientes c")
        assert 'pg_cifrar(pg_descifrar(c.nombre))' in sql

    @pytest.mark.django_db
    def test_subconsulta_correlacionada(self):
        sql = self.traducir("SELECT p.id FROM prospectos p WHERE EXISTS "
                            "(SELECT 1 FROM clientes c WHERE c.identificacion = p.identificacion)")
        assert 'pg_descifrar(c.identificacion) = pg_descifrar(p.identificacion)' in sql

    def test_sin_columnas_cifradas_no_cambia_nada(self):
        import sqlglot
        arbol = sqlglot.parse_one('SELECT nombre FROM olts')
        assert aplicar_cifrado(arbol).sql() == 'SELECT nombre FROM olts'


@pytest.mark.django_db
def test_cambiar_la_clave_sin_perder_datos(settings):
    cliente = ClienteFactory(nombre='Ana Torres')
    viejo = crudo('clientes', 'nombre', cliente.id)
    clave_vieja = settings.FIELD_ENCRYPTION_KEY
    try:
        with override_settings(FIELD_ENCRYPTION_KEY='otra-clave-nueva', FIELD_ENCRYPTION_KEYS_ANTERIORES=[clave_vieja]):
            reiniciar_claves()
            assert descifrar(viejo) == 'Ana Torres', 'con la vieja en ANTERIORES se sigue leyendo'
            call_command('recifrar')
            nuevo = crudo('clientes', 'nombre', cliente.id)
            assert nuevo != viejo
        with override_settings(FIELD_ENCRYPTION_KEY='otra-clave-nueva', FIELD_ENCRYPTION_KEYS_ANTERIORES=[]):
            reiniciar_claves()
            assert descifrar(nuevo) == 'Ana Torres', 'después de recifrar alcanza con la nueva'
            assert descifrar(viejo) == viejo, 'lo cifrado con la vieja ya no se abre sin ella'
    finally:
        reiniciar_claves()
