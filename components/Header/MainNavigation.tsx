import React from 'react'

import styles from './MainNavigation.module.css'

type NavItem = {
  label: string
  isActive?: boolean
}

type MainNavigationProps = {
  navItems: NavItem[]
}

const MainNavigation: React.FC<MainNavigationProps> = ({ navItems }) => (
  <nav className={`${styles.nav} max-md:${styles.navMd}`}>
    <div className={`${styles.nav} max-md:${styles.navMd}`}>
      {navItems.map((item, index) => (
        <div key={index} className={`${styles.navItem} ${item.isActive ? styles.navItemActive : ''}`}>
          {item.label}
        </div>
      ))}
      <div className={styles.navCenter}>
        <div className={styles.aiButton}>
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/71ca0f987e6d527380b2d3867a008af66f709b629f2636dea18a91e2346f1da3?placeholderIfAbsent=true&apiKey=57c9b214dd624e2d8f39c71851e719ca"
            alt=""
            className={styles.aiIcon}
          />
          <div className={styles.aiText}>PetAI</div>
        </div>
      </div>
    </div>
  </nav>
)

export default MainNavigation
