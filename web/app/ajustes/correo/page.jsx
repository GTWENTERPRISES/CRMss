'use client'

import ServidorCorreoPage from '@/crm-pages/ServidorCorreoPage'
import { ProtectedShell } from '@/NextPageShell'

export default function Page() {
  return <ProtectedShell><ServidorCorreoPage /></ProtectedShell>
}
