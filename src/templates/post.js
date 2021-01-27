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
  SEO,
  PrevNext,
  Content
} from 'src/components'

import {
  Button,
  TextField,
  Card,
  Grid,
  Avatar,
  Typography
} from '@material-ui/core'
import config from '../../config/SiteConfig'
import '../utils/medium-editor.css'
import 'medium-editor/dist/css/medium-editor.min.css'
import withENLayout from 'src/layouts/withENLayout'
import useAuthentication from 'src/hooks/useAuthentication'
import useIdentifier from 'src/hooks/useIdentifier'
import axios from 'src/utils/http'

import { useQuery } from 'react-query'
import Comment from 'src/components/Comment'
import 'src/themes/raw.css'

const PostContent = styled.div`
  outline: none;
  margin-top: 4rem;
`

const Post = props => {
  const identifier = useIdentifier()

  const { user, isAuthenticated } = useAuthentication()

  const [newComment, setnewComment] = useState('')

  const commentsQuery = useQuery(
    `comments${identifier}`,
    () =>
      axios.get('/comments/' + identifier).then(res => {
        return res.data
      }),
    { initialData: [], forceFetchOnMount: true }
  )

  const submitComment = () => {
    return axios
      .post('/comments/' + identifier + '/add', { content: newComment })
      .then(() => {
        setnewComment('')
        commentsQuery.refetch()
      })
  }

  const {
    pageContext: { slug, prev, next },
    data: { markdownRemark: postNode }
  } = props

  const post = postNode.frontmatter

  console.log('render post')
  return (
    <Wrapper>
      <ProgressBar></ProgressBar>
      <SEO postPath={slug} postNode={postNode} postSEO />
      <Helmet title={`${post.title} | ${config.siteTitle}`} />
      <Header>
        <Link to="/">{config.siteTitle}</Link>
      </Header>
      <Content>
        <Typography variant="h3">{post.title}</Typography>
        <div id="medium-toolbar" />
        <Typography variant="subtitle2">
          {post.date} &mdash; {postNode.timeToRead} Min Read &mdash; In{' '}
          <Link to={`/categories/${kebabCase(post.category)}`}>
            {post.category}
          </Link>
        </Typography>
        <PostContent
          className="editable"
          id="markdown"
          dangerouslySetInnerHTML={{ __html: postNode.html }}
        />
        <PrevNext prev={prev} next={next} />
        <div>
          {commentsQuery.data.map((comment, index) => (
            <Comment
              key={index}
              comment={comment}
              refresh={commentsQuery.refetch}
            ></Comment>
          ))}
        </div>

        {isAuthenticated ? (
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
        ) : (
          <Card>你必须登录才能发表评论</Card>
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
