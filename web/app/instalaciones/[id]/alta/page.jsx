'use client'

import AltaCampoPage from '@/crm-pages/AltaCampoPage'
import { ProtectedShell } from '@/NextPageShell'

export default function Page() {
  return <ProtectedShell><AltaCampoPage /></ProtectedShell>
}
