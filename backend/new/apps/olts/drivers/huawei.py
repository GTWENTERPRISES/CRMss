"""
Driver SSH para OLTs Huawei MA5608T y similares
"""
import logging
import re

from .base import BaseOLTDriver

logger = logging.getLogger(__name__)


class HuaweiOLTDriver(BaseOLTDriver):
    """Driver para OLTs Huawei con comandos específicos"""

    def get_onus(self, frame=0, slot=0, puerto=None):
        """
        Obtiene lista de ONUs de Huawei OLT
        
        Comando: display ont info {frame}/{slot}/{puerto} all
        """
        onus = []
        
        if puerto is not None:
            # Un puerto específico
            puertos = [puerto]
        else:
            # Todos los puertos del slot (0-7 típicamente)
            puertos = range(8)
        
        for p in puertos:
            try:
                command = f"display ont info {frame}/{slot}/{p} all"
                output = self.execute_command(command, wait_time=3)
                
                # Parsear output
                onus_puerto = self._parse_ont_info(output, frame, slot, p)
                onus.extend(onus_puerto)
                
            except Exception as e:
                logger.error(f"Error obteniendo ONUs del puerto {frame}/{slot}/{p}: {e}")
        
        return onus

    def _parse_ont_info(self, output, frame, slot, puerto):
        """
        Parsea la salida de 'display ont info'
        
        Formato típico Huawei:
          F/S/P   ONT         SN         Control     Run      Config   Match    Protect
                  ID                     flag        state    state    state    side
        --------------------------------------------------------------------------------
          0/0/0   0    HWTC12345678       active     online   normal   match    no
        """
        onus = []
        
        lines = output.split('\n')
        in_table = False
        
        for line in lines:
            line = line.strip()
            
            # Detectar inicio de tabla
            if '---' in line:
                in_table = True
                continue
            
            if not in_table or not line:
                continue
            
            # Parsear línea de ONU
            # Formato: F/S/P  ONT_ID  SN  Control_flag  Run_state  Config_state  Match_state  Protect_side
            parts = line.split()
            if len(parts) < 5:
                continue
            
            try:
                # Verificar que sea una línea válida
                if '/' not in parts[0]:
                    continue
                
                fsp = parts[0].split('/')
                if len(fsp) != 3:
                    continue
                
                onu_index = int(parts[1])
                sn = parts[2]
                run_state = parts[4] if len(parts) > 4 else 'unknown'
                
                # Mapear estado Huawei a nuestro modelo
                estado_map = {
                    'online': 'online',
                    'offline': 'offline',
                    'los': 'los',
                    'dying-gasp': 'offline'
                }
                estado = estado_map.get(run_state.lower(), 'unknown')
                
                onus.append({
                    'frame': frame,
                    'slot': slot,
                    'puerto': puerto,
                    'onu_index': onu_index,
                    'sn': sn,
                    'estado': estado,
                    'raw_state': run_state
                })
                
            except (ValueError, IndexError) as e:
                logger.debug(f"Error parseando línea: {line} - {e}")
                continue
        
        return onus

    def get_onu_optical_info(self, frame, slot, puerto, onu_index):
        """
        Obtiene información óptica de una ONU
        
        Comando: display ont optical-info {frame}/{slot}/{puerto} {onu_index}
        """
        try:
            command = f"display ont optical-info {frame}/{slot}/{puerto} {onu_index}"
            output = self.execute_command(command, wait_time=2)
            
            return self._parse_optical_info(output)
            
        except Exception as e:
            logger.error(f"Error obteniendo info óptica de ONU {frame}/{slot}/{puerto}:{onu_index}: {e}")
            return {}

    def _parse_optical_info(self, output):
        """
        Parsea información óptica de Huawei
        
        Formato típico:
          Rx optical power(dBm)                : -21.50
          Tx optical power(dBm)                : 2.34
          Distance(m)                          : 1234
        """
        info = {
            'rx_power_dbm': None,
            'tx_power_dbm': None,
            'distancia_m': None
        }
        
        lines = output.split('\n')
        
        for line in lines:
            line = line.strip()
            
            if 'Rx optical power' in line or 'RX power' in line:
                # Extraer valor
                match = re.search(r':\s*([-+]?\d+\.?\d*)', line)
                if match:
                    info['rx_power_dbm'] = self._parse_power_value(match.group(1))
            
            elif 'Tx optical power' in line or 'TX power' in line:
                match = re.search(r':\s*([-+]?\d+\.?\d*)', line)
                if match:
                    info['tx_power_dbm'] = self._parse_power_value(match.group(1))
            
            elif 'Distance' in line:
                match = re.search(r':\s*(\d+)', line)
                if match:
                    info['distancia_m'] = self._parse_distance_value(match.group(1))
        
        return info

    def authorize_onu(self, frame, slot, puerto, sn, line_profile, tipo_ont):
        """
        Autoriza una nueva ONU en Huawei OLT
        
        Comandos:
          interface gpon {frame}/{slot}
          ont add {puerto} sn-auth {sn} omci ont-lineprofile-id {profile_id} ont-srvprofile-id {profile_id}
        """
        try:
            # Entrar al modo de configuración de la interfaz GPON
            self.execute_command('config')
            self.execute_command(f'interface gpon {frame}/{slot}')
            
            # Obtener IDs de perfiles (en producción estos vendrían de line_profile)
            profile_id = line_profile.profile_id_olt if line_profile else 1
            
            # Autorizar ONU
            command = (
                f'ont add {puerto} sn-auth {sn} '
                f'omci ont-lineprofile-id {profile_id} '
                f'ont-srvprofile-id {profile_id}'
            )
            output = self.execute_command(command)
            
            # Salir del modo configuración
            self.execute_command('quit')
            self.execute_command('quit')
            
            # Verificar éxito
            if 'successful' in output.lower() or 'add ont' in output.lower():
                return {
                    'success': True,
                    'message': 'ONU autorizada exitosamente',
                    'output': output
                }
            else:
                return {
                    'success': False,
                    'message': 'Error autorizando ONU',
                    'output': output
                }
                
        except Exception as e:
            logger.error(f"Error autorizando ONU {sn}: {e}")
            return {
                'success': False,
                'message': str(e)
            }

    def delete_onu(self, frame, slot, puerto, onu_index):
        """
        Elimina una ONU
        
        Comandos:
          interface gpon {frame}/{slot}
          ont delete {puerto} {onu_index}
        """
        try:
            self.execute_command('config')
            self.execute_command(f'interface gpon {frame}/{slot}')
            
            output = self.execute_command(f'ont delete {puerto} {onu_index}')
            
            self.execute_command('quit')
            self.execute_command('quit')
            
            return {
                'success': 'successful' in output.lower(),
                'message': 'ONU eliminada' if 'successful' in output.lower() else 'Error eliminando ONU',
                'output': output
            }
            
        except Exception as e:
            logger.error(f"Error eliminando ONU {frame}/{slot}/{puerto}:{onu_index}: {e}")
            return {
                'success': False,
                'message': str(e)
            }

    def reboot_onu(self, frame, slot, puerto, onu_index):
        """
        Reinicia una ONU
        
        Comando: ont reset {frame}/{slot}/{puerto} {onu_index}
        """
        try:
            command = f'ont reset {frame}/{slot}/{puerto} {onu_index}'
            output = self.execute_command(command)
            
            return {
                'success': 'successful' in output.lower() or 'reset' in output.lower(),
                'message': 'ONU reiniciada',
                'output': output
            }
            
        except Exception as e:
            logger.error(f"Error reiniciando ONU {frame}/{slot}/{puerto}:{onu_index}: {e}")
            return {
                'success': False,
                'message': str(e)
            }

    def get_ont_version(self, frame, slot, puerto, onu_index):
        """
        Obtiene versión de firmware de la ONU
        
        Comando: display ont version {frame}/{slot}/{puerto} {onu_index}
        """
        try:
            command = f'display ont version {frame}/{slot}/{puerto} {onu_index}'
            output = self.execute_command(command)
            
            # Parsear versión
            version_info = {}
            for line in output.split('\n'):
                if 'Product ID' in line:
                    version_info['product_id'] = line.split(':')[1].strip()
                elif 'ONT Version' in line or 'Software version' in line:
                    version_info['software_version'] = line.split(':')[1].strip()
                elif 'Hardware version' in line:
                    version_info['hardware_version'] = line.split(':')[1].strip()
            
            return version_info
            
        except Exception as e:
            logger.error(f"Error obteniendo versión ONU: {e}")
            return {}
