import React from 'react'
import { Router } from '@reach/router'
import Account from 'src/app/Account'
import withENLayout from 'src/layouts/withENLayout'

function App() {
  return (
    <Router basepath="/app">
      <Account path="/account"></Account>
    </Router>
  )
}

export default withENLayout(App)
