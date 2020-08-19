import React, { useState, MouseEvent } from 'react';
import * as S from './styled';
import { IconType } from '@utils/constants';
import Icon from '@components/atoms/Icon';
import { ProductType } from '@components/modules/SlidableContainer';

type Props = {
  item: ProductType;
  setSelect: Function;
};

export const ProductCard: React.FC<Props> = ({ item, setSelect }) => {
  const [Liked, setLiked] = useState(false);

  const onLikeHandler = (event: MouseEvent) => {
    event.stopPropagation();
    setLiked(!Liked);
  };

  const onItemClickHandler = (item: ProductType) => {
    setSelect(item);
  };

  return (
    <S.ProductCard onClick={() => onItemClickHandler(item)}>
      <S.ProductImg width={200} height={200} src={item.imgUrl}>
        <div onClick={onLikeHandler}>
          {Liked ? (
            <Icon icon={IconType.HEART} size={1.5} />
          ) : (
            <Icon icon={IconType.REG_HEART} size={1.5} />
          )}
        </div>
      </S.ProductImg>
      <div>
        <div className="item-name">{item.name}</div>
        <div className="item-price">{item.price}원</div>
      </div>
    </S.ProductCard>
  );
};
