'use client'

import TransaccionesPage from '@/crm-pages/TransaccionesPage'
import { ProtectedShell } from '@/NextPageShell'

export default function Page() {
  return <ProtectedShell><TransaccionesPage /></ProtectedShell>
}
