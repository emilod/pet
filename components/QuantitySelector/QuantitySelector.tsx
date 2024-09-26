import { CounterQuantitySelector } from './CounterQuantitySelector'
import { QuantitySelectorProps } from './declarations/QuantitySelector.types'
import { DropdownQuantitySelector } from './DropdownQuantitySelector'

export const QuantitySelector = ({ variant = 'counter', name, selectProps, ...restProps }: QuantitySelectorProps) => {
  name = name || 'quantity'

  switch (variant) {
    case 'dropdown':
      return <DropdownQuantitySelector minValue={1} {...restProps} name={name} selectProps={selectProps} />
    case 'native':
      return null
    default:
      return <CounterQuantitySelector minValue={0} {...restProps} name={name} selectProps={selectProps} />
  }
}
