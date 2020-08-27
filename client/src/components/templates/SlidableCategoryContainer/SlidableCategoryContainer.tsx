import React, { useContext } from 'react';
import * as S from './styled';
import ProductCard from '@components/modules/ProductCard';
import { ProductType } from '@pages/index';
import ContainerHeader from '@components/modules/ContainerHeader';
import { Context } from '@commons/Context';

type ProductArrType = Array<ProductType>;

type Props = {
  name: string;
  products: ProductArrType;
};

export const SlidableCategoryContainer: React.FC<Props> = ({ name, products }) => {
  const { likeProducts, setLikeProducts } = useContext(Context);

  return (
    <S.SlidableCategoryContainer>
      <ContainerHeader moreBtn>{name}</ContainerHeader>
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
    </S.SlidableCategoryContainer>
  );
};
