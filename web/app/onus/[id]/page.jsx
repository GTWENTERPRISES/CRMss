'use client'

import OnuDetallePage from '@/crm-pages/olt/OnuDetallePage'
import { ProtectedShell } from '@/NextPageShell'

export default function Page() {
  return <ProtectedShell><OnuDetallePage /></ProtectedShell>
}
