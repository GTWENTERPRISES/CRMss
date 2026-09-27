'use client'

import ComprasPage from '@/crm-pages/inventario/ComprasPage'
import { ProtectedShell } from '@/NextPageShell'

export default function Page() {
  return <ProtectedShell><ComprasPage /></ProtectedShell>
}
