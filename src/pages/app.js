import React from 'react'
import { Router } from '@reach/router'
import Account from 'src/app/Account'
import Bookmarks from 'src/app/Bookmarks'
import Login from 'src/app/Login'
import withENLayout from 'src/layouts/withENLayout'

function App() {
  return (
    <Router basepath="/app">
      <Account path="/account"></Account>
      <Bookmarks path="/bookmarks"></Bookmarks>
      <Login path="/login"></Login>
    </Router>
  )
}

export default withENLayout(App)
