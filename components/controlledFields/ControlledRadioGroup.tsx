import { Field, InlineMessage, RadioGroup } from '@overdose/components'
import React from 'react'
import { Controller } from 'react-hook-form'

import { ControlledRadioGroupProps } from './declarations/ControlledRadioGroup.types'

export const ControlledRadioGroup = ({
  name,
  idSuffix,
  required = false,
  control,
  defaultValue,
  options,
  size = 'sm',
  theme,
  children,
}: ControlledRadioGroupProps) => {
  return (
    <Controller
      name={name}
      control={control}
      rules={{ required }}
      render={({ field: { value, onChange }, fieldState: { error } }) => {
        return (
          <Field
            theme={theme}
            input={
              <RadioGroup
                idSuffix={idSuffix}
                value={value}
                onChange={onChange}
                options={options}
                defaultValue={defaultValue}
                size={size}
                name={name}>
                {children}
              </RadioGroup>
            }
            message={error && <InlineMessage message={error.message} type="error" showIcon />}
          />
        )
      }}
    />
  )
}
