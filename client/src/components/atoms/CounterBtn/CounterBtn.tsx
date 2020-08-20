import React from 'react';
import * as S from './styled';

type Props = {
  count: number;
  setCount: Function;
};

// 상위 컴포넌트에서 count와 setCount 가져와서 사용.
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
      <div className="number">{count}</div>
      <button className="plus-btn" onClick={() => setCount(count + 1)}>
        +
      </button>
    </S.CounterBtn>
  );
};
