import React from 'react';
import * as S from './styled';

type Props = {
  count: number;
  setCount: Function;
};

export const CounterBtn: React.FC<Props> = ({ count, setCount }) => {
  return (
    <S.CounterBtn>
      <button
        className="minus-btn"
        onClick={() => {
          count > 1 && setCount(count - 1);
        }}
      >
        -
      </button>
      <span className="number">{count}</span>
      <button className="plus-btn" onClick={() => setCount(count + 1)}>
        +
      </button>
    </S.CounterBtn>
  );
};
