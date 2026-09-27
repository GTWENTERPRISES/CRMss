'use client'

import PortalClientePage from '@/crm-pages/PortalClientePage'
import { ProtectedShell } from '@/NextPageShell'

export default function Page() {
  return <ProtectedShell><PortalClientePage /></ProtectedShell>
}
