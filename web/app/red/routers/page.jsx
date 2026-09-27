'use client'

import MikrotikPage from '@/crm-pages/MikrotikPage'
import { ProtectedShell } from '@/NextPageShell'

export default function Page() {
  return <ProtectedShell><MikrotikPage /></ProtectedShell>
}
