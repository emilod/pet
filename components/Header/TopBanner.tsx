import Image from 'next/image'
import React from 'react'

import styles from './TopBanner.module.css'

type TopBannerProps = {
  discountText: string
  locationText: string
  pickupText: string
  deliveryText: string
}

const TopBanner: React.FC<TopBannerProps> = ({ discountText, locationText, pickupText, deliveryText }) => (
  <div className={`${styles.topBanner} max-md:${styles.topBannerMd}`}>
    <div className={styles.bannerItem}>
      <Image
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/3355f5db4872022291f5b05b736a8ea0239952605bb7de65306ea8c31d7ba35c?placeholderIfAbsent=true&apiKey=57c9b214dd624e2d8f39c71851e719ca"
        alt=""
        className={styles.icon}
        width={24}
        height={24}
      />
      <div className={styles.bannerText}>{discountText}</div>
    </div>
    <div className={styles.locationSection}>
      <div className={styles.locationText}>
        <Image
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/4fbe4ac002563bb2c2e4cb6f1906e2b523f199fe6c127a0fb1bde1f0af94775d?placeholderIfAbsent=true&apiKey=57c9b214dd624e2d8f39c71851e719ca"
          alt=""
          className={styles.locationIcon}
          width={24}
          height={24}
        />
        <div>{locationText}</div>
        <Image
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/17f13ab1200407aea1c4dbc7e8e217deedb332a4214987acb81b3f61e77d74f2?placeholderIfAbsent=true&apiKey=57c9b214dd624e2d8f39c71851e719ca"
          alt=""
          className={styles.icon}
          width={24}
          height={24}
        />
      </div>
    </div>
    <div className={styles.divider} />
    <div className={styles.actionSection}>
      <div className={styles.actionText}>
        <Image
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/debd3e95cf3b4c4381cfb6a121b973e7f64bd6eb84a2316ba05fea72147b70db?placeholderIfAbsent=true&apiKey=57c9b214dd624e2d8f39c71851e719ca"
          alt=""
          className={styles.pickupIcon}
          width={24}
          height={24}
        />
        <div>{pickupText}</div>
      </div>
      <div className={styles.actionText}>
        <Image
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/41b4409ff74acbc1684416aba2295d37b44e60dabdca2e7cbbff0f347799b0ae?placeholderIfAbsent=true&apiKey=57c9b214dd624e2d8f39c71851e719ca"
          alt=""
          className={styles.deliveryIcon}
          width={24}
          height={24}
        />
        <div>{deliveryText}</div>
      </div>
    </div>
  </div>
)

export default TopBanner
