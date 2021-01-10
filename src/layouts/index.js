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
import { SnackbarProvider } from 'notistack'
import SEO from 'src/components/SEO'
import theme from '../../config/Theme'
import Navigation from 'src/components/Navigation'
import SocialIcon from 'src/components/SocialIcon'
import Parallax from 'src/components/Parallax'
import Scroller from 'src/components/Scroller'
import axios from 'src/utils/http'
import { AuthenticationContext } from 'src/hooks/useAuthentication'
import { Dialog, DialogTitle, Link, Typography } from '@material-ui/core'
import DailyCheckIn from 'src/components/DailyCheckIn'
import SnowBackground from 'src/components/SnowBackground'

const Login = React.lazy(() => import('src/app/Login'))

const muiTheme = createMuiTheme({
  palette: {
    type: 'dark'
  },
  typography: {
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"'
    ].join(',')
  }
})

const GlobalStyle = createGlobalStyle`
  ::selection {

  }

  a {
    text-decoration: none;
    transition: all ${theme.transitions.normal};
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
  span {
    font-size: 0.75rem;
  }
`

const Layout = ({ children, location, pageContext, i18nMessages }) => {
  const [authentication, setauthentication] = useState({})
  const [authenticationLoading, setauthenticationLoading] = useState(true)

  const setAuthenticationData = data => {
    setauthentication(data)
    setauthenticationLoading(false)
  }

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
      setauthenticationLoading(true)
      const user = JSON.parse(window.localStorage.getItem('user'))

      if (!user || !user.userModel) throw new Error()

      setAuthenticationData(user)
    } catch (e) {
      axios
        .get('/auth/decodeToken')
        .then(res => {
          const { data } = res
          window.localStorage.setItem('user', JSON.stringify(data))
          setAuthenticationData(data)
        })
        .catch(() => setAuthenticationData({}))
    }
  }, [refresh])

  const isAuthenticated = Boolean(authentication && authentication.userModel)

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
          <IntlProvider locale={langKey} messages={i18nMessages}>
            <AuthenticationContext.Provider
              value={{
                user: authentication,
                refresher,
                isAuthenticated,
                authenticationLoading
              }}
            >
              <SnackbarProvider maxSnack={3}>
                <MuiThemeProvider theme={muiTheme}>
                  <ThemeProvider theme={theme}>
                    <React.Fragment>
                      <SnowBackground></SnowBackground>
                      <DailyCheckIn></DailyCheckIn>
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
                          style={{
                            marginRight: '0px',
                            transform: 'scale(1.5)'
                          }}
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
                          <Typography variant="subtitle1" color="textPrimary">
                            <FormattedMessage id="copyrights"></FormattedMessage>
                          </Typography>
                          <br />
                          <Link href="https://github.com/serializedowen/serializedowen.github.io">
                            GitHub Repository
                          </Link>
                          <br />
                          <Typography color="textPrimary">
                            Last build: {data.site.buildTime}
                          </Typography>
                          <br />
                          <Link href="http://beian.miit.gov.cn/">
                            浙ICP备2020034764
                          </Link>
                          <Typography
                            id="busuanzi_container_site_pv"
                            color="textPrimary"
                          >
                            本站总访问量
                            <span id="busuanzi_value_site_pv"></span>次
                          </Typography>
                        </Footer>
                      )}
                    </React.Fragment>
                  </ThemeProvider>
                </MuiThemeProvider>
              </SnackbarProvider>
            </AuthenticationContext.Provider>
          </IntlProvider>
        )
      }}
    />
  )
}

export default Layout

Layout.propTypes = {
  children: PropTypes.oneOfType([PropTypes.array, PropTypes.node]).isRequired
}
