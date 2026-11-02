'use client'
import SistemaPage from '@/crm-pages/SistemaPage'
import { ProtectedShell } from '@/NextPageShell'

export default function Page() {
  return <ProtectedShell><SistemaPage /></ProtectedShell>
}
