import { Compose, composeThemeFromProps } from '@css-modules-theme/react'

import { SwatchList } from '..'

import { ProductOptionsSelectorSwatchesProps } from './declarations/ProductOptionsSelectorSwatches.types'
import defaultStyles from './ProductOptionsSelectorSwatches.module.css'

export const ProductOptionsSelectorSwatches = ({
  options,
  label,
  onChange,
  onBlur,
  onFocus,
  value,
  theme,
  dataTestId,
}: ProductOptionsSelectorSwatchesProps) => {
  const styles = composeThemeFromProps(defaultStyles, { theme }, { compose: Compose.Merge })

  return (
    <div className={styles.wrapper} onBlur={onBlur} onFocus={onFocus} data-test-id={dataTestId}>
      <SwatchList
        shape="round"
        type="color"
        size="sm"
        options={options}
        defaultValue={value ?? options?.[0]?.value}
        displayTooltip
        onChange={onChange}
        label={label}
      />
    </div>
  )
}
