import React, { useEffect, useContext } from 'react';
import { NextPage, GetStaticProps } from 'next';
import Layout, { LayoutProps } from '@commons/Layout';
import { HeaderMainType, HighestOffProductsLimit } from '@utils/constants';
import ToastModal from '@components/modules/ToastModal';
import ProductsByCategoryContainer from '@components/templates/ProductsByCategoryContainer';
import { ProductType, highestOffProductsFetch } from '@pages/index';
import { Context } from '@commons/Context';
import { useRouter } from 'next/router';
import * as S from '@commons/styles/ProductsContainerStyled';
import CartIcon from '@components/modules/CartIcon';
import Tung from '@components/atoms/Tung';

type Props = {
  id: number;
  name: string;
  products: Array<ProductType>;
};

const HotDealPage: NextPage<Props> = (props) => {
  const { select } = useContext(Context);
  const router = useRouter();
  const name = '지금사면 ⚡️번쩍할인';

  const layoutProps: LayoutProps = {
    title: `${name}`,
    headerProps: {
      left: 'ArrowLeft',
      main: { type: HeaderMainType.TEXT, content: `${name}` },
      right: [{ type: 'Bars', onClick: () => router.push('/signin') }],
    },
  };

  useEffect(() => {
    if (select) {
      (document.querySelector('html') as HTMLElement).style.overflow = 'hidden';
      (document.querySelector('.modal') as HTMLElement).style.display = 'block';
    }
  }, [select]);

  return (
    <Layout title={layoutProps.title} headerProps={layoutProps.headerProps}>
      {props.products.length > 0 ? (
        <S.ProductsContainerStyle>
          <ProductsByCategoryContainer products={props.products} headerType="filter" />
        </S.ProductsContainerStyle>
      ) : (
        <div style={{ margin: '2rem 0' }}>
          <Tung />
        </div>
      )}
      <ToastModal />
      <CartIcon />
    </Layout>
  );
};

export default HotDealPage;

export const getStaticProps: GetStaticProps = async () => {
  const products = await highestOffProductsFetch(HighestOffProductsLimit);
  return { props: { products } };
};
