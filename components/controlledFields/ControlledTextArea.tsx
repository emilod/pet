import { Field, InlineMessage } from '@overdose/components'
import { Controller } from 'react-hook-form'

import { Textarea } from '../textarea/Textarea'
import { ControlledTextAreaProps } from './declarations/ControlledTextArea.types'

export const ControlledTextArea = ({
  name,
  idSuffix,
  label,
  required = false,
  loading = false,
  showWordLimit = true,
  limitPosition = 'default',
  control,
  theme,
  maxLength,
  placeholder,
  textAreaTheme,
  autoSize = true,
  showLabel = true,
  onKeyDown,
  onKeyUp,
}: ControlledTextAreaProps) => {
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
              <Textarea
                ref={ref}
                disabled={loading}
                onChange={onChange}
                showWordLimit={showWordLimit}
                maxLength={maxLength}
                value={value}
                name={name}
                idSuffix={idSuffix}
                label={label}
                placeholder={placeholder}
                limitPosition={limitPosition}
                validationStatus={error ? 'error' : null}
                theme={textAreaTheme}
                autoSize={autoSize}
                onKeyDown={onKeyDown}
                onKeyUp={onKeyUp}
                showLabel={showLabel}
              />
            }
            message={error && <InlineMessage message={error?.message} type="error" showIcon />}
          />
        )
      }}
    />
  )
}

ControlledTextArea.displayName = 'ControlledTextArea'
