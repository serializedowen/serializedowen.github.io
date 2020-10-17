import React, { useRef, useState, useMemo } from 'react'
import Button from '@material-ui/core/Button'
import { Menu, MenuItem } from '@material-ui/core'
import GTranslateIcon from '@material-ui/icons/GTranslate'

import { useLocation } from '@reach/router'
import { navigate, useStaticQuery, graphql } from 'gatsby'
import { getCurrentLangKey, getLangs, getUrlForLang } from 'ptz-i18n'
// import { langCodeToName } from 'config/languages'
const langCodeToName = {
  en: 'English',
  zh: '中文'
}

export default function LanguageMenu() {
  const ref = useRef(null)
  const [menuOpen, setmenuOpen] = useState(false)
  const [langCode, setlangCode] = useState('en')
  const location = useLocation()

  const metadata = useStaticQuery(graphql`
    query LangQuery {
      site {
        siteMetadata {
          languages {
            defaultLangKey
            langs
          }
        }
      }
    }
  `)

  const url = location.pathname
  const { langs, defaultLangKey } = metadata.site.siteMetadata.languages
  const langKey = getCurrentLangKey(langs, defaultLangKey, url)

  const menu = useMemo(() => {
    const homeLink = `/${langKey}/`.replace(`/${defaultLangKey}/`, '/')
    const langsMenu = getLangs(
      langs,
      langKey,
      getUrlForLang(homeLink, url)
    ).map(item => ({
      ...item,
      link: item.link.replace(`/${defaultLangKey}/`, '/')
    }))

    return langsMenu
  }, [location, metadata])

  const handleMenuClose = () => {
    setmenuOpen(val => !val)
  }

  return (
    <>
      <Button ref={ref} onClick={() => setmenuOpen(true)}>
        <GTranslateIcon></GTranslateIcon>
        {langCodeToName[langKey]}
      </Button>
      <Menu anchorEl={ref.current} open={menuOpen} onClick={handleMenuClose}>
        {menu.map(lang => (
          <MenuItem
            key={lang.langKey}
            selected={lang.selected}
            onClick={() => navigate(lang.link)}
          >
            {langCodeToName[lang.langKey]}
          </MenuItem>
        ))}
      </Menu>
    </>
  )
}
