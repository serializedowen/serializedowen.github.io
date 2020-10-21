/* eslint no-unused-expressions:0 */

import React, { useEffect, useState, useCallback } from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql, withPrefix } from 'gatsby'
import styled, { ThemeProvider, createGlobalStyle } from 'styled-components'
import VerticalAlignTopIcon from '@material-ui/icons/VerticalAlignTop'
import { getCurrentLangKey, getLangs, getUrlForLang } from 'ptz-i18n'
import { IntlProvider, FormattedMessage } from 'react-intl'
import {
  createMuiTheme,
  ThemeProvider as MuiThemeProvider
} from '@material-ui/core/styles'

import SEO from 'src/components/SEO'
import theme from '../../config/Theme'
import { media } from 'src/utils/media'
import Navigation from 'src/components/Navigation'
import SocialIcon from 'src/components/SocialIcon'
import Parallax from 'src/components/Parallax'
import Scroller from 'src/components/Scroller'
import axios from 'src/utils/http'
import { AuthenticationContext } from 'src/hooks/useAuthentication'
import { Dialog, DialogTitle, Typography } from '@material-ui/core'
const Login = React.lazy(() => import('src/app/Login'))

const muiTheme = createMuiTheme({
  palette: {
    type: 'dark'
  }
})

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

const Layout = ({ children, location, pageContext, i18nMessages }) => {
  const [authentication, setauthentication] = useState(null)

  const [refresh, setrefresh] = useState(false)

  const refresher = useCallback(() => {
    window.localStorage.removeItem('user')
    setrefresh(val => !val)
  }, [])

  const [showLogin, setshowLogin] = useState(false)

  useEffect(() => {
    window.__401auth = () => {
      window.localStorage.removeItem('user')
      setshowLogin(true)
    }
    return () => {}
  }, [])

  useEffect(() => {
    try {
      const user = JSON.parse(window.localStorage.getItem('user'))

      if (!user || !user.userModel) throw new Error()

      setauthentication(user)
    } catch (e) {
      axios
        .get('/auth/decodeToken')
        .then(res => {
          const { data } = res
          window.localStorage.setItem('user', JSON.stringify(data))
          setauthentication(data)
        })
        .catch(() => setauthentication({}))
    }
  }, [refresh])

  const isAuthenticated = authentication && authentication.userModel

  return (
    <StaticQuery
      query={graphql`
        query LayoutQuery {
          site {
            buildTime(formatString: "DD.MM.YYYY")
            siteMetadata {
              languages {
                defaultLangKey
                langs
              }
            }
          }
        }
      `}
      render={data => {
        const url = location.pathname
        const { langs, defaultLangKey } = data.site.siteMetadata.languages
        const langKey = getCurrentLangKey(langs, defaultLangKey, url)

        return (
          <AuthenticationContext.Provider
            value={{ user: authentication, refresher, isAuthenticated }}
          >
            <MuiThemeProvider theme={muiTheme}>
              <IntlProvider locale={langKey} messages={i18nMessages}>
                <ThemeProvider theme={theme}>
                  <React.Fragment>
                    <Parallax />
                    <SEO />
                    <GlobalStyle />
                    <Navigation />
                    {children}

                    <Dialog
                      open={showLogin}
                      onClose={() => setshowLogin(false)}
                    >
                      <DialogTitle>
                        <Typography>登录</Typography>
                      </DialogTitle>
                      <React.Suspense fallback={'加载中'}>
                        <Login></Login>
                      </React.Suspense>
                    </Dialog>
                    <Scroller>
                      <VerticalAlignTopIcon
                        style={{ marginRight: '0px', transform: 'scale(1.5)' }}
                      ></VerticalAlignTopIcon>
                    </Scroller>
                    {pageContext.layout !== 'docs' && (
                      <Footer>
                        <div>
                          <SocialIcon.GitHub link="https://github.com/serializedowen" />
                          <SocialIcon.LinkedIn link="https://www.linkedin.com/in/jiahao-wang-7319b45b/" />
                          <SocialIcon.Wechat
                            link={withPrefix('/social/QRcode.jpg')}
                          />
                          <SocialIcon.Facebook link="https://www.facebook.com/owentheoracle" />
                        </div>
                        <FormattedMessage id="copyrights"></FormattedMessage>{' '}
                        <br />
                        <a href="https://github.com/serializedowen/serializedowen.github.io">
                          GitHub Repository
                        </a>{' '}
                        <br />
                        <span>Last build: {data.site.buildTime}</span>
                        <br />
                        <a href="http://beian.miit.gov.cn/">
                          浙ICP备2020034764
                        </a>
                      </Footer>
                    )}
                  </React.Fragment>
                </ThemeProvider>
              </IntlProvider>
            </MuiThemeProvider>
          </AuthenticationContext.Provider>
        )
      }}
    />
  )
}

export default Layout

Layout.propTypes = {
  children: PropTypes.oneOfType([PropTypes.array, PropTypes.node]).isRequired
}
