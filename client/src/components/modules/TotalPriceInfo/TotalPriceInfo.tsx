import React, { useContext, MouseEvent } from 'react';
import Router from 'next/router';
import httpStatus from 'http-status';
import * as S from './styled';
import { Context } from '@commons/Context';
import BottomBtn from '@components/atoms/BottomBtn';
import API from '@utils/API';

type Props = {
  totalPrice: number;
  deliveryFee: number;
  deliveryDiscount: number;
};

export const TotalPriceInfo: React.FC<Props> = (props) => {
  const { cartId, setCartId } = useContext(Context);

  return (
    <S.TotalPriceInfo>
      <S.PriceRow>
        <span className="info-title">주문금액</span>
        <span>{props.totalPrice.toLocaleString()}원</span>
      </S.PriceRow>
      <S.PriceRow>
        <span className="info-title">배달팁</span>
        <div>
          {props.deliveryDiscount > 0 && <span className="raw-price">{props.deliveryFee}원</span>}
          <span>{(props.deliveryFee * (1 - props.deliveryDiscount / 100)).toLocaleString()}원</span>
        </div>
      </S.PriceRow>
      <S.NoticeRow>
        <span>배달팁 할인 이벤트가 진행중입니다.</span>
        <span>(~2020년 8월 31일 까지)</span>
      </S.NoticeRow>
      <S.CautionRow>
        <div className="caution-text">
          <span>배달팁 할인 이벤트는 내부사정으로 사전 예고 없이 조기 종료 될 수 있습니다.</span>
          <br />
          <br />
          <span>
            장바구니에 담긴 상품은 최대 7일 동안 저장됩니다. 판매 종료 상품은 장바구니에서 자동으로
            삭제됩니다.
          </span>
        </div>
      </S.CautionRow>
      <S.SubmitRow>
        <BottomBtn
          name={`${props.totalPrice.toLocaleString()}원 배달 주문하기`}
          onClick={async (event: MouseEvent) => {
            event.stopPropagation();
            if (cartId !== null) {
              const { result, message, status } = (
                await API.patch(`/cart/purchase/${cartId}`)
              ).data;
              console.info(message);
              if (status === httpStatus.OK || status === httpStatus.NOT_MODIFIED) {
                setCartId(result.cartId);
                alert('주문이 완료되었습니다.');
                Router.back();
              } else {
                console.error(`not defined status code: ${status}`);
              }
            } else {
              alert('cart id 가 null 입니다.');
            }
          }}
        />
      </S.SubmitRow>
    </S.TotalPriceInfo>
  );
};
