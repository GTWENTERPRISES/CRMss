'use client'

import BackofficePage from '@/crm-pages/instalaciones/BackofficePage'
import { ProtectedShell } from '@/NextPageShell'

export default function Page() {
  return <ProtectedShell><BackofficePage /></ProtectedShell>
}
