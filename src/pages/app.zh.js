import React from 'react'
import { Router } from '@reach/router'
import Account from 'src/app/Account'
import withZHLayout from 'src/layouts/withZHLayout'

function App() {
  return (
    <Router basepath="/zh/app">
      <Account path="/account"></Account>
    </Router>
  )
}

export default withZHLayout(App)
