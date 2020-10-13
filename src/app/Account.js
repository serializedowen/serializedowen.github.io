import React, { useState, useEffect } from 'react'
import {
  Card,
  CardActions,
  CardContent,
  Button,
  TextField,
  Input
} from '@material-ui/core'
import useAuthentication from 'src/hooks/useAuthentication'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import axios from 'src/utils/http'
import * as Yup from 'yup'

export default function Account() {
  const user = useAuthentication()
  const [showForm, setshowForm] = useState(false)

  useEffect(() => {
    if (user && user.userModel) {
      setTimeout(() => {
        setshowForm(true)
      }, 200)
    }

    return () => {}
  }, [user])

  // const [state, dispatch] = useReducer(reducer, initialState, init)

  return (
    <Card style={{ margin: '2em auto', maxWidth: '500px' }}>
      <CardContent>
        {showForm && (
          <Formik
            // initialValues={JSON.parse(JSON.stringify(user.userModel))}
            initialValues={user.userModel}
            onSubmit={values => {
              axios.post(`/auth/${user.userId}/update`, values).then(() => {
                window.localStorage.removeItem('user')
                window.location.reload()
              })
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
                errors,
                touched
              } = props

              return (
                <Form onSubmit={handleSubmit}>
                  <img
                    src={values.avatarUrl}
                    with={200}
                    alt="avatar"
                    height={200}
                    style={{ borderRadius: '1em' }}
                  ></img>
                  <TextField
                    label="用户名"
                    name="name"
                    fullWidth
                    variant="filled"
                    value={values.name}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={errors.name}
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
                    error={errors.email}
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
                    error={errors.age}
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
                    error={errors.phone}
                    helperText={errors.phone && touched.phone && errors.phone}
                    margin="normal"
                  />
                  <Button type="submit">更新</Button>
                </Form>
              )
            }}
          </Formik>
        )}
      </CardContent>
      <CardActions></CardActions>
    </Card>
  )
}
