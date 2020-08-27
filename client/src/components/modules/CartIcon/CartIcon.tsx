import React, { useContext } from 'react';
import * as S from './styled';
import Icon from '@components/atoms/Icon';
import { useRouter } from 'next/router';
import { getCookie } from '@utils/cookie-manager';
import { Context } from '@commons/Context';

type Props = {};

export const CartIcon: React.FC<Props> = () => {
  const { cartProducts } = useContext(Context);
  const router = useRouter();
  const token = getCookie('authorization');
  const onCartIconClickHandler = () => {
    if (!token) {
      confirm('로그인 하시겠습니까?') ? router.push('/signin') : false;
      return;
    }
    router.push('/cart');
  };

  return (
    <S.CartIcon onClick={onCartIconClickHandler}>
      <Icon icon={'Basket'} size={5}></Icon>
      <S.Badge>{cartProducts.reduce((prev, cur) => prev + cur.count, 0)}</S.Badge>
    </S.CartIcon>
  );
};
