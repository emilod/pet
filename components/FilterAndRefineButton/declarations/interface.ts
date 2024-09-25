import { MouseEventHandler } from 'react'

export interface FilterAndRefineButtonProps {
  /**
   * Component custom classes
   */
  theme?: Record<string, string>
  /**
   * @en Callback fired when the button is clicked
   */
  onClick?: MouseEventHandler<HTMLButtonElement> & ((e: Event) => void)
  /**
   * Text inside the button
   */
  label?: string
  /**
   * Test Id
   * @ignore
   */
  dataTestId?: string
}
