'use client'

import JornadaCampoPage from '@/crm-pages/tecnico/JornadaPage'
import { ProtectedShell } from '@/NextPageShell'

export default function Page() {
  return <ProtectedShell><JornadaCampoPage /></ProtectedShell>
}
