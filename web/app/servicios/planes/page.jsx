'use client'

import PlanesPage from '@/crm-pages/servicios/PlanesPage'
import { ProtectedShell } from '@/NextPageShell'

export default function Page() {
  return <ProtectedShell><PlanesPage /></ProtectedShell>
}
