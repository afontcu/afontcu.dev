import React from 'react'
import { Link } from 'gatsby'

import { rhythm, scale } from '../utils/typography'
import Bio from '../components/bio'

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
          padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
        }}
      >
        <header>{header}</header>
        <main>{children}</main>
        <footer>
          <hr
            style={{
              marginBottom: rhythm(1),
            }}
          />
          <Bio />
          Find me on{' '}
          <a
            target="_blank"
            rel="noopener noreferrer"
            title="Twitter"
            href="https://twitter.com/afontcu_"
          >
            Twitter
          </a>
          ,{' '}
          <a
            target="_blank"
            rel="noopener noreferrer"
            title="Github"
            href="https://github.com/afontcu"
          >
            GitHub
          </a>{' '}
          and{' '}
          <a
            target="_blank"
            rel="noopener noreferrer"
            title="Instagram"
            href="https://www.linkedin.com/in/adrifontcu/"
          >
            LinkedIn
          </a>
          . Oh, and{' '}
          <a
            target="_blank"
            rel="noopener noreferrer"
            title="Strava"
            href="https://www.strava.com/athletes/5716746"
          >
            Strava
          </a>{' '}
          🚴. I also collect{' '}
          <a
            target="_blank"
            rel="noopener noreferrer"
            title="Medium"
            href="https://github.com/afontcu/awesome-learning"
          >
            awesome
          </a>{' '}
          links.
        </footer>
      </div>
    )
  }
}

export default Layout
