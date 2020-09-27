/* eslint-disable react/prop-types */
import React, { useCallback } from 'react'
import styled from 'styled-components'
import Button from './Button'
import smoothScroll from '../utils/smoothScroll'

const RoundedButton = styled(Button)`
  border-radius: 50%;
  position: fixed;
  z-index: 200;
  width: 60px;
  display: inline-flex;
  justify-content: center;
  align-content: center;
  height: 60px;
  bottom: 1em;
  right: 1em;
`

export default function Scroller({ onClick, ...rest }) {
  const clickCb = useCallback(
    (...args) => {
      smoothScroll(0)
      return onClick && onClick(...args)
    },
    [onClick]
  )

  return <RoundedButton {...rest} onClick={clickCb}></RoundedButton>
}
