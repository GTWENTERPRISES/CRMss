'use client'

import PagosPage from '@/crm-pages/PagosPage'
import { ProtectedShell } from '@/NextPageShell'

export default function Page() {
  return <ProtectedShell><PagosPage /></ProtectedShell>
}
