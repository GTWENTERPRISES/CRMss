'use client'

import ClientesPage from '@/crm-pages/ClientesPage'
import { ProtectedShell } from '@/NextPageShell'

export default function Page() {
  return <ProtectedShell><ClientesPage /></ProtectedShell>
}
