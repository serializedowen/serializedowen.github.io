import React, { useEffect } from 'react'
import lax from 'lax.js'
import styled from 'styled-components'

const Parallaxee = styled.div`
  position: fixed;
  background-image: url('parallax.jpg');
  background-attachment: fixed;
  background-position: center;
  /* transform: translate(-50%, 50%); */
  width: 200vw;
  height: 200vh;
  z-index: -1;
`

export default function Parallax() {
  useEffect(() => {
    console.log('sssee')

    lax.setup() // init

    const updateLax = () => {
      lax.update(window.scrollY)
      window.requestAnimationFrame(updateLax)
    }

    console.log(lax)

    window.requestAnimationFrame(updateLax)
  }, [])
  return <Parallaxee className="lax" data-lax-preset="blurIn" />
}
