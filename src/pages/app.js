import React from 'react'
import { Router } from '@reach/router'
import withENLayout from 'src/layouts/withENLayout'
import Routes from './routes'

function App() {
  return <Router basepath="/app">{Routes()}</Router>
}

export default withENLayout(App)
