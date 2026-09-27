"""
Endpoints de autenticación adicionales.
"""
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
    Compatible con la estructura de Supabase User.
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
def register_user(request):
    """
    POST /api/v1/auth/register
    Registra un nuevo usuario.
    
    Body:
    {
        "email": "user@example.com",
        "password": "securepassword",
        "username": "username" (opcional, se genera del email si no se provee),
        "first_name": "Juan" (opcional),
        "last_name": "Pérez" (opcional)
    }
    """
    from django.contrib.auth import get_user_model
    
    User = get_user_model()
    
    email = request.data.get('email')
    password = request.data.get('password')
    username = request.data.get('username')
    first_name = request.data.get('first_name', '')
    last_name = request.data.get('last_name', '')
    
    if not email or not password:
        return Response(
            {'error': 'Email and password are required'},
            status=status.HTTP_400_BAD_REQUEST
        )
    
    # Generar username del email si no se provee
    if not username:
        username = email.split('@')[0]
    
    # Verificar si el usuario ya existe
    if User.objects.filter(email=email).exists():
        return Response(
            {'error': 'User with this email already exists'},
            status=status.HTTP_400_BAD_REQUEST
        )
    
    if User.objects.filter(username=username).exists():
        # Agregar sufijo numérico si el username ya existe
        import random
        username = f"{username}{random.randint(1000, 9999)}"
    
    # Crear usuario
    try:
        user = User.objects.create_user(
            username=username,
            email=email,
            password=password,
            first_name=first_name,
            last_name=last_name,
        )
        
        return Response({
            'id': user.id,
            'email': user.email,
            'username': user.username,
            'message': 'User created successfully',
        }, status=status.HTTP_201_CREATED)
    
    except Exception as e:
        return Response(
            {'error': str(e)},
            status=status.HTTP_500_INTERNAL_SERVER_ERROR
        )


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
            {'error': 'Both old_password and new_password are required'},
            status=status.HTTP_400_BAD_REQUEST
        )
    
    # Verificar contraseña actual
    if not user.check_password(old_password):
        return Response(
            {'error': 'Current password is incorrect'},
            status=status.HTTP_400_BAD_REQUEST
        )
    
    # Cambiar contraseña
    user.set_password(new_password)
    user.save()
    
    return Response({
        'message': 'Password changed successfully',
    })
