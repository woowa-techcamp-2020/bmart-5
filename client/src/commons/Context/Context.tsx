import React, { useState, ReactNode, useEffect } from 'react';
import httpStatus from 'http-status';
import { ProductType } from '@pages/index';
import { ProductType as CartProductType } from '@components/templates/CheckListContainer';
import API from '@utils/API';
import { getCookie } from '@utils/cookie-manager';

type Props = {
  children: ReactNode;
};

type ContextType = {
  select: ProductType | undefined;
  cartProducts: Array<CartProductType>;
  cartId: number | null;
  likeProducts: Array<ProductType>;
  setSelect: Function;
  setCartProducts: Function;
  setCartId: Function;
  setLikeProducts: Function;
};

const defaultValue = {
  select: undefined,
  cartProducts: [],
  cartId: null,
  likeProducts: [],
  setSelect: () => {},
  setCartProducts: () => {},
  setCartId: () => {},
  setLikeProducts: () => {},
};

export const Context = React.createContext<ContextType>(defaultValue);

export const Provider: React.FC<Props> = (props) => {
  const [select, setSelect] = useState<ProductType>();
  const [cartProducts, setCartProducts] = useState<Array<CartProductType>>([]);
  const [cartId, setCartId] = useState<number | null>(null);
  const [likeProducts, setLikeProducts] = useState<Array<ProductType>>([]);

  useEffect(() => {
    const fetchData = async () => {
      const token = getCookie('authorization');

      if (token && cartId === null) {
        const cartId = (await getCartByToken(token)).id;
        setCartId(cartId);
        return;
      }
      if (token !== null) {
        const likeProducts = await likeProductsFetch(token);
        setLikeProducts(likeProducts);
      }
      if (cartId !== null) {
        const cartProducts = await cartProductsFetch(cartId);
        setCartProducts(cartProducts);
      }
    };

    fetchData();
  }, [cartId]);

  return (
    <Context.Provider
      value={{
        select: select,
        setSelect: setSelect,
        cartProducts: cartProducts,
        setCartProducts: setCartProducts,
        cartId: cartId,
        setCartId: setCartId,
        likeProducts: likeProducts,
        setLikeProducts: setLikeProducts,
      }}
    >
      {props.children}
    </Context.Provider>
  );
};

const getCartByToken = async (token: string) => {
  const { message, result, status } = (
    await API.get(`/cart/user/id`, {
      headers: {
        Authorization: `Basic ${token}`,
      },
    })
  ).data;

  console.info(message);
  if (status == httpStatus.OK || status === httpStatus.NOT_MODIFIED) {
    return result;
  } else {
    console.error(`not defined status code: ${status}`);
    return null;
  }
};

const cartProductsFetch = async (cartId: number) => {
  const { message, result, status } = (await API.get(`/cart/${cartId}`)).data;

  console.info(message);
  if (status === httpStatus.OK || status === httpStatus.NOT_MODIFIED) {
    return [...result].map((item) => {
      return {
        id: item.id,
        name: item.product.name,
        price: item.product.price,
        discount: item.product.discount,
        count: item.count,
        imgUrl: item.product.imgUrl,
        outOfStockAt: item.product.outOfStockAt,
      };
    });
  } else {
    console.error(`not defined status code: ${status}`);
    return [];
  }
};

const likeProductsFetch = async (token: string) => {
  const { message, result, status } = (
    await API.get(`/like`, {
      headers: {
        Authorization: `Basic ${token}`,
      },
    })
  ).data;

  console.info(message);
  if (status === httpStatus.OK || status === httpStatus.NOT_MODIFIED) {
    return [...result].map((item) => {
      return {
        id: item.product.id,
        name: item.product.name,
        price: item.product.price,
        imgUrl: item.product.imgUrl,
        content: item.product.content,
        discount: item.product.discount,
        outOfStockAt: item.product.outOfStockAt,
        subCategoryId: item.product.subCategoryId,
      };
    });
  } else {
    console.error(`not defined status code: ${status}`);
    return [];
  }
};
