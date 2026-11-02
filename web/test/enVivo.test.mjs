// Validación en vivo de los campos (src/lib/validacion/enVivo.js).
import assert from 'node:assert/strict'
import { describe, test } from 'node:test'

import { errorParaCampo, reglaPorEtiqueta, revisarCampo } from '../src/lib/validacion/enVivo.js'
import { validarPorNombre } from '../src/lib/validacion/index.js'

// Un control como el del navegador, con lo justo: valor, tipo y validity.
const control = (value, { type = 'text', tagName = 'INPUT', validity = { valid: true }, ...resto } = {}) => ({
  value, type, tagName, validity, disabled: false, readOnly: false, ...resto,
})

describe('revisarCampo', () => {
  test('por el nombre de la columna', () => {
    assert.match(revisarCampo(control('ana@'), { campo: 'email' }), /correo válido/)
    assert.equal(revisarCampo(control('ana@correo.com'), { campo: 'email' }), null)
    assert.match(revisarCampo(control('123'), { campo: 'telefono' }), /entre 7 y 15 dígitos/)
    assert.match(revisarCampo(control('10.0.0.300'), { campo: 'gateway' }), /IP válida/)
  })

  test('sin columna: por la etiqueta', () => {
    assert.match(revisarCampo(control('x@'), { etiqueta: 'Correo electrónico' }), /correo/)
    assert.equal(revisarCampo(control('cualquier cosa'), { etiqueta: 'Observaciones' }), null)
  })

  test('vacío no es error (lo obligatorio lo dice el navegador)', () => {
    assert.equal(revisarCampo(control(''), { campo: 'email' }), null)
    const falta = control('', { validity: { valid: false, valueMissing: true } })
    assert.equal(revisarCampo(falta, { campo: 'email' }), 'Este campo es obligatorio.')
  })

  test('lo que ya sabe el navegador: mínimo, máximo, número', () => {
    const bajo = control('-1', { type: 'number', min: '0', validity: { valid: false, rangeUnderflow: true } })
    assert.equal(revisarCampo(bajo, {}), 'El mínimo es 0.')
  })

  test('la cédula: el dígito verificador solo si el usuario la escribió', () => {
    assert.equal(revisarCampo(control('0912345678'), { campo: 'identificacion' }), null, 'ficha vieja, solo pasó por el campo')
    assert.match(revisarCampo(control('0912345678'), { campo: 'identificacion', escrito: true }), /dígito verificador/)
    assert.equal(revisarCampo(control('0912345675'), { campo: 'identificacion', escrito: true }), null)
  })

  test('regla={false} la apaga; select y checkbox no se revisan contra reglas', () => {
    assert.equal(revisarCampo(control('ana@'), { campo: 'email', regla: false }), null)
    assert.equal(revisarCampo(control('x', { tagName: 'SELECT' }), { campo: 'email' }), null)
    assert.equal(revisarCampo(control('on', { type: 'checkbox' }), { campo: 'email' }), null)
  })
})

describe('etiquetas y errores del guardado', () => {
  test('reglaPorEtiqueta solo en los casos claros', () => {
    assert.equal(reglaPorEtiqueta('Cédula o RUC'), 'identificacion')
    assert.equal(reglaPorEtiqueta('Teléfono'), 'telefono')
    assert.equal(reglaPorEtiqueta('Plantilla de WhatsApp'), null)
    assert.equal(reglaPorEtiqueta('WhatsApp pausa', 'number'), null)
    assert.equal(reglaPorEtiqueta('Asunto del correo'), null)
  })

  test('el error de una columna llega a su campo, con o sin p_', () => {
    const campos = { email: 'Correo no es un correo válido', p_monto: 'Monto no puede ser negativo' }
    assert.equal(errorParaCampo(campos, { campo: 'email' }), campos.email)
    assert.equal(errorParaCampo(campos, { campo: 'monto' }), campos.p_monto)
    assert.equal(errorParaCampo(campos, { etiqueta: 'Correo' }), campos.email, 'sin campo: por la etiqueta')
    assert.equal(errorParaCampo(campos, { campo: 'nombre', etiqueta: 'Nombre' }), null)
  })

  test('validarPorNombre (portal, red)', () => {
    assert.ok(validarPorNombre({ identificacion: '0912345675', codigo: '123456' }).ok)
    assert.equal(validarPorNombre({ email: 'mal' }).errores[0].campo, 'email')
  })
})
