import React from 'react'
import styled from 'styled-components'
import { Typography } from '@material-ui/core'

const Wrapper = styled('div')`
  font-size: ${props => props.theme.fontSize.small};
  text-transform: uppercase;
  font-weight: bold;
  text-align: center;
  color: ${props => props.theme.colors.grey.dark};
  position: relative;
  padding-bottom: 1rem;
  margin-bottom: 4rem;

  &:after {
    content: '';
    height: 1px;
    width: 50px;
    position: absolute;
    bottom: 0;
    left: 50%;
    margin-left: -25px;
    background: ${props => props.theme.colors.grey.ultraLight};
  }
`

const SectionTitle = ({ props, children }) => (
  <Wrapper>
    <Typography {...props} variant="subtitle1">
      {children}
    </Typography>
  </Wrapper>
)

export default SectionTitle
