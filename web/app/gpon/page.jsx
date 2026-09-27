'use client'

import DashboardGponPage from '@/crm-pages/olt/DashboardGponPage'
import { ProtectedShell } from '@/NextPageShell'

export default function Page() {
  return <ProtectedShell><DashboardGponPage /></ProtectedShell>
}
