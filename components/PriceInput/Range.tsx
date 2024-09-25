import { useEffect, useRef } from 'react'

import styles from './Range.module.css'

export const Range = ({ minRange, maxRange, minValue, maxValue, handleMinValueChange, handleMaxValueChange }) => {
  const sliderRef = useRef(null)

  useEffect(() => {
    if (sliderRef.current) {
      const percentMin = ((minValue - minRange) / (maxRange - minRange)) * 100
      const percentMax = ((maxValue - minRange) / (maxRange - minRange)) * 100
      sliderRef.current.style.background = `linear-gradient(to right, #f5f5f5 ${percentMin}%, #e5e5e5 ${percentMin}%, #e5e5e5 ${percentMax}%, #f5f5f5 ${percentMax}%)`
    }
  }, [minValue, maxValue, minRange, maxRange])

  return (
    <div className={styles.wrapper}>
      <input
        type="range"
        className={`${styles.thumb} ${styles.thumb_left}`}
        min={minRange}
        max={maxRange}
        value={minValue}
        onChange={handleMinValueChange}
        style={{
          position: 'absolute',
          zIndex: minValue > maxRange - 100 ? 5 : 1,
        }}
      />
      <input
        type="range"
        className={`${styles.thumb} ${styles.thumb_right}`}
        min={minRange}
        max={maxRange}
        value={maxValue}
        onChange={handleMaxValueChange}
      />
      <div ref={sliderRef} className={styles.slider_track} />
      <div className={styles.limits}>
        <span>${minRange}</span>
        <span>${maxRange}</span>
      </div>
    </div>
  )
}
