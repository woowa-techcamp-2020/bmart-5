import React, { useContext } from 'react';
import * as S from './styled';
import ProductCard from '@components/modules/ProductCard';
import { ProductType } from '@pages/index';
import ContainerHeader from '@components/modules/ContainerHeader';
import { useRouter } from 'next/router';
import { Context } from '@commons/Context';
import { FadeIn } from '@animates/index';

type ProductArrType = Array<ProductType>;

type Props = {
  categoryId?: number;
  name?: string;
  products: ProductArrType;
  headerType: 'main' | 'filter';
};

export const ProductsByCategoryContainer: React.FC<Props> = ({
  categoryId,
  name,
  products,
  headerType,
}) => {
  const { likeProducts, setLikeProducts } = useContext(Context);
  const router = useRouter();

  return (
    <S.ProductsByCategoryContainer>
      {headerType === 'main' && (
        <ContainerHeader
          moreBtn
          onMoreBtnClickHandler={() => router.replace(`/categories/${categoryId}`)}
        >
          {name}
        </ContainerHeader>
      )}
      {headerType === 'filter' && (
        <ContainerHeader>
          <div />
          {/* TODO Filter 컴포넌트 구현 */}
          Filter
        </ContainerHeader>
      )}
      <FadeIn>
        <div className="wrapper">
          <div className="content">
            {products.map((item: ProductType, idx: number) => {
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
          </div>
        </div>
      </FadeIn>
    </S.ProductsByCategoryContainer>
  );
};
