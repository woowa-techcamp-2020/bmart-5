import React, { useEffect, useContext } from 'react';
import { NextPage } from 'next';
import Banner from '@components/modules/Banner';
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
} from '@utils/constants';
import * as Images from '@assets/images';
import { capitalize } from '@utils/helper';
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

const MainPage: NextPage<Props> = (props) => {
  const { select } = useContext(Context);

  useEffect(() => {
    if (select) {
      (document.querySelector('html') as HTMLElement).style.overflow = 'hidden';
      (document.querySelector('.modal') as HTMLElement).style.display = 'block';
    }
  }, [select]);

  return (
    <>
      <Banner />
      <CategoryContainer earliest={24} latest={50} categories={props.categories} />
      <SlidableContainer products={props.latestProducts} />
      <TabViewContainer products={props.highestOffProducts} />
      <ToastModal />
    </>
  );
};

MainPage.getInitialProps = async () => {
  const slidalbeResponse = await slidableContainerFetch();
  const tabViewResponse = await tabViewContainerFetch();
  const categoryResponse = await categoryContainerFetch();
  return { ...slidalbeResponse, ...tabViewResponse, ...categoryResponse };
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
      category.url = Images[`Main${capitalize(category.name)}`];
      return category;
    });
    return { categories };
  } else {
    console.error(`not defined status code: ${status}`);
    return { categories: [] };
  }
};

export default MainPage;
