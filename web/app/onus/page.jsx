'use client'

import OnusPage from '@/crm-pages/olt/OnusPage'
import { ProtectedShell } from '@/NextPageShell'

export default function Page() {
  return <ProtectedShell><OnusPage /></ProtectedShell>
}
