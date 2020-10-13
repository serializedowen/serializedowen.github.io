import React from 'react'
import styled from 'styled-components'
import { Link, withPrefix } from 'gatsby'
import { opacify } from 'polished'
import { FormattedMessage } from 'react-intl'
import SocialIcon from '../SocialIcon'
import AuthenticationMenu from './AuthenticationMenu'
import LanguageMenu from './LanguageMenu'
import GitHubLink from '../GitHubLink'

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
  z-index: 200;
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
    <GitHubLink></GitHubLink>
    <div>
      <Nav>
        <Link to="/">
          <FormattedMessage id="mainPage"></FormattedMessage>
        </Link>
        {/* <Link to="/">Resume</Link> */}
        <Link to="/categories">
          <FormattedMessage id="blog"></FormattedMessage>
        </Link>
        <Link to="/docs">
          <FormattedMessage id="docs"></FormattedMessage>
        </Link>
        <Link to="/contact">
          <FormattedMessage id="contact"></FormattedMessage>
        </Link>
      </Nav>
      <Icons>
        <LanguageMenu></LanguageMenu>
        <AuthenticationMenu></AuthenticationMenu>
        <SocialIcon.GitHub link="https://github.com/serializedowen" />
        <SocialIcon.LinkedIn link="https://www.linkedin.com/in/jiahao-wang-7319b45b/" />
        <SocialIcon.Wechat link={withPrefix('/social/QRcode.jpg')} />
        <SocialIcon.Facebook link="https://www.facebook.com/owentheoracle" />
      </Icons>
      {/* <AuthenticationMenu /> */}
    </div>
  </NavWrap>
)

export default Navigation
