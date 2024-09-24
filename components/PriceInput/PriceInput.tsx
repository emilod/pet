import { useState } from 'react'

import { Input } from '../Input/Input'
import styles from './PriceInput.module.css'
import { Range } from './Range'

const MIN_LIMIT = 0
const MAX_LIMIT = 10000
export const PriceInput = () => {
  const [price, setPrice] = useState({
    start: '$10',
    end: '$2000',
  })

  const handleMinValueChange = (event) => {
    const endPrice = Number(price.end.slice(1))
    const newValue = Math.min(Number(event.target.value), endPrice - 1)
    setPrice((prevState) => ({ ...prevState, start: `$${newValue}` }))
  }

  const handleMaxValueChange = (event) => {
    const startPrice = Number(price.start.slice(1))
    const newValue = Math.max(Number(event.target.value), startPrice + 1)
    setPrice((prevState) => ({ ...prevState, end: `$${newValue}` }))
  }

  const onMinValueChange = (value) => {
    if (value[0] !== '$') {
      value = `$${value}`
    }
    setPrice((prevState) => ({ ...prevState, start: value }))
  }

  const onMaxValueChange = (value) => {
    // TODO: check if the max value is smaller than the min value
    if (value[0] !== '$') {
      value = `$${value}`
    }
    setPrice((prevState) => ({ ...prevState, end: value }))
  }

  return (
    <div>
      <div className={styles.inputs_wrapper}>
        <Input
          theme={{ input: styles.input, inner: styles.input_inner }}
          value={String(price.start)}
          onChange={onMinValueChange}
        />
        <div className={styles.input_line} />
        <Input
          theme={{ input: styles.input, inner: styles.input_inner }}
          value={price.end}
          onChange={onMaxValueChange}
        />
      </div>

      <Range
        handleMinValueChange={handleMinValueChange}
        handleMaxValueChange={handleMaxValueChange}
        minValue={Number(price.start.slice(1))}
        maxValue={Number(price.end.slice(1))}
        minRange={MIN_LIMIT}
        maxRange={MAX_LIMIT}
      />
    </div>
  )
}
