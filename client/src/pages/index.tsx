import React, { useEffect, useContext } from 'react';
import { NextPage, GetStaticProps } from 'next';
import Layout, { LayoutProps } from '@commons/Layout';
import CarouselBanner from '@components/modules/CarouselBanner';
import Banner from '@components/modules/Banner';
import CategoryContainer, { CategoryType } from '@components/templates/CategoryContainer';
import SlidableContainer from '@components/templates/SlidableContainer';
import ToastModal from '@components/modules/ToastModal';
import TabViewContainer from '@components/templates/TabViewContainer';
import FetchableContainer from '@components/templates/FetchableContainer';
import ProductsByCategoryContainer from '@components/templates/ProductsByCategoryContainer';
import API from '@utils/API';
import HttpStatus from 'http-status';
import {
  LatestProductsLimit,
  HighestOffProductsLimit,
  OrderedCategoriesLimit,
  HeaderMainType,
  MaxSubCategoryLimitByCategoryId,
  MaxProductsCountByMainCategoryContainer,
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

export type SubCategoryType = {
  id: number;
  name: string;
};

export type SubCategoryArrType = {
  subCategories: Array<SubCategoryType>;
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
  const { select, user } = useContext(Context);
  const router = useRouter();

  const layoutProps: LayoutProps = {
    title: 'Bmart Home',
    headerProps: {
      main: { type: HeaderMainType.LOGO },
      right: [
        { type: 'Search', onClick: () => alert('검색') },
        { type: 'Bars', onClick: () => router.push('/menu') },
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
      <SlidableContainer
        title={user ? `${user.username}님을 위해 준비한 상품` : '이런 상품은 어때요?'}
        products={props.latestProducts}
      />
      <TabViewContainer products={props.highestOffProducts} />
      <Banner />
      <FetchableContainer title="지금 뭐 먹지?" products={props.latestProducts} />
      <SlidableContainer title="새로 나왔어요" products={props.latestProducts} />
      <SlidableContainer title="요즘 잘팔려요" products={props.latestProducts} />
      <FetchableContainer title="지금 필요한 생필품!" products={props.latestProducts} />
      <Banner />
      {props.categories.map((category, idx) => (
        <ProductsByCategoryContainer
          key={idx}
          categoryId={idx + 1}
          name={category.name}
          products={props.categoryProductsList[idx].categoryProducts}
          headerType="main"
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
      return subCategoriesByCategoryFetch(category.id);
    })
  );
  const categoryProductsResponse = await Promise.all(
    subCategoryByCategoryResponse.map((category) => {
      return categoryProductsFetch(category.subCategories, MaxProductsCountByMainCategoryContainer);
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

export const subCategoriesByCategoryFetch = async (
  categoryId: number
): Promise<SubCategoryArrType> => {
  let { status, message, result } = (
    await API.get(`/sub_category/cat/${categoryId}/${MaxSubCategoryLimitByCategoryId}`)
  ).data;
  console.info(message);
  if (status === HttpStatus.OK || status === HttpStatus.NOT_MODIFIED) {
    return { subCategories: result };
  } else {
    console.error(`not defined status code: ${status}`);
    return { subCategories: [] };
  }
};

export const categoryProductsFetch = async (
  subCategories: Array<SubCategoryType>,
  limit: number
): Promise<CategoryProductArrType> => {
  subCategories.length = subCategories.length > 10 ? 10 : subCategories.length;
  const share = Math.floor(limit / subCategories.length);
  let remainder = limit % subCategories.length;

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
        await API.get(`/product/sub/${subCategories[idx].id}/${value}`)
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
