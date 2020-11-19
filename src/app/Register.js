import React, { useCallback, useState } from 'react'
import { useLocation, navigate } from '@reach/router'
import {
  Card,
  CardContent,
  TextField,
  IconButton,
  Input,
  InputAdornment,
  Button,
  Typography
} from '@material-ui/core'
import { Formik, Form, Field, ErrorMessage } from 'formik'

import * as Yup from 'yup'

import Visibility from '@material-ui/icons/Visibility'
import VisibilityOff from '@material-ui/icons/VisibilityOff'
import getLoginUrl from 'src/utils/getLoginUrl'
import Facebook from 'src/components/SocialIcon/Facebook'
import http from 'src/utils/http'
import useLoginFunction from 'src/hooks/useLoginFunction'

export default function Register() {
  const localLogin = useLoginFunction('local')

  const [showPassword, setshowPassword] = useState(false)
  const togglePassword = () => setshowPassword(val => !val)

  return (
    <Card style={{ margin: '2em auto', maxWidth: '400px' }}>
      <CardContent>
        <Formik
          initialValues={{
            username: '',
            password: '',
            passwordConfirm: '',
            email: ''
          }}
          onSubmit={values => {
            http
              .post(`/auth/register`, {
                name: values.username,
                password: values.password,
                email: values.email
              })
              .then(() =>
                localLogin({
                  username: values.username,
                  password: values.password
                })
              )
          }}
          validationSchema={Yup.object().shape({
            username: Yup.string()
              .required('用户名是必填项')
              .min(6, '用户名必须6位以上'),
            password: Yup.string()
              .required('密码是必填项')
              .min(6, '密码必须6位以上'),
            passwordConfirm: Yup.string()
              .required('密码是必填项')
              .min(6, '密码必须6位以上'),

            email: Yup.string()
              .email('必须是邮箱地址')
              .required('邮箱是必填项')
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
                <TextField
                  label="用户名"
                  name="username"
                  fullWidth
                  variant="filled"
                  value={values.username}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={errors.username}
                  helperText={
                    errors.username && touched.username && errors.username
                  }
                  margin="normal"
                />

                <TextField
                  label="邮箱地址"
                  name="email"
                  fullWidth
                  variant="filled"
                  value={values.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={errors.email}
                  helperText={errors.email && touched.email && errors.email}
                  margin="normal"
                ></TextField>
                <TextField
                  label="密码"
                  name="password"
                  type={showPassword ? 'text' : 'password'}
                  fullWidth
                  variant="filled"
                  value={values.password}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={errors.password}
                  helperText={
                    errors.password && touched.password && errors.password
                  }
                  margin="normal"
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="toggle password visibility"
                          onClick={togglePassword}
                          // onMouseDown={togglePassword}
                        >
                          {showPassword ? <Visibility /> : <VisibilityOff />}
                        </IconButton>
                      </InputAdornment>
                    )
                  }}
                />

                <TextField
                  label="确认密码"
                  name="passwordConfirm"
                  type={showPassword ? 'text' : 'password'}
                  fullWidth
                  variant="filled"
                  value={values.passwordConfirm}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={errors.passwordConfirm}
                  helperText={
                    errors.passwordConfirm &&
                    touched.passwordConfirm &&
                    errors.passwordConfirm
                  }
                  margin="normal"
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="toggle password visibility"
                          onClick={togglePassword}
                          // onMouseDown={togglePassword}
                        >
                          {showPassword ? <Visibility /> : <VisibilityOff />}
                        </IconButton>
                      </InputAdornment>
                    )
                  }}
                ></TextField>

                <div style={{ textAlign: 'center' }}>
                  <Button size="large" type="submit">
                    注册
                  </Button>
                </div>
              </Form>
            )
          }}
        </Formik>
      </CardContent>
    </Card>
  )
}
