'use client'

import dynamic from 'next/dynamic'
import { ProtectedShell } from '@/NextPageShell'

const InteligenciaPage = dynamic(() => import('@/crm-pages/ventas/InteligenciaPage'), {
  ssr: false,
})

export default function Page() {
  return (
    <ProtectedShell>
      <InteligenciaPage />
    </ProtectedShell>
  )
}
