import React from 'react'

import GitHub from './GitHub'
import LinkedIn from './LinkedIn'
import Wechat from './Wechat'
import Facebook from './Facebook'

export default { GitHub, LinkedIn, Wechat, Facebook }

const mapping = {
  github: GitHub,
  linkedin: LinkedIn,
  wechat: Wechat,
  facebook: Facebook
}

export const PolymorphicIcon = ({ type, ...rest }) => {
  const Component = mapping[type] || (() => <h1>Error</h1>)
  return <Component {...rest}></Component>
}
