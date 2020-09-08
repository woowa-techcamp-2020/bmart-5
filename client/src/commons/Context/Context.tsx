import React, { useState, ReactNode, useEffect } from 'react';
import httpStatus from 'http-status';
import { ProductType } from '@pages/index';
import { ProductType as CartProductType } from '@components/templates/CheckListContainer';
import API from '@utils/API';
import { getCookie } from '@utils/cookie-manager';

type Props = {
  children: ReactNode;
};

export type TokenUser = {
  id: number;
  username: string;
  email: string;
  isAdmin: boolean;
};

type ContextType = {
  select: ProductType | undefined;
  cartProducts: Array<CartProductType>;
  cartId: number | null;
  likeProducts: Array<ProductType>;
  user: TokenUser | null;
  token: string | null;
  clickToggle: boolean;
  setSelect: Function;
  setCartProducts: Function;
  setCartId: Function;
  setLikeProducts: Function;
  setUser: Function;
  setToken: Function;
  setClickToggle: Function;
};

const defaultValue = {
  select: undefined,
  cartProducts: [],
  cartId: null,
  likeProducts: [],
  user: null,
  token: null,
  clickToggle: false,
  setSelect: () => {},
  setCartProducts: () => {},
  setCartId: () => {},
  setLikeProducts: () => {},
  setUser: () => {},
  setToken: () => {},
  setClickToggle: () => {},
};

export const Context = React.createContext<ContextType>(defaultValue);

export const Provider: React.FC<Props> = (props) => {
  const [select, setSelect] = useState<ProductType>();
  const [cartProducts, setCartProducts] = useState<Array<CartProductType>>([]);
  const [cartId, setCartId] = useState<number | null>(null);
  const [likeProducts, setLikeProducts] = useState<Array<ProductType>>([]);
  const [user, setUser] = useState<TokenUser | null>(null);
  const [token, setToken] = useState<string | null>(null);
  const [clickToggle, setClickToggle] = useState<boolean>(false);

  useEffect(() => {
    const fetchData = async () => {
      const newToken = getCookie('authorization');
      if (token !== newToken) {
        setToken(newToken);
        const newUser = await getUserByToken(newToken);
        setUser(newUser);
      }

      if (newToken && cartId === null) {
        const cartId = (await getCartByToken(newToken)).id;
        setCartId(cartId);
        return;
      }
      if (newToken !== null) {
        const likeProducts = await likeProductsFetch(newToken);
        setLikeProducts(likeProducts);
      }
      if (cartId !== null) {
        const cartProducts = await cartProductsFetch(cartId);
        setCartProducts(cartProducts);
      }
      if (cartId === null && token === null && cartProducts.length > 0) {
        setCartProducts([]);
      }
    };

    fetchData();
  }, [cartId]);

  return (
    <Context.Provider
      value={{
        select: select,
        cartProducts: cartProducts,
        cartId: cartId,
        likeProducts: likeProducts,
        user: user,
        token: token,
        clickToggle: clickToggle,
        setSelect: setSelect,
        setCartProducts: setCartProducts,
        setCartId: setCartId,
        setLikeProducts: setLikeProducts,
        setUser: setUser,
        setToken: setToken,
        setClickToggle: setClickToggle,
      }}
    >
      {props.children}
    </Context.Provider>
  );
};

const getUserByToken = async (token: string | null): Promise<TokenUser | null> => {
  if (token === null) return null;
  const { message, result, status } = (
    await API.get(`/auth`, {
      headers: {
        Authorization: `Basic ${token}`,
      },
    })
  ).data;

  console.info(message);
  if (status === httpStatus.OK || status === httpStatus.NOT_MODIFIED) {
    return result;
  } else {
    console.error(`not defined status code: ${status}`);
    return null;
  }
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
  if (status === httpStatus.OK || status === httpStatus.NOT_MODIFIED) {
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
        clicks: item.product.clicks,
        createdAt: item.product.createdAt,
      };
    });
  } else {
    console.error(`not defined status code: ${status}`);
    return [];
  }
};
