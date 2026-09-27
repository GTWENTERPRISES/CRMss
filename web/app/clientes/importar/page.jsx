'use client'

import ImportarAbonadosPage from '@/crm-pages/clientes/ImportarAbonadosPage'
import { ProtectedShell } from '@/NextPageShell'

export default function Page() {
  return <ProtectedShell><ImportarAbonadosPage /></ProtectedShell>
}
