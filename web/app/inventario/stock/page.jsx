'use client'

import StockPage from '@/crm-pages/inventario/StockPage'
import { ProtectedShell } from '@/NextPageShell'

export default function Page() {
  return <ProtectedShell><StockPage /></ProtectedShell>
}
