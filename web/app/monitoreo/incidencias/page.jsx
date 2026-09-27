'use client'

import IncidenciasPage from '@/crm-pages/red/IncidenciasPage'
import { ProtectedShell } from '@/NextPageShell'

export default function Page() {
  return <ProtectedShell><IncidenciasPage /></ProtectedShell>
}
