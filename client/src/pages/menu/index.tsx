import React, { useContext } from 'react';
import { NextPage, GetStaticProps } from 'next';
import Layout, { LayoutProps } from '@commons/Layout';
import { HeaderMainType } from '@utils/constants';
import MenuNavContainer from '@components/templates/MenuNavContainer';
import API from '@utils/API';
import HttpStatus from 'http-status';
import { CategoryType } from '@components/templates/CategoryContainer';
import { MaxCategoryCount, MaxSubCategoryCount } from '@utils/constants';
import CategoryNavContainer from '@components/templates/CategoryNavContainer';
import LogOut from '@components/atoms/LogOut';
import { Context } from '@commons/Context';
import ToastModal from '@components/modules/ToastModal';

type Props = {
  categories: Array<CategoryType>;
  subCategories: Array<SubCategoryType>;
};

type SubCategoryType = {
  id: number;
  name: string;
  orderWeight: number;
  categoryId: number;
};

type CategoryArrType = {
  categories: Array<CategoryType>;
};

type SubCategoryArrType = {
  subCategories: Array<SubCategoryType>;
};

const MenuPage: NextPage<Props> = (props) => {
  const { user, setUser, setToken } = useContext(Context);

  const layoutProps: LayoutProps = {
    title: 'Bmart 메뉴',
    headerProps: {
      left: 'ArrowLeft',
      main: { type: HeaderMainType.TEXT, content: '메뉴' },
    },
  };

  return (
    <Layout title={layoutProps.title} headerProps={layoutProps.headerProps}>
      <MenuNavContainer user={user} />
      <CategoryNavContainer categories={props.categories} />
      {user && <LogOut setUser={setUser} setToken={setToken} />}
      <ToastModal />
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const categoryResponse = await categoryContainerFetch();
  const subCategoryResponse = await subCategoryContainerFetch();

  return {
    props: {
      ...categoryResponse,
      ...subCategoryResponse,
    },
  };
};

const categoryContainerFetch = async (): Promise<Props> => {
  let { status, message, result } = (await API.get(`/category/all/${MaxCategoryCount}`)).data;
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

const subCategoryContainerFetch = async (): Promise<SubCategoryArrType> => {
  let { status, message, result } = (await API.get(`/sub_category/all/${MaxSubCategoryCount}`)).data;
  console.info(message);
  if (status === HttpStatus.OK || status === HttpStatus.NOT_MODIFIED) {
    const subCategories = [...result].map((subCategory) => {
      return subCategory;
    });
    return { subCategories };
  } else {
    console.error(`not defined status code: ${status}`);
    return { subCategories: [] };
  }
};

export default MenuPage;
