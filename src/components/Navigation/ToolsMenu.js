import React, { useRef, useState, useCallback } from 'react'
import Button from '@material-ui/core/Button'
import { Menu, MenuItem, Avatar } from '@material-ui/core'
import { Link } from 'gatsby'
import useAuthentication from 'src/hooks/useAuthentication'
import axios from 'src/utils/http'
import { useLocation, navigate } from '@reach/router'
import { FormattedMessage } from 'react-intl'
import TelegramIcon from '@material-ui/icons/Telegram'
import BuildIcon from '@material-ui/icons/Build'

export default function ToolsMenu() {
  const ref = useRef(null)
  const [menuOpen, setmenuOpen] = useState(false)

  const handleMenuClose = () => {
    setmenuOpen(val => !val)
  }

  return (
    <>
      <Button
        ref={ref}
        onClick={() => {
          setmenuOpen(true)
        }}
      >
        <BuildIcon></BuildIcon>
        <FormattedMessage id="tools"></FormattedMessage>
      </Button>
      <Menu anchorEl={ref.current} open={menuOpen} onClick={handleMenuClose}>
        <MenuItem key="regex">
          <Link to="/regextester.php" style={{ color: 'white' }}>
            <FormattedMessage id="nginx-regex-tester"></FormattedMessage>
          </Link>
        </MenuItem>
        <MenuItem key="markdown">
          <Link to="/app/markdown" style={{ color: 'white' }}>
            <FormattedMessage id="markdown-editor"></FormattedMessage>
          </Link>
        </MenuItem>
      </Menu>
    </>
  )
}
