import { Compose, composeThemeFromProps } from '@css-modules-theme/react'
import { InputPassword as BaseInputPassword } from '@overdose/components'
import { useEffect, useRef, useState } from 'react'

import defaultStyles from './InputPassword.module.css'
import { StrengthIndicator } from './StrengthIndicator'

export const InputPassword = ({ visibility: defaultVisible, ...props }) => {
  const { showIndicator = false, theme, ...rest } = props
  const styles = composeThemeFromProps(defaultStyles, { theme }, { compose: Compose.Merge })
  const [visibility, setVisibility] = useState(defaultVisible)
  const inputRef = useRef(null)

  useEffect(() => {
    setVisibility(defaultVisible)
  }, [defaultVisible])

  const toggleVisibility = () => {
    setVisibility((prev) => !prev)
  }

  // useEffect(() => {
  //   const { current } = inputRef
  //   if (current) {
  //     const { value } = current
  //     // Set caret position to the end
  //     setTimeout(() => {
  //       current.setSelectionRange(value.length, value.length)
  //     }, 0)
  //   }
  // }, [visibility])

  return (
    <div className={styles.root}>
      <BaseInputPassword
        theme={{
          focus: styles.focus,
        }}
        {...props}
        ref={inputRef}
        visibility={visibility}
        // suffix={
        //   visibility ? (
        //     <TickedEye className={styles.icon} onClick={toggleVisibility} />
        //   ) : (
        //     <Eye className={styles.icon} onClick={toggleVisibility} />
        //   )
        // }
      />
      {showIndicator && <StrengthIndicator password={rest.value ?? ''} />}
    </div>
  )
}
