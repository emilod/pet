import { Compose, composeThemeFromProps } from '@css-modules-theme/react'
import { Typography } from '@overdose/components'

import {
  Price,
  ProductAddToCartButton,
  ProductAddToWishlistButton,
  ProductDetailsAccordion,
  QuantitySelector,
  ReviewStars,
} from '..'

import { ProductFormProps } from './declarations/ProductForm.types'
import { ProductOptionsSelectors } from './ProductOptionsSelectors'
import defaultStyles from './styles/ProductForm.module.css'

export const ProductForm = ({
  title,
  regularPrice,
  finalPrice,
  rating = 0,
  reviewCount = 0,
  inWishlist,
  handleAddToCart,
  onChangeQuantity,
  theme,
  dataTestId,
  isAddingToCart = false,
  handleSetSelectedConfigurableOptions,
  configurableOptions,
  productDetails,
}: ProductFormProps) => {
  const styles = composeThemeFromProps(defaultStyles, { theme }, { compose: Compose.Merge })

  const handleChangeQuantity = (value: number) => {
    onChangeQuantity && onChangeQuantity(value)
  }

  return (
    <div data-test-id={dataTestId} className={styles.container}>
      <Typography tag="h1" variant="pageheading">
        {title}
      </Typography>
      <div className={styles.info}>
        <Price
          variant="subheading"
          theme={{ typography: styles.price, finalPrice: styles.finalPrice, regularPrice: styles.regularPrice }}
          regularPrice={regularPrice}
          finalPrice={finalPrice}
        />
        {reviewCount > 0 && (
          <ReviewStars
            aria-label={`rating - ${rating}`}
            className={styles.reviewStars}
            rating={rating}
            size="xs"
            reviewCount={reviewCount}
            displayReviewCount
          />
        )}
      </div>
      <div className={styles.form}>
        <ProductOptionsSelectors
          options={configurableOptions}
          onOptionChange={handleSetSelectedConfigurableOptions}
          showSizeHelper
        />
        <ProductAddToCartButton
          onClick={handleAddToCart}
          elementBefore={
            <QuantitySelector
              selectProps={{
                theme: {
                  root: styles.selectWrapper,
                  suffix: styles.selectSuffix,
                  list: styles.list,
                },
                placeholder: 'Quantity',
              }}
              variant="dropdown"
              onChange={handleChangeQuantity}
            />
          }
          elementAfter={<ProductAddToWishlistButton inWishlist={inWishlist} />}
          label="Add to cart"
          buttonProps={{
            loading: isAddingToCart,
          }}
        />
      </div>
      <div className={styles.productDetails}>
        <ProductDetailsAccordion items={productDetails} theme={{ expanded: styles.expanded }} />
      </div>
    </div>
  )
}
