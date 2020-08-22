import React, { useState } from 'react';
import * as S from './styled';
import CheckListHeader from '@components/modules/CheckListHeader';
import CheckableProduct from '@components/modules/CheckableProduct';
import ContainerHeader from '@components/modules/ContainerHeader';

export type ProductType = {
  id: number;
  name: string;
  price: number;
  discount: number;
  imgUrl: string;
  count: number;
};

type Props = {
  products: Array<ProductType>;
};

export const CheckListContainer: React.FC<Props> = (props) => {
  const [checkedProducts, setCheckedProducts] = useState<Array<ProductType>>(props.products);

  return (
    <S.CheckListContainer>
      <CheckListHeader
        checkedProducts={checkedProducts}
        setCheckedProducts={setCheckedProducts}
        products={props.products}
      />
      <S.GrayHorizontal />
      <ContainerHeader>일반상품</ContainerHeader>
      {props.products.map((product) => (
        <CheckableProduct
          key={product.id}
          id={product.id}
          name={product.name}
          price={product.price}
          discount={product.discount}
          imgUrl={product.imgUrl}
          count={product.count}
          checkedProducts={checkedProducts}
          setCheckedProducts={setCheckedProducts}
        />
      ))}
      <S.GrayHorizontal />
    </S.CheckListContainer>
  );
};
