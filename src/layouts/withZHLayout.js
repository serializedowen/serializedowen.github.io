import React from 'react'

import messages from '../lang/zh'
import Layout from './index'

export default Component => props => {
  return (
    <Layout {...props} i18nMessages={messages}>
      <Component {...props}></Component>
    </Layout>
  )
}
