/* eslint-disable react/no-unstable-nested-components */
import { Compose, composeThemeFromProps } from '@css-modules-theme/react'
import { Typography } from '@overdose/components'
import clsx from 'clsx'
import { forwardRef, useState } from 'react'
import { Star } from 'react-feather'

import { HalfStarProps, ReviewStarsProps } from './declarations/ReviewStars.types'
import defaultStyles from './styles/ReviewStars.module.css'

const halfStarSizes = {
  bg: {
    width: 30,
    height: 30,
  },
  sm: {
    width: 19,
    height: 19,
  },
  xs: {
    width: 14,
    height: 14,
    top: 1,
  },
}

export const ReviewStars = forwardRef<HTMLLabelElement, ReviewStarsProps>(
  (
    {
      className,
      theme,
      rating: defaultRating,
      size = 'bg',
      reviewCount = 0,
      editable,
      displayReviewCount,
      dataTestId,
      ...restProps
    },
    ref,
  ) => {
    const styles = composeThemeFromProps(defaultStyles, { theme }, { compose: Compose.Merge })

    const [rating, setRating] = useState(defaultRating || null)
    const [hover, setHover] = useState(null)

    // todo: review stars should support half start ratings

    const HalfStar = ({ value, side }: HalfStarProps) => (
      <Star
        className={clsx(styles.star, {
          [styles[`size-${size}`]]: true,
          [styles.checkedStar]: value <= (hover ?? rating),
          [styles.rightPartStar]: side === 'right',
          [styles.leftPartStar]: side === 'left',
        })}
        {...halfStarSizes[size]}
        onClick={() => editable && setRating(value)}
        onMouseEnter={() => {
          if (editable) setHover(value)
        }}
        onMouseLeave={() => {
          if (editable) setHover(null)
        }}
      />
    )

    return (
      <div className={clsx(styles.reviewWrapper, className)} data-test-id={dataTestId}>
        <input type="radio" name="rating" className={styles.radio} value={rating} {...restProps} />
        {[...Array(5)].map((_star, i) => {
          return (
            // eslint-disable-next-line jsx-a11y/label-has-associated-control
            <label ref={ref} key={i} className={clsx(styles.label, styles[`star_${size}`])}>
              <HalfStar value={i + 0.5} side="left" />
              <HalfStar value={i + 1} side="right" />
            </label>
          )
        })}
        {displayReviewCount && (
          <Typography
            tag="p"
            variant="caption"
            theme={{ root: clsx(styles.reviewCount, styles[`reviewCount_${size}`]) }}>
            (<span>{reviewCount.toFixed(1)}</span>)
          </Typography>
        )}
      </div>
    )
  },
)
