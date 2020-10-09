import React, { useState, useRef, useEffect } from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { Link, graphql, useScrollRestoration } from 'gatsby'
import IconButton from '@material-ui/core/IconButton'
import EditIcon from '@material-ui/icons/Edit'
import Divider from '@material-ui/core/Divider'
import Drawer from '@material-ui/core/Drawer'
import ListItem from '@material-ui/core/ListItem'
import { makeStyles } from '@material-ui/core/styles'
import List from '@material-ui/core/List'
import Button from '@material-ui/core/Button'
import styled from 'styled-components'
import Collapse from '@material-ui/core/Collapse'
import ExpandLess from '@material-ui/icons/ExpandLess'
import ExpandMore from '@material-ui/icons/ExpandMore'
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos'
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos'
import withENLayout from 'src/layouts/withENLayout'
import {
  createMuiTheme,
  ThemeProvider as MuiThemeProvider
} from '@material-ui/core/styles'

const theme = createMuiTheme({})

const ActiveMenuItem = styled(ListItem)`
  background-color: lightgrey !important;
`

const drawerWidth = 240

const useStyles = makeStyles(theme => ({
  drawer: {
    width: drawerWidth,
    flexShrink: 0
  },
  drawerPaper: {
    width: drawerWidth,
    marginTop: '50px'
  },
  drawerContainer: {
    overflow: 'auto'
  },
  content: {
    overflowY: 'auto',
    flexGrow: 1,
    transition: '0.2s',
    padding: theme.spacing(3)
  }
}))

const MenuTree = (nodes, actualSlug, level = 0) => {
  if (!nodes) return null

  const [open, setopen] = useState(nodes.map(() => true))
  const navRef = useRef(null)

  useEffect(() => {
    navRef.current && navRef.current.scrollIntoView()
    return () => {}
  }, [])

  return nodes.map((node, index) => {
    return node.isLeaf ? (
      <Link to={node.slug}>
        {node.slug === actualSlug ? (
          <ActiveMenuItem
            ref={navRef}
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

        <Divider></Divider>
      </List>
    )
  })
}

const buildNodeTree = metas => {
  const ret = { children: [] }

  const addNode = (paths, parent, slug, title) => {
    parent.children = parent.children || []

    if (!paths) return

    let desc = parent.children.filter(item => item.title === paths[0])[0]

    if (paths.length === 1) {
      if (desc) return

      return parent.children.push({ title, isLeaf: true, slug })
    }

    if (!desc) {
      desc = { title: paths[0] }
      parent.children.push(desc)
    }

    paths.shift()
    return addNode(paths, desc, slug, title)
  }

  metas.map(meta => addNode(meta.parents, ret, meta.slug, meta.title))

  return ret
}

const Doc = ({
  data: { allMarkdownRemark, markdownRemark },
  pageContext,
  location
}) => {
  const { edges } = allMarkdownRemark
  const [navOpen, setnavOpen] = useState(true)
  const [tocOpen, settocOpen] = useState(true)

  const { ref, onScroll } = useScrollRestoration()

  useEffect(() => {
    const screenWidth = window.screen.width

    if (screenWidth < 1000) {
      settocOpen(false)
    }

    if (screenWidth < 700) {
      setnavOpen(false)
    }
  }, [])

  useEffect(() => {
    const smoothScroll = require('../utils/smoothScroll')

    setTimeout(() => {
      smoothScroll.setTarget(ref.current)
    }, 0)
    return () => {
      smoothScroll.setTarget(window)
    }
  }, [])

  const classes = useStyles()

  const navigationMeta = edges.map(edge => ({
    title: edge.node.frontmatter.title,
    slug: edge.node.fields.slug,
    parents: edge.node.fields.slug.split('/').slice(3)
  }))

  const tree = buildNodeTree(navigationMeta)

  return (
    <MuiThemeProvider theme={theme}>
      <div
        style={{
          width: '100%',
          height: 'calc(100vh - 50px)',
          backgroundColor: 'white',
          display: 'flex'
        }}
      >
        <Helmet
          title={` react-router-dom 中文文档 | ${markdownRemark.frontmatter.title}`}
        />

        <Drawer
          open={navOpen}
          variant="persistent"
          classes={{ paper: classes.drawerPaper }}
          className={classes.drawer}
        >
          {MenuTree(tree.children, pageContext.slug)}
        </Drawer>

        <article
          ref={ref}
          onScroll={onScroll}
          className={classes.content}
          style={{
            scrollBehavior: 'smooth',
            position: 'relative',
            marginLeft: navOpen ? '0px ' : -drawerWidth + 'px',
            marginRight: tocOpen ? '0px' : -drawerWidth + 'px'
          }}
        >
          <IconButton
            onClick={() => setnavOpen(val => !val)}
            variant="contained"
            style={{
              position: 'fixed',
              left: navOpen ? drawerWidth + 'px' : '0px',
              top: '100px'
            }}
          >
            {navOpen ? <ArrowBackIosIcon /> : <ArrowForwardIosIcon />}
          </IconButton>
          <IconButton
            onClick={() => settocOpen(val => !val)}
            style={{
              position: 'fixed',
              right: tocOpen ? drawerWidth + 'px' : '0px',
              top: '100px'
            }}
          >
            {tocOpen ? <ArrowForwardIosIcon /> : <ArrowBackIosIcon />}
          </IconButton>

          <div dangerouslySetInnerHTML={{ __html: markdownRemark.html }}></div>

          <div style={{ display: 'inline-block' }}>
            <a
              href={
                'https://github.com/serializedowen/serializedowen.github.io/blob/dev' +
                pageContext.slug +
                '.md'
              }
            >
              <Button variant="outlined" color="primary">
                <EditIcon></EditIcon>在Github上编辑
              </Button>
            </a>
            <span>最后修改时间：{markdownRemark.lastModified}</span>
          </div>

          {/* <PrevNext prev={pageContext.prev} next={pageContext.next} /> */}
        </article>

        <Drawer
          variant="persistent"
          open={tocOpen}
          anchor="right"
          classes={{ paper: classes.drawerPaper }}
          className={classes.drawer}
        >
          <div
            dangerouslySetInnerHTML={{
              __html: markdownRemark.tableOfContents
            }}
          ></div>
        </Drawer>
      </div>
    </MuiThemeProvider>
  )
}

export default withENLayout(Doc)

Doc.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array.isRequired,
      totalCount: PropTypes.number.isRequired
    })
  }).isRequired
}

export const postQuery = graphql`
  query doc($slug: String!, $package: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      timeToRead
      frontmatter {
        title
      }
      tableOfContents
      lastModified
      headings {
        id
        depth
      }
    }

    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: {
        frontmatter: { category: { eq: "docs" } }
        fields: { package: { eq: $package } }
      }
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
