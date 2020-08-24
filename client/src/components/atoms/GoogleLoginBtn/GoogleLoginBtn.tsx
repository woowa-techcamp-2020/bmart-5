import React from 'react';
import * as S from './styled';
import { baseURL } from '@utils/constants';

type Props = {};

export const GoogleLoginBtn: React.FC<Props> = () => {
  return (
    <a href={`${baseURL}/auth/google`}>
      <S.GoogleLoginBtn>Sign In with Google</S.GoogleLoginBtn>
    </a>
  );
};
