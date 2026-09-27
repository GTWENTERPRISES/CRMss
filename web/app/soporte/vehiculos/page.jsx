'use client'

import VehiculosPage from '@/crm-pages/VehiculosPage'
import { ProtectedShell } from '@/NextPageShell'

export default function Page() {
  return <ProtectedShell><VehiculosPage /></ProtectedShell>
}
