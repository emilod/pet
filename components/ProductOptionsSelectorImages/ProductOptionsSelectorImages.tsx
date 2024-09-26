import { Compose, composeThemeFromProps } from '@css-modules-theme/react'
import { Typography } from '@overdose/components'
import { useMemo } from 'react'

import { ProductOptionsSelectorImagesProps } from './declarations/ProductOptionsSelectorImages.types'
import defaultStyles from './ProductOptionsSelectorImages.module.css'

export const ProductOptionsSelectorImages = ({
  options,
  value,
  label,
  onFocus,
  onBlur,
  onChange,
  name,
  theme,
  dataTestId,
}: ProductOptionsSelectorImagesProps) => {
  const styles = composeThemeFromProps(defaultStyles, { theme }, { compose: Compose.Merge })
  const isChecked = (itemValue: string) => {
    return itemValue === value
  }
  const valueTitle = useMemo(() => options.find((option) => option.value === value)?.title, [options, value])

  return (
    <div data-test-id={dataTestId}>
      <div className={styles.header}>
        {typeof label === 'string' ? (
          <Typography tag="p" variant="body" theme={{ root: styles.value }}>
            {`${label} ${valueTitle}`}
          </Typography>
        ) : (
          <Typography tag="p" variant="body" theme={{ root: styles.value }}>
            {label}
          </Typography>
        )}
      </div>
      <fieldset className={styles.radioInput__wrapper}>
        {options.map((option, index) => (
          <div key={option.id}>
            <input
              className={styles.radioInput}
              type="checkbox"
              name={name}
              value={option.value}
              id={option.value + index}
              onChange={onChange}
              checked={isChecked(option.value)}
              onFocus={onFocus}
              onBlur={onBlur}
            />
            <label className={styles.label} htmlFor={option.value + index}>
              {option.image}
            </label>
          </div>
        ))}
      </fieldset>
    </div>
  )
}
