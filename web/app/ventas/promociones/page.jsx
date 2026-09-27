'use client'

import PromocionesPage from '@/crm-pages/ventas/PromocionesPage'
import { ProtectedShell } from '@/NextPageShell'

export default function Page() {
  return <ProtectedShell><PromocionesPage /></ProtectedShell>
}
