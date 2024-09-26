import clsx from 'clsx'
import { useState } from 'react'
import { Search } from 'react-feather'

import { Check } from '../../assets/icons/Check'
import { ControlledSelect } from '../controlledFields'
import { AddressLocatorProps } from './declarations/AddressLocator.types'
import { useGoogleApiAddressLocator } from './hooks/useGoogleApiAddressLocator'
import styles from './styles/AddressLocator.module.css'

export const AddressLocator = ({
  idPrefix = '',
  handleAddressChange,
  handleEnterManually,
  availableRegions,
  control,
  isRequired,
  notFoundContent = 'Can’t find your address? Click here to enter manually',
  defaultValue,
  showAddressLocatorError = false,
}: AddressLocatorProps) => {
  const { predictions, selectedValue, handleSearch, handleChange, setPredictions, clearRef } =
    useGoogleApiAddressLocator({
      handleAddressChange,
      availableRegions,
      defaultValue,
    })

  const [key, setKey] = useState(Math.random().toString(16))

  return (
    <ControlledSelect
      control={control}
      key={key}
      id={`${idPrefix}address-locator`}
      name="address-locator"
      label="Enter Address*"
      showAddressLocatorError={showAddressLocatorError}
      selectTheme={{
        list: styles.list,
        label: styles.label,
        clear: styles.clearIcon,
        root: clsx(styles.select, { [styles.select_error]: showAddressLocatorError }),
        focused: showAddressLocatorError ? styles.select_error : styles.focused,
      }}
      onBlur={() => {
        if (selectedValue) {
          setPredictions([selectedValue])
        } else {
          setPredictions([])
        }
        setKey(Math.random().toString(16))
      }}
      defaultValue={defaultValue}
      filterOption={() => true}
      required={isRequired}
      showSearch={{
        retainInputValue: true,
      }}
      onSearch={handleSearch}
      alwaysShowNotFoundContent
      onSelectChange={handleChange}
      notFoundContent={notFoundContent}
      allowClear
      errorMessage="This field is required"
      clearIcon={<div ref={clearRef} />}
      arrowIcon={
        <>
          <div hidden={!!selectedValue}>
            <Search width={14} height={14} />
          </div>
          <div hidden={!selectedValue}>
            <Check />
          </div>
        </>
      }
      options={predictions}
      onClickNotFound={() => {
        document.getElementById('main-content')?.click()
        document.getElementById(`${idPrefix}_select`)?.click()
        handleEnterManually?.()
      }}
    />
  )
}
