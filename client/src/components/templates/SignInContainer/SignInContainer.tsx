import React, { useState, MouseEvent, ChangeEvent } from 'react';
import * as S from './styled';
import BottomBtn from '@components/atoms/BottomBtn';
import API from '@utils/API';
import { useRouter } from 'next/router';
import Input from '@components/atoms/Input';
import HttpStatus from 'http-status';
import GoogleLoginBtn from '@components/atoms/GoogleLoginBtn';

type Props = {};

export const SignInContainer: React.FC<Props> = () => {
  const router = useRouter();
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  return (
    <>
      <S.SignInContainer>
        <Input
          value={email}
          type="email"
          name="Email"
          placeholder="example@bmart.com"
          onChange={(e: ChangeEvent) => setEmail((e.target as HTMLInputElement).value)}
        />
        <Input
          value={password}
          type="password"
          name="Password"
          placeholder="password"
          onChange={(e: ChangeEvent) => setPassword((e.target as HTMLInputElement).value)}
        />
      </S.SignInContainer>
      <BottomBtn
        name={'로그인'}
        onClick={async (event: MouseEvent) => {
          event.stopPropagation();
          await API.post(`/auth/email`, {
            email: email,
            password: password,
          }).then(({ status }) => {
            if (status === HttpStatus.OK) {
              console.log(status);
              router.push('/');
            } else {
              alert('로그인에 실패하였습니다.');
              setEmail('');
              setPassword('');
              return;
            }
          });
        }}
      />
      <GoogleLoginBtn />
    </>
  );
};