'use client'

import CobranzaPage from '@/crm-pages/ventas/CobranzaPage'
import { ProtectedShell } from '@/NextPageShell'

export default function Page() {
  return <ProtectedShell><CobranzaPage /></ProtectedShell>
}
