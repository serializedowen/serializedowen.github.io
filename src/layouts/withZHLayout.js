import React from 'react'
// import { addLocaleData } from 'react-intl'
// import zh from 'react-intl/locale-data/zh'
import messages from '../lang/zh'
import Layout from './index'

// import 'intl/locale-data/jsonp/en';
// addLocaleData(zh)

console.log('eee')

export default Component => props => {
  console.log(props)
  return (
    <Layout {...props} i18nMessages={messages}>
      <Component {...props}></Component>
    </Layout>
  )
}

// export default props => <Layout {...props} i18nMessages={messages} />
