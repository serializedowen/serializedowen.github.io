/* eslint no-unused-expressions:0 */

import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql, withPrefix } from 'gatsby'
import styled, { ThemeProvider, createGlobalStyle } from 'styled-components'
import SEO from './SEO'

import theme from '../../config/Theme'
import { media } from '../utils/media'
import Navigation from './Navigation'
import SocialIcon from './SocialIcon'
import Parallax from './Parallax'
import Transtion from './Transition'
import Scroller from './Scroller'

const GlobalStyle = createGlobalStyle`
  ::selection {
    color: ${theme.colors.bg};
    background: ${theme.colors.primary};
    
  }
  body {
    background: ${theme.colors.bg};
    color: ${theme.colors.light};

    @media ${media.phone} {
      font-size: 14px;
    }
  }
  a {
    color: ${theme.colors.anchor};
    text-decoration: none;
    transition: all ${theme.transitions.normal};
  }
  a:hover {
    color: ${theme.colors.primary};
  }
  h1, h2, h3, h4 {
    color: ${theme.colors.grey.dark};
  }
  blockquote {
    font-style: italic;
    position: relative;
  }

  blockquote:before {
    content: "";
    position: absolute;
    background: ${theme.colors.primary};
    height: 100%;
    width: 6px;
    margin-left: -1.6rem;
  }
  label {
    margin-bottom: .5rem;
    color: ${theme.colors.grey.dark};
  }
  input, textarea {
    border-radius: .5rem;
    border: none;
    background: rgba(0, 0, 0, 0.05);
    padding: .25rem 1rem;
    &:focus {
      outline: none;
    }
  }
`

const Footer = styled.footer`
  text-align: center;
  padding: 3rem 0;
  color: ${theme.colors.secondary};

  span {
    font-size: 0.75rem;
  }

  a {
    color: ${theme.colors.secondary};
  }
`

const Layout = ({ children, location }) => (
  <StaticQuery
    query={graphql`
      query LayoutQuery {
        site {
          buildTime(formatString: "DD.MM.YYYY")
        }
      }
    `}
    render={data => (
      <ThemeProvider theme={theme}>
        <React.Fragment>
          <Parallax />
          <SEO />
          <GlobalStyle />
          <Navigation />
          {/* {children} */}
          <Transtion location={location}>{children}</Transtion>

          <Scroller>^</Scroller>
          <Footer>
            <div>
              <SocialIcon.GitHub link="https://github.com/serializedowen" />
              <SocialIcon.LinkedIn link="https://www.linkedin.com/in/jiahao-wang-7319b45b/" />
              <SocialIcon.Wechat link={withPrefix('/social/QRcode.jpg')} />
              <SocialIcon.Facebook link="https://www.facebook.com/owentheoracle" />
            </div>
            &copy; 2018 by SerializedOwen. All rights reserved. <br />
            <a href="https://github.com/serializedowen/serializedowen.github.io">
              GitHub Repository
            </a>{' '}
            <br />
            <span>Last build: {data.site.buildTime}</span>
          </Footer>
        </React.Fragment>
      </ThemeProvider>
    )}
  />
)

export default Layout

Layout.propTypes = {
  children: PropTypes.oneOfType([PropTypes.array, PropTypes.node]).isRequired
}
