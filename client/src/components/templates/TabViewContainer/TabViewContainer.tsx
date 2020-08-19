import React from 'react';
import * as S from './styled';
import ContainerHeader from '@components/modules/ContainerHeader';

type Props = {};

export const TabViewContainer: React.FC<Props> = (props) => {
  return (
    <S.TabViewContainer>
      <ContainerHeader moreBtn>지금사면 ⚡️번쩍할인</ContainerHeader>
    </S.TabViewContainer>
  );
};
