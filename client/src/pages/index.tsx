import React, { useEffect, useContext } from 'react';
import { NextPage, GetStaticProps } from 'next';
import Layout, { LayoutProps } from '@commons/Layout';
import CarouselBanner from '@components/modules/CarouselBanner';
import CategoryContainer, { CategoryType } from '@components/templates/CategoryContainer';
import SlidableContainer from '@components/templates/SlidableContainer';
import ToastModal from '@components/modules/ToastModal';
import TabViewContainer from '@components/templates/TabViewContainer';
import API from '@utils/API';
import HttpStatus from 'http-status';
import {
  LatestProductsLimit,
  HighestOffProductsLimit,
  OrderedCategoriesLimit,
  IconType,
  HeaderMainType,
} from '@utils/constants';
import { Context } from '@commons/Context';

export type ProductType = {
  id: number;
  name: string;
  price: number;
  content: string;
  discount: number;
  outOfStockAt: Date | null;
  subCategoryId: number;
  imgUrl: string;
};

type LatestProductArrType = {
  latestProducts: Array<ProductType>;
};

type HighestOffProductArrType = {
  highestOffProducts: Array<ProductType>;
};

type CategoryArrType = {
  categories: Array<CategoryType>;
};

type Props = {
  categories: Array<CategoryType>;
  latestProducts: Array<ProductType>;
  highestOffProducts: Array<ProductType>;
};

const layoutProps: LayoutProps = {
  title: 'Bmart Home',
  headerProps: {
    main: { type: HeaderMainType.LOGO },
    right: [IconType.SEARCH, IconType.BARS],
  },
};

const MainPage: NextPage<Props> = (props) => {
  const { select } = useContext(Context);

  useEffect(() => {
    if (select) {
      (document.querySelector('html') as HTMLElement).style.overflow = 'hidden';
      (document.querySelector('.modal') as HTMLElement).style.display = 'block';
    }
  }, [select]);

  return (
    <Layout title={layoutProps.title} headerProps={layoutProps.headerProps}>
      <CarouselBanner />
      <CategoryContainer earliest={24} latest={50} categories={props.categories} />
      <SlidableContainer products={props.latestProducts} />
      <TabViewContainer products={props.highestOffProducts} />
      <ToastModal />
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const slidalbeResponse = await slidableContainerFetch();
  const tabViewResponse = await tabViewContainerFetch();
  const categoryResponse = await categoryContainerFetch();
  return { props: { ...slidalbeResponse, ...tabViewResponse, ...categoryResponse } };
};

const slidableContainerFetch = async (): Promise<LatestProductArrType> => {
  let latestProducts = (await API.get(`/product/latest/${LatestProductsLimit}`)).data;

  console.info(latestProducts.message);
  if (
    latestProducts.status === HttpStatus.OK ||
    latestProducts.status === HttpStatus.NOT_MODIFIED
  ) {
    const products = [...latestProducts.result];
    return { latestProducts: products };
  } else {
    console.error(`not defined status code: ${status}`);
    return { latestProducts: [] };
  }
};

const tabViewContainerFetch = async (): Promise<HighestOffProductArrType> => {
  let highestOffProducts = (await API.get(`/product/highest-off/${HighestOffProductsLimit}`)).data;

  console.info(highestOffProducts.message);
  if (
    highestOffProducts.status === HttpStatus.OK ||
    highestOffProducts.status === HttpStatus.NOT_MODIFIED
  ) {
    const products = [...highestOffProducts.result];
    return { highestOffProducts: products };
  } else {
    console.error(`not defined status code: ${status}`);
    return { highestOffProducts: [] };
  }
};

const categoryContainerFetch = async (): Promise<CategoryArrType> => {
  let { status, message, result } = (await API.get(`/category/${OrderedCategoriesLimit}`)).data;
  console.info(message);
  if (status === HttpStatus.OK || status === HttpStatus.NOT_MODIFIED) {
    const categories = [...result].map((category) => {
      category.url = `./assets/images/categories/main-${category.name}.png`;
      return category;
    });
    return { categories };
  } else {
    console.error(`not defined status code: ${status}`);
    return { categories: [] };
  }
};

export default MainPage;
