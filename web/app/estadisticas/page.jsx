'use client'

import EstadisticasPage from '@/crm-pages/EstadisticasPage'
import { ProtectedShell } from '@/NextPageShell'

export default function Page() {
  return <ProtectedShell><EstadisticasPage /></ProtectedShell>
}
