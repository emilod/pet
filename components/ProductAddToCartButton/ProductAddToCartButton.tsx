import { Compose, composeThemeFromProps } from '@css-modules-theme/react'
import { Button } from '@overdose/components'

import { ProductAddToCartButtonProps } from './declarations/ProductAddToCartButton.types'
import defaultStyles from './ProductAddToCartButton.module.css'

export const ProductAddToCartButton = ({
  label = 'Add to cart',
  onClick,
  elementBefore,
  elementAfter,
  theme,
  dataTestId,
  buttonProps,
}: ProductAddToCartButtonProps) => {
  const styles = composeThemeFromProps(defaultStyles, { theme }, { compose: Compose.Merge })
  return (
    <div data-test-id={dataTestId} className={styles.button__wrapper}>
      {elementBefore}
      <Button
        ariaLabel="Submit"
        htmlType="submit"
        fluid
        {...buttonProps}
        onClick={onClick}
        showContentWhileLoading={false}>
        {label}
      </Button>
      {elementAfter}
    </div>
  )
}
