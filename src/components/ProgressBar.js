import React from 'react'
import styled from 'styled-components'

const Progress = styled.div`
  position: fixed;
  /* background-color: ${props => props.theme.colors.secondary}; */
  background-color: #4EA6EC;
  height: 2px;
  z-index: 200;
  width: 100%;
  transition: 0.2s;
  left: -100%;
`

export default function ProgressBar(prop) {
  return (
    <Progress style={{ transform: `translateX(${prop.progress}%)` }}></Progress>
  )
}
