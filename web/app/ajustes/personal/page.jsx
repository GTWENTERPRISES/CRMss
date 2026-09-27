'use client'

import PersonalPage from '@/crm-pages/PersonalPage'
import { ProtectedShell } from '@/NextPageShell'

export default function Page() {
  return <ProtectedShell><PersonalPage /></ProtectedShell>
}
