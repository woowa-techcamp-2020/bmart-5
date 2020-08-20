import React, { useState, MouseEvent } from 'react';
import * as S from './styled';
import { IconType } from '@utils/constants';
import Icon from '@components/atoms/Icon';
import Badge from '@components/atoms/Badge';
import { ProductType } from '@components/templates/SlidableContainer';

type Props = {
  item: ProductType;
  setSelect: Function;
  className?: 'slide' | 'grid' | 'main' | 'sale';
};

export const ProductCard: React.FC<Props> = ({ item, setSelect, className }) => {
  const [Liked, setLiked] = useState(false);

  const onLikeHandler = (event: MouseEvent) => {
    event.stopPropagation();
    setLiked(!Liked);
  };

  const onItemClickHandler = (item: ProductType) => {
    setSelect(item);
  };

  return item ? (
    <S.ProductCard className={className} onClick={() => onItemClickHandler(item)}>
      <div className="image-container">
        <S.ProductImg src={item.imgUrl} />
        {className === 'sale' && (
          <div className="sale-badge">
            <Badge rate={item.discount} />
          </div>
        )}
        <div className="like-icon" onClick={onLikeHandler}>
          {Liked ? (
            <Icon icon={IconType.HEART} size={1.5} />
          ) : (
            <Icon icon={IconType.REG_HEART} size={1.5} />
          )}
        </div>
      </div>
      <S.ProductInfo>
        <div className="item-name">{item.name}</div>
        <div className="price-row">
          <div className="item-price">{item.price}원</div>
          {className === 'sale' && <Icon icon={IconType.BASKET} size={1.5} />}
        </div>
      </S.ProductInfo>
    </S.ProductCard>
  ) : (
    <></>
  );
};
