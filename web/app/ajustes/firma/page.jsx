'use client'

import FirmaPage from '@/crm-pages/ajustes/FirmaPage'
import { ProtectedShell } from '@/NextPageShell'

export default function Page() {
  return (
    <ProtectedShell>
      {/* Formulario de ajustes: a lo ancho de la pantalla los campos quedaban de 500px. */}
      <div className="max-w-4xl"><FirmaPage /></div>
    </ProtectedShell>
  )
}
