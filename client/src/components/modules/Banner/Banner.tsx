import React from 'react';
import * as S from './styled';

type Props = {};

export const Banner: React.FC<Props> = (props) => {
  return (
    <>
      <S.Banner className={'carousel-wrapper x'}>
        <article id="x4">4</article>
        <article id="x1">1</article>
        <article id="x2">2</article>
        <article id="x3">3</article>
        <article id="x4">4</article>
        <article id="x1">1</article>
      </S.Banner>
    </>
  );
};
