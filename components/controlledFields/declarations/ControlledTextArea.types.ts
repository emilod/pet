import { TextareaProps } from '@overdose/components'

import { ControlledFieldProps } from '.'

export type ControlledTextAreaProps = ControlledFieldProps & {
  idSuffix: TextareaProps['idSuffix']
  label?: TextareaProps['label']
  maxLength: TextareaProps['maxLength']
  loading?: TextareaProps['disabled']
  disabled?: TextareaProps['disabled']
  showWordLimit?: TextareaProps['showWordLimit']
  placeholder?: TextareaProps['placeholder']
  textAreaTheme?: TextareaProps['theme']
  limitPosition?: TextareaProps['limitPosition']
  autoSize?: TextareaProps['autoSize']
  showLabel?: TextareaProps['showLabel']
  forceShowErrorMessage?: string
  onKeyDown?: TextareaProps['onKeyDown']
  onKeyUp?: TextareaProps['onKeyUp']
}
