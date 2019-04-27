import React from 'react'
import { rhythm } from '../utils/typography'

export default ({ children }) => (
  <div
    className="full-bleed"
    style={{
      width: `100vw`,
      marginLeft: `calc(50% - 50vw)`,
      padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
      background: `rgb(123, 119, 198)`,
      background: `linear-gradient(
        90deg,
        rgba(211, 255, 237, 1) 0%,
        rgba(169, 240, 255, 1) 85%
      )`,
    }}
  >
    <div style={{ maxWidth: rhythm(24), margin: `0 auto` }}>{children}</div>
  </div>
)
