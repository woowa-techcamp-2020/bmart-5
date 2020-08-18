import React from 'react';
import * as S from './styled';
import ProductCard from '../ProductCard';
import { LatestProductsLimit } from '@utils/constants';
import { Coke as LoadingImg } from '@assets/images';

export const ListLoading: React.FC = () => {
  const items = Array(LatestProductsLimit).fill({
    id: 0,
    name: 'loading...',
    price: 10000,
  });

  return (
    <>
      <S.LoadingContainer>
        {items.map((item) => (
          <ProductCard id={item.id} name={item.name} price={item.price} url={LoadingImg} />
        ))}
      </S.LoadingContainer>
    </>
  );
};
