'use client'

import BloqueosPage from '@/crm-pages/BloqueosPage'
import { ProtectedShell } from '@/NextPageShell'

export default function Page() {
  return <ProtectedShell><BloqueosPage /></ProtectedShell>
}
