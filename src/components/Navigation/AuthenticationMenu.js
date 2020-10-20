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

  const { user, isAuthenticated, refresher } = useAuthentication()
  const { href } = useLocation()

  const signout = useCallback(() => {
    window.localStorage.removeItem('user')
    axios.get('/auth/signout').then(() => {
      refresher()
    })
  }, [])

  const signin = useCallback(() => {
    navigate('/app/login', { state: { href } })
  }, [])

  const handleMenuClose = () => {
    setmenuOpen(val => !val)
  }

  return (
    <>
      <Button
        ref={ref}
        onClick={() => {
          if (isAuthenticated) setmenuOpen(true)
          else signin()
        }}
      >
        {isAuthenticated && (
          <Avatar
            src={get(user, 'userModel.avatarUrl', '')}
            alt={get(user, 'userModel.name', 'U')}
          ></Avatar>
        )}

        {!isAuthenticated && (
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
