'use client'

import GeneralPage from '@/crm-pages/GeneralPage'
import { ProtectedShell } from '@/NextPageShell'

export default function Page() {
  return (
    <ProtectedShell>
      {/* Formulario de ajustes: a lo ancho de la pantalla los campos quedaban de 500px. */}
      <div className="max-w-4xl"><GeneralPage /></div>
    </ProtectedShell>
  )
}
