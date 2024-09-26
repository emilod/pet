import { InputHTMLAttributes } from 'react'

type NativeProps = InputHTMLAttributes<HTMLInputElement>

export type RatingRange = number

export type ReviewStarsProps = Omit<NativeProps, 'size' | 'rating'> & {
  /**
   *  To add new classes
   */
  className?: string | string[]
  /**
   * Component classes override
   */
  theme?: Record<string, string>
  /**
   * The default value of `rating`
   */
  rating?: RatingRange
  /**
   * Component's size
   */
  size?: 'sm' | 'bg' | 'xs'
  /**
   * Сounter that shows the number of voters
   */
  reviewCount?: number
  /**
   * Whether the reviewCount should be shown
   */
  displayReviewCount?: boolean
  /**
   * Whether the user is allowed to vote
   */
  editable?: boolean

  dataTestId?: string
}

export type HalfStarProps = {
  value: RatingRange
  side: 'left' | 'right'
}
