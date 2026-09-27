'use client'

import CotizadorPage from '@/crm-pages/ventas/CotizadorPage'
import { ProtectedShell } from '@/NextPageShell'

export default function Page() {
  return <ProtectedShell><CotizadorPage /></ProtectedShell>
}
