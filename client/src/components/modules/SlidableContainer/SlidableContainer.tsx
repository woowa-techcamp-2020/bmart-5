import React from 'react';
import * as S from './style';
import ProductCard from '../ProductCard';
import ContainerHeader from '../ContainerHeader';

type ItemType = {
  name: string;
  price: number;
};

type ItemArrType = Array<ItemType>;

export const SlidableContainer: React.FC = () => {

	const coke: ItemType = { name: '콜라 355ml', price: 3000 };
	const itemArr: ItemArrType = [];

	for (let i = 0; i<100; i++) {
		itemArr[i] = coke;
	}

  return (
    <>
      <ContainerHeader>Maeng2418님을 위해 준비한 상품</ContainerHeader>
      <S.SlidableContainer>
        {itemArr.map((item) => {
          return <ProductCard name={item.name} price={item.price} />;
        })}
      </S.SlidableContainer>
    </>
  );
};
