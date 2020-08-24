import React, { useState, MouseEvent, ChangeEvent } from 'react';
import * as S from './styled';
import BottomBtn from '@components/atoms/BottomBtn';
import API from '@utils/API';
import HttpStatus from 'http-status';
import { useRouter } from 'next/router';
import Input from '@components/atoms/Input';

type Props = {};

export const SignUpContainer: React.FC<Props> = (props) => {
  const router = useRouter();
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  return (
    <>
      <S.SignUpContainer>
        <Input
          htmlFor="name"
          value="Name"
          type="text"
          name="name"
          placeholder="홍길동"
          onChange={(e: ChangeEvent) => setName((e.target as HTMLInputElement).value)}
        />
        <Input
          htmlFor="email"
          value="Email"
          type="email"
          name="email"
          placeholder="example@bmart.com"
          onChange={(e: ChangeEvent) => setEmail((e.target as HTMLInputElement).value)}
        />
        <Input
          htmlFor="password"
          value="Password"
          type="password"
          name="password"
          placeholder="password"
          onChange={(e: ChangeEvent) => setPassword((e.target as HTMLInputElement).value)}
        />
      </S.SignUpContainer>
      <BottomBtn
        name={'회원가입'}
        onClick={async (event: MouseEvent) => {
          event.stopPropagation();
          await API.post(`/auth/email/signup`, {
            username: name,
            email: email,
            password: password,
          }).then(() => router.push('/'));
        }}
      />
    </>
  );
};
