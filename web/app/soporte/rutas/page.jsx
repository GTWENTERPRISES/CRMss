'use client'
import RutasPage from '@/crm-pages/soporte/RutasPage'
import { ProtectedShell } from '@/NextPageShell'

export default function Page() {
  return <ProtectedShell><RutasPage /></ProtectedShell>
}
