import React, { useState, useCallback } from 'react'
import RelativeTimeStamp from 'src/components/RelativeTimeStamp'
import ActionDelete from 'src/components/ActionDelete'
import ActionThumbUp from 'src/components/ActionThumbUp'
import useIdentifier from 'src/hooks/useIdentifier'
import useAuthentication from 'src/hooks/useAuthentication'
import { Link } from 'gatsby'
import axios from 'src/utils/http'
import { Typography, Card, CardHeader, Avatar } from '@material-ui/core'

export default function Comment({ comment, refresh }) {
  const identifier = useIdentifier()
  const { isAuthenticated, user } = useAuthentication()
  const deleteComment = commentId => {
    return axios
      .delete(`/comments/${identifier}/${commentId}/delete`)
      .then(() => {
        refresh && refresh()
      })
  }

  const [locallyLiked, setlocallyLiked] = useState(false)

  const isLiked =
    locallyLiked ||
    Array.prototype.some.call(
      comment.likes,
      like => like.userId === user.userId
    )

  const toggleLike = useCallback(() => {
    if (isLiked)
      return axios
        .delete(`/comments/${identifier}/${comment.id}/like`)
        .then(() => setlocallyLiked(false))

    return axios
      .post(`/comments/${identifier}/${comment.id}/like`)
      .then(() => setlocallyLiked(true))
  }, [isLiked])

  return (
    <Card key={comment.id} elevation={2} style={{ margin: '0.5em' }}>
      <CardHeader
        avatar={
          <Avatar
            aria-label="avatar"
            alt={comment.user.name}
            src={comment.user.avatarUrl}
          ></Avatar>
        }
        title={
          <>
            <Typography variant="caption" style={{ marginRight: '1em' }}>
              <Link to={`/app/account/${comment.userId}`}>
                {comment.user.name}
              </Link>
            </Typography>
            <RelativeTimeStamp time={comment.createdAt}></RelativeTimeStamp>
          </>
        }
        subheader={
          <>
            <Typography variant="body1"> {comment.content}</Typography>
            <div>
              <ActionThumbUp
                color={isLiked ? 'primary' : 'disabled'}
                action={toggleLike}
              ></ActionThumbUp>
            </div>
          </>
        }
        action={
          isAuthenticated &&
          comment.userId === user.userId && (
            <ActionDelete
              action={() => deleteComment(comment.id)}
            ></ActionDelete>
          )
        }
      ></CardHeader>
    </Card>
  )
}
