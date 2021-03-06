/* eslint jsx-a11y/label-has-for:0 */

import React from 'react'
import Helmet from 'react-helmet'
import { Link } from 'gatsby'
import styled from 'styled-components'
import { Wrapper, Header, Button, Content as Con } from 'components'

import config from '../../config/SiteConfig'
import withENLayout from 'src/layouts/withENLayout'

const Content = styled(Con)`
  form {
    p {
      label,
      input {
        display: block;
      }
      input {
        min-width: 230px;
        margin-top: 0.5rem;
      }
      textarea {
        resize: vertical;
        min-height: 150px;
        width: 100%;
        margin-top: 0.5rem;
      }
    }
  }
`

const Contact = () => (
  <Wrapper>
    <Helmet title={`Contact | ${config.siteTitle}`} />
    <Header>
      <Link to="/">{config.siteTitle}</Link>
    </Header>
    <Content>
      <h1>Contact</h1>
      <form
        name="contact-form"
        method="post"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
        action="/success"
      >
        <p>
          <label htmlFor="contact-name">
            Name
            <input name="name" id="contact-name" type="text" required />
          </label>
        </p>
        <p>
          <label htmlFor="contact-email">
            E-Mail{' '}
            <input name="email" id="contact-email" type="email" required />
          </label>
        </p>
        <p>
          <label htmlFor="contact-message">
            Your Message{' '}
            <textarea name="message" id="contact-message" required />
          </label>
        </p>
        <p>
          <Button>Send</Button>
        </p>
        <input type="hidden" name="form-name" value="contact-form" />
      </form>
    </Content>
  </Wrapper>
)

export default withENLayout(Contact)
export { Contact }
