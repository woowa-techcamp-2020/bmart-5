import React from 'react';
import Header from '@components/modules/Header';
import SlidableContainer from '@components/modules/SlidableContainer';
import { IconType } from '@utils/constants';

const MainPage: React.FC = () => {
  return (
    <div>
      {/* main */}
      <Header
        left={IconType.ARROW_LEFT}
        main="Logo"
        right={[IconType.SEARCH, IconType.BARS]}
      />{' '}
      {/* back & title */}
      <Header left={IconType.ARROW_LEFT} main="장바구니" />
      {/* back */}
      <Header left={IconType.ARROW_LEFT} />
      {/* back & title */}
      <Header left={IconType.CLOSE} main="이벤트" />
      {/* category */}
      <Header
        left={IconType.ARROW_LEFT}
        main="정육,수산,계란"
        right={[IconType.SEARCH, IconType.BARS]}
      />{' '}
      {/* TODO: SearchBar */}
      <Header left={IconType.ARROW_LEFT} main="SearchBar" right={[IconType.SEARCH]} />{' '}
      {/* OrderList */}
      <Header left={IconType.NOTIFICATION} main="주문내역" right={[IconType.REFRESH]} />{' '}
      <SlidableContainer />
    </div>
  );
};

export default MainPage;
