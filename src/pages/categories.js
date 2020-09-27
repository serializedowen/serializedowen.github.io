import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { Link, graphql } from 'gatsby'
import styled from 'styled-components'
import kebabCase from 'lodash/kebabCase'
import { Wrapper, Header, SectionTitle, Content } from 'components'
import withENLayout from 'src/layouts/withENLayout'

import config from '../../config/SiteConfig'

const Title = styled.h3`
  position: relative;
  text-shadow: 0 12px 30px rgba(0, 0, 0, 0.15);
  margin-bottom: 0.75rem;
`

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
        <Title key={category.fieldValue}>
          <Link to={`/categories/${kebabCase(category.fieldValue)}`}>
            {category.fieldValue}
          </Link>
          ({category.totalCount})
        </Title>
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
