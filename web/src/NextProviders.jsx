'use client'

import { StrictMode } from 'react'
import { AuthProvider } from './lib/AuthContext'
import { ConfirmarProvider } from './lib/confirmar'
import ErrorBoundary from './components/ErrorBoundary'
import FranjaAmbiente from './components/layout/FranjaAmbiente'
import AvisoVersion from './components/layout/AvisoVersion'

export default function NextProviders({ children }) {
  return (
    <StrictMode>
      <ErrorBoundary>
        <AuthProvider>
          <ConfirmarProvider>
            <FranjaAmbiente />
            <AvisoVersion />
            {children}
          </ConfirmarProvider>
        </AuthProvider>
      </ErrorBoundary>
    </StrictMode>
  )
}
