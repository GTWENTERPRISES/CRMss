"""
Drivers para conexión SSH a OLTs
"""
from .base import BaseOLTDriver
from .huawei import HuaweiOLTDriver
from .vsol import VSOLOLTDriver

__all__ = ['BaseOLTDriver', 'HuaweiOLTDriver', 'VSOLOLTDriver']


def get_driver(olt):
    """
    Factory para obtener el driver correcto según la marca de OLT
    """
    from apps.olts.models import OLT
    
    if olt.marca == OLT.Marca.HUAWEI:
        return HuaweiOLTDriver(olt)
    elif olt.marca == OLT.Marca.VSOL:
        return VSOLOLTDriver(olt)
    else:
        raise ValueError(f"Marca de OLT no soportada: {olt.marca}")
