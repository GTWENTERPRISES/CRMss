'use client'

import ConciliacionPage from '@/crm-pages/ConciliacionPage'
import { ProtectedShell } from '@/NextPageShell'

export default function Page() {
  return <ProtectedShell><ConciliacionPage /></ProtectedShell>
}
