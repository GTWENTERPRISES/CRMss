"""
Endpoints de autenticación adicionales.
"""
from django.contrib.auth import get_user_model
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from rest_framework import status


@api_view(['GET'])
@permission_classes([IsAuthenticated])
def get_current_user(request):
    """
    GET /api/v1/auth/me
    Retorna información del usuario autenticado actual.
    Con la forma de usuario que espera el frente.
    """
    user = request.user
    
    return Response({
        'id': user.id,
        'email': user.email,
        'username': user.username,
        'first_name': user.first_name,
        'last_name': user.last_name,
        'is_staff': user.is_staff,
        'is_superuser': user.is_superuser,
        'date_joined': user.date_joined.isoformat() if hasattr(user, 'date_joined') else None,
        'last_login': user.last_login.isoformat() if user.last_login else None,
    })


@api_view(['POST'])
@permission_classes([IsAuthenticated])
def register_user(request):
    """
    POST /api/v1/auth/register
    Registra un nuevo usuario.

    Equivale a la administración de credenciales (createUser): lo llama el servicio interno de
    red al dar de alta un legajo, y requiere personal administrativo. Antes esta
    ruta quedaba abierta —sin permiso y sin sesión—, así que cualquiera que
    descubriera la URL podía crearse una credencial en el sistema: antes
    esa puerta era imposible porque `admin.createUser` exige la service_role.

    Body:
    {
        "email": "user@example.com",
        "password": "securepassword",
        "username": "username" (opcional, se genera del email si no se provee),
        "first_name": "Juan" (opcional),
        "last_name": "Pérez" (opcional)
    }
    """
    denegado = _solo_staff(request)
    if denegado is not None:
        return denegado

    usuario, error = _crear_credencial(request.data)
    if error is not None:
        return error

    return Response({
        'id': usuario.id,
        'email': usuario.email,
        'username': usuario.username,
        'message': 'User created successfully',
    }, status=status.HTTP_201_CREATED)


@api_view(['POST'])
@permission_classes([IsAuthenticated])
def change_password(request):
    """
    POST /api/v1/auth/change-password
    Cambia la contraseña del usuario actual.
    
    Body:
    {
        "old_password": "currentpassword",
        "new_password": "newsecurepassword"
    }
    """
    user = request.user
    old_password = request.data.get('old_password')
    new_password = request.data.get('new_password')

    if not old_password or not new_password:
        return Response(
            {'error': 'Escribe la contraseña actual y la nueva.'},
            status=status.HTTP_400_BAD_REQUEST
        )

    # Verificar contraseña actual
    if not user.check_password(old_password):
        return Response(
            {'error': 'La contraseña actual no es correcta.'},
            status=status.HTTP_400_BAD_REQUEST
        )

    # Las mismas reglas que el resto del sistema (largo mínimo, no demasiado común...).
    from django.contrib.auth.password_validation import validate_password
    from django.core.exceptions import ValidationError
    try:
        validate_password(new_password, user)
    except ValidationError as e:
        return Response({'error': ' '.join(e.messages)}, status=status.HTTP_400_BAD_REQUEST)

    # Cambiar contraseña
    user.set_password(new_password)
    user.save()

    # Las sesiones abiertas en otros equipos se cortan; esta sigue con un par
    # de tokens nuevo.
    from .sesiones import revocar_sesiones, sesion_nueva
    revocar_sesiones(user)

    return Response({
        'message': 'Listo: la contraseña quedó cambiada.',
        **sesion_nueva(user),
    })


# ── Administración de usuarios (la usa el servicio interno de red) ───────────
# El middleware administra las credenciales del personal a través de estas
# rutas con su usuario de servicio (staff), reemplazando a la administración de credenciales.


def _crear_credencial(datos):
    """
    Crea la credencial y devuelve (usuario, None) o (None, Response de error).

    La comparten el registro abierto a integraciones y la colección de usuarios:
    las reglas (email y clave obligatorios, correo repetido, usuario repetido)
    tienen que ser las mismas por los dos caminos.
    """
    User = get_user_model()

    email = (datos.get('email') or '').strip()
    password = datos.get('password')
    username = (datos.get('username') or '').strip()
    first_name = datos.get('first_name', '')
    last_name = datos.get('last_name', '')

    if not email or not password:
        return None, Response(
            {'error': 'Email and password are required'},
            status=status.HTTP_400_BAD_REQUEST,
        )

    # Generar username del email si no se provee
    if not username:
        username = email.split('@')[0]

    if User.objects.filter(email__iexact=email).exists():
        return None, Response(
            {'error': 'User with this email already exists'},
            status=status.HTTP_400_BAD_REQUEST,
        )

    if User.objects.filter(username=username).exists():
        # Agregar sufijo numérico si el username ya existe
        import random
        username = f'{username}{random.randint(1000, 9999)}'

    try:
        usuario = User.objects.create_user(
            username=username,
            email=email,
            password=password,
            first_name=first_name,
            last_name=last_name,
        )
    except Exception as e:
        return None, Response(
            {'error': str(e)},
            status=status.HTTP_500_INTERNAL_SERVER_ERROR,
        )

    return usuario, None


def _credencial_publica(usuario):
    """Lo que el middleware necesita saber de una credencial. Sin claves."""
    return {
        'id': usuario.id,
        'email': usuario.email,
        'username': usuario.username,
        'is_active': usuario.is_active,
        'is_staff': usuario.is_staff,
        'date_joined': usuario.date_joined.isoformat() if usuario.date_joined else None,
    }


def _valor_de_filtro(crudo):
    """
    'eq.correo@x' / 'ilike.correo@x' → ('correo@x', es_like).

    El middleware usa el formato de PostgREST en el querystring; estas dos rutas
    son de personal (decenas de filas), así que alcanza con el correo exacto y el
    "contiene" para las búsquedas escritas a mano en Ajustes → Personal.
    """
    for prefijo in ('eq.', 'neq.', 'is.'):
        if crudo.startswith(prefijo):
            return crudo[len(prefijo):], False
    for prefijo in ('ilike.', 'like.'):
        if crudo.startswith(prefijo):
            return crudo[len(prefijo):].strip('%*'), True
    return crudo, False


@api_view(['GET', 'POST'])
@permission_classes([IsAuthenticated])
def admin_user_collection(request):
    """
    GET  /api/v1/auth/users → lista las credenciales.
    POST /api/v1/auth/users → crea la credencial.

    Es el alta y el listado de credenciales del middleware. El alta de
    personal del middleware crea primero la credencial y después el legajo: si el
    POST no existe, la persona queda en `usuarios_sistema` sin poder entrar, y el
    faltante recién aparece cuando intenta loguearse.

    El GET filtra por `email=eq.correo`, que es como el middleware pregunta si ese
    correo ya tiene credencial antes de crearla.
    """
    denegado = _solo_staff(request)
    if denegado is not None:
        return denegado

    User = get_user_model()

    if request.method == 'POST':
        usuario, error = _crear_credencial(request.data)
        if error is not None:
            return error
        return Response(_credencial_publica(usuario), status=status.HTTP_201_CREATED)

    qs = User.objects.all().order_by('id')

    email = request.GET.get('email')
    if email:
        valor, es_like = _valor_de_filtro(email)
        qs = qs.filter(email__icontains=valor) if es_like else qs.filter(email__iexact=valor)

    username = request.GET.get('username')
    if username:
        valor, es_like = _valor_de_filtro(username)
        qs = qs.filter(username__icontains=valor) if es_like else qs.filter(username__iexact=valor)

    limit = max(int(request.GET.get('limit', 200)), 0)
    offset = max(int(request.GET.get('offset', 0)), 0)

    return Response([_credencial_publica(u) for u in qs[offset:offset + limit]])


def _solo_staff(request):
    if not (request.user.is_staff or request.user.is_superuser):
        return Response(
            {'error': 'Solo el personal administrativo puede administrar usuarios'},
            status=status.HTTP_403_FORBIDDEN,
        )
    return None


@api_view(['PATCH', 'DELETE'])
@permission_classes([IsAuthenticated])
def admin_user_detail(request, user_id):
    """
    PATCH  /api/v1/auth/users/<id> → cambia contraseña/email/estado.
    DELETE /api/v1/auth/users/<id> → borra la credencial (el legajo en
    usuarios_sistema queda, con auth_id en NULL, para no perder la auditoría).

    Equivale a la administración de credenciales (updateUserById).
    """
    denegado = _solo_staff(request)
    if denegado is not None:
        return denegado

    User = get_user_model()
    try:
        usuario = User.objects.get(pk=user_id)
    except (User.DoesNotExist, ValueError):
        return Response({'error': 'No existe ese usuario'}, status=404)

    if request.method == 'DELETE':
        if usuario.id == request.user.id:
            return Response({'error': 'No puedes borrar tu propio usuario'}, status=400)
        usuario.delete()
        return Response(status=204)

    clave = request.data.get('password')
    email = request.data.get('email')
    activo = request.data.get('is_active')

    if clave:
        usuario.set_password(clave)
    if email:
        usuario.email = email
    if activo is not None:
        usuario.is_active = bool(activo)

    if not clave and not email and activo is None:
        return Response({'error': 'Nada que actualizar'}, status=400)

    usuario.save()
    # Contraseña nueva o acceso quitado: las sesiones abiertas dejan de servir.
    if clave or (activo is not None and not usuario.is_active):
        from .sesiones import revocar_sesiones
        revocar_sesiones(usuario)
    return Response({'id': usuario.id, 'email': usuario.email, 'is_active': usuario.is_active})

