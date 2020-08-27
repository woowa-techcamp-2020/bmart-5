import React, { useState, MouseEvent, ChangeEvent, useContext } from 'react';
import * as S from './styled';
import BottomBtn from '@components/atoms/BottomBtn';
import API from '@utils/API';
import { useRouter } from 'next/router';
import Input from '@components/atoms/Input';
import validateCheck from '@utils/validate';
import { setCookie, getCookie } from '@utils/cookie-manager';
import httpStatus from 'http-status';
import { Context } from '@commons/Context';

type Props = {};

export const SignUpContainer: React.FC<Props> = () => {
  const router = useRouter();
  const { setCartId } = useContext(Context);
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [nameMsg, setNameMsg] = useState<string | undefined>(undefined);
  const [emailMsg, setEmailMsg] = useState<string | undefined>(undefined);
  const [passwordMsg, setPasswordMsg] = useState<string | undefined>(undefined);

  return (
    <>
      <S.SignUpContainer>
        <Input
          value={name}
          type="text"
          name="Name"
          placeholder="홍길동"
          onChange={(e: ChangeEvent) => setName((e.target as HTMLInputElement).value)}
          message={nameMsg}
        />
        <Input
          value={email}
          type="email"
          name="Email"
          placeholder="example@bmart.com"
          onChange={(e: ChangeEvent) => setEmail((e.target as HTMLInputElement).value)}
          message={emailMsg}
        />
        <Input
          value={password}
          type="password"
          name="Password"
          placeholder="password"
          onChange={(e: ChangeEvent) => setPassword((e.target as HTMLInputElement).value)}
          message={passwordMsg}
        />
      </S.SignUpContainer>
      <S.ButtonContainer>
        <BottomBtn
          name={'회원가입'}
          onClick={async (event: MouseEvent) => {
            event.stopPropagation();
            setNameMsg(validateCheck({ type: 'name', value: name }));
            setEmailMsg(validateCheck({ type: 'email', value: email }));
            setPasswordMsg(validateCheck({ type: 'password', value: password }));
            if (nameMsg === undefined && emailMsg === undefined && passwordMsg === undefined) {
              const { result, message, status } = (
                await API.post(`/auth/email/signup`, {
                  username: name,
                  email: email,
                  password: password,
                })
              ).data;

              console.info(message);
              if (status === httpStatus.CREATED || status === httpStatus.NOT_MODIFIED) {
                setCookie('authorization', result.token, result.expires);
                setCartId(
                  (
                    await API.get(`/cart/user/id`, {
                      headers: {
                        Authorization: `Basic ${getCookie('authorization')}`,
                      },
                    })
                  ).data.result.id
                );
                router.push('/');
              } else {
                console.error(`${status}: ${result}`);
                alert('회원가입에 실패하였습니다.');
              }
            }
          }}
        />
      </S.ButtonContainer>
    </>
  );
};
