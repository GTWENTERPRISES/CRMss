'use client'

import DashboardComercialPage from '@/crm-pages/ventas/DashboardComercialPage'
import { ProtectedShell } from '@/NextPageShell'

export default function Page() {
  return <ProtectedShell><DashboardComercialPage /></ProtectedShell>
}
