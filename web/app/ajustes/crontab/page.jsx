'use client'

import TareasPage from '@/crm-pages/TareasPage'
import { ProtectedShell } from '@/NextPageShell'

export default function Page() {
  return (
    <ProtectedShell>
      {/* Formulario de ajustes: a lo ancho de la pantalla los campos quedaban de 500px. */}
      <div className="max-w-4xl"><TareasPage /></div>
    </ProtectedShell>
  )
}
