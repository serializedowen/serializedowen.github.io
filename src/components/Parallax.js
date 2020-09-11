import React, { useEffect } from 'react'
import lax from 'lax.js'
import styled from 'styled-components'

const Parallaxee = styled.div`
  position: fixed;
  background-image: url('/parallax.jpg');
  /* background-attachment: fixed;
  background-position: center; */
  /* transform: translate(-50%, 50%); */
  width: 200vw;
  top: -90%;
  left: -50%;
  height: 200vh;
  z-index: -1;
`

export default function Parallax() {
  useEffect(() => {
    let timer

    lax.setup() // init

    const updateLax = () => {
      lax.update(window.scrollY)
      timer = window.requestAnimationFrame(updateLax)
    }

    console.log(lax)

    timer = window.requestAnimationFrame(updateLax)

    return () => {
      window.cancelAnimationFrame(timer)
    }
  }, [])
  return (
    <Parallaxee
      className="lax"
      data-lax-translate-y="0 0, vh 400"
      data-lax-blur="(vh*0.3) 0, 0 40"
    />
  )
}
