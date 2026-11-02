"""
Serializer JWT personalizado que acepta email O username como credencial.
Compatible con la API que usa el frente: signInWithPassword({ email, password })
"""
from django.contrib.auth import authenticate, get_user_model
from rest_framework import serializers
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from rest_framework_simplejwt.tokens import RefreshToken

User = get_user_model()


class EmailOrUsernameTokenSerializer(serializers.Serializer):
    """
    Permite login con email o username.
    Compatible con djangoClient.js que envía { email, password }.
    """
    email = serializers.CharField(required=False, allow_blank=True)
    username = serializers.CharField(required=False, allow_blank=True)
    password = serializers.CharField(write_only=True)

    def validate(self, attrs):
        email = attrs.get('email', '').strip()
        username = attrs.get('username', '').strip()
        password = attrs.get('password', '')

        if not password:
            raise serializers.ValidationError({'password': 'Este campo es requerido.'})

        # Resolver el username desde email si se proveyó email
        if email and not username:
            try:
                user_obj = User.objects.get(email__iexact=email)
                username = user_obj.username
            except User.DoesNotExist:
                raise serializers.ValidationError(
                    'La combinación de credenciales no tiene una cuenta activa'
                )

        if not username:
            raise serializers.ValidationError(
                'Debe proveer email o username.'
            )

        user = authenticate(username=username, password=password)
        if not user:
            raise serializers.ValidationError(
                'La combinación de credenciales no tiene una cuenta activa'
            )
        if not user.is_active:
            raise serializers.ValidationError('Esta cuenta está desactivada.')

        refresh = RefreshToken.for_user(user)
        return {
            'refresh': str(refresh),
            'access': str(refresh.access_token),
        }
