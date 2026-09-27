'use client'

import OrdenesCampoPage from '@/crm-pages/tecnico/OrdenesPage'
import { ProtectedShell } from '@/NextPageShell'

export default function Page() {
  return <ProtectedShell><OrdenesCampoPage /></ProtectedShell>
}
