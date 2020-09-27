import React from 'react'
import Transtion from '../components/Transition'

export default function TransitionWrapper(props) {
  return <Transtion location={props.location}>{props.children}</Transtion>
}
