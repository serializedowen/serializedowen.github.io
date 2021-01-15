import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { Link, graphql } from 'gatsby'
import kebabCase from 'lodash/kebabCase'
import { Wrapper, Header, SectionTitle, Content } from 'src/components'
import withENLayout from 'src/layouts/withENLayout'
import { Typography } from '@material-ui/core'
import config from '../../config/SiteConfig'

const Category = ({
  data: {
    allMarkdownRemark: { group }
  }
}) => (
  <Wrapper>
    <Helmet title={`Categories | ${config.siteTitle}`} />
    <Header>
      <Link to="/">{config.siteTitle}</Link>
    </Header>
    <Content>
      <SectionTitle>Categories</SectionTitle>
      {group.map(category => (
        <Typography key={category.fieldValue}>
          <Link to={`/categories/${kebabCase(category.fieldValue)}`}>
            {category.fieldValue}
          </Link>
          ({category.totalCount})
        </Typography>
      ))}
    </Content>
  </Wrapper>
)

export { Category }
export default withENLayout(Category)

Category.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      group: PropTypes.array.isRequired
    })
  }).isRequired
}

export const postQuery = graphql`
  query CategoriesPage {
    allMarkdownRemark {
      group(field: frontmatter___category) {
        fieldValue
        totalCount
      }
    }
  }
`
