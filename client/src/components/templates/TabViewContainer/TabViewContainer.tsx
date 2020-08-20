import React from 'react';
import * as S from './styled';
import ContainerHeader from '@components/modules/ContainerHeader';
import ProductCard from '@components/modules/ProductCard';

type Props = {
  // products: ProductArrType; <--- 나중에 이걸로 가져와서 map으로 처리.
};

// 임시 데이터
const item = {
  content: '',
  discount: 8,
  id: 608,
  imgUrl:
    'http://thumbnail10.coupangcdn.com/thumbnails/remote/230x230ex/image/retail/images/432437954992902-8c4ac85e-1400-4da1-8d45-62bda8b9bd79.jpg',
  name: '친환경 인증 팽이버섯, 150g, 3팩',
  outOfStockAt: null,
  price: 1480,
  subCategoryId: 2,
};

export const TabViewContainer: React.FC<Props> = () => {
  return (
    <S.TabViewContainer>
      <ContainerHeader moreBtn>지금사면 ⚡️번쩍할인</ContainerHeader>
      <div className="content">
        <div className="images-container">
          <div className="image-container">
            <img
              id="1"
              src="http://thumbnail10.coupangcdn.com/thumbnails/remote/230x230ex/image/retail/images/432437954992902-8c4ac85e-1400-4da1-8d45-62bda8b9bd79.jpg"
            />
          </div>
          <div className="image-container">
            <img
              id="2"
              src="http://thumbnail10.coupangcdn.com/thumbnails/remote/230x230ex/image/retail/images/432437954992902-8c4ac85e-1400-4da1-8d45-62bda8b9bd79.jpg"
            />
          </div>
          <div className="image-container">
            <img
              id="2"
              src="http://thumbnail10.coupangcdn.com/thumbnails/remote/230x230ex/image/retail/images/432437954992902-8c4ac85e-1400-4da1-8d45-62bda8b9bd79.jpg"
            />
          </div>
          <div className="image-container">
            <img
              id="2"
              src="http://thumbnail10.coupangcdn.com/thumbnails/remote/230x230ex/image/retail/images/432437954992902-8c4ac85e-1400-4da1-8d45-62bda8b9bd79.jpg"
            />
          </div>
        </div>
        <ProductCard item={item} className="sale"></ProductCard>
      </div>
    </S.TabViewContainer>
  );
};
