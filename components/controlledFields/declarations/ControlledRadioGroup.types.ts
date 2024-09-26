import { RadioGroupProps } from '@overdose/components'
import { ReactNode } from 'react'

import { ControlledFieldProps } from '.'

export type ControlledRadioGroupProps = ControlledFieldProps & {
  options?: RadioGroupProps['options']
  idSuffix?: RadioGroupProps['idSuffix']
  defaultValue?: RadioGroupProps['defaultValue']
  disabled?: RadioGroupProps['disabled']
  size?: RadioGroupProps['size']
} & {
  children: ReactNode
}
