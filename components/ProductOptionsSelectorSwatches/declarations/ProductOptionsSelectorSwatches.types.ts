import { FocusEventHandler, ReactNode } from 'react'

export type Options = {
  /**
   * option value
   */
  value: string

  /**
   * Swatch title
   */
  label?: string

  /**
   * HEX code of swatch colour
   */
  color?: string

  /**
   * An image
   */
  image?: Element

  /**
   * callback on swatch click
   */
  onClick?: () => void
}

export interface ProductOptionsSelectorSwatchesProps {
  /**
   * Text to appear below input
   */
  helpText?: string | ReactNode
  /**
   * Array of options.
   */
  options?: Options[]

  /**
   * Current value
   */
  value?: number

  /**
   * Input name
   */
  name?: string

  /**
   * Input label
   */
  label?: string

  /**
   * Callback on value change
   */
  onChange?: (value: string, event: React.ChangeEvent) => void

  /**
   * Callback on blur
   */
  onBlur?: FocusEventHandler

  /**
   * Callback on focus
   */
  onFocus?: FocusEventHandler

  /**
   * Component classes override
   */
  theme?: Record<string, string>
  /**
   * Test Id
   * @ignore
   */
  dataTestId?: string
}
