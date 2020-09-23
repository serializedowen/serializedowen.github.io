import styled, { keyframes, css } from 'styled-components'
import React, { useState, useRef, useCallback } from 'react'
import { lighten } from 'polished'
import { Transition } from 'react-transition-group'

const scaleIn = keyframes`
  0% {
    transform: scale(0);
    opacity: 0.5;
  },

  100% {
    transform: scale(1)
  }
`

const fade = keyframes`
  100% {
    opacity: 0.01;
  }
`

const Ripple = styled.span`
  position: absolute;

  opacity: 0.2;
  left: ${props => props.x || '-50%'};
  top: ${props => props.y || '-50%'};

  width: 200%;
  height: 200%;
  background-color: white;
  overflow: hidden;
  animation: ${props => {
    switch (props.status) {
      case 'entering':
        return css`0.7s ${scaleIn} ease-out`
      case 'exiting':
        return css`0.2s ${fade} ease-out`
      default:
        return ``
    }
  }};
`

const StyledButton = styled.button`
  overflow: hidden;
  background: ${props => props.theme.colors.primary};
  border: none;
  position: relative;
  display: inline-flex;
  align-items: center;
  border-radius: ${props => (props.big ? '1.5rem' : '1rem')};
  font-size: ${props => (props.big ? '1.2rem' : '1rem')};
  color: white;
  padding: ${props => (props.big ? '0.35rem 1.6rem' : '0.25rem 1.5rem')};
  transition: all ${props => props.theme.transitions.normal};
  box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08);
  &:hover {
    background: ${props => lighten(0.05, props.theme.colors.primary)};
    cursor: pointer;
    transform: translateY(-2px);
  }
  &:focus {
    outline: none;
  }
  svg {
    width: 20px;
    height: 20px;
    margin-right: 0.75rem;
    fill: white;
  }
`

const noop = () => {}

function Button({ onMouseDown, ...rest }) {
  const [ripple, setripple] = useState({ playing: false, x: 0, y: 0 })
  const [released, setreleased] = useState(false)
  const buttonRef = useRef(null)

  const tryRelease = useCallback(() => {
    if (released) {
      setripple({ playing: false })
    }
    setreleased(true)
  }, [released])

  return (
    <StyledButton
      {...rest}
      ref={buttonRef}
      onMouseUp={tryRelease}
      onMouseLeave={tryRelease}
      onMouseDown={e => {
        const { clientX, clientY } = e
        const { offsetTop, offsetLeft } = buttonRef.current

        setreleased(false)
        setripple({
          playing: true
          // x: -(clientX - offsetLeft) + 'px',
          // y: -(clientY - offsetTop) + 'px'
        })
        return onMouseDown && onMouseDown()
      }}
    >
      <Transition
        in={ripple.playing}
        mountOnEnter
        unmountOnExit
        onEntered={tryRelease}
        timeout={{
          enter: 700,
          exit: 200
        }}
      >
        {status => {
          return <Ripple status={status} x={ripple.x} y={ripple.y}></Ripple>
        }}
      </Transition>

      {rest.children}
    </StyledButton>
  )
}

export default Button
