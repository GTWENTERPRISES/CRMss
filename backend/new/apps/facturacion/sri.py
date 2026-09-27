"""
Integración con SRI Ecuador - Facturación Electrónica
Implementa generación de XML, clave de acceso, firma digital y envío al SRI
"""
import base64
import logging
from datetime import datetime
from xml.dom import minidom

from django.conf import settings

logger = logging.getLogger(__name__)


class SRIIntegration:
    """
    Clase para integración con el Servicio de Rentas Internas de Ecuador
    Soporta facturación electrónica según estándares SRI
    """
    
    # Códigos de tipo de comprobante
    TIPO_FACTURA = '01'
    TIPO_NOTA_CREDITO = '04'
    TIPO_NOTA_DEBITO = '05'
    TIPO_GUIA_REMISION = '06'
    TIPO_RETENCION = '07'
    
    # Ambientes
    AMBIENTE_PRUEBAS = '1'
    AMBIENTE_PRODUCCION = '2'
    
    def __init__(self):
        self.url_recepcion = getattr(
            settings, 
            'SRI_URL_RECEPCION',
            'https://cel.sri.gob.ec/comprobantes-electronicos-ws/RecepcionComprobantesOffline?wsdl'
        )
        self.url_autorizacion = getattr(
            settings,
            'SRI_URL_AUTORIZACION',
            'https://cel.sri.gob.ec/comprobantes-electronicos-ws/AutorizacionComprobantesOffline?wsdl'
        )
        self.ambiente = getattr(settings, 'SRI_AMBIENTE', self.AMBIENTE_PRUEBAS)
        self.ruc_empresa = getattr(settings, 'SRI_RUC_EMPRESA', '')
        self.razon_social = getattr(settings, 'SRI_RAZON_SOCIAL', '')
        self.nombre_comercial = getattr(settings, 'SRI_NOMBRE_COMERCIAL', '')
        self.direccion_matriz = getattr(settings, 'SRI_DIRECCION_MATRIZ', '')
        self.serie = getattr(settings, 'SRI_SERIE', '001-001')

    def generar_clave_acceso(self, fecha, tipo_doc, ruc, serie, numero, 
                            codigo_numerico='12345678', tipo_emision='1'):
        """
        Genera clave de acceso de 49 dígitos según estándar SRI
        
        Formato: ddmmyyyyTTrrrrrrrrrrrreepppsssssssssc
        - dd/mm/yyyy: fecha de emisión
        - TT: tipo de comprobante (01=factura, 04=nota crédito, etc)
        - rrrrrrrrrrrr: RUC (13 dígitos)
        - ee: código establecimiento
        - ppp: punto de emisión
        - sssssssss: número secuencial
        - c: código numérico (8 dígitos)
        - t: tipo de emisión (1=normal, 2=indisponibilidad)
        - d: dígito verificador (módulo 11)
        """
        fecha_str = fecha.strftime('%d%m%Y')
        serie_partes = serie.split('-')
        codigo_establecimiento = serie_partes[0] if len(serie_partes) > 0 else '001'
        punto_emision = serie_partes[1] if len(serie_partes) > 1 else '001'
        numero_sec = str(numero).zfill(9)
        
        base = (
            f'{fecha_str}'
            f'{tipo_doc}'
            f'{ruc}'
            f'{codigo_establecimiento}'
            f'{punto_emision}'
            f'{numero_sec}'
            f'{codigo_numerico}'
            f'{tipo_emision}'
        )
        
        digito = self._modulo11(base)
        clave_acceso = f'{base}{digito}'
        
        logger.info(f'Clave de acceso generada: {clave_acceso}')
        return clave_acceso

    @staticmethod
    def _modulo11(cadena):
        """Calcula dígito verificador usando módulo 11"""
        factores = [2, 3, 4, 5, 6, 7]
        suma = 0
        for i, ch in enumerate(reversed(cadena)):
            factor = factores[i % len(factores)]
            suma += int(ch) * factor
        
        resto = suma % 11
        if resto == 0:
            return 0
        elif resto == 1:
            return 0  # El SRI considera 1 como 0
        else:
            return 11 - resto

    def generar_xml_factura(self, factura, detalles):
        """
        Genera XML de factura electrónica según estándar SRI v1.1.0
        
        Args:
            factura: objeto Factura con datos del cliente y totales
            detalles: lista de DetalleFactura con items facturados
        
        Returns:
            str: XML formateado de la factura
        """
        # Generar clave de acceso
        clave_acceso = self.generar_clave_acceso(
            fecha=factura.fecha_emision,
            tipo_doc=self.TIPO_FACTURA,
            ruc=self.ruc_empresa,
            serie=factura.serie,
            numero=factura.numero,
        )
        
        # Construir XML
        doc = minidom.Document()
        
        # Elemento raíz
        root = doc.createElement('factura')
        root.setAttribute('id', 'comprobante')
        root.setAttribute('version', '1.1.0')
        doc.appendChild(root)
        
        # Info Tributaria
        info_trib = doc.createElement('infoTributaria')
        self._agregar_elemento(doc, info_trib, 'ambiente', self.ambiente)
        self._agregar_elemento(doc, info_trib, 'tipoEmision', '1')
        self._agregar_elemento(doc, info_trib, 'razonSocial', self.razon_social)
        self._agregar_elemento(doc, info_trib, 'nombreComercial', self.nombre_comercial)
        self._agregar_elemento(doc, info_trib, 'ruc', self.ruc_empresa)
        self._agregar_elemento(doc, info_trib, 'claveAcceso', clave_acceso)
        self._agregar_elemento(doc, info_trib, 'codDoc', self.TIPO_FACTURA)
        
        serie_partes = factura.serie.split('-')
        estab = serie_partes[0] if len(serie_partes) > 0 else '001'
        pto_emi = serie_partes[1] if len(serie_partes) > 1 else '001'
        
        self._agregar_elemento(doc, info_trib, 'estab', estab)
        self._agregar_elemento(doc, info_trib, 'ptoEmi', pto_emi)
        self._agregar_elemento(doc, info_trib, 'secuencial', str(factura.numero).zfill(9))
        self._agregar_elemento(doc, info_trib, 'dirMatriz', self.direccion_matriz)
        root.appendChild(info_trib)
        
        # Info Factura
        info_fact = doc.createElement('infoFactura')
        self._agregar_elemento(doc, info_fact, 'fechaEmision', 
                              factura.fecha_emision.strftime('%d/%m/%Y'))
        self._agregar_elemento(doc, info_fact, 'dirEstablecimiento', self.direccion_matriz)
        
        # Verificar si cliente tiene obligado a llevar contabilidad
        obligado_contabilidad = getattr(factura.cliente, 'obligado_contabilidad', 'NO')
        self._agregar_elemento(doc, info_fact, 'obligadoContabilidad', obligado_contabilidad)
        
        # Datos del cliente
        identificacion = factura.cliente.cedula
        self._agregar_elemento(doc, info_fact, 'tipoIdentificacionComprador',
                              self._tipo_identificacion(identificacion))
        self._agregar_elemento(doc, info_fact, 'razonSocialComprador',
                              factura.cliente.nombre)
        self._agregar_elemento(doc, info_fact, 'identificacionComprador',
                              identificacion)
        
        if hasattr(factura.cliente, 'direccion'):
            self._agregar_elemento(doc, info_fact, 'direccionComprador', 
                                  factura.cliente.direccion)
        
        # Totales
        self._agregar_elemento(doc, info_fact, 'totalSinImpuestos', 
                              f'{factura.subtotal:.2f}')
        self._agregar_elemento(doc, info_fact, 'totalDescuento', '0.00')
        
        # Total con impuestos (IVA)
        total_impuestos = doc.createElement('totalConImpuestos')
        total_imp_item = doc.createElement('totalImpuesto')
        self._agregar_elemento(doc, total_imp_item, 'codigo', '2')  # 2 = IVA
        self._agregar_elemento(doc, total_imp_item, 'codigoPorcentaje', '2')  # 2 = 12%
        self._agregar_elemento(doc, total_imp_item, 'baseImponible', 
                              f'{factura.subtotal:.2f}')
        self._agregar_elemento(doc, total_imp_item, 'valor', f'{factura.iva:.2f}')
        total_impuestos.appendChild(total_imp_item)
        info_fact.appendChild(total_impuestos)
        
        self._agregar_elemento(doc, info_fact, 'propina', '0.00')
        self._agregar_elemento(doc, info_fact, 'importeTotal', f'{factura.total:.2f}')
        self._agregar_elemento(doc, info_fact, 'moneda', 'DOLAR')
        
        # Pagos
        pagos_elem = doc.createElement('pagos')
        pago_elem = doc.createElement('pago')
        self._agregar_elemento(doc, pago_elem, 'formaPago', '01')  # 01 = Sin uso del sistema financiero
        self._agregar_elemento(doc, pago_elem, 'total', f'{factura.total:.2f}')
        pagos_elem.appendChild(pago_elem)
        info_fact.appendChild(pagos_elem)
        
        root.appendChild(info_fact)
        
        # Detalles
        detalles_elem = doc.createElement('detalles')
        for detalle in detalles:
            detalle_elem = doc.createElement('detalle')
            self._agregar_elemento(doc, detalle_elem, 'codigoPrincipal', 
                                  str(detalle.codigo_producto or '001'))
            self._agregar_elemento(doc, detalle_elem, 'descripcion', 
                                  detalle.descripcion)
            self._agregar_elemento(doc, detalle_elem, 'cantidad', 
                                  f'{detalle.cantidad:.2f}')
            self._agregar_elemento(doc, detalle_elem, 'precioUnitario', 
                                  f'{detalle.precio_unitario:.2f}')
            self._agregar_elemento(doc, detalle_elem, 'descuento', '0.00')
            self._agregar_elemento(doc, detalle_elem, 'precioTotalSinImpuesto', 
                                  f'{detalle.subtotal:.2f}')
            
            # Impuestos del detalle
            impuestos_det = doc.createElement('impuestos')
            impuesto_det = doc.createElement('impuesto')
            self._agregar_elemento(doc, impuesto_det, 'codigo', '2')  # IVA
            self._agregar_elemento(doc, impuesto_det, 'codigoPorcentaje', '2')  # 12%
            self._agregar_elemento(doc, impuesto_det, 'tarifa', '12')
            self._agregar_elemento(doc, impuesto_det, 'baseImponible', 
                                  f'{detalle.subtotal:.2f}')
            self._agregar_elemento(doc, impuesto_det, 'valor', 
                                  f'{detalle.subtotal * 0.12:.2f}')
            impuestos_det.appendChild(impuesto_det)
            detalle_elem.appendChild(impuestos_det)
            
            detalles_elem.appendChild(detalle_elem)
        
        root.appendChild(detalles_elem)
        
        # Información adicional
        info_adicional = doc.createElement('infoAdicional')
        self._agregar_campo_adicional(doc, info_adicional, 'email', 
                                     factura.cliente.email)
        if hasattr(factura.cliente, 'telefono'):
            self._agregar_campo_adicional(doc, info_adicional, 'telefono', 
                                         factura.cliente.telefono)
        root.appendChild(info_adicional)
        
        # Formatear XML
        xml_str = doc.toprettyxml(indent='  ', encoding='UTF-8').decode('UTF-8')
        
        # Guardar clave de acceso en factura
        factura.clave_acceso = clave_acceso
        
        return xml_str

    def _agregar_elemento(self, doc, parent, nombre, valor):
        """Helper para agregar elemento XML"""
        elem = doc.createElement(nombre)
        texto = doc.createTextNode(str(valor))
        elem.appendChild(texto)
        parent.appendChild(elem)

    def _agregar_campo_adicional(self, doc, parent, nombre, valor):
        """Helper para agregar campo adicional"""
        campo = doc.createElement('campoAdicional')
        campo.setAttribute('nombre', nombre)
        texto = doc.createTextNode(str(valor))
        campo.appendChild(texto)
        parent.appendChild(campo)

    def firmar_xml(self, xml_content, certificado_p12_path, password):
        """
        Firma XML con certificado digital .p12
        Requiere: pip install signxml cryptography
        
        Args:
            xml_content: string con el XML a firmar
            certificado_p12_path: ruta al archivo .p12
            password: contraseña del certificado
        
        Returns:
            str: XML firmado con XAdES-BES
        """
        try:
            from lxml import etree
            from signxml import XMLSigner
            from cryptography.hazmat.primitives.serialization import pkcs12
            from cryptography.hazmat.backends import default_backend
            
            # Cargar certificado
            with open(certificado_p12_path, 'rb') as f:
                p12_data = f.read()
            
            private_key, certificate, ca_certs = pkcs12.load_key_and_certificates(
                p12_data,
                password.encode(),
                backend=default_backend()
            )
            
            # Parsear XML
            root = etree.fromstring(xml_content.encode('utf-8'))
            
            # Firmar
            signer = XMLSigner(
                method='enveloped',
                signature_algorithm='rsa-sha1',
                digest_algorithm='sha1'
            )
            
            signed_root = signer.sign(root, key=private_key, cert=certificate)
            
            return etree.tostring(signed_root, encoding='unicode', pretty_print=True)
            
        except ImportError:
            logger.error('signxml o cryptography no instalados. Ejecutar: pip install signxml cryptography lxml')
            raise NotImplementedError(
                'La firma XAdES-BES requiere signxml. '
                'Instalar: pip install signxml cryptography lxml'
            )
        except Exception as e:
            logger.error(f'Error al firmar XML: {str(e)}')
            raise

    def enviar_recepcion(self, xml_firmado):
        """
        Envía comprobante al SRI para recepción
        
        Returns:
            dict con estado de recepción
        """
        import requests
        
        envelope = self._construir_sobre_recepcion(xml_firmado)
        
        try:
            response = requests.post(
                self.url_recepcion,
                data=envelope,
                headers={'Content-Type': 'text/xml; charset=utf-8'},
                timeout=60,
            )
            response.raise_for_status()
            
            return self._parsear_respuesta_recepcion(response.text)
        except Exception as e:
            logger.error(f'Error en envío a recepción SRI: {str(e)}')
            raise

    def consultar_autorizacion(self, clave_acceso):
        """
        Consulta autorización de un comprobante en el SRI
        
        Args:
            clave_acceso: clave de acceso de 49 dígitos
        
        Returns:
            dict con estado de autorización
        """
        import requests
        
        envelope = self._construir_sobre_autorizacion(clave_acceso)
        
        try:
            response = requests.post(
                self.url_autorizacion,
                data=envelope,
                headers={'Content-Type': 'text/xml; charset=utf-8'},
                timeout=60,
            )
            response.raise_for_status()
            
            return self._parsear_respuesta_autorizacion(response.text)
        except Exception as e:
            logger.error(f'Error en consulta autorización SRI: {str(e)}')
            raise

    @staticmethod
    def _construir_sobre_recepcion(xml_firmado):
        """Construye sobre SOAP para recepción"""
        xml_b64 = base64.b64encode(xml_firmado.encode('utf-8')).decode('utf-8')
        return (
            '<?xml version="1.0" encoding="UTF-8"?>'
            '<soap:Envelope xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/" '
            'xmlns:ec="http://ec.gob.sri.ws.recepcion">'
            '<soap:Body>'
            '<ec:validarComprobante>'
            f'<xml>{xml_b64}</xml>'
            '</ec:validarComprobante>'
            '</soap:Body>'
            '</soap:Envelope>'
        )

    @staticmethod
    def _construir_sobre_autorizacion(clave_acceso):
        """Construye sobre SOAP para consulta de autorización"""
        return (
            '<?xml version="1.0" encoding="UTF-8"?>'
            '<soap:Envelope xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/" '
            'xmlns:ec="http://ec.gob.sri.ws.autorizacion">'
            '<soap:Body>'
            '<ec:autorizacionComprobante>'
            f'<claveAccesoComprobante>{clave_acceso}</claveAccesoComprobante>'
            '</ec:autorizacionComprobante>'
            '</soap:Body>'
            '</soap:Envelope>'
        )

    @staticmethod
    def _parsear_respuesta_recepcion(texto):
        """Parsea respuesta SOAP de recepción"""
        from xml.etree import ElementTree as ET
        
        try:
            root = ET.fromstring(texto)
            # Buscar estado en respuesta
            estado = root.find('.//{http://ec.gob.sri.ws.recepcion}estado')
            
            return {
                'estado': estado.text if estado is not None else 'ERROR',
                'mensaje': texto,
                'fecha_proceso': datetime.now().isoformat(),
            }
        except Exception as e:
            logger.error(f'Error parseando respuesta recepción: {str(e)}')
            return {'estado': 'ERROR', 'mensaje': str(e)}

    @staticmethod
    def _parsear_respuesta_autorizacion(texto):
        """Parsea respuesta SOAP de autorización"""
        from xml.etree import ElementTree as ET
        
        try:
            root = ET.fromstring(texto)
            estado = root.find('.//{http://ec.gob.sri.ws.autorizacion}estado')
            numero_autorizacion = root.find('.//{http://ec.gob.sri.ws.autorizacion}numeroAutorizacion')
            fecha_autorizacion = root.find('.//{http://ec.gob.sri.ws.autorizacion}fechaAutorizacion')
            
            return {
                'estado': estado.text if estado is not None else 'NO AUTORIZADO',
                'numero_autorizacion': numero_autorizacion.text if numero_autorizacion is not None else '',
                'fecha_autorizacion': fecha_autorizacion.text if fecha_autorizacion is not None else '',
                'xml_respuesta': texto,
            }
        except Exception as e:
            logger.error(f'Error parseando respuesta autorización: {str(e)}')
            return {'estado': 'ERROR', 'mensaje': str(e)}
