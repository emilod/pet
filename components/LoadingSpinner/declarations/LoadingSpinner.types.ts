import { IconProps } from 'react-feather'

export interface LoadingSpinnerProps {
  /**
   * Determines whether component's position is relative
   */
  isRelative?: boolean

  /**
   * Icon style props
   */
  iconProps?: IconProps

  /**
   * Component classes override
   */
  theme?: Record<string, string>

  /**
   * Fill background of the page
   */
  backdrop?: boolean

  /**
   * Test Id
   * @ignore
   */
  dataTestId?: string
}
