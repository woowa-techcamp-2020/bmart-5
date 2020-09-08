import React from 'react';
import * as S from './styled';
import itemFilter from '@utils/item-filter';
import { ProductType } from '@pages/index';
import { FilterType } from '@utils/constants';

type Props = {
  items: Array<ProductType>;
  setItems: Function;
};

export const FilterSelect: React.FC<Props> = (props) => {
  return (
    <S.FilterSelect
      onChange={async (event) => {
        const filteredItems = await itemFilter({
          type: event.target.value as FilterType,
          items: props.items,
        });
        props.setItems(filteredItems);
      }}
      defaultValue={FilterType.DEFAULT}
    >
      <option value={FilterType.DEFAULT}>{FilterType.DEFAULT}</option>
      <option value={FilterType.POPULAR}>{FilterType.POPULAR}</option>
      <option value={FilterType.PRICE_HIGH}>{FilterType.PRICE_HIGH}</option>
      <option value={FilterType.PRICE_LOW}>{FilterType.PRICE_LOW}</option>
      <option value={FilterType.RECENTLY}>{FilterType.RECENTLY}</option>
      <option value={FilterType.DISCOUNTED}>{FilterType.DISCOUNTED}</option>
    </S.FilterSelect>
  );
};
