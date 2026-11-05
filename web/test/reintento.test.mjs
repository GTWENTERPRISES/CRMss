// Reintentos ante cortes cortos de red (src/lib/reintento.js).
import assert from 'node:assert/strict'
import { afterEach, beforeEach, describe, mock, test } from 'node:test'

import { fetchConReintento } from '../src/lib/reintento.js'

const respuesta = (status) => ({ status, ok: status < 400 })
const original = globalThis.fetch

describe('fetchConReintento', () => {
  beforeEach(() => mock.timers.enable({ apis: ['setTimeout'] }))
  afterEach(() => {
    mock.timers.reset()
    globalThis.fetch = original
  })

  // Corre la promesa adelantando el reloj falso hasta que termine.
  async function correr(promesa) {
    let fin = false
    promesa.finally(() => { fin = true }).catch(() => {})
    for (let i = 0; i < 20 && !fin; i++) {
      await new Promise((r) => setImmediate(r))
      mock.timers.tick(5000)
    }
    return promesa
  }

  test('una lectura que no llega se reintenta y sale bien', async () => {
    let llamadas = 0
    globalThis.fetch = async () => {
      llamadas += 1
      if (llamadas < 3) throw new TypeError('Failed to fetch')
      return respuesta(200)
    }
    const r = await correr(fetchConReintento('/x'))
    assert.equal(r.status, 200)
    assert.equal(llamadas, 3)
  })

  test('un 503 de Traefik (redespliegue) también se reintenta', async () => {
    const estados = [503, 502, 200]
    globalThis.fetch = async () => respuesta(estados.shift())
    const r = await correr(fetchConReintento('/x', { method: 'GET' }))
    assert.equal(r.status, 200)
  })

  test('un POST no se repite: podría duplicar un pago', async () => {
    let llamadas = 0
    globalThis.fetch = async () => {
      llamadas += 1
      throw new TypeError('Failed to fetch')
    }
    await assert.rejects(correr(fetchConReintento('/pagos', { method: 'POST' })), TypeError)
    assert.equal(llamadas, 1)
  })

  test('un error de la aplicación (400, 404, 500) no se reintenta', async () => {
    let llamadas = 0
    globalThis.fetch = async () => {
      llamadas += 1
      return respuesta(500)
    }
    const r = await correr(fetchConReintento('/x'))
    assert.equal(r.status, 500)
    assert.equal(llamadas, 1)
  })

  test('si la red no vuelve, se rinde tras el último intento', async () => {
    let llamadas = 0
    globalThis.fetch = async () => {
      llamadas += 1
      throw new TypeError('Failed to fetch')
    }
    await assert.rejects(correr(fetchConReintento('/x')), TypeError)
    assert.equal(llamadas, 4)
  })

  test('si quien llamó cancela, no se insiste', async () => {
    let llamadas = 0
    const control = new AbortController()
    control.abort()
    globalThis.fetch = async () => {
      llamadas += 1
      throw new DOMException('aborted', 'AbortError')
    }
    await assert.rejects(correr(fetchConReintento('/x', { signal: control.signal })))
    assert.equal(llamadas, 1)
  })
})
