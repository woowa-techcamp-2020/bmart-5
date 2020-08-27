import React, { useState, useContext, useEffect } from 'react';
import { NextPage } from 'next';
import { Context } from '@commons/Context';
import Layout, { LayoutProps } from '@commons/Layout';
import { IconType, HeaderMainType, deliveryFee, deliveryDiscount } from '@utils/constants';
import CheckListContainer, { ProductType } from '@components/templates/CheckListContainer';
import OutOfStockContainer from '@components/templates/OutOfStockContainer';
import TotalPriceContainer from '@components/modules/TotalPriceInfo';
import { getCookie } from '@utils/cookie-manager';
import { useRouter } from 'next/router';

type Props = {};

const CartPage: NextPage<Props> = () => {
  const { cartProducts, setCartProducts } = useContext(Context);
  const [products, setProducts] = useState<Array<ProductType>>([]);
  const [outOfStockProducts, setOutOfStockProducts] = useState<Array<ProductType>>([]);
  const [checkedProducts, setCheckedProducts] = useState<Array<ProductType>>([]);
  const [totalPrice, setTotalPrice] = useState<number>(0);
  const token = getCookie('authorization');
  const router = useRouter();

  useEffect(() => {
    if (!token) router.replace('/');
    setProducts(cartProducts.filter((product: ProductType) => product.outOfStockAt === null));
    setOutOfStockProducts(
      cartProducts.filter((product: ProductType) => product.outOfStockAt !== null)
    );
    setCheckedProducts(
      cartProducts.filter((product: ProductType) => product.outOfStockAt === null)
    );
    setTotalPrice(
      cartProducts.reduce((prev, cur) => {
        if (cur.outOfStockAt === null) {
          return prev + cur.price * cur.count;
        } else {
          return prev;
        }
      }, 0)
    );
  }, [cartProducts]);

  const layoutProps: LayoutProps = {
    title: 'Bmart 장바구니',
    headerProps: {
      left: IconType.ARROW_LEFT,
      main: { type: HeaderMainType.TEXT, content: '장바구니' },
    },
  };

  return (
    <Layout title={layoutProps.title} headerProps={layoutProps.headerProps}>
      <CheckListContainer
        cartProducts={cartProducts}
        products={products}
        checkedProducts={checkedProducts}
        setCheckedProducts={setCheckedProducts}
        setCartProducts={setCartProducts}
      />
      <OutOfStockContainer
        products={outOfStockProducts}
        cartProducts={cartProducts}
        setCartProducts={setCartProducts}
      />
      <TotalPriceContainer
        totalPrice={totalPrice}
        deliveryFee={deliveryFee}
        deliveryDiscount={deliveryDiscount}
      />
    </Layout>
  );
};

export default CartPage;
