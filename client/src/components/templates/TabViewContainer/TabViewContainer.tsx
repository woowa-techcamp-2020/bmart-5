import React, { useState, useEffect, useRef, MouseEvent } from 'react';
import * as S from './styled';
import ProductCard from '@components/modules/ProductCard';
import { ProductType } from '@pages/index';
import ContainerHeader from '@components/modules/ContainerHeader';
import { TabViewProductsCount } from '@utils/constants';

type ProductArrType = Array<ProductType>;

type Props = {
  products: ProductArrType;
};

export const TabViewContainer: React.FC<Props> = ({ products }) => {
  const [currentTab, setCurrentTab] = useState<number>(0);
  const imageRefs = Array.from({ length: TabViewProductsCount }, () =>
    useRef<HTMLDivElement>(null)
  );

  useEffect(() => {
    imageRefs[0].current?.classList.add('current-tab');
  }, []);

  const onTabClickHandler = (event: MouseEvent) => {
    const target = parseInt((event.target as HTMLImageElement).id, 10);
    resetCurrentTab(target);
    setCurrentTab(target);
  };

  const resetCurrentTab = (target: number) => {
    imageRefs.forEach((ref) => {
      ref.current?.classList.remove('current-tab');
    });
    imageRefs[target].current?.classList.add('current-tab');
    return imageRefs[target].current;
  };

  return (
    <S.TabViewContainer>
      <ContainerHeader moreBtn>지금사면 ⚡️번쩍할인</ContainerHeader>
      <div className="content">
        <div className="images-container">
          {products.map((item: ProductType, idx) => {
            return (
              <S.ImageContainer ref={imageRefs[idx]}>
                <img id={`${idx}`} src={item.imgUrl} onClick={onTabClickHandler} />
              </S.ImageContainer>
            );
          })}
        </div>
        <ProductCard item={products[currentTab]} className="sale"></ProductCard>
      </div>
    </S.TabViewContainer>
  );
};
