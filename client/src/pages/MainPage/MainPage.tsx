import React from 'react';
import Header from '@components/modules/Header';
import SlidableContainer from '@components/modules/SlidableContainer';
import { IconType, HeaderMainType } from '@utils/constants';

const MainPage: React.FC = () => {
  return (
    <div>
      {/* main */}
      <Header
        left={IconType.ARROW_LEFT}
        main={{ type: HeaderMainType.LOGO }}
        right={[IconType.SEARCH, IconType.BARS]}
      />{' '}
      {/* back & title */}
      <Header
        left={IconType.ARROW_LEFT}
        main={{ type: HeaderMainType.TEXT, content: '장바구니' }}
      />
      {/* back */}
      <Header left={IconType.ARROW_LEFT} />
      {/* back & title */}
      <Header left={IconType.CLOSE} main={{ type: HeaderMainType.TEXT, content: '이벤트' }} />
      {/* category */}
      <Header
        left={IconType.ARROW_LEFT}
        main={{ type: HeaderMainType.TEXT, content: '정육・수산・계란' }}
        right={[IconType.SEARCH, IconType.BARS]}
      />{' '}
      {/* TODO: SearchBar */}
      <Header
        left={IconType.ARROW_LEFT}
        main={{ type: HeaderMainType.SEARCH_BAR }}
        right={[IconType.SEARCH]}
      />{' '}
      {/* OrderList */}
      <Header
        left={IconType.NOTIFICATION}
        main={{ type: HeaderMainType.TEXT, content: '주문내역' }}
        right={[IconType.REFRESH]}
      />{' '}
      <SlidableContainer />
    </div>
  );
};

export default MainPage;
