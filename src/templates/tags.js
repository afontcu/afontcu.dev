import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'
import { kebabCase } from 'lodash'

import Layout from '../components/layout'
import SEO from '../components/seo'
import FullBleed from '../components/full-bleed'
import PostList from '../components/post-list'

import { rhythm, scale } from '../utils/typography'

const Tags = ({ pageContext, data }) => {

  const { tag } = pageContext
  const { edges } = data.allMarkdownRemark

  const siteTitle = data.site.siteMetadata.title
  const isRandomThoughts = kebabCase(tag) === 'random-thoughts'
  const isEvents = kebabCase(tag) === 'events'
  const headerTitle = isRandomThoughts
    ? `A series of random thoughts`
    : `Things I wrote on ${tag}`

  const TagAwesomeLink = () => {
    if (isRandomThoughts || isEvents) return null

    const link = `https://github.com/afontcu/awesome-learning#${kebabCase(tag)}`
    return (
      <FullBleed>
        <p style={{textAlign: 'center', ...scale(1 / 3) }}>
          Hey! <span role="img" aria-label="waving hand">👋</span>
        </p>
        <p style={{margin: 0, textAlign: 'center'}}>
          Make sure you check my awesome list of <br />
          <a href={link} target="_blank" rel="noopener noreferrer">learning material about {tag}</a>!
        </p>
      </FullBleed>
    )
  }

  return (
    <Layout title={siteTitle} location={{}}>
      <SEO title={`${tag} posts`} />
      <h1 style={{textAlign: 'center', marginBottom: rhythm(1.5)}}>
        {headerTitle}
      </h1>
      <TagAwesomeLink />
      <div style={{ marginTop: rhythm(2.25) }}>
        <PostList posts={edges} />
      </div>
      <div style={{textAlign: 'center', marginTop: rhythm(2) }}>
          <Link to="/tags" >All tags</Link>
      </div>      
    </Layout>
  )
}

Tags.propTypes = {
  pageContext: PropTypes.shape({
    tag: PropTypes.string.isRequired,
  }),
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.arrayOf(
        PropTypes.shape({
          node: PropTypes.shape({
            frontmatter: PropTypes.shape({
              title: PropTypes.string.isRequired,
            }),
          }),
        }).isRequired
      ),
    }),
  }),
}

export default Tags

export const pageQuery = graphql`
  query($tag: String) {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      limit: 2000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { tags: { in: [$tag] } } }
    ) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            dateTime: date
            title
            description
          }
        }
      }
    }
  }
`