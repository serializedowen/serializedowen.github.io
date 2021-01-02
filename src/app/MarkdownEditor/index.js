import React from 'react'
import 'react-mde/lib/styles/css/react-mde-all.css'
import { Content, Header, Wrapper } from 'src/components'

export default function MarkdownEditor({ children }) {
  return (
    <Wrapper>
      <Header></Header>
      <Content>{children}</Content>
    </Wrapper>
  )
}
