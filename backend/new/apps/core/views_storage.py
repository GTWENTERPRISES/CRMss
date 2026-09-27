"""
Storage API compatible con Supabase Storage.
Maneja upload, download y eliminación de archivos.
"""
import os
import uuid
from pathlib import Path
from django.conf import settings
from django.core.files.storage import default_storage
from django.http import FileResponse, Http404
from rest_framework.decorators import api_view, permission_classes, parser_classes
from rest_framework.permissions import IsAuthenticated
from rest_framework.parsers import MultiPartParser, FormParser
from rest_framework.response import Response
from rest_framework import status


@api_view(['POST'])
@permission_classes([IsAuthenticated])
@parser_classes([MultiPartParser, FormParser])
def storage_upload(request, bucket):
    """
    POST /api/v1/storage/<bucket>
    Compatible con: supabase.storage.from('bucket').upload('path/file.jpg', file)
    
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
    
    # Construir path completo: buckets/<bucket>/<path>
    full_path = f"buckets/{bucket}/{path}"
    
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
    Compatible con: supabase.storage.from('bucket').download('path/file.jpg')
    
    Retorna el archivo como respuesta de streaming.
    """
    full_path = f"buckets/{bucket}/{path}"
    
    if not default_storage.exists(full_path):
        raise Http404('File not found')
    
    try:
        file = default_storage.open(full_path, 'rb')
        response = FileResponse(file)
        
        # Determinar Content-Type
        ext = Path(path).suffix.lower()
        content_types = {
            '.jpg': 'image/jpeg',
            '.jpeg': 'image/jpeg',
            '.png': 'image/png',
            '.gif': 'image/gif',
            '.pdf': 'application/pdf',
            '.txt': 'text/plain',
            '.csv': 'text/csv',
            '.json': 'application/json',
        }
        response['Content-Type'] = content_types.get(ext, 'application/octet-stream')
        
        return response
    
    except Exception as e:
        return Response(
            {'error': str(e)},
            status=status.HTTP_500_INTERNAL_SERVER_ERROR
        )


@api_view(['DELETE'])
@permission_classes([IsAuthenticated])
def storage_delete(request, bucket, path):
    """
    DELETE /api/v1/storage/<bucket>/<path>
    Compatible con: supabase.storage.from('bucket').remove(['path/file.jpg'])
    """
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
    Compatible con: supabase.storage.from('bucket').list('path')
    
    Lista archivos en un bucket con prefijo opcional.
    """
    prefix = request.GET.get('prefix', '')
    full_prefix = f"buckets/{bucket}/{prefix}"
    
    try:
        # Listar archivos en el path
        dirs, files = default_storage.listdir(full_prefix)
        
        result = []
        
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
    Compatible con: supabase.storage.from('bucket').getPublicUrl('path')
    """
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
