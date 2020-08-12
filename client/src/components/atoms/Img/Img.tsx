import React from 'react';
import styled from 'styled-components';
import { fontSize } from '../../../utils/helper';

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

const StyledImg = styled.img<{ size: number }>`
  display: inline-block;
  font-size: ${(props) => fontSize(props.size)};
  width: 1em;
  box-sizing: border-box;
`;

export const Img: React.FC<Props> = ({ alt, src, ...props }) => {
  return <StyledImg alt={alt} src={findImg(src)} {...props} />;
};
