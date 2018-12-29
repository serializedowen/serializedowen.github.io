import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Link, withPrefix } from 'gatsby';
import SocialIcon from './SocialIcon';

const Nav = styled.nav.attrs({
  role: 'navigation',
})`
  background: ${props => props.theme.colors.primary};
  height: 50px;
  overflow: scroll;
  max-width: 1080px;
  a {
    margin-left: 1rem;
    margin-right: 1rem;
    color: ${props => props.theme.colors.secondary};
  }
`;

const NavWrap = styled.div`
  padding-left: 2em;
  display: flex;
  background: ${props => props.theme.colors.primary};
  padding-right: 2em;

  & > * {
    display: flex;
    box-shadow: inset 0 -1px 0 0px rgba(0, 0, 0, 0.1);
    align-items: center;
    z-index: 10;
  }
`;

const Icons = styled.span`
  margin-left: auto;
  & > * {
    margin: 0.3rem;
  }
`;

const Navigation = () => (
  <NavWrap>
    <Nav>
      <Link to="/">Home</Link>
      <Link to="/contact">Contact</Link>
      <Link to="/categories">Categories</Link>
      {/* <Link to={`/categories/${kebabCase(category)}`}>{category}</Link> */}
    </Nav>
    <Icons>
      <SocialIcon.GitHub link="https://github.com/serializedowen" />
      <SocialIcon.LinkedIn />
      <SocialIcon.Wechat link={withPrefix('/social/QRcode.jpg')} />
    </Icons>
  </NavWrap>
);

export default Navigation;
