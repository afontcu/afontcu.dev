import React from 'react'
import { Link, graphql } from 'gatsby'
import { toLower, replace } from 'lodash'

import Layout from '../components/layout'
import SEO from '../components/seo'
import { rhythm, scale } from '../utils/typography'

function TagList({ tags }) {
  return tags
    .map((tag) => {
      const urlTag = replace(toLower(tag), ' ', '-')

      return (
        <Link key={tag} to={`/tags/${urlTag}/`} style={{ fontSize: '0.8rem' }}>
          {tag}
        </Link>
      )
    })
    .reduce((a, b) => [a, ', ', b])
}

class BlogPostTemplate extends React.Component {
  render() {
    const { data, pageContext, location } = this.props
    const post = data.markdownRemark
    const { previous, next } = pageContext
    const { description, title, dateTime, date, tags } = post.frontmatter
    const siteTitle = data.site.siteMetadata.title

    return (
      <Layout location={location} title={siteTitle}>
        <SEO
          title={title}
          description={description || post.excerpt}
          type="article"
        />
        <article>
          <header style={{ textAlign: `center`, marginTop: rhythm(2) }}>
            <h1>{title}</h1>
            <span
              style={{
                ...scale(1 / 12),
                display: `block`,
                fontStyle: `italic`,
                color: `rgba(0, 0, 0, 0.5)`,
              }}
            >
              <time dateTime={dateTime}>{date}</time>
              {' · '}
              {post.fields.readingTime.text}
            </span>
            <div style={{ marginBottom: rhythm(1.5) }}>
              {tags.length > 0 && <TagList tags={tags} />}
            </div>
          </header>

          {description && <p>{description}</p>}

          <div
            style={{
              marginBottom: rhythm(3),
            }}
            dangerouslySetInnerHTML={{ __html: post.html }}
          />

          <nav>
            <ul
              style={{
                display: `flex`,
                flexWrap: `wrap`,
                justifyContent: `space-between`,
                listStyle: `none`,
                padding: 0,
                margin: 0,
              }}
            >
              {previous && (
                <li>
                  <Link to={previous.fields.slug} rel="prev">
                    ← {previous.frontmatter.title}
                  </Link>
                </li>
              )}
              {next && (
                <li>
                  <Link to={next.fields.slug} rel="next">
                    {next.frontmatter.title} →
                  </Link>
                </li>
              )}
            </ul>
          </nav>
        </article>
      </Layout>
    )
  }
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      html
      fields {
        readingTime {
          text
        }
      }
      frontmatter {
        title
        date(formatString: "D MMMM YY")
        dateTime: date
        description
        tags
      }
    }
  }
`
