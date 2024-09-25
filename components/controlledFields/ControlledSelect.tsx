import { Field, InlineMessage, SelectProps } from '@overdose/components'
import { Controller } from 'react-hook-form'

import { Select } from '../Select/Select'
import { ControlledSelectProps } from './declarations/ControlledSelect.types'

export const ControlledSelect = ({
  id,
  control,
  name,
  placeholder,
  label,
  idSuffix,
  required = false,
  theme,
  errorMessage = '',
  triggerProps,
  onSelectChange,
  showSearch,
  filterOption,
  children,
  options,
  selectTheme,
  mode,
  onSearch,
  defaultValue,
  popupVisible,
  showAddressLocatorError = false,
  ...rest
}: ControlledSelectProps & Partial<SelectProps>) => {
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
              <Select
                ref={ref}
                id={id}
                mode={mode}
                name={name}
                idSuffix={idSuffix}
                showSearch={showSearch}
                triggerProps={triggerProps}
                placeholder={placeholder}
                label={label}
                onChange={(value) => {
                  onChange(value)
                  onSelectChange?.(value)
                }}
                value={value}
                defaultValue={defaultValue}
                filterOption={filterOption}
                theme={selectTheme}
                validationStatus={error ? 'error' : null}
                options={options}
                onSearch={onSearch}
                popupVisible={popupVisible}
                {...rest}>
                {children}
              </Select>
            }
            message={
              (showAddressLocatorError || error) && (
                <InlineMessage message={errorMessage ?? error.message} type="error" />
              )
            }
          />
        )
      }}
    />
  )
}
