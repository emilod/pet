/* eslint-disable @typescript-eslint/no-explicit-any */
import { FieldProps } from '@overdose/components'
import { ControllerProps } from 'react-hook-form'

export type ControlledFieldProps = {
  control: ControllerProps<any>['control']
  name: ControllerProps['name']
  required?: boolean
  theme?: FieldProps['theme']
  errorMessage?: string
}
