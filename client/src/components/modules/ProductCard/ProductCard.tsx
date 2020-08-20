import React, { useState, MouseEvent } from 'react';
import * as S from './styled';
import { IconType } from '@utils/constants';
import Icon from '@components/atoms/Icon';
import Badge from '@components/atoms/Badge';

type Props = {
  id: number;
  name: string;
  price: number;
  rate: number;
  url: string;
  className: 'slide' | 'grid' | 'main' | 'sale';
};

export const ProductCard: React.FC<Props> = ({ id, name, price, url, rate, className }) => {
  const [Liked, setLiked] = useState(false);

  const onLikeHandler = (event: MouseEvent) => {
    event.stopPropagation();
    setLiked(!Liked);
  };

  const onItemClickHandler = () => {
    alert(`clicked ${name}(${id}) item`);
  };

  return (
    <S.ProductCard className={className} onClick={onItemClickHandler}>
      <div className="image-container">
        <S.ProductImg src={url} />
        {className === 'sale' && (
          <div className="sale-badge">
            <Badge rate={rate} />
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
        <div className="item-name">{name}</div>
        <div className="price-row">
          <div className="item-price">{price}원</div>
          {className === 'sale' && <Icon icon={IconType.BASKET} size={1.5} />}
        </div>
      </S.ProductInfo>
    </S.ProductCard>
  );
};
