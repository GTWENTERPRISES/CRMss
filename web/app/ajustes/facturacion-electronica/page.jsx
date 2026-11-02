'use client'
import FacturacionElectronicaPage from '@/crm-pages/ajustes/FacturacionElectronicaPage'
import { ProtectedShell } from '@/NextPageShell'

export default function Page() {
  return <ProtectedShell><FacturacionElectronicaPage /></ProtectedShell>
}
