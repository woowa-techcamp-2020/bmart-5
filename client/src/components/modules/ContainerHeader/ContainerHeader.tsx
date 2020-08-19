import React, { ReactNode } from 'react';
import * as S from './styled';
import SubButton from '@components/atoms/SubButton';

type Props = {
  children?: ReactNode;
  moreBtn?: boolean;
};

export const ContainerHeader: React.FC<Props> = ({ children, moreBtn }) => {
  return (
    <S.ContainerHeader>
      {children}
      {moreBtn && <SubButton withArrow color="#2CC0BD" label="더보기" />}
    </S.ContainerHeader>
  );
};
