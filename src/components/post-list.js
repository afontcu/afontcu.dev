import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import { toLower, replace, isEmpty } from 'lodash'

import { rhythm, scale } from '../utils/typography'

function TagList ({ tags }) {
  return tags.map(tag => {
    const urlTag = replace(toLower(tag), ' ', '-')

    return (
      <Link
        key={tag}
        to={`/tags/${urlTag}/`}
        style={{
          backgroundImage: 'none',
          color: 'rgba(0, 0, 0, 0.6)',
          textDecoration: 'underline',
        }}
      >
        {tag}
      </Link>
    )
  }).reduce((a, b) => [a, ', ', b])
}

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
        <div style={{ ...scale(-1 / 5), fontStyle: `italic` }}>
          <time dateTime={post.frontmatter.dateTime}>
            {post.frontmatter.date}
          </time>
          {!isEmpty(post.frontmatter.tags) && (
            <span>{' · '}<TagList tags={post.frontmatter.tags} /></span>
          )}
        </div>
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