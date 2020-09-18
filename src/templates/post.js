import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { Link, graphql } from 'gatsby'
import styled from 'styled-components'
import kebabCase from 'lodash/kebabCase'
import {
  ProgressBar,
  Wrapper,
  Header,
  Subline,
  SEO,
  PrevNext,
  Content
} from 'components'
import config from '../../config/SiteConfig'
import '../utils/medium-editor.css'
import 'medium-editor/dist/css/medium-editor.min.css'

// import '../utils/prismjs-theme.css'

const Title = styled.h1`
  margin-bottom: 1rem;
`

const PostContent = styled.div`
  outline: none;
  margin-top: 4rem;
`

let func

class Post extends Component {
  constructor(props) {
    super(props)
    this.state = { progress: 0 }
  }

  componentDidMount() {
    // using import cause failure at production build
    /* eslint global-require:0 */

    const height = document.body.scrollHeight
    const { innerHeight } = window

    func = () => {
      this.setState({
        progress: Number((window.scrollY * 100) / (height - innerHeight))
      })
    }
    window.addEventListener('scroll', func)
    const MediumEditor = require('medium-editor')
    this.editor = new MediumEditor('.editable', {
      elementsContainer: document.querySelector('#medium-toolbar')
    })
  }

  componentWillUnmount() {
    this.editor = null
    func && window.removeEventListener('scroll', func)
  }

  render() {
    const {
      pageContext: { slug, prev, next },
      data: { markdownRemark: postNode }
    } = this.props

    const { progress } = this.state
    const post = postNode.frontmatter
    return (
      <Wrapper>
        <ProgressBar progress={progress}></ProgressBar>
        <SEO postPath={slug} postNode={postNode} postSEO />
        <Helmet title={`${post.title} | ${config.siteTitle}`} />
        <Header>
          <Link to="/">{config.siteTitle}</Link>
        </Header>
        <Content>
          <Title>{post.title}</Title>
          <div id="medium-toolbar" />
          <Subline>
            {post.date} &mdash; {postNode.timeToRead} Min Read &mdash; In{' '}
            <Link to={`/categories/${kebabCase(post.category)}`}>
              {post.category}
            </Link>
          </Subline>
          <PostContent
            className="editable"
            dangerouslySetInnerHTML={{ __html: postNode.html }}
          />
          <PrevNext prev={prev} next={next} />
        </Content>
      </Wrapper>
    )
  }
}

export default Post

Post.propTypes = {
  pageContext: PropTypes.shape({
    slug: PropTypes.string.isRequired,
    next: PropTypes.object,
    prev: PropTypes.object
  }),
  data: PropTypes.shape({
    markdownRemark: PropTypes.object.isRequired
  }).isRequired
}

Post.defaultProps = {
  pageContext: PropTypes.shape({
    next: null,
    prev: null
  })
}

export const postQuery = graphql`
  query postBySlug($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      excerpt
      frontmatter {
        title
        date(formatString: "DD.MM.YYYY")
        category
      }
      timeToRead
    }
  }
`
