'use client'

import TicketPage from '@/crm-pages/TicketPage'
import { ProtectedShell } from '@/NextPageShell'

export default function Page() {
  return <ProtectedShell><TicketPage /></ProtectedShell>
}
