'use client'

import LicenciaPage from '@/crm-pages/LicenciaPage'
import { ProtectedShell } from '@/NextPageShell'

export default function Page() {
  return <ProtectedShell><LicenciaPage /></ProtectedShell>
}
