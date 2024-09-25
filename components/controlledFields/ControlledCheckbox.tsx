/* eslint-disable import/no-extraneous-dependencies */
import { Field, InlineMessage } from '@overdose/components'
import { Controller } from 'react-hook-form'

import { Checkbox } from '../Checkbox/Checkbox'
import { ControlledCheckboxProps } from './declarations/ControlledCheckboxProps.types'

export const ControlledCheckbox = ({
  name,
  idSuffix = '',
  required = false,
  control,
  theme = {},
  checkboxTheme = {},
  label,
  handleCheckboxChange = () => {},
  errorMessage = '',
}: ControlledCheckboxProps) => {
  return (
    <Controller
      control={control}
      name={name}
      rules={{ required }}
      render={({ field: { value, ref, onChange }, fieldState: { error } }) => {
        return (
          <Field
            theme={theme}
            input={
              <Checkbox
                ref={ref}
                idSuffix={idSuffix}
                onChange={(value, e) => {
                  onChange(value)
                  handleCheckboxChange(value, e)
                }}
                checked={value}
                theme={checkboxTheme}
                label={label}
              />
            }
            message={
              error ? <InlineMessage message={errorMessage !== '' ? errorMessage : error.message} type="error" /> : null
            }
          />
        )
      }}
    />
  )
}
