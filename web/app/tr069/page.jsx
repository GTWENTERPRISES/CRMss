'use client'

import Tr069Page from '@/crm-pages/Tr069Page'
import { ProtectedShell } from '@/NextPageShell'

export default function Page() {
  return <ProtectedShell><Tr069Page /></ProtectedShell>
}
