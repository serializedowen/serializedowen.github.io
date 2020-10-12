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

import Input from '@material-ui/core/Input'
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'
import InputAdornment from '@material-ui/core/InputAdornment'

import TextField from '@material-ui/core/TextField'

import config from '../../config/SiteConfig'
import '../utils/medium-editor.css'
import 'medium-editor/dist/css/medium-editor.min.css'
import withENLayout from 'src/layouts/withENLayout'
import Card from '@material-ui/core/Card'
import CardHeader from '@material-ui/core/CardHeader'
import CardContent from '@material-ui/core/CardContent'
import Avatar from '@material-ui/core/Avatar'
import useAuthentication from 'src/hooks/useAuthentication'
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

  const user = useAuthentication()

  const [newComment, setnewComment] = useState('')
  const [comments, setcomments] = useState([])

  const [refresh, setrefresh] = useState(0)

  useEffect(() => {
    axios.get('/comments/' + identifier).then(res => {
      const { data } = res

      setcomments(data)
    })
  }, [refresh])

  const submitComment = () => {
    return axios
      .post('/comments/' + identifier + '/add', { content: newComment })
      .then(() => {
        setnewComment('')
        setrefresh(val => val + 1)
      })
  }

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
        <Card>
          {comments.map(comment => (
            <Card elevation={2} style={{ margin: '0.5em' }}>
              <CardContent>{comment.content}</CardContent>
              <CardHeader
                avatar={
                  <Avatar
                    aria-label="avatar"
                    src={comment.user.avatarUrl}
                  ></Avatar>
                }
                title={comment.user.username}
                subheader={comment.createdAt}
              ></CardHeader>
            </Card>
          ))}
        </Card>

        {user && user.userModel && (
          <Card style={{ padding: '1em' }}>
            <Grid container spacing={1} alignItems="flex-end">
              <Grid item>
                <Avatar
                  aria-label="avatar"
                  src={user.userModel.avatarUrl}
                ></Avatar>
              </Grid>
              <Grid item>
                <TextField
                  style={{ flexGrow: 1 }}
                  label="你的评论"
                  value={newComment}
                  onChange={e => setnewComment(e.target.value)}
                />
              </Grid>
              <Grid item>
                <Button onClick={submitComment}>submit</Button>
              </Grid>
            </Grid>
          </Card>
        )}
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
