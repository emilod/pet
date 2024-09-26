import { OptionInfo } from '@overdose/components'
import { FocusEventHandler, ReactNode } from 'react'

export interface IOption {
  value: string | number
  name: string
  disabled?: boolean
  prefix?: string
  suffix?: string
}

export interface ProductOptionsSelectorDropdownProps {
  placement?: 'pdp' | 'plp'
  /**
   * Array of options.
        value: option value
        name: option title
   */
  options?: Array<IOption>

  /**
   * Current value
   */
  value?: string

  /**
   * Input label or component to replace input label
   */
  label?: string | ReactNode

  /**
   * Input name
   */
  name?: string

  /**
   * Field Placeholder
   */
  placeholder?: string

  /**
   * Callback on value change
   */
  onChange?: (value: string, option: OptionInfo | OptionInfo[]) => void

  /**
   * Callback on blur
   */
  onBlur?: FocusEventHandler

  /**
   * Callback on focus
   */
  onFocus?: FocusEventHandler

  /**
   * Text/component to appear in ⓘ tooltip
   */
  infoText?: string | ReactNode

  /**
   * Text/component to appear below input
   */
  helpText?: string | ReactNode

  /**
   * Component to display size guide
   */
  helpAction?: ReactNode

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
