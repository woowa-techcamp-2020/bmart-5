import React, { useState } from 'react';
import * as S from './styled';

type Props = {};

export const CounterBtn: React.FC<Props> = (props) => {
  const [count, setCount] = useState(1);

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
