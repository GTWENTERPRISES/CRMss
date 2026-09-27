"""
Servicio para gestión de configuración WiFi en ONTs
Soporta cambio de SSID y contraseña vía TR-069 o CLI según marca de ONT
"""
import logging
import re
from typing import Dict, Optional

from django.core.exceptions import ValidationError

from apps.olts.drivers import get_driver
from apps.olts.models import ONU, OLT, TipoONT

logger = logging.getLogger(__name__)


class WiFiManagerService:
    """
    Servicio para gestionar credenciales WiFi en ONTs remotas
    
    Métodos de configuración soportados:
    - TR-069 (CWMP) para ONTs compatibles
    - CLI via OLT para marcas Huawei y V-SOL
    """
    
    # Mapeo de marcas de ONT a método de configuración
    METODO_POR_MARCA = {
        'Huawei': 'cli_huawei',
        'ZTE': 'cli_huawei',  # ZTE usa comandos similares a Huawei
        'Nokia': 'tr069',
        'Alcatel': 'tr069',
        'Realtek': 'cli_vsol',
        'VSOL': 'cli_vsol',
        'Fiberhome': 'cli_huawei',
        'BDCOM': 'cli_huawei',
    }
    
    # Validaciones de WiFi
    SSID_MIN_LENGTH = 1
    SSID_MAX_LENGTH = 32
    PASSWORD_MIN_LENGTH = 8
    PASSWORD_MAX_LENGTH = 63
    
    def __init__(self):
        """Inicializa el servicio WiFi manager"""
        self.logger = logger
    
    def cambiar_credenciales_wifi(
        self, 
        onu: ONU, 
        nuevo_ssid: str, 
        nueva_password: str,
        banda: str = '2.4G'
    ) -> Dict:
        """
        Cambia las credenciales WiFi de una ONT
        
        Args:
            onu: Instancia del modelo ONU
            nuevo_ssid: Nuevo nombre de red WiFi (1-32 caracteres)
            nueva_password: Nueva contraseña WiFi (8-63 caracteres)
            banda: Banda WiFi a configurar ('2.4G', '5G', 'both')
        
        Returns:
            dict: Resultado de la operación
                {
                    'success': bool,
                    'message': str,
                    'metodo_usado': str,
                    'ssid': str,
                    'banda': str,
                    'detalles': dict (opcional)
                }
        
        Raises:
            ValidationError: Si los parámetros no son válidos
        """
        # Validar parámetros
        self._validar_credenciales(nuevo_ssid, nueva_password)
        
        # Verificar que la ONU tenga WiFi
        if not self._onu_tiene_wifi(onu):
            return {
                'success': False,
                'message': 'La ONT no tiene capacidad WiFi',
                'metodo_usado': None,
            }
        
        # Verificar que la ONU esté online
        if onu.estado != 'online':
            return {
                'success': False,
                'message': f'La ONT está {onu.estado}. Debe estar online para cambiar WiFi.',
                'metodo_usado': None,
            }
        
        # Determinar método según marca de ONT
        metodo = self._determinar_metodo(onu)
        
        self.logger.info(
            f'Cambiando WiFi de ONU {onu.sn} '
            f'usando método {metodo} (banda: {banda})'
        )
        
        try:
            # Ejecutar método correspondiente
            if metodo == 'tr069':
                resultado = self._cambiar_wifi_tr069(onu, nuevo_ssid, nueva_password, banda)
            elif metodo == 'cli_huawei':
                resultado = self._cambiar_wifi_cli_huawei(onu, nuevo_ssid, nueva_password, banda)
            elif metodo == 'cli_vsol':
                resultado = self._cambiar_wifi_cli_vsol(onu, nuevo_ssid, nueva_password, banda)
            else:
                return {
                    'success': False,
                    'message': f'Método {metodo} no implementado',
                    'metodo_usado': metodo,
                }
            
            # Agregar información común
            resultado['metodo_usado'] = metodo
            resultado['ssid'] = nuevo_ssid
            resultado['banda'] = banda
            
            if resultado['success']:
                self.logger.info(
                    f'WiFi cambiado exitosamente en ONU {onu.sn} '
                    f'(SSID: {nuevo_ssid})'
                )
            else:
                self.logger.warning(
                    f'Error cambiando WiFi en ONU {onu.sn}: '
                    f'{resultado.get("message")}'
                )
            
            return resultado
            
        except Exception as e:
            self.logger.error(f'Error cambiando WiFi en ONU {onu.sn}: {str(e)}')
            return {
                'success': False,
                'message': f'Error inesperado: {str(e)}',
                'metodo_usado': metodo,
            }
    
    def _validar_credenciales(self, ssid: str, password: str):
        """
        Valida que SSID y contraseña cumplan requisitos
        
        Raises:
            ValidationError: Si los parámetros no son válidos
        """
        # Validar SSID
        if not ssid or len(ssid) < self.SSID_MIN_LENGTH:
            raise ValidationError(
                f'SSID debe tener al menos {self.SSID_MIN_LENGTH} caracteres'
            )
        
        if len(ssid) > self.SSID_MAX_LENGTH:
            raise ValidationError(
                f'SSID no puede exceder {self.SSID_MAX_LENGTH} caracteres'
            )
        
        # Validar caracteres especiales problemáticos en SSID
        if re.search(r'[<>&\'"\\]', ssid):
            raise ValidationError(
                'SSID no puede contener caracteres especiales: < > & \' " \\'
            )
        
        # Validar contraseña
        if not password or len(password) < self.PASSWORD_MIN_LENGTH:
            raise ValidationError(
                f'Contraseña debe tener al menos {self.PASSWORD_MIN_LENGTH} caracteres'
            )
        
        if len(password) > self.PASSWORD_MAX_LENGTH:
            raise ValidationError(
                f'Contraseña no puede exceder {self.PASSWORD_MAX_LENGTH} caracteres'
            )
        
        # Validar que la contraseña no tenga espacios
        if ' ' in password:
            raise ValidationError('Contraseña no puede contener espacios')
    
    def _onu_tiene_wifi(self, onu: ONU) -> bool:
        """Verifica si la ONU tiene capacidad WiFi"""
        if not onu.tipo_ont:
            # Si no se especificó tipo, asumir que tiene WiFi
            return True
        return onu.tipo_ont.wifi
    
    def _determinar_metodo(self, onu: ONU) -> str:
        """
        Determina el método de configuración según marca de ONT
        
        Returns:
            str: 'tr069', 'cli_huawei', 'cli_vsol'
        """
        if not onu.tipo_ont:
            # Sin información de tipo, usar CLI según marca de OLT
            if onu.olt.marca == OLT.Marca.HUAWEI:
                return 'cli_huawei'
            elif onu.olt.marca == OLT.Marca.VSOL:
                return 'cli_vsol'
            return 'cli_huawei'  # Default
        
        marca_ont = onu.tipo_ont.marca
        metodo = self.METODO_POR_MARCA.get(marca_ont, 'cli_huawei')
        
        return metodo
    
    # ==========================================
    # Método 1: TR-069 (CWMP)
    # ==========================================
    
    def _cambiar_wifi_tr069(
        self, 
        onu: ONU, 
        ssid: str, 
        password: str,
        banda: str
    ) -> Dict:
        """
        Cambia WiFi usando protocolo TR-069
        
        Requiere un servidor TR-069/ACS con API NBI configurado.
        """
        from .tr069 import TR069ACSClient, TR069ConfigurationError

        try:
            resultado = TR069ACSClient().set_wifi(
                device_id=onu.sn,
                ssid=ssid,
                password=password,
                band=banda,
            )
            return {
                'success': True,
                'message': 'Tarea TR-069 enviada al ACS.',
                'detalles': resultado,
            }
        except (TR069ConfigurationError, Exception) as exc:
            self.logger.warning('No se pudo cambiar WiFi vía TR-069: %s', exc)
            return {
                'success': False,
                'message': str(exc),
                'detalles': {'recomendacion': 'Configurar TR069_ACS_URL y credenciales del ACS.'},
            }
    
    # ==========================================
    # Método 2: CLI via OLT Huawei
    # ==========================================
    
    def _cambiar_wifi_cli_huawei(
        self, 
        onu: ONU, 
        ssid: str, 
        password: str,
        banda: str
    ) -> Dict:
        """
        Cambia WiFi usando comandos CLI en OLT Huawei
        
        Comandos usados:
        - ont wlan ssid {frame}/{slot}/{puerto} {onu_index} {ssid_index} ssid-name {ssid}
        - ont wlan security {frame}/{slot}/{puerto} {onu_index} {ssid_index} wpa-psk {password}
        """
        try:
            driver = get_driver(onu.olt)
            driver.connect()
            
            # Posición de la ONU
            frame = onu.frame
            slot = onu.slot
            puerto = onu.puerto
            onu_index = onu.onu_index
            
            # Entrar en modo configuración
            driver.execute_command('config')
            driver.execute_command(f'interface gpon {frame}/{slot}')
            
            resultados = []
            
            # Configurar según banda
            if banda in ['2.4G', 'both']:
                # SSID index 0 = 2.4GHz
                result_24g = self._configurar_ssid_huawei(
                    driver, puerto, onu_index, 0, ssid, password
                )
                resultados.append(('2.4G', result_24g))
            
            if banda in ['5G', 'both']:
                # SSID index 1 = 5GHz (si la ONT lo soporta)
                result_5g = self._configurar_ssid_huawei(
                    driver, puerto, onu_index, 1, ssid + '_5G', password
                )
                resultados.append(('5G', result_5g))
            
            # Salir del modo configuración
            driver.execute_command('quit')
            driver.execute_command('quit')
            
            driver.close()
            
            # Verificar resultados
            exitos = [r for b, r in resultados if r]
            
            if exitos:
                mensaje = f'WiFi configurado en banda(s): {", ".join([b for b, r in resultados if r])}'
                return {
                    'success': True,
                    'message': mensaje,
                    'detalles': {
                        'bandas_configuradas': [b for b, r in resultados if r]
                    }
                }
            else:
                return {
                    'success': False,
                    'message': 'No se pudo configurar WiFi en ninguna banda',
                }
            
        except Exception as e:
            self.logger.error(f'Error en CLI Huawei: {str(e)}')
            return {
                'success': False,
                'message': f'Error ejecutando comandos CLI: {str(e)}',
            }
    
    def _configurar_ssid_huawei(
        self, 
        driver, 
        puerto: int, 
        onu_index: int,
        ssid_index: int,
        ssid: str, 
        password: str
    ) -> bool:
        """
        Configura un SSID específico en Huawei OLT
        
        Returns:
            bool: True si fue exitoso
        """
        try:
            # Comando 1: Configurar nombre de SSID
            cmd_ssid = (
                f'ont wlan ssid {puerto} {onu_index} {ssid_index} '
                f'ssid-name {ssid}'
            )
            output_ssid = driver.execute_command(cmd_ssid, wait_time=2)
            
            # Comando 2: Configurar contraseña WPA2-PSK
            cmd_password = (
                f'ont wlan security {puerto} {onu_index} {ssid_index} '
                f'wpa-psk {password}'
            )
            output_password = driver.execute_command(cmd_password, wait_time=2)
            
            # Verificar éxito (comandos Huawei responden con % si hay error)
            if '%' in output_ssid or '%' in output_password:
                self.logger.warning(
                    f'Posible error en configuración SSID {ssid_index}: '
                    f'{output_ssid} {output_password}'
                )
                return False
            
            return True
            
        except Exception as e:
            self.logger.error(f'Error configurando SSID {ssid_index}: {str(e)}')
            return False
    
    # ==========================================
    # Método 3: CLI via OLT V-SOL
    # ==========================================
    
    def _cambiar_wifi_cli_vsol(
        self, 
        onu: ONU, 
        ssid: str, 
        password: str,
        banda: str
    ) -> Dict:
        """
        Cambia WiFi usando comandos CLI en OLT V-SOL
        
        Comandos usados:
        - pon-onu-mng gpon-olt_{slot}/{puerto}
        - onu {onu_index}
        - wlan ssid {ssid_index} ssid {ssid}
        - wlan ssid {ssid_index} security wpa2-psk aes {password}
        """
        try:
            driver = get_driver(onu.olt)
            driver.connect()
            
            slot = onu.slot
            puerto = onu.puerto
            onu_index = onu.onu_index
            
            # Entrar en modo configuración
            driver.execute_command('configure terminal')
            driver.execute_command(f'pon-onu-mng gpon-olt_{slot}/{puerto}')
            driver.execute_command(f'onu {onu_index}')
            
            resultados = []
            
            # Configurar según banda
            if banda in ['2.4G', 'both']:
                # SSID 1 = 2.4GHz
                result_24g = self._configurar_ssid_vsol(
                    driver, 1, ssid, password
                )
                resultados.append(('2.4G', result_24g))
            
            if banda in ['5G', 'both']:
                # SSID 2 = 5GHz (si la ONT lo soporta)
                result_5g = self._configurar_ssid_vsol(
                    driver, 2, ssid + '_5G', password
                )
                resultados.append(('5G', result_5g))
            
            # Salir del modo configuración
            driver.execute_command('exit')
            driver.execute_command('exit')
            driver.execute_command('exit')
            
            driver.close()
            
            # Verificar resultados
            exitos = [r for b, r in resultados if r]
            
            if exitos:
                mensaje = f'WiFi configurado en banda(s): {", ".join([b for b, r in resultados if r])}'
                return {
                    'success': True,
                    'message': mensaje,
                    'detalles': {
                        'bandas_configuradas': [b for b, r in resultados if r]
                    }
                }
            else:
                return {
                    'success': False,
                    'message': 'No se pudo configurar WiFi en ninguna banda',
                }
            
        except Exception as e:
            self.logger.error(f'Error en CLI V-SOL: {str(e)}')
            return {
                'success': False,
                'message': f'Error ejecutando comandos CLI: {str(e)}',
            }
    
    def _configurar_ssid_vsol(
        self, 
        driver, 
        ssid_index: int,
        ssid: str, 
        password: str
    ) -> bool:
        """
        Configura un SSID específico en V-SOL OLT
        
        Returns:
            bool: True si fue exitoso
        """
        try:
            # Comando 1: Configurar nombre de SSID
            cmd_ssid = f'wlan ssid {ssid_index} ssid {ssid}'
            output_ssid = driver.execute_command(cmd_ssid, wait_time=2)
            
            # Comando 2: Configurar seguridad WPA2-PSK
            cmd_password = f'wlan ssid {ssid_index} security wpa2-psk aes {password}'
            output_password = driver.execute_command(cmd_password, wait_time=2)
            
            # Comando 3: Habilitar el SSID
            cmd_enable = f'wlan ssid {ssid_index} enable'
            output_enable = driver.execute_command(cmd_enable, wait_time=1)
            
            # V-SOL responde con "%" o "Error" si hay problema
            outputs = [output_ssid, output_password, output_enable]
            if any('%' in out or 'error' in out.lower() for out in outputs):
                self.logger.warning(
                    f'Posible error en configuración SSID {ssid_index}: '
                    f'{" | ".join(outputs)}'
                )
                return False
            
            return True
            
        except Exception as e:
            self.logger.error(f'Error configurando SSID {ssid_index}: {str(e)}')
            return False
    
    # ==========================================
    # Métodos auxiliares
    # ==========================================
    
    def obtener_configuracion_actual(self, onu: ONU) -> Dict:
        """
        Obtiene la configuración WiFi actual de una ONT
        
        Args:
            onu: Instancia del modelo ONU
        
        Returns:
            dict: Configuración actual o error
        """
        if onu.estado != 'online':
            return {
                'success': False,
                'message': f'La ONT está {onu.estado}',
            }
        
        metodo = self._determinar_metodo(onu)
        
        try:
            if metodo == 'cli_huawei':
                return self._obtener_config_huawei(onu)
            elif metodo == 'cli_vsol':
                return self._obtener_config_vsol(onu)
            else:
                return {
                    'success': False,
                    'message': f'Método {metodo} no soporta lectura de configuración',
                }
        except Exception as e:
            self.logger.error(f'Error obteniendo configuración WiFi: {str(e)}')
            return {
                'success': False,
                'message': f'Error: {str(e)}',
            }
    
    def _obtener_config_huawei(self, onu: ONU) -> Dict:
        """Obtiene configuración WiFi de ONT en Huawei OLT"""
        try:
            driver = get_driver(onu.olt)
            driver.connect()
            
            # Comando para obtener configuración WiFi
            cmd = (
                f'display ont wlan state {onu.frame}/{onu.slot}/'
                f'{onu.puerto} {onu.onu_index}'
            )
            output = driver.execute_command(cmd, wait_time=3)
            
            driver.close()
            
            # Parsear output (formato depende de la versión de OLT)
            ssids = self._parsear_wlan_huawei(output)
            
            return {
                'success': True,
                'ssids': ssids,
                'raw_output': output,
            }
            
        except Exception as e:
            return {
                'success': False,
                'message': str(e),
            }
    
    def _obtener_config_vsol(self, onu: ONU) -> Dict:
        """Obtiene configuración WiFi de ONT en V-SOL OLT"""
        try:
            driver = get_driver(onu.olt)
            driver.connect()
            
            # Comando para obtener configuración WiFi
            cmd = (
                f'show pon onu-wlan gpon-olt_{onu.slot}/'
                f'{onu.puerto} {onu.onu_index}'
            )
            output = driver.execute_command(cmd, wait_time=3)
            
            driver.close()
            
            # Parsear output
            ssids = self._parsear_wlan_vsol(output)
            
            return {
                'success': True,
                'ssids': ssids,
                'raw_output': output,
            }
            
        except Exception as e:
            return {
                'success': False,
                'message': str(e),
            }
    
    def _parsear_wlan_huawei(self, output: str) -> list:
        """Parsea configuración WLAN de Huawei"""
        ssids = []
        # Parseo básico - ajustar según formato real de la OLT
        for line in output.split('\n'):
            if 'SSID' in line and ':' in line:
                parts = line.split(':')
                if len(parts) > 1:
                    ssid_name = parts[1].strip()
                    ssids.append({
                        'ssid': ssid_name,
                        'banda': '2.4G/5G',  # Determinar según contexto
                    })
        return ssids
    
    def _parsear_wlan_vsol(self, output: str) -> list:
        """Parsea configuración WLAN de V-SOL"""
        ssids = []
        # Parseo básico - ajustar según formato real de la OLT
        for line in output.split('\n'):
            if 'SSID' in line:
                match = re.search(r'SSID\s*:\s*(.+)', line)
                if match:
                    ssid_name = match.group(1).strip()
                    ssids.append({
                        'ssid': ssid_name,
                        'banda': 'unknown',
                    })
        return ssids
