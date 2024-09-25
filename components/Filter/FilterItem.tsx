import clsx from 'clsx'

import { Checkbox } from '../Checkbox/Checkbox'
import styles from './styles/FilterItem.module.css'

export const FilterItem = ({ count, checked = false, label }) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.label_wrapper}>
        <Checkbox name={label} checked={checked} idSuffix={`_${label}`}>
          <span
            className={clsx(styles.label, {
              [styles.label_checked]: checked,
            })}>
            {label}
          </span>
        </Checkbox>
      </div>
      <div className={styles.count}>({count})</div>
    </div>
  )
}
