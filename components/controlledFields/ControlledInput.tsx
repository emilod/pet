import { Field, InlineMessage } from '@overdose/components'
import { Controller } from 'react-hook-form'

import { Input } from '../Input/Input'
import { ControlledInputProps } from './declarations/ControlledInput.types'

export const ControlledInput = (props: ControlledInputProps) => {
  const {
    control,
    idSuffix,
    label,
    loading = false,
    disabled,
    name,
    required = false,
    theme,
    defaultValue,
    type = 'text',
    errorMessage = '',
    inputTheme,
    subscribeMessage,
    suffix,
    note = null,
    handleChange,
    handleBlur,
    allowClear,
    onClear,
    validationStatus,
    addAfter,
  } = props

  return (
    <Controller
      name={name}
      control={control}
      rules={{ required }}
      render={({ field: { value, onChange, onBlur, ref }, fieldState: { error } }) => {
        const shouldShowSuffix = !error && value

        return (
          <Field
            theme={theme}
            input={
              <Input
                ref={ref}
                disabled={loading || disabled}
                onChange={(e) => {
                  onChange(e)
                  handleChange?.(e)
                }}
                onBlur={(e) => {
                  onBlur()
                  handleBlur?.(e)
                }}
                value={value}
                name={name}
                type={type}
                defaultValue={defaultValue}
                idSuffix={idSuffix}
                withLabel
                label={required ? `${label}*` : label}
                validationStatus={validationStatus ?? error ? 'error' : null}
                theme={inputTheme}
                suffix={<div hidden={!shouldShowSuffix}>{suffix}</div>}
                note={note}
                allowClear={allowClear}
                onClear={onClear}
                addAfter={addAfter}
              />
            }
            message={
              <div>
                {error && <InlineMessage message={errorMessage || error.message} type="error" />}
                {!error && subscribeMessage?.message && (
                  <InlineMessage message={subscribeMessage.message} type={subscribeMessage.type} />
                )}
              </div>
            }
          />
        )
      }}
    />
  )
}
