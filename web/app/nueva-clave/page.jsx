'use client'

import NuevaClavePage from '@/crm-pages/NuevaClavePage'
import { ProtectedShell } from '@/NextPageShell'

export default function Page() {
  return <ProtectedShell><NuevaClavePage /></ProtectedShell>
}
