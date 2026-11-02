"""
Cobros: cómo un pago se reparte entre las facturas de un abonado.

Es la función `aplicar_cobro` de apps/dashboard/esquema_fuente.py, paso
por paso. La usan la RPC del dashboard (`/api/v1/rpc/aplicar_cobro`) y el
endpoint del bot (`/api/v1/pagos/registrar`), así que hay una sola regla:

- se saldan primero la factura elegida y después las más viejas;
- cada factura alcanzada recibe su propio pago (la primera fila es la
  principal; las demás son reparto y apuntan a ella);
- sólo el pago que termina de pagar una factura entra a la cola del SRI;
- lo que sobra queda a favor del abonado como excedente.
"""
from decimal import ROUND_HALF_UP, Decimal

from django.db import transaction
from django.db.models import Sum

from apps.dashboard.base import hoy

CENTAVO = Decimal('0.005')


class ErrorDeCobro(ValueError):
    """Un cobro que no se puede aplicar (el mensaje va tal cual a la pantalla)."""


def redondear(valor):
    return Decimal(valor).quantize(Decimal('0.01'), rounding=ROUND_HALF_UP)


def saldo_de_factura(factura):
    from .models import Pago

    pagado = Pago.objects.filter(factura=factura, anulado=False).aggregate(t=Sum('monto'))['t']
    return factura.total - (pagado or Decimal('0'))


@transaction.atomic
def aplicar_cobro(client_id, monto, forma_pago='efectivo', cuenta_id=None, n_transaccion=None,
                  fecha_pago=None, notas=None, comision=0, factura_id=None, facturar=None,
                  activo_servicio=False, solo_servicio=True, created_by=None):
    from apps.clientes.models import Cliente
    from apps.facturacion.models import Factura

    from .models import Pago

    if monto is None or Decimal(str(monto)) <= 0:
        raise ErrorDeCobro('El monto del cobro tiene que ser mayor que cero')
    cliente = Cliente.objects.filter(pk=client_id).first()
    if cliente is None:
        raise ErrorDeCobro('No existe ese cliente')

    monto = Decimal(str(monto))
    fecha_pago = fecha_pago or hoy()
    # NULL cuenta como "sí factura": es el valor de los clientes viejos.
    electronica = facturar if facturar is not None else (
        cliente.factura_electronica if cliente.factura_electronica is not None else True)
    transaccion = (n_transaccion or '').strip() or None
    resta = redondear(monto)
    principal = None
    aplicado = Decimal('0')
    detalle = []
    excedente = Decimal('0')

    facturas = Factura.objects.filter(client=cliente, anulada=False)
    if solo_servicio:
        from django.db.models import Q
        facturas = facturas.filter(Q(tipo='servicios') | Q(pk=factura_id))
    # La que el cobrador tenía abierta va primero; después, la más vieja.
    facturas = sorted(facturas, key=lambda f: (str(f.pk) != str(factura_id), f.fecha_emision, f.numero or 0))

    for factura in facturas:
        if resta <= CENTAVO:
            break
        saldo = saldo_de_factura(factura)
        if saldo <= CENTAVO:
            continue
        usa = redondear(min(resta, saldo))
        cierra = usa >= saldo - CENTAVO

        pago = Pago.objects.create(
            client=cliente,
            cliente_nombre=cliente.nombre,
            factura=factura,
            document_id=factura.document_id,
            cuenta_id=cuenta_id,
            monto=usa,
            # La comisión del medio de pago es una sola: va en la fila principal.
            comision=Decimal(str(comision or 0)) if principal is None else Decimal('0'),
            forma_pago=forma_pago,
            # El número del banco identifica la transferencia, no cada imputación.
            n_transaccion=transaccion if principal is None else None,
            fecha_pago=fecha_pago,
            notas=notas if principal is None else f'Parte del cobro N° {principal.numero} aplicada a esta factura',
            # Sólo el cobro que cancela la factura entra a la cola del SRI.
            facturar=bool(electronica and factura.document_id is None and cierra),
            # La reactivación se pide una vez, no una por factura.
            activo_servicio=bool(activo_servicio and principal is None),
            es_excedente=principal is not None,
            es_reparto=principal is not None,
            pago_origen=principal,
            created_by=created_by,
        )
        if principal is None:
            principal = pago

        # Los abonos anteriores ya no se facturan por separado: el comprobante
        # que sale ahora cubre el total.
        if cierra:
            Pago.objects.filter(factura=factura, facturar=True, document__isnull=True).exclude(
                pk=pago.pk).update(facturar=False)

        aplicado += usa
        resta = redondear(resta - usa)
        detalle.append({
            'factura_id': str(factura.pk),
            'numero': f'{factura.numero or 0:08d}',
            'tipo': factura.tipo,
            'monto': float(usa),
        })

    # Lo que sobró después de saldar todo: queda a favor del abonado.
    if resta > CENTAVO:
        excedente = resta
        pago = Pago.objects.create(
            client=cliente,
            cliente_nombre=cliente.nombre,
            cuenta_id=cuenta_id,
            monto=resta,
            comision=Decimal('0'),
            forma_pago=forma_pago,
            n_transaccion=transaccion if principal is None else None,
            fecha_pago=fecha_pago,
            notas=(notas or 'Cobro sin facturas pendientes: queda a favor del cliente')
            if principal is None else f'Excedente del cobro N° {principal.numero}: queda a favor del cliente',
            activo_servicio=bool(activo_servicio and principal is None),
            # Sin facturas que saldar no hay de qué ser excedente: es el cobro.
            es_excedente=principal is not None,
            pago_origen=principal,
            created_by=created_by,
        )
        if principal is None:
            principal = pago

    return {
        'pago_id': str(principal.pk) if principal else None,
        'numero': principal.numero if principal else None,
        'recibo': f'{(principal.numero if principal else 0) or 0:06d}',
        'cobrado': float(redondear(monto)),
        'aplicado': float(aplicado),
        'excedente': float(excedente),
        'facturas': detalle,
    }


def facturas_con_saldo(cliente):
    """Las facturas no anuladas que todavía deben algo, de la más vieja a la más nueva."""
    from apps.facturacion.models import Factura

    salida = []
    for f in Factura.objects.filter(client=cliente, anulada=False).order_by('fecha_vencimiento', 'numero'):
        saldo = saldo_de_factura(f)
        if saldo > CENTAVO:
            salida.append((f, saldo))
    return salida
