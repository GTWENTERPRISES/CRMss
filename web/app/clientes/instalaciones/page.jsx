'use client'

import InstalacionesPage from '@/crm-pages/InstalacionesPage'
import { ProtectedShell } from '@/NextPageShell'

export default function Page() {
  return <ProtectedShell><InstalacionesPage /></ProtectedShell>
}
