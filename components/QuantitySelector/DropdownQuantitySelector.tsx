import { Compose, composeThemeFromProps } from '@css-modules-theme/react'
import { Option, Select } from '@overdose/components'
import { useState } from 'react'

import { QuantitySelectorProps } from './declarations/QuantitySelector.types'
import defaultStyles from './styles/DropdownQuantitySelector.module.css'
import { createOptions } from './utils/createOptions'

export const DropdownQuantitySelector = ({
  minValue = 1,
  maxValue = 10,
  onChange,
  selectProps,
  dataTestId,
  defaultValue,
  theme,
}: QuantitySelectorProps) => {
  const styles = composeThemeFromProps(defaultStyles, { theme }, { compose: Compose.Merge })

  const options = createOptions(minValue, maxValue)
  const [value, setValue] = useState(defaultValue ? defaultValue?.toString() : minValue.toString())
  const handleChange = (value) => {
    setValue(value)
    if (onChange) onChange(parseInt(value))
  }

  return (
    <Select
      theme={{
        root: styles.dropdown_select,
      }}
      defaultValue={value}
      onChange={handleChange}
      {...selectProps}
      data-test-id={dataTestId}>
      {options.map((option, index) => (
        <Option
          key={index}
          value={option.key}
          label={option.content}
          theme={{
            option_selected: styles.option_selected,
            option_hover: styles.option_hover,
          }}>
          {option.content}
        </Option>
      ))}
    </Select>
  )
}
