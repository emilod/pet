import { Compose, composeThemeFromProps } from '@css-modules-theme/react'
import { Typography } from '@overdose/components'
import clsx from 'clsx'

import { ProductOptionsSelectorTitlesProps } from './declarations/ProductOptionsSelectorTitles.types'
import defaultStyles from './ProductOptionsSelectorTitles.module.css'

export const ProductOptionsSelectorTitles = ({
  options,
  value: currentValue,
  label,
  onFocus,
  onBlur,
  onChange,
  name,
  helpText,
  theme,
  dataTestId,
  helpAction,
}: ProductOptionsSelectorTitlesProps) => {
  const styles = composeThemeFromProps(defaultStyles, { theme }, { compose: Compose.Merge })

  const handleChange = (event, disabled) => {
    if (disabled) return
    onChange && onChange(event)
  }

  return (
    <div data-test-id={dataTestId}>
      <div className={styles.header}>
        <div className={styles.headerTitle}>
          {typeof label === 'string' ? (
            <Typography tag="p" variant="body">
              {label}
            </Typography>
          ) : (
            label
          )}
        </div>
        {helpAction}
      </div>
      <fieldset className={styles.radioInput__wrapper}>
        {options.map(({ value, title, id, disabled }, index) => (
          <div
            key={id}
            className={clsx({
              [styles.radioDisabled]: disabled,
            })}>
            <input
              className={styles.radioInput}
              type="checkbox"
              name={name}
              value={value}
              id={value + index}
              onChange={(event) => {
                handleChange(event, disabled)
              }}
              checked={value === currentValue}
              onFocus={onFocus}
              onBlur={onBlur}
            />
            <label className={clsx(styles.label, { [styles.disabledLabel]: disabled })} htmlFor={value + index}>
              <Typography tag="span" variant="body">
                {title}
              </Typography>
            </label>
          </div>
        ))}
      </fieldset>
      <div className={styles.helpText}>
        {helpText &&
          (typeof helpText === 'string' ? (
            <Typography tag="p" variant="caption">
              {helpText}
            </Typography>
          ) : (
            helpText
          ))}
      </div>
    </div>
  )
}
