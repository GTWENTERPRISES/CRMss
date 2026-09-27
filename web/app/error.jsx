'use client'

export default function Error({ reset }) {
  return (
    <main className="grid min-h-dvh place-items-center bg-slate-950 px-6 text-center text-slate-100">
      <section>
        <h1 className="text-2xl font-bold">No se pudo cargar la pantalla</h1>
        <p className="mt-2 text-sm text-slate-400">Intenta nuevamente o revisa la conexión con el servidor.</p>
        <button
          type="button"
          onClick={() => reset()}
          className="mt-5 rounded-xl bg-sky-700 px-4 py-2 text-sm font-semibold text-white hover:bg-sky-600"
        >
          Reintentar
        </button>
      </section>
    </main>
  )
}

