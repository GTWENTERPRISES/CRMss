"""
Driver SSH para OLTs V-SOL V1600G y similares
"""
import logging
import re

from .base import BaseOLTDriver

logger = logging.getLogger(__name__)


class VSOLOLTDriver(BaseOLTDriver):
    """Driver para OLTs V-SOL con comandos específicos"""

    def get_onus(self, frame=0, slot=0, puerto=None):
        """
        Obtiene lista de ONUs de V-SOL OLT
        
        Comando: show gpon onu state gpon-olt_{slot}/{puerto}
        """
        onus = []
        
        if puerto is not None:
            puertos = [puerto]
        else:
            # V-SOL típicamente tiene 8 o 16 puertos
            puertos = range(16)
        
        for p in puertos:
            try:
                command = f"show gpon onu state gpon-olt_{slot}/{p}"
                output = self.execute_command(command, wait_time=3)
                
                onus_puerto = self._parse_onu_state(output, frame, slot, p)
                onus.extend(onus_puerto)
                
            except Exception as e:
                logger.error(f"Error obteniendo ONUs del puerto {slot}/{p}: {e}")
        
        return onus

    def _parse_onu_state(self, output, frame, slot, puerto):
        """
        Parsea la salida de 'show gpon onu state'
        
        Formato típico V-SOL:
        OnuIndex   State
        -------------------
        1          online
        2          offline
        3          online
        """
        onus = []
        
        lines = output.split('\n')
        in_table = False
        
        for line in lines:
            line = line.strip()
            
            if '---' in line or 'OnuIndex' in line:
                in_table = True
                continue
            
            if not in_table or not line:
                continue
            
            parts = line.split()
            if len(parts) < 2:
                continue
            
            try:
                onu_index = int(parts[0])
                state = parts[1].lower()
                
                # Obtener SN de la ONU
                sn = self._get_onu_sn(slot, puerto, onu_index)
                
                # Mapear estados
                estado_map = {
                    'online': 'online',
                    'offline': 'offline',
                    'los': 'los',
                    'dying-gasp': 'offline'
                }
                estado = estado_map.get(state, 'unknown')
                
                onus.append({
                    'frame': frame,
                    'slot': slot,
                    'puerto': puerto,
                    'onu_index': onu_index,
                    'sn': sn,
                    'estado': estado,
                    'raw_state': state
                })
                
            except (ValueError, IndexError) as e:
                logger.debug(f"Error parseando línea: {line} - {e}")
                continue
        
        return onus

    def _get_onu_sn(self, slot, puerto, onu_index):
        """
        Obtiene el SN de una ONU específica
        
        Comando: show gpon onu detail-info gpon-olt_{slot}/{puerto} {onu_index}
        """
        try:
            command = f"show gpon onu detail-info gpon-olt_{slot}/{puerto} {onu_index}"
            output = self.execute_command(command, wait_time=2)
            
            # Buscar línea con SN
            for line in output.split('\n'):
                if 'SN' in line or 'Serial' in line:
                    parts = line.split(':')
                    if len(parts) > 1:
                        sn = parts[1].strip()
                        return sn if sn else f"VSOL{slot:02d}{puerto:02d}{onu_index:02d}"
            
            return f"VSOL{slot:02d}{puerto:02d}{onu_index:02d}"
            
        except Exception as e:
            logger.debug(f"Error obteniendo SN: {e}")
            return f"VSOL{slot:02d}{puerto:02d}{onu_index:02d}"

    def get_onu_optical_info(self, frame, slot, puerto, onu_index):
        """
        Obtiene información óptica de una ONU
        
        Comando: show gpon onu detail-info gpon-olt_{slot}/{puerto} {onu_index}
        """
        try:
            command = f"show gpon onu detail-info gpon-olt_{slot}/{puerto} {onu_index}"
            output = self.execute_command(command, wait_time=2)
            
            return self._parse_optical_info(output)
            
        except Exception as e:
            logger.error(f"Error obteniendo info óptica: {e}")
            return {}

    def _parse_optical_info(self, output):
        """
        Parsea información óptica de V-SOL
        
        Formato típico:
          ONU RX Power(dBm): -21.50
          OLT RX Power(dBm): 2.34  (este es el TX de la ONU)
          Distance(m): 1234
        """
        info = {
            'rx_power_dbm': None,
            'tx_power_dbm': None,
            'distancia_m': None
        }
        
        lines = output.split('\n')
        
        for line in lines:
            line = line.strip()
            
            if 'ONU RX Power' in line or 'Rx power' in line:
                match = re.search(r':\s*([-+]?\d+\.?\d*)', line)
                if match:
                    info['rx_power_dbm'] = self._parse_power_value(match.group(1))
            
            elif 'OLT RX Power' in line or 'Tx power' in line:
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
        Autoriza una nueva ONU en V-SOL OLT
        
        Comandos:
          interface gpon-olt_{slot}/{puerto}
          onu {onu_index} type {ont_type} sn {sn}
        """
        try:
            # Obtener siguiente índice disponible
            next_index = self._get_next_available_index(slot, puerto)
            
            # Configurar interfaz
            self.execute_command('configure terminal')
            self.execute_command(f'interface gpon-olt_{slot}/{puerto}')
            
            # Tipo de ONT (V-SOL usa nombres específicos como "ONU-1GE" o "ONU-4GE-WIFI")
            ont_type = "ONU-4GE-WIFI" if tipo_ont and tipo_ont.wifi else "ONU-1GE"
            
            # Autorizar ONU
            command = f'onu {next_index} type {ont_type} sn {sn}'
            output = self.execute_command(command)
            
            # Asignar perfil si existe
            if line_profile:
                vlan_command = f'tcont {next_index} profile {line_profile.profile_id_olt}'
                self.execute_command(vlan_command)
            
            # Salir
            self.execute_command('exit')
            self.execute_command('exit')
            
            return {
                'success': True,
                'message': f'ONU autorizada en índice {next_index}',
                'onu_index': next_index,
                'output': output
            }
            
        except Exception as e:
            logger.error(f"Error autorizando ONU {sn}: {e}")
            return {
                'success': False,
                'message': str(e)
            }

    def _get_next_available_index(self, slot, puerto):
        """
        Encuentra el siguiente índice de ONU disponible
        """
        try:
            command = f"show gpon onu state gpon-olt_{slot}/{puerto}"
            output = self.execute_command(command)
            
            # Encontrar índices usados
            used_indices = set()
            for line in output.split('\n'):
                parts = line.strip().split()
                if len(parts) >= 1:
                    try:
                        idx = int(parts[0])
                        used_indices.add(idx)
                    except:
                        continue
            
            # Retornar primer índice libre (1-128 típicamente)
            for i in range(1, 129):
                if i not in used_indices:
                    return i
            
            return 1
            
        except Exception as e:
            logger.error(f"Error buscando índice disponible: {e}")
            return 1

    def delete_onu(self, frame, slot, puerto, onu_index):
        """
        Elimina una ONU
        
        Comandos:
          interface gpon-olt_{slot}/{puerto}
          no onu {onu_index}
        """
        try:
            self.execute_command('configure terminal')
            self.execute_command(f'interface gpon-olt_{slot}/{puerto}')
            
            output = self.execute_command(f'no onu {onu_index}')
            
            self.execute_command('exit')
            self.execute_command('exit')
            
            return {
                'success': True,
                'message': 'ONU eliminada',
                'output': output
            }
            
        except Exception as e:
            logger.error(f"Error eliminando ONU: {e}")
            return {
                'success': False,
                'message': str(e)
            }

    def reboot_onu(self, frame, slot, puerto, onu_index):
        """
        Reinicia una ONU
        
        Comando: pon-onu-mng gpon-olt_{slot}/{puerto}
                 onu {onu_index}
                 reboot
        """
        try:
            self.execute_command('configure terminal')
            self.execute_command(f'pon-onu-mng gpon-olt_{slot}/{puerto}')
            self.execute_command(f'onu {onu_index}')
            
            output = self.execute_command('reboot')
            
            self.execute_command('exit')
            self.execute_command('exit')
            self.execute_command('exit')
            
            return {
                'success': True,
                'message': 'ONU reiniciada',
                'output': output
            }
            
        except Exception as e:
            logger.error(f"Error reiniciando ONU: {e}")
            return {
                'success': False,
                'message': str(e)
            }

    def get_ont_version(self, frame, slot, puerto, onu_index):
        """
        Obtiene versión de firmware de la ONU
        
        Comando: show gpon onu detail-info gpon-olt_{slot}/{puerto} {onu_index}
        """
        try:
            command = f'show gpon onu detail-info gpon-olt_{slot}/{puerto} {onu_index}'
            output = self.execute_command(command, wait_time=2)
            
            # Parsear versión
            version_info = {}
            for line in output.split('\n'):
                line = line.strip()
                
                if 'Vendor ID' in line or 'Vendor' in line:
                    parts = line.split(':')
                    if len(parts) > 1:
                        version_info['product_id'] = parts[1].strip()
                
                elif 'ONU Version' in line or 'Software version' in line or 'Firmware' in line:
                    parts = line.split(':')
                    if len(parts) > 1:
                        version_info['software_version'] = parts[1].strip()
                
                elif 'Hardware version' in line or 'Hardware' in line:
                    parts = line.split(':')
                    if len(parts) > 1:
                        version_info['hardware_version'] = parts[1].strip()
                
                elif 'Product Description' in line or 'Model' in line:
                    parts = line.split(':')
                    if len(parts) > 1:
                        if 'product_id' not in version_info:
                            version_info['product_id'] = parts[1].strip()
            
            return version_info
            
        except Exception as e:
            logger.error(f"Error obteniendo versión ONU: {e}")
            return {}
