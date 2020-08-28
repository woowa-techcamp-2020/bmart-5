import React, { useEffect, useContext } from 'react';
import { NextPage, GetStaticProps, GetStaticPaths } from 'next';
import Layout, { LayoutProps } from '@commons/Layout';
import Banner from '@components/modules/Banner';
import { HeaderMainType, MaxCategoryCount, CategoryPageContainerLimit } from '@utils/constants';
import SlidableContainer from '@components/templates/SlidableContainer';
import ToastModal from '@components/modules/ToastModal';
import ProductsByCategoryContainer from '@components/templates/ProductsByCategoryContainer';
import API from '@utils/API';
import HttpStatus from 'http-status';
import { CategoryType } from '@components/templates/CategoryContainer';
import {
  ProductType,
  subCategoriesByCategoryFetch,
  categoryProductsFetch,
  SubCategoryType,
} from '@pages/index';
import { Context } from '@commons/Context';
import { useRouter } from 'next/router';
import * as S from '@commons/styles/ProductsContainerStyled';
import SubCategoryNavContainer from '@components/templates/SubCategoryNavContainer';
import CartIcon from '@components/modules/CartIcon';
import Tung from '@components/atoms/Tung';

type Props = {
  id: number;
  name: string;
  subCategories: Array<SubCategoryType>;
  products: Array<ProductType>;
};

const CartegoryPage: NextPage<Props> = (props) => {
  const { select } = useContext(Context);
  const router = useRouter();

  const layoutProps: LayoutProps = {
    title: `${props.name}`,
    headerProps: {
      left: 'ArrowLeft',
      main: { type: HeaderMainType.TEXT, content: `${props.name}` },
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
      <Banner />
      <SubCategoryNavContainer subCategories={props.subCategories} />
      {props.products.length > 0 ? (
        <>
          <SlidableContainer title="이 상품 어때요?" products={props.products} />
          <S.ProductsContainerStyle>
            <ProductsByCategoryContainer products={props.products} headerType="filter" />
          </S.ProductsContainerStyle>
        </>
      ) : (
        <Tung />
      )}
      <CartIcon />
      <ToastModal />
    </Layout>
  );
};

export default CartegoryPage;

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = Array.from({ length: MaxCategoryCount }, (_, idx) => ({
    params: { id: (idx + 1).toString() },
  }));

  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const id = Number(params?.id);
  const name = (await categoryInfoFetch(id))?.name;
  const subCategories = await subCategoriesByCategoryFetch(id);
  const products = await categoryProductsFetch(subCategories, CategoryPageContainerLimit);

  return { props: { id, name, subCategories, products } };
};

const categoryInfoFetch = async (id: number): Promise<CategoryType | null> => {
  let { status, message, result } = (await API.get(`/category/${id}`)).data;
  console.info(message);
  if (status === HttpStatus.OK || status === HttpStatus.NOT_MODIFIED) {
    return result[0];
  } else {
    console.error(`not defined status code: ${status}`);
    return null;
  }
};
