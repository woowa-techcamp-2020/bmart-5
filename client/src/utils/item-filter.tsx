import { FilterType } from './constants';
import { ProductType } from '@pages/index';

const itemFilter = ({ type, items }: { type: FilterType; items: Array<ProductType> }) =>
  new Promise((resolve, reject) => {
    let filteredItems = [] as Array<ProductType>;
    try {
      switch (type) {
        case FilterType.DEFAULT:
          filteredItems = [...items.sort((a, b) => b.id - a.id)];
          break;
        case FilterType.POPULAR:
          filteredItems = [...items.sort((a, b) => b.clicks - a.clicks)];
          break;
        case FilterType.DISCOUNTED:
          filteredItems = [...items.sort((a, b) => b.discount - a.discount)];
          break;
        case FilterType.PRICE_HIGH:
          filteredItems = [...items.sort((a, b) => b.price - a.price)];
          break;
        case FilterType.PRICE_LOW:
          filteredItems = [...items.sort((a, b) => a.price - b.price)];
          break;
        case FilterType.RECENTLY:
          filteredItems = [...items.sort((a, b) => b.id - a.id)];
          break;
        default:
          throw new Error(`not defined FilterType: ${type}`);
      }

      resolve(filteredItems);
    } catch (err) {
      reject(err);
    }
  });

export default itemFilter;
