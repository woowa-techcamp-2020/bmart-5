import React, { useState, useEffect, useRef, MouseEvent } from 'react';
import * as S from './styled';
import ProductCard from '@components/modules/ProductCard';
import { ProductType } from '@pages/index';
import ContainerHeader from '@components/modules/ContainerHeader';

type ProductArrType = Array<ProductType>;

type Props = {
  products: ProductArrType;
};

export const SlidableCategoryContainer: React.FC<Props> = ({ products }) => {
  const [currentTab, setCurrentTab] = useState<number>(0);

  return (
    <S.SlidableCategoryContainer>
      <ContainerHeader moreBtn>밀키트</ContainerHeader>
      <div className="wrapper">
        <div className="content">
          {products.map((item: ProductType) => {
            return <ProductCard item={item} className={'main'} />;
          })}
        </div>
      </div>
    </S.SlidableCategoryContainer>
  );
};