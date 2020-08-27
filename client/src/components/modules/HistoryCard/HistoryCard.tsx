import React from 'react';
import * as S from './styled';

type Props = {};

export const HistoryCard: React.FC<Props> = (props) => {
  return (
    <S.HistoryCard>
      <div>
        <img src="./assets/images/logo/bmart-logo.png" alt="bmart-logo" width={'80rem'} />
        <span>8/2 (일) B마트 노원에서 주문한</span>
      </div>
      <div>프레시지 우삼겹 순두부찌개 650g 외 1개</div>
      <div>6,290원</div>
      <div>
        <button>B마트 홈</button>
        <button>주문상세</button>
      </div>
    </S.HistoryCard>
  );
};
