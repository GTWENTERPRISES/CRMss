'use client'

import ONUsPage from '@/crm-pages/ONUsPage'
import { ProtectedShell } from '@/NextPageShell'

export default function Page() {
  return <ProtectedShell><ONUsPage /></ProtectedShell>
}
