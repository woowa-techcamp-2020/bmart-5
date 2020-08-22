import React from 'react';
import * as S from './styled';

type Props = {
  src: string;
  alt: string;
  size: number;
};

const findImg = (src: string) => {
  switch (src) {
    default:
      return '';
  }
};

export const Img: React.FC<Props> = ({ alt, src, ...props }) => {
  return <S.Img alt={alt} src={findImg(src)} {...props} />;
};
