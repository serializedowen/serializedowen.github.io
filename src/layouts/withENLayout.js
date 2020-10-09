import React from 'react'

import messages from '../lang/en'

import Layout from './index'

export default Component => props => {
  return (
    <Layout {...props} i18nMessages={messages}>
      <Component {...props}></Component>
    </Layout>
  )
}

// export default props => <Layout {...props} i18nMessages={messages} />
