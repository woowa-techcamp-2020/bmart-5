import React from 'react';
import * as S from './styled';
import { SubCategoryType } from '@pages/index';
import { useRouter } from 'next/router';

type Props = {
  subCategories: Array<SubCategoryType>;
};

export type CategoryType = {
  id: number;
  name: string;
};

export const SubCategoryNavContainer: React.FC<Props> = ({ subCategories }) => {
  const router = useRouter();
  return (
    <S.SubCategoryNavContainer>
      <div className="wrapper">
        {subCategories.map((subCategory) => {
          return (
            <S.SubCategory
              key={`sub-category-nav-${subCategory.id}`}
              onClick={() => router.push(`/sub-categories/${subCategory.id}`)}
            >
              {subCategory.name}
            </S.SubCategory>
          );
        })}
      </div>
    </S.SubCategoryNavContainer>
  );
};
