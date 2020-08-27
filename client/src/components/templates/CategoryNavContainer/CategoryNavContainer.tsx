import React, { useRef } from 'react';
import * as S from './styled';

type Props = {
  categories: Array<CategoryType>;
  subCategories: Array<SubCategoryType>;
};

export type CategoryType = {
  id: number;
  name: string;
};

type SubCategoryType = {
  id: number;
  name: string;
  orderWeight: number;
  categoryId: number;
};

export const CategoryNavContainer: React.FC<Props> = ({ categories, subCategories }) => {
  const ref = useRef<Array<HTMLDivElement>>([]);
  return (
    <S.CategoryNavContainer>
      <h1 style={{ margin: '2rem' }}>맛있는거</h1>
      <S.NavContainer length={categories.length}>
        {categories.map((category, idx) => {
          return (
            <>
              <S.Category key={idx} style={{ color: 'red' }}>
                {category.name}
              </S.Category>
              {subCategories
                .filter((subcategory) => category.id === subcategory.categoryId)
                .map((subcategory, idx) => {
                  return <S.Category key={idx}>{subcategory.name}</S.Category>;
                })}
            </>
          );
        })}
      </S.NavContainer>
    </S.CategoryNavContainer>
  );
};
