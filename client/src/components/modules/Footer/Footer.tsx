import React, { useContext } from 'react';
import * as S from './styled';
import { CALL_NUMBER, SERVICE_EMAIL } from '@utils/constants';
import { Context } from '@commons/Context';

export const Footer = () => {
  const { user } = useContext(Context);
  return (
    <S.Footer>
      {user && (
        <S.ButtonContainer>
          <S.Button>반품·교환하기</S.Button>
        </S.ButtonContainer>
      )}
      <S.FooterContent>
        <S.Row>
          <span>고객센터 오전 9시 ~ 새벽 3시</span> | <span>{CALL_NUMBER}</span>
        </S.Row>
        <S.Row>
          <span>제휴문의</span> | <span>{SERVICE_EMAIL}</span>
        </S.Row>
      </S.FooterContent>
    </S.Footer>
  );
};
