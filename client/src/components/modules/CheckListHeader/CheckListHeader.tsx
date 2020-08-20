import React, { MouseEvent, useEffect, useRef } from 'react';
import { useRouter } from 'next/router';
import * as S from './styled';
import { ProductType } from '@components/templates/CheckListContainer/CheckListContainer';
import API from '@utils/API';

type Props = {
  checkedProducts: Array<ProductType>;
  setCheckedProducts: Function;
  products: Array<ProductType>;
};

export const CheckListHeader: React.FC<Props> = (props) => {
  const chkBoxRef = useRef<HTMLInputElement>(null);
  const router = useRouter();

  useEffect(() => {
    const chkBox = chkBoxRef.current as HTMLInputElement;
    if (props.checkedProducts.length === props.products.length) chkBox.checked = true;
    else chkBox.checked = false;
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
            if (chkBox.checked) props.setCheckedProducts([...props.products]);
            else props.setCheckedProducts([]);
          }}
          defaultChecked={true}
        />
        <S.Label htmlFor="parent-chk">선택해제</S.Label>
      </S.CheckBoxSection>
      <S.Span
        onClick={(event: MouseEvent) => {
          event.stopPropagation();
          const bulkDelete = props.checkedProducts.map((product) =>
            API.delete(`/cart/product/${product.id}`)
          );
          confirm('선택한 장바구니를 삭제하겠습니까?')
            ? Promise.all(bulkDelete).then(() => router.reload())
            : false;
        }}
      >
        선택 비우기
      </S.Span>
    </S.CheckListHeader>
  );
};
