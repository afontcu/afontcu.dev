import React from 'react'
import { Link, graphql } from 'gatsby'
import { toLower, replace } from 'lodash'

import Layout from '../components/layout'
import SEO from '../components/seo'
import { rhythm, scale } from '../utils/typography'

function TagList ({ tags }) {
  return tags.map(tag => {
    const urlTag = replace(toLower(tag), ' ', '-')

    return (
      <Link
        key={tag}
        to={`/tags/${urlTag}/`}
        style={{ fontSize: '0.8rem'}}
      >
        {tag}
      </Link>
    )
  }).reduce((a, b) => [a, ', ', b])
}

class BlogPostTemplate extends React.Component {
  render() {
    const post = this.props.data.markdownRemark
    console.log(this.props.data);
    const siteTitle = this.props.data.site.siteMetadata.title
    const { previous, next } = this.props.pageContext

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO
          title={post.frontmatter.title}
          description={post.frontmatter.description || post.excerpt}
          type="article"
        />
        <article>
          <header style={{ textAlign: `center`, marginTop: rhythm(2) }}>
            <h1>{post.frontmatter.title}</h1>
            <time
              dateTime={post.frontmatter.dateTime}
              style={{
                ...scale(1 / 3),
                display: `block`,
                fontStyle: `italic`,
              }}
            >
              {post.frontmatter.date}
            </time>
            <div style={{marginBottom: rhythm(1.5),}}>
            {post.frontmatter.tags.length > 0 && 
              <TagList tags={post.frontmatter.tags} />
            }
            </div>
          </header>

          {post.frontmatter.description && (
            <p>
            {post.frontmatter.description}
            </p>
          )}

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
                  <Link to={previous.frontmatter.slug} rel="prev">
                    ← {previous.frontmatter.title}
                  </Link>
                </li>
              )}
              {next && (
                <li>
                  <Link to={next.frontmatter.slug} rel="next">
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
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        dateTime: date
        description
        tags
        slug
      }
    }
  }
`
