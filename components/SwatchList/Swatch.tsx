import { Tooltip } from '@overdose/components'
import clsx from 'clsx'

import { SwatchProps } from './declarations/SwatchList.types'
import styles from './Swatch.module.css'

export const Swatch = ({
  item: { label, value, data },
  type,
  shape = 'rounded',
  size,
  displayTooltip,
  checked,
  disabled,
  dataTestId,
  onClick,
  onKeyDown,
}: SwatchProps) => {
  let swatchStyle = {}
  if (type !== 'text' && data) {
    const { color, thumbnails } = data
    let swatchValue = ''
    if (thumbnails) {
      swatchValue = `url("${thumbnails}")`
    } else {
      swatchValue = color
    }
    swatchStyle = {
      '--swatch-bg': swatchValue,
    }
  }
  return (
    <button
      onClick={onClick}
      onKeyDown={onKeyDown}
      data-value={value}
      className={clsx(
        styles.swatch,
        styles[`swatchType_${type}`],
        styles[`swatchShape_${shape}`],
        styles[`swatchSize_${size}`],
        {
          [styles.swatchSelected]: checked,
          [styles.swatchDisabled]: disabled,
        },
      )}
      title={label}
      type="button"
      data-text-id={dataTestId}>
      <span className={styles.swatchInner} style={swatchStyle}>
        {displayTooltip &&
          (type === 'text' ? (
            label
          ) : (
            <Tooltip mini content={<span>{label}</span>}>
              <span>{label}</span>
            </Tooltip>
          ))}
      </span>
    </button>
  )
}
