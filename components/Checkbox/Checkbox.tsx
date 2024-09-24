import { Checkbox as BaseCheckbox, CheckboxProps } from '@overdose/components'

import styles from './Checkbox.module.css'

export const Checkbox = (props: CheckboxProps) => {
  return <BaseCheckbox theme={styles} {...props} />
}
