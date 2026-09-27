'use client'

import SoportePage from '@/crm-pages/SoportePage'
import { ProtectedShell } from '@/NextPageShell'

export default function Page() {
  return <ProtectedShell><SoportePage /></ProtectedShell>
}
