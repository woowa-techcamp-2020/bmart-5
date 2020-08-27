import React, { useEffect, useContext } from 'react';
import { NextPage, GetStaticProps, GetStaticPaths } from 'next';
import Layout, { LayoutProps } from '@commons/Layout';
import Banner from '@components/modules/Banner';
import { IconType, HeaderMainType } from '@utils/constants';
import SlidableContainer from '@components/templates/SlidableContainer';
import ToastModal from '@components/modules/ToastModal';
import ProductsByCategoryContainer from '@components/templates/ProductsByCategoryContainer';
import API from '@utils/API';
import HttpStatus from 'http-status';
import { CategoryType } from '@components/templates/CategoryContainer';
import {
  CategoryArrType,
  ProductType,
  subCategoryByCategoryFetch,
  categoryProductsFetch,
} from '@pages/index';
import { MaxCategoryCount, MaxProductsCountByCategoryPageContainer } from '@utils/constants';
import { Context } from '@commons/Context';
import { useRouter } from 'next/router';
import * as S from './styled';

type Props = {
  id: number;
  name: string;
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
      right: [
        { type: 'Search', onClick: () => alert('검색') },
        { type: 'Bars', onClick: () => router.replace('/signin') },
      ],
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
      <SlidableContainer title="이 상품 어때요?" products={props.products} />
      <S.ProductsContainerStyle>
        <ProductsByCategoryContainer products={props.products} headerType="filter" />
      </S.ProductsContainerStyle>
      <ToastModal />
    </Layout>
  );
};

export default CartegoryPage;

export const getStaticPaths: GetStaticPaths = async () => {
  const categories = (await categoriesFetch()).categories;

  const paths = categories.map((category) => ({
    params: { id: category.id.toString() },
  }));

  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const id = Number(params?.id);
  const name = (await categoryInfoFetch(id))?.name;
  const products = await productsByCategoryFetch(id);

  return { props: { id, name, products } };
};

const categoriesFetch = async (): Promise<CategoryArrType> => {
  let { status, message, result } = (await API.get(`/category/all/${MaxCategoryCount}`)).data;
  console.info(message);
  if (status === HttpStatus.OK || status === HttpStatus.NOT_MODIFIED) {
    return { categories: result };
  } else {
    console.error(`not defined status code: ${status}`);
    return { categories: [] };
  }
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

const productsByCategoryFetch = async (id: number): Promise<Array<ProductType>> => {
  const subCategories = (await subCategoryByCategoryFetch(id)).subCategories;
  const categoryProducts = (
    await categoryProductsFetch(subCategories, MaxProductsCountByCategoryPageContainer)
  ).categoryProducts;
  return categoryProducts;
};
