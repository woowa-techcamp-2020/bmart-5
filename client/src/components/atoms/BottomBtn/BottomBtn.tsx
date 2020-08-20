import React from 'react';
import * as S from './styled';

type Props = {
  name?: string;
  tag?: string;
};

export const BottomBtn: React.FC<Props> = ({ name, tag }) => {
  return (
    <S.BottomBtn tag={tag}>
      {name && <span>{name}</span>}
      {tag && <span className="price-tag">{tag}</span>}
    </S.BottomBtn>
  );
};
