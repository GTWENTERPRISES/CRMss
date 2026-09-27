'use client'

import GeneralPage from '@/crm-pages/GeneralPage'
import { ProtectedShell } from '@/NextPageShell'

export default function Page() {
  return <ProtectedShell><GeneralPage /></ProtectedShell>
}
