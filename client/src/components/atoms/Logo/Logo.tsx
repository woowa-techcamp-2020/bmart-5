import React from 'react';
import styled from 'styled-components';
import logo from './images/logo.png';

type Props = {
  src: string;
  alt: string;
  size: number;
};

const StyledLogo = styled.img<{ size: number }>`
  display: inline-block;
  width: ${(props) => props.size}rem;
  box-sizing: border-box;
`;

export const Logo: React.FC<Props> = ({ alt, src, ...props }) => {
  return <StyledLogo alt={alt} src={logo} {...props} />;
};
