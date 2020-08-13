import React from 'react';
import Header from '@components/modules/Header';
import ProductDetailInfo from '@components/modules/ProductDetailInfo';

const MainPage: React.FC = () => {
  return (
    <div>
      <Header />
      <ProductDetailInfo data={{ earliest: 35, latest: 41, rate: 0.5 }} />
    </div>
  );
};

export default MainPage;
