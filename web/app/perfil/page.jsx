'use client'

import PerfilCampoPage from '@/crm-pages/tecnico/PerfilPage'
import { ProtectedShell } from '@/NextPageShell'

export default function Page() {
  return <ProtectedShell><PerfilCampoPage /></ProtectedShell>
}
