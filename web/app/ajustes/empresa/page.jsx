'use client'

import EmpresaPage from '@/crm-pages/EmpresaPage'
import { ProtectedShell } from '@/NextPageShell'

export default function Page() {
  return <ProtectedShell><EmpresaPage /></ProtectedShell>
}
