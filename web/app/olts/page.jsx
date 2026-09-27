'use client'

import OLTPage from '@/crm-pages/OLTPage'
import { ProtectedShell } from '@/NextPageShell'

export default function Page() {
  return <ProtectedShell><OLTPage /></ProtectedShell>
}
