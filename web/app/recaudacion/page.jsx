'use client'

import RecaudacionPage from '@/crm-pages/recaudacion/InicioPage'
import { ProtectedShell } from '@/NextPageShell'

export default function Page() {
  return <ProtectedShell><RecaudacionPage /></ProtectedShell>
}
