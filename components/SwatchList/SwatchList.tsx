import { Radio, RadioGroup, Tooltip, Typography } from '@overdose/components'
import { useState } from 'react'
import { Info } from 'react-feather'

import { SwatchListProps } from './declarations/SwatchList.types'
import { Swatch } from './Swatch'
import styles from './SwatchList.module.css'

export const SwatchList = ({
  options,
  defaultValue,
  label,
  onChange,
  type = 'text',
  shape = 'square',
  size = 'md',
  hint,
  hintPosition = 'right',
  dataTestId,
}: SwatchListProps) => {
  const [selected, setSelected] = useState(defaultValue)

  return (
    <div className={styles.wrapper} data-test-id={dataTestId}>
      <div className={styles.swatchListHeading}>
        {label && (
          <Typography tag="span" theme={{ root: styles.labelStyle }} variant="body">
            {label}: {options?.find((item) => item.value === selected)?.label || ''}
          </Typography>
        )}
        {hint && (
          <Tooltip position={hintPosition} mini content={hint}>
            <span className={styles.hintIcon}>
              <Info />
            </span>
          </Tooltip>
        )}
      </div>
      <RadioGroup
        value={selected as string}
        name="swatch-list"
        onChange={(value, event) => {
          setSelected(value as string)
          onChange && onChange(value, event)
        }}>
        {options &&
          options?.map((item, index) => {
            return (
              <Radio theme={{ root: styles.swatchLabel }} key={index} value={item.value}>
                {({ checked, onChange }) => {
                  return (
                    <Swatch
                      onClick={(e) => {
                        onChange(item.value, e)
                      }}
                      onKeyDown={(e) => {
                        onChange(item.value, e)
                      }}
                      size={size}
                      shape={shape}
                      item={item}
                      type={type}
                      checked={checked}
                    />
                  )
                }}
              </Radio>
            )
          })}
      </RadioGroup>
    </div>
  )
}
