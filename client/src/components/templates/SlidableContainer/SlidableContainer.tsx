import React from 'react';
import * as S from './styled';
import ProductCard from '@components/modules/ProductCard';
import ContainerHeader from '@components/modules/ContainerHeader';

export type ProductType = {
  id: number;
  name: string;
  price: number;
  content: string;
  discount: number;
  outOfStockAt: Date | null;
  subCategoryId: number;
  imgUrl: string;
};

type ProductArrType = Array<ProductType>;

type SlidableContainerState = {
  products: ProductArrType;
};

export const SlidableContainer: React.FC<SlidableContainerState> = (props) => {
  return (
    <>
      <ContainerHeader>Maeng2418님을 위해 준비한 상품</ContainerHeader>
      <S.SlidableContainer>
        {props.products.map((item: any) => {
          return (
            <ProductCard
              id={item.id}
              name={item.name}
              price={(item.price * (100 - item.discount)) / 100}
              url={item.imgUrl}
            />
          );
        })}
      </S.SlidableContainer>
    </>
  );
};
