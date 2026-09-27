"""Cliente mínimo para la API NBI de un ACS compatible con TR-069."""
import logging
from typing import Any

import requests
from django.conf import settings

logger = logging.getLogger(__name__)


class TR069ConfigurationError(RuntimeError):
    """Indica que el ACS TR-069 no está configurado o rechazó la operación."""


class TR069ACSClient:
    """Envía tareas setParameterValues a un ACS como GenieACS vía API NBI."""

    def __init__(self):
        self.base_url = getattr(settings, 'TR069_ACS_URL', '').rstrip('/')
        self.timeout = getattr(settings, 'TR069_TIMEOUT', 15)
        self.auth = (
            getattr(settings, 'TR069_ACS_USERNAME', ''),
            getattr(settings, 'TR069_ACS_PASSWORD', ''),
        )

    def set_wifi(self, device_id: str, ssid: str, password: str, band: str = '2.4G') -> dict[str, Any]:
        if not self.base_url:
            raise TR069ConfigurationError('TR069_ACS_URL no está configurado.')
        if not device_id:
            raise TR069ConfigurationError('La ONU no tiene identificador TR-069.')

        suffix = '5GHz' if band == '5G' else '2.4GHz'
        parameters = [
            [f'InternetGatewayDevice.LANDevice.1.WLANConfiguration.1.SSID', ssid, 'xsd:string'],
            [f'InternetGatewayDevice.LANDevice.1.WLANConfiguration.1.PreSharedKey.1.PreSharedKey', password, 'xsd:string'],
        ]
        if band == '5G':
            parameters = [
                [f'InternetGatewayDevice.LANDevice.1.WLANConfiguration.5.SSID', ssid, 'xsd:string'],
                [f'InternetGatewayDevice.LANDevice.1.WLANConfiguration.5.PreSharedKey.1.PreSharedKey', password, 'xsd:string'],
            ]
        url = f'{self.base_url}/devices/{device_id}/tasks'
        response = requests.post(
            url,
            json={'name': 'setParameterValues', 'parameterValues': parameters},
            auth=self.auth if any(self.auth) else None,
            timeout=self.timeout,
        )
        response.raise_for_status()
        logger.info('Tarea TR-069 enviada para %s (%s)', device_id, suffix)
        return {'accepted': True, 'status_code': response.status_code, 'response': response.text[:500]}
