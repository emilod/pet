import { SelectProps, StandardProps } from '@overdose/components'

export type ChangeHandler = (value: number) => void

export interface QuantitySelectorProps extends StandardProps {
  /**
   * Minimal value
   */
  minValue?: number
  /**
   * Maximum value
   */
  maxValue?: number
  /**
   * Variant of selector
   */
  variant?: 'counter' | 'native' | 'dropdown'
  /**
   * Function onChange if variant=`counter`
   */
  onChange?: (value: number) => void
  /**
   * Step if variant=`counter`
   */
  step?: number
  /**
   * Initial value if variant=`counter`
   */
  defaultValue?: number
  /**
   * Field name
   */
  name?: string
  isLoading?: boolean
  /**
   * Disabled if variant=`counter`
   */
  disabled?: boolean
  /**
   * If variant = `native` or `dropdown`.
   * Custom props object to override normal props
   */
  selectProps?: Partial<SelectProps>
  /**
   * Test Id
   * @ignore
   */
  dataTestId?: string
}
