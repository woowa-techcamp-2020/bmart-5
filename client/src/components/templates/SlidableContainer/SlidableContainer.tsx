import React from 'react';
import * as S from './styled';
import ProductCard from '@components/modules/ProductCard';
import { ProductType } from '@pages/index';
import ContainerHeader from '@components/modules/ContainerHeader';

type ProductArrType = Array<ProductType>;

type Props = {
  products: ProductArrType;
  setSelect: Function;
};

export const SlidableContainer: React.FC<Props> = ({ products, setSelect }) => {
  return (
    <S.SlidableContainer>
      <ContainerHeader>Maeng2418님을 위해 준비한 상품</ContainerHeader>
      <div className="content">
        {products.map((item: ProductType) => {
          return <ProductCard item={item} setSelect={setSelect} className={'slide'} />;
        })}
      </div>
    </S.SlidableContainer>
  );
};
