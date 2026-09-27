'use client'

import ExpedientePage from '@/crm-pages/ventas/ExpedientePage'
import { ProtectedShell } from '@/NextPageShell'

export default function Page() {
  return <ProtectedShell><ExpedientePage /></ProtectedShell>
}
