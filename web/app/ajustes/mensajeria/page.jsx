'use client'

import MensajeriaPage from '@/crm-pages/MensajeriaPage'
import { ProtectedShell } from '@/NextPageShell'

export default function Page() {
  return <ProtectedShell><MensajeriaPage /></ProtectedShell>
}
