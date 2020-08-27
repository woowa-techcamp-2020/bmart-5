import React from 'react';
import * as S from './styled';
import { deleteCookie } from '@utils/cookie-manager';
import { useRouter } from 'next/router';
import { IconType } from '@utils/constants';
import LinkBox from '@components/atoms/LinkBox';

type Props = {};

export const LogOut: React.FC<Props> = (props) => {
  const router = useRouter();
  const signOutHandler = () => {
    deleteCookie('authorization');
    router.push('/');
  };
  return (
    <S.LogOut onClick={signOutHandler}>
      <LinkBox url="/signin" name="로그아웃" icon={IconType.VSCSIGNOUT} />
    </S.LogOut>
  );
};