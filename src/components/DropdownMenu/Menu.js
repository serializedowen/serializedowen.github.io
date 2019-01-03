import styled from 'styled-components';
import React from 'react';
import MenuItem from './MenuItem';

const MenuWrap = styled.div`
  transition: all ${props => props.theme.transitions.normal};
  background: ${props => props.theme.colors.primary};
  color: white;
  & > menu {
    transition: all ${props => props.theme.transitions.normal};

    display: none;
    position: absolute;
    flex-direction: column;
    ${MenuItem} {
      padding-left: 1rem;
      padding-right: 1rem;
      box-shadow: ${props => props.theme.boxShadow};
      background: ${props => props.theme.colors.primary};
      color: ${props => props.theme.colors.secondary || 'white'};
    }
  }

  &:hover > menu {
    display: flex;
  }
`;

const Menu = ({ children }) => (
  <MenuWrap>
    Tag
    <menu>{children}</menu>
  </MenuWrap>
);

export default Menu;
