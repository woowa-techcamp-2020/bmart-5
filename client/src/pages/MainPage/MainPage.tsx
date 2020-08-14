import React from 'react';
import Header from '@components/modules/Header';
import SlidableContainer from '@components/modules/SlidableContainer';
import Banner from '@components/modules/Banner';
import { IconType, HeaderMainType } from '@utils/constants';

const MainPage: React.FC = () => {
  return (
    <div>
      <Header
        left={IconType.ARROW_LEFT}
        main={{ type: HeaderMainType.LOGO }}
        right={[IconType.SEARCH, IconType.BARS]}
      />
      <Banner />
      <SlidableContainer />
    </div>
  );
};

export default MainPage;
