import { Switch as BaseSwitch } from '@overdose/components'

import styles from './Switch.module.css'

export const Switch = () => {
  return <BaseSwitch theme={{ switch: styles.switch, checked: styles.checked, dot: styles.dot }} />
}
