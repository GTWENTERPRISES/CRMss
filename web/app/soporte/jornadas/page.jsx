'use client'

import JornadasPage from '@/crm-pages/soporte/JornadasPage'
import { ProtectedShell } from '@/NextPageShell'

export default function Page() {
  return <ProtectedShell><JornadasPage /></ProtectedShell>
}
