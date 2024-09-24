import React from 'react'

import styles from './UserActions.module.css'

type UserActionsProps = {
  cartItemCount: number
}

const UserActions: React.FC<UserActionsProps> = ({ cartItemCount }) => (
  <div className={styles.userActions}>
    <div className={styles.iconContainer}>
      <div className={styles.icon}>
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/967fbacdec02cab64c7878492080d5306cd49924780b83026d3c63c8cd506b47?placeholderIfAbsent=true&apiKey=57c9b214dd624e2d8f39c71851e719ca"
          alt=""
          className={styles.iconImage}
        />
      </div>
      <div className={styles.icon}>
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/5fb14aae52431347ca6ea4a76ec5d2faa448906cf3d1cdcfb109335f5b802796?placeholderIfAbsent=true&apiKey=57c9b214dd624e2d8f39c71851e719ca"
          alt=""
          className={styles.iconImageRound}
        />
      </div>
    </div>
    {cartItemCount > 0 && <div className={styles.cartItemCount}>{cartItemCount}</div>}
  </div>
)

export default UserActions
