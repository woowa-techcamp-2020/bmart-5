import React, { useState, MouseEvent, ChangeEvent } from 'react';
import * as S from './styled';
import BottomBtn from '@components/atoms/BottomBtn';
import API from '@utils/API';
import { useRouter } from 'next/router';
import Input from '@components/atoms/Input';

type Props = {};

export const SignUpContainer: React.FC<Props> = () => {
  const router = useRouter();
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  return (
    <>
      <S.SignUpContainer>
        <Input
          value={name}
          type="text"
          name="Name"
          placeholder="홍길동"
          onChange={(e: ChangeEvent) => setName((e.target as HTMLInputElement).value)}
        />
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