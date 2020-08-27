import React from 'react';
import * as S from './styled';

type Props = {
  categories: Array<CategoryType>;
};

export type CategoryType = {
  id: number;
  name: string;
};

export const CategoryNavContainer: React.FC<Props> = ({ categories }) => {
  return (
    <S.CategoryNavContainer>
      <h1 style={{ margin: '2rem' }}>맛있는거</h1>
      <S.NavContainer length={categories.length}>
        {categories.map((category, idx) => {
          return <S.Category key={idx}>{category.name}</S.Category>;
        })}
      </S.NavContainer>
    </S.CategoryNavContainer>
  );
};
