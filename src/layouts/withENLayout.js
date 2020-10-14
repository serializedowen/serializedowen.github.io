import React from 'react'

import messages from '../lang/en'

import Layout from './index'
import '@formatjs/intl-relativetimeformat/polyfill'
import '@formatjs/intl-relativetimeformat/locale-data/en' // locale-data for en

export default Component => props => {
  return (
    <Layout {...props} i18nMessages={messages}>
      <Component {...props}></Component>
    </Layout>
  )
}

// export default props => <Layout {...props} i18nMessages={messages} />
