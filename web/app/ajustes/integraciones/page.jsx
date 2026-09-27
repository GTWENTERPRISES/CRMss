'use client'

import IntegracionesPage from '@/crm-pages/ajustes/IntegracionesPage'
import { ProtectedShell } from '@/NextPageShell'

export default function Page() {
  return <ProtectedShell><IntegracionesPage /></ProtectedShell>
}
