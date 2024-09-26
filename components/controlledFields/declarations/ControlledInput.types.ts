import { InputProps } from '@overdose/components'

import { ControlledFieldProps } from '.'

type SubscribeMessage = {
  message?: string
  type?: 'success' | 'error'
}

export type ControlledInputProps = ControlledFieldProps & {
  idSuffix: InputProps['idSuffix']
  label: InputProps['label']
  loading?: InputProps['disabled']
  disabled?: InputProps['disabled']
  defaultValue?: InputProps['defaultValue']
  type?: InputProps['type']
  inputTheme?: InputProps['theme']
  allowClear?: InputProps['allowClear']
  onClear?: InputProps['onClear']
  validationStatus?: InputProps['validationStatus']
  addAfter?: InputProps['addAfter']
  fullWidth?: InputProps['fullWidth']
  suffix?: InputProps['suffix']
  subscribeMessage?: SubscribeMessage
  note?: string
  handleChange?: (event) => void
  handleBlur?: (event) => void
}
