import React from 'react'
import { rhythm } from '../utils/typography'

export default ({ children, skewed }) => (
  <div
    className="full-bleed"
    style={{
      ...(skewed && { transform: `skew(0deg, -2deg)` }),
      width: `100vw`,
      marginLeft: `calc(50% - 50vw)`,
      padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
      boxShadow: `inset 0 -10px 13px rgba(0, 0, 0, 0.05)`,
      background: `linear-gradient(90deg, rgb(211, 243, 255) 0%, rgb(169, 255, 196) 85%)`,
    }}
  >
    <div
      style={{
        maxWidth: rhythm(24),
        margin: `0 auto`,
        ...(skewed && { transform: `skew(0deg, 2deg)` }),
      }}
    >
      {children}
    </div>
  </div>
)
