import React, { MouseEvent } from 'react';
import * as S from './styled';

type Props = {
  name?: string;
  tag?: string;
  onClick?: (event: MouseEvent) => void;
};

export const BottomBtn: React.FC<Props> = ({ name, tag, onClick }) => {
  return (
    <S.BottomBtn tag={tag} onClick={onClick}>
      {name && <span>{name}</span>}
      {tag && <span className="price-tag">{tag}</span>}
    </S.BottomBtn>
  );
};
