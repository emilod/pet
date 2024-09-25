import { Compose, composeThemeFromProps } from '@css-modules-theme/react'
import { Select as BaseSelect, SelectProps as BaseSelectProps, Option, Typography } from '@overdose/components'
import { SelectHandle } from '@overdose/components/build/ts/latest/src/components/select/declarations/Select.types'
import React, { forwardRef, useDeferredValue, useMemo, useState } from 'react'

import { SelectOption, SelectProps } from './declarations/Select.types'
import defaultStyles from './Select.module.css'

const checkIfPartOfString = (text: string, query: string) => {
  const words = query?.split(' ')
  for (const word of words) {
    if (!text?.toLowerCase().includes(word?.toLowerCase())) {
      return false
    }
  }
  return true
}

const Component = forwardRef<SelectHandle, BaseSelectProps & SelectProps>(
  (
    {
      options,
      notFoundContent = '',
      onClickNotFound,
      customOptionMapper,
      notFoundQueryLength = 0,
      alwaysShowNotFoundContent,
      theme,
      loading,
      ...props
    },
    ref,
  ) => {
    const [query, setQuery] = useState('')
    const deferredQuery = useDeferredValue(query)
    const styles = composeThemeFromProps(defaultStyles, { theme }, { compose: Compose.Merge })

    const renderText = (text) => {
      if (!deferredQuery) {
        return text
      }
      const index = text?.toLowerCase().indexOf(deferredQuery?.toLocaleLowerCase())
      if (index >= 0 && deferredQuery.length > 0) {
        const start = text.substring(0, index)
        const center = text.substring(index, index + deferredQuery.length)
        const end = text.substring(index + deferredQuery.length)
        return (
          <span>
            {start}
            <strong>{center}</strong>
            {end}
          </span>
        )
      }
      return <span>{text}</span>
    }

    const handleSearch = (value, reason) => {
      setQuery(value)
      props.onSearch?.(value, reason)
    }

    const filteredOptions = useMemo(
      () =>
        options?.length !== 0
          ? options?.filter((option: SelectOption) => !option.hidden || option.value === props.value) ?? []
          : [],
      [options, props.value],
    )

    const virtualListItems = filteredOptions
      // no need to show selected option in the dropdown if it's not in the search input
      ?.filter((option) => {
        if (
          query &&
          props?.value &&
          typeof option === 'object' &&
          !checkIfPartOfString(option?.value?.toString(), query)
        ) {
          return option?.value?.toString() !== props?.value
        }
        return true
      })
      ?.map(
        customOptionMapper ??
          ((option: SelectOption) => {
            return (
              <Option
                theme={{
                  option_hover: styles.option_hover,
                  option_selected: styles.option_selected,
                  option: styles.option,
                  option_empty: styles.option_hidden,
                }}
                value={option.value}
                hidden={option.hidden}
                key={option.value}
                label={option?.label}>
                {renderText(option?.label)}
              </Option>
            )
          }),
      )

    const needToHideNotFound = useMemo(() => {
      if (alwaysShowNotFoundContent) {
        return false
      }
      if (!notFoundContent) {
        return true
      }
      if (virtualListItems?.length > 0) {
        return true
      }
      if (!query || loading || query.length < notFoundQueryLength) {
        return true
      }
    }, [alwaysShowNotFoundContent, notFoundContent, virtualListItems?.length, query, loading, notFoundQueryLength])

    const notFoundComponent = (
      <Typography
        hidden={needToHideNotFound}
        key="notFound"
        onClick={onClickNotFound}
        theme={{ root: theme?.option_empty ?? styles.notFound }}>
        {notFoundContent}
      </Typography>
    )

    const virtualListData = [...virtualListItems, notFoundComponent]

    return (
      <BaseSelect
        theme={{
          ...styles,
        }}
        ref={ref}
        {...props}
        options={filteredOptions}
        virtualListProps={{
          data: virtualListData,
        }}
        onSearch={handleSearch}>
        {props?.children}
        <div hidden={!notFoundContent || !query}>{notFoundComponent}</div>
      </BaseSelect>
    )
  },
)
export const Select = React.memo(Component)
