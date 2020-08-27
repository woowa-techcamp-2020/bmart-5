import React from 'react';
import * as S from './styled';
import ProductCard from '@components/modules/ProductCard';
import { ProductType } from '@pages/index';
import ContainerHeader from '@components/modules/ContainerHeader';

type ProductArrType = Array<ProductType>;

type Props = {
  name?: string;
  products: ProductArrType;
  headerType: 'main' | 'filter';
};

export const ProductsByCategoryContainer: React.FC<Props> = ({ name, products, headerType }) => {
  return (
    <S.ProductsByCategoryContainer>
      {headerType === 'main' && <ContainerHeader moreBtn>{name}</ContainerHeader>}
      {headerType === 'filter' && (
        <ContainerHeader>
          <div />
          {/* TODO Filter 컴포넌트 구현 */}
          Filter
        </ContainerHeader>
      )}
      <div className="wrapper">
        <div className="content">
          {products.map((item: ProductType, idx) => {
            return <ProductCard key={idx} item={item} className={'main'} />;
          })}
        </div>
      </div>
    </S.ProductsByCategoryContainer>
  );
};
