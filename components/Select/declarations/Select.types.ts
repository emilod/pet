import { ReactNode } from 'react'

export type SelectOption = {
  label: string | number
  value: string | number
  disabled?: boolean
  content?: ReactNode
  hidden?: boolean
}

export type SelectProps = {
  notFoundContent?: string
  options?: SelectOption[]
  needToMoveSelectedOptionToTop?: boolean
  customOptionMapper?: (option: SelectOption) => ReactNode
  alwaysShowNotFoundContent?: boolean
  notFoundQueryLength?: number
}
