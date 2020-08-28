import React, { useState } from 'react';
import Router from 'next/router';
import * as S from './styled';
import ContainerHeader from '@components/modules/ContainerHeader';
import { ProductType } from '../CheckListContainer';
import { IconType } from '@utils/constants';
import Icon from '@components/atoms/Icon';
import OutOfStockProduct from '@components/modules/OutOfStockProduct';
import { FadeIn } from '@animates/index';

type Props = {
  products: Array<ProductType>;
  setCartProducts: Function;
  cartProducts: Array<ProductType>;
};

export const OutOfStockContainer: React.FC<Props> = (props) => {
  const iconTypes: IconType[] = ['ArrowDown', 'ArrowUP'];
  const [iconIndex, setIconIndex] = useState<number>(1);

  return (
    <S.OutOfStockContainer>
      <div className="content">
        <ContainerHeader
          iconType={iconTypes[iconIndex]}
          onIconClickHandler={() => setIconIndex(iconIndex ? 0 : 1)}
        >
          현재 구매 불가 상품
        </ContainerHeader>

        <FadeIn>
          {iconIndex === 1 &&
            props.products.map((product, idx: number) => (
              <OutOfStockProduct
                key={idx}
                id={product.id}
                name={product.name}
                discount={product.discount}
                price={product.price}
                imgUrl={product.imgUrl}
                count={product.count}
                setCartProducts={props.setCartProducts}
                cartProducts={props.cartProducts}
              />
            ))}
        </FadeIn>
      </div>
      <S.BackToHome onClick={() => Router.back()}>
        <Icon icon={'Plus'} size={2} />
        <span className="moreText">더 담으러 가기</span>
      </S.BackToHome>
      <S.GrayHorizontal />
    </S.OutOfStockContainer>
  );
};
