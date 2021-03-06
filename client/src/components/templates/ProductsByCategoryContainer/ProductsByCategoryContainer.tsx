import React, { useContext, useState, useEffect } from 'react';
import * as S from './styled';
import ProductCard from '@components/modules/ProductCard';
import { ProductType } from '@pages/index';
import ContainerHeader from '@components/modules/ContainerHeader';
import { useRouter } from 'next/router';
import { Context } from '@commons/Context';
import { FadeIn } from '@animates/index';
import FilterSelect from '@components/atoms/FilterSelect';

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
  const [items, setItems] = useState<Array<ProductType>>([]);
  const router = useRouter();

  useEffect(() => {
    setItems(products);
  }, [products]);

  return (
    <S.ProductsByCategoryContainer>
      {headerType === 'main' && (
        <ContainerHeader
          moreBtn
          onMoreBtnClickHandler={() => router.push(`/categories/${categoryId}`)}
        >
          {name}
        </ContainerHeader>
      )}
      {headerType === 'filter' && (
        <ContainerHeader>
          <FilterSelect items={items} setItems={setItems} />
        </ContainerHeader>
      )}
      <FadeIn>
        <div className="wrapper">
          <div className="content">
            {items.map((item: ProductType, idx: number) => {
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
