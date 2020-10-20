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

import qs from 'qs'
import * as Yup from 'yup'
import Wechat from 'src/components/SocialIcon/Wechat'
import GitHub from 'src/components/SocialIcon/GitHub'
import { get } from 'lodash'
import Visibility from '@material-ui/icons/Visibility'
import VisibilityOff from '@material-ui/icons/VisibilityOff'
import getLoginUrl from 'src/utils/getLoginUrl'

export default function Login() {
  const { state } = useLocation()
  const [showPassword, setshowPassword] = useState(false)

  const togglePassword = () => setshowPassword(val => !val)
  const signinGithub = useCallback(() => {
    window.location = getLoginUrl('github', { redirect: get(state, 'href') })
  }, [])

  return (
    <Card style={{ margin: '2em auto', maxWidth: '400px' }}>
      <CardContent>
        <Formik
          initialValues={{ username: '', password: '' }}
          onSubmit={values => {
            window.location = getLoginUrl('local', {
              redirect: get(state, 'href'),
              ...values
            })
          }}
          validationSchema={Yup.object().shape({
            username: Yup.string()
              .required('用户名是必填项')
              .min(6, '用户名必须6位以上'),
            password: Yup.string()
              .required('密码是必填项')
              .min(6, '密码必须6位以上')
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
                <div style={{ textAlign: 'center' }}>
                  <Button size="large">注册</Button>
                  <Button size="large" type="submit" variant="outlined">
                    登录
                  </Button>
                </div>
              </Form>
            )
          }}
        </Formik>

        <div style={{ textAlign: 'center' }}>
          <div>
            <Typography>第三方登录</Typography>
          </div>

          <IconButton onClick={signinGithub}>
            <GitHub></GitHub>
          </IconButton>
          <IconButton>
            <Wechat></Wechat>
          </IconButton>
        </div>
      </CardContent>
    </Card>
  )
}
