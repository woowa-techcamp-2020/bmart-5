import React, { useState, useEffect, useContext } from 'react';
import * as S from './styled';
import Icon from '@components/atoms/Icon';
import ProductCard from '@components/modules/ProductCard';
import { ProductType } from '@pages/index';
import ContainerHeader from '@components/modules/ContainerHeader';
import { Context } from '@commons/Context';
import API from '@utils/API';
import HttpStatus from 'http-status';
import {
  FetchableContainerLimit,
  WhatEatNowSubCategoryId,
  NowNeedNecessarySubCategoryId,
} from '@utils/constants';

type Props = {
  title: string;
};

export const FetchableContainer: React.FC<Props> = ({ title }) => {
  const { likeProducts, setLikeProducts } = useContext(Context);
  const [products, setProducts] = useState<Array<ProductType>>([]);
  const subCategoryId =
    title === '지금 뭐 먹지?' ? WhatEatNowSubCategoryId : NowNeedNecessarySubCategoryId;

  useEffect(() => {
    const fetchData = async () => {
      setProducts(await fetchableContainerFetch(subCategoryId));
    };

    fetchData();
  }, []);

  const onFetchButtonClickHandler = async () => {
    setProducts(await fetchableContainerFetch(subCategoryId));
  };

  return (
    <S.FetchableContainer>
      <ContainerHeader>{title}</ContainerHeader>
      <div className="wrapper">
        <div className="content">
          {products.map((item: ProductType, idx: number) => {
            return (
              <ProductCard
                key={idx}
                item={item}
                likeProducts={likeProducts}
                setLikeProducts={setLikeProducts}
                className={'grid'}
              />
            );
          })}
        </div>
        <div className="fetch-button" onClick={onFetchButtonClickHandler}>
          <Icon icon={'Refresh'} size={2} />
          <span className="title">{title}</span>
          <span>다른 상품 보기 </span>
        </div>
      </div>
    </S.FetchableContainer>
  );
};

const fetchableContainerFetch = async (categoryId: number): Promise<Array<ProductType>> => {
  let { status, message, result } = (
    await API.get(`/product/sub/${categoryId}/${FetchableContainerLimit}`)
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
