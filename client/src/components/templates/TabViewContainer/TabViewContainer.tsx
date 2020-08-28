import React, { useState, useEffect, useRef, MouseEvent, useContext } from 'react';
import * as S from './styled';
import ProductCard from '@components/modules/ProductCard';
import { ProductType } from '@pages/index';
import ContainerHeader from '@components/modules/ContainerHeader';
import { TabViewContainerLimit } from '@utils/constants';
import { Context } from '@commons/Context';
import { useRouter } from 'next/router';

type ProductArrType = Array<ProductType>;

type Props = {
  products: ProductArrType;
};

export const TabViewContainer: React.FC<Props> = ({ products }) => {
  const { likeProducts, setLikeProducts } = useContext(Context);
  const [currentTab, setCurrentTab] = useState<number>(0);
  const router = useRouter();
  const imageRefs = Array.from({ length: TabViewContainerLimit }, () =>
    useRef<HTMLDivElement>(null)
  );

  useEffect(() => {
    if (currentTab === 0 && !imageRefs[0].current?.classList.contains('current-tab'))
      imageRefs[0].current?.classList.add('current-tab');
  }, [likeProducts]);

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
      <ContainerHeader
        moreBtn
        onMoreBtnClickHandler={() => {
          router.push('/hotdeal');
        }}
      >
        지금사면 ⚡️번쩍할인
      </ContainerHeader>
      <div className="content">
        <div className="images-container">
          {products.map((item: ProductType, idx) => {
            return (
              <S.ImageContainer key={idx} ref={imageRefs[idx]}>
                <img id={`${idx}`} src={item.imgUrl} onClick={onTabClickHandler} />
              </S.ImageContainer>
            );
          })}
        </div>
        <ProductCard
          item={products[currentTab]}
          likeProducts={likeProducts}
          setLikeProducts={setLikeProducts}
          className="sale"
        ></ProductCard>
      </div>
    </S.TabViewContainer>
  );
};
