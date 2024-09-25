import { Field, InlineMessage } from '@overdose/components'
import { useState } from 'react'
import { Controller } from 'react-hook-form'

import { InputPassword } from '../InputPassword/InputPassword'
import { ControlledInputPasswordProps } from './declarations/ControlledInputPassword.types'

export const ControlledInputPassword = ({
  control,
  idSuffix,
  label,
  placeholder,
  loading = false,
  name,
  required = false,
  visibilityToggle = false,
  theme,
  defaultValue,
  inputTheme,
  suffix,
  showIndicator,
  strength,
}: ControlledInputPasswordProps) => {
  const [isFocused, setIsFocused] = useState(false)
  return (
    <Controller
      name={name}
      control={control}
      rules={{ required }}
      render={({ field: { value, onChange, ref }, fieldState: { error } }) => {
        const hasValue = value?.length > 0
        const showErrorIndicator = showIndicator && (isFocused || (hasValue && Boolean(error)))

        return (
          <Field
            theme={theme}
            input={
              <InputPassword
                visibilityToggle={visibilityToggle}
                ref={ref}
                disabled={loading}
                onChange={onChange}
                onFocus={() => setIsFocused(true)}
                onBlur={() => setIsFocused(false)}
                value={value}
                name={name}
                placeholder={placeholder}
                defaultValue={defaultValue}
                idSuffix={idSuffix}
                withLabel
                label={required ? `${label}*` : label}
                validationStatus={error ? 'error' : null}
                theme={inputTheme}
                suffix={suffix}
                showIndicator={showErrorIndicator}
                strength={strength}
                visibility={undefined}
              />
            }
            message={
              <div>
                {(!showIndicator || !hasValue) && error && <InlineMessage message={error.message} type="error" />}
              </div>
            }
          />
        )
      }}
    />
  )
}
