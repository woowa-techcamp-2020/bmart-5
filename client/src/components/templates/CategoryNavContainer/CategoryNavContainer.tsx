import React, { useRef } from 'react';
import * as S from './styled';
import { useRouter } from 'next/router';

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
  let twoArr: number[] = [];
  const ref = useRef<Array<HTMLDivElement>>([]);
  const router = useRouter();

  const showSubCategory = (index: number) => {
    ref.current.forEach((i) => ((i as HTMLElement).style.background = '#fff'));
    ref.current[index].style.background = '#dfdfdf';
    document
      .querySelectorAll('.show')
      .forEach((i) => (i as HTMLElement).classList.replace('show', 'hide'));
    document
      .querySelectorAll(`.category-${index}`)
      .forEach((i) => (i as HTMLElement).classList.replace('hide', 'show'));
  };

  return (
    <S.CategoryNavContainer>
      <h1 style={{ margin: '2rem' }}>맛있는거</h1>
      <S.NavContainer>
        {categories.map((category, categoryIdx) => {
          twoArr.push(category.id);
          return (
            <>
              <S.Category
                ref={(el: HTMLDivElement) => {
                  ref.current[category.id] = el;
                }}
                onClick={() => showSubCategory(category.id)}
                key={categoryIdx}
              >
                {category.name}
              </S.Category>

              {categoryIdx % 2 === 1 &&
                subCategories
                  .filter(
                    (subcategory) =>
                      twoArr[0] === subcategory.categoryId || twoArr[1] === subcategory.categoryId
                  )
                  .map((subcategory, subCategoryIdx) => {
                    twoArr = [];
                    return (
                      <S.SubCategory
                        className={`category-${subcategory.categoryId} hide`}
                        key={subCategoryIdx}
                        onClick={() => router.push(`sub-categories/${subcategory.id}`)}
                      >
                        {subcategory.name}
                      </S.SubCategory>
                    );
                  })}
            </>
          );
        })}
      </S.NavContainer>
    </S.CategoryNavContainer>
  );
};
