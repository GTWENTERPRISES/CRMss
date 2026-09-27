'use client'

import TecnicosPage from '@/crm-pages/TecnicosPage'
import { ProtectedShell } from '@/NextPageShell'

export default function Page() {
  return <ProtectedShell><TecnicosPage /></ProtectedShell>
}
