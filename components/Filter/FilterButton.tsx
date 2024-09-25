import { Button } from '@overdose/components'

import styles from './FilterButton.module.css'

export const FilterButton = ({ numbOfFilters = 3, disabled = false }) => {
  return (
    <div className={styles.wrapper}>
      <Button status="secondary" theme={{ root: styles.root, secondary: styles.secondary }} disabled={disabled}>
        Clear all
      </Button>
      <Button theme={{ root: styles.root }} disabled={disabled}>
        Apply ({numbOfFilters})
      </Button>
    </div>
  )
}
