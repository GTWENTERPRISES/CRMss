// Validación con Zod de lo que guarda el dashboard (src/lib/validacion).
// Correr: npm test   (node --test)
import assert from 'node:assert/strict'
import { test, describe } from 'node:test'

import { cedulaValida, ESQUEMAS, reglaDe } from '../src/lib/validacion/reglas.js'
import { errorDeValidacion, esquemaDeTabla, validarArgumentos, validarDatos, validarPorNombre } from '../src/lib/validacion/index.js'
import { FUNCIONES, TABLAS } from '../src/lib/validacion/tablas.generado.js'

const errores = (r) => (r.ok ? [] : r.errores.map((e) => e.campo))

describe('esquemas generados desde la base', () => {
  test('están todas las tablas que escribe el dashboard', () => {
    for (const t of ['clientes', 'facturas', 'pagos', 'tickets', 'prospectos', 'subredes', 'usuarios_sistema', 'planes_velocidad']) {
      assert.ok(TABLAS[t], `falta ${t}`)
    }
  })

  test('cada columna se convierte en un esquema de Zod', () => {
    for (const tabla of Object.keys(TABLAS)) {
      const columnas = esquemaDeTabla(tabla)
      for (const [col, def] of Object.entries(columnas)) {
        assert.equal(typeof def.esquema.safeParse, 'function', `${tabla}.${col}`)
      }
    }
  })
})

describe('reglas de negocio', () => {
  test('cédula ecuatoriana con dígito verificador', () => {
    assert.ok(cedulaValida('0912345675'))
    assert.ok(cedulaValida('1710034065'))
    assert.ok(!cedulaValida('0912345678'), 'dígito verificador incorrecto')
    assert.ok(!cedulaValida('9912345675'), 'provincia inexistente')
    assert.ok(!cedulaValida('091234567'), 'faltan dígitos')
  })

  test('teléfono: acepta separadores, exige dígitos', () => {
    assert.ok(ESQUEMAS.telefono.safeParse('099 123-4567').success)
    assert.ok(ESQUEMAS.telefono.safeParse('+593 99 123 4567').success)
    assert.ok(!ESQUEMAS.telefono.safeParse('099abc').success)
    assert.ok(!ESQUEMAS.telefono.safeParse('123').success)
  })

  test('IP, red y MAC', () => {
    assert.ok(ESQUEMAS.ip.safeParse('192.168.1.10').success)
    assert.ok(ESQUEMAS.ip.safeParse('2800:bf0::10').success)
    assert.ok(!ESQUEMAS.ip.safeParse('192.168.1.300').success)
    assert.ok(!ESQUEMAS.ip.safeParse('QA gateway').success)
    assert.ok(ESQUEMAS.red.safeParse('10.0.0.0/24').success)
    assert.ok(!ESQUEMAS.red.safeParse('10.0.0.0').success)
    assert.ok(!ESQUEMAS.red.safeParse('10.0.0.0/40').success)
    assert.ok(ESQUEMAS.mac.safeParse('AA:BB:CC:DD:EE:FF').success)
    assert.ok(!ESQUEMAS.mac.safeParse('AA:BB:CC').success)
  })

  test('qué regla le toca a cada columna, por su nombre', () => {
    assert.equal(reglaDe('email'), 'correo')
    assert.equal(reglaDe('email_from_name'), null, 'el nombre del remitente')
    assert.equal(reglaDe('telefono_movil'), 'telefono')
    assert.equal(reglaDe('identificacion'), 'identificacion')
    assert.equal(reglaDe('tipo_identificacion'), null, 'es un código, no el número')
    assert.equal(reglaDe('whatsapp_via'), null, 'configuración, no un número')
    assert.equal(reglaDe('cidr'), 'red')
    assert.equal(reglaDe('gateway'), 'ip')
    assert.equal(reglaDe('dia_facturacion'), 'diaDelMes')
    assert.equal(reglaDe('precio_mensual'), 'noNegativo')
    assert.equal(reglaDe('plan_id'), null, 'los *_id son identificadores')
  })
})

describe('validarDatos', () => {
  const cliente = { nombre: 'Ana Torres', identificacion: '0912345675', email: 'ana@correo.com', telefono_movil: '0991234567' }

  test('un cliente válido pasa', () => {
    assert.ok(validarDatos('clientes', cliente).ok)
  })

  test('marca cada campo mal cargado, con su nombre legible', () => {
    const r = validarDatos('clientes', { ...cliente, email: 'ana@', telefono_movil: '12', latitud: 95 })
    assert.deepEqual(errores(r).sort(), ['email', 'latitud', 'telefono_movil'])
    assert.match(r.errores.find((e) => e.campo === 'email').mensaje, /^Correo no es un correo válido/)
  })

  test('la cédula con dígito verificador malo: se rechaza al crear, no al editar', () => {
    assert.deepEqual(errores(validarDatos('clientes', { ...cliente, identificacion: '0912345678' }, 'crear')), ['identificacion'])
    assert.ok(validarDatos('clientes', { ...cliente, identificacion: '0912345678' }, 'editar').ok,
      'una ficha vieja con la cédula mal cargada se puede seguir editando')
  })

  test('la cédula copiada de la ficha (ticket, instalación) no frena por el dígito', () => {
    assert.ok(validarDatos('tickets', { identificacion: '0912345678', nombre: 'Ana' }, 'crear').ok,
      'un abonado viejo con la cédula mal cargada igual puede tener su ticket')
    assert.deepEqual(errores(validarDatos('prospectos', { identificacion: '0912345678' }, 'crear')), ['identificacion'],
      'al registrar a una persona nueva sí se exige')
  })

  test('tipo y largo máximo salen de la base', () => {
    const largo = 'x'.repeat(TABLAS.subredes.nombre.max + 1)
    assert.deepEqual(errores(validarDatos('subredes', { nombre: largo })), ['nombre'])
    assert.deepEqual(errores(validarDatos('subredes', { vlan: 'cien' })), ['vlan'])
    assert.deepEqual(errores(validarDatos('subredes', { vlan: 5000 })), ['vlan'])
    assert.deepEqual(errores(validarDatos('subredes', { gateway: 'QA' })), ['gateway'])
  })

  test('valores permitidos (CHECK ... IN) salen de la base', () => {
    assert.ok(validarDatos('subredes', { tipo: 'estatica' }).ok)
    const r = validarDatos('subredes', { tipo: 'inventado' })
    assert.deepEqual(errores(r), ['tipo'])
    assert.match(r.errores[0].mensaje, /estatica/)
  })

  test('decimales: dígitos y cantidad de decimales de la columna', () => {
    assert.ok(validarDatos('planes_velocidad', { precio: '25.50' }).ok, 'número como texto, como lo manda un input')
    assert.deepEqual(errores(validarDatos('planes_velocidad', { precio: -5 })), ['precio'])
    assert.deepEqual(errores(validarDatos('planes_velocidad', { precio: 'veinte' })), ['precio'])
  })

  test('un vacío en un número o una fecha se manda como null', () => {
    const r = validarDatos('clientes', { ...cliente, latitud: '', fecha_instalacion: '' })
    assert.ok(r.ok)
    assert.equal(r.datos.latitud, null)
    assert.equal(r.datos.fecha_instalacion, null)
  })

  test('null en una columna que no lo admite', () => {
    const r = validarDatos('subredes', { cidr: null })
    assert.deepEqual(errores(r), ['cidr'])
    assert.match(r.errores[0].mensaje, /no puede quedar vacío/)
  })

  test('arreglos: valida cada fila', () => {
    assert.deepEqual(errores(validarDatos('subredes', [{ vlan: 10 }, { vlan: 0 }])), ['vlan'])
  })

  test('tablas o columnas desconocidas no se tocan (las rechaza el backend)', () => {
    assert.ok(validarDatos('v_una_vista', { lo_que_sea: 1 }).ok)
    assert.ok(validarDatos('clientes', { columna_inventada: 'x' }).ok)
  })

  test('el error tiene la forma de los de la API', () => {
    const r = validarDatos('clientes', { ...cliente, email: 'mal' })
    const e = errorDeValidacion(r.errores)
    assert.equal(e.code, 'VALIDACION')
    assert.match(e.message, /Correo/)
    assert.ok(e.hint)
    assert.ok(e.campos.email)
  })
})

describe('validarArgumentos (RPC)', () => {
  const cobro = { p_client_id: '4b1d0c2e-0000-4000-8000-000000000001', p_monto: '25.50', p_forma_pago: 'efectivo', p_fecha_pago: '2026-10-17' }

  test('las firmas de las funciones salen del esquema de Django', () => {
    assert.ok(Object.keys(FUNCIONES).length > 100)
    assert.equal(FUNCIONES.aplicar_cobro.p_monto.t, 'decimal')
    assert.equal(FUNCIONES.aplicar_cobro.p_fecha_pago.t, 'fecha')
  })

  test('un cobro válido pasa', () => {
    assert.ok(validarArgumentos('aplicar_cobro', cobro).ok)
  })

  test('monto negativo, texto en un número y fecha mal escrita', () => {
    const r = validarArgumentos('aplicar_cobro', { ...cobro, p_monto: -10, p_comision: 'mucho', p_fecha_pago: '17/10' })
    assert.deepEqual(errores(r).sort(), ['p_comision', 'p_fecha_pago', 'p_monto'])
    assert.match(r.errores.find((e) => e.campo === 'p_monto').mensaje, /^Monto no puede ser negativo/)
  })

  test('reglas por nombre sin el p_: coordenadas e IP', () => {
    assert.deepEqual(errores(validarArgumentos('cobertura_cercana', { p_lat: 200, p_lng: -79.9 })), ['p_lat'])
    assert.deepEqual(errores(validarArgumentos('quien_tiene_la_ip', { p_ip: 'no-es-ip' })), ['p_ip'])
  })

  test('un vacío en un número viaja como null; funciones desconocidas pasan', () => {
    const r = validarArgumentos('aplicar_cobro', { ...cobro, p_comision: '' })
    assert.equal(r.datos.p_comision, null)
    assert.ok(validarArgumentos('una_funcion_nueva', { x: 1 }).ok)
  })
})

describe('djangoClient valida antes de mandar',() => {
  test('con datos inválidos no sale ningún pedido', async () => {
    const pedidos = []
    globalThis.fetch = async (url, op) => {
      pedidos.push({ url, op })
      return new Response('{}', { status: 201, headers: { 'Content-Type': 'application/json' } })
    }
    const { django } = await import('../src/lib/djangoClient.js')

    const malo = await django.from('subredes').insert({ nombre: 'Bloque', cidr: '10.0.0.0/24', gateway: 'QA gateway' })
    assert.equal(malo.error?.code, 'VALIDACION')
    assert.equal(pedidos.length, 0, 'no tiene que haber llamado a la API')

    const bueno = await django.from('subredes').insert({ nombre: 'Bloque', cidr: '10.0.0.0/24', gateway: '10.0.0.1', vlan: '' })
    assert.equal(bueno.error, null)
    assert.equal(pedidos.length, 1)
    assert.deepEqual(JSON.parse(pedidos[0].op.body), { nombre: 'Bloque', cidr: '10.0.0.0/24', gateway: '10.0.0.1', vlan: null },
      'el vacío del número viaja como null')

    const editar = await django.from('subredes').update({ vlan: 99999 }).eq('id', '00000000-0000-0000-0000-000000000001')
    assert.equal(editar.error?.code, 'VALIDACION')
    assert.equal(pedidos.length, 1)

    const cobro = await django.rpc('aplicar_cobro', { p_client_id: 'x', p_monto: -5 })
    assert.equal(cobro.error?.code, 'VALIDACION')
    assert.equal(pedidos.length, 1, 'la RPC tampoco salió')
  })
})

describe('reglas nuevas por nombre de columna', () => {
  test('cada columna con su regla', () => {
    const casos = {
      cantidad: 'cantidad', litros: 'cantidad', km_inicio: 'cantidad', meses_contrato: 'cantidad',
      nms_cada_minutos: 'cantidad', subida_kbps: 'cantidad', latencia_ms: 'cantidad', cortes_limite: null,
      costo_unitario: 'noNegativo', descuento: 'noNegativo', valor_instalacion: 'noNegativo',
      centro_lat: 'latitud', llegada_lng: 'longitud', latitud_anterior: 'latitud', desde_pct: 'porcentaje',
      avisos_pago_hora: 'hora', web: 'url', smtp_host: 'host', sn: 'serie', equipo_sn: 'serie',
      ssid: 'ssid', clave_wifi: 'claveWifi', usuario_ppp: 'usuarioPpp', smtp_port: 'puerto',
    }
    for (const [col, regla] of Object.entries(casos)) assert.equal(reglaDe(col), regla, col)
    assert.equal(reglaDe('rx_dbm'), null, 'la potencia óptica es negativa: sin mínimo')
    assert.equal(reglaDe('optica_limite'), null, 'umbral en dBm: -27')
    assert.equal(reglaDe('dias_aviso_1'), null, '-3 = tres días antes de vencer')
    assert.equal(reglaDe('aviso_dias_2'), null)
    assert.equal(reglaDe('temperatura_c'), null)
    assert.equal(reglaDe('foto_url'), null, 'una ruta del storage, no una dirección web')
  })

  test('formatos', () => {
    const ok = (r, v) => assert.ok(ESQUEMAS[r].safeParse(v).success, `${r}: ${v}`)
    const mal = (r, v) => assert.ok(!ESQUEMAS[r].safeParse(v).success, `${r}: ${v}`)
    ok('hora', '09:00'); ok('hora', '23:59:00'); mal('hora', '25:00'); mal('hora', '9')
    ok('url', 'https://empresa.com/x'); ok('url', 'www.isp.com'); mal('url', 'empresa con espacios'); mal('url', 'ftp://x.com')
    ok('host', 'smtp.gmail.com'); ok('host', '192.0.2.10'); mal('host', 'smtp gmail')
    ok('serie', 'HWTC1234ABCD'); ok('serie', '48:57:54:43'); mal('serie', 'HWTC 1234')
    ok('placa', 'PBA-1234'); ok('placa', 'GBC123'); ok('placa', 'AB123C'); mal('placa', '12-ABCD')
    ok('ssid', 'Casa Ana'); mal('ssid', 'x'.repeat(33))
    ok('claveWifi', 'clave-segura'); mal('claveWifi', 'corta'); mal('claveWifi', 'contraseñaconñ')
    ok('usuarioPpp', 'ana.torres@isp'); mal('usuarioPpp', 'ana torres')
    mal('cantidad', -1)
  })

  test('la etiqueta "RUC o cédula" acepta una cédula', async () => {
    const { reglaPorEtiqueta } = await import('../src/lib/validacion/enVivo.js')
    assert.equal(reglaPorEtiqueta('RUC o cédula'), 'identificacion')
  })

  test('una regla de números no frena una columna de texto que se llama parecido', () => {
    assert.ok(validarPorNombre({ limite: 'sin límite' }).ok)
    assert.deepEqual(errores(validarPorNombre({ limite: -3 })), ['limite'])
  })

  test('lo anidado también se valida', () => {
    assert.deepEqual(errores(validarPorNombre({ onu: { sn: 'HWTC 12' } })), ['sn'])
    assert.deepEqual(errores(validarPorNombre({ puertos: [{ vlan: 100 }, { vlan: 5000 }] })), ['vlan'])
    assert.ok(validarPorNombre({ onu: { sn: 'HWTC1234ABCD', vlan: 100 } }).ok)
  })

  test('la placa del vehículo se valida al guardar', () => {
    assert.deepEqual(errores(validarDatos('vehiculos', { placa: 'XX' })), ['placa'])
    assert.ok(validarDatos('puertos_pon', { placa: '0/1' }).ok, 'en la OLT, "placa" es la tarjeta')
  })
})

describe('apiNetwork valida antes de mandar al servicio de red', () => {
  // apiNetwork.js importa './djangoClient' sin extensión (lo resuelve Next, no
  // Node), así que acá se revisa el código: los dos caminos que mandan un
  // cuerpo al middleware validan antes del fetch.
  test('request() y archivo() validan el cuerpo antes de enviarlo', async () => {
    const { readFile } = await import('node:fs/promises')
    const fuente = await readFile(new URL('../src/lib/apiNetwork.js', import.meta.url), 'utf8')
    for (const funcion of ['async function request(metodo, ruta, body) {', 'async function archivo(ruta, body) {']) {
      const desde = fuente.indexOf(funcion)
      assert.ok(desde >= 0, funcion)
      const cuerpo = fuente.slice(desde, fuente.indexOf('fetch(', desde))
      assert.match(cuerpo, /if \(body\) validarCuerpo\(body\)/, `${funcion} valida antes del fetch`)
    }
  })

  test('una VLAN fuera de rango en una lista de puertos se detecta', () => {
    assert.deepEqual(errores(validarPorNombre({ vlans: [{ vlan: 5000 }] })), ['vlan'])
  })
})
