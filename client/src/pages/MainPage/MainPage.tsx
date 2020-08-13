import React from 'react';
import Header from '@components/modules/Header';
import SlidableContainer from '@components/modules/SlidableContainer';
import Banner from '@components/modules/Banner';

const MainPage: React.FC = () => {
  return (
    <div>
      <Header />
      <Banner />
      <SlidableContainer />
    </div>
  );
};

export default MainPage;
