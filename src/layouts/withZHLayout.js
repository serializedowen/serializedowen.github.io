import React from 'react'

import messages from '../lang/zh'
import Layout from './index'
import '@formatjs/intl-relativetimeformat/polyfill'
import '@formatjs/intl-relativetimeformat/locale-data/zh' // locale-data for en

export default Component => props => {
  return (
    <Layout {...props} i18nMessages={messages}>
      <Component {...props}></Component>
    </Layout>
  )
}
