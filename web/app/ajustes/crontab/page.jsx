'use client'

import TareasPage from '@/crm-pages/TareasPage'
import { ProtectedShell } from '@/NextPageShell'

export default function Page() {
  return <ProtectedShell><TareasPage /></ProtectedShell>
}
