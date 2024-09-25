import { InputProps } from '@overdose/components'

import { ControlledFieldProps } from '.'

export type ControlledDateInputProps = ControlledFieldProps & {
  idSuffix: InputProps['idSuffix']
  label: InputProps['label']
  loading?: InputProps['disabled']
  disabled?: InputProps['disabled']
  defaultValue?: InputProps['defaultValue']
}
