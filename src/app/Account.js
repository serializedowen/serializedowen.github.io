import React, { useState, useEffect } from 'react'
import {
  Card,
  CardActions,
  CardContent,
  Button,
  TextField,
  Typography,
  CircularProgress,
  styled
} from '@material-ui/core'
import useAuthentication from 'src/hooks/useAuthentication'
import { Formik, Form, Field, ErrorMessage } from 'formik'

import * as Yup from 'yup'
import AvatarUploader from 'src/components/AvatarUploader'
import { PolymorphicIcon } from 'src/components/SocialIcon'
import Authenticated from 'src/hoc/Authenticated'
import { useQuery } from 'react-query'
import http from 'src/utils/http'

const ColumnFlex = styled('div')`
  display: flex;
  flex-direction: column;
`

function Account() {
  const { user, refresher } = useAuthentication()

  const requestData = useQuery('providerData', () =>
    http.get('/auth/linked-providers')
  )
  const { data, error, isLoading } = requestData

  return (
    <Card style={{ margin: '2em auto', maxWidth: '500px' }}>
      <CardContent>
        <Formik
          initialValues={user.userModel || {}}
          onSubmit={values => {
            http.post(`/auth/${user.userId}/update`, values).then(refresher)
          }}
          validationSchema={Yup.object().shape({
            email: Yup.string()
              .email('必须是一个合法的邮箱地址')
              .required('必填项'),
            name: Yup.string()
              .required('必填项')
              .min(5),
            phone: Yup.string(),
            age: Yup.number().required('必填项')
          })}
        >
          {props => {
            const {
              values,
              handleChange,
              handleBlur,
              handleSubmit,
              handleReset,
              errors,
              touched
            } = props

            return (
              <Form onSubmit={handleSubmit}>
                <ColumnFlex>
                  <AvatarUploader
                    src={values.avatarUrl}
                    alt="avatar"
                    style={{
                      width: '200px',
                      height: '200px'
                    }}
                  ></AvatarUploader>

                  <Typography>已关联账号：</Typography>
                  {isLoading ? (
                    <CircularProgress></CircularProgress>
                  ) : (
                    !error &&
                    data.data.map(item => (
                      <PolymorphicIcon
                        type={item.provider}
                        key={item.providerId}
                      ></PolymorphicIcon>
                    ))
                  )}
                </ColumnFlex>
                <TextField
                  label="用户名"
                  name="name"
                  fullWidth
                  variant="filled"
                  value={values.name}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={Boolean(errors.name)}
                  helperText={errors.name && touched.name && errors.name}
                  margin="normal"
                />
                <TextField
                  label="邮箱"
                  name="email"
                  fullWidth
                  variant="filled"
                  value={values.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={Boolean(errors.email)}
                  helperText={errors.email && touched.email && errors.email}
                  margin="normal"
                />
                <TextField
                  label="年龄"
                  name="age"
                  fullWidth
                  type="number"
                  value={values.age}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={Boolean(errors.age)}
                  helperText={errors.age && touched.age && errors.age}
                  margin="normal"
                />
                <TextField
                  label="电话"
                  name="phone"
                  fullWidth
                  value={values.phone}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={Boolean(errors.phone)}
                  helperText={errors.phone && touched.phone && errors.phone}
                  margin="normal"
                />
                <Button type="submit">更新</Button>
              </Form>
            )
          }}
        </Formik>
      </CardContent>
      <CardActions></CardActions>
    </Card>
  )
}

export default Authenticated(Account)
