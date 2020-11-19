import React from 'react'
import { Router } from '@reach/router'
import Account from 'src/app/Account'
import Bookmarks from 'src/app/Bookmarks'
import Login from 'src/app/Login'
import Register from 'src/app/Register'
import withENLayout from 'src/layouts/withENLayout'

function App() {
  return (
    <Router basepath="/app">
      <Account path="/account"></Account>
      <Bookmarks path="/bookmarks"></Bookmarks>
      <Login path="/login"></Login>
      <Register path="/register"></Register>
    </Router>
  )
}

export default withENLayout(App)
