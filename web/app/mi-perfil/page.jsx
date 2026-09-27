'use client'

import MiPerfilPage from '@/crm-pages/MiPerfilPage'
import { ProtectedShell } from '@/NextPageShell'

export default function Page() {
  return <ProtectedShell><MiPerfilPage /></ProtectedShell>
}
