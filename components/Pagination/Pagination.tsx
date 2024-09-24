import { Pagination as BasePagination } from '@overdose/components'

import styles from './Pagination.module.css'

export const Pagination = () => {
  return (
    <div className={styles.wrapper}>
      <BasePagination withEdges total={70} theme={{ active: styles.active, item: styles.item, arrow: styles.arrow }} />
    </div>
  )
}
