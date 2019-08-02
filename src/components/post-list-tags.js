import React from 'react'
import { Link } from 'gatsby'
import { toLower, replace } from 'lodash'

function PostListTags ({ tags }) {
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

export default PostListTags