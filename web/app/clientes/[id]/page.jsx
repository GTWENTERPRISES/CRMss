'use client'

import ClienteDetallePage from '@/crm-pages/ClienteDetallePage'
import { ProtectedShell } from '@/NextPageShell'

export default function Page() {
  return <ProtectedShell><ClienteDetallePage /></ProtectedShell>
}
