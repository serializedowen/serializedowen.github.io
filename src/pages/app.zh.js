import React from 'react'
import { Router } from '@reach/router'
import withZHLayout from 'src/layouts/withZHLayout'
import Routes from './routes'

function App() {
  return <Router basepath="/zh/app">{Routes()}</Router>
}

export default withZHLayout(App)
