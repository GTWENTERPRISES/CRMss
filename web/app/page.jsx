'use client'

import PantallaInicial from '@/components/layout/PantallaInicial'
import { ProtectedShell } from '@/NextPageShell'

export default function Page() {
  return <ProtectedShell><PantallaInicial /></ProtectedShell>
}
