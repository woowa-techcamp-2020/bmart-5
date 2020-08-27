import React from 'react';
import { useRouter } from 'next/router';
import * as S from './styled';
import { ProductDeliveryDesc } from '@utils/constants';
import ContainerHeader from '@components/modules/ContainerHeader';
import CategoryIcon from '@components/modules/CategoryIcon';
import { FadeIn } from '@animates/index';

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
  const router = useRouter();
  const showMoreClickHandler = () => {
    router.push('/menu');
  };
  const showMoreName = '더보기';

  return (
    <S.WrapperContainer>
      <ContainerHeader>
        {ProductDeliveryDesc({ earliest: props.earliest, latest: props.latest })}
        {' | 24시까지 주문 가능'}
      </ContainerHeader>
      <FadeIn>
        <S.CategoryContainer>
          {props.categories &&
            props.categories.map((category: CategoryType, idx: number) => (
              <CategoryIcon
                key={idx}
                width={8}
                height={10}
                id={category.id}
                name={category.name}
                url={category.url}
                onClick={() => router.replace(`/categories/${category.id}`)}
              />
            ))}
          {
            <CategoryIcon
              width={7.5}
              height={10}
              name={showMoreName}
              url={'/assets/images/categories/more.png'}
              onClick={showMoreClickHandler}
            />
          }
        </S.CategoryContainer>
      </FadeIn>
    </S.WrapperContainer>
  );
};
