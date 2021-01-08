import React from 'react'
import 'react-mde/lib/styles/css/react-mde-all.css'
import { Content, Header, Wrapper } from 'src/components'
import {
  createMuiTheme,
  ThemeProvider as MuiThemeProvider
} from '@material-ui/core/styles'

const muiTheme = createMuiTheme({})

export default function MarkdownEditor({ children }) {
  return (
    <MuiThemeProvider theme={muiTheme}>
      <Wrapper>
        <Header></Header>
        <Content>{children}</Content>
      </Wrapper>
    </MuiThemeProvider>
  )
}
