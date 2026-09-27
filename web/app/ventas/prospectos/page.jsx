'use client'

import ProspectosPage from '@/crm-pages/ventas/ProspectosPage'
import { ProtectedShell } from '@/NextPageShell'

export default function Page() {
  return <ProtectedShell><ProspectosPage /></ProtectedShell>
}
