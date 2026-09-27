"""
Driver base para OLTs con conexión SSH
"""
import logging
import re
from abc import ABC, abstractmethod

import paramiko

logger = logging.getLogger(__name__)


class BaseOLTDriver(ABC):
    """Clase base abstracta para drivers de OLT"""

    def __init__(self, olt):
        """
        Inicializa el driver con una instancia de OLT
        
        Args:
            olt: Instancia del modelo OLT
        """
        self.olt = olt
        self.client = None
        self.channel = None
        self.connected = False

    def connect(self, timeout=10):
        """
        Establece conexión SSH con la OLT
        
        Args:
            timeout: Tiempo de espera en segundos
            
        Returns:
            bool: True si la conexión fue exitosa
        """
        try:
            self.client = paramiko.SSHClient()
            self.client.set_missing_host_key_policy(paramiko.AutoAddPolicy())
            
            logger.info(f"Conectando a OLT {self.olt.nombre} ({self.olt.ip_host})...")
            
            self.client.connect(
                hostname=self.olt.ip_host,
                port=self.olt.puerto_ssh,
                username=self.olt.usuario,
                password=self.olt.password_encrypted,  # Se desencripta automáticamente
                timeout=timeout,
                look_for_keys=False,
                allow_agent=False
            )
            
            # Crear canal interactivo
            self.channel = self.client.invoke_shell()
            self.channel.settimeout(timeout)
            
            # Esperar prompt inicial
            self._wait_for_prompt()
            
            # Si hay enable password, ejecutar enable
            if self.olt.enable_password_encrypted:
                self._enable_mode()
            
            self.connected = True
            logger.info(f"Conectado exitosamente a OLT {self.olt.nombre}")
            return True
            
        except Exception as e:
            logger.error(f"Error conectando a OLT {self.olt.nombre}: {e}")
            self.connected = False
            raise

    def _wait_for_prompt(self, timeout=5):
        """Espera a que aparezca el prompt del CLI"""
        import time
        output = ""
        start_time = time.time()
        
        while time.time() - start_time < timeout:
            if self.channel.recv_ready():
                chunk = self.channel.recv(4096).decode('utf-8', errors='ignore')
                output += chunk
                
                # Detectar prompts comunes
                if any(p in output for p in ['>', '#', '$', ':']):
                    return output
            time.sleep(0.1)
        
        return output

    def _enable_mode(self):
        """Entra en modo enable (privilegiado)"""
        self.channel.send('enable\n')
        output = self._wait_for_prompt()
        
        if 'assword' in output:
            self.channel.send(f'{self.olt.enable_password_encrypted}\n')
            self._wait_for_prompt()

    def execute_command(self, command, wait_time=2):
        """
        Ejecuta un comando y retorna el output
        
        Args:
            command: Comando a ejecutar
            wait_time: Tiempo de espera para recibir respuesta
            
        Returns:
            str: Output del comando
        """
        if not self.connected:
            raise ConnectionError("No hay conexión activa con la OLT")
        
        import time
        
        logger.debug(f"Ejecutando comando: {command}")
        
        # Limpiar buffer previo
        if self.channel.recv_ready():
            self.channel.recv(4096)
        
        # Enviar comando
        self.channel.send(f'{command}\n')
        
        # Esperar y recolectar output
        time.sleep(wait_time)
        output = ""
        
        while self.channel.recv_ready():
            chunk = self.channel.recv(8192).decode('utf-8', errors='ignore')
            output += chunk
            time.sleep(0.1)
        
        return output

    def close(self):
        """Cierra la conexión SSH"""
        if self.channel:
            self.channel.close()
        if self.client:
            self.client.close()
        self.connected = False
        logger.info(f"Conexión cerrada con OLT {self.olt.nombre}")

    def __enter__(self):
        """Context manager entry"""
        self.connect()
        return self

    def __exit__(self, exc_type, exc_val, exc_tb):
        """Context manager exit"""
        self.close()

    # Métodos abstractos que deben implementar las subclases
    
    @abstractmethod
    def get_onus(self, frame=0, slot=0, puerto=None):
        """
        Obtiene lista de ONUs
        
        Args:
            frame: Frame de la OLT
            slot: Slot de la OLT
            puerto: Puerto específico (None para todos)
            
        Returns:
            list: Lista de diccionarios con datos de ONUs
        """
        pass

    @abstractmethod
    def get_onu_optical_info(self, frame, slot, puerto, onu_index):
        """
        Obtiene información óptica de una ONU específica
        
        Args:
            frame: Frame
            slot: Slot
            puerto: Puerto
            onu_index: Índice de la ONU
            
        Returns:
            dict: Información óptica (rx_power, tx_power, distancia, etc.)
        """
        pass

    @abstractmethod
    def authorize_onu(self, frame, slot, puerto, sn, line_profile, tipo_ont):
        """
        Autoriza una nueva ONU
        
        Args:
            frame: Frame
            slot: Slot
            puerto: Puerto
            sn: Serial number
            line_profile: Perfil de línea
            tipo_ont: Tipo de ONT
            
        Returns:
            dict: Resultado de la autorización
        """
        pass

    @abstractmethod
    def delete_onu(self, frame, slot, puerto, onu_index):
        """
        Elimina una ONU
        
        Args:
            frame: Frame
            slot: Slot
            puerto: Puerto
            onu_index: Índice de la ONU
            
        Returns:
            dict: Resultado de la eliminación
        """
        pass

    @abstractmethod
    def reboot_onu(self, frame, slot, puerto, onu_index):
        """
        Reinicia una ONU
        
        Args:
            frame: Frame
            slot: Slot  
            puerto: Puerto
            onu_index: Índice de la ONU
            
        Returns:
            dict: Resultado del reinicio
        """
        pass

    def _parse_power_value(self, value_str):
        """
        Parsea valores de potencia óptica
        
        Args:
            value_str: String con el valor (ej: "-21.50(dBm)" o "-21.50 dBm")
            
        Returns:
            float: Valor numérico o None
        """
        if not value_str or value_str in ['-', '--', 'N/A', '']:
            return None
        
        # Extraer número del string
        match = re.search(r'([-+]?\d+\.?\d*)', value_str)
        if match:
            try:
                return float(match.group(1))
            except:
                return None
        return None

    def _parse_distance_value(self, value_str):
        """
        Parsea valores de distancia
        
        Args:
            value_str: String con el valor (ej: "1234(m)" o "1.2 km")
            
        Returns:
            int: Distancia en metros o None
        """
        if not value_str or value_str in ['-', '--', 'N/A', '']:
            return None
        
        # Extraer número
        match = re.search(r'(\d+\.?\d*)', value_str)
        if match:
            try:
                value = float(match.group(1))
                # Si está en km, convertir a metros
                if 'km' in value_str.lower():
                    value = value * 1000
                return int(value)
            except:
                return None
        return None
