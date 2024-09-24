import React from 'react'

import styles from './SearchBar.module.css'

type SearchBarProps = {
  placeholder: string
}

const SearchBar: React.FC<SearchBarProps> = ({ placeholder }) => (
  <div className={styles.searchBar}>
    <div className={styles.searchBarText}>{placeholder}</div>
    <img
      loading="lazy"
      src="https://cdn.builder.io/api/v1/image/assets/TEMP/913b14b8603df6f363e087e01cf76f29a72c646f5285ba1b483eec3d5eb3c840?placeholderIfAbsent=true&apiKey=57c9b214dd624e2d8f39c71851e719ca"
      alt=""
      className={styles.searchBarIcon}
    />
  </div>
)

export default SearchBar
