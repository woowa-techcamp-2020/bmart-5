import React, { useContext } from 'react';
import * as S from './styled';
import { Context } from '@commons/Context';
import ProductCard from '@components/modules/ProductCard';
import { ProductType } from '@pages/index';

type Props = {};

export const FavoriteContainer: React.FC<Props> = () => {
  const { likeProducts, setLikeProducts } = useContext(Context);
  return (
    <>
      <S.Counter>찜한상품{likeProducts.length}개</S.Counter>
      <S.FavoriteContainer>
        <S.Contents>
          {likeProducts.map((item: ProductType, idx: number) => {
            return (
              <ProductCard
                key={idx}
                item={item}
                likeProducts={likeProducts}
                setLikeProducts={setLikeProducts}
                className={'main'}
              />
            );
          })}
        </S.Contents>
      </S.FavoriteContainer>
    </>
  );
};
