#!/bin/bash
# Script para migrar un componente de Supabase a Django
# Uso: ./scripts/migrar_componente.sh web/src/components/clientes/ClienteForm.jsx

if [ -z "$1" ]; then
  echo "Uso: $0 <archivo-a-migrar>"
  echo "Ejemplo: $0 web/src/components/clientes/ClienteForm.jsx"
  exit 1
fi

ARCHIVO="$1"

if [ ! -f "$ARCHIVO" ]; then
  echo "Error: El archivo $ARCHIVO no existe"
  exit 1
fi

echo "🔄 Migrando $ARCHIVO de Supabase a Django..."

# Backup del archivo original
cp "$ARCHIVO" "$ARCHIVO.bak"
echo "✅ Backup creado: $ARCHIVO.bak"

# Reemplazar imports
sed -i "s|from '@/lib/supabaseClient'|from '@/lib/djangoClient'|g" "$ARCHIVO"
sed -i "s|from '../lib/supabaseClient'|from '../lib/djangoClient'|g" "$ARCHIVO"
sed -i "s|from '../../lib/supabaseClient'|from '../../lib/djangoClient'|g" "$ARCHIVO"
sed -i "s|from '../../../lib/supabaseClient'|from '../../../lib/djangoClient'|g" "$ARCHIVO"

sed -i "s|from '@/lib/useTabla'|from '@/lib/useTablaDjango'|g" "$ARCHIVO"
sed -i "s|from '../lib/useTabla'|from '../lib/useTablaDjango'|g" "$ARCHIVO"
sed -i "s|from '../../lib/useTabla'|from '../../lib/useTablaDjango'|g" "$ARCHIVO"

# Reemplazar variable supabase por django
sed -i "s|import { supabase }|import { django as supabase }|g" "$ARCHIVO"
sed -i "s|export { supabase }|export { django as supabase }|g" "$ARCHIVO"

# Reemplazar useTabla por useTablaDjango
sed -i "s|import { useTabla }|import { useTablaDjango as useTabla }|g" "$ARCHIVO"

echo "✅ Archivo migrado: $ARCHIVO"
echo ""
echo "📝 Siguientes pasos:"
echo "1. Revisá el archivo para verificar que los cambios son correctos"
echo "2. Si algo salió mal, restaurá el backup: cp $ARCHIVO.bak $ARCHIVO"
echo "3. Probá el componente en el navegador"
echo ""
echo "Para deshacer: cp $ARCHIVO.bak $ARCHIVO"
