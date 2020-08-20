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
    imgUrl: LoadingImg,
  });

  return (
    <>
      <S.LoadingContainer>
        {items.map((item) => (
          <ProductCard item={item} className={'main'} setSelect={() => console.log('loading')} />
        ))}
      </S.LoadingContainer>
    </>
  );
};
