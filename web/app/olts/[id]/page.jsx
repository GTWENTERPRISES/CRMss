'use client'

import OltDetallePage from '@/crm-pages/OltDetallePage'
import { ProtectedShell } from '@/NextPageShell'

export default function Page() {
  return <ProtectedShell><OltDetallePage /></ProtectedShell>
}
