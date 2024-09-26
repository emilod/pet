import { InputNumber } from '@overdose/components'

import { LoadingSpinner } from '..'

import { QuantitySelectorProps } from './declarations/QuantitySelector.types'
import styles from './styles/CounterQuantitySelector.module.css'

export const CounterQuantitySelector = ({
  disabled,
  defaultValue = 0,
  minValue = 0,
  maxValue,
  onChange,
  isLoading,
  step,
  name,
  dataTestId,
}: QuantitySelectorProps) => {
  return (
    <div className={styles.wrapper} data-test-id={dataTestId}>
      {!isLoading ? (
        <InputNumber
          theme={{
            button: styles.secondaryButtons,
            // after: styles.after, !!TODO commented because of error
            number_input: styles.quantityInput,
            root_button: styles.hasAddons,
          }}
          name={name}
          disabled={disabled}
          mode="button"
          size="xs"
          idSuffix="_CounterQuantitySelector"
          step={step}
          onChange={onChange}
          defaultValue={defaultValue}
          min={minValue}
          max={maxValue}
        />
      ) : (
        <LoadingSpinner />
      )}
    </div>
  )
}
