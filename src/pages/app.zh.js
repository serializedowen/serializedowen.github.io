import React from 'react'
import { Router } from '@reach/router'
import Account from 'src/app/Account'
import withZHLayout from 'src/layouts/withZHLayout'
import Bookmarks from 'src/app/Bookmarks'
import Login from 'src/app/Login'
import Register from 'src/app/Register'

function App() {
  return (
    <Router basepath="/zh/app">
      <Account path="/account"></Account>
      <Bookmarks path="/bookmarks"></Bookmarks>
      <Login path="/login"></Login>
      <Register path="/register"></Register>
    </Router>
  )
}

export default withZHLayout(App)
