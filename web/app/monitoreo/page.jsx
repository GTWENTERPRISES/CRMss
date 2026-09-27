'use client'

import MonitoreoPage from '@/crm-pages/nms/MonitoreoPage'
import { ProtectedShell } from '@/NextPageShell'

export default function Page() {
  return <ProtectedShell><MonitoreoPage /></ProtectedShell>
}
