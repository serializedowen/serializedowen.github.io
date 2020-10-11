import React, { useState, useEffect } from 'react'
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
import withENLayout from 'src/layouts/withENLayout'
import Card from '@material-ui/core/Card'
import CardHeader from '@material-ui/core/CardHeader'
import CardContent from '@material-ui/core/CardContent'
import Avatar from '@material-ui/core/Avatar'
import useIdentifier from 'src/hooks/useIdentifier'
import axios from 'src/utils/http'

const Title = styled.h1`
  margin-bottom: 1rem;
`

const PostContent = styled.div`
  outline: none;
  margin-top: 4rem;
`

const Post = props => {
  const [progress, setprogress] = useState(0)
  const identifier = useIdentifier()

  const [comments, setcomments] = useState([
    {
      id: 38,
      userId: 7,
      content: 'rssrsr',
      identifier: 'aaa',
      createdAt: '2020-10-10T05:49:34.000Z',
      updatedAt: '2020-10-10T05:49:34.000Z',
      user_id: 7
    }
  ])

  useEffect(() => {
    axios.get('/comments/' + identifier).then(res => {
      const { data } = res

      setcomments(data)
    })
  }, [])

  useEffect(() => {
    let handler
    setTimeout(() => {
      const height = document.body.clientHeight
      const { innerHeight } = window

      console.log(height, innerHeight)
      handler = () => {
        setprogress(Number((window.scrollY * 100) / (height - innerHeight)))
      }
      window.addEventListener('scroll', handler)
    }, 500)
    return () => {
      window.removeEventListener('scroll', handler)
    }
  }, [])

  const {
    pageContext: { slug, prev, next },
    data: { markdownRemark: postNode }
  } = props

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
        <div>
          {comments.map(comment => (
            <Card>
              <CardContent>{comment.content}</CardContent>
              <CardHeader
                avatar={
                  <Avatar
                    aria-label="avatar"
                    src="https://avatars3.githubusercontent.com/u/9219215?v=4"
                  ></Avatar>
                }
                title={'serializedowen'}
                subheader={comment.createdAt}
              ></CardHeader>
            </Card>
          ))}
        </div>
      </Content>
    </Wrapper>
  )
}

export { Post }
export default withENLayout(Post)

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
