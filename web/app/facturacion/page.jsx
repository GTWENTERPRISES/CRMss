'use client'

import FacturacionPage from '@/crm-pages/FacturacionPage'
import { ProtectedShell } from '@/NextPageShell'

export default function Page() {
  return <ProtectedShell><FacturacionPage /></ProtectedShell>
}
