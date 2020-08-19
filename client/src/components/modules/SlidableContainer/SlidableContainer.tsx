import React, { useState, useEffect } from 'react';
import * as S from './styled';
import ProductCard from '../ProductCard';
import ContainerHeader from '../ContainerHeader';

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
  setSelect: Function;
};

export const SlidableContainer: React.FC<SlidableContainerState> = ({ products, setSelect }) => {
  return (
    <>
      <ContainerHeader>Maeng2418님을 위해 준비한 상품</ContainerHeader>
      <S.SlidableContainer>
        {products.map((item: ProductType) => {
          return <ProductCard item={item} setSelect={setSelect} />;
        })}
      </S.SlidableContainer>
    </>
  );
};
