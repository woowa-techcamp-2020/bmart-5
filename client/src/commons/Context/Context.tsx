import React, { useState, ReactNode, useEffect } from 'react';
import httpStatus from 'http-status';
import { ProductType } from '@pages/index';
import { ProductType as CartProductType } from '@components/templates/CheckListContainer';
import API from '@utils/API';
import { userId } from '@utils/constants';

type Props = {
  children: ReactNode;
};

type UserType = {
  cart: Array<CartProductType>;
  setCart: Function;
};

type ContextType = {
  select: ProductType | undefined;
  setSelect: Function;
  cartProducts: Array<CartProductType>;
  setCartProducts: Function;
  cartId: number | null;
  setCartId: Function;
  user: UserType | null;
  setUser: Function;
  likeProducts: Array<ProductType>;
  setLikeProducts: Function;
};

const defaultValue = {
  select: undefined,
  setSelect: () => {},
  cartProducts: [],
  setCartProducts: () => {},
  cartId: null,
  setCartId: () => {},
  user: null,
  setUser: () => {},
  likeProducts: [],
  setLikeProducts: () => {},
};

export const Context = React.createContext<ContextType>(defaultValue);

export const Provider: React.FC<Props> = (props) => {
  const [select, setSelect] = useState<ProductType>();
  const [cartProducts, setCartProducts] = useState<Array<CartProductType>>([]);
  const [user, setUser] = useState<UserType | null>(null);

  /**
   * TODO: user token으로 부터 cartId 초기화 해야함
   * */
  const [cartId, setCartId] = useState<number | null>(1);
  const [likeProducts, setLikeProducts] = useState<Array<ProductType>>([]);

  useEffect(() => {
    const fetchData = async () => {
      if (cartId !== null) {
        const cartProducts = await cartProductsFetch(cartId);
        setCartProducts(cartProducts);
      }
      if (userId !== null) {
        const likeProducts = await likeProductsFetch(userId);
        setLikeProducts(likeProducts);
      }
    };

    fetchData();
  }, [cartId, userId]);

  return (
    <Context.Provider
      value={{
        select: select,
        setSelect: setSelect,
        cartProducts: cartProducts,
        setCartProducts: setCartProducts,
        cartId: cartId,
        setCartId: setCartId,
        user: user,
        setUser: setUser,
        likeProducts: likeProducts,
        setLikeProducts: setLikeProducts,
      }}
    >
      {props.children}
    </Context.Provider>
  );
};

// const getCartByUserId = async (userId: number) => {
//   const { message, result, status } = (await API.get(`/cart/user/${userId}`)).data;

//   console.info(message);
//   if (status == httpStatus.OK || status === httpStatus.NOT_MODIFIED) {
//     return result;
//   } else {
//     console.error(`not defined status code: ${status}`);
//     return null;
//   }
// };

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

const likeProductsFetch = async (userId: number) => {
  const { message, result, status } = (await API.get(`/like/${userId}`)).data;

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
        isLiked: true,
      };
    });
  } else {
    console.error(`not defined status code: ${status}`);
    return [];
  }
};
