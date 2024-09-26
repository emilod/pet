import { StandardProps } from '@overdose/components'
import { ReactNode } from 'react'

export interface ProductDetailsAccordionProps extends StandardProps {
  /**
   * Items for accordion
    title: Title of accordion section
    panel: Content of accordion section panel
   */
  items: {
    id: string
    title: string | ReactNode
    panel: string | ReactNode
  }[]
  /**
   * Test Id
   * @ignore
   */
  dataTestId?: string
}
