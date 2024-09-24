import React from 'react'

import styles from './SubNavigation.module.css'

type NavItem = {
  label: string
  isSpecial?: boolean
  isActive?: boolean
}

type SubNavigationProps = {
  navItems: NavItem[]
}

const SubNavigation: React.FC<SubNavigationProps> = ({ navItems }) => (
  <nav className={`${styles.subNav} max-md:${styles.subNavMd}`}>
    {navItems.map((item, index) => (
      <React.Fragment key={index}>
        {item.isSpecial ? (
          <div className={styles.specialItem}>
            <div className={styles.specialItemInner}>
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/0ea5dd042206c0c9a53f88628b7642fa6263eb5dad2d6cfd50156255ac0c56fb?placeholderIfAbsent=true&apiKey=57c9b214dd624e2d8f39c71851e719ca"
                alt=""
                className={styles.specialIcon}
              />
              <div>{item.label}</div>
            </div>
          </div>
        ) : (
          <div className={`${styles.navItem} ${item.isActive ? styles.navItemActive : ''}`}>{item.label}</div>
        )}
        {index === navItems.length - 2 && <div className={styles.divider} />}
      </React.Fragment>
    ))}
    <div className={styles.newInItem}>
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/94b07fe41012672708c77414af9dccc272d567d32f6a0f65bcd14f2c2fb7dc52?placeholderIfAbsent=true&apiKey=57c9b214dd624e2d8f39c71851e719ca"
        alt=""
        className={styles.newInIcon}
      />
      <div>New In</div>
    </div>
  </nav>
)

export default SubNavigation
