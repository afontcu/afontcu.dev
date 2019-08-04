/**
 * Bio component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Image from 'gatsby-image'

import { scale, rhythm } from '../utils/typography'

import PersonalLinks from '../components/personal-links'

const AVATAR_SIZE = 80

function Bio({css = {}} = {}) {
  return (
    <StaticQuery
      query={bioQuery}
      render={data => {
        const { author } = data.site.siteMetadata
        return (
          <div style={{display: 'flex', alignItems: 'center', ...css }}>
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
            <PersonalLinks />
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
        fixed(width: 400, height: 400) {
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
