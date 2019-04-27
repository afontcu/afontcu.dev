/**
 * Bio component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Image from 'gatsby-image'

import { rhythm } from '../utils/typography'

import PersonalLinks from '../components/personal-links'

const AVATAR_SIZE = 80

function Bio() {
  return (
    <StaticQuery
      query={bioQuery}
      render={data => {
        const { author, social } = data.site.siteMetadata
        return (
          <div
            className="bio"
            style={{
              width: `100vw`,
              marginLeft: `calc(50% - 50vw)`,
              padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
              background: `rgb(123,119,198)`,
              background: `linear-gradient(90deg, rgba(211,255,237,1) 0%, rgba(169,240,255,1) 85%)`,
            }}
          >
            <div
              style={{
                maxWidth: rhythm(24),
                margin: `0 auto`,
              }}
            >
              <div
                style={{
                  display: `flex`,
                  marginBottom: rhythm(1.5),
                  alignItems: `center`,
                }}
              >
                <Image
                  fixed={data.avatar.childImageSharp.fixed}
                  alt={author}
                  style={{
                    marginRight: rhythm(1 / 2),
                    marginBottom: 0,
                    minWidth: AVATAR_SIZE,
                    width: AVATAR_SIZE,
                    height: AVATAR_SIZE,
                    borderRadius: `100%`,
                  }}
                  imgStyle={{
                    borderRadius: `50%`,
                    marginBottom: 0,
                  }}
                />
                <p style={{ margin: 0 }}>
                  Oh, hi!{' '}
                  <span role="img" aria-label="waving hand">
                    👋
                  </span>{' '}
                  I'm{' '}
                  <a
                    href={`https://twitter.com/${social.twitter}`}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    {author}
                  </a>
                  , a UI engineer interested in JavaScript, CSS, UX, lean
                  software development, clean code, and everything in between.
                </p>
              </div>
              <PersonalLinks />
            </div>
          </div>
        )
      }}
    />
  )
}

const bioQuery = graphql`
  query BioQuery {
    avatar: file(absolutePath: { regex: "/profile-pic.jpg/" }) {
      childImageSharp {
        fixed(width: 80, height: 80) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    site {
      siteMetadata {
        author
        social {
          twitter
        }
      }
    }
  }
`

export default Bio
