import { CheckboxProps, FieldProps } from '@overdose/components'
import { ReactNode } from 'react'

import { ControlledFieldProps } from '.'

export type ControlledCheckboxProps = ControlledFieldProps & {
  idSuffix?: CheckboxProps['idSuffix']
  checkboxTheme?: CheckboxProps['theme']
  fieldTheme?: FieldProps['theme']
  label: CheckboxProps['label']
  handleCheckboxChange?: CheckboxProps['onChange']
} & {
  children?: ReactNode
}
