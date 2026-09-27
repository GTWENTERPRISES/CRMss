'use client'

import ContratosPage from '@/crm-pages/ContratosPage'
import { ProtectedShell } from '@/NextPageShell'

export default function Page() {
  return <ProtectedShell><ContratosPage /></ProtectedShell>
}
