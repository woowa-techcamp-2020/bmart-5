import React from 'react';
import * as S from './styled';
import { ProductType } from '@components/templates/CheckListContainer';
import API from '@utils/API';

type Props = {
  id: number;
  name: string;
  discount: number;
  price: number;
  imgUrl: string;
  count: number;
  setCartProducts: Function;
  cartProducts: Array<ProductType>;
};

export const OutOfStockProduct: React.FC<Props> = (props) => {
  return (
    <S.OutOfStockProduct>
      <S.InfoTitle>{props.name}</S.InfoTitle>
      <S.InfoNameRow>
        <S.Label>{props.name}</S.Label>
        <S.Span
          onClick={() => {
            confirm('장바구니를 삭제하시겠습니까?')
              ? API.delete(`/cart/product/${props.id}`).then(() => {
                  props.setCartProducts(
                    props.cartProducts.filter((product) => product.id !== props.id)
                  );
                })
              : false;
          }}
        >
          삭제
        </S.Span>
      </S.InfoNameRow>

      <S.InfoProductGrid>
        <S.ProductImg src={props.imgUrl} />
        <S.PriceAndCount>
          <div>
            <S.GrayPrice>({(props.price * props.count).toLocaleString()}원)</S.GrayPrice>
            <div>
              {props.discount !== 0 && (
                <S.RawPriceSpan>
                  {(
                    Math.ceil((props.price * (1 + props.discount / 100)) / 100) *
                    100 *
                    props.count
                  ).toLocaleString()}
                  원
                </S.RawPriceSpan>
              )}
              <S.PriceSpan>{(props.price * props.count).toLocaleString()}원</S.PriceSpan>
            </div>
          </div>
          <S.ProductStateText>다 팔렸어요</S.ProductStateText>
        </S.PriceAndCount>
      </S.InfoProductGrid>
    </S.OutOfStockProduct>
  );
};
