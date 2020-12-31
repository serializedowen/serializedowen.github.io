import React from 'react'
import { Router } from '@reach/router'
import Account from 'src/app/Account'
import withZHLayout from 'src/layouts/withZHLayout'
import Bookmarks from 'src/app/Bookmarks'
import Login from 'src/app/Login'
import Profile from 'src/app/Profile'
import Register from 'src/app/Register'
import MarkdownEditor from 'src/app/MarkdownEditor'

function App() {
  return (
    <Router basepath="/zh/app">
      <Profile path="/account/:id"></Profile>
      <Account path="/account"></Account>
      <Bookmarks path="/bookmarks"></Bookmarks>
      <Login path="/login"></Login>
      <Register path="/register"></Register>
      <MarkdownEditor path="/markdown"></MarkdownEditor>
    </Router>
  )
}

export default withZHLayout(App)
