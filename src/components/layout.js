import React from 'react'
import { Link } from 'gatsby'

import { rhythm, scale } from '../utils/typography'
import Bio from '../components/bio'
import Newsletter from '../components/newsletter'
import FullBleed from '../components/full-bleed'

class Layout extends React.Component {
  render() {
    const { location, title, children } = this.props
    const rootPath = `${__PATH_PREFIX__}/`
    let header

    if (location.pathname === rootPath) {
      header = (
        <h1
          style={{
            ...scale(1),
            marginBottom: rhythm(1.5),
            marginTop: 0,
          }}
        >
          {title}
        </h1>
      )
    } else {
      header = (
        <h3 style={{ marginTop: 0 }}>
          <Link
            style={{
              boxShadow: `none`,
              textDecoration: `none`,
              backgroundImage: `none`,
              color: `inherit`,
            }}
            to={`/`}
          >
            {title}
          </Link>
        </h3>
      )
    }
    return (
      <div
        style={{
          marginLeft: `auto`,
          marginRight: `auto`,
          maxWidth: rhythm(24),
          padding: `${rhythm(1.5)} ${rhythm(3 / 4)} 0`,
        }}
      >
        <header>{header}</header>
        <main style={{ marginBottom: rhythm(7.5) }}>{children}</main>
        <FullBleed>
          <footer style={{ marginTop: rhythm(-5.5) }}>
            <Newsletter />
            <br />
            <br />
            <Bio />
          </footer>
        </FullBleed>
      </div>
    )
  }
}

export default Layout
