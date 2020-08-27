import React, { useEffect, useContext } from 'react';
import { NextPage, GetStaticProps } from 'next';
import Layout, { LayoutProps } from '@commons/Layout';
import CarouselBanner from '@components/modules/CarouselBanner';
import Banner from '@components/modules/Banner';
import CategoryContainer, { CategoryType } from '@components/templates/CategoryContainer';
import SlidableContainer from '@components/templates/SlidableContainer';
import ToastModal from '@components/modules/ToastModal';
import TabViewContainer from '@components/templates/TabViewContainer';
import ProductsByCategoryContainer from '@components/templates/ProductsByCategoryContainer';
import API from '@utils/API';
import HttpStatus from 'http-status';
import {
  LatestProductsLimit,
  HighestOffProductsLimit,
  OrderedCategoriesLimit,
  IconType,
  HeaderMainType,
  MaxSubCategoryLimitByCategoryId,
} from '@utils/constants';
import { Context } from '@commons/Context';
import { useRouter } from 'next/router';

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

export type CategoryArrType = {
  categories: Array<CategoryType>;
};

type SubCategoryIdArrType = {
  subCategories: Array<number>;
};

type CategoryProductArrType = {
  categoryProducts: Array<ProductType>;
};

type CategoryProductsArrListType = Array<CategoryProductArrType>;

type Props = {
  categories: Array<CategoryType>;
  latestProducts: Array<ProductType>;
  highestOffProducts: Array<ProductType>;
  categoryProductsList: CategoryProductsArrListType;
};

const MainPage: NextPage<Props> = (props) => {
  const { select } = useContext(Context);
  const router = useRouter();

  const layoutProps: LayoutProps = {
    title: 'Bmart Home',
    headerProps: {
      main: { type: HeaderMainType.LOGO },
      right: [
        { type: IconType.SEARCH, onClick: () => alert('검색') },
        { type: IconType.BARS, onClick: () => router.replace('/menu') },
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
      <CarouselBanner />
      <CategoryContainer earliest={24} latest={50} categories={props.categories} />
      <SlidableContainer products={props.latestProducts} />
      <TabViewContainer products={props.highestOffProducts} />
      <Banner />
      {props.categories.map((category, idx) => (
        <ProductsByCategoryContainer
          key={idx}
          name={category.name}
          products={props.categoryProductsList[idx].categoryProducts}
        />
      ))}
      <ToastModal />
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const slidalbeResponse = await slidableContainerFetch();
  const tabViewResponse = await tabViewContainerFetch();
  const categoryResponse = await categoryContainerFetch();
  const subCategoryByCategoryResponse = await Promise.all(
    categoryResponse.categories.map((category) => {
      return subCategoryByCategoryFetch(category.id);
    })
  );
  const categoryProductsResponse = await Promise.all(
    subCategoryByCategoryResponse.map((category) => {
      return categoryProductsFetch(category.subCategories);
    })
  );

  return {
    props: {
      ...slidalbeResponse,
      ...tabViewResponse,
      ...categoryResponse,
      categoryProductsList: categoryProductsResponse,
    },
  };
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
    console.error(`not defined status code: ${latestProducts.status}`);
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
    console.error(`not defined status code: ${highestOffProducts.status}`);
    return { highestOffProducts: [] };
  }
};

const categoryContainerFetch = async (): Promise<CategoryArrType> => {
  let { status, message, result } = (await API.get(`/category/all/${OrderedCategoriesLimit}`)).data;
  console.info(message);
  if (status === HttpStatus.OK || status === HttpStatus.NOT_MODIFIED) {
    const categories = [...result].map((category) => {
      category.url = `/assets/images/categories/main-${category.name}.png`;
      return category;
    });
    return { categories };
  } else {
    console.error(`not defined status code: ${status}`);
    return { categories: [] };
  }
};

export const subCategoryByCategoryFetch = async (
  categoryId: number
): Promise<SubCategoryIdArrType> => {
  let { status, message, result } = (
    await API.get(`/sub_category/cat/${categoryId}/${MaxSubCategoryLimitByCategoryId}`)
  ).data;
  console.info(message);
  if (status === HttpStatus.OK || status === HttpStatus.NOT_MODIFIED) {
    const subCategories = [...result].map((subCategory) => {
      return subCategory.id;
    });
    return { subCategories };
  } else {
    console.error(`not defined status code: ${status}`);
    return { subCategories: [] };
  }
};

export const categoryProductsFetch = async (
  subCategories: Array<number>
): Promise<CategoryProductArrType> => {
  subCategories.length = subCategories.length > 10 ? 10 : subCategories.length;
  const share = Math.floor(10 / subCategories.length);
  let remainder = 10 % subCategories.length;

  const limits = subCategories.reduce((acc: Array<number>) => {
    if (remainder) {
      remainder--;
      return [...acc, share + 1];
    }
    return [...acc, share];
  }, []);

  let categoryProducts: Array<ProductType> = [];

  await Promise.all(
    limits.map(async (value: number, idx: number, arr: Array<number>) => {
      let { status, message, result } = (
        await API.get(`/product/sub/${subCategories[idx]}/${value}`)
      ).data;
      console.info(message);
      if (status === HttpStatus.OK || status === HttpStatus.NOT_MODIFIED) {
        categoryProducts = [...categoryProducts, ...result];
        return;
      } else {
        console.error(`not defined status code: ${status}`);
        arr.splice(0);
        return;
      }
    })
  );

  return { categoryProducts };
};

export default MainPage;
