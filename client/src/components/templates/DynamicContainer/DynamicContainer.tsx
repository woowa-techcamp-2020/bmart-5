import React, { useContext, useState, useEffect } from 'react';
import * as S from './styled';
import ProductCard from '@components/modules/ProductCard';
import { ProductType } from '@pages/index';
import ContainerHeader from '@components/modules/ContainerHeader';
import { Context } from '@commons/Context';
import { FadeIn } from '@animates/index';
import API from '@utils/API';
import { SlidableContainerLimit } from '@utils/constants';
import httpStatus from 'http-status';

type Props = {
  title: string;
};

export const DynamicContainer: React.FC<Props> = ({ title }) => {
  const { likeProducts, setLikeProducts, clickToggle } = useContext(Context);
  const [products, setProducts] = useState<Array<ProductType>>([]);

  useEffect(() => {
    const fetchData = async () => {
      const { result, status } = (await API.get(`/product/hottest/${SlidableContainerLimit}`)).data;
      if (status === httpStatus.OK || status === httpStatus.NOT_MODIFIED) {
        if (products.length !== result.length) {
          setProducts(result);
          return;
        }
        for (let i = 0; i < products.length; i++) {
          if (products[i].id !== result[i].id) {
            setProducts(result);
            return;
          }
        }
      } else {
        console.error(`not defined status code : ${status}`);
      }
    };

    fetchData();
  }, [clickToggle]);

  return (
    <S.DynamicContainer>
      <ContainerHeader>{title}</ContainerHeader>
      <FadeIn>
        <div className="content">
          {products.map((item: ProductType, idx: number) => {
            return (
              <ProductCard
                key={idx}
                item={item}
                likeProducts={likeProducts}
                setLikeProducts={setLikeProducts}
                className={'slide'}
              />
            );
          })}
        </div>
      </FadeIn>
    </S.DynamicContainer>
  );
};
