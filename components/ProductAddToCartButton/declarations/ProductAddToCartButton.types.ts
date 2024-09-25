import { ButtonProps } from '@overdose/components'
import { ReactNode } from 'react'

export interface ProductAddToCartButtonProps {
  /**
   * Button label
   */
  label?: string | ReactNode
  /**
   * Button click
   */
  onClick?: () => void
  /**
   * Element to display to left of button.
   */
  elementBefore?: ReactNode
  /**
   * Element to display to right of button.
   */
  elementAfter?: ReactNode
  /**
   * Component classes override
   */
  theme?: Record<string, string>
  /**
   * Test Id
   * @ignore
   */
  dataTestId?: string
  /**
   * Button props
   */
  buttonProps?: ButtonProps
}
