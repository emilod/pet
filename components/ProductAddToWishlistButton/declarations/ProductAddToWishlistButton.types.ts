import { ButtonStatus } from '@overdose/components'
import { FocusEventHandler, ReactNode } from 'react'

export interface ProductAddToWishlistButtonProps {
  /**
   * Component classes override
   */
  theme?: Record<string, string>
  /**
   * Indicates styling rules for each placement
   */
  placement?: 'pdp' | 'plp' | 'cart'

  /**
   * Button Status
   */
  buttonStatus?: ButtonStatus

  /**
   * Button label
   */
  label?: string | ReactNode

  /**
   * Callback on click event
   */
  onClick?: (e: Event) => void

  /**
   * Callback on blur event
   */
  onBlur?: FocusEventHandler

  /**
   * Callback on focus event
   */
  onFocus?: FocusEventHandler

  /**
   * Test Id
   * @ignore
   */
  dataTestId?: string

  /**
   * Remove hover effect from button
   */
  noHover?: boolean
  /**
   * Indicator whether product has been added or not
   */
  inWishlist?: boolean
}
