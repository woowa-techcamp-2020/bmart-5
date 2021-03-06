import React, { useEffect, useContext } from 'react';
import { NextPage, GetStaticProps } from 'next';
import Layout, { LayoutProps } from '@commons/Layout';
import CarouselBanner from '@components/modules/CarouselBanner';
import Banner from '@components/modules/Banner';
import CategoryContainer, { CategoryType } from '@components/templates/CategoryContainer';
import SlidableContainer from '@components/templates/SlidableContainer';
import ToastModal from '@components/modules/ToastModal';
import CartIcon from '@components/modules/CartIcon';
import TabViewContainer from '@components/templates/TabViewContainer';
import FetchableContainer from '@components/templates/FetchableContainer';
import ProductsByCategoryContainer from '@components/templates/ProductsByCategoryContainer';
import API from '@utils/API';
import HttpStatus from 'http-status';
import {
  SlidableContainerLimit,
  TabViewContainerLimit,
  OrderedCategoriesLimit,
  HeaderMainType,
  MaxSubCategoryLimitByCategoryId,
  MainCategoryContainerLimit,
} from '@utils/constants';
import { Context } from '@commons/Context';
import { useRouter } from 'next/router';
import DynamicContainer from '@components/templates/DynamicContainer';
import smoothscroll from 'smoothscroll-polyfill';

if (typeof window !== 'undefined') {
  smoothscroll.polyfill();
}

export type ProductType = {
  id: number;
  name: string;
  price: number;
  content: string;
  discount: number;
  outOfStockAt: Date | null;
  subCategoryId: number;
  createdAt: string;
  imgUrl: string;
  clicks: number;
};

export type SubCategoryType = {
  id: number;
  name: string;
};

type Props = {
  categories: Array<CategoryType>;
  recommendProducts: Array<ProductType>;
  highestOffProducts: Array<ProductType>;
  latestProducts: Array<ProductType>;
  categoryProductsList: Array<Array<ProductType>>;
};

const MainPage: NextPage<Props> = (props) => {
  const { select, user } = useContext(Context);
  const router = useRouter();

  const layoutProps: LayoutProps = {
    title: 'Bmart 5팀 Home',
    headerProps: {
      main: { type: HeaderMainType.LOGO },
      right: [{ type: 'Bars', onClick: () => router.push('/menu') }],
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
        products={props.recommendProducts}
      />
      <TabViewContainer products={props.highestOffProducts} />
      <Banner />
      <FetchableContainer title="지금 뭐 먹지?" />
      <SlidableContainer title="새로 나왔어요" products={props.latestProducts} />
      <DynamicContainer title="요즘 잘팔려요" />
      <FetchableContainer title="지금 필요한 생필품!" />
      <Banner />
      {props.categories.map((category, idx) => (
        <ProductsByCategoryContainer
          key={idx}
          categoryId={idx + 1}
          name={category.name}
          products={props.categoryProductsList[idx]}
          headerType="main"
        />
      ))}
      <CartIcon />
      <ToastModal />
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const recommendProducts = await recommendProductsFetch();
  const highestOffProducts = await highestOffProductsFetch();
  const latestProducts = await latestProductsFetch();
  const categories = await categoriesFetch();
  const subCategoriesByCategories = await Promise.all(
    categories.map((category) => {
      return subCategoriesByCategoryFetch(category.id);
    })
  );
  const categoryProducts = await Promise.all(
    subCategoriesByCategories.map((subCategories) => {
      return categoryProductsFetch(subCategories, MainCategoryContainerLimit);
    })
  );

  return {
    props: {
      recommendProducts,
      highestOffProducts,
      latestProducts,
      categories,
      categoryProductsList: categoryProducts,
    },
  };
};

const recommendProductsFetch = async (): Promise<Array<ProductType>> => {
  let { status, message, result } = (
    await API.get(`/product/random/${SlidableContainerLimit}`)
  ).data;

  console.info(message);
  if (status === HttpStatus.OK || status === HttpStatus.NOT_MODIFIED) {
    const products = [...result];
    return products;
  } else {
    console.error(`not defined status code: ${status}`);
    return [];
  }
};

export const highestOffProductsFetch = async (
  limit: number = TabViewContainerLimit
): Promise<Array<ProductType>> => {
  let { status, message, result } = (await API.get(`/product/highest-off/${limit}`)).data;

  console.info(message);
  if (status === HttpStatus.OK || status === HttpStatus.NOT_MODIFIED) {
    const products = [...result];
    return products;
  } else {
    console.error(`not defined status code: ${status}`);
    return [];
  }
};

const latestProductsFetch = async (): Promise<Array<ProductType>> => {
  let { status, message, result } = (
    await API.get(`/product/latest/${SlidableContainerLimit}`)
  ).data;

  console.info(message);
  if (status === HttpStatus.OK || status === HttpStatus.NOT_MODIFIED) {
    const products = [...result];
    return products;
  } else {
    console.error(`not defined status code: ${status}`);
    return [];
  }
};

const categoriesFetch = async (): Promise<Array<CategoryType>> => {
  let { status, message, result } = (await API.get(`/category/all/${OrderedCategoriesLimit}`)).data;
  console.info(message);
  if (status === HttpStatus.OK || status === HttpStatus.NOT_MODIFIED) {
    const categories = [...result].map((category) => {
      category.url = `/assets/images/categories/main-${category.name}.png`;
      return category;
    });
    return categories;
  } else {
    console.error(`not defined status code: ${status}`);
    return [];
  }
};

export const subCategoriesByCategoryFetch = async (
  categoryId: number
): Promise<Array<SubCategoryType>> => {
  let { status, message, result } = (
    await API.get(`/sub_category/cat/${categoryId}/${MaxSubCategoryLimitByCategoryId}`)
  ).data;
  console.info(message);
  if (status === HttpStatus.OK || status === HttpStatus.NOT_MODIFIED) {
    return result;
  } else {
    console.error(`not defined status code: ${status}`);
    return [];
  }
};

export const categoryProductsFetch = async (
  subCategories: Array<SubCategoryType>,
  limit: number
): Promise<Array<ProductType>> => {
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

  return categoryProducts;
};

export default MainPage;
