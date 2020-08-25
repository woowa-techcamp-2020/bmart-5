import React, { useState, MouseEvent, useEffect, useRef } from 'react';
import CounterBtn from '@components/atoms/CounterBtn';
import * as S from './styled';
import API from '@utils/API';
import { ProductType } from '@components/templates/CheckListContainer';

type Props = {
  id: number;
  name: string;
  discount: number;
  price: number;
  imgUrl: string;
  count: number;
  checkedProducts: Array<ProductType>;
  setCheckedProducts: Function;
  setCartProducts: Function;
  products: Array<ProductType>;
  cartProducts: Array<ProductType>;
};

export const CheckableProduct: React.FC<Props> = (props) => {
  const [count, setCount] = useState<number>(props.count);
  let rawPrice = (props.price * (100 + props.discount)) / 100;
  const chkBoxRef = useRef<HTMLInputElement>(null);
  const product = {
    id: props.id,
    name: props.name,
    discount: props.discount,
    price: props.price,
    imgUrl: props.imgUrl,
    count: props.count,
    outOfStockAt: null,
  };

  useEffect(() => {
    const chkBox = chkBoxRef.current as HTMLInputElement;
    if (props.checkedProducts.length === 0) chkBox.checked = false;
    else if (props.checkedProducts.filter((product) => product.id === props.id).length)
      chkBox.checked = true;

    if (props.count !== count) {
      const tmpProducts = props.cartProducts.map((item) => {
        if (item.id === props.id) item.count = count;
        return item;
      });
      props.setCartProducts([...tmpProducts]);
      API.patch(`/cart/${props.id}`, { count: count });
    }
  }, [props.checkedProducts, count]);

  const chkBoxId = `item-chk-${props.id}`;

  return (
    <S.CheckableProduct>
      <S.InfoTitle>{props.name}</S.InfoTitle>
      <S.InfoNameRow>
        <S.ChkBoxSection className="left-name-row">
          <S.Input
            type="checkbox"
            id={chkBoxId}
            ref={chkBoxRef}
            onClick={(event: MouseEvent) => {
              const chkBox = event.target as HTMLInputElement;
              if (chkBox.checked) props.setCheckedProducts([...props.checkedProducts, product]);
              else
                props.setCheckedProducts([
                  ...props.checkedProducts.filter((product) => product.id !== props.id),
                ]);
            }}
            defaultChecked={true}
          />
          <S.Label htmlFor={chkBoxId}>{props.name}</S.Label>
        </S.ChkBoxSection>
        <S.Span
          onClick={async (event: MouseEvent) => {
            event.stopPropagation();

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
        <S.ProductImg src={product.imgUrl} />
        <S.PriceAndCount>
          <div>
            <S.GrayPrice>({(product.price * count).toLocaleString()}원)</S.GrayPrice>
            <div>
              {product.discount !== 0 && (
                <S.RawPriceSpan>
                  {(Math.ceil(rawPrice / 100) * 100 * count).toLocaleString()}원
                </S.RawPriceSpan>
              )}
              <S.PriceSpan>{(product.price * count).toLocaleString()}원</S.PriceSpan>
            </div>
          </div>
          {count === 10 && (
            <S.ValidationText>해당 상품은 한번에 {count}개까지 구매할 수 있어요.</S.ValidationText>
          )}
          <S.CounterSactor>
            <CounterBtn count={count} setCount={setCount} />
          </S.CounterSactor>
        </S.PriceAndCount>
      </S.InfoProductGrid>
    </S.CheckableProduct>
  );
};
