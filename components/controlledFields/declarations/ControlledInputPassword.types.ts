import { InputProps } from '@overdose/components'

import { ControlledFieldProps } from '.'

export type ControlledInputPasswordProps = ControlledFieldProps & {
  idSuffix: InputProps['idSuffix']
  label: InputProps['label']
  placeholder?: InputProps['placeholder']
  loading?: InputProps['disabled']
  disabled?: InputProps['disabled']
  defaultValue?: InputProps['defaultValue']
  visibilityToggle?: boolean
  inputTheme?: InputProps['theme']
  suffix?: InputProps['suffix']
  showIndicator?: InputProps['showIndicator']
  strength?: InputProps['strength']
}
