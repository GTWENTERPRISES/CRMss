// Avisos y "Deshacer" (src/lib/notificaciones.js), con el reloj simulado.
import assert from 'node:assert/strict'
import { describe, mock, test } from 'node:test'

import { avisar, conDeshacer, suscribirAvisos } from '../src/lib/notificaciones.js'

const ultimo = () => {
  let lista = []
  const fin = suscribirAvisos((l) => (lista = l))
  fin()
  return lista
}

describe('conDeshacer', () => {
  test('si nadie deshace, la acción corre a los segundos', async () => {
    mock.timers.enable({ apis: ['setTimeout'] })
    let corrio = 0
    const promesa = conDeshacer('Cobro anulado', async () => ++corrio, { segundos: 6 })
    assert.equal(corrio, 0, 'no sale nada mientras corre la cuenta')
    mock.timers.tick(5999)
    assert.equal(corrio, 0)
    mock.timers.tick(1)
    assert.equal(await promesa, 1)
    assert.equal(corrio, 1)
    mock.timers.reset()
  })

  test('"Deshacer" la cancela: la acción no corre nunca', async () => {
    mock.timers.enable({ apis: ['setTimeout'] })
    let corrio = 0
    const promesa = conDeshacer('Baja de Ana', async () => ++corrio, { segundos: 6 })
    const aviso = ultimo().find((a) => a.mensaje === 'Baja de Ana')
    assert.equal(aviso.accion.label, 'Deshacer')
    assert.equal(aviso.cuenta, 6)
    aviso.accion.onClick()
    mock.timers.tick(10000)
    assert.deepEqual(await promesa, { deshecho: true })
    assert.equal(corrio, 0)
    mock.timers.reset()
  })

  test('si la acción falla, avisa el error y rechaza', async () => {
    mock.timers.enable({ apis: ['setTimeout'] })
    const promesa = conDeshacer('Servicio cortado', async () => {
      throw new Error('El router no respondió')
    }, { segundos: 1 })
    mock.timers.tick(1000)
    await assert.rejects(promesa, /router no respondió/)
    assert.ok(ultimo().some((a) => a.tipo === 'error' && /router no respondió/.test(a.mensaje)))
    mock.timers.reset()
  })
})

test('avisar se cierra solo y guarda como mucho cuatro', () => {
  mock.timers.enable({ apis: ['setTimeout'] })
  for (let i = 0; i < 6; i++) avisar(`aviso ${i}`, { duracion: 1000 })
  assert.ok(ultimo().length <= 4)
  mock.timers.tick(1000)
  assert.equal(ultimo().filter((a) => a.mensaje.startsWith('aviso')).length, 0)
  mock.timers.reset()
})
