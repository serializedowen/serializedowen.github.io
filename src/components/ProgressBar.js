import React, { useState, useEffect } from 'react'
import styled from 'styled-components'

const Progress = styled.div`
  position: fixed;
  background-color: #4ea6ec;
  height: 2px;
  z-index: 200;
  width: 100%;
  transition: 0.2s;
  left: -100%;
`

export default function ProgressBar() {
  const [progress, setprogress] = useState(0)

  useEffect(() => {
    let handler
    setTimeout(() => {
      const height = document.body.clientHeight
      const { innerHeight } = window

      handler = () => {
        setprogress(Number((window.scrollY * 100) / (height - innerHeight)))
      }
      window.addEventListener('scroll', handler)
    }, 500)
    return () => {
      window.removeEventListener('scroll', handler)
    }
  }, [])

  return <Progress style={{ transform: `translateX(${progress}%)` }}></Progress>
}
