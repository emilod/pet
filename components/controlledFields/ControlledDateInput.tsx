import { Field, InlineMessage, Input } from '@overdose/components'
import React from 'react'
import { ArrowDown } from 'react-feather'
import { Controller } from 'react-hook-form'

import { ControlledDateInputProps } from './declarations/ControlledDateInput.types'
import styles from './styles/ControlledDateInput.module.css'

export const ControlledDateInput = ({
  control,
  idSuffix,
  label,
  loading = false,
  name,
  required = false,
  theme,
  defaultValue,
  errorMessage = '',
}: ControlledDateInputProps) => {
  return (
    <Controller
      name={name}
      control={control}
      rules={{ required }}
      render={({ field: { value, onChange, ref }, fieldState: { error } }) => {
        return (
          <Field
            theme={theme}
            input={
              <Input
                type="date"
                ref={ref}
                disabled={loading}
                onChange={onChange}
                value={value}
                name={name}
                defaultValue={defaultValue}
                idSuffix={idSuffix}
                withLabel
                label={label}
                validationStatus={error ? 'error' : null}
                suffix={<ArrowDown className={styles.dropdownIcon} />}
                theme={{ box: styles.dateBox, input: styles.dateInput, label: styles.dateLabel, suffix: styles.suffix }}
              />
            }
            message={
              error && (
                <InlineMessage message={errorMessage !== '' ? errorMessage : error.message} type="error" showIcon />
              )
            }
          />
        )
      }}
    />
  )
}
