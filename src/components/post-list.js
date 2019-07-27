import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'

import { rhythm, scale } from '../utils/typography'

const PostList = ({ posts }) => (
  posts.map(({ node: post }) => {
    const title = post.frontmatter.title || post.frontmatter.slug
    const html = post.frontmatter.description || post.excerpt

    return (
      <div key={post.frontmatter.slug}>
        <h3 style={{ marginBottom: rhythm(1 / 4) }}>
          <Link style={{ boxShadow: `none` }} to={`/${post.frontmatter.slug}/`}>
            {title}
          </Link>
        </h3>
        <time
          dateTime={post.frontmatter.dateTime}
          style={{
            ...scale(-1 / 5),
            display: `block`,
            fontStyle: `italic`,
          }}
        >
          {post.frontmatter.date}
        </time>
        <p
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </div>
    )
  })
)

PostList.propTypes = {
  posts: PropTypes.arrayOf(
    PropTypes.shape({
      node: PropTypes.shape({
        frontmatter: PropTypes.shape({
          title: PropTypes.string.isRequired,
        }),
        fields: PropTypes.shape({
          slug: PropTypes.string.isRequired,
        }),
      }),
    }).isRequired
  ),
}


export default PostList