import { redirect } from 'next/navigation'

// La pantalla se llama "Cobros" en el menú, pero vive en /pagos. Quien escribe
// /cobros (o lo tiene guardado) llega igual.
export default function Page() {
  redirect('/pagos')
}
