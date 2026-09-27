'use client'

import ArcotelPage from '@/crm-pages/ArcotelPage'
import { ProtectedShell } from '@/NextPageShell'

export default function Page() {
  return <ProtectedShell><ArcotelPage /></ProtectedShell>
}
