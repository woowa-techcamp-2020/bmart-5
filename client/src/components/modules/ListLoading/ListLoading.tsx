import React from 'react';
import * as S from './styled';
import ProductCard from '../ProductCard';
import { LatestProductsLimit } from '@utils/constants';

export const ListLoading: React.FC = () => {
  const items = Array(LatestProductsLimit).fill({
    id: 0,
    name: 'loading...',
    price: 10000,
  });
  const loadingImg = require('@assets/images/coke.jpeg');
  return (
    <>
      <S.LoadingContainer>
        {items.map((item) => (
          <ProductCard id={item.id} name={item.name} price={item.price} url={loadingImg} />
        ))}
      </S.LoadingContainer>
    </>
  );
};
