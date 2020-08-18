import React, { useState, MouseEvent } from 'react';
import * as S from './styled';
import { IconType } from '@utils/constants';
import Icon from '@components/atoms/Icon';

type Props = {
  id: number;
  name: string;
  price: number;
  url: string;
};

export const ProductCard: React.FC<Props> = ({ id, name, price, url }) => {
  const [Liked, setLiked] = useState(false);

  const onLikeHandler = (event: MouseEvent) => {
    event.stopPropagation();
    setLiked(!Liked);
  };

  const onItemClickHandler = () => {
    alert(`clicked ${name}(${id}) item`);
  };

  return (
    <S.ProductCard onClick={onItemClickHandler}>
      <S.ProductImg width={200} height={200} src={url}>
        <div onClick={onLikeHandler}>
          {Liked ? (
            <Icon icon={IconType.HEART} size={1.5} />
          ) : (
            <Icon icon={IconType.REG_HEART} size={1.5} />
          )}
        </div>
      </S.ProductImg>
      <div>
        <div className="item-name">{name}</div>
        <div className="item-price">{price}원</div>
      </div>
    </S.ProductCard>
  );
};
