import React, { useState } from 'react';
import * as S from './styled';
import { IconType } from '@utils/constants';
import Icon from '@components/atoms/Icon';

type Props = {
  name: string;
  price: number;
};

export const ProductCard: React.FC<Props> = ({ name, price }) => {
  const [Liked, setLiked] = useState(false);

  const onLikeHandler = () => {
    setLiked(!Liked);
  };

  return (
    <S.ProductCard>
      <S.ProductImg width={200} height={200} src={require('../../../assets/images/coke.jpeg')}>
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
