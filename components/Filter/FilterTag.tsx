/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import clsx from 'clsx'

import { Close } from '../../assets/icons/Close'
import styles from './FilterTag.module.css'

export const FilterTag = ({ value = 'value', prefix = true, onClose = () => {} }) => {
  return (
    <div className={clsx(styles.wrapper_main, { [styles.wrapper_with_prefix]: prefix, [styles.wrapper]: !prefix })}>
      <div className={styles.text_container}>
        <span className={styles.prefix}>{prefix && 'tag: '}</span>
        <span className={styles.value}>{value}</span>
      </div>
      <div onClick={onClose} className={styles.close_icon}>
        <Close />
      </div>
    </div>
  )
}
