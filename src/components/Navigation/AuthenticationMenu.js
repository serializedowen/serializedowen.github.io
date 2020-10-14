import React, { useRef, useState, useCallback } from 'react'
import Button from '@material-ui/core/Button'
import { Menu, MenuItem, Avatar } from '@material-ui/core'
import { get } from 'lodash'

import useAuthentication from 'src/hooks/useAuthentication'
import axios from 'src/utils/http'
import { useLocation, navigate } from '@reach/router'
import { FormattedMessage } from 'react-intl'
import TelegramIcon from '@material-ui/icons/Telegram'

export default function AuthenticationMenu() {
  const ref = useRef(null)
  const [menuOpen, setmenuOpen] = useState(false)

  const { user } = useAuthentication()
  const { href } = useLocation()

  const isLoggedIn = user && user.userModel

  const signout = useCallback(() => {
    window.localStorage.removeItem('user')
    axios.get('/auth/signout').then(() => {
      window.location = href
    })
  }, [])

  const signin = useCallback(() => {
    window.location =
      process.env.NODE_ENV === 'production'
        ? 'http://gateway.serializedowen.com/auth/github/?redirect=' + href
        : 'http://localhost:7001/auth/github/?redirect=' + href
    // window.('http://localhost:7001/auth/github/?redirect=' + href)
  }, [])

  const handleMenuClose = () => {
    setmenuOpen(val => !val)
  }

  return (
    <>
      <Button
        ref={ref}
        onClick={() => {
          if (isLoggedIn) setmenuOpen(true)
          else signin()
        }}
      >
        {isLoggedIn && (
          <Avatar
            src={get(user, 'userModel.avatarUrl', '')}
            alt={get(user, 'userModel.name', 'U')}
          ></Avatar>
        )}

        {!isLoggedIn && (
          <>
            <TelegramIcon></TelegramIcon>
            <FormattedMessage id="login"></FormattedMessage>
          </>
        )}
      </Button>
      <Menu anchorEl={ref.current} open={menuOpen} onClick={handleMenuClose}>
        <MenuItem key="account" onClick={() => navigate('/app/account')}>
          <FormattedMessage id="account"></FormattedMessage>
        </MenuItem>

        <MenuItem key="logout" onClick={signout}>
          <FormattedMessage id="logout"></FormattedMessage>
        </MenuItem>
      </Menu>
    </>
  )
}
