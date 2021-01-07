import React from 'react'
import { Router } from '@reach/router'
import withZHLayout from 'src/layouts/withZHLayout'
import Account from 'src/app/Account'
import Bookmarks from 'src/app/Bookmarks'
import Login from 'src/app/Login'
import Register from 'src/app/Register'
import Profile from 'src/app/Profile'
import MarkdownEditor from 'src/app/MarkdownEditor'
import View from 'src/app/MarkdownEditor/View'
import Loadable from '@loadable/component'
import Collection from 'src/app/MarkdownEditor/Collection'

const MarkDownEditorLiteImpl = Loadable(() =>
  import('src/app/MarkdownEditor/MarkDownEditorLiteImpl')
)

function App() {
  return (
    <Router basepath="/zh/app">
      <Profile path="/account/:id"></Profile>
      <Account path="/account"></Account>
      <Bookmarks path="/bookmarks"></Bookmarks>
      <Login path="/login"></Login>
      <Register path="/register"></Register>
      <MarkdownEditor path="/markdown">
        <Collection path="/"></Collection>
        <MarkDownEditorLiteImpl path="/draft"></MarkDownEditorLiteImpl>
        <View path="/:id"></View>
        <MarkDownEditorLiteImpl path="/:id/edit"></MarkDownEditorLiteImpl>
      </MarkdownEditor>
    </Router>
  )
}

export default withZHLayout(App)
