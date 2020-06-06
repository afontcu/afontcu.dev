import React from 'react'
import { Link } from 'gatsby'

import { rhythm, scale } from '../utils/typography'
import Bio from '../components/bio'
import Newsletter from '../components/newsletter'
import FullBleed from '../components/full-bleed'

class Layout extends React.Component {
  render() {
    const { location, children, siteMetadata = {} } = this.props
    const rootPath = `${__PATH_PREFIX__}/`
    let header

    if (location.pathname === rootPath) {
      header = (
        <div
          style={{
            ...scale(1 / 2),
            display: `flex`,
            marginBottom: rhythm(1.5),
            alignItems: `center`,
          }}
        >
          <p style={{ margin: 0, color: 'black' }}>
            Oh, hi!{' '}
            <span role="img" aria-label="waving hand">
              👋
            </span>{' '}
            I'm <strong>{siteMetadata.author}</strong>, a software engineer
            interested in lean development, mostly focused on the front end, UX,
            and everything in between.
          </p>
        </div>
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
            afontcu.dev
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
            <Bio
              css={{
                margin: `${rhythm(1.5)} auto 0`,
                gap: '1rem',
                flexDirection: 'column',
                textAlign: 'center',
                maxWidth: '40ch',
              }}
            />
          </footer>
        </FullBleed>
      </div>
    )
  }
}

export default Layout
