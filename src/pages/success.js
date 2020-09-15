/* eslint jsx-a11y/label-has-for:0 */

import React from 'react'
import Helmet from 'react-helmet'
import { Link } from 'gatsby'
import styled from 'styled-components'
import { Layout, Wrapper, Header, Content as Con } from 'components'
import { media } from '../utils/media'

import config from '../../config/SiteConfig'

const Content = styled(Con)`
  form {
    p {
      label,
      input {
        display: block;
      }
      input {
        min-width: 275px;
      }
      textarea {
        resize: vertical;
        min-height: 150px;
        width: 100%;
      }
    }
  }
`

const Success = () => (
  // <Layout>
  <Wrapper>
    <Helmet title={`Contact | ${config.siteTitle}`} />
    <Header>
      <Link to="/">{config.siteTitle}</Link>
    </Header>
    <Content>
      <h1>Your message was sent!</h1>
      <p>I'll answer your request as quick as possible.</p>
    </Content>
  </Wrapper>
  // </Layout>
)

export default Success
