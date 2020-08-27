import React, { useState, useEffect } from 'react';
import * as S from './styled';
import { HistoryType } from '@pages/history';
import { useRouter } from 'next/router';

type Props = {
  history: HistoryType;
};

const day = {
  0: '일',
  1: '월',
  2: '화',
  3: '수',
  4: '목',
  5: '금',
  6: '토',
};

export const HistoryCard: React.FC<Props> = ({ history }) => {
  const [total, setTotal] = useState(0);
  const router = useRouter();
  useEffect(() => {
    history.cartProducts.forEach((item) => setTotal(total + item.count * item.product.price));
  }, []);
  return (
    <S.HistoryCard>
      <S.Date>
        <img src="/assets/images/logo/bmart-logo.png" alt="bmart-logo" width={'40rem'} />
        <span>
          {new Date(history.purchasedAt).getMonth() + 1}/{new Date(history.purchasedAt).getDate()} (
          {day[new Date(history.purchasedAt).getDay()]}) B마트 노원에서 주문한{' '}
        </span>
      </S.Date>
      <S.ProductName>
        {history.cartProducts[0].product.name}
        {history.cartProducts.length > 1 && ` 외 ${history.cartProducts.length}개`}
      </S.ProductName>
      <S.ProductPrice>{total}원</S.ProductPrice>
      <S.ButtonContainer>
        <button onClick={() => router.push('/')}>B마트 홈</button>
        <button onClick={() => router.push('/')}>주문상세</button>
      </S.ButtonContainer>
    </S.HistoryCard>
  );
};
