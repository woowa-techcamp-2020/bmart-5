import React, { useState, MouseEvent } from 'react';
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
  const router = useRouter();
  const [isOpenDetails, setIsOpenDetails] = useState(false);

  const openDetailsClickHandler = (e: MouseEvent) => {
    const btn = e.target as HTMLButtonElement;
    if (isOpenDetails) {
      btn.innerText = '주문상세';
      setIsOpenDetails(false);
    } else {
      btn.innerText = '닫기';
      setIsOpenDetails(true);
    }
  };

  const totalPrice = history.cartProducts
    .reduce((prev, cur) => prev + cur.count * cur.product.price, 0)
    .toLocaleString();
  const purchasedAt = new Date(history.purchasedAt);
  const historyTitle = `${purchasedAt.getMonth() + 1}/${purchasedAt.getDate()}
  (
    ${
      day[purchasedAt.getDay()]
    }) ${purchasedAt.getHours()}:${purchasedAt.getMinutes()} B마트 잠실에서 주문한 `;

  return (
    <>
      <S.HistoryCard>
        <S.Date>
          <img src="/assets/images/logo/bmart-logo.png" alt="bmart-logo" width={'40rem'} />
          <span>{historyTitle}</span>
        </S.Date>
        <S.ProductName>
          {history.cartProducts[0].product.name}
          {history.cartProducts.length > 1 && ` 외 ${history.cartProducts.length}개`}
        </S.ProductName>
        <S.ProductPrice>{totalPrice}원</S.ProductPrice>
        <S.ButtonContainer>
          <button onClick={() => router.push('/')}>B마트 홈</button>
          <button onClick={openDetailsClickHandler}>주문상세</button>
        </S.ButtonContainer>
      </S.HistoryCard>
      {isOpenDetails && (
        <S.HistoryDetails>
          {history.cartProducts.map((cartProduct, idx) => (
            <S.HistoryDetailRow key={idx}>
              <li className="item-name">{`${
                cartProduct.product.name
              } (${cartProduct.product.price.toLocaleString()} x ${cartProduct.count}개) ${(
                cartProduct.count * cartProduct.product.price
              ).toLocaleString()}원`}</li>
              <span className="item-price">{}</span>
            </S.HistoryDetailRow>
          ))}
        </S.HistoryDetails>
      )}
    </>
  );
};
