# Script PowerShell para migrar un componente de Supabase a Django
# Uso: .\scripts\migrar_componente.ps1 web\src\components\clientes\ClienteForm.jsx

param(
    [Parameter(Mandatory=$true)]
    [string]$Archivo
)

if (-not (Test-Path $Archivo)) {
    Write-Host "Error: El archivo $Archivo no existe" -ForegroundColor Red
    exit 1
}

Write-Host "🔄 Migrando $Archivo de Supabase a Django..." -ForegroundColor Cyan

# Backup del archivo original
$backup = "$Archivo.bak"
Copy-Item $Archivo $backup -Force
Write-Host "✅ Backup creado: $backup" -ForegroundColor Green

# Leer contenido del archivo
$contenido = Get-Content $Archivo -Raw

# Reemplazar imports de supabaseClient
$contenido = $contenido -replace "from '@/lib/supabaseClient'", "from '@/lib/djangoClient'"
$contenido = $contenido -replace "from '../lib/supabaseClient'", "from '../lib/djangoClient'"
$contenido = $contenido -replace "from '../../lib/supabaseClient'", "from '../../lib/djangoClient'"
$contenido = $contenido -replace "from '../../../lib/supabaseClient'", "from '../../../lib/djangoClient'"

# Reemplazar imports de useTabla
$contenido = $contenido -replace "from '@/lib/useTabla'", "from '@/lib/useTablaDjango'"
$contenido = $contenido -replace "from '../lib/useTabla'", "from '../lib/useTablaDjango'"
$contenido = $contenido -replace "from '../../lib/useTabla'", "from '../../lib/useTablaDjango'"

# Reemplazar variable supabase por django (con alias)
$contenido = $contenido -replace "import \{ supabase \}", "import { django as supabase }"
$contenido = $contenido -replace "export \{ supabase \}", "export { django as supabase }"

# Reemplazar useTabla por useTablaDjango (con alias)
$contenido = $contenido -replace "import \{ useTabla \}", "import { useTablaDjango as useTabla }"

# Guardar cambios
Set-Content $Archivo $contenido -NoNewline

Write-Host "✅ Archivo migrado: $Archivo" -ForegroundColor Green
Write-Host ""
Write-Host "📝 Siguientes pasos:" -ForegroundColor Yellow
Write-Host "1. Revisá el archivo para verificar que los cambios son correctos"
Write-Host "2. Si algo salió mal, restaurá el backup: Copy-Item $backup $Archivo -Force"
Write-Host "3. Probá el componente en el navegador"
Write-Host ""
Write-Host "Para deshacer: Copy-Item $backup $Archivo -Force" -ForegroundColor Gray
