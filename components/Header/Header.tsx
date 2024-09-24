import React from 'react'

import styles from './Header.module.css'
import MainNavigation from './MainNavigation'
import SearchBar from './SearchBar'
import SubNavigation from './SubNavigation'
import TopBanner from './TopBanner'
import UserActions from './UserActions'

const Header: React.FC = () => {
  const topBannerProps = {
    discountText: 'Save up to 30% on your first Repeat Delivery order!',
    locationText: 'Low parasite risk in: Avoca Beach',
    pickupText: 'Pickup from: Select',
    deliveryText: 'Deliver to: Select',
  }

  const mainNavItems = [
    { label: 'Dog', isActive: true },
    { label: 'Cat' },
    { label: 'Other Pets' },
    { label: 'Vet' },
    { label: 'Services' },
  ]

  const subNavItems = [
    { label: 'Special Offers', isSpecial: true },
    { label: 'Puppy' },
    { label: 'Food' },
    { label: 'Treats' },
    { label: 'Health' },
    { label: 'Supplies' },
    { label: 'Breed' },
    { label: 'Seasonal' },
    { label: 'Dog Advice' },
  ]

  return (
    <header className={styles.header}>
      <div className={`${styles.topBannerWrapper} max-md:${styles.containerMd}`}>
        <TopBanner {...topBannerProps} />
        <div className={`${styles.container} max-md:${styles.containerMd}`}>
          <div className={`${styles.logoContainer} max-md:${styles.containerMd}`}>
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/2aa8ab82aca6d9a0ea2c3f10ffb485cd5fba5322d24729b677a25a57bba9d2e7?placeholderIfAbsent=true&apiKey=57c9b214dd624e2d8f39c71851e719ca"
              alt="Company Logo"
              className={styles.logo}
            />
            <MainNavigation navItems={mainNavItems} />
          </div>
          <div className={`${styles.searchUserActions} max-md:${styles.containerMd}`}>
            <SearchBar placeholder="Find something nice for 🐶 Milo!" />
            <UserActions cartItemCount={4} />
          </div>
        </div>
      </div>
      <SubNavigation navItems={subNavItems} />
    </header>
  )
}

export default Header
