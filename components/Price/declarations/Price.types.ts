import { StandardProps, TypographyProps } from '@overdose/components'

export type UsePriceProps = PriceProps

export type Money = {
  /**
   *Current price in cents
   */
  amount: number
  /**
   *ISO 4217 currency code of price
   */
  currency?: string
}

export interface PriceProps extends StandardProps {
  /**
   * Current price
   */
  regularPrice: Money

  /**
   * Final price
   */
  finalPrice?: Money

  /**
   * HTML tag
   */
  tag?: TypographyProps['tag']
  /**
   * HTML variant
   */
  variant?: TypographyProps['variant']

  /**
   * Show "from" label
   */
  from?: boolean

  /**
   * Component custom classes
   */
  theme?: Record<string, string>

  /**
   * @ignore Test identification.
   */
  dataTestId?: string
}
