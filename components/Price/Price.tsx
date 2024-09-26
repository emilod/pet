import { Compose, composeThemeFromProps } from '@css-modules-theme/react'
import { Typography } from '@overdose/components'

import { PriceProps } from './declarations/Price.types'
import defaultStyles from './styles/Price.module.css'
import { usePrice } from './utils/usePrice'

export const Price = ({
  regularPrice,
  finalPrice,
  tag = 'span',
  from = false,
  theme,
  dataTestId,
  variant = 'body',
}: PriceProps) => {
  const styles = composeThemeFromProps(defaultStyles, { theme }, { compose: Compose.Merge })
  const { formatPrice } = usePrice()

  return (
    <Typography tag={tag} variant={variant} theme={{ root: styles.typography }} data-test-id={dataTestId}>
      {from && <span className={styles.from}>From</span>}
      {(regularPrice && !finalPrice) || regularPrice?.amount === finalPrice?.amount ? (
        formatPrice(regularPrice)
      ) : (
        <>
          <span className={styles.finalPrice}>{formatPrice(finalPrice)}</span>
          <span className={styles.regularPrice}>{formatPrice(regularPrice)}</span>
        </>
      )}
    </Typography>
  )
}
