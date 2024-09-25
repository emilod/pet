import { Compose, composeThemeFromProps } from '@css-modules-theme/react'
import { Input as BaseInput, Typography } from '@overdose/components'
import React, { forwardRef } from 'react'

import defaultStyles from './styles/Input.module.css'

export const Input = forwardRef<HTMLInputElement, any>((props, ref) => {
  const { note, theme, ...rest } = props

  const styles = composeThemeFromProps(defaultStyles, { theme }, { compose: Compose.Merge })

  const noteElement =
    typeof note === 'string' ? (
      <Typography variant="body" tag="span" theme={{ root: styles.note }}>
        {note}
      </Typography>
    ) : (
      note
    )

  return (
    <>
      <BaseInput theme={styles} ref={ref} {...rest} />
      {noteElement}
    </>
  )
})
