'use client'

import MiAlmacenPage from '@/crm-pages/inventario/MiAlmacenPage'
import { ProtectedShell } from '@/NextPageShell'

export default function Page() {
  return <ProtectedShell><MiAlmacenPage /></ProtectedShell>
}
