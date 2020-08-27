import React, { useEffect, useContext } from 'react';
import { NextPage } from 'next';
import Layout, { LayoutProps } from '@commons/Layout';
import { HeaderMainType } from '@utils/constants';
import { useRouter } from 'next/router';
import FavoriteContainer from '@components/templates/FavoriteContainer';
import ToastModal from '@components/modules/ToastModal';
import { Context } from '@commons/Context';

type Props = {
  favorites: Array<FavoriteType>;
};

type FavoriteType = {};

const FavoritePage: NextPage<Props> = (props) => {
  const router = useRouter();
  const { select } = useContext(Context);

  useEffect(() => {
    if (select) {
      (document.querySelector('html') as HTMLElement).style.overflow = 'hidden';
      (document.querySelector('.modal') as HTMLElement).style.display = 'block';
    }
  }, [select]);

  const layoutProps: LayoutProps = {
    title: 'Bmart 찜한상품',
    headerProps: {
      left: 'ArrowLeft',
      main: { type: HeaderMainType.TEXT, content: '찜한상품' },
      right: [
        { type: 'Search', onClick: () => alert('검색') },
        { type: 'Bars', onClick: () => router.replace('/menu') },
      ],
    },
  };

  return (
    <Layout title={layoutProps.title} headerProps={layoutProps.headerProps}>
      <FavoriteContainer />
      <ToastModal />
    </Layout>
  );
};

export default FavoritePage;
