import React, { useState, useEffect } from 'react';
import { NextPage } from 'next';
import Layout from '@components/templates/Layout';
import Banner from '@components/modules/Banner';
import CategoryContainer, { CategoryType } from '@components/templates/CategoryContainer';
import SlidableContainer from '@components/templates/SlidableContainer';
import ToastModal from '@components/modules/ToastModal';
import TabViewContainer from '@components/templates/TabViewContainer';
import API from '@utils/API';
import HttpStatus from 'http-status';
import { LatestProductsLimit, OrderedCategoriesLimit } from '@utils/constants';
import * as Images from '@assets/images';
import { capitalize } from '@utils/helper';

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

type ProductArrType = {
  products: Array<ProductType>;
};

type CategoryArrType = {
  categories: Array<CategoryType>;
};

type Props = {
  categories: Array<CategoryType>;
  products: Array<ProductType>;
};

const MainPage: NextPage<Props> = (props) => {
  const [select, setSelect] = useState<ProductType>();

  useEffect(() => {
    if (select) {
      (document.querySelector('html') as HTMLElement).style.overflow = 'hidden';
      (document.querySelector('.modal') as HTMLElement).style.display = 'block';
    }
  }, [select]);

  return (
    <Layout title="연습용">
      <Banner />
      <CategoryContainer earliest={24} latest={50} categories={props.categories} />
      <SlidableContainer products={props.products} setSelect={setSelect} />
      <TabViewContainer setSelect={setSelect} />
      <ToastModal select={select} setSelect={setSelect} />
    </Layout>
  );
};

MainPage.getInitialProps = async () => {
  const slidalbeResponse = await slidableContainerFetch();
  const categoryResponse = await categoryContainerFetch();
  return { ...slidalbeResponse, ...categoryResponse };
};

const slidableContainerFetch = async (): Promise<ProductArrType> => {
  let latestProducts = (await API.get(`/product/latest/${LatestProductsLimit}`)).data;

  console.info(latestProducts.message);
  if (
    latestProducts.status === HttpStatus.OK ||
    latestProducts.status === HttpStatus.NOT_MODIFIED
  ) {
    const products = [...latestProducts.result];
    return { products };
  } else {
    console.error(`not defined status code: ${status}`);
    return { products: [] };
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
