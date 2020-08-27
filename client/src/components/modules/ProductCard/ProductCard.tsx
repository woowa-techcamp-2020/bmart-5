import React, { useState, useEffect, useContext, MouseEvent } from 'react';
import * as S from './styled';
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
  const rawPrice = (item.price * (100 + item.discount)) / 100;

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
            {Liked ? <Icon icon={'Heart'} size={3} /> : <Icon icon={'RegHeart'} size={3} />}
          </div>
        </div>
        <S.ProductInfo className={className}>
          <div className="item-name">{item.name}</div>
          <div>
            <S.ProductPriceRow>
              {item.discount !== 0 && (
                <>
                  <span className="sale-rate">{item.discount}%</span>
                  <span className="raw-price">
                    {(Math.ceil(rawPrice / 100) * 100).toLocaleString()}원
                  </span>
                </>
              )}
              <span className="price">{item.price.toLocaleString()}원</span>
              {className === 'sale' && <Icon icon={'Basket'} size={4} />}
            </S.ProductPriceRow>
          </div>
        </S.ProductInfo>
      </S.ProductCard>
    </ScaleIn>
  ) : (
    <></>
  );
};
