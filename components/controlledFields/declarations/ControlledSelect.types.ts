import { SelectProps } from '@overdose/components'

import { ControlledFieldProps } from '.'
import { SelectOption } from '../../Select/declarations/Select.types'

export type ControlledSelectProps = ControlledFieldProps & {
  label?: SelectProps['label']
  idSuffix?: SelectProps['idSuffix']
  disabled?: SelectProps['disabled']
  defaultValue?: SelectProps['defaultValue']
  errorMessage?: string
  triggerProps?: SelectProps['triggerProps']
  onSelectChange?: (value) => void
  showSearch?: SelectProps['showSearch']
  placeholder?: SelectProps['placeholder']
  filterOption?: SelectProps['filterOption']
  options?: SelectOption[]
  selectTheme?: SelectProps['theme']
  mode?: SelectProps['mode']
  onSearch?: SelectProps['onSearch']
  children?: React.ReactNode
  showAddressLocatorError?: boolean
  alwaysShowNotFoundContent?: boolean
}
