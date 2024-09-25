import { Compose, composeThemeFromProps } from '@css-modules-theme/react'
import { Button } from '@overdose/components'
import { Heart } from 'react-feather'

import { ProductAddToWishlistButtonProps } from './declarations/ProductAddToWishlistButton.types'
import defaultStyles from './ProductAddToWishlistButton.module.css'

export const ProductAddToWishlistButton = ({
  theme,
  buttonStatus = 'primary',
  dataTestId,
  label,
  onBlur,
  onClick,
  onFocus,
  noHover,
  inWishlist,
}: ProductAddToWishlistButtonProps) => {
  const styles = composeThemeFromProps(defaultStyles, { theme }, { compose: Compose.Merge })

  const iconProps = inWishlist && { fill: buttonStatus === 'primary' ? '#fff' : '#000' }

  return (
    <div data-test-id={dataTestId}>
      {label}
      <Button
        htmlType="button"
        ariaLabel="Add to wishlist"
        theme={{
          ...styles,
        }}
        status={buttonStatus}
        variant="solid"
        size="md"
        noHover={noHover}
        onBlur={onBlur}
        onClick={onClick}
        onFocus={onFocus}>
        <Heart width="10" height="10" {...iconProps} />
      </Button>
    </div>
  )
}
