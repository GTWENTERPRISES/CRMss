'use client'

import ServidorCorreoPage from '@/crm-pages/ServidorCorreoPage'
import { ProtectedShell } from '@/NextPageShell'

export default function Page() {
  return (
    <ProtectedShell>
      {/* Formulario de ajustes: a lo ancho de la pantalla los campos quedaban de 500px. */}
      <div className="max-w-4xl"><ServidorCorreoPage /></div>
    </ProtectedShell>
  )
}
