'use client'

import dynamic from 'next/dynamic'
import { ProtectedShell } from '@/NextPageShell'

const CoberturaPage = dynamic(() => import('@/crm-pages/ventas/CoberturaPage'), {
  ssr: false,
})

export default function Page() {
  return (
    <ProtectedShell>
      <CoberturaPage />
    </ProtectedShell>
  )
}
