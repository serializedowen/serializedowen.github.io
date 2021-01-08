import React, { useEffect } from 'react'
import lax from 'lax.js'
import styled from 'styled-components'

const Background = styled.div`
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
  // useEffect(() => {
  //   lax.init()

  //   lax.addDriver('scrollY', () => window.scrollY)

  //   lax.addElements(
  //     '.background-lax',
  //     {
  //       scrollY: {
  //         rotate: [
  //           [0, 1e9],
  //           [0, 1e9]
  //         ]
  //       }
  //     },
  //     []
  //   )
  //   return () => {}
  // }, [])

  return <Background className="background-lax" />
}
