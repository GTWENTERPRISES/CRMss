/**
 * ¿Quien entró opera la red? (puede ver las ONUs).
 *
 * Lo técnico —IP, MAC, PPPoE, VLAN, dBm de la ONU, serie de la ONT— no le dice
 * nada a quien cobra o vende y le llena la pantalla. A esa persona no se le
 * muestra; los datos no se tocan (se guardan como estaban).
 */
import { usePermisos } from './AuthContext'

export function useEsTecnico() {
  const { puede } = usePermisos()
  return puede('red.onus_ver')
}

/** Muestra lo de adentro solo a quien opera la red. */
export function SoloTecnico({ children, envezDe = null }) {
  return useEsTecnico() ? children : envezDe
}
