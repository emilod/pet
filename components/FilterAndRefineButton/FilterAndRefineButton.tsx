import { Compose, composeThemeFromProps } from '@css-modules-theme/react'
import { Button, Typography } from '@overdose/components'

import { Filter } from '../../assets/icons/Filter'
import { FilterAndRefineButtonProps } from './declarations/interface'
import defaultStyles from './styles/FilterAndRefineButton.module.css'

export const FilterAndRefineButton = ({
  theme,
  onClick,
  label = 'Filter and refine',
  dataTestId,
}: FilterAndRefineButtonProps) => {
  const styles = composeThemeFromProps(defaultStyles, { theme }, { compose: Compose.Merge })
  return (
    <Button
      ariaLabel={label}
      size="sm"
      noHover
      variant="ghost"
      color="secondary"
      theme={{
        root: styles.filterButton,
        ghost: styles.filterButtonGhost,
      }}
      onClick={onClick}
      dataTestId={dataTestId}>
      <Filter className={styles.icon} />
      <Typography tag="span" variant="caption" theme={{ root: styles.label }}>
        {label}
      </Typography>
    </Button>
  )
}
