'use client'

import ReportesPage from '@/crm-pages/ventas/ReportesPage'
import { ProtectedShell } from '@/NextPageShell'

export default function Page() {
  return <ProtectedShell><ReportesPage /></ProtectedShell>
}
