import { FocusEventHandler, FormEventHandler, ReactNode } from 'react'

export interface OptionShape {
  value: string
  title: string
  id: number
  disabled?: boolean
}

export interface ProductOptionsSelectorTitlesProps {
  /**
   * Text to appear below input
   */
  helpText?: string | ReactNode
  /**
   * Component to display for help
   */
  helpAction?: ReactNode
  /**
   * Text to appear in ⓘ tooltip
   */
  infoText?: string | ReactNode
  /**
   * Callback on value change
   */
  onChange: FormEventHandler<HTMLInputElement>
  /**
   * Callback on blur
   */
  onBlur?: FocusEventHandler
  /**
   * Callback on focus
   */
  onFocus?: FocusEventHandler
  /**
   * Input label
   */
  label?: string | ReactNode
  /**
   * Input name
   */
  name: string
  /**
   * Current value
   */
  value: string
  /**
   * Array of options.
   * value: option value
   * name: Option title
   * onClick callback on option click
   */
  options: Array<OptionShape>
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
