/* eslint-disable react/display-name */
import React from 'react'
import { navigate, Redirect } from '@reach/router'
import useAuthentication from 'src/hooks/useAuthentication'
import { CircularProgress } from '@material-ui/core'

export default function Authenticated(Component) {
  return (...params) => {
    const { isAuthenticated, authenticationLoading } = useAuthentication()

    if (!isAuthenticated) {
      if (!authenticationLoading) navigate('/')
      return <CircularProgress></CircularProgress>
    }
    return <Component {...params}></Component>
  }
}
