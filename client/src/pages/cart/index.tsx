import React from 'react';
import { NextPage, GetServerSideProps } from 'next';
import HttpStatus from 'http-status';
import Layout, { LayoutProps } from '@commons/Layout';
import { IconType, HeaderMainType, userId } from '@utils/constants';
import CheckListContainer, { ProductType } from '@components/templates/CheckListContainer';
import API from '@utils/API';

type Props = {
  products: Array<ProductType>;
  soldOutProducts: Array<ProductType>;
};

const CartPage: NextPage<Props> = (props) => {
  const layoutProps: LayoutProps = {
    title: 'Bmart 장바구니',
    headerProps: {
      left: IconType.ARROW_LEFT,
      main: { type: HeaderMainType.TEXT, content: '장바구니' },
    },
  };
  return (
    <Layout title={layoutProps.title} headerProps={layoutProps.headerProps}>
      <CheckListContainer products={props.products} />
      <div>현재 구매 불가 상품 컨테이너</div>
      <div>주문금액, 배달팁 표시 컨테이너</div>
      <div>3 10,980원 배달 주문하기 fixed 버튼</div>
    </Layout>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  const { status, message, result } = (await API.get(`/cart/user/${userId}`)).data;
  console.info(message);
  if (status === HttpStatus.OK || status === HttpStatus.NOT_MODIFIED) {
    const products = result
      .filter((item: any) => item.product.outOfStockAt === null)
      .map((item: any) => {
        return {
          id: item.id,
          name: item.product.name,
          price: item.product.price,
          discount: item.product.discount,
          count: item.count,
          imgUrl: item.product.imgUrl,
        };
      });
    const soldOutProducts = result
      .filter((item: any) => item.product.outOfStockAt !== null)
      .map((item: any) => {
        return {
          id: item.id,
          name: item.product.name,
          price: item.product.price,
          discount: item.product.discount,
          count: item.count,
          imgUrl: item.product.imgUrl,
        };
      });
    return { props: { products, soldOutProducts } };
  } else {
    return { props: { products: [], soldOutProducts: [] } };
  }
};

export default CartPage;
