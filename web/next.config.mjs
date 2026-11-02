import path from 'node:path'
import { fileURLToPath } from 'node:url'

const projectRoot = path.dirname(fileURLToPath(import.meta.url))

/** @type {import('next').NextConfig} */
const nextConfig = {
  outputFileTracingRoot: projectRoot,
  // Otra carpeta de build para levantar una segunda instancia (QA) sin que las
  // dos se pisen la .next.
  distDir: process.env.NEXT_DIST_DIR || '.next',
  reactStrictMode: true,
  poweredByHeader: false,
  
  // Configuración de webpack para evitar errores en Windows
  webpack: (config, { isServer }) => {
    // Ignorar archivos del sistema en Windows
    config.watchOptions = {
      ...config.watchOptions,
      ignored: [
        '**/node_modules/**',
        '**/.next/**',
        '**/C:/DumpStack.log.tmp',
        '**/C:/hiberfil.sys',
        '**/C:/pagefile.sys',
        '**/C:/swapfile.sys',
        '**/C:/System Volume Information/**',
      ],
    }
    return config
  },
  
  async rewrites() {
    return [
      {
        source: '/api/v1/:path*',
        destination: 'http://localhost:8000/api/v1/:path*',
      },
    ]
  },
}

export default nextConfig
