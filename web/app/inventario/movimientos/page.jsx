'use client'

import MovimientosPage from '@/crm-pages/inventario/MovimientosPage'
import { ProtectedShell } from '@/NextPageShell'

export default function Page() {
  return <ProtectedShell><MovimientosPage /></ProtectedShell>
}
