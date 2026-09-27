'use client'

import ComisionesPage from '@/crm-pages/ajustes/ComisionesPage'
import { ProtectedShell } from '@/NextPageShell'

export default function Page() {
  return <ProtectedShell><ComisionesPage /></ProtectedShell>
}
