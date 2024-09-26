import { useCallback, useEffect, useMemo, useState } from 'react'

import styles from '../InputPassword.module.css'

const VALID_PASSWORD_LENGTH = 8
enum Scores {
  Weak = 0,
  SlightlyWeak = 1,
  Medium = 2,
  Strong = 3,
  VeryStrong = 4,
}

const defaultStrength = {
  value: 'Weak',
  class: styles.weak,
}

export const useStrengthIndicator = ({ password }) => {
  const [strength, setStrength] = useState(defaultStrength)

  const passwordRules = useMemo(() => {
    return {
      letter: /[a-zA-Z]/.test(password),
      number: /[0-9]/.test(password),
      length: password.length >= VALID_PASSWORD_LENGTH,
    }
  }, [password])

  const calculateStrength = useCallback(async () => {
    const { zxcvbn } = await import('@zxcvbn-ts/core')
    const { score } = await zxcvbn(password)

    switch (score) {
      case Scores.Weak:
      case Scores.SlightlyWeak:
        return defaultStrength
      case Scores.Medium:
        return {
          value: 'Medium',
          class: styles.medium,
        }
      case Scores.Strong:
        return {
          value: 'Strong',
          class: styles.strong,
        }
      case Scores.VeryStrong:
        return {
          value: 'Very Strong',
          class: styles.very_strong,
        }
      default:
        return defaultStrength
    }
  }, [password])

  useEffect(() => {
    if (password) {
      calculateStrength().then(setStrength)
    }
  }, [calculateStrength, password, passwordRules])

  return {
    strength,
    isRuleValid: (key) => {
      return passwordRules[key]
    },
  }
}
