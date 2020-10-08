import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { Link, graphql, useStaticQuery } from 'gatsby'
import { useLocation } from '@reach/router'
import {
  Wrapper,
  Header,
  Subline,
  Article,
  SectionTitle,
  Content
} from 'components'
import config from '../../config/SiteConfig'
import withENLayout from 'src/layouts/withENLayout'
import { FormattedMessage } from 'react-intl'

import styled from 'styled-components'

const Title = styled.h3`
  position: relative;
  text-shadow: 0 12px 30px rgba(0, 0, 0, 0.15);
  margin-bottom: 0.75rem;
`
const Docs = () => {
  const docsData = useStaticQuery(graphql`
    query docs {
      allMarkdownRemark(
        sort: { order: DESC, fields: [frontmatter___date] }
        filter: { fields: {}, frontmatter: { category: { eq: "docs" } } }
      ) {
        distinct(field: fields___package)
      }
    }
  `)

  const location = useLocation()

  return (
    <Wrapper>
      <Helmet title={`'文档列表' | ${config.siteTitle}`} />
      <Header>
        <Link to="/">{config.siteTitle}</Link>
      </Header>
      <Content>
        <SectionTitle>
          <FormattedMessage id="docs"></FormattedMessage>
        </SectionTitle>
        {docsData.allMarkdownRemark.distinct.map(pkgName => (
          <Title>
            <Link to={location.pathname + '/' + pkgName}>
              {pkgName} <FormattedMessage id="docs"></FormattedMessage> {'\n'}
            </Link>
          </Title>
        ))}
      </Content>
    </Wrapper>
  )
}

export default withENLayout(Docs)
export { Docs }

Docs.propTypes = {
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
