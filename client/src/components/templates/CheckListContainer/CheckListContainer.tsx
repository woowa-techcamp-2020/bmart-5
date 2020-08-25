import React from 'react';
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
  outOfStockAt: Date;
};

type Props = {
  cartProducts: Array<ProductType>;
  products: Array<ProductType>;
  checkedProducts: Array<ProductType>;
  setCheckedProducts: Function;
  setCartProducts: Function;
};

export const CheckListContainer: React.FC<Props> = (props) => {
  return (
    <S.CheckListContainer>
      <CheckListHeader
        cartProducts={props.cartProducts}
        checkedProducts={props.checkedProducts}
        setCheckedProducts={props.setCheckedProducts}
        products={props.products}
        setCartProducts={props.setCartProducts}
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
          cartProducts={props.cartProducts}
          checkedProducts={props.checkedProducts}
          setCheckedProducts={props.setCheckedProducts}
          setCartProducts={props.setCartProducts}
          products={props.products}
        />
      ))}
      <S.GrayHorizontal />
    </S.CheckListContainer>
  );
};
