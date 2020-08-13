import React from 'react';
import * as S from './styled';
import logo from './images/logo.png';

type Props = {
  src: string;
  alt: string;
  size: number;
};

export const Logo: React.FC<Props> = ({ alt, src, ...props }) => {
  return <S.Logo alt={alt} src={logo} {...props} />;
};
