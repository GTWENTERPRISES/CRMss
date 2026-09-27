'use client'

import AuditoriaPage from '@/crm-pages/red/AuditoriaPage'
import { ProtectedShell } from '@/NextPageShell'

export default function Page() {
  return <ProtectedShell><AuditoriaPage /></ProtectedShell>
}
