import { Compose, composeThemeFromProps } from '@css-modules-theme/react'
import clsx from 'clsx'
import { Loader } from 'react-feather'

import { LoadingSpinnerProps } from './declarations/LoadingSpinner.types'
import defaultStyles from './LoadingSpinner.module.css'

export const LoadingSpinner = ({ iconProps, isRelative, theme, dataTestId, backdrop }: LoadingSpinnerProps) => {
  const styles = composeThemeFromProps(defaultStyles, { theme }, { compose: Compose.Merge })

  return (
    <div className={clsx(styles.wrapper, { [styles.wrapperRelative]: isRelative })} data-test-id={dataTestId}>
      {backdrop && <div className={styles.container} />}
      <Loader className={clsx(styles.loading, { [styles.loadingRelative]: isRelative })} {...iconProps} />
    </div>
  )
}
