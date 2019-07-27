import React from 'react'
import PropTypes from 'prop-types'
import { replace, toLower } from 'lodash'
import { Helmet } from 'react-helmet'
import { Link, graphql } from 'gatsby'

import Layout from '../components/layout'
import { rhythm } from '../utils/typography'

const TagsPage = ({
  data: {
    allMarkdownRemark: { group },
    site: {
      siteMetadata: { title },
    },
  },
}) => (
    <div>
      <Helmet title={title} />
      <Layout title={title} location={{}}>
        <h1 style={{ textAlign: 'center', marginTop: rhythm(2) }}>
          Stuff I write about
      </h1>
        <ul style={{ listStyle: 'none', marginTop: rhythm(1) }}>
          {group.map(tag => {
            const urlTag = replace(toLower(tag.fieldValue), ' ', '-')
            return (
              <li key={tag.fieldValue} style={{ textAlign: 'center' }}>
                <Link to={`/tags/${urlTag}/`}>
                  {tag.fieldValue}
                </Link>
              </li>)
          })}
        </ul>
      </Layout>
    </div>
  )

TagsPage.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      group: PropTypes.arrayOf(
        PropTypes.shape({
          fieldValue: PropTypes.string.isRequired,
        }).isRequired
      ),
    }),
    site: PropTypes.shape({
      siteMetadata: PropTypes.shape({
        title: PropTypes.string.isRequired,
      }),
    }),
  }),
}

export default TagsPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(limit: 2000) {
      group(field: frontmatter___tags) {
        fieldValue
      }
    }
  }
`