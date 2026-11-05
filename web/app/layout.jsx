import '../src/index.css'
import NextProviders from '../src/NextProviders'

export const metadata = {
  title: 'HomeLink',
  description: 'Sistema web de gestión OLT GPON, MikroTik y operaciones ISP',
}

export const dynamic = 'force-dynamic'
export const runtime = 'nodejs'

export default function RootLayout({ children }) {
  return (
    <html lang="es" suppressHydrationWarning>
      <head>
        {/* El modo oscuro antes de dibujar: sin esto la página aparece clara
            un instante y después se oscurece. */}
        <script
          dangerouslySetInnerHTML={{
            __html: "try{if(localStorage.getItem('tema-color')==='oscuro')document.documentElement.classList.add('dark')}catch(e){}",
          }}
        />
      </head>
      <body suppressHydrationWarning>
        <NextProviders>{children}</NextProviders>
      </body>
    </html>
  )
}
