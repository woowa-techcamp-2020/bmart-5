import React, { useState, useEffect } from 'react';
import * as S from './styled';
import ProductCard from '../ProductCard';
import ListLoading from '../ListLoading';
import ContainerHeader from '../ContainerHeader';
import API from '@utils/API';
import HttpStatus from 'http-status';
import { LatestProductsLimit } from '@utils/constants';

type ItemType = {
  id: number;
  name: string;
  price: number;
  content: string;
  discount: number;
  outOfStockAt: Date | null;
  subCategoryId: number;
  url: string;
};

type ItemArrType = Array<ItemType>;

type SlidableContainerState = {
  loading: boolean;
  products: ItemArrType;
};

export const SlidableContainer: React.FC = () => {
  const [state, setState] = useState<SlidableContainerState>({
    loading: true,
    products: [],
  });

  useEffect(() => {
    const asyncFetchProducts = async (limit: number) => {
      let { status, result, message } = (await API.get(`/product/latest/${limit}`)).data;
      console.info(message);
      if (status === HttpStatus.OK || status === HttpStatus.NOT_MODIFIED) {
        const coke = require('@assets/images/coke.jpeg'); // result id 값으로 img fetch or sub query로 /product/latest 에서 url 함께 fetch
        const products = [...result].map((product) => {
          product.url = coke;
          return product;
        });
        setState({ loading: false, products: products });
      } else {
        console.error(`not defined status code: ${status}`);
        setState({ loading: false, products: [] });
      }
    };

    setState({ loading: true, products: [] });
    asyncFetchProducts(LatestProductsLimit);
  }, []);

  return (
    <>
      <ContainerHeader>Maeng2418님을 위해 준비한 상품</ContainerHeader>
      <S.SlidableContainer>
        {state.loading ? (
          <ListLoading />
        ) : (
          state.products.map((item) => {
            return (
              <ProductCard
                id={item.id}
                name={item.name}
                price={(item.price * (100 - item.discount)) / 100}
                url={item.url}
              />
            );
          })
        )}
      </S.SlidableContainer>
    </>
  );
};
