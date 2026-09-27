'use client'

import RetirosPage from '@/crm-pages/inventario/RetirosPage'
import { ProtectedShell } from '@/NextPageShell'

export default function Page() {
  return <ProtectedShell><RetirosPage /></ProtectedShell>
}
