'use client'

import ComisionesEquipoPage from '@/crm-pages/ventas/ComisionesEquipoPage'
import { ProtectedShell } from '@/NextPageShell'

export default function Page() {
  return <ProtectedShell><ComisionesEquipoPage /></ProtectedShell>
}
