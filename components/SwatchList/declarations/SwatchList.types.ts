import { Position, ThemableComponentProps, Size } from '@overdose/components'
import { ReactNode } from 'react'

type Data = {
  [key: string]: any
}
type Shape = 'square' | 'round' | 'rounded'

type SwatchType = 'text' | 'color'

export type OptionShape = {
  /**
   * Swatch title
   */
  label?: string
  /**
   * option value
   */
  value: string
  data?: Data
}

export interface SwatchListProps {
  /**
   * Swatch list options
   */
  options?: Array<OptionShape>
  /**
   * Swatch list defualt preselected value
   */
  defaultValue?: string | number | null
  /**
   * Swatch list label
   */
  label?: string | ReactNode
  /**
   * Swatch list onchange callback
   */
  onChange?: (value: any, event: React.ChangeEvent) => void
  /**
   * Swatch type (text or color)
   */
  type?: SwatchType
  /**
   * Swatch shape (square or round or rounded)
   */
  shape?: Shape
  /**
   * Is Tooltip displayed
   */
  displayTooltip?: boolean
  /**
   * Swatch size
   */
  size?: Size
  /**
   * Swatch list hint message shown in tooltip
   */
  hint?: string | ReactNode
  /**
   * Swatch list hint message position
   */
  hintPosition?: Position
  /**
   * Test Id
   * @ignore
   */
  dataTestId?: string
}

export interface SwatchProps {
  item: OptionShape
  /**
   * Swatch type (text or color)
   */
  type?: SwatchType
  /**
   * Swatch shape (square or round or rounded)
   */
  shape?: Shape
  /**
   * Swatch size
   */
  size?: Size
  /**
   * Is Swatch Checked
   */
  checked?: boolean
  /**
   * Is Swatch Disabled
   */
  disabled?: boolean
  /**
   * Is Tooltip Displayed
   */
  displayTooltip?: boolean
  /**
   * Test Id
   * @ignore
   */
  dataTestId?: string
  /**
   * On click callback
   */
  onClick?: (event: React.MouseEvent) => void
  /**
   * On key down callback
   */
  onKeyDown?: (event: React.KeyboardEvent) => void
}
