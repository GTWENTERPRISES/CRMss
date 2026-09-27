'use client'

import MapaClientesPage from '@/crm-pages/MapaClientesPage'
import { ProtectedShell } from '@/NextPageShell'

export default function Page() {
  return <ProtectedShell><MapaClientesPage /></ProtectedShell>
}
