"""
Los errores técnicos de la base, dichos para la persona que está usando el sistema.

SQLite (y Postgres) contestan "NOT NULL constraint failed: contratos.client_id"
o "invalid input syntax for type inet: "QA"". Eso llegaba tal cual a la
pantalla. Acá se traduce a qué pasó y qué hacer; el mensaje original queda en
`details` para quien tenga que diagnosticar.

Los mensajes que ya están en castellano (los RAISE de las funciones, las reglas
de negocio) no se tocan: `humanizar` devuelve None y se usan como vienen.
"""
import re

# Nombres de columna que no se leen bien solos.
ETIQUETAS = {
    'client_id': 'el cliente', 'cliente_id': 'el cliente', 'plan_id': 'el plan', 'router_id': 'el router',
    'olt_id': 'la OLT', 'onu_id': 'la ONU', 'tecnico_id': 'el técnico', 'cuenta_id': 'la cuenta',
    'factura_id': 'la factura', 'pago_id': 'el pago', 'ticket_id': 'el ticket', 'prospecto_id': 'el prospecto',
    'instalacion_id': 'la instalación', 'contrato_id': 'el contrato', 'articulo_id': 'el artículo',
    'almacen_id': 'el almacén', 'vendedor_id': 'el vendedor', 'nap_id': 'la caja NAP', 'subred_id': 'la red',
    'identificacion': 'la cédula o RUC', 'telefono': 'el teléfono', 'telefono_movil': 'el celular',
    'direccion': 'la dirección', 'email': 'el correo', 'nombre': 'el nombre', 'numero': 'el número',
    'codigo': 'el código', 'cidr': 'la red', 'gateway': 'el gateway', 'ip': 'la IP', 'mac_address': 'la MAC',
    'mac': 'la MAC', 'serie': 'la serie', 'sn': 'la serie', 'usuario': 'el usuario', 'usuario_ppp': 'el usuario PPPoE',
    'monto': 'el monto', 'precio': 'el precio', 'precio_mensual': 'el precio mensual', 'fecha': 'la fecha',
    'fecha_pago': 'la fecha de pago', 'ruc': 'el RUC', 'placa': 'la placa', 'rango_desde': 'el inicio del rango',
    'rango_hasta': 'el fin del rango', 'dns1': 'el DNS 1', 'dns2': 'el DNS 2', 'valor': 'el valor',
}

TIPOS = {'inet': 'una dirección IP', 'cidr': 'una red (por ejemplo 10.0.0.0/24)', 'macaddr': 'una MAC (AA:BB:CC:DD:EE:FF)',
         'uuid': 'un identificador', 'integer': 'un número entero', 'numeric': 'un número', 'date': 'una fecha',
         'timestamp with time zone': 'una fecha y hora', 'boolean': 'sí o no'}


def etiqueta(columna):
    columna = (columna or '').strip('"').split('.')[-1]
    if columna in ETIQUETAS:
        return ETIQUETAS[columna]
    base = re.sub(r'_id$', '', columna).replace('_', ' ')
    return f'«{base}»'


def humanizar(mensaje):
    """(texto, sugerencia) para un error técnico conocido; None si ya es legible."""
    m = str(mensaje or '')

    if r := re.search(r'NOT NULL constraint failed: ([\w.]+)', m):
        return f'Falta completar {etiqueta(r.group(1))}.', 'Es un dato obligatorio: complétalo y vuelve a guardar.'

    if r := re.search(r'UNIQUE constraint failed: (.+)$', m):
        detalle = r.group(1)
        if 'subredes' in detalle and 'cidr' in detalle:
            return 'Ya hay un bloque cargado con esa red.', 'Revisa la lista de redes: no puede haber dos bloques iguales.'
        columnas = [c.strip() for c in detalle.split(',') if '.' in c]
        if columnas:
            que = ' y '.join(etiqueta(c) for c in columnas)
            return f'Ya existe otro registro con {que} igual.', 'Busca el que ya está cargado en lugar de crear uno nuevo.'
        return 'Ese dato ya está cargado en otro registro.', 'Busca el que ya existe en lugar de crear uno nuevo.'

    if 'FOREIGN KEY constraint failed' in m:
        return ('No se puede: hace referencia a un registro que no existe o que todavía se usa en otro lado.',
                'Si estás borrando, primero quita lo que depende de este registro.')

    if r := re.search(r'CHECK constraint failed: (\w+)', m):
        nombre = r.group(1)
        col = re.sub(r'^[a-z]+_|_(check|valido|valida)$', '', nombre)
        return f'El valor de {etiqueta(col)} no está permitido.', 'Revisa ese dato: no cumple una regla del sistema.'

    if r := re.search(r'invalid input syntax for type ([\w ]+): "(.*)"', m):
        tipo, valor = r.group(1).strip(), r.group(2)
        return f'«{valor}» no es {TIPOS.get(tipo, "un valor válido")}.', 'Corrige ese dato y vuelve a guardar.'

    if 'datatype mismatch' in m:
        return 'Un dato no tiene el formato esperado.', 'Revisa los números y las fechas del formulario.'

    if 'database is locked' in m:
        return 'El sistema está ocupado guardando otra cosa.', 'Espera unos segundos y vuelve a intentarlo.'

    return None
