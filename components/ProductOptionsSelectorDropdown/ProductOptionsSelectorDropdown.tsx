/* eslint-disable react/no-unstable-nested-components */
import { Compose, composeThemeFromProps } from '@css-modules-theme/react'
import { Option, Select, Tooltip, Typography } from '@overdose/components'
import clsx from 'clsx'
import { useState } from 'react'
import { Info } from 'react-feather'

import { ProductOptionsSelectorDropdownProps } from './declarations/ProductOptionsSelectorDropdown.types'
import defaultStyles from './styles/ProductOptionsDropdown.module.css'

export const ProductOptionsSelectorDropdown = ({
  options,
  value,
  label,
  name,
  placeholder,
  onChange,
  onBlur,
  onFocus,
  infoText,
  helpText,
  helpAction,
  theme,
  dataTestId,
}: ProductOptionsSelectorDropdownProps) => {
  const styles = composeThemeFromProps(defaultStyles, { theme }, { compose: Compose.Merge })
  const [localValue, setLocalValue] = useState(options ? value : '0')

  const handleOnchange = (selectedValue, option) => {
    const value = options?.filter((opt) => opt.value === selectedValue)[0]?.name
    setLocalValue(value)
    if (onChange) onChange(selectedValue, option)
  }

  const HelpText = ({ value = '', text }) => (
    <Typography tag="span" variant="label" theme={{ root: styles.helpText }}>
      {value !== '' ? (
        <Tooltip position="bottom" trigger="hover" content={text}>
          {text}
        </Tooltip>
      ) : (
        <span>{text}</span>
      )}
    </Typography>
  )

  const wrapperLabel = label && (
    <div className={styles.wrapperLabel}>
      <Typography variant="body" tag="span" theme={{ root: styles.label }}>
        {label}
      </Typography>
      {infoText && (
        <Tooltip position="right" trigger="hover" content={infoText}>
          <Info className={styles.icon} />
        </Tooltip>
      )}
    </div>
  )

  return (
    <div className={styles.wrapper} data-test-id={dataTestId}>
      {wrapperLabel}
      <Select
        triggerProps={{
          useAnchorWidth: true,
        }}
        placeholder={placeholder}
        defaultValue={localValue}
        onChange={handleOnchange}
        onBlur={onBlur}
        onFocus={onFocus}
        hasId={false}
        name={name}
        theme={{ root: styles.select, suffix: styles.suffix }}>
        {options ? (
          options.map((option, index) => {
            const { value: optionValue, disabled, name, prefix, suffix } = option
            return (
              <Option
                key={`${value}_${index}`}
                disabled={disabled}
                value={optionValue}
                label={name}
                theme={{
                  option_disabled: clsx({ [styles.disabled]: disabled }),
                  option_selected: styles.active,
                }}>
                <div className={clsx(styles.option)}>
                  <Typography tag="span" variant="body">
                    {prefix}
                    {name}
                  </Typography>
                  {suffix && (
                    <Typography tag="span" variant="body">
                      {suffix}
                    </Typography>
                  )}
                </div>
              </Option>
            )
          })
        ) : (
          <Option value="0" disabled label="">
            {placeholder}
          </Option>
        )}
      </Select>

      <div className={styles.infoContainer}>
        {helpText && <HelpText text={helpText} />}

        {helpAction}
      </div>
    </div>
  )
}
