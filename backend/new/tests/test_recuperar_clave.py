"""
Recuperación de contraseña con un código al correo: el camino completo y lo que
tiene que impedir (averiguar cuentas, adivinar el código, reusarlo).
"""
import re
from datetime import timedelta

import pytest
from django.contrib.auth.models import User
from django.core import mail
from django.core.cache import cache
from django.utils import timezone
from rest_framework.test import APIClient

from apps.core.models import CodigoRecuperacion

CLAVE_NUEVA = 'Faro-Azul-2026!'


@pytest.fixture(autouse=True)
def sin_limites():
    """Los límites por IP viven en la caché: cada test empieza de cero."""
    cache.clear()
    yield
    cache.clear()


@pytest.fixture
def cliente():
    return APIClient()


@pytest.fixture
def ana(db):
    return User.objects.create_user('ana', 'ana@taller.local', 'vieja-clave-123')


def pedir(cliente, email):
    return cliente.post('/api/v1/auth/recuperar', {'email': email}, format='json')


def codigo_del_correo():
    return re.search(r'\b(\d{6})\b', mail.outbox[-1].body).group(1)


def verificar(cliente, email, codigo):
    return cliente.post('/api/v1/auth/recuperar/verificar', {'email': email, 'codigo': codigo}, format='json')


def cambiar(cliente, token, password=CLAVE_NUEVA):
    return cliente.post('/api/v1/auth/recuperar/cambiar', {'token': token, 'password': password}, format='json')


@pytest.mark.integration
class TestRecuperarClave:

    def test_camino_completo(self, cliente, ana):
        r = pedir(cliente, 'ANA@taller.local')          # el correo no distingue mayúsculas
        assert r.status_code == 200 and r.data['ok']
        assert len(mail.outbox) == 1 and mail.outbox[0].to == ['ana@taller.local']

        r = verificar(cliente, 'ana@taller.local', codigo_del_correo())
        assert r.status_code == 200, r.data

        r = cambiar(cliente, r.data['token'])
        assert r.status_code == 200, r.data
        ana.refresh_from_db()
        assert ana.check_password(CLAVE_NUEVA)

        # Y entra con la nueva.
        r = cliente.post('/api/v1/auth/token/', {'email': 'ana@taller.local', 'password': CLAVE_NUEVA}, format='json')
        assert r.status_code == 200 and 'access' in r.data

    def test_un_correo_que_no_existe_contesta_igual(self, cliente, ana):
        existe = pedir(cliente, 'ana@taller.local')
        cache.clear()
        no_existe = pedir(cliente, 'nadie@taller.local')
        assert existe.status_code == no_existe.status_code == 200
        assert existe.data == no_existe.data
        assert len(mail.outbox) == 1

    def test_el_codigo_se_guarda_como_hash(self, cliente, ana):
        pedir(cliente, 'ana@taller.local')
        registro = CodigoRecuperacion.objects.get(usuario=ana)
        assert codigo_del_correo() not in registro.codigo_hash

    def test_codigo_equivocado_y_tope_de_intentos(self, cliente, ana):
        pedir(cliente, 'ana@taller.local')
        bueno = codigo_del_correo()
        malo = '000000' if bueno != '000000' else '111111'
        for _ in range(5):
            assert verificar(cliente, 'ana@taller.local', malo).status_code == 400
        # Agotado: ni el bueno sirve ya.
        assert verificar(cliente, 'ana@taller.local', bueno).status_code == 400

    def test_el_codigo_vence(self, cliente, ana):
        pedir(cliente, 'ana@taller.local')
        CodigoRecuperacion.objects.filter(usuario=ana).update(expira_en=timezone.now() - timedelta(seconds=1))
        assert verificar(cliente, 'ana@taller.local', codigo_del_correo()).status_code == 400

    def test_pedir_otro_anula_el_anterior(self, cliente, ana):
        pedir(cliente, 'ana@taller.local')
        primero = codigo_del_correo()
        CodigoRecuperacion.objects.filter(usuario=ana).update(creado_en=timezone.now() - timedelta(minutes=2))
        pedir(cliente, 'ana@taller.local')
        segundo = codigo_del_correo()
        if primero != segundo:
            assert verificar(cliente, 'ana@taller.local', primero).status_code == 400
        assert verificar(cliente, 'ana@taller.local', segundo).status_code == 200

    def test_no_reenvia_enseguida(self, cliente, ana):
        pedir(cliente, 'ana@taller.local')
        pedir(cliente, 'ana@taller.local')
        assert len(mail.outbox) == 1

    def test_el_token_sirve_una_sola_vez(self, cliente, ana):
        pedir(cliente, 'ana@taller.local')
        token = verificar(cliente, 'ana@taller.local', codigo_del_correo()).data['token']
        assert cambiar(cliente, token).status_code == 200
        assert cambiar(cliente, token, 'Otra-Clave-2026!').status_code == 400
        ana.refresh_from_db()
        assert ana.check_password(CLAVE_NUEVA)

    def test_token_falso(self, cliente, ana):
        assert cambiar(cliente, 'no-es-un-token').status_code == 400

    def test_contrasena_debil_rechazada_y_el_token_sigue_sirviendo(self, cliente, ana):
        pedir(cliente, 'ana@taller.local')
        token = verificar(cliente, 'ana@taller.local', codigo_del_correo()).data['token']
        r = cambiar(cliente, token, '123')
        assert r.status_code == 400 and r.data['error']
        assert cambiar(cliente, token).status_code == 200

    def test_usuario_desactivado_no_recibe_codigo(self, cliente, ana):
        ana.is_active = False
        ana.save()
        assert pedir(cliente, 'ana@taller.local').status_code == 200
        assert mail.outbox == []

    def test_limite_de_pedidos_por_ip(self, cliente, ana):
        respuestas = [pedir(cliente, f'otro{i}@taller.local').status_code for i in range(6)]
        assert respuestas[:5] == [200] * 5
        assert respuestas[5] == 429


@pytest.mark.django_db
class TestCambiarMiClave:
    """Mi perfil → Cambiar mi contraseña (POST /api/v1/auth/change-password)."""

    def test_con_la_actual_correcta_cambia(self, authenticated_client, user):
        user.set_password('ClaveVieja2026!')
        user.save()
        r = authenticated_client.post('/api/v1/auth/change-password',
                                      {'old_password': 'ClaveVieja2026!', 'new_password': 'ClaveNueva2026!'}, format='json')
        assert r.status_code == 200, r.data
        user.refresh_from_db()
        assert user.check_password('ClaveNueva2026!')

    def test_con_la_actual_mal_no_cambia(self, authenticated_client, user):
        user.set_password('ClaveVieja2026!')
        user.save()
        r = authenticated_client.post('/api/v1/auth/change-password',
                                      {'old_password': 'otra', 'new_password': 'ClaveNueva2026!'}, format='json')
        assert r.status_code == 400
        assert r.data['error'] == 'La contraseña actual no es correcta.'

    def test_una_nueva_demasiado_corta_se_rechaza(self, authenticated_client, user):
        user.set_password('ClaveVieja2026!')
        user.save()
        r = authenticated_client.post('/api/v1/auth/change-password',
                                      {'old_password': 'ClaveVieja2026!', 'new_password': '123'}, format='json')
        assert r.status_code == 400
