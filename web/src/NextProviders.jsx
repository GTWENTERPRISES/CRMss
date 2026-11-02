'use client'

import { StrictMode, useEffect } from 'react'
import { AuthProvider } from './lib/AuthContext'
import { ConfirmarProvider } from './lib/confirmar'
import ErrorBoundary from './components/ErrorBoundary'
import FranjaAmbiente from './components/layout/FranjaAmbiente'
import AvisoVersion from './components/layout/AvisoVersion'
import { IngresoGrupalProvider } from './components/tecnico/IngresoGrupal'
import { esVersionVieja, recargarPorVersionNueva } from './lib/versionNueva'

export default function NextProviders({ children }) {
  // Un archivo de pantalla que ya no existe (se publicó una versión nueva) y
  // que no llegó al ErrorBoundary: se recarga sola una vez (lib/versionNueva).
  useEffect(() => {
    const alFallar = (e) => {
      if (esVersionVieja(e.reason ?? e.error ?? e) && recargarPorVersionNueva()) e.preventDefault?.()
    }
    window.addEventListener('unhandledrejection', alFallar)
    window.addEventListener('error', alFallar)
    return () => {
      window.removeEventListener('unhandledrejection', alFallar)
      window.removeEventListener('error', alFallar)
    }
  }, [])

  return (
    <StrictMode>
      <ErrorBoundary>
        <AuthProvider>
          <ConfirmarProvider>
            <FranjaAmbiente />
            <AvisoVersion />
            <IngresoGrupalProvider>{children}</IngresoGrupalProvider>
          </ConfirmarProvider>
        </AuthProvider>
      </ErrorBoundary>
    </StrictMode>
  )
}
