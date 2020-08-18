import React from 'react';
import * as S from './styled';
import { ProductDeliveryDesc } from '@utils/constants';
import ContainerHeader from '../ContainerHeader';
import CategoryIcon from '../CategoryIcon';

type Props = {
  categories: Array<CategoryType>;
  earliest: number;
  latest: number;
};

export type CategoryType = {
  id: number;
  name: string;
  orderWeight: string;
  url: string;
};

export const CategoryContainer = (props: Props) => {
  const showMoreIcon = require('@assets/images/more.png');

  const showMoreClickHandler = () => {
    alert('show more');
  };
  const showMoreName = '더보기';

  return (
    <>
      <ContainerHeader>
        {ProductDeliveryDesc({ earliest: props.earliest, latest: props.latest })}
        {' | 24시까지 주문 가능'}
      </ContainerHeader>
      <S.WrapperContainer>
        <S.CategoryContainer>
          {props.categories &&
            props.categories.map((category: CategoryType) => (
              <CategoryIcon
                width={50}
                height={70}
                id={category.id}
                name={category.name}
                url={category.url}
              />
            ))}
          {
            <CategoryIcon
              width={50}
              height={70}
              name={showMoreName}
              url={showMoreIcon}
              onClick={showMoreClickHandler}
            />
          }
        </S.CategoryContainer>
      </S.WrapperContainer>
    </>
  );
};
