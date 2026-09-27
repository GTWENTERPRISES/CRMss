'use client'

import PerfilesPage from '@/crm-pages/PerfilesPage'
import { ProtectedShell } from '@/NextPageShell'

export default function Page() {
  return <ProtectedShell><PerfilesPage /></ProtectedShell>
}
