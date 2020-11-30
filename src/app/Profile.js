import React, { Suspense } from 'react'
import {
  Card,
  CardContent,
  Avatar,
  TextField,
  Typography,
  CircularProgress,
  styled
} from '@material-ui/core'

import { Skeleton } from '@material-ui/lab'
import { useQuery } from 'react-query'
import { useLocation, useParams } from '@reach/router'
import http from 'src/utils/http'

export default function Profile() {
  const { id } = useParams()

  const { isLoading, data, error } = useQuery(`UserProfile${id}`, () =>
    http.get(`/auth/${id}`)
  )

  return (
    <Card style={{ margin: '2em auto', maxWidth: '500px' }} elevation={3}>
      <CardContent>
        {error && (
          <Typography variant="h6">Error Fetching User Profile</Typography>
        )}

        {isLoading && (
          <>
            <Skeleton variant="circle" width={200} height={200}></Skeleton>
            <Skeleton variant="text" width={300} height={40}></Skeleton>
            <Skeleton variant="text" height={40}></Skeleton>
            <Skeleton variant="text" height={40}></Skeleton>
            <Skeleton variant="text" height={40}></Skeleton>
          </>
        )}

        {!isLoading && !error && (
          <>
            <Avatar
              src={data.data.avatarUrl}
              alt="avatar"
              style={{
                width: '200px',
                height: '200px'
              }}
            ></Avatar>
            <Typography variant="h4"> {data.data.name}</Typography>
            <TextField
              label="年龄"
              name="age"
              fullWidth
              value={data.data.age}
              margin="normal"
            />
            <TextField
              label="邮箱"
              name="email"
              fullWidth
              value={data.data.email}
              margin="normal"
            />
            <TextField
              label="电话"
              name="phone"
              fullWidth
              value={data.data.phone}
              margin="normal"
            />
          </>
        )}
      </CardContent>
    </Card>
  )
}
