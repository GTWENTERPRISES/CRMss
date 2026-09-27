'use client'

import dynamic from 'next/dynamic'
import { ProtectedShell } from '@/NextPageShell'

const MapaComercialPage = dynamic(() => import('@/crm-pages/ventas/MapaComercialPage'), {
  ssr: false,
})

export default function Page() {
  return (
    <ProtectedShell>
      <MapaComercialPage />
    </ProtectedShell>
  )
}
