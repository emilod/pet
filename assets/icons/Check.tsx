import React from 'react'

export const Check = ({ pathFill = '#8CC63F', ...rest }) => {
  return (
    <svg width="15" height="10" viewBox="0 0 15 10" fill="none" xmlns="http://www.w3.org/2000/svg" {...rest}>
      <path
        d="M12.8668 0.355348C13.3549 -0.118449 14.1464 -0.118449 14.6345 0.355348C15.1227 0.829145 15.1227 1.59732 14.6345 2.07112L7.13453 9.35052C6.64637 9.82432 5.85492 9.82432 5.36676 9.35052L1.2001 5.30641C0.711946 4.83261 0.711946 4.06443 1.2001 3.59064C1.68826 3.11684 2.47971 3.11684 2.96787 3.59064L6.25064 6.77686L12.8668 0.355348Z"
        fill={pathFill}
      />
    </svg>
  )
}
