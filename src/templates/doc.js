import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { Link, graphql } from 'gatsby'
import { Wrapper, Subline, SectionTitle, Content } from 'components'
import config from '../../config/SiteConfig'
import MenuList from '@material-ui/core/MenuList'
import MenuItem from '@material-ui/core/MenuItem'
import Button from '@material-ui/core/Button'
import styled from 'styled-components'

const ActiveMenuItem = styled(MenuItem)`
  background-color: lightgrey !important;
`

const Doc = ({ data: { allMarkdownRemark, markdownRemark }, pageContext }) => {
  const { edges } = allMarkdownRemark

  return (
    <div>
      <Helmet title={`'' | ${config.siteTitle}`} />

      <div
        style={{
          width: '100%',
          height: 'calc(100vh - 50px)',
          backgroundColor: 'white',
          display: 'grid',
          gridTemplateColumns: '220px 1fr 100px'
        }}
      >
        <MenuList style={{ overflowY: 'auto' }}>
          {edges.map(edge => (
            <Link to={edge.node.fields.slug}>
              {edge.node.fields.slug === pageContext.slug ? (
                <ActiveMenuItem key={edge.node.frontmatter.title}>
                  {edge.node.frontmatter.title}
                </ActiveMenuItem>
              ) : (
                <MenuItem key={edge.node.frontmatter.title}>
                  {edge.node.frontmatter.title}
                </MenuItem>
              )}
            </Link>
          ))}
        </MenuList>

        <div
          style={{ overflowY: 'auto', margin: '2em' }}
          dangerouslySetInnerHTML={{ __html: markdownRemark.html }}
        ></div>
        <div>Table of Contents</div>
      </div>
    </div>
  )
}

export default Doc

Doc.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array.isRequired,
      totalCount: PropTypes.number.isRequired
    })
  }).isRequired
}

export const postQuery = graphql`
  query doc($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      timeToRead
    }

    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { category: { eq: "docs" } } }
    ) {
      totalCount
      edges {
        node {
          frontmatter {
            title
          }

          fields {
            slug
          }
        }
      }
    }
  }
`
