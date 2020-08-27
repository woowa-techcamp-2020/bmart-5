import React, { useState, useContext } from 'react';
import * as S from './styled';
import Icon from '@components/atoms/Icon';
import ProductCard from '@components/modules/ProductCard';
import { ProductType } from '@pages/index';
import ContainerHeader from '@components/modules/ContainerHeader';
import { Context } from '@commons/Context';

type ProductArrType = Array<ProductType>;

type Props = {
  title: string;
  products: ProductArrType;
};

export const FetchableContainer: React.FC<Props> = ({ title, products }) => {
  const { likeProducts, setLikeProducts } = useContext(Context);
  const totalSlides = Math.floor(products.length / 6);
  const [currentSlide] = useState(1);

  return (
    <S.FetchableContainer>
      <ContainerHeader>{title}</ContainerHeader>
      <div className="wrapper">
        <div className="content">
          {products.map((item: ProductType, idx: number) => {
            return (
              <ProductCard
                key={idx}
                item={item}
                likeProducts={likeProducts}
                setLikeProducts={setLikeProducts}
                className={'grid'}
              />
            );
          })}
        </div>
        <div className="fetch-button">
          <Icon icon={'Refresh'} size={2} />
          <span className="title">{title}</span>
          <span>다른 상품 보기 </span>
          <span className="page-count">
            <span className="current-count">{currentSlide}</span>/
            <span className="total-count">{totalSlides}</span>
          </span>
        </div>
      </div>
    </S.FetchableContainer>
  );
};
