import React from 'react';
import * as S from './styled';
import { deleteCookie } from '@utils/cookie-manager';
import { useRouter } from 'next/router';
import LinkBox from '@components/atoms/LinkBox';

type Props = {
  setToken: Function;
  setUser: Function;
};

export const LogOut: React.FC<Props> = (props) => {
  const router = useRouter();
  const signOutHandler = () => {
    deleteCookie('authorization');
    props.setToken(null);
    props.setUser(null);
    router.push('/');
  };
  return (
    <S.LogOutContainer>
      <S.LogOut onClick={signOutHandler}>
         <LinkBox url="/signin" name="로그아웃" icon={'VscSignOut'} />
      </S.LogOut>
    </S.LogOutContainer>
  );
};
