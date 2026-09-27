'use client'

import Layout from './components/layout/Layout'
import LayoutCampo from './components/tecnico/LayoutCampo'
import ProtectedRoute from './components/layout/ProtectedRoute'

export function ProtectedShell({ children }) {
  return (
    <ProtectedRoute>
      <Layout>{children}</Layout>
    </ProtectedRoute>
  )
}

export function FieldShell({ children }) {
  return (
    <ProtectedRoute>
      <LayoutCampo>{children}</LayoutCampo>
    </ProtectedRoute>
  )
}
