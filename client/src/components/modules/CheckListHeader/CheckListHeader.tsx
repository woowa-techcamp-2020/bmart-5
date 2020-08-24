import React, { MouseEvent, useEffect, useRef } from 'react';
import * as S from './styled';
import { ProductType } from '@components/templates/CheckListContainer/CheckListContainer';
import API from '@utils/API';

type Props = {
  cartProducts: Array<ProductType>;
  checkedProducts: Array<ProductType>;
  setCheckedProducts: Function;
  products: Array<ProductType>;
  setCartProducts: Function;
};

export const CheckListHeader: React.FC<Props> = (props) => {
  const chkBoxRef = useRef<HTMLInputElement>(null);
  const labelForChkBoxRef = useRef<HTMLLabelElement>(null);

  useEffect(() => {
    const chkBox = chkBoxRef.current as HTMLInputElement;
    const labelForChkBox = labelForChkBoxRef.current as HTMLLabelElement;

    if (props.checkedProducts.length === props.products.length) {
      chkBox.checked = true;
      labelForChkBox.innerText = '선택해제';
    } else {
      chkBox.checked = false;
      labelForChkBox.innerText = '전체선택';
    }
  }, [props.checkedProducts]);

  return (
    <S.CheckListHeader>
      <S.CheckBoxSection>
        <S.Input
          type="checkbox"
          id="parent-chk"
          ref={chkBoxRef}
          onClick={(event: MouseEvent) => {
            const chkBox = event.target as HTMLInputElement;
            const labelForChkBox = labelForChkBoxRef.current as HTMLLabelElement;

            if (chkBox.checked) {
              props.setCheckedProducts([...props.products]);
              labelForChkBox.innerText = '선택해제';
            } else {
              props.setCheckedProducts([]);
              labelForChkBox.innerText = '전체선택';
            }
          }}
          defaultChecked={true}
        />
        <S.Label htmlFor="parent-chk" ref={labelForChkBoxRef}>
          선택해제
        </S.Label>
      </S.CheckBoxSection>
      <S.Span
        onClick={(event: MouseEvent) => {
          event.stopPropagation();
          const bulkDelete = props.checkedProducts.map((product) =>
            API.delete(`/cart/product/${product.id}`)
          );
          confirm('선택한 장바구니를 삭제하겠습니까?')
            ? Promise.all(bulkDelete).then(() => {
                const checkedIds = props.checkedProducts.map((product) => product.id);
                props.setCartProducts(
                  props.cartProducts.filter((product) => !checkedIds.includes(product.id))
                );
              })
            : false;
        }}
      >
        선택 비우기
      </S.Span>
    </S.CheckListHeader>
  );
};
