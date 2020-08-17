import React, { useState, useEffect } from 'react';
import * as S from './styled';
import { ProductDeliveryDesc, OrderedCategoriesLimit } from '@utils/constants';
import API from '@utils/API';
import ContainerHeader from '../ContainerHeader';
import CategoryIcon from '../CategoryIcon';
import HttpStatus from 'http-status';

type Props = {
  data: dataType;
};

type dataType = {
  earliest: number;
  latest: number;
};

type CategoryType = {
  id: number;
  name: string;
  url: string;
};

type CategoryContainerState = {
  categories: Array<CategoryType>;
};

export const CategoryContainer: React.FC<Props> = ({ data }) => {
  const [state, setState] = useState<CategoryContainerState>({
    categories: [],
  });

  useEffect(() => {
    const asyncFetchCategories = async (limit: number) => {
      let { status, result, message } = (await API.get(`/category/${limit}`)).data;
      console.info(message);
      if (status === HttpStatus.OK || status === HttpStatus.NOT_MODIFIED) {
        const categories = [...result].map((category) => {
          category.url = require(`@assets/images/main-${category.name}.png`);
          return category;
        });
        setState({ categories: categories });
      } else {
        console.error(`not defined status code: ${status}`);
        setState({ categories: [] });
      }
    };

    asyncFetchCategories(OrderedCategoriesLimit);
  }, []);

  const showMoreIcon = require('@assets/images/more.png');

  const showMoreClickHandler = () => {
    alert('show more');
  };
  const showMoreName = '더보기';

  return (
    <>
      <ContainerHeader>
        {ProductDeliveryDesc({ earliest: data.earliest, latest: data.latest })}
        {' | 24시까지 주문 가능'}
      </ContainerHeader>
      <S.WrapperContainer>
        <S.CategoryContainer>
          {state.categories.map((category) => (
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
