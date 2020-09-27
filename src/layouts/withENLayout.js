import React from 'react'
import { addLocaleData } from 'react-intl'
import messages from '../lang/en'
// import en from 'react-intl/locale-data/en'
import Layout from './index'

// import 'intl/locale-data/jsonp/en';

// addLocaleData(en)

export default Component => props => {
  return (
    <Layout {...props} i18nMessages={messages}>
      <Component {...props}></Component>
    </Layout>
  )
}

// export default props => <Layout {...props} i18nMessages={messages} />
