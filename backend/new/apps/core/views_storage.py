"""
Storage API compatible con el cliente del frente.
Maneja upload, download y eliminación de archivos.
"""
import os
import time
import uuid
from pathlib import Path
from urllib.parse import quote

from django.conf import settings
from django.core import signing
from django.core.files.storage import default_storage
from django.http import FileResponse, Http404
from django.urls import reverse
from django.views.decorators.csrf import csrf_exempt
from rest_framework.decorators import (
    api_view,
    permission_classes,
    parser_classes,
    throttle_classes,
)
from rest_framework.permissions import AllowAny, IsAuthenticated
from rest_framework.parsers import MultiPartParser, FormParser
from rest_framework.response import Response
from rest_framework import status

from apps.dashboard import contexto

from .storage_reglas import bucket_valido, dueño, puede, ruta_valida


def _no_encontrado():
    # Lo que no se puede ver contesta igual que lo que no existe: decir "existe
    # pero no es tuyo" ya es contar algo del abonado de otro.
    return Response({'error': 'File not found'}, status=status.HTTP_404_NOT_FOUND)


def _ruta_invalida():
    return Response({'error': 'Ruta inválida'}, status=status.HTTP_400_BAD_REQUEST)


# Sal para firmar las URLs de descarga. No es un secreto guardado aparte: la
# firma la valida el mismo proceso que la emite, y SECRET_KEY ya es la clave del
# despliegue.
SAL_FIRMA = 'storage-url-firmada'


def _tipo_de_contenido(path):
    return {
        '.jpg': 'image/jpeg',
        '.jpeg': 'image/jpeg',
        '.png': 'image/png',
        '.gif': 'image/gif',
        '.webp': 'image/webp',
        '.pdf': 'application/pdf',
        '.txt': 'text/plain',
        '.csv': 'text/csv',
        '.json': 'application/json',
        '.xml': 'application/xml',
        '.zip': 'application/zip',
    }.get(Path(path).suffix.lower(), 'application/octet-stream')


def _servir_archivo(bucket, path):
    """El archivo como respuesta de streaming, con su Content-Type."""
    full_path = f"buckets/{bucket}/{path}"

    if not default_storage.exists(full_path):
        raise Http404('File not found')

    archivo = default_storage.open(full_path, 'rb')
    response = FileResponse(archivo)
    response['Content-Type'] = _tipo_de_contenido(path)
    return response



@api_view(['POST'])
@permission_classes([IsAuthenticated])
@parser_classes([MultiPartParser, FormParser])
def storage_upload(request, bucket):
    """
    POST /api/v1/storage/<bucket>
    Compatible con: `storage.from('bucket').upload('path/file.jpg', file)
    
    Body: multipart/form-data con campos:
    - file: archivo a subir
    - path: ruta destino (opcional, se genera automática si no se provee)
    """
    if 'file' not in request.FILES:
        return Response(
            {'error': 'No file provided'},
            status=status.HTTP_400_BAD_REQUEST
        )
    
    file = request.FILES['file']
    path = request.data.get('path', '')
    
    # Si no se provee path, generar uno único
    if not path:
        ext = Path(file.name).suffix
        path = f"{uuid.uuid4()}{ext}"

    contexto.establecer_usuario(request.user)
    if not bucket_valido(bucket) or not ruta_valida(path):
        return _ruta_invalida()
    if not puede(bucket, path):
        return Response(
            {'error': 'No tienes permiso para subir archivos aquí.',
             'hint': 'El archivo va en la carpeta de un registro que no puedes ver.'},
            status=status.HTTP_403_FORBIDDEN,
        )
    
    # Construir path completo: buckets/<bucket>/<path>
    full_path = f"buckets/{bucket}/{path}"
    
    # `upsert: true` reemplaza el archivo; sin esto, FileSystemStorage le agrega un
    # sufijo al nombre repetido y quedan dos copias, con el registro apuntando a
    # una de las dos.
    if str(request.data.get('upsert', '')).lower() in ('1', 'true', 'yes'):
        if default_storage.exists(full_path):
            default_storage.delete(full_path)

    # Guardar archivo
    try:
        saved_path = default_storage.save(full_path, file)
        file_url = request.build_absolute_uri(
            f"{settings.MEDIA_URL}{saved_path}"
        )
        
        return Response({
            'path': path,
            'fullPath': full_path,
            'url': file_url,
            'size': file.size,
            'mimetype': file.content_type,
        }, status=status.HTTP_201_CREATED)
    
    except Exception as e:
        return Response(
            {'error': str(e)},
            status=status.HTTP_500_INTERNAL_SERVER_ERROR
        )


@api_view(['GET'])
@permission_classes([IsAuthenticated])
def storage_download(request, bucket, path):
    """
    GET /api/v1/storage/<bucket>/<path>
    Compatible con: `storage.from('bucket').download('path/file.jpg')
    
    Retorna el archivo como respuesta de streaming.
    """
    contexto.establecer_usuario(request.user)
    if not puede(bucket, path):
        return _no_encontrado()
    return _servir_archivo(bucket, path)


@api_view(['GET'])
@permission_classes([IsAuthenticated])
def storage_signed_url(request, bucket):
    """
    GET /api/v1/storage/<bucket>/signed-url?path=<ruta>&segundos=3600
    Devuelve una URL firmada y temporaria para el archivo.

    Equivale a `storage.from(b).createSignedUrl(ruta, segundos)`.

    Hace falta porque el bucket es privado y la descarga pide sesión: un `<img
    src>` o un `window.open` no mandan la cabecera Authorization, así que sin
    esto los documentos del abonado, las fotos de jornada y los adjuntos del
    ticket quedaban sin poder abrirse. Lo que autoriza la descarga es la firma,
    que además lleva su vencimiento adentro: una URL copiada de la barra del
    navegador deja de abrir el archivo cuando se cumple el plazo.
    """
    ruta = request.GET.get('path') or ''
    if not ruta:
        return Response({'error': 'Falta el parámetro path'}, status=status.HTTP_400_BAD_REQUEST)

    # La firma autoriza después sin sesión: se revisa acá, antes de emitirla.
    contexto.establecer_usuario(request.user)
    if not bucket_valido(bucket) or not ruta_valida(ruta):
        return _ruta_invalida()
    if not puede(bucket, ruta):
        return _no_encontrado()

    try:
        segundos = int(request.GET.get('segundos', 3600))
    except (TypeError, ValueError):
        return Response({'error': 'segundos tiene que ser un número'}, status=status.HTTP_400_BAD_REQUEST)

    # Un mínimo de un segundo (para que el vencimiento sea real) y un máximo de
    # una semana: una URL que no vence nunca es un archivo público con otro nombre.
    segundos = max(1, min(segundos, 60 * 60 * 24 * 7))

    firmado = signing.dumps(
        {'bucket': bucket, 'path': ruta, 'exp': time.time() + segundos},
        salt=SAL_FIRMA,
        compress=True,
    )

    url = request.build_absolute_uri(
        reverse('storage-signed-download', kwargs={'bucket': bucket, 'path': ruta})
    )

    return Response({
        'signedUrl': f'{url}?t={quote(firmado)}',
        'path': ruta,
        'expira_en': segundos,
    })


@api_view(['GET'])
@permission_classes([AllowAny])
@throttle_classes([])
def storage_signed_download(request, bucket, path):
    """
    GET /api/v1/storage/<bucket>/signed/<ruta>?t=<firma>
    Entrega el archivo si la firma es válida y no venció. Sin sesión, a propósito:
    lo que autoriza es la firma.

    Sin límite de peticiones por minuto (el tope anónimo por defecto es 60/min)
    porque una pantalla que muestra treinta fotos de una jornada pediría treinta
    descargas y, con el tope, la mitad saldría con error. El control acá es la
    firma: no se puede inventar una URL y cada una vence sola.
    """
    token = request.GET.get('t') or ''

    try:
        datos = signing.loads(token, salt=SAL_FIRMA)
    except signing.BadSignature:
        return Response({'error': 'Firma inválida'}, status=status.HTTP_403_FORBIDDEN)

    if datos.get('bucket') != bucket or datos.get('path') != path:
        return Response(
            {'error': 'La firma no corresponde a este archivo'},
            status=status.HTTP_403_FORBIDDEN,
        )

    if float(datos.get('exp') or 0) < time.time():
        return Response({'error': 'El enlace venció'}, status=status.HTTP_403_FORBIDDEN)

    if not bucket_valido(bucket) or not ruta_valida(path):
        return _ruta_invalida()
    return _servir_archivo(bucket, path)


@api_view(['DELETE'])
@permission_classes([IsAuthenticated])
def storage_delete(request, bucket, path):
    """
    DELETE /api/v1/storage/<bucket>/<path>
    Compatible con: `storage.from('bucket').remove(['path/file.jpg'])
    """
    contexto.establecer_usuario(request.user)
    if not puede(bucket, path):
        return _no_encontrado()
    full_path = f"buckets/{bucket}/{path}"
    
    if not default_storage.exists(full_path):
        return Response(
            {'error': 'File not found'},
            status=status.HTTP_404_NOT_FOUND
        )
    
    try:
        default_storage.delete(full_path)
        return Response(
            {'message': 'File deleted successfully'},
            status=status.HTTP_200_OK
        )
    
    except Exception as e:
        return Response(
            {'error': str(e)},
            status=status.HTTP_500_INTERNAL_SERVER_ERROR
        )


@api_view(['GET'])
@permission_classes([IsAuthenticated])
def storage_list(request, bucket):
    """
    GET /api/v1/storage/<bucket>/list?prefix=path/
    Compatible con: `storage.from('bucket').list('path')
    
    Lista archivos en un bucket con prefijo opcional.
    """
    prefix = request.GET.get('prefix', '')
    contexto.establecer_usuario(request.user)
    if not bucket_valido(bucket) or (prefix and not ruta_valida(prefix)):
        return _ruta_invalida()
    # Con carpeta: la del dueño tiene que verse. En la raíz de un bucket con
    # regla, cada carpeta es un dueño distinto y se listan solo las visibles.
    if prefix and not puede(bucket, prefix.rstrip('/') + '/x'):
        return Response([])
    en_la_raiz = not prefix.strip('/') and dueño(bucket, 'x') is not None
    full_prefix = f"buckets/{bucket}/{prefix}"
    
    try:
        # Listar archivos en el path
        dirs, files = default_storage.listdir(full_prefix)
        
        result = []
        
        if en_la_raiz:
            dirs = [d for d in dirs if puede(bucket, f'{d}/x')]
            files = [f for f in files if puede(bucket, f)]

        # Agregar directorios
        for dir_name in dirs:
            result.append({
                'name': dir_name,
                'type': 'folder',
                'path': f"{prefix}{dir_name}/",
            })
        
        # Agregar archivos
        for file_name in files:
            file_path = f"{full_prefix}/{file_name}"
            if default_storage.exists(file_path):
                size = default_storage.size(file_path)
                modified = default_storage.get_modified_time(file_path)
                
                result.append({
                    'name': file_name,
                    'type': 'file',
                    'path': f"{prefix}{file_name}",
                    'size': size,
                    'updated_at': modified.isoformat(),
                    'url': request.build_absolute_uri(
                        f"{settings.MEDIA_URL}buckets/{bucket}/{prefix}{file_name}"
                    ),
                })
        
        return Response(result)
    
    except Exception as e:
        return Response(
            {'error': str(e)},
            status=status.HTTP_500_INTERNAL_SERVER_ERROR
        )


@api_view(['GET'])
@permission_classes([IsAuthenticated])
def storage_public_url(request, bucket, path):
    """
    GET /api/v1/storage/<bucket>/public/<path>
    Retorna la URL pública del archivo (sin autenticación).
    Compatible con: `storage.from('bucket').getPublicUrl('path')
    """
    contexto.establecer_usuario(request.user)
    if not puede(bucket, path):
        return _no_encontrado()
    full_path = f"buckets/{bucket}/{path}"
    
    if not default_storage.exists(full_path):
        return Response(
            {'error': 'File not found'},
            status=status.HTTP_404_NOT_FOUND
        )
    
    public_url = request.build_absolute_uri(
        f"{settings.MEDIA_URL}{full_path}"
    )
    
    return Response({
        'publicURL': public_url,
        'path': path,
    })


@csrf_exempt
def storage_archivo(request, bucket, path):
    """
    /api/v1/storage/<bucket>/<path>: GET descarga y DELETE borra.

    Las dos son la misma URL —como antes—, así que una ruta sola tiene que
    atender los dos métodos. Antes solo estaba la descarga: `remove()` recibía
    405 y el archivo quedaba huérfano en el disco después de borrar su fila.
    """
    vista = storage_delete if request.method == 'DELETE' else storage_download
    return vista(request, bucket, path)

