import React from 'react';
import * as S from './styled';
import ContainerHeader from '@components/modules/ContainerHeader';
import ProductCard from '@components/modules/ProductCard';

type Props = {};

export const TabViewContainer: React.FC<Props> = (props) => {
  return (
    <S.TabViewContainer>
      <ContainerHeader moreBtn>지금사면 ⚡️번쩍할인</ContainerHeader>
      <div className="content">
        <ProductCard
          id={1}
          name="친환경 인증 팽이버섯, 150g, 3팩"
          price={30000}
          rate={40}
          url="http://thumbnail10.coupangcdn.com/thumbnails/remote/230x230ex/image/retail/images/432437954992902-8c4ac85e-1400-4da1-8d45-62bda8b9bd79.jpg"
          className="sale"
        ></ProductCard>
      </div>
    </S.TabViewContainer>
  );
};
