import React from 'react'
import styled from 'styled-components'
import { Link, withPrefix } from 'gatsby'
import { opacify } from 'polished'

import SocialIcon from '../SocialIcon'
import AuthenticationMenu from './AuthenticationMenu'

const Nav = styled.nav.attrs({
  role: 'navigation'
})`
  background: ${props => opacify(0.8, props.theme.colors.primary)};
  opacity: 0.9;
  height: 50px;
  overflow: auto;
  max-width: 1080px;
  a {
    margin-left: 0.8rem;
    margin-right: 0.8rem;
    color: ${props => props.theme.colors.secondary};
    padding: 0.2rem;
    border-radius: 5px;
    &:hover {
      background: rgba(255, 255, 255, 0.4);
    }
  }
`

const NavWrap = styled.div`
  padding-left: 2em;
  position: sticky;
  z-index: 9999;
  top: 0;
  opacity: 0.9;

  background: ${props => opacify(0.8, props.theme.colors.primary)};

  padding-right: 2em;

  & > div {
    display: flex;
    margin: auto;
    max-width: 1000px;
  }

  & > div > * {
    display: flex;
    box-shadow: inset 0 -1px 0 0px rgba(0, 0, 0, 0.1);
    align-items: center;
    z-index: 10;
  }
`

const Icons = styled.span`
  margin-left: auto;
  & > * {
    margin: 0.3rem;
  }
`

const Navigation = () => (
  <NavWrap>
    <div>
      <Nav>
        <Link to="/">Home</Link>
        <Link to="/resume">Resume</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/categories">Blog</Link>
      </Nav>
      <Icons>
        <SocialIcon.GitHub link="https://github.com/serializedowen" />
        <SocialIcon.LinkedIn link="https://www.linkedin.com/in/jiahao-wang-7319b45b/" />
        <SocialIcon.Wechat link={withPrefix('/social/QRcode.jpg')} />
        <SocialIcon.Facebook link="https://www.facebook.com/owentheoracle" />
      </Icons>
      <AuthenticationMenu />
    </div>
  </NavWrap>
)

export default Navigation