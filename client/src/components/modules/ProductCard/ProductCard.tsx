import React, { useState, useEffect, useContext, MouseEvent } from 'react';
import * as S from './styled';
import { IconType } from '@utils/constants';
import Icon from '@components/atoms/Icon';
import Badge from '@components/atoms/Badge';
import { ProductType } from '@pages/index';
import { Context } from '@commons/Context';
import API from '@utils/API';
import { getCookie } from '@utils/cookie-manager';
import { useRouter } from 'next/router';
import { ScaleIn } from '@animates/index';

type Props = {
  item: ProductType;
  likeProducts: Array<ProductType>;
  setLikeProducts: Function;
  className: 'slide' | 'grid' | 'main' | 'sale';
};

export const ProductCard: React.FC<Props> = ({
  item,
  likeProducts,
  setLikeProducts,
  className,
}) => {
  const [Liked, setLiked] = useState<boolean>(false);
  const setSelect = useContext(Context).setSelect;
  const token = getCookie('authorization');
  const router = useRouter();

  useEffect(() => {
    if (likeProducts.length) {
      const isLiked =
        likeProducts.filter((product) => product.id === item.id).length > 0 ? true : false;
      if (isLiked !== Liked) setLiked(isLiked);
    }
  }, [likeProducts, item]);

  const onLikeHandler = async (event: MouseEvent) => {
    event.stopPropagation();
    if (!token) {
      confirm('로그인 하시겠습니까?') ? router.push('/signin') : false;
      return;
    }

    if (!Liked) {
      await API.post(
        `/like`,
        { productId: item.id },
        {
          headers: {
            Authorization: `Basic ${token}`,
          },
        }
      );
      setLikeProducts([...likeProducts, item]);
    } else {
      await API.delete(`/like/${item.id}`, {
        headers: {
          Authorization: `Basic ${token}`,
        },
      });
      setLikeProducts(likeProducts.filter((product) => product.id !== item.id));
    }
    setLiked(!Liked);
  };

  const onItemClickHandler = (item: ProductType) => {
    setSelect(item);
  };

  return item ? (
    <ScaleIn>
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
    </ScaleIn>
  ) : (
    <></>
  );
};
