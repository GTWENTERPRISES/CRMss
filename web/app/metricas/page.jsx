'use client'

import MetricasPage from '@/crm-pages/MetricasPage'
import { ProtectedShell } from '@/NextPageShell'

export default function Page() {
  return <ProtectedShell><MetricasPage /></ProtectedShell>
}
