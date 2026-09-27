import '../src/index.css'
import NextProviders from '../src/NextProviders'

export const metadata = {
  title: 'Taller SmartOLT',
  description: 'Sistema web de gestión OLT GPON, MikroTik y operaciones ISP',
}

export const dynamic = 'force-dynamic'
export const runtime = 'nodejs'

export default function RootLayout({ children }) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body suppressHydrationWarning>
        <NextProviders>{children}</NextProviders>
      </body>
    </html>
  )
}
