import React, { useState } from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { Link, graphql } from 'gatsby'
import { Wrapper, Subline, SectionTitle, Content } from 'components'
import config from '../../config/SiteConfig'
import MenuList from '@material-ui/core/MenuList'
import MenuItem from '@material-ui/core/MenuItem'
import ListItem from '@material-ui/core/ListItem'
import List from '@material-ui/core/List'
import Button from '@material-ui/core/Button'
import styled from 'styled-components'
import Collapse from '@material-ui/core/Collapse'
import ExpandLess from '@material-ui/icons/ExpandLess'
import ExpandMore from '@material-ui/icons/ExpandMore'

const ActiveMenuItem = styled(ListItem)`
  background-color: lightgrey !important;
`

const MenuTree = (nodes, actualSlug, level = 0) => {
  if (!nodes) return null

  const [open, setopen] = useState(nodes.map(() => true))

  return nodes.map((node, index) => {
    return node.isLeaf ? (
      <Link to={node.slug}>
        {node.slug === actualSlug ? (
          <ActiveMenuItem
            button
            key={node.title}
            style={{ paddingLeft: level + 1 + 'em' }}
          >
            {node.title}
          </ActiveMenuItem>
        ) : (
          <ListItem
            button
            key={node.title}
            style={{ paddingLeft: level + 1 + 'em' }}
          >
            {node.title}
          </ListItem>
        )}
      </Link>
    ) : (
      <List>
        <ListItem
          style={{ paddingLeft: level + 1 + 'em' }}
          button
          onClick={e => {
            e.stopPropagation()
            setopen(opens => {
              opens[index] = !opens[index]
              return [...opens]
            })
          }}
        >
          {node.title}
          {open[index] ? (
            <ExpandLess style={{ marginLeft: 'auto' }} />
          ) : (
            <ExpandMore style={{ marginLeft: 'auto' }} />
          )}
        </ListItem>

        <Collapse in={open[index]}>
          {MenuTree(node.children, actualSlug, level + 1)}
        </Collapse>
      </List>
    )
  })
}

const buildNodeTree = metas => {
  const ret = { children: [] }

  const addNode = (paths, parent, slug) => {
    parent.children = parent.children || []

    if (!paths) return

    const desc = parent.children.filter(item => item.title === paths[0])[0]

    if (paths.length === 1) {
      if (desc) return
      return parent.children.push({ title: paths[0], isLeaf: true, slug })
    }

    if (desc) {
      paths.shift()
      return addNode(paths, desc, slug)
    }
    return parent.children.push({ title: paths[0] })
  }

  metas.map(meta => addNode(meta.parents, ret, meta.slug))

  return ret
}

const Doc = ({ data: { allMarkdownRemark, markdownRemark }, pageContext }) => {
  const { edges } = allMarkdownRemark

  const navigationMeta = edges.map(edge => ({
    title: edge.node.frontmatter.title,
    slug: edge.node.fields.slug,
    parents: edge.node.fields.slug.split('/').slice(3)
  }))

  // navigationMeta.forEach(meta => meta.parents.pop())

  const tree = buildNodeTree(navigationMeta)

  return (
    <div>
      <Helmet title={`'' | ${config.siteTitle}`} />

      <div
        style={{
          width: '100%',
          height: 'calc(100vh - 50px)',
          backgroundColor: 'white',
          display: 'grid',
          gridTemplateColumns: '240px 1fr 100px'
        }}
      >
        <nav style={{ overflowY: 'auto' }}>{MenuTree(tree.children)}</nav>

        {/* <MenuList style={{ overflowY: 'auto' }}>
          {navigationMeta.map(meta => (
            <Link to={meta.slug}>
              {meta.slug === pageContext.slug ? (
                <ActiveMenuItem key={meta.title}>{meta.title}</ActiveMenuItem>
              ) : (
                <MenuItem key={meta.title}>{meta.title}</MenuItem>
              )}
            </Link>
          ))}
        </MenuList> */}

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
