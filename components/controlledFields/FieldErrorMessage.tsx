import { InlineMessage } from '@overdose/components'
import React from 'react'

import { FieldErrorMessageProps } from './declarations/FieldErrorMessage.types'
import styles from './styles/ControlledField.module.css'

export const FieldErrorMessage = ({ error }: FieldErrorMessageProps) =>
  error ? (
    <div className={styles.errorWrapper}>
      <InlineMessage message={error.message} type="error" showIcon />
    </div>
  ) : null
