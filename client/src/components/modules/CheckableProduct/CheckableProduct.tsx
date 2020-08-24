import React, { useState, MouseEvent, useEffect, useRef } from 'react';
import { useRouter } from 'next/router';
import CounterBtn from '@components/atoms/CounterBtn';
import * as S from './styled';
import { ProductType } from '@components/templates/CheckListContainer/CheckListContainer';
import API from '@utils/API';

type Props = {
  id: number;
  name: string;
  discount: number;
  price: number;
  imgUrl: string;
  count: number;
  checkedProducts: Array<ProductType>;
  setCheckedProducts: Function;
};

export const CheckableProduct: React.FC<Props> = (props) => {
  const [count, setCount] = useState<number>(props.count);
  const router = useRouter();
  const discountPrice = (props.price * (100 - props.discount)) / 100;
  const chkBoxRef = useRef<HTMLInputElement>(null);
  const product = {
    id: props.id,
    name: props.name,
    discount: props.discount,
    price: props.price,
    imgUrl: props.imgUrl,
    count: props.count,
  };

  useEffect(() => {
    const chkBox = chkBoxRef.current as HTMLInputElement;
    if (props.checkedProducts.length === 0) chkBox.checked = false;
    else if (props.checkedProducts.filter((product) => product.id === props.id).length)
      chkBox.checked = true;
  }, [props.checkedProducts]);

  return (
    <S.CheckableProduct>
      <S.InfoTitle>{props.name}</S.InfoTitle>
      <S.InfoNameRow>
        <S.ChkBoxSection className="left-name-row">
          <S.Input
            type="checkbox"
            id="item-chk"
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
          <S.Label htmlFor="item-chk">{props.name}</S.Label>
        </S.ChkBoxSection>
        <S.Span
          onClick={async (event: MouseEvent) => {
            event.stopPropagation();

            confirm('장바구니를 삭제하시겠습니까?')
              ? API.delete(`/cart/product/${props.id}`).then(() => router.reload())
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
            <S.GrayPrice>({discountPrice.toLocaleString()}원)</S.GrayPrice>
            <div>
              {props.discount !== 0 && (
                <S.RawPriceSpan>{props.price.toLocaleString()}원</S.RawPriceSpan>
              )}
              <S.PriceSpan>{discountPrice.toLocaleString()}원</S.PriceSpan>
            </div>
          </div>
          <S.CounterSactor>
            <CounterBtn count={count} setCount={setCount} />
          </S.CounterSactor>
        </S.PriceAndCount>
      </S.InfoProductGrid>
    </S.CheckableProduct>
  );
};
