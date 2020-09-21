/* eslint-disable react/prop-types */
import React, { useCallback } from 'react'
import styled from 'styled-components'
import Button from './Button'
import smoothScroll from '../utils/smoothScroll'

const RoundedButton = styled(Button)`
  border-radius: 50%;
  position: fixed;
  width: 60px;
  height: 60px;
  bottom: 1em;
  right: 1em;
`

export default function Scroller({ onClick, ...rest }) {
  const clickCb = useCallback(() => {
    smoothScroll(0)
    return onClick && onClick()
  }, [onClick])

  return <RoundedButton {...rest} onClick={clickCb}></RoundedButton>
}
