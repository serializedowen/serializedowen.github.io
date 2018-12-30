import styled from 'styled-components';
import React from 'react';

const SVG = styled.svg.attrs({
  preserveAspectRatio: 'xMidYMid meet',
  height: '1em',
  width: '1em',
  xmlns: 'http://www.w3.org/2000/svg',
})`
  fill: ${props => props.fillColor || props.theme.colors.secondary || 'black'};
`;

const SVGG = ({ children, link, ...rest }) =>
  link ? (
    <a href={link}>
      <SVG {...rest}>{children}</SVG>
    </a>
  ) : (
    <SVG {...rest}>{children}</SVG>
  );
export default SVGG;
