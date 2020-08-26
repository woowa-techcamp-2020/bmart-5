import React, { useState, useEffect, useContext, MouseEvent } from 'react';
import * as S from './styled';
import { IconType, userId } from '@utils/constants';
import Icon from '@components/atoms/Icon';
import Badge from '@components/atoms/Badge';
import { ProductType } from '@pages/index';
import { Context } from '@commons/Context';
import API from '@utils/API';

type Props = {
  item: ProductType;
  initLike: boolean;
  likeProducts: Array<ProductType>;
  setLikeProducts: Function;
  className: 'slide' | 'grid' | 'main' | 'sale';
};

export const ProductCard: React.FC<Props> = ({
  item,
  initLike,
  likeProducts,
  setLikeProducts,
  className,
}) => {
  const [Liked, setLiked] = useState<boolean>(false);
  const setSelect = useContext(Context).setSelect;

  useEffect(() => {
    initLike && setLiked(initLike);
  }, [initLike]);

  const onLikeHandler = async (event: MouseEvent) => {
    event.stopPropagation();
    if (!Liked) {
      await API.post(`/like`, { userId: userId, productId: item.id });
      setLikeProducts({ ...likeProducts, item });
    } else {
      await API.delete(`/like/${userId}/${item.id}`);
      setLikeProducts(likeProducts.filter((product) => product.id !== item.id));
    }
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
            <Icon icon={IconType.HEART} size={3} />
          ) : (
            <Icon icon={IconType.REG_HEART} size={3} />
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
