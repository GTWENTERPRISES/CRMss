'use client'

import MiComisionPage from '@/crm-pages/ventas/MiComisionPage'
import { ProtectedShell } from '@/NextPageShell'

export default function Page() {
  return <ProtectedShell><MiComisionPage /></ProtectedShell>
}
