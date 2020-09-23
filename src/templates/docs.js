import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { Link, graphql } from 'gatsby'
import {
  Wrapper,
  Header,
  Subline,
  Article,
  SectionTitle,
  Content
} from 'components'
import config from '../../config/SiteConfig'

const Category = ({ data: { allMarkdownRemark } }) => {
  const { edges, totalCount } = allMarkdownRemark

  return (
    <Wrapper>
      <Helmet title={`'' | ${config.siteTitle}`} />
      <Header>
        <Link to="/">{config.siteTitle}</Link>
      </Header>
      <div>
        <Subline sectionTitle>
          (See <Link to="/categories">all categories</Link>)
        </Subline>
        {edges.map(post => (
          <Article
            title={post.node.frontmatter.title}
            date={post.node.frontmatter.date}
            excerpt={post.node.excerpt}
            timeToRead={post.node.timeToRead}
            slug={post.node.fields.slug}
            category={post.node.frontmatter.category}
            key={post.node.fields.slug}
          />
        ))}
      </div>
    </Wrapper>
  )
}

export default Category

Category.propTypes = {
  pageContext: PropTypes.shape({
    category: PropTypes.string.isRequired
  }).isRequired,
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array.isRequired,
      totalCount: PropTypes.number.isRequired
    })
  }).isRequired
}

export const postQuery = graphql`
  query docs {
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { category: { eq: "docs" } } }
    ) {
      totalCount
      edges {
        node {
          frontmatter {
            title
            date(formatString: "DD.MM.YYYY")
            category
          }
          fields {
            slug
          }
          excerpt(pruneLength: 200)
          timeToRead
        }
      }
    }
  }
`
