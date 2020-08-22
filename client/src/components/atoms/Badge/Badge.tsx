import React from 'react';
import * as S from './styled';

type Props = {
  rate: number;
};

export const Badge: React.FC<Props> = (props) => {
  return (
    <S.Badge>
      <div>{props.rate}%</div>
      <div>할인</div>
    </S.Badge>
  );
};
