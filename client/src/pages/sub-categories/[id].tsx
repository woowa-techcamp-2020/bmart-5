import React, { useEffect, useContext } from 'react';
import { NextPage, GetStaticProps, GetStaticPaths } from 'next';
import Layout, { LayoutProps } from '@commons/Layout';
import {
  HeaderMainType,
  SubCategoryPageContainerLimit,
  MaxSubCategoryCount,
} from '@utils/constants';
import ToastModal from '@components/modules/ToastModal';
import ProductsByCategoryContainer from '@components/templates/ProductsByCategoryContainer';
import API from '@utils/API';
import HttpStatus from 'http-status';
import { ProductType } from '@pages/index';
import { Context } from '@commons/Context';
import { useRouter } from 'next/router';
import * as S from '@commons/styles/ProductsContainerStyled';
import { SubCategoryType } from '@pages/index';

type Props = {
  id: number;
  name: string;
  products: Array<ProductType>;
};

const SubCartegoryPage: NextPage<Props> = (props) => {
  const { select } = useContext(Context);
  const router = useRouter();

  const layoutProps: LayoutProps = {
    title: `${props.name}`,
    headerProps: {
      left: 'ArrowLeft',
      main: { type: HeaderMainType.TEXT, content: `${props.name}` },
      right: [
        { type: 'Search', onClick: () => alert('검색') },
        { type: 'Bars', onClick: () => router.push('/signin') },
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
      <S.ProductsContainerStyle>
        <ProductsByCategoryContainer products={props.products} headerType="filter" />
      </S.ProductsContainerStyle>
      <ToastModal />
    </Layout>
  );
};

export default SubCartegoryPage;

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = Array.from({ length: MaxSubCategoryCount }, (_, idx) => ({
    params: { id: (idx + 1).toString() },
  }));

  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const id = Number(params?.id);
  const name = (await subCategoryInfoFetch(id))?.name;
  const products = await productsBySubCategoryFetch(id);

  return { props: { id, name, products } };
};

const subCategoryInfoFetch = async (id: number): Promise<SubCategoryType | null> => {
  let { status, message, result } = (await API.get(`/sub_category/${id}`)).data;
  console.info(message);
  if (status === HttpStatus.OK || status === HttpStatus.NOT_MODIFIED) {
    return result[0];
  } else {
    console.error(`not defined status code: ${status}`);
    return null;
  }
};

const productsBySubCategoryFetch = async (id: number): Promise<Array<ProductType> | []> => {
  let { status, message, result } = (
    await API.get(`/product/sub/${id}/${SubCategoryPageContainerLimit}`)
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
