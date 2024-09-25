import { Typography } from '@overdose/components'
import clsx from 'clsx'

import Cross from '../../assets/icons/Cross'
import TickSm from '../../assets/icons/TickSm'
import { useStrengthIndicator } from './hooks/useStrengthIndicator'
import styles from './styles/InputPassword.module.css'

const rules = {
  letter: 'Must have at least one letter',
  number: 'Must have at least one number',
  length: 'Must have at least 8 characters',
}

export const StrengthIndicator = ({ password }) => {
  const { strength, isRuleValid } = useStrengthIndicator({ password })

  return (
    <div className={clsx(styles.indicator, strength.class)}>
      <Typography tag="span" variant="label">
        Password strength:{' '}
        <span
          className={clsx({
            [styles[`${strength?.value?.toLowerCase()}`]]: strength?.value,
          })}>
          {strength?.value}
        </span>
      </Typography>
      <div className={styles.rules}>
        {Object.entries(rules).map(([key, value]) => {
          return (
            <div key={key} className={styles.rule}>
              {isRuleValid(key) ? <TickSm /> : <Cross />}
              <Typography tag="span" variant="label" theme={{ root: styles.errorMessage }}>
                {value}
              </Typography>
            </div>
          )
        })}
      </div>
    </div>
  )
}
